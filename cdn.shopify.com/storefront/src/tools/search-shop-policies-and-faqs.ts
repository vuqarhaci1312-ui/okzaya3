import type { ShopifyWebMcpToolExecutor } from "../tool-manifest";
import {
  type FaqArticle,
  type FaqPage,
  type PolicyEntry,
  POLICY_TYPES,
  searchPoliciesAndFaqs,
} from "./catalog";
import { toolError, toolResult } from "./shared";

const FAQ_SEARCH_LIMIT = 5;

// The Storefront API exposes policies as individual `shop.*Policy` fields (no
// semantic search), so the query is routed to the relevant field(s) by keyword.
// `contactInformation` covers the "phone number" / "hours" examples in the tool
// description. Routed fields are fetched via GraphQL `@include` so only the
// relevant policies come over the wire. Keywords match as word-prefixes
// (`\bship` matches "shipping" but not "membership"); a broad "policies"
// request with no specific kind fetches every policy, and any other unmatched
// query fetches none so FAQ results aren't drowned out by irrelevant bodies.
const POLICY_KEYWORDS: ReadonlyArray<{ type: string; patterns: ReadonlyArray<RegExp> }> = [
  {
    type: "refund",
    patterns: [/\brefund/i, /\breturn/i, /\bmoney\s+back/i, /\bexchange/i, /\breimburse/i],
  },
  {
    type: "shipping",
    patterns: [
      /\bship/i,
      /\bdeliver/i,
      /\bdispatch/i,
      /\bfulfil/i,
      /\bfulfill/i,
      /\bpostage/i,
      /\btracking/i,
      /\bcourier/i,
    ],
  },
  {
    type: "privacy",
    patterns: [
      /\bprivacy/i,
      /\bdata/i,
      /\bcookie/i,
      /\bgdpr/i,
      /\bpersonal\s+information/i,
      /\bpersonal\s+data/i,
    ],
  },
  {
    type: "terms_of_service",
    patterns: [/\bterms\s+of\s+service/i, /\bterms\s+of\s+use/i, /\btos/i, /\bterms/i],
  },
  { type: "terms_of_sale", patterns: [/\bterms\s+of\s+sale/i, /\bpurchase\s+terms/i] },
  { type: "subscription", patterns: [/\bsubscription/i, /\bsubscribe/i, /\brecurring/i] },
  { type: "legal_notice", patterns: [/\blegal\s+notice/i, /\bimprint/i, /\bcompany\s+info/i] },
  {
    type: "contact",
    patterns: [
      /\bphone/i,
      /\bcall/i,
      /\bcontact/i,
      /\bemail/i,
      /\baddress/i,
      /\bhours/i,
      /\bopening/i,
      /\blocation/i,
      /\breach/i,
      /\bsupport/i,
    ],
  },
];

export const searchShopPoliciesAndFaqs: ShopifyWebMcpToolExecutor<
  "searchShopPoliciesAndFaqs"
> = async (args) => {
  const query = args.query?.trim();
  if (!query) {
    return toolError(
      "A search query is required.",
      "Call search_shop_policies_and_faqs with a query, e.g. 'return policy' or 'shipping'.",
    );
  }

  try {
    const includeTypes = matchPolicyTypes(query);
    const data = await searchPoliciesAndFaqs(query, FAQ_SEARCH_LIMIT, includeTypes);

    return policyResult(query, data.policies, data.articles, data.pages);
  } catch (error) {
    return toolError(
      error instanceof Error ? error.message : "Policy and FAQ search failed",
      "Rephrase the query (e.g. 'return policy', 'shipping', 'contact') and try again.",
    );
  }
};

function matchPolicyTypes(query: string): string[] {
  const matched = POLICY_KEYWORDS.flatMap(({ type, patterns }) =>
    patterns.some((pattern) => pattern.test(query)) ? [type] : [],
  );
  if (matched.length) return matched;
  // No specific kind matched — a broad "policies" request fetches every
  // policy; anything else is a FAQ search that fetches none.
  return /\bpolic(?:y|ies)\b/i.test(query) ? [...POLICY_TYPES] : [];
}

function policyResult(
  query: string,
  policies: PolicyEntry[],
  articles: FaqArticle[],
  pages: FaqPage[],
) {
  const data = { policies, articles, pages };
  const total = policies.length + articles.length + pages.length;

  if (total === 0) {
    return toolResult(
      `No policies or FAQ content found for "${query}".`,
      data,
      null,
      "The store may not have published this content. Ask the user to rephrase, or share the store's contact page if one exists.",
    );
  }

  return toolResult(
    summarize(query, policies, articles, pages),
    data,
    formatKeyFields(policies, articles, pages),
    nextStep(policies, articles, pages),
  );
}

function summarize(
  query: string,
  policies: PolicyEntry[],
  articles: FaqArticle[],
  pages: FaqPage[],
) {
  const counts = [
    policies.length ? `${policies.length} polic${policies.length === 1 ? "y" : "ies"}` : null,
    pages.length ? `${pages.length} page${pages.length === 1 ? "" : "s"}` : null,
    articles.length ? `${articles.length} article${articles.length === 1 ? "" : "s"}` : null,
  ].filter(Boolean);
  return `Found ${counts.join(", ") || "no results"} for "${query}".`;
}

function formatKeyFields(policies: PolicyEntry[], articles: FaqArticle[], pages: FaqPage[]) {
  const sections = [
    policies.length
      ? "Policies:\n" + policies.map((policy) => `- ${policy.title}: ${policy.url}`).join("\n")
      : null,
    pages.length
      ? "Pages:\n" + pages.map((page) => `- ${page.title}: ${page.url}`).join("\n")
      : null,
    articles.length
      ? "Articles:\n" + articles.map((article) => `- ${article.title}: ${article.url}`).join("\n")
      : null,
  ].filter(Boolean);
  return sections.length ? sections.join("\n\n") : null;
}

function nextStep(policies: PolicyEntry[], articles: FaqArticle[], pages: FaqPage[]) {
  if (policies.length) {
    return "Answer the user's question directly from the policy body text in the structured content. The body is the authoritative policy text — do not invent details that are not present.";
  }
  if (pages.length || articles.length) {
    return "The store has no matching policy. Share the relevant page or article URL, and answer from any page body or article excerpt in the structured content.";
  }
  return "No matching policy or FAQ content was found. Ask the user to rephrase the question.";
}
