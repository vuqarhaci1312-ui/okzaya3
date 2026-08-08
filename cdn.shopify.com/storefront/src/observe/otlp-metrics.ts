/**
 * Minimal, zero-dependency OpenTelemetry metrics client that exports to an
 * OTLP/HTTP JSON collector.
 *
 * Implements just enough of the OTLP metrics JSON encoding (OTEP-0122,
 * https://github.com/open-telemetry/oteps/blob/main/text/0122-otlp-http-json.md)
 * to record delta-temporality counters and explicit-bucket histograms. The
 * wire format matches what the OTLP/HTTP JSON collector accepts, but this is
 * a fresh, dependency-free implementation with no external OpenTelemetry SDK.
 *
 * Kept tiny on purpose: this ships inside the storefront WebMCP CDN bundle.
 * No protobuf, no gRPC, no external OpenTelemetry SDK.
 */

export type MetricAttributes = Record<string, string | number | boolean>;

export interface MetricsClient {
  counter(name: string, value: number, attributes?: MetricAttributes, unit?: string): void;
  histogram(
    name: string,
    value: number,
    attributes?: MetricAttributes,
    unit?: string,
    bounds?: readonly number[],
  ): void;
  /** Flushes buffered metrics immediately. */
  flush(): void;
}

/** Sends a serialized OTLP JSON body. Implementations must never throw. */
export type MetricsSend = (body: string, keepalive: boolean) => void;

export interface CreateMetricsClientOptions {
  serviceName: string;
  send: MetricsSend;
  scopeName?: string;
  scopeVersion?: string;
  /** Debounce window before an automatic flush. Defaults to 5000ms. */
  flushDelayMs?: number;
  /** Epoch-milliseconds clock. Injectable for tests. Defaults to `Date.now`. */
  now?: () => number;
  /** Attach `pagehide`/`visibilitychange` flush handlers (browser only). */
  registerLifecycle?: boolean;
}

/** Explicit histogram bucket boundaries (milliseconds), ascending, without +Inf. */
export const DEFAULT_LATENCY_BOUNDS_MS: readonly number[] = [
  5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000,
];

const DEFAULT_FLUSH_DELAY_MS = 5000;
const AGGREGATION_TEMPORALITY_DELTA = 1;

interface CounterAccumulator {
  kind: "counter";
  name: string;
  unit: string;
  attributes: MetricAttributes;
  value: number;
}

interface HistogramAccumulator {
  kind: "histogram";
  name: string;
  unit: string;
  attributes: MetricAttributes;
  bounds: readonly number[];
  count: number;
  sum: number;
  min: number;
  max: number;
  bucketCounts: number[];
}

type Accumulator = CounterAccumulator | HistogramAccumulator;

function attributesKey(attributes: MetricAttributes): string {
  return Object.keys(attributes)
    .toSorted()
    .map((key) => `${key}\u0000${String(attributes[key])}`)
    .join("\u0001");
}

/** OTLP attributes are exported as strings so they map cleanly to Prometheus labels. */
function toStringAttributes(attributes: MetricAttributes) {
  return Object.entries(attributes).map(([key, value]) => ({
    key,
    value: { stringValue: String(value) },
  }));
}

function bucketIndexFor(bounds: readonly number[], value: number): number {
  for (let index = 0; index < bounds.length; index++) {
    if (value <= bounds[index]) return index;
  }
  return bounds.length;
}

function unixNano(epochMs: number): string {
  // OTLP/HTTP JSON encodes uint64 fields as decimal strings (protobuf JSON
  // mapping). The multiplication exceeds Number.MAX_SAFE_INTEGER, so the
  // least-significant digits are imprecise — irrelevant for metric timestamps.
  return String(epochMs * 1_000_000);
}

interface OtlpAttribute {
  key: string;
  value: { stringValue: string };
}
interface OtlpNumberDataPoint {
  startTimeUnixNano: string;
  timeUnixNano: string;
  asDouble: number;
  attributes: OtlpAttribute[];
}
interface OtlpHistogramDataPoint {
  startTimeUnixNano: string;
  timeUnixNano: string;
  count: string;
  sum: number;
  min: number;
  max: number;
  bucketCounts: string[];
  explicitBounds: readonly number[];
  attributes: OtlpAttribute[];
}
interface OtlpSumMetric {
  name: string;
  unit: string;
  sum: { aggregationTemporality: number; isMonotonic: boolean; dataPoints: OtlpNumberDataPoint[] };
}
interface OtlpHistogramMetric {
  name: string;
  unit: string;
  histogram: { aggregationTemporality: number; dataPoints: OtlpHistogramDataPoint[] };
}
type OtlpMetric = OtlpSumMetric | OtlpHistogramMetric;

/**
 * Builds an OTLP/HTTP JSON `resourceMetrics` payload from accumulated metrics.
 * Accumulators sharing a metric name are grouped into a single OTLP `Metric`
 * with one data point per attribute set, matching the reference client.
 */
function buildResourceMetrics(
  serviceName: string,
  scope: { name: string; version: string },
  accumulators: Iterable<Accumulator>,
  timeUnixNano: string,
  startTimeUnixNano: string,
): unknown {
  const sums = new Map<string, OtlpSumMetric>();
  const histograms = new Map<string, OtlpHistogramMetric>();

  for (const acc of accumulators) {
    const attributes = toStringAttributes(acc.attributes);
    if (acc.kind === "counter") {
      let metric = sums.get(acc.name);
      if (!metric) {
        metric = {
          name: acc.name,
          unit: acc.unit,
          sum: {
            aggregationTemporality: AGGREGATION_TEMPORALITY_DELTA,
            isMonotonic: true,
            dataPoints: [],
          },
        };
        sums.set(acc.name, metric);
      }
      metric.sum.dataPoints.push({
        startTimeUnixNano,
        timeUnixNano,
        asDouble: acc.value,
        attributes,
      });
    } else {
      let metric = histograms.get(acc.name);
      if (!metric) {
        metric = {
          name: acc.name,
          unit: acc.unit,
          histogram: { aggregationTemporality: AGGREGATION_TEMPORALITY_DELTA, dataPoints: [] },
        };
        histograms.set(acc.name, metric);
      }
      metric.histogram.dataPoints.push({
        startTimeUnixNano,
        timeUnixNano,
        count: String(acc.count),
        sum: acc.sum,
        min: acc.min,
        max: acc.max,
        bucketCounts: acc.bucketCounts.map(String),
        explicitBounds: acc.bounds,
        attributes,
      });
    }
  }

  const metrics: OtlpMetric[] = [...sums.values(), ...histograms.values()];

  return {
    resourceMetrics: [
      {
        resource: {
          attributes: [{ key: "service.name", value: { stringValue: serviceName } }],
        },
        scopeMetrics: [
          { scope: { name: scope.name, version: scope.version, attributes: [] }, metrics },
        ],
      },
    ],
  };
}

export function createMetricsClient(options: CreateMetricsClientOptions): MetricsClient {
  const {
    serviceName,
    send,
    scopeName = "@shopify/webmcp",
    scopeVersion = "0.0.0",
    flushDelayMs = DEFAULT_FLUSH_DELAY_MS,
    now = Date.now,
    registerLifecycle = false,
  } = options;

  const accumulators = new Map<string, Accumulator>();
  let intervalStartMs = now();
  let flushTimer: ReturnType<typeof setTimeout> | undefined;

  function scheduleFlush(): void {
    if (flushTimer !== undefined || typeof setTimeout !== "function") return;
    flushTimer = setTimeout(() => {
      flushTimer = undefined;
      flush();
    }, flushDelayMs);
  }

  function counter(
    name: string,
    value: number,
    attributes: MetricAttributes = {},
    unit = "1",
  ): void {
    if (!Number.isFinite(value)) return;
    const key = `c\u0002${name}\u0002${unit}\u0002${attributesKey(attributes)}`;
    const existing = accumulators.get(key);
    if (existing && existing.kind === "counter") {
      existing.value += value;
    } else {
      accumulators.set(key, { kind: "counter", name, unit, attributes, value });
    }
    scheduleFlush();
  }

  function histogram(
    name: string,
    value: number,
    attributes: MetricAttributes = {},
    unit = "1",
    bounds: readonly number[] = DEFAULT_LATENCY_BOUNDS_MS,
  ): void {
    if (!Number.isFinite(value)) return;
    const key = `h\u0002${name}\u0002${unit}\u0002${attributesKey(attributes)}`;
    const existing = accumulators.get(key);
    let acc: HistogramAccumulator;
    if (existing && existing.kind === "histogram") {
      acc = existing;
    } else {
      acc = {
        kind: "histogram",
        name,
        unit,
        attributes,
        bounds,
        count: 0,
        sum: 0,
        min: value,
        max: value,
        bucketCounts: Array.from({ length: bounds.length + 1 }, () => 0),
      };
      accumulators.set(key, acc);
    }
    acc.count += 1;
    acc.sum += value;
    acc.min = Math.min(acc.min, value);
    acc.max = Math.max(acc.max, value);
    acc.bucketCounts[bucketIndexFor(acc.bounds, value)] += 1;
    scheduleFlush();
  }

  function flush(): void {
    if (flushTimer !== undefined) {
      clearTimeout(flushTimer);
      flushTimer = undefined;
    }
    if (accumulators.size === 0) return;

    const endMs = now();
    const payload = buildResourceMetrics(
      serviceName,
      { name: scopeName, version: scopeVersion },
      accumulators.values(),
      unixNano(endMs),
      unixNano(intervalStartMs),
    );
    accumulators.clear();
    intervalStartMs = endMs;

    try {
      send(JSON.stringify(payload), true);
    } catch {
      // Telemetry must never throw into callers.
    }
  }

  if (
    registerLifecycle &&
    typeof document !== "undefined" &&
    typeof window !== "undefined" &&
    typeof window.addEventListener === "function"
  ) {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") flush();
    });
    window.addEventListener("pagehide", () => flush());
  }

  return { counter, histogram, flush };
}

/**
 * Creates a {@link MetricsSend} that POSTs OTLP JSON to an HTTP collector via
 * `fetch`. Fire-and-forget: delivery failures are silently swallowed.
 */
export function createFetchSend(endpoint: string): MetricsSend {
  return (body, keepalive) => {
    try {
      if (typeof fetch !== "function") return;
      void fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive,
      }).catch(() => {
        // Fire-and-forget: telemetry delivery failures are non-fatal.
      });
    } catch {
      // never throw
    }
  };
}
