import { createFetchSend, createMetricsClient } from "./otlp-metrics";
import type { MetricsClient } from "./otlp-metrics";

/**
 * OTLP/HTTP JSON collector endpoint for WebMCP tool-call telemetry.
 */
const OTLP_METRICS_ENDPOINT = "https://otlp-http-production.shopifysvc.com/v1/metrics";

/** OpenTelemetry `service.name` for WebMCP tool-call telemetry. */
const SERVICE_NAME = "storefront_webmcp";

// Replaced at build time: tsdown defines `__DEV__` as `false`, vitest as `true`.
declare const __DEV__: boolean | undefined;

/** True only in the built production CDN bundle. */
const IS_PRODUCTION_BUILD = typeof __DEV__ !== "undefined" && __DEV__ === false;

const LOCAL_DEV_HOSTS: Record<string, true> = {
  localhost: true,
  "127.0.0.1": true,
  "0.0.0.0": true,
  "[::1]": true,
  "localtest.me": true,
};

/**
 * Whether tool-call telemetry should be exported from this runtime. Only the
 * production CDN bundle running in a real browser on a non-local host emits;
 * tests, SSR, and local dev stay inert (no network, no timers, no listeners).
 */
export function shouldExportToolMetrics(): boolean {
  if (!IS_PRODUCTION_BUILD) return false;
  if (typeof window === "undefined" || typeof document === "undefined") return false;
  const host = window.location?.host ?? "";
  return host !== "" && !LOCAL_DEV_HOSTS[host] && !host.includes(":");
}

let defaultClient: MetricsClient | null = null;
let defaultClientInitialized = false;

function getDefaultMetricsClient(): MetricsClient | null {
  if (defaultClientInitialized) return defaultClient;
  defaultClientInitialized = true;
  if (shouldExportToolMetrics()) {
    defaultClient = createMetricsClient({
      serviceName: SERVICE_NAME,
      send: createFetchSend(OTLP_METRICS_ENDPOINT),
      registerLifecycle: true,
    });
  }
  return defaultClient;
}

export interface ToolCallSample {
  tool: string;
  durationMs: number;
  isError: boolean;
  errorClass?: string;
}

/** Records a single tool-call observation (latency, count, error signal). */
export function recordToolCall(
  sample: ToolCallSample,
  client: MetricsClient | null = getDefaultMetricsClient(),
): void {
  if (!client) return;
  const { tool, durationMs, isError, errorClass } = sample;
  const attributes = { tool_name: tool, is_error: isError, error_class: errorClass ?? "none" };
  try {
    client.histogram("webmcp_tool_call_duration_ms", durationMs, attributes, "ms");
    client.counter("webmcp_tool_call_total", 1, attributes);
    if (isError) {
      client.counter("webmcp_tool_call_errors_total", 1, {
        tool_name: tool,
        error_class: errorClass ?? "unknown",
      });
    }
  } catch {
    // Telemetry must never break tool execution.
  }
}

function isPromiseLike<T>(value: T | Promise<T>): value is Promise<T> {
  return (
    typeof value === "object" && value !== null && typeof Reflect.get(value, "then") === "function"
  );
}

function errorClassOf(error: unknown): string {
  if (error instanceof Error && typeof error.name === "string" && error.name.length > 0) {
    return error.name;
  }
  return "Error";
}

function isToolErrorResult(result: unknown): boolean {
  return typeof result === "object" && result !== null && Reflect.get(result, "isError") === true;
}

type ToolExecute<TArgs, TResult> = (args: TArgs) => TResult | Promise<TResult>;

/**
 * Wraps a tool executor so every invocation records latency, call count, and
 * error signal via OpenTelemetry metrics. The wrapper is transparent: it returns exactly what
 * the underlying executor returns (or rethrows the same error), and telemetry
 * failures can never interfere with tool execution.
 */
export function withToolObservability<TArgs, TResult>(
  toolName: string,
  execute: ToolExecute<TArgs, TResult>,
  client: MetricsClient | null = getDefaultMetricsClient(),
): ToolExecute<TArgs, TResult> {
  return (args: TArgs) => {
    const start = performance.now();
    const record = (isError: boolean, errorClass?: string) => {
      recordToolCall(
        { tool: toolName, durationMs: performance.now() - start, isError, errorClass },
        client,
      );
    };

    try {
      const result = execute(args);
      if (isPromiseLike(result)) {
        return result.then(
          (resolved) => {
            const errored = isToolErrorResult(resolved);
            record(errored, errored ? "tool_error" : undefined);
            return resolved;
          },
          (error: unknown) => {
            record(true, errorClassOf(error));
            throw error;
          },
        );
      }
      const errored = isToolErrorResult(result);
      record(errored, errored ? "tool_error" : undefined);
      return result;
    } catch (error) {
      record(true, errorClassOf(error));
      throw error;
    }
  };
}
