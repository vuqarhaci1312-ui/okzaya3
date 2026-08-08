import type { ShopifyGlobal } from "#hydrogen/globals";

import type { WebMcpToolResult } from "../types";

type ShopifyStandardActions = ShopifyGlobal["actions"];
type UpdateCartResult = Awaited<ReturnType<ShopifyStandardActions["updateCart"]>>;

export type CartLine = {
  id?: string;
  quantity?: number;
  cost?: {
    totalAmount?: { amount?: string; currencyCode?: string };
  };
  merchandise?: {
    id?: string;
    title?: string;
    image?: { url?: string };
    product?: {
      id?: string;
      title?: string;
      handle?: string;
      vendor?: string;
      productType?: string;
    };
  };
};

export type Cart = {
  id?: string;
  totalQuantity?: number;
  cost?: {
    totalAmount?: { amount?: string; currencyCode?: string };
  };
  lines?: { nodes?: CartLine[] };
};

export type UcpMoney = {
  amount: number;
  currency: string;
};

export const toolResult = <TStructuredContent>(
  summary: string,
  data: TStructuredContent,
  keyFields?: string | null,
  nextSteps?: string,
): WebMcpToolResult<TStructuredContent> => {
  let text = summary;
  if (keyFields) text += `\n\n${keyFields}`;
  if (nextSteps) text += `\n\nNext steps: ${nextSteps}`;
  return { content: [{ type: "text", text }], structuredContent: data };
};

/**
 * Terminal note appended to a successful cart mutation result. Cart adds are
 * cumulative (non-idempotent), so a model that retries "to be sure" silently
 * doubles quantities. This mirrors the strong "already done, do not repeat"
 * framing that `navigationResult` uses for navigation, closing the asymmetry
 * that let update_cart get called two or three times.
 */
export const CART_UPDATE_TERMINAL_NOTE =
  "This change has ALREADY been applied — the item_count and total in this result are the authoritative " +
  "post-update cart state. Do NOT call update_cart again for this request: adds are cumulative, so repeating " +
  "the call adds duplicate items or re-applies quantity changes. If you need to confirm, read the values in " +
  "this result instead of re-running the mutation.";

export const CART_CLEARED_TERMINAL_NOTE =
  "The cart has ALREADY been emptied — this result is the authoritative state. Do NOT call cancel_cart or " +
  "update_cart again for this request.";

export const actionResult = <TStructuredContent>(
  summary: string,
  data: TStructuredContent,
  terminalNote?: string,
): WebMcpToolResult<TStructuredContent> => {
  const note = terminalNote ? `\n\n${terminalNote}` : "";
  return {
    content: [
      {
        type: "text",
        text: `Suggested response: ${summary}${note}\n\nNow respond to the user with a friendly message. If you completed multiple steps, recap the full journey.`,
      },
    ],
    structuredContent: data,
  };
};

/**
 * Result for tools that move the browser to a new page. The text leads with
 * the terminal state ("navigation is complete, you are already there") because
 * models weight the first sentence of a tool result most when choosing their
 * next action, and double-navigation is a next-action problem.
 *
 * The destination URL is deliberately kept OUT of this human-facing text and
 * exposed only in `structuredContent` (e.g. `data.url` / `data.navigating_to`).
 * A URL in the reply reads as an actionable link — it is the single biggest
 * trigger for a redundant navigation (the model, or the host's own goto tool,
 * "helpfully" navigates to it). Refer to the destination by name instead.
 */
export const navigationResult = <TStructuredContent>(
  args: {
    summary: string;
    navigated: boolean;
    destination?: string;
    keyFields?: string | null;
  },
  data: TStructuredContent,
): WebMcpToolResult<TStructuredContent> => {
  const { summary, navigated, destination, keyFields } = args;
  const place = destination ? `the ${destination} page` : "the requested page";
  const state = navigated
    ? `Navigation is complete: the browser is ALREADY on ${place} and the user is looking at it now.`
    : `The browser is ALREADY on ${place} and the user is looking at it now — no navigation was needed.`;

  const doNots =
    "Do NOT navigate again by ANY means for this request: not with another webmcp tool (browse_store, " +
    "get_product navigate=true, show_variant, proceed_to_checkout, manage_orders), not with any host tool that " +
    "changes the page URL / opens / loads / fetches a page (whatever its name), and not by constructing, " +
    "guessing, or retyping a URL yourself. Do NOT tell the user to click a link or button or open a URL — they " +
    "are already there. The destination is confirmed; just reply, referring to the page by name.";

  let text = `${state}\n\n${doNots}\n\nSuggested reply: ${summary}`;
  if (keyFields) text += `\n\n${keyFields}`;

  return { content: [{ type: "text", text }], structuredContent: data };
};

export const toolError = (errorMsg: string, recovery?: string): WebMcpToolResult<never> => {
  let text = `Error: ${errorMsg}`;
  if (recovery) text += `\nRecovery: ${recovery}`;
  return {
    content: [{ type: "text", text }],
    structuredContent: { error: errorMsg },
    isError: true,
  };
};

export const getStandardActions = (): ShopifyStandardActions => {
  const actions = window.Shopify?.actions;
  if (!actions?.getCart || !actions.updateCart) {
    throw new Error(
      "Standard Actions are not available. Ensure Shopify Standard Actions are available before calling cart tools.",
    );
  }

  return actions;
};

export const getCartFromActions = async (actions = getStandardActions()): Promise<Cart> => {
  const result = await actions.getCart();
  return result.cart ?? {};
};

export const assertCartActionResult = (result: UpdateCartResult): void => {
  const errors = result.userErrors?.map((error) => error.message).filter(Boolean);
  if (errors?.length) throw new Error(errors.join(", "));
};

export const extractActionWarnings = (result: UpdateCartResult): string[] =>
  result.warnings?.map((warning) => warning.message).filter(isString) ?? [];

export const getCartLines = (cart: Cart): CartLine[] => cart.lines?.nodes ?? [];

export const getCartItemCount = (cart: Cart): number => cart.totalQuantity ?? 0;

const currencyMinorDecimalsCache = new Map<string, number>();

export const currencyMinorDecimals = (currency: string | undefined): number => {
  const currencyCode = String(currency ?? "").toUpperCase();
  if (!currencyCode) return 2;

  const cached = currencyMinorDecimalsCache.get(currencyCode);
  if (cached != null) return cached;

  try {
    const decimals =
      new Intl.NumberFormat("en", {
        style: "currency",
        currency: currencyCode,
      }).resolvedOptions().maximumFractionDigits ?? 2;
    currencyMinorDecimalsCache.set(currencyCode, decimals);
    return decimals;
  } catch {
    return 2;
  }
};

export const moneyV2ToUcpMoney = (
  money: { amount?: string | number; currencyCode?: string } | null | undefined,
): UcpMoney | null => {
  if (money?.amount == null || !money.currencyCode) return null;

  const amount = Number(money.amount);
  if (!Number.isFinite(amount)) return null;

  return {
    amount: Math.round(amount * 10 ** currencyMinorDecimals(money.currencyCode)),
    currency: money.currencyCode,
  };
};

export const formatUcpMoney = (money: UcpMoney | null | undefined) => {
  if (!money) return "";

  const decimals = currencyMinorDecimals(money.currency);
  const amount = money.amount / 10 ** decimals;
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: money.currency,
    }).format(amount);
  } catch {
    return `${amount.toFixed(decimals)} ${money.currency}`;
  }
};

export const isString = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0;
