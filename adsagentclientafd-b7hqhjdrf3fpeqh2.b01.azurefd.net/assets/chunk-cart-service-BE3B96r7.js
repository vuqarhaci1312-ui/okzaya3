import {
    r as t,
    H as e,
    T as r,
    U as n,
    F as o,
    G as a,
    J as s,
    K as i,
    L as c,
    a as u,
    s as d,
    M as l,
    N as m,
    O as p,
    P as f,
    h as y,
    Q as w,
    V as g,
    W as h,
    X as b,
    Y as C,
    Z as S,
    $ as v,
    a0 as T,
    C as k,
    E,
    a1 as _,
    a2 as I,
    a3 as U,
    a4 as N,
    a5 as M,
    a6 as j,
    a7 as q,
    a8 as L,
    I as O
} from "./chunk-i18n-BNyI1hjo.js";

function P() {
    const r = t.useRef(null);
    return t.useEffect(() => {
        r.current = document.getElementById(e)
    }, []), r.current
}
const x = new Set([r.SSE]);
let A = [],
    $ = null,
    F = null,
    R = !1;
async function W(t, e, r) {
    try {
        if (function(t) {
                return x.has(t.metric)
            }(t)) return;
        const n = (new Date).toISOString(),
            o = function(t, e, r) {
                const n = e ? { ...t.dimensions.baseFields,
                    clientInformation: e
                } : t.dimensions.baseFields;
                return {
                    metricType: t.metric,
                    eventType: X(t),
                    eventMetadata: JSON.stringify({ ...t.dimensions,
                        baseFields: n,
                        eventTimestamp: r
                    })
                }
            }(t, r ? await r() : void 0, n);
        await async function(t, e, r) {
            void(R || "undefined" == typeof window || (R = !0, window.addEventListener("beforeunload", () => {
                J("Unload")
            }), window.addEventListener("pagehide", () => {
                J("Unload")
            }), "undefined" != typeof document && document.addEventListener("visibilitychange", () => {
                "hidden" === document.visibilityState && J("Unload")
            }))), $ = e, A.push(t), r ? await J("Critical", e) : A.length >= 15 ? await J("FullBatch", e) : null === F && (F = setTimeout(() => {
                J("Timer")
            }, 15e3))
        }(o, e, t.isCriticalEvent ? ? !1)
    } catch (n) {}
}
async function J(t, e) {
    if (null !== F && (clearTimeout(F), F = null), 0 === A.length) return;
    const r = e ? ? $;
    if (!r ? .jwtToken ? .token) return;
    const n = A;
    A = [];
    try {
        const e = "Unload" === t,
            o = JSON.stringify({
                events: n,
                flushSource: t
            }),
            a = await B(o, r, {
                keepalive: e,
                useBeacon: e
            });
        "Critical" !== t || a.ok || await B(o, r, {
            keepalive: !0,
            useBeacon: !0
        })
    } catch (o) {}
}
async function B(t, e, r) {
    const n = e.jwtToken ? .token;
    if (!n) return {
        transport: "none",
        ok: !1,
        detail: "missing-jwt-token"
    };
    const a = o + "/api/v1/telemetry";
    let s = !1;
    if (r.useBeacon && "undefined" != typeof navigator && "function" == typeof navigator.sendBeacon) {
        const e = `${a}/beacon?jwt=${encodeURIComponent(n)}`,
            r = new Blob([t], {
                type: "text/plain"
            });
        let o = !1;
        try {
            o = navigator.sendBeacon(e, r)
        } catch (i) {
            return {
                transport: "beacon",
                ok: !1,
                beaconQueued: !1,
                detail: String(i)
            }
        }
        if (o) return {
            transport: "beacon",
            ok: !0,
            beaconQueued: !0
        };
        s = !0
    }
    try {
        const e = await fetch(a, {
                method: "POST",
                keepalive: r.keepalive,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${n}`
                },
                body: t
            }),
            o = e.ok ? void 0 : (await e.text().catch(() => {})) ? .slice(0, 500);
        return {
            transport: "fetch",
            ok: e.ok,
            status: e.status,
            statusText: e.statusText,
            detail: o,
            beaconQueued: !s && void 0
        }
    } catch (i) {
        return {
            transport: "fetch",
            ok: !1,
            detail: String(i),
            beaconQueued: !s && void 0
        }
    }
}

function X(t) {
    switch (t.metric) {
        case r.UIEvent:
            return t.dimensions.uiEventType;
        case r.ChatClick:
            return t.dimensions.chatClickType;
        case r.Performance:
            return t.dimensions.performanceType;
        case r.Debug:
            return t.dimensions.debugType;
        case r.Error:
            return t.dimensions.errorEventType;
        case r.SSE:
            return t.dimensions.sseName;
        default:
            return null
    }
}
async function H(t, e) {
    try {
        return function(t) {
            if (!t) return null;
            const e = { ...t
            };
            return e.landingPageInformation ? .pageUrl && (e.landingPageInformation.pageUrl = C(e.landingPageInformation.pageUrl)), e.landingPageInformation ? .referrerUrl && (e.landingPageInformation.referrerUrl = C(e.landingPageInformation.referrerUrl)), e
        }(await b(t, e))
    } catch (r) {
        return null
    }
}

function D() {
    const e = u(d);
    return {
        sendTelemetry: t.useCallback(t => {
            W(t, e, () => H(e.clientId, e.sessionId))
        }, [e]),
        baseTelemetryFields: t.useMemo(() => ({
            clientId: e.clientId,
            sessionId: e.sessionId,
            platformSessionId: f(),
            advertiserId: e.advertiserId,
            platformCountryCode: p() ? ? "",
            platformCurrencyCode: m() ? ? "",
            platformLanguage: l(),
            isTestingSession: e.isTestingSession,
            features: e.features,
            expAssignmentContext: e.expAssignmentContext,
            clientInformation: null
        }), [e])
    }
}

function z() {
    const {
        sendTelemetry: e,
        baseTelemetryFields: r
    } = D(), n = P(), o = u(y), a = u(w), i = t.useRef(null), c = t.useRef(!1);
    t.useEffect(() => {
        if (!o || !o.ShouldInstrumentAllClientErrors || !n) return;
        const t = n.shadowRoot;
        if (!t) return;
        const u = () => {
                c.current = !1, i.current ? .disconnect(), i.current = new MutationObserver(t => {
                    t.length && (c.current = !0)
                }), i.current.observe(t, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                })
            },
            d = t => {
                const n = t.target,
                    o = t.composedPath().find(t => t instanceof HTMLElement && (["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA", "LABEL"].includes(t.tagName) || t.hasAttribute("tabindex") || "button" === t.getAttribute("role")));
                a || setTimeout(() => {
                    i.current ? .disconnect(), e(g({
                        baseFields: r,
                        debugType: s.ElementClickLog,
                        metadata: {
                            tag: n.tagName.toLowerCase(),
                            id: n.id || void 0,
                            className: n.className || void 0,
                            text: n.textContent ? n.textContent.trim().slice(0, 100) : "",
                            isInteractive: !!o,
                            isShadowDOMMutated: c.current
                        }
                    }))
                }, 500)
            };
        return t.addEventListener("mousedown", u), t.addEventListener("click", d), () => {
            t.removeEventListener("mousedown", u), t.removeEventListener("click", d), i.current ? .disconnect()
        }
    }, [a, o, e, n, r])
}

function G() {
    const {
        sendTelemetry: e,
        baseTelemetryFields: r
    } = D(), n = u(y);
    t.useEffect(() => {
        if (!n || !n.ShouldInstrumentAllClientErrors) return;
        const t = t => {
                t.filename.includes(h) && e(g({
                    baseFields: r,
                    debugType: s.ErrorLogging,
                    metadata: {
                        errorMessage: t.message,
                        errorStack: t.error ? .stack,
                        errorName: t.error ? .name || "",
                        errorLogType: "error"
                    }
                }))
            },
            o = t => {
                const n = t.reason ? .stack ? ? "";
                n.includes(h) && e(g({
                    baseFields: r,
                    debugType: s.ErrorLogging,
                    metadata: {
                        errorMessage: t.reason ? .message || "",
                        errorStack: n,
                        errorName: t.reason ? .name || "",
                        errorLogType: "unhandledrejection"
                    }
                }))
            };
        return window.addEventListener("error", t), window.addEventListener("unhandledrejection", o), () => {
            window.removeEventListener("error", t), window.removeEventListener("unhandledrejection", o)
        }
    }, [n, e, r])
}
const Q = [
        [a, s.ClarityInitializationFailed],
        [i, s.ClarityMetadataNoData],
        [c, s.ClarityMetadataTimedOut]
    ],
    K = new Set;

function Y() {
    const {
        sendTelemetry: e,
        baseTelemetryFields: r
    } = D();
    t.useEffect(() => {
        const t = Q.map(([t, n]) => {
            const o = o => {
                K.has(t) || (K.add(t), e(g({
                    baseFields: r,
                    debugType: n,
                    metadata: o.detail
                })))
            };
            return window.addEventListener(t, o), {
                eventName: t,
                handler: o
            }
        });
        return () => {
            for (const {
                    eventName: e,
                    handler: r
                } of t) window.removeEventListener(e, r)
        }
    }, [e, r])
}
async function V(t) {
    try {
        const r = window.location.hostname.includes("thejewelhut.co.uk");
        for (const n of t) {
            const t = Z();
            let o, a, s;
            if (r) {
                o = `/checkout/cart/add/uenc/${btoa(window.location.href)}/product/${n.variant_id}/?_agent=1`;
                const e = `----WebKitFormBoundary${tt()}`,
                    r = [];
                r.push(et(e, "product", n.variant_id)), r.push(et(e, "selected_configurable_option", "")), r.push(et(e, "related_product", "")), r.push(et(e, "item", n.variant_id)), t && r.push(et(e, "form_key", t)), r.push(et(e, "qty", n.quantity.toString())), s = r.join("") + `------${e}--\r\n`, a = {
                    "Content-Type": `multipart/form-data; boundary=----${e}`,
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "application/json, text/javascript, */*; q=0.01"
                }
            } else {
                o = "/checkout/cart/add?_agent=1";
                const e = new URLSearchParams;
                e.append("product", n.variant_id), e.append("qty", n.quantity.toString()), t && e.append("form_key", t), s = e.toString(), a = {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest"
                }
            }
            const i = await fetch(o, {
                method: "POST",
                headers: a,
                body: s
            });
            if (!i.ok) {
                let t = "Unable to add item to cart.";
                try {
                    const e = await i.json();
                    t = e.message || e.description || t
                } catch {}
                throw new Error(t)
            }
            const c = await i.text();
            try {
                const t = JSON.parse(c);
                if (t.error || !1 === t.success) throw new Error(t.message || "Unable to add item to cart.")
            } catch (e) {
                if (!(e instanceof SyntaxError)) throw e
            }
        }
        return await async function() {
            return new Promise(t => {
                if ("function" == typeof window.require) try {
                    window.require(["Magento_Customer/js/customer-data"], e => {
                        e.reload(["cart"], !0), t()
                    })
                } catch (e) {
                    t()
                } else t()
            })
        }(), "success"
    } catch (r) {
        return r.message || "Unable to add item to cart."
    }
}

function Z() {
    const t = document.cookie.split(";");
    for (const r of t) {
        const t = r.trim().split("="),
            e = t[0],
            n = t[1];
        if ("form_key" === e && n) return n
    }
    const e = document.querySelector('input[name="form_key"]');
    return e ? e.value : window.FORM_KEY ? window.FORM_KEY : null
}

function tt() {
    return Math.random().toString(36).substring(2, 18)
}

function et(t, e, r) {
    return `------${t}\r\nContent-Disposition: form-data; name="${e}"\r\n\r\n${r}\r\n`
}

function rt() {
    return "/checkout"
}
const nt = Object.freeze(Object.defineProperty({
    __proto__: null,
    addToCart: V,
    buyNowWithNewCart: async function(t) {
        try {
            if (0 === t.length) return "No items to checkout.";
            const e = await V(t);
            return "success" === e ? (window.__buyNowCheckoutUrl = "/checkout", "success") : e
        } catch (e) {
            return "Unable to process buy now request."
        }
    },
    fetchCart: async function() {
        try {
            const t = await fetch("/customer/section/load/?sections=cart", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
            if (!t.ok) return null;
            const e = (await t.json()).cart;
            if (!e || !e.items) return null;
            return {
                cartId: e.quote_id || "session-cart",
                currency: v() || "GBP",
                country: S() || "GB",
                itemsCount: e.summary_count || 0,
                items: (e.items || []).map(t => ({
                    variant_id: t.item_id,
                    product_id: t.product_id || t.item_id,
                    price: t.product_price_value || 0,
                    title: t.product_name || "",
                    quantity: t.qty || 0,
                    discounts: [],
                    sku: t.product_sku
                })),
                subtotal: e.subtotalAmount || 0,
                total: e.subtotalAmount || 0
            }
        } catch (t) {
            return null
        }
    },
    getCartUrl: function(t) {
        return t || "/checkout/cart"
    },
    getCheckoutUrl: rt,
    updateCartSessionAttributes: async function(t, e, r) {
        try {
            const {
                sessionId: n,
                clientId: o
            } = t;
            if (!o) throw new Error("Missing required clientId");
            const a = await T(o, n),
                i = Z();
            i || e(g({
                baseFields: r,
                debugType: s.MagentoCartUpdateLog,
                metadata: {
                    warning: "Missing Magento form_key for cart session attributes update",
                    sessionProps: t
                }
            }));
            const c = {
                    attributes: {
                        sessionId: n,
                        clientId: o,
                        conversationId: a.conversationId || "",
                        clarityInformation: a.clarityInformation
                    },
                    form_key: i
                },
                u = await async function(t, e, r = 3, n = 1e4) {
                    let o;
                    for (let s = 0; s <= r; s++) try {
                        const r = new AbortController,
                            o = setTimeout(() => r.abort(), n),
                            a = await fetch(t, { ...e,
                                signal: r.signal
                            });
                        return clearTimeout(o), a
                    } catch (a) {
                        if (o = a instanceof Error ? a : new Error(String(a)), s === r) break;
                        const t = Math.min(1e3 * Math.pow(2, s), 5e3);
                        await new Promise(e => setTimeout(e, t))
                    }
                    throw o
                }("/adsagent/cart/updateattributes", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json",
                        "Cache-Control": "no-cache"
                    },
                    body: JSON.stringify(c)
                });
            if (!u.ok) {
                const t = await async function(t) {
                        let e = "Failed to update cart attributes",
                            r = "",
                            n = "server";
                        t.status >= 500 ? (n = "server", e = `Server error (${t.status}): ${t.statusText}`) : t.status >= 400 && (n = "client", e = `Client error (${t.status}): ${t.statusText}`);
                        try {
                            const n = t.headers.get("content-type");
                            if (!n || !n.includes("application/json")) return r = `Non-JSON response: ${(await t.text()).substring(0,200)}`, {
                                message: e,
                                details: r,
                                category: "parse"
                            };
                            const o = await t.text();
                            if (!o || "" === o.trim()) return r = "Empty response body", {
                                message: e,
                                details: r,
                                category: "parse"
                            };
                            const a = JSON.parse(o);
                            e = a.message || a.error || e, r = JSON.stringify(a)
                        } catch (o) {
                            n = "parse", r = `Parse error: ${o instanceof Error?o.message:String(o)}`
                        }
                        return {
                            message: e,
                            details: r,
                            category: n
                        }
                    }(u),
                    e = new Error(t.message);
                throw e.details = t.details, e.status = u.status, e.category = t.category, e
            }
            const d = await u.json();
            if (!d.success) throw new Error(d.error || "Failed to update cart attributes");
            e(g({
                baseFields: r,
                debugType: s.MagentoCartUpdateLog,
                metadata: {
                    sessionProps: t,
                    clientInformation: a
                }
            }))
        } catch (n) {
            const o = n instanceof Error ? n.message : String(n),
                a = n.category || "unknown";
            e(k({
                errorCode: E.MagentoUpdateCartError,
                baseFields: r,
                errorEventType: E.MagentoUpdateCartError,
                errorMessage: o,
                metadata: {
                    sessionProps: t,
                    httpStatus: n.status || null,
                    errorDetails: n.details || null,
                    errorCategory: a
                }
            }))
        }
        return null
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
async function ot(t, e, r) {
    try {
        const {
            sessionId: n,
            clientId: o
        } = t;
        if (!o) throw new Error("Missing required clientId");
        const a = await _(o, n),
            i = {
                sessionId: n,
                clientId: o,
                clientInformation: {
                    platformSessionId: a.platformSessionId,
                    platformUserId: a.platformUserId,
                    conversationId: a.conversationId,
                    clarityInformation: a.clarityInformation
                }
            },
            c = {
                attributes: {
                    _agentClientInfo: JSON.stringify(i)
                }
            },
            u = await async function(t, e, r = 3, n = 1e4) {
                let o;
                for (let s = 0; s <= r; s++) try {
                    const r = new AbortController,
                        o = setTimeout(() => r.abort(), n),
                        a = await fetch(t, { ...e,
                            signal: r.signal
                        });
                    return clearTimeout(o), a
                } catch (a) {
                    if (o = a instanceof Error ? a : new Error(String(a)), s === r) break;
                    const t = Math.min(1e3 * Math.pow(2, s), 5e3);
                    await new Promise(e => setTimeout(e, t))
                }
                throw o
            }("/cart/update.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify(c)
            });
        if (!u.ok) {
            const t = await async function(t) {
                    let e = "Failed to update cart attributes",
                        r = "",
                        n = "server";
                    t.status >= 500 ? (n = "server", e = `Server error (${t.status}): ${t.statusText}`) : t.status >= 400 && (n = "client", e = `Client error (${t.status}): ${t.statusText}`);
                    try {
                        const n = t.headers.get("content-type");
                        if (!n || !n.includes("application/json")) return r = `Non-JSON response: ${(await t.text()).substring(0,200)}`, {
                            message: e,
                            details: r,
                            category: "parse"
                        };
                        const o = await t.text();
                        if (!o || "" === o.trim()) return r = "Empty response body", {
                            message: e,
                            details: r,
                            category: "parse"
                        };
                        const a = JSON.parse(o);
                        e = a.message || a.description || e, r = JSON.stringify(a)
                    } catch (o) {
                        n = "parse", r = `Parse error: ${o instanceof Error?o.message:String(o)}`
                    }
                    return {
                        message: e,
                        details: r,
                        category: n
                    }
                }(u),
                e = new Error(t.message);
            throw e.details = t.details, e.status = u.status, e.category = t.category, e
        }
        e(g({
            baseFields: r,
            debugType: s.ShopifyCartUpdateLog,
            metadata: {
                sessionProps: t,
                clientInformation: a
            }
        }))
    } catch (n) {
        const o = n instanceof Error ? n.message : String(n),
            a = n.category || "unknown";
        e(k({
            errorCode: E.ShopifyUpdateCartError,
            baseFields: r,
            errorEventType: E.ShopifyUpdateCartError,
            errorMessage: o,
            metadata: {
                sessionProps: t,
                httpStatus: n.status || null,
                errorDetails: n.details || null,
                errorCategory: a
            }
        }))
    }
    return null
}
async function at() {
    try {
        let t;
        if (n);
        else {
            let e = await fetch("/cart.json");
            if (!e.ok) return null;
            t = await e.json()
        }
        return {
            cartId: t.token,
            currency: t.currency,
            country: window.Shopify ? .country,
            itemsCount: t.item_count,
            items: t.items
        }
    } catch (t) {}
    return null
}

function st(t) {
    if (!t) return "/cart";
    return t.includes("{{locale}}") ? t.replace("{{locale}}", I()) : t
}
const it = Object.freeze(Object.defineProperty({
    __proto__: null,
    addToCart: function(t) {
        return (async t => {
            const e = t.map(t => ({
                    id: t.variant_id,
                    quantity: t.quantity,
                    properties: {
                        _isAddedByAdsAgent: null
                    }
                })),
                r = await fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        items: e
                    })
                });
            if (!r.ok) {
                let t = "Unable to add item to cart.";
                try {
                    const e = await r.json();
                    t = e.message || e.description || t
                } catch {}
                throw new Error(t)
            }
            return await r.json()
        })(t).then(() => "success").catch(t => t instanceof Error ? t.message : String(t))
    },
    buyNowWithNewCart: async function(t) {
        try {
            const e = await async function(t) {
                try {
                    if (0 === t.length) return {
                        success: !1,
                        error: "No items to checkout."
                    };
                    const e = t[0];
                    if (!e) return {
                        success: !1,
                        error: "Invalid item data."
                    };
                    return {
                        success: !0,
                        checkoutUrl: `/cart/${e.variant_id.split("/").pop()??e.variant_id}:${e.quantity}`
                    }
                } catch (e) {
                    return {
                        success: !1,
                        error: "Unable to process buy now request."
                    }
                }
            }(t);
            if (e.success) return window.__buyNowCheckoutUrl = e.checkoutUrl, "success";
            return e.error || "Unable to process buy now request."
        } catch (e) {
            return "Unable to process buy now request."
        }
    },
    fetchCart: at,
    getCartUrl: st,
    getCheckoutUrl: function(t, e) {
        return t ? `/checkouts/cn/${t}` : st(e)
    },
    updateCartSessionAttributes: ot
}, Symbol.toStringTag, {
    value: "Module"
}));
async function ct(t, e, r) {
    if (!e) return;
    let n;
    try {
        n = function(t) {
            const e = new URL(window.location.href),
                r = t => t.toLowerCase().replace(/^www\./, "");
            return r(t.hostname) === r(e.hostname) && (t.protocol = e.protocol, t.host = e.host), t
        }(new URL(e, window.location.href))
    } catch {
        return
    }
    if (!["http:", "https:"].includes(n.protocol)) return;
    const o = new AbortController,
        a = window.setTimeout(() => o.abort(), 3e3);
    try {
        const e = await fetch(n, {
            credentials: "same-origin",
            headers: {
                Accept: "text/html"
            },
            signal: o.signal
        });
        if (!e.ok) return;
        const a = function(t, e) {
            return Array.from(t.querySelectorAll("form.cart")).find(t => [t.querySelector('[name="product_id"]') ? .value, t.querySelector('[name="add-to-cart"]') ? .getAttribute("value")].includes(e)) ? ? null
        }((new DOMParser).parseFromString(await e.text(), "text/html"), r);
        if (!a) return;
        a.querySelectorAll('input[type="hidden"][name]:not(:disabled)').forEach(e => {
            t.append(e.name, e.value)
        })
    } catch (s) {} finally {
        window.clearTimeout(a)
    }
}
async function ut(t) {
    try {
        for (const r of t) {
            const t = new URLSearchParams,
                n = r.product_id,
                o = r.variation_id;
            if (!n) {
                const t = `Missing product ID for variant_id: ${r.variant_id}`;
                throw new Error(t)
            }
            await ct(t, r.product_url, n), t.set("product_id", n), t.set("quantity", r.quantity.toString()), o ? t.set("variation_id", o) : t.delete("variation_id");
            const a = await fetch("/?wc-ajax=add_to_cart", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: t.toString()
            });
            if (!a.ok) {
                await a.text();
                throw new Error(`HTTP ${a.status}: Unable to add item to cart.`)
            }
            const s = await a.text();
            try {
                const t = JSON.parse(s);
                if (t.error) {
                    const e = t.error_message || "Unable to add item to cart.";
                    throw new Error(e)
                }
            } catch (e) {
                if (!(e instanceof SyntaxError)) throw e
            }
        }
        return "success"
    } catch (r) {
        return r.message || "Unable to add item to cart."
    }
}

function dt() {
    try {
        try {
            const t = localStorage.getItem("storeApiCartHash");
            if (t) return t
        } catch {}
        const t = document.cookie.split(";");
        let e = null;
        for (const r of t) {
            const t = r.trim();
            if (t.startsWith("wp_woocommerce_session_")) {
                const e = t.indexOf("=");
                if (-1 === e) continue;
                const r = t.substring(e + 1);
                if (r) {
                    const t = decodeURIComponent(r).split("||");
                    if (t.length > 0 && t[0]) return t[0]
                }
            }
            if (t.startsWith("woocommerce_cart_hash=")) {
                const r = t.substring(22);
                r && (e = r)
            }
        }
        if (e) return e
    } catch {}
    return null
}

function lt() {
    return "/checkout/"
}
const mt = Object.freeze(Object.defineProperty({
    __proto__: null,
    addToCart: ut,
    buyNowWithNewCart: async function(t) {
        try {
            if (0 === t.length) return "No items to checkout.";
            const e = await ut(t);
            return "success" === e ? (window.__buyNowCheckoutUrl = "/checkout/", "success") : e
        } catch (e) {
            return "Unable to process buy now request."
        }
    },
    fetchCart: async function() {
        try {
            const t = await fetch("/wp-json/wc/store/v1/cart", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }
            });
            if (!t.ok) return null;
            const e = await t.json();
            if (!e) return null;
            return {
                cartId: dt() || "wc-cart-id",
                currency: e.totals ? .currency_code || window.woocommerce_params ? .currency || "USD",
                country: window.woocommerce_params ? .country || "US",
                itemsCount: e.items_count || 0,
                items: (e.items || []).map(t => ({
                    variant_id: t.variation ? .length > 0 ? t.variation[0] ? .value : t.id,
                    product_id: t.id,
                    price: parseFloat(t.prices ? .price || 0) / 100,
                    title: t.name || "",
                    quantity: t.quantity || 0,
                    discounts: [],
                    sku: t.sku
                }))
            }
        } catch (t) {
            return null
        }
    },
    getCartUrl: function(t) {
        return t || "/cart/"
    },
    getCheckoutUrl: lt,
    hydrateWooCommerceHiddenProductFields: ct,
    updateCartSessionAttributes: async function(t, e, r) {
        try {
            const {
                sessionId: n,
                clientId: o
            } = t;
            if (!o) throw new Error("Missing required clientId");
            const a = await U(o, n),
                i = function() {
                    const t = window.wcBlocksMiddlewareConfig;
                    if (t ? .storeApiNonce) return t.storeApiNonce;
                    try {
                        const t = localStorage.getItem("storeApiNonce");
                        if (t) try {
                            const e = JSON.parse(t);
                            if (e ? .nonce) return e.nonce
                        } catch {
                            if (t) return t
                        }
                    } catch {}
                    const e = window.wcSettings;
                    if (e ? .nonce) return e.nonce;
                    const r = window.wpApiSettings;
                    return r ? .nonce ? r.nonce : null
                }();
            i || e(g({
                baseFields: r,
                debugType: s.WooCommerceCartUpdateLog,
                metadata: {
                    warning: "Missing WooCommerce nonce for cart session attributes update",
                    sessionProps: t
                }
            }));
            const c = {
                    attributes: {
                        sessionId: n,
                        clientId: o,
                        conversationId: a.conversationId || "",
                        clarityInformation: a.clarityInformation,
                        language: j(),
                        currency: M(),
                        country: N()
                    },
                    nonce: i
                },
                u = await async function(t, e, r = 3, n = 1e4) {
                    let o;
                    for (let s = 0; s <= r; s++) try {
                        const r = new AbortController,
                            o = setTimeout(() => r.abort(), n),
                            a = await fetch(t, { ...e,
                                signal: r.signal
                            });
                        return clearTimeout(o), a
                    } catch (a) {
                        if (o = a instanceof Error ? a : new Error(String(a)), s === r) break;
                        const t = Math.min(1e3 * Math.pow(2, s), 5e3);
                        await new Promise(e => setTimeout(e, t))
                    }
                    throw o
                }("/wp-json/adsagent/v1/cart/updateattributes", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json",
                        "Cache-Control": "no-cache",
                        ...i ? {
                            Nonce: i
                        } : {}
                    },
                    body: JSON.stringify(c)
                });
            if (!u.ok) {
                const t = await async function(t) {
                        let e = "Failed to update cart attributes",
                            r = "",
                            n = "server";
                        t.status >= 500 ? (n = "server", e = `Server error (${t.status}): ${t.statusText}`) : t.status >= 400 && (n = "client", e = `Client error (${t.status}): ${t.statusText}`);
                        try {
                            const n = t.headers.get("content-type");
                            if (!n || !n.includes("application/json")) return r = `Non-JSON response: ${(await t.text()).substring(0,200)}`, {
                                message: e,
                                details: r,
                                category: "parse"
                            };
                            const o = await t.text();
                            if (!o || "" === o.trim()) return r = "Empty response body", {
                                message: e,
                                details: r,
                                category: "parse"
                            };
                            const a = JSON.parse(o);
                            e = a.message || a.error || e, r = JSON.stringify(a)
                        } catch (o) {
                            n = "parse", r = `Parse error: ${o instanceof Error?o.message:String(o)}`
                        }
                        return {
                            message: e,
                            details: r,
                            category: n
                        }
                    }(u),
                    e = new Error(t.message);
                throw e.details = t.details, e.status = u.status, e.category = t.category, e
            }
            const d = await u.json();
            if (!d.success) throw new Error(d.error || "Failed to update cart attributes");
            e(g({
                baseFields: r,
                debugType: s.WooCommerceCartUpdateLog,
                metadata: {
                    sessionProps: t,
                    clientInformation: a
                }
            }))
        } catch (n) {
            const o = n instanceof Error ? n.message : String(n),
                a = n.category || "unknown";
            e(k({
                errorCode: E.WooCommerceUpdateCartError,
                baseFields: r,
                errorEventType: E.WooCommerceUpdateCartError,
                errorMessage: o,
                metadata: {
                    sessionProps: t,
                    httpStatus: n.status || null,
                    errorDetails: n.details || null,
                    errorCategory: a
                }
            }))
        }
        return null
    }
}, Symbol.toStringTag, {
    value: "Module"
}));
let pt = null;

function ft() {
    if (pt) return pt;
    switch (q()) {
        case L.Shopify:
            pt = it;
            break;
        case L.Magento:
            pt = nt;
            break;
        case L.WooCommerce:
            pt = mt;
            break;
        default:
            pt = it
    }
    return pt
}

function yt(t) {
    return O ? Promise.resolve("success") : ft().addToCart(t)
}

function wt(t, e, r) {
    return ft().updateCartSessionAttributes(t, e, r)
}

function gt() {
    return ft().fetchCart()
}

function ht(t) {
    return ft().getCartUrl(t)
}

function bt(t, e) {
    return ft().getCheckoutUrl(t, e)
}
export {
    wt as a, P as b, ot as c, ht as d, z as e, G as f, bt as g, Y as h, gt as i, at as j, yt as k, D as u
};