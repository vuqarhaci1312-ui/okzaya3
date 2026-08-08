function e(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if ("string" != typeof r && !Array.isArray(r))
            for (const t in r)
                if ("default" !== t && !(t in e)) {
                    const n = Object.getOwnPropertyDescriptor(r, t);
                    n && Object.defineProperty(e, t, n.get ? n : {
                        enumerable: !0,
                        get: () => r[t]
                    })
                }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}! function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
        new MutationObserver(e => {
            for (const n of e)
                if ("childList" === n.type)
                    for (const e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function t(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? t.credentials = "include" : "anonymous" === e.crossOrigin ? t.credentials = "omit" : t.credentials = "same-origin", t
        }(e);
        fetch(e.href, t)
    }
}();
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var r, a, i = {
        exports: {}
    },
    o = {};
var s, l, u = (a || (a = 1, i.exports = function() {
        if (r) return o;
        r = 1;
        var e = Symbol.for("react.transitional.element"),
            t = Symbol.for("react.fragment");

        function n(t, n, r) {
            var a = null;
            if (void 0 !== r && (a = "" + r), void 0 !== n.key && (a = "" + n.key), "key" in n)
                for (var i in r = {}, n) "key" !== i && (r[i] = n[i]);
            else r = n;
            return n = r.ref, {
                $$typeof: e,
                type: t,
                key: a,
                ref: void 0 !== n ? n : null,
                props: r
            }
        }
        return o.Fragment = t, o.jsx = n, o.jsxs = n, o
    }()), i.exports),
    c = {
        exports: {}
    },
    d = {},
    f = {
        exports: {}
    },
    p = {};

function h() {
    return l || (l = 1, f.exports = (s || (s = 1, function(e) {
        function t(e, t) {
            var n = e.length;
            e.push(t);
            e: for (; 0 < n;) {
                var r = n - 1 >>> 1,
                    i = e[r];
                if (!(0 < a(i, t))) break e;
                e[r] = t, e[n] = i, n = r
            }
        }

        function n(e) {
            return 0 === e.length ? null : e[0]
        }

        function r(e) {
            if (0 === e.length) return null;
            var t = e[0],
                n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
                    var s = 2 * (r + 1) - 1,
                        l = e[s],
                        u = s + 1,
                        c = e[u];
                    if (0 > a(l, n)) u < i && 0 > a(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
                    else {
                        if (!(u < i && 0 > a(c, n))) break e;
                        e[r] = c, e[u] = n, r = u
                    }
                }
            }
            return t
        }

        function a(e, t) {
            var n = e.sortIndex - t.sortIndex;
            return 0 !== n ? n : e.id - t.id
        }
        if (e.unstable_now = void 0, "object" == typeof performance && "function" == typeof performance.now) {
            var i = performance;
            e.unstable_now = function() {
                return i.now()
            }
        } else {
            var o = Date,
                s = o.now();
            e.unstable_now = function() {
                return o.now() - s
            }
        }
        var l = [],
            u = [],
            c = 1,
            d = null,
            f = 3,
            p = !1,
            h = !1,
            g = !1,
            m = !1,
            b = "function" == typeof setTimeout ? setTimeout : null,
            y = "function" == typeof clearTimeout ? clearTimeout : null,
            v = "undefined" != typeof setImmediate ? setImmediate : null;

        function w(e) {
            for (var a = n(u); null !== a;) {
                if (null === a.callback) r(u);
                else {
                    if (!(a.startTime <= e)) break;
                    r(u), a.sortIndex = a.expirationTime, t(l, a)
                }
                a = n(u)
            }
        }

        function S(e) {
            if (g = !1, w(e), !h)
                if (null !== n(l)) h = !0, E || (E = !0, k());
                else {
                    var t = n(u);
                    null !== t && A(S, t.startTime - e)
                }
        }
        var k, E = !1,
            C = -1,
            O = 5,
            T = -1;

        function x() {
            return !(!m && e.unstable_now() - T < O)
        }

        function _() {
            if (m = !1, E) {
                var t = e.unstable_now();
                T = t;
                var a = !0;
                try {
                    e: {
                        h = !1,
                        g && (g = !1, y(C), C = -1),
                        p = !0;
                        var i = f;
                        try {
                            t: {
                                for (w(t), d = n(l); null !== d && !(d.expirationTime > t && x());) {
                                    var o = d.callback;
                                    if ("function" == typeof o) {
                                        d.callback = null, f = d.priorityLevel;
                                        var s = o(d.expirationTime <= t);
                                        if (t = e.unstable_now(), "function" == typeof s) {
                                            d.callback = s, w(t), a = !0;
                                            break t
                                        }
                                        d === n(l) && r(l), w(t)
                                    } else r(l);
                                    d = n(l)
                                }
                                if (null !== d) a = !0;
                                else {
                                    var c = n(u);
                                    null !== c && A(S, c.startTime - t), a = !1
                                }
                            }
                            break e
                        }
                        finally {
                            d = null, f = i, p = !1
                        }
                        a = void 0
                    }
                }
                finally {
                    a ? k() : E = !1
                }
            }
        }
        if ("function" == typeof v) k = function() {
            v(_)
        };
        else if ("undefined" != typeof MessageChannel) {
            var N = new MessageChannel,
                P = N.port2;
            N.port1.onmessage = _, k = function() {
                P.postMessage(null)
            }
        } else k = function() {
            b(_, 0)
        };

        function A(t, n) {
            C = b(function() {
                t(e.unstable_now())
            }, n)
        }
        e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
            e.callback = null
        }, e.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e || (O = 0 < e ? Math.floor(1e3 / e) : 5)
        }, e.unstable_getCurrentPriorityLevel = function() {
            return f
        }, e.unstable_next = function(e) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = f
            }
            var n = f;
            f = t;
            try {
                return e()
            } finally {
                f = n
            }
        }, e.unstable_requestPaint = function() {
            m = !0
        }, e.unstable_runWithPriority = function(e, t) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var n = f;
            f = e;
            try {
                return t()
            } finally {
                f = n
            }
        }, e.unstable_scheduleCallback = function(r, a, i) {
            var o = e.unstable_now();
            switch (i = "object" == typeof i && null !== i && "number" == typeof(i = i.delay) && 0 < i ? o + i : o, r) {
                case 1:
                    var s = -1;
                    break;
                case 2:
                    s = 250;
                    break;
                case 5:
                    s = 1073741823;
                    break;
                case 4:
                    s = 1e4;
                    break;
                default:
                    s = 5e3
            }
            return r = {
                id: c++,
                callback: a,
                priorityLevel: r,
                startTime: i,
                expirationTime: s = i + s,
                sortIndex: -1
            }, i > o ? (r.sortIndex = i, t(u, r), null === n(l) && r === n(u) && (g ? (y(C), C = -1) : g = !0, A(S, i - o))) : (r.sortIndex = s, t(l, r), h || p || (h = !0, E || (E = !0, k()))), r
        }, e.unstable_shouldYield = x, e.unstable_wrapCallback = function(e) {
            var t = f;
            return function() {
                var n = f;
                f = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    f = n
                }
            }
        }
    }(p)), p)), f.exports
}
var g, m, b = {
        exports: {}
    },
    y = {};

function v() {
    if (g) return y;
    g = 1;
    var e = Symbol.for("react.transitional.element"),
        t = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        i = Symbol.for("react.consumer"),
        o = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        u = Symbol.for("react.memo"),
        c = Symbol.for("react.lazy"),
        d = Symbol.for("react.activity"),
        f = Symbol.iterator;
    var p = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        h = Object.assign,
        m = {};

    function b(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || p
    }

    function v() {}

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || p
    }
    b.prototype.isReactComponent = {}, b.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, v.prototype = b.prototype;
    var S = w.prototype = new v;
    S.constructor = w, h(S, b.prototype), S.isPureReactComponent = !0;
    var k = Array.isArray;

    function E() {}
    var C = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        O = Object.prototype.hasOwnProperty;

    function T(t, n, r) {
        var a = r.ref;
        return {
            $$typeof: e,
            type: t,
            key: n,
            ref: void 0 !== a ? a : null,
            props: r
        }
    }

    function x(t) {
        return "object" == typeof t && null !== t && t.$$typeof === e
    }
    var _ = /\/+/g;

    function N(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? (n = "" + e.key, r = {
            "=": "=0",
            ":": "=2"
        }, "$" + n.replace(/[=:]/g, function(e) {
            return r[e]
        })) : t.toString(36);
        var n, r
    }

    function P(n, r, a, i, o) {
        var s = typeof n;
        "undefined" !== s && "boolean" !== s || (n = null);
        var l, u, d = !1;
        if (null === n) d = !0;
        else switch (s) {
            case "bigint":
            case "string":
            case "number":
                d = !0;
                break;
            case "object":
                switch (n.$$typeof) {
                    case e:
                    case t:
                        d = !0;
                        break;
                    case c:
                        return P((d = n._init)(n._payload), r, a, i, o)
                }
        }
        if (d) return o = o(n), d = "" === i ? "." + N(n, 0) : i, k(o) ? (a = "", null != d && (a = d.replace(_, "$&/") + "/"), P(o, r, a, "", function(e) {
            return e
        })) : null != o && (x(o) && (l = o, u = a + (null == o.key || n && n.key === o.key ? "" : ("" + o.key).replace(_, "$&/") + "/") + d, o = T(l.type, u, l.props)), r.push(o)), 1;
        d = 0;
        var p, h = "" === i ? "." : i + ":";
        if (k(n))
            for (var g = 0; g < n.length; g++) d += P(i = n[g], r, a, s = h + N(i, g), o);
        else if ("function" == typeof(g = null === (p = n) || "object" != typeof p ? null : "function" == typeof(p = f && p[f] || p["@@iterator"]) ? p : null))
            for (n = g.call(n), g = 0; !(i = n.next()).done;) d += P(i = i.value, r, a, s = h + N(i, g++), o);
        else if ("object" === s) {
            if ("function" == typeof n.then) return P(function(e) {
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw e.reason;
                    default:
                        switch ("string" == typeof e.status ? e.then(E, E) : (e.status = "pending", e.then(function(t) {
                            "pending" === e.status && (e.status = "fulfilled", e.value = t)
                        }, function(t) {
                            "pending" === e.status && (e.status = "rejected", e.reason = t)
                        })), e.status) {
                            case "fulfilled":
                                return e.value;
                            case "rejected":
                                throw e.reason
                        }
                }
                throw e
            }(n), r, a, i, o);
            throw r = String(n), Error("Objects are not valid as a React child (found: " + ("[object Object]" === r ? "object with keys {" + Object.keys(n).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
        }
        return d
    }

    function A(e, t, n) {
        if (null == e) return e;
        var r = [],
            a = 0;
        return P(e, r, "", "", function(e) {
            return t.call(n, e, a++)
        }), r
    }

    function L(e) {
        if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(function(t) {
                0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
            }, function(t) {
                0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
            }), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
    }
    var I = "function" == typeof reportError ? reportError : function(e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return
            } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e)
        },
        R = {
            map: A,
            forEach: function(e, t, n) {
                A(e, function() {
                    t.apply(this, arguments)
                }, n)
            },
            count: function(e) {
                var t = 0;
                return A(e, function() {
                    t++
                }), t
            },
            toArray: function(e) {
                return A(e, function(e) {
                    return e
                }) || []
            },
            only: function(e) {
                if (!x(e)) throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        };
    return y.Activity = d, y.Children = R, y.Component = b, y.Fragment = n, y.Profiler = a, y.PureComponent = w, y.StrictMode = r, y.Suspense = l, y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, y.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return C.H.useMemoCache(e)
        }
    }, y.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }, y.cacheSignal = function() {
        return null
    }, y.cloneElement = function(e, t, n) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var r = h({}, e.props),
            a = e.key;
        if (null != t)
            for (i in void 0 !== t.key && (a = "" + t.key), t) !O.call(t, i) || "key" === i || "__self" === i || "__source" === i || "ref" === i && void 0 === t.ref || (r[i] = t[i]);
        var i = arguments.length - 2;
        if (1 === i) r.children = n;
        else if (1 < i) {
            for (var o = Array(i), s = 0; s < i; s++) o[s] = arguments[s + 2];
            r.children = o
        }
        return T(e.type, a, r)
    }, y.createContext = function(e) {
        return (e = {
            $$typeof: o,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = e, e.Consumer = {
            $$typeof: i,
            _context: e
        }, e
    }, y.createElement = function(e, t, n) {
        var r, a = {},
            i = null;
        if (null != t)
            for (r in void 0 !== t.key && (i = "" + t.key), t) O.call(t, r) && "key" !== r && "__self" !== r && "__source" !== r && (a[r] = t[r]);
        var o = arguments.length - 2;
        if (1 === o) a.children = n;
        else if (1 < o) {
            for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
            a.children = s
        }
        if (e && e.defaultProps)
            for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
        return T(e, i, a)
    }, y.createRef = function() {
        return {
            current: null
        }
    }, y.forwardRef = function(e) {
        return {
            $$typeof: s,
            render: e
        }
    }, y.isValidElement = x, y.lazy = function(e) {
        return {
            $$typeof: c,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: L
        }
    }, y.memo = function(e, t) {
        return {
            $$typeof: u,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, y.startTransition = function(e) {
        var t = C.T,
            n = {};
        C.T = n;
        try {
            var r = e(),
                a = C.S;
            null !== a && a(n, r), "object" == typeof r && null !== r && "function" == typeof r.then && r.then(E, I)
        } catch (i) {
            I(i)
        } finally {
            null !== t && null !== n.types && (t.types = n.types), C.T = t
        }
    }, y.unstable_useCacheRefresh = function() {
        return C.H.useCacheRefresh()
    }, y.use = function(e) {
        return C.H.use(e)
    }, y.useActionState = function(e, t, n) {
        return C.H.useActionState(e, t, n)
    }, y.useCallback = function(e, t) {
        return C.H.useCallback(e, t)
    }, y.useContext = function(e) {
        return C.H.useContext(e)
    }, y.useDebugValue = function() {}, y.useDeferredValue = function(e, t) {
        return C.H.useDeferredValue(e, t)
    }, y.useEffect = function(e, t) {
        return C.H.useEffect(e, t)
    }, y.useEffectEvent = function(e) {
        return C.H.useEffectEvent(e)
    }, y.useId = function() {
        return C.H.useId()
    }, y.useImperativeHandle = function(e, t, n) {
        return C.H.useImperativeHandle(e, t, n)
    }, y.useInsertionEffect = function(e, t) {
        return C.H.useInsertionEffect(e, t)
    }, y.useLayoutEffect = function(e, t) {
        return C.H.useLayoutEffect(e, t)
    }, y.useMemo = function(e, t) {
        return C.H.useMemo(e, t)
    }, y.useOptimistic = function(e, t) {
        return C.H.useOptimistic(e, t)
    }, y.useReducer = function(e, t, n) {
        return C.H.useReducer(e, t, n)
    }, y.useRef = function(e) {
        return C.H.useRef(e)
    }, y.useState = function(e) {
        return C.H.useState(e)
    }, y.useSyncExternalStore = function(e, t, n) {
        return C.H.useSyncExternalStore(e, t, n)
    }, y.useTransition = function() {
        return C.H.useTransition()
    }, y.version = "19.2.1", y
}

function w() {
    return m || (m = 1, b.exports = v()), b.exports
}
var S, k, E, C, O = {
        exports: {}
    },
    T = {};

function x() {
    if (S) return T;
    S = 1;
    var e = w();

    function t(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function n() {}
    var r = {
            d: {
                f: n,
                r: function() {
                    throw Error(t(522))
                },
                D: n,
                C: n,
                L: n,
                m: n,
                X: n,
                S: n,
                M: n
            },
            p: 0,
            findDOMNode: null
        },
        a = Symbol.for("react.portal");
    var i = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function o(e, t) {
        return "font" === e ? "" : "string" == typeof t ? "use-credentials" === t ? t : "" : void 0
    }
    return T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, T.createPortal = function(e, n) {
        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!n || 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType) throw Error(t(299));
        return function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: a,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }(e, n, null, r)
    }, T.flushSync = function(e) {
        var t = i.T,
            n = r.p;
        try {
            if (i.T = null, r.p = 2, e) return e()
        } finally {
            i.T = t, r.p = n, r.d.f()
        }
    }, T.preconnect = function(e, t) {
        "string" == typeof e && (t ? t = "string" == typeof(t = t.crossOrigin) ? "use-credentials" === t ? t : "" : void 0 : t = null, r.d.C(e, t))
    }, T.prefetchDNS = function(e) {
        "string" == typeof e && r.d.D(e)
    }, T.preinit = function(e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
            var n = t.as,
                a = o(n, t.crossOrigin),
                i = "string" == typeof t.integrity ? t.integrity : void 0,
                s = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
            "style" === n ? r.d.S(e, "string" == typeof t.precedence ? t.precedence : void 0, {
                crossOrigin: a,
                integrity: i,
                fetchPriority: s
            }) : "script" === n && r.d.X(e, {
                crossOrigin: a,
                integrity: i,
                fetchPriority: s,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0
            })
        }
    }, T.preinitModule = function(e, t) {
        if ("string" == typeof e)
            if ("object" == typeof t && null !== t) {
                if (null == t.as || "script" === t.as) {
                    var n = o(t.as, t.crossOrigin);
                    r.d.M(e, {
                        crossOrigin: n,
                        integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                        nonce: "string" == typeof t.nonce ? t.nonce : void 0
                    })
                }
            } else null == t && r.d.M(e)
    }, T.preload = function(e, t) {
        if ("string" == typeof e && "object" == typeof t && null !== t && "string" == typeof t.as) {
            var n = t.as,
                a = o(n, t.crossOrigin);
            r.d.L(e, n, {
                crossOrigin: a,
                integrity: "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
                type: "string" == typeof t.type ? t.type : void 0,
                fetchPriority: "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
                referrerPolicy: "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
                imageSrcSet: "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
                imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
                media: "string" == typeof t.media ? t.media : void 0
            })
        }
    }, T.preloadModule = function(e, t) {
        if ("string" == typeof e)
            if (t) {
                var n = o(t.as, t.crossOrigin);
                r.d.m(e, {
                    as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
                    crossOrigin: n,
                    integrity: "string" == typeof t.integrity ? t.integrity : void 0
                })
            } else r.d.m(e)
    }, T.requestFormReset = function(e) {
        r.d.r(e)
    }, T.unstable_batchedUpdates = function(e, t) {
        return e(t)
    }, T.useFormState = function(e, t, n) {
        return i.H.useFormState(e, t, n)
    }, T.useFormStatus = function() {
        return i.H.useHostTransitionStatus()
    }, T.version = "19.2.1", T
}

function _() {
    if (k) return O.exports;
    return k = 1,
        function e() {
            if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {}
        }(), O.exports = x(), O.exports
}

function N() {
    if (E) return d;
    E = 1;
    var e = h(),
        t = w(),
        n = _();

    function r(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function a(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
    }

    function i(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do {
                !!(4098 & (t = e).flags) && (n = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }

    function o(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function s(e) {
        if (31 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function l(e) {
        if (i(e) !== e) throw Error(r(188))
    }

    function u(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e;
        for (e = e.child; null !== e;) {
            if (null !== (t = u(e))) return t;
            e = e.sibling
        }
        return null
    }
    var c = Object.assign,
        f = Symbol.for("react.element"),
        p = Symbol.for("react.transitional.element"),
        g = Symbol.for("react.portal"),
        m = Symbol.for("react.fragment"),
        b = Symbol.for("react.strict_mode"),
        y = Symbol.for("react.profiler"),
        v = Symbol.for("react.consumer"),
        S = Symbol.for("react.context"),
        k = Symbol.for("react.forward_ref"),
        C = Symbol.for("react.suspense"),
        O = Symbol.for("react.suspense_list"),
        T = Symbol.for("react.memo"),
        x = Symbol.for("react.lazy"),
        N = Symbol.for("react.activity"),
        P = Symbol.for("react.memo_cache_sentinel"),
        A = Symbol.iterator;

    function L(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = A && e[A] || e["@@iterator"]) ? e : null
    }
    var I = Symbol.for("react.client.reference");

    function R(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.$$typeof === I ? null : e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case m:
                return "Fragment";
            case y:
                return "Profiler";
            case b:
                return "StrictMode";
            case C:
                return "Suspense";
            case O:
                return "SuspenseList";
            case N:
                return "Activity"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case g:
                return "Portal";
            case S:
                return e.displayName || "Context";
            case v:
                return (e._context.displayName || "Context") + ".Consumer";
            case k:
                var t = e.render;
                return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case T:
                return null !== (t = e.displayName || null) ? t : R(e.type) || "Memo";
            case x:
                t = e._payload, e = e._init;
                try {
                    return R(e(t))
                } catch (n) {}
        }
        return null
    }
    var M = Array.isArray,
        D = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        z = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        F = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        U = [],
        j = -1;

    function V(e) {
        return {
            current: e
        }
    }

    function H(e) {
        0 > j || (e.current = U[j], U[j] = null, j--)
    }

    function B(e, t) {
        j++, U[j] = e.current, e.current = t
    }
    var $, W, G = V(null),
        q = V(null),
        K = V(null),
        Q = V(null);

    function X(e, t) {
        switch (B(K, t), B(q, e), B(G, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? vd(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) e = wd(t = vd(t), e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        H(G), B(G, e)
    }

    function J() {
        H(G), H(q), H(K)
    }

    function Y(e) {
        null !== e.memoizedState && B(Q, e);
        var t = G.current,
            n = wd(t, e.type);
        t !== n && (B(q, e), B(G, n))
    }

    function Z(e) {
        q.current === e && (H(G), H(q)), Q.current === e && (H(Q), pf._currentValue = F)
    }

    function ee(e) {
        if (void 0 === $) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            $ = t && t[1] || "", W = -1 < n.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return "\n" + $ + e + W
    }
    var te = !1;

    function ne(e, t) {
        if (!e || te) return "";
        te = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var n = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(n.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" == typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(n, [])
                                } catch (a) {
                                    var r = a
                                }
                                Reflect.construct(e, [], n)
                            } else {
                                try {
                                    n.call()
                                } catch (i) {
                                    r = i
                                }
                                e.call(n.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (o) {
                                r = o
                            }(n = e()) && "function" == typeof n.catch && n.catch(function() {})
                        }
                    } catch (s) {
                        if (s && r && "string" == typeof s.stack) return [s.stack, r.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
            a && a.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = r.DetermineComponentFrameRoot(),
                o = i[0],
                s = i[1];
            if (o && s) {
                var l = o.split("\n"),
                    u = s.split("\n");
                for (a = r = 0; r < l.length && !l[r].includes("DetermineComponentFrameRoot");) r++;
                for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot");) a++;
                if (r === l.length || a === u.length)
                    for (r = l.length - 1, a = u.length - 1; 1 <= r && 0 <= a && l[r] !== u[a];) a--;
                for (; 1 <= r && 0 <= a; r--, a--)
                    if (l[r] !== u[a]) {
                        if (1 !== r || 1 !== a)
                            do {
                                if (r--, 0 > --a || l[r] !== u[a]) {
                                    var c = "\n" + l[r].replace(" at new ", " at ");
                                    return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                                }
                            } while (1 <= r && 0 <= a);
                        break
                    }
            }
        } finally {
            te = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? ee(n) : ""
    }

    function re(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return ee(e.type);
            case 16:
                return ee("Lazy");
            case 13:
                return e.child !== t && null !== t ? ee("Suspense Fallback") : ee("Suspense");
            case 19:
                return ee("SuspenseList");
            case 0:
            case 15:
                return ne(e.type, !1);
            case 11:
                return ne(e.type.render, !1);
            case 1:
                return ne(e.type, !0);
            case 31:
                return ee("Activity");
            default:
                return ""
        }
    }

    function ae(e) {
        try {
            var t = "",
                n = null;
            do {
                t += re(e, n), n = e, e = e.return
            } while (e);
            return t
        } catch (r) {
            return "\nError generating stack: " + r.message + "\n" + r.stack
        }
    }
    var ie = Object.prototype.hasOwnProperty,
        oe = e.unstable_scheduleCallback,
        se = e.unstable_cancelCallback,
        le = e.unstable_shouldYield,
        ue = e.unstable_requestPaint,
        ce = e.unstable_now,
        de = e.unstable_getCurrentPriorityLevel,
        fe = e.unstable_ImmediatePriority,
        pe = e.unstable_UserBlockingPriority,
        he = e.unstable_NormalPriority,
        ge = e.unstable_LowPriority,
        me = e.unstable_IdlePriority,
        be = e.log,
        ye = e.unstable_setDisableYieldValue,
        ve = null,
        we = null;

    function Se(e) {
        if ("function" == typeof be && ye(e), we && "function" == typeof we.setStrictMode) try {
            we.setStrictMode(ve, e)
        } catch (t) {}
    }
    var ke = Math.clz32 ? Math.clz32 : function(e) {
            return 0 === (e >>>= 0) ? 32 : 31 - (Ee(e) / Ce | 0) | 0
        },
        Ee = Math.log,
        Ce = Math.LN2;
    var Oe = 256,
        Te = 262144,
        xe = 4194304;

    function _e(e) {
        var t = 42 & e;
        if (0 !== t) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
                return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return 3932160 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return 62914560 & e;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function Ne(e, t, n) {
        var r = e.pendingLanes;
        if (0 === r) return 0;
        var a = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes;
        e = e.warmLanes;
        var s = 134217727 & r;
        return 0 !== s ? 0 !== (r = s & ~i) ? a = _e(r) : 0 !== (o &= s) ? a = _e(o) : n || 0 !== (n = s & ~e) && (a = _e(n)) : 0 !== (s = r & ~i) ? a = _e(s) : 0 !== o ? a = _e(o) : n || 0 !== (n = r & ~e) && (a = _e(n)), 0 === a ? 0 : 0 !== t && t !== a && 0 === (t & i) && ((i = a & -a) >= (n = t & -t) || 32 === i && 4194048 & n) ? t : a
    }

    function Pe(e, t) {
        return 0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
    }

    function Ae(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            default:
                return -1
        }
    }

    function Le() {
        var e = xe;
        return !(62914560 & (xe <<= 1)) && (xe = 4194304), e
    }

    function Ie(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Re(e, t) {
        e.pendingLanes |= t, 268435456 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Me(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var r = 31 - ke(t);
        e.entangledLanes |= t, e.entanglements[r] = 1073741824 | e.entanglements[r] | 261930 & n
    }

    function De(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var r = 31 - ke(n),
                a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a
        }
    }

    function ze(e, t) {
        var n = t & -t;
        return 0 !== ((n = 42 & n ? 1 : Fe(n)) & (e.suspendedLanes | t)) ? 0 : n
    }

    function Fe(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function Ue(e) {
        return 2 < (e &= -e) ? 8 < e ? 134217727 & e ? 32 : 268435456 : 8 : 2
    }

    function je() {
        var e = z.p;
        return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Nf(e.type)
    }

    function Ve(e, t) {
        var n = z.p;
        try {
            return z.p = e, t()
        } finally {
            z.p = n
        }
    }
    var He = Math.random().toString(36).slice(2),
        Be = "__reactFiber$" + He,
        $e = "__reactProps$" + He,
        We = "__reactContainer$" + He,
        Ge = "__reactEvents$" + He,
        qe = "__reactListeners$" + He,
        Ke = "__reactHandles$" + He,
        Qe = "__reactResources$" + He,
        Xe = "__reactMarker$" + He;

    function Je(e) {
        delete e[Be], delete e[$e], delete e[Ge], delete e[qe], delete e[Ke]
    }

    function Ye(e) {
        var t = e[Be];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[We] || n[Be]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = Fd(e); null !== e;) {
                        if (n = e[Be]) return n;
                        e = Fd(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function Ze(e) {
        if (e = e[Be] || e[We]) {
            var t = e.tag;
            if (5 === t || 6 === t || 13 === t || 31 === t || 26 === t || 27 === t || 3 === t) return e
        }
        return null
    }

    function et(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
        throw Error(r(33))
    }

    function tt(e) {
        var t = e[Qe];
        return t || (t = e[Qe] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function nt(e) {
        e[Xe] = !0
    }
    var rt = new Set,
        at = {};

    function it(e, t) {
        ot(e, t), ot(e + "Capture", t)
    }

    function ot(e, t) {
        for (at[e] = t, e = 0; e < t.length; e++) rt.add(t[e])
    }
    var st = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        lt = {},
        ut = {};

    function ct(e, t, n) {
        if (a = t, ie.call(ut, a) || !ie.call(lt, a) && (st.test(a) ? ut[a] = !0 : (lt[a] = !0, 0)))
            if (null === n) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        return void e.removeAttribute(t);
                    case "boolean":
                        var r = t.toLowerCase().slice(0, 5);
                        if ("data-" !== r && "aria-" !== r) return void e.removeAttribute(t)
                }
                e.setAttribute(t, "" + n)
            }
        var a
    }

    function dt(e, t, n) {
        if (null === n) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    return void e.removeAttribute(t)
            }
            e.setAttribute(t, "" + n)
        }
    }

    function ft(e, t, n, r) {
        if (null === r) e.removeAttribute(n);
        else {
            switch (typeof r) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    return void e.removeAttribute(n)
            }
            e.setAttributeNS(t, n, "" + r)
        }
    }

    function pt(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
                return e;
            default:
                return ""
        }
    }

    function ht(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function gt(e) {
        if (!e._valueTracker) {
            var t = ht(e) ? "checked" : "value";
            e._valueTracker = function(e, t, n) {
                var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
                if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
                    var a = r.get,
                        i = r.set;
                    return Object.defineProperty(e, t, {
                        configurable: !0,
                        get: function() {
                            return a.call(this)
                        },
                        set: function(e) {
                            n = "" + e, i.call(this, e)
                        }
                    }), Object.defineProperty(e, t, {
                        enumerable: r.enumerable
                    }), {
                        getValue: function() {
                            return n
                        },
                        setValue: function(e) {
                            n = "" + e
                        },
                        stopTracking: function() {
                            e._valueTracker = null, delete e[t]
                        }
                    }
                }
            }(e, t, "" + e[t])
        }
    }

    function mt(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = ht(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function bt(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }
    var yt = /[\n"\\]/g;

    function vt(e) {
        return e.replace(yt, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }

    function wt(e, t, n, r, a, i, o, s) {
        e.name = "", null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o ? e.type = o : e.removeAttribute("type"), null != t ? "number" === o ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + pt(t)) : e.value !== "" + pt(t) && (e.value = "" + pt(t)) : "submit" !== o && "reset" !== o || e.removeAttribute("value"), null != t ? kt(e, o, pt(t)) : null != n ? kt(e, o, pt(n)) : null != r && e.removeAttribute("value"), null == a && null != i && (e.defaultChecked = !!i), null != a && (e.checked = a && "function" != typeof a && "symbol" != typeof a), null != s && "function" != typeof s && "symbol" != typeof s && "boolean" != typeof s ? e.name = "" + pt(s) : e.removeAttribute("name")
    }

    function St(e, t, n, r, a, i, o, s) {
        if (null != i && "function" != typeof i && "symbol" != typeof i && "boolean" != typeof i && (e.type = i), null != t || null != n) {
            if (("submit" === i || "reset" === i) && null == t) return void gt(e);
            n = null != n ? "" + pt(n) : "", t = null != t ? "" + pt(t) : n, s || t === e.value || (e.value = t), e.defaultValue = t
        }
        r = "function" != typeof(r = null != r ? r : a) && "symbol" != typeof r && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, null != o && "function" != typeof o && "symbol" != typeof o && "boolean" != typeof o && (e.name = o), gt(e)
    }

    function kt(e, t, n) {
        "number" === t && bt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }

    function Et(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + pt(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
        }
    }

    function Ct(e, t, n) {
        null == t || ((t = "" + pt(t)) !== e.value && (e.value = t), null != n) ? e.defaultValue = null != n ? "" + pt(n) : "" : e.defaultValue !== t && (e.defaultValue = t)
    }

    function Ot(e, t, n, a) {
        if (null == t) {
            if (null != a) {
                if (null != n) throw Error(r(92));
                if (M(a)) {
                    if (1 < a.length) throw Error(r(93));
                    a = a[0]
                }
                n = a
            }
            null == n && (n = ""), t = n
        }
        n = pt(t), e.defaultValue = n, (a = e.textContent) === n && "" !== a && null !== a && (e.value = a), gt(e)
    }

    function Tt(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }
    var xt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function _t(e, t, n) {
        var r = 0 === t.indexOf("--");
        null == n || "boolean" == typeof n || "" === n ? r ? e.setProperty(t, "") : "float" === t ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : "number" != typeof n || 0 === n || xt.has(t) ? "float" === t ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function Nt(e, t, n) {
        if (null != t && "object" != typeof t) throw Error(r(62));
        if (e = e.style, null != n) {
            for (var a in n) !n.hasOwnProperty(a) || null != t && t.hasOwnProperty(a) || (0 === a.indexOf("--") ? e.setProperty(a, "") : "float" === a ? e.cssFloat = "" : e[a] = "");
            for (var i in t) a = t[i], t.hasOwnProperty(i) && n[i] !== a && _t(e, i, a)
        } else
            for (var o in t) t.hasOwnProperty(o) && _t(e, o, t[o])
    }

    function Pt(e) {
        if (-1 === e.indexOf("-")) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var At = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Lt = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function It(e) {
        return Lt.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }

    function Rt() {}
    var Mt = null;

    function Dt(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }
    var zt = null,
        Ft = null;

    function Ut(e) {
        var t = Ze(e);
        if (t && (e = t.stateNode)) {
            var n = e[$e] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (wt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, "radio" === n.type && null != t) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + vt("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var a = n[t];
                            if (a !== e && a.form === e.form) {
                                var i = a[$e] || null;
                                if (!i) throw Error(r(90));
                                wt(a, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                            }
                        }
                        for (t = 0; t < n.length; t++)(a = n[t]).form === e.form && mt(a)
                    }
                    break e;
                case "textarea":
                    Ct(e, n.value, n.defaultValue);
                    break e;
                case "select":
                    null != (t = n.value) && Et(e, !!n.multiple, t, !1)
            }
        }
    }
    var jt = !1;

    function Vt(e, t, n) {
        if (jt) return e(t, n);
        jt = !0;
        try {
            return e(t)
        } finally {
            if (jt = !1, (null !== zt || null !== Ft) && (tc(), zt && (t = zt, e = Ft, Ft = zt = null, Ut(t), e)))
                for (t = 0; t < e.length; t++) Ut(e[t])
        }
    }

    function Ht(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var a = n[$e] || null;
        if (null === a) return null;
        n = a[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (a = !a.disabled) || (a = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !a;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(r(231, t, typeof n));
        return n
    }
    var Bt = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        $t = !1;
    if (Bt) try {
        var Wt = {};
        Object.defineProperty(Wt, "passive", {
            get: function() {
                $t = !0
            }
        }), window.addEventListener("test", Wt, Wt), window.removeEventListener("test", Wt, Wt)
    } catch (ep) {
        $t = !1
    }
    var Gt = null,
        qt = null,
        Kt = null;

    function Qt() {
        if (Kt) return Kt;
        var e, t, n = qt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
        return Kt = a.slice(e, 1 < t ? 1 - t : void 0)
    }

    function Xt(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }

    function Jt() {
        return !0
    }

    function Yt() {
        return !1
    }

    function Zt(e) {
        function t(t, n, r, a, i) {
            for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]);
            return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? Jt : Yt, this.isPropagationStopped = Yt, this
        }
        return c(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Jt)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Jt)
            },
            persist: function() {},
            isPersistent: Jt
        }), t
    }
    var en, tn, nn, rn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        an = Zt(rn),
        on = c({}, rn, {
            view: 0,
            detail: 0
        }),
        sn = Zt(on),
        ln = c({}, on, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: vn,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== nn && (nn && "mousemove" === e.type ? (en = e.screenX - nn.screenX, tn = e.screenY - nn.screenY) : tn = en = 0, nn = e), en)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : tn
            }
        }),
        un = Zt(ln),
        cn = Zt(c({}, ln, {
            dataTransfer: 0
        })),
        dn = Zt(c({}, on, {
            relatedTarget: 0
        })),
        fn = Zt(c({}, rn, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        pn = Zt(c({}, rn, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        })),
        hn = Zt(c({}, rn, {
            data: 0
        })),
        gn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        mn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        bn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function yn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = bn[e]) && !!t[e]
    }

    function vn() {
        return yn
    }
    var wn = Zt(c({}, on, {
            key: function(e) {
                if (e.key) {
                    var t = gn[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = Xt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? mn[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: vn,
            charCode: function(e) {
                return "keypress" === e.type ? Xt(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? Xt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        })),
        Sn = Zt(c({}, ln, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })),
        kn = Zt(c({}, on, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: vn
        })),
        En = Zt(c({}, rn, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })),
        Cn = Zt(c({}, ln, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })),
        On = Zt(c({}, rn, {
            newState: 0,
            oldState: 0
        })),
        Tn = [9, 13, 27, 32],
        xn = Bt && "CompositionEvent" in window,
        _n = null;
    Bt && "documentMode" in document && (_n = document.documentMode);
    var Nn = Bt && "TextEvent" in window && !_n,
        Pn = Bt && (!xn || _n && 8 < _n && 11 >= _n),
        An = String.fromCharCode(32),
        Ln = !1;

    function In(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== Tn.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Rn(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var Mn = !1;
    var Dn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function zn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Dn[e.type] : "textarea" === t
    }

    function Fn(e, t, n, r) {
        zt ? Ft ? Ft.push(r) : Ft = [r] : zt = r, 0 < (t = id(t, "onChange")).length && (n = new an("onChange", "change", null, n, r), e.push({
            event: n,
            listeners: t
        }))
    }
    var Un = null,
        jn = null;

    function Vn(e) {
        Jc(e, 0)
    }

    function Hn(e) {
        if (mt(et(e))) return e
    }

    function Bn(e, t) {
        if ("change" === e) return t
    }
    var $n = !1;
    if (Bt) {
        var Wn;
        if (Bt) {
            var Gn = "oninput" in document;
            if (!Gn) {
                var qn = document.createElement("div");
                qn.setAttribute("oninput", "return;"), Gn = "function" == typeof qn.oninput
            }
            Wn = Gn
        } else Wn = !1;
        $n = Wn && (!document.documentMode || 9 < document.documentMode)
    }

    function Kn() {
        Un && (Un.detachEvent("onpropertychange", Qn), jn = Un = null)
    }

    function Qn(e) {
        if ("value" === e.propertyName && Hn(jn)) {
            var t = [];
            Fn(t, jn, e, Dt(e)), Vt(Vn, t)
        }
    }

    function Xn(e, t, n) {
        "focusin" === e ? (Kn(), jn = n, (Un = t).attachEvent("onpropertychange", Qn)) : "focusout" === e && Kn()
    }

    function Jn(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Hn(jn)
    }

    function Yn(e, t) {
        if ("click" === e) return Hn(t)
    }

    function Zn(e, t) {
        if ("input" === e || "change" === e) return Hn(t)
    }
    var er = "function" == typeof Object.is ? Object.is : function(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    };

    function tr(e, t) {
        if (er(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!ie.call(t, a) || !er(e[a], t[a])) return !1
        }
        return !0
    }

    function nr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function rr(e, t) {
        var n, r = nr(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {
                    node: r,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = nr(r)
        }
    }

    function ar(e, t) {
        return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? ar(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
    }

    function ir(e) {
        for (var t = bt((e = null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window).document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (r) {
                n = !1
            }
            if (!n) break;
            t = bt((e = t.contentWindow).document)
        }
        return t
    }

    function or(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var sr = Bt && "documentMode" in document && 11 >= document.documentMode,
        lr = null,
        ur = null,
        cr = null,
        dr = !1;

    function fr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        dr || null == lr || lr !== bt(r) || ("selectionStart" in (r = lr) && or(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : r = {
            anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }, cr && tr(cr, r) || (cr = r, 0 < (r = id(ur, "onSelect")).length && (t = new an("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: r
        }), t.target = lr)))
    }

    function pr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var hr = {
            animationend: pr("Animation", "AnimationEnd"),
            animationiteration: pr("Animation", "AnimationIteration"),
            animationstart: pr("Animation", "AnimationStart"),
            transitionrun: pr("Transition", "TransitionRun"),
            transitionstart: pr("Transition", "TransitionStart"),
            transitioncancel: pr("Transition", "TransitionCancel"),
            transitionend: pr("Transition", "TransitionEnd")
        },
        gr = {},
        mr = {};

    function br(e) {
        if (gr[e]) return gr[e];
        if (!hr[e]) return e;
        var t, n = hr[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in mr) return gr[e] = n[t];
        return e
    }
    Bt && (mr = document.createElement("div").style, "AnimationEvent" in window || (delete hr.animationend.animation, delete hr.animationiteration.animation, delete hr.animationstart.animation), "TransitionEvent" in window || delete hr.transitionend.transition);
    var yr = br("animationend"),
        vr = br("animationiteration"),
        wr = br("animationstart"),
        Sr = br("transitionrun"),
        kr = br("transitionstart"),
        Er = br("transitioncancel"),
        Cr = br("transitionend"),
        Or = new Map,
        Tr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function xr(e, t) {
        Or.set(e, t), it(t, [e])
    }
    Tr.push("scrollEnd");
    var _r = "function" == typeof reportError ? reportError : function(e) {
            if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return
            } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e)
        },
        Nr = [],
        Pr = 0,
        Ar = 0;

    function Lr() {
        for (var e = Pr, t = Ar = Pr = 0; t < e;) {
            var n = Nr[t];
            Nr[t++] = null;
            var r = Nr[t];
            Nr[t++] = null;
            var a = Nr[t];
            Nr[t++] = null;
            var i = Nr[t];
            if (Nr[t++] = null, null !== r && null !== a) {
                var o = r.pending;
                null === o ? a.next = a : (a.next = o.next, o.next = a), r.pending = a
            }
            0 !== i && Dr(n, a, i)
        }
    }

    function Ir(e, t, n, r) {
        Nr[Pr++] = e, Nr[Pr++] = t, Nr[Pr++] = n, Nr[Pr++] = r, Ar |= r, e.lanes |= r, null !== (e = e.alternate) && (e.lanes |= r)
    }

    function Rr(e, t, n, r) {
        return Ir(e, t, n, r), zr(e)
    }

    function Mr(e, t) {
        return Ir(e, null, null, t), zr(e)
    }

    function Dr(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        null !== r && (r.lanes |= n);
        for (var a = !1, i = e.return; null !== i;) i.childLanes |= n, null !== (r = i.alternate) && (r.childLanes |= n), 22 === i.tag && (null === (e = i.stateNode) || 1 & e._visibility || (a = !0)), e = i, i = i.return;
        return 3 === e.tag ? (i = e.stateNode, a && null !== t && (a = 31 - ke(n), null === (r = (e = i.hiddenUpdates)[a]) ? e[a] = [t] : r.push(t), t.lane = 536870912 | n), i) : null
    }

    function zr(e) {
        if (50 < Gu) throw Gu = 0, qu = null, Error(r(185));
        for (var t = e.return; null !== t;) t = (e = t).return;
        return 3 === e.tag ? e.stateNode : null
    }
    var Fr = {};

    function Ur(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function jr(e, t, n, r) {
        return new Ur(e, t, n, r)
    }

    function Vr(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Hr(e, t) {
        var n = e.alternate;
        return null === n ? ((n = jr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 65011712 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function Br(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return null === n ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = null === t ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function $r(e, t, n, a, i, o) {
        var s = 0;
        if (a = e, "function" == typeof e) Vr(e) && (s = 1);
        else if ("string" == typeof e) s = function(e, t, n) {
            if (1 === n || null != t.itemProp) return !1;
            switch (e) {
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if ("string" != typeof t.precedence || "string" != typeof t.href || "" === t.href) break;
                    return !0;
                case "link":
                    if ("string" != typeof t.rel || "string" != typeof t.href || "" === t.href || t.onLoad || t.onError) break;
                    return "stylesheet" !== t.rel || (e = t.disabled, "string" == typeof t.precedence && null == e);
                case "script":
                    if (t.async && "function" != typeof t.async && "symbol" != typeof t.async && !t.onLoad && !t.onError && t.src && "string" == typeof t.src) return !0
            }
            return !1
        }(e, n, G.current) ? 26 : "html" === e || "head" === e || "body" === e ? 27 : 5;
        else e: switch (e) {
            case N:
                return (e = jr(31, n, t, i)).elementType = N, e.lanes = o, e;
            case m:
                return Wr(n.children, i, o, t);
            case b:
                s = 8, i |= 24;
                break;
            case y:
                return (e = jr(12, n, t, 2 | i)).elementType = y, e.lanes = o, e;
            case C:
                return (e = jr(13, n, t, i)).elementType = C, e.lanes = o, e;
            case O:
                return (e = jr(19, n, t, i)).elementType = O, e.lanes = o, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case S:
                        s = 10;
                        break e;
                    case v:
                        s = 9;
                        break e;
                    case k:
                        s = 11;
                        break e;
                    case T:
                        s = 14;
                        break e;
                    case x:
                        s = 16, a = null;
                        break e
                }
                s = 29, n = Error(r(130, null === e ? "null" : typeof e, "")), a = null
        }
        return (t = jr(s, n, t, i)).elementType = e, t.type = a, t.lanes = o, t
    }

    function Wr(e, t, n, r) {
        return (e = jr(7, e, r, t)).lanes = n, e
    }

    function Gr(e, t, n) {
        return (e = jr(6, e, null, t)).lanes = n, e
    }

    function qr(e) {
        var t = jr(18, null, null, 0);
        return t.stateNode = e, t
    }

    function Kr(e, t, n) {
        return (t = jr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var Qr = new WeakMap;

    function Xr(e, t) {
        if ("object" == typeof e && null !== e) {
            var n = Qr.get(e);
            return void 0 !== n ? n : (t = {
                value: e,
                source: t,
                stack: ae(t)
            }, Qr.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: ae(t)
        }
    }
    var Jr = [],
        Yr = 0,
        Zr = null,
        ea = 0,
        ta = [],
        na = 0,
        ra = null,
        aa = 1,
        ia = "";

    function oa(e, t) {
        Jr[Yr++] = ea, Jr[Yr++] = Zr, Zr = e, ea = t
    }

    function sa(e, t, n) {
        ta[na++] = aa, ta[na++] = ia, ta[na++] = ra, ra = e;
        var r = aa;
        e = ia;
        var a = 32 - ke(r) - 1;
        r &= ~(1 << a), n += 1;
        var i = 32 - ke(t) + a;
        if (30 < i) {
            var o = a - a % 5;
            i = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, aa = 1 << 32 - ke(t) + a | n << a | r, ia = i + e
        } else aa = 1 << i | n << a | r, ia = e
    }

    function la(e) {
        null !== e.return && (oa(e, 1), sa(e, 1, 0))
    }

    function ua(e) {
        for (; e === Zr;) Zr = Jr[--Yr], Jr[Yr] = null, ea = Jr[--Yr], Jr[Yr] = null;
        for (; e === ra;) ra = ta[--na], ta[na] = null, ia = ta[--na], ta[na] = null, aa = ta[--na], ta[na] = null
    }

    function ca(e, t) {
        ta[na++] = aa, ta[na++] = ia, ta[na++] = ra, aa = t.id, ia = t.overflow, ra = e
    }
    var da = null,
        fa = null,
        pa = !1,
        ha = null,
        ga = !1,
        ma = Error(r(519));

    function ba(e) {
        throw Ea(Xr(Error(r(418, 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? "text" : "HTML", "")), e)), ma
    }

    function ya(e) {
        var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
        switch (t[Be] = e, t[$e] = r, n) {
            case "dialog":
                Yc("cancel", t), Yc("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Yc("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < Qc.length; n++) Yc(Qc[n], t);
                break;
            case "source":
                Yc("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Yc("error", t), Yc("load", t);
                break;
            case "details":
                Yc("toggle", t);
                break;
            case "input":
                Yc("invalid", t), St(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
                break;
            case "select":
                Yc("invalid", t);
                break;
            case "textarea":
                Yc("invalid", t), Ot(t, r.value, r.defaultValue, r.children)
        }
        "string" != typeof(n = r.children) && "number" != typeof n && "bigint" != typeof n || t.textContent === "" + n || !0 === r.suppressHydrationWarning || dd(t.textContent, n) ? (null != r.popover && (Yc("beforetoggle", t), Yc("toggle", t)), null != r.onScroll && Yc("scroll", t), null != r.onScrollEnd && Yc("scrollend", t), null != r.onClick && (t.onclick = Rt), t = !0) : t = !1, t || ba(e, !0)
    }

    function va(e) {
        for (da = e.return; da;) switch (da.tag) {
            case 5:
            case 31:
            case 13:
                return void(ga = !1);
            case 27:
            case 3:
                return void(ga = !0);
            default:
                da = da.return
        }
    }

    function wa(e) {
        if (e !== da) return !1;
        if (!pa) return va(e), pa = !0, !1;
        var t, n = e.tag;
        if ((t = 3 !== n && 27 !== n) && ((t = 5 === n) && (t = !("form" !== (t = e.type) && "button" !== t) || Sd(e.type, e.memoizedProps)), t = !t), t && fa && ba(e), va(e), 13 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
            fa = zd(e)
        } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(r(317));
            fa = zd(e)
        } else 27 === n ? (n = fa, _d(e.type) ? (e = Dd, Dd = null, fa = e) : fa = n) : fa = da ? Md(e.stateNode.nextSibling) : null;
        return !0
    }

    function Sa() {
        fa = da = null, pa = !1
    }

    function ka() {
        var e = ha;
        return null !== e && (null === Lu ? Lu = e : Lu.push.apply(Lu, e), ha = null), e
    }

    function Ea(e) {
        null === ha ? ha = [e] : ha.push(e)
    }
    var Ca = V(null),
        Oa = null,
        Ta = null;

    function xa(e, t, n) {
        B(Ca, t._currentValue), t._currentValue = n
    }

    function _a(e) {
        e._currentValue = Ca.current, H(Ca)
    }

    function Na(e, t, n) {
        for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function Pa(e, t, n, a) {
        var i = e.child;
        for (null !== i && (i.return = e); null !== i;) {
            var o = i.dependencies;
            if (null !== o) {
                var s = i.child;
                o = o.firstContext;
                e: for (; null !== o;) {
                    var l = o;
                    o = i;
                    for (var u = 0; u < t.length; u++)
                        if (l.context === t[u]) {
                            o.lanes |= n, null !== (l = o.alternate) && (l.lanes |= n), Na(o.return, n, e), a || (s = null);
                            break e
                        }
                    o = l.next
                }
            } else if (18 === i.tag) {
                if (null === (s = i.return)) throw Error(r(341));
                s.lanes |= n, null !== (o = s.alternate) && (o.lanes |= n), Na(s, n, e), s = null
            } else s = i.child;
            if (null !== s) s.return = i;
            else
                for (s = i; null !== s;) {
                    if (s === e) {
                        s = null;
                        break
                    }
                    if (null !== (i = s.sibling)) {
                        i.return = s.return, s = i;
                        break
                    }
                    s = s.return
                }
            i = s
        }
    }

    function Aa(e, t, n, a) {
        e = null;
        for (var i = t, o = !1; null !== i;) {
            if (!o)
                if (524288 & i.flags) o = !0;
                else if (262144 & i.flags) break;
            if (10 === i.tag) {
                var s = i.alternate;
                if (null === s) throw Error(r(387));
                if (null !== (s = s.memoizedProps)) {
                    var l = i.type;
                    er(i.pendingProps.value, s.value) || (null !== e ? e.push(l) : e = [l])
                }
            } else if (i === Q.current) {
                if (null === (s = i.alternate)) throw Error(r(387));
                s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (null !== e ? e.push(pf) : e = [pf])
            }
            i = i.return
        }
        null !== e && Pa(t, e, n, a), t.flags |= 262144
    }

    function La(e) {
        for (e = e.firstContext; null !== e;) {
            if (!er(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function Ia(e) {
        Oa = e, Ta = null, null !== (e = e.dependencies) && (e.firstContext = null)
    }

    function Ra(e) {
        return Da(Oa, e)
    }

    function Ma(e, t) {
        return null === Oa && Ia(e), Da(e, t)
    }

    function Da(e, t) {
        var n = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, null === Ta) {
            if (null === e) throw Error(r(308));
            Ta = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else Ta = Ta.next = t;
        return n
    }
    var za = "undefined" != typeof AbortController ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(t, n) {
                        e.push(n)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(e) {
                    return e()
                })
            }
        },
        Fa = e.unstable_scheduleCallback,
        Ua = e.unstable_NormalPriority,
        ja = {
            $$typeof: S,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Va() {
        return {
            controller: new za,
            data: new Map,
            refCount: 0
        }
    }

    function Ha(e) {
        e.refCount--, 0 === e.refCount && Fa(Ua, function() {
            e.controller.abort()
        })
    }
    var Ba = null,
        $a = 0,
        Wa = 0,
        Ga = null;

    function qa() {
        if (0 === --$a && null !== Ba) {
            null !== Ga && (Ga.status = "fulfilled");
            var e = Ba;
            Ba = null, Wa = 0, Ga = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }
    var Ka = D.S;
    D.S = function(e, t) {
        Mu = ce(), "object" == typeof t && null !== t && "function" == typeof t.then && function(e, t) {
            if (null === Ba) {
                var n = Ba = [];
                $a = 0, Wa = $c(), Ga = {
                    status: "pending",
                    value: void 0,
                    then: function(e) {
                        n.push(e)
                    }
                }
            }
            $a++, t.then(qa, qa)
        }(0, t), null !== Ka && Ka(e, t)
    };
    var Qa = V(null);

    function Xa() {
        var e = Qa.current;
        return null !== e ? e : mu.pooledCache
    }

    function Ja(e, t) {
        B(Qa, null === t ? Qa.current : t.pool)
    }

    function Ya() {
        var e = Xa();
        return null === e ? null : {
            parent: ja._currentValue,
            pool: e
        }
    }
    var Za = Error(r(460)),
        ei = Error(r(474)),
        ti = Error(r(542)),
        ni = {
            then: function() {}
        };

    function ri(e) {
        return "fulfilled" === (e = e.status) || "rejected" === e
    }

    function ai(e, t, n) {
        switch (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Rt, Rt), t = n), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw li(e = t.reason), e;
            default:
                if ("string" == typeof t.status) t.then(Rt, Rt);
                else {
                    if (null !== (e = mu) && 100 < e.shellSuspendCounter) throw Error(r(482));
                    (e = t).status = "pending", e.then(function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "fulfilled", n.value = e
                        }
                    }, function(e) {
                        if ("pending" === t.status) {
                            var n = t;
                            n.status = "rejected", n.reason = e
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw li(e = t.reason), e
                }
                throw oi = t, Za
        }
    }

    function ii(e) {
        try {
            return (0, e._init)(e._payload)
        } catch (t) {
            if (null !== t && "object" == typeof t && "function" == typeof t.then) throw oi = t, Za;
            throw t
        }
    }
    var oi = null;

    function si() {
        if (null === oi) throw Error(r(459));
        var e = oi;
        return oi = null, e
    }

    function li(e) {
        if (e === Za || e === ti) throw Error(r(483))
    }
    var ui = null,
        ci = 0;

    function di(e) {
        var t = ci;
        return ci += 1, null === ui && (ui = []), ai(ui, e, t)
    }

    function fi(e, t) {
        t = t.props.ref, e.ref = void 0 !== t ? t : null
    }

    function pi(e, t) {
        if (t.$$typeof === f) throw Error(r(525));
        throw e = Object.prototype.toString.call(t), Error(r(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function hi(e) {
        function t(t, n) {
            if (e) {
                var r = t.deletions;
                null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function a(e) {
            for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
            return t
        }

        function i(e, t) {
            return (e = Hr(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 67108866, n) : r : (t.flags |= 67108866, n) : (t.flags |= 1048576, n)
        }

        function s(t) {
            return e && null === t.alternate && (t.flags |= 67108866), t
        }

        function l(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Gr(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function u(e, t, n, r) {
            var a = n.type;
            return a === m ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === a || "object" == typeof a && null !== a && a.$$typeof === x && ii(a) === t.type) ? (fi(t = i(t, n.props), n), t.return = e, t) : (fi(t = $r(n.type, n.key, n.props, null, e.mode, r), n), t.return = e, t)
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Kr(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
        }

        function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag ? ((t = Wr(n, e.mode, r, a)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function f(e, t, n) {
            if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = Gr("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case p:
                        return fi(n = $r(t.type, t.key, t.props, null, e.mode, n), t), n.return = e, n;
                    case g:
                        return (t = Kr(t, e.mode, n)).return = e, t;
                    case x:
                        return f(e, t = ii(t), n)
                }
                if (M(t) || L(t)) return (t = Wr(t, e.mode, n, null)).return = e, t;
                if ("function" == typeof t.then) return f(e, di(t), n);
                if (t.$$typeof === S) return f(e, Ma(e, t), n);
                pi(e, t)
            }
            return null
        }

        function h(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return null !== a ? null : l(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case p:
                        return n.key === a ? u(e, t, n, r) : null;
                    case g:
                        return n.key === a ? c(e, t, n, r) : null;
                    case x:
                        return h(e, t, n = ii(n), r)
                }
                if (M(n) || L(n)) return null !== a ? null : d(e, t, n, r, null);
                if ("function" == typeof n.then) return h(e, t, di(n), r);
                if (n.$$typeof === S) return h(e, t, Ma(e, n), r);
                pi(e, n)
            }
            return null
        }

        function b(e, t, n, r, a) {
            if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return l(t, e = e.get(n) || null, "" + r, a);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case p:
                        return u(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case g:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                    case x:
                        return b(e, t, n, r = ii(r), a)
                }
                if (M(r) || L(r)) return d(t, e = e.get(n) || null, r, a, null);
                if ("function" == typeof r.then) return b(e, t, n, di(r), a);
                if (r.$$typeof === S) return b(e, t, n, Ma(t, r), a);
                pi(t, r)
            }
            return null
        }

        function y(l, u, c, d) {
            if ("object" == typeof c && null !== c && c.type === m && null === c.key && (c = c.props.children), "object" == typeof c && null !== c) {
                switch (c.$$typeof) {
                    case p:
                        e: {
                            for (var v = c.key; null !== u;) {
                                if (u.key === v) {
                                    if ((v = c.type) === m) {
                                        if (7 === u.tag) {
                                            n(l, u.sibling), (d = i(u, c.props.children)).return = l, l = d;
                                            break e
                                        }
                                    } else if (u.elementType === v || "object" == typeof v && null !== v && v.$$typeof === x && ii(v) === u.type) {
                                        n(l, u.sibling), fi(d = i(u, c.props), c), d.return = l, l = d;
                                        break e
                                    }
                                    n(l, u);
                                    break
                                }
                                t(l, u), u = u.sibling
                            }
                            c.type === m ? ((d = Wr(c.props.children, l.mode, d, c.key)).return = l, l = d) : (fi(d = $r(c.type, c.key, c.props, null, l.mode, d), c), d.return = l, l = d)
                        }
                        return s(l);
                    case g:
                        e: {
                            for (v = c.key; null !== u;) {
                                if (u.key === v) {
                                    if (4 === u.tag && u.stateNode.containerInfo === c.containerInfo && u.stateNode.implementation === c.implementation) {
                                        n(l, u.sibling), (d = i(u, c.children || [])).return = l, l = d;
                                        break e
                                    }
                                    n(l, u);
                                    break
                                }
                                t(l, u), u = u.sibling
                            }(d = Kr(c, l.mode, d)).return = l,
                            l = d
                        }
                        return s(l);
                    case x:
                        return y(l, u, c = ii(c), d)
                }
                if (M(c)) return function(r, i, s, l) {
                    for (var u = null, c = null, d = i, p = i = 0, g = null; null !== d && p < s.length; p++) {
                        d.index > p ? (g = d, d = null) : g = d.sibling;
                        var m = h(r, d, s[p], l);
                        if (null === m) {
                            null === d && (d = g);
                            break
                        }
                        e && d && null === m.alternate && t(r, d), i = o(m, i, p), null === c ? u = m : c.sibling = m, c = m, d = g
                    }
                    if (p === s.length) return n(r, d), pa && oa(r, p), u;
                    if (null === d) {
                        for (; p < s.length; p++) null !== (d = f(r, s[p], l)) && (i = o(d, i, p), null === c ? u = d : c.sibling = d, c = d);
                        return pa && oa(r, p), u
                    }
                    for (d = a(d); p < s.length; p++) null !== (g = b(d, r, p, s[p], l)) && (e && null !== g.alternate && d.delete(null === g.key ? p : g.key), i = o(g, i, p), null === c ? u = g : c.sibling = g, c = g);
                    return e && d.forEach(function(e) {
                        return t(r, e)
                    }), pa && oa(r, p), u
                }(l, u, c, d);
                if (L(c)) {
                    if ("function" != typeof(v = L(c))) throw Error(r(150));
                    return function(i, s, l, u) {
                        if (null == l) throw Error(r(151));
                        for (var c = null, d = null, p = s, g = s = 0, m = null, y = l.next(); null !== p && !y.done; g++, y = l.next()) {
                            p.index > g ? (m = p, p = null) : m = p.sibling;
                            var v = h(i, p, y.value, u);
                            if (null === v) {
                                null === p && (p = m);
                                break
                            }
                            e && p && null === v.alternate && t(i, p), s = o(v, s, g), null === d ? c = v : d.sibling = v, d = v, p = m
                        }
                        if (y.done) return n(i, p), pa && oa(i, g), c;
                        if (null === p) {
                            for (; !y.done; g++, y = l.next()) null !== (y = f(i, y.value, u)) && (s = o(y, s, g), null === d ? c = y : d.sibling = y, d = y);
                            return pa && oa(i, g), c
                        }
                        for (p = a(p); !y.done; g++, y = l.next()) null !== (y = b(p, i, g, y.value, u)) && (e && null !== y.alternate && p.delete(null === y.key ? g : y.key), s = o(y, s, g), null === d ? c = y : d.sibling = y, d = y);
                        return e && p.forEach(function(e) {
                            return t(i, e)
                        }), pa && oa(i, g), c
                    }(l, u, c = v.call(c), d)
                }
                if ("function" == typeof c.then) return y(l, u, di(c), d);
                if (c.$$typeof === S) return y(l, u, Ma(l, c), d);
                pi(l, c)
            }
            return "string" == typeof c && "" !== c || "number" == typeof c || "bigint" == typeof c ? (c = "" + c, null !== u && 6 === u.tag ? (n(l, u.sibling), (d = i(u, c)).return = l, l = d) : (n(l, u), (d = Gr(c, l.mode, d)).return = l, l = d), s(l)) : n(l, u)
        }
        return function(e, t, n, r) {
            try {
                ci = 0;
                var a = y(e, t, n, r);
                return ui = null, a
            } catch (o) {
                if (o === Za || o === ti) throw o;
                var i = jr(29, o, null, e.mode);
                return i.lanes = r, i.return = e, i
            }
        }
    }
    var gi = hi(!0),
        mi = hi(!1),
        bi = !1;

    function yi(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function vi(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function wi(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Si(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (r = r.shared, 2 & gu) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, t = zr(e), Dr(e, null, n), t
        }
        return Ir(e, r, t, n), zr(e)
    }

    function ki(e, t, n) {
        if (null !== (t = t.updateQueue) && (t = t.shared, 4194048 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, De(e, n)
        }
    }

    function Ei(e, t) {
        var n = e.updateQueue,
            r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
                i = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    null === i ? a = i = o : i = i.next = o, n = n.next
                } while (null !== n);
                null === i ? a = i = t : i = i.next = t
            } else a = i = t;
            return n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                callbacks: r.callbacks
            }, void(e.updateQueue = n)
        }
        null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }
    var Ci = !1;

    function Oi() {
        if (Ci) {
            if (null !== Ga) throw Ga
        }
    }

    function Ti(e, t, n, r) {
        Ci = !1;
        var a = e.updateQueue;
        bi = !1;
        var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
        if (null !== s) {
            a.shared.pending = null;
            var l = s,
                u = l.next;
            l.next = null, null === o ? i = u : o.next = u, o = l;
            var d = e.alternate;
            null !== d && ((s = (d = d.updateQueue).lastBaseUpdate) !== o && (null === s ? d.firstBaseUpdate = u : s.next = u, d.lastBaseUpdate = l))
        }
        if (null !== i) {
            var f = a.baseState;
            for (o = 0, d = u = l = null, s = i;;) {
                var p = -536870913 & s.lane,
                    h = p !== s.lane;
                if (h ? (yu & p) === p : (r & p) === p) {
                    0 !== p && p === Wa && (Ci = !0), null !== d && (d = d.next = {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var g = e,
                            m = s;p = t;
                        var b = n;
                        switch (m.tag) {
                            case 1:
                                if ("function" == typeof(g = m.payload)) {
                                    f = g.call(b, f, p);
                                    break e
                                }
                                f = g;
                                break e;
                            case 3:
                                g.flags = -65537 & g.flags | 128;
                            case 0:
                                if (null == (p = "function" == typeof(g = m.payload) ? g.call(b, f, p) : g)) break e;
                                f = c({}, f, p);
                                break e;
                            case 2:
                                bi = !0
                        }
                    }
                    null !== (p = s.callback) && (e.flags |= 64, h && (e.flags |= 8192), null === (h = a.callbacks) ? a.callbacks = [p] : h.push(p))
                } else h = {
                    lane: p,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                }, null === d ? (u = d = h, l = f) : d = d.next = h, o |= p;
                if (null === (s = s.next)) {
                    if (null === (s = a.shared.pending)) break;
                    s = (h = s).next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null
                }
            }
            null === d && (l = f), a.baseState = l, a.firstBaseUpdate = u, a.lastBaseUpdate = d, null === i && (a.shared.lanes = 0), Tu |= o, e.lanes = o, e.memoizedState = f
        }
    }

    function xi(e, t) {
        if ("function" != typeof e) throw Error(r(191, e));
        e.call(t)
    }

    function _i(e, t) {
        var n = e.callbacks;
        if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) xi(n[e], t)
    }
    var Ni = V(null),
        Pi = V(0);

    function Ai(e, t) {
        B(Pi, e = Cu), B(Ni, t), Cu = e | t.baseLanes
    }

    function Li() {
        B(Pi, Cu), B(Ni, Ni.current)
    }

    function Ii() {
        Cu = Pi.current, H(Ni), H(Pi)
    }
    var Ri = V(null),
        Mi = null;

    function Di(e) {
        var t = e.alternate;
        B(Vi, 1 & Vi.current), B(Ri, e), null === Mi && (null === t || null !== Ni.current || null !== t.memoizedState) && (Mi = e)
    }

    function zi(e) {
        B(Vi, Vi.current), B(Ri, e), null === Mi && (Mi = e)
    }

    function Fi(e) {
        22 === e.tag ? (B(Vi, Vi.current), B(Ri, e), null === Mi && (Mi = e)) : Ui()
    }

    function Ui() {
        B(Vi, Vi.current), B(Ri, Ri.current)
    }

    function ji(e) {
        H(Ri), Mi === e && (Mi = null), H(Vi)
    }
    var Vi = V(0);

    function Hi(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || Id(n) || Rd(n))) return t
            } else if (19 !== t.tag || "forwards" !== t.memoizedProps.revealOrder && "backwards" !== t.memoizedProps.revealOrder && "unstable_legacy-backwards" !== t.memoizedProps.revealOrder && "together" !== t.memoizedProps.revealOrder) {
                if (null !== t.child) {
                    t.child.return = t, t = t.child;
                    continue
                }
            } else if (128 & t.flags) return t;
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var Bi = 0,
        $i = null,
        Wi = null,
        Gi = null,
        qi = !1,
        Ki = !1,
        Qi = !1,
        Xi = 0,
        Ji = 0,
        Yi = null,
        Zi = 0;

    function eo() {
        throw Error(r(321))
    }

    function to(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!er(e[n], t[n])) return !1;
        return !0
    }

    function no(e, t, n, r, a, i) {
        return Bi = i, $i = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = null === e || null === e.memoizedState ? ys : vs, Qi = !1, i = n(r, a), Qi = !1, Ki && (i = ao(t, n, r, a)), ro(e), i
    }

    function ro(e) {
        D.H = bs;
        var t = null !== Wi && null !== Wi.next;
        if (Bi = 0, Gi = Wi = $i = null, qi = !1, Ji = 0, Yi = null, t) throw Error(r(300));
        null === e || Ms || null !== (e = e.dependencies) && La(e) && (Ms = !0)
    }

    function ao(e, t, n, a) {
        $i = e;
        var i = 0;
        do {
            if (Ki && (Yi = null), Ji = 0, Ki = !1, 25 <= i) throw Error(r(301));
            if (i += 1, Gi = Wi = null, null != e.updateQueue) {
                var o = e.updateQueue;
                o.lastEffect = null, o.events = null, o.stores = null, null != o.memoCache && (o.memoCache.index = 0)
            }
            D.H = ws, o = t(n, a)
        } while (Ki);
        return o
    }

    function io() {
        var e = D.H,
            t = e.useState()[0];
        return t = "function" == typeof t.then ? fo(t) : t, e = e.useState()[0], (null !== Wi ? Wi.memoizedState : null) !== e && ($i.flags |= 1024), t
    }

    function oo() {
        var e = 0 !== Xi;
        return Xi = 0, e
    }

    function so(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function lo(e) {
        if (qi) {
            for (e = e.memoizedState; null !== e;) {
                var t = e.queue;
                null !== t && (t.pending = null), e = e.next
            }
            qi = !1
        }
        Bi = 0, Gi = Wi = $i = null, Ki = !1, Ji = Xi = 0, Yi = null
    }

    function uo() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return null === Gi ? $i.memoizedState = Gi = e : Gi = Gi.next = e, Gi
    }

    function co() {
        if (null === Wi) {
            var e = $i.alternate;
            e = null !== e ? e.memoizedState : null
        } else e = Wi.next;
        var t = null === Gi ? $i.memoizedState : Gi.next;
        if (null !== t) Gi = t, Wi = e;
        else {
            if (null === e) {
                if (null === $i.alternate) throw Error(r(467));
                throw Error(r(310))
            }
            e = {
                memoizedState: (Wi = e).memoizedState,
                baseState: Wi.baseState,
                baseQueue: Wi.baseQueue,
                queue: Wi.queue,
                next: null
            }, null === Gi ? $i.memoizedState = Gi = e : Gi = Gi.next = e
        }
        return Gi
    }

    function fo(e) {
        var t = Ji;
        return Ji += 1, null === Yi && (Yi = []), e = ai(Yi, e, t), t = $i, null === (null === Gi ? t.memoizedState : Gi.next) && (t = t.alternate, D.H = null === t || null === t.memoizedState ? ys : vs), e
    }

    function po(e) {
        if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return fo(e);
            if (e.$$typeof === S) return Ra(e)
        }
        throw Error(r(438, String(e)))
    }

    function ho(e) {
        var t = null,
            n = $i.updateQueue;
        if (null !== n && (t = n.memoCache), null == t) {
            var r = $i.alternate;
            null !== r && (null !== (r = r.updateQueue) && (null != (r = r.memoCache) && (t = {
                data: r.data.map(function(e) {
                    return e.slice()
                }),
                index: 0
            })))
        }
        if (null == t && (t = {
                data: [],
                index: 0
            }), null === n && (n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }, $i.updateQueue = n), n.memoCache = t, void 0 === (n = t.data[t.index]))
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = P;
        return t.index++, n
    }

    function go(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function mo(e) {
        return bo(co(), Wi, e)
    }

    function bo(e, t, n) {
        var a = e.queue;
        if (null === a) throw Error(r(311));
        a.lastRenderedReducer = n;
        var i = e.baseQueue,
            o = a.pending;
        if (null !== o) {
            if (null !== i) {
                var s = i.next;
                i.next = o.next, o.next = s
            }
            t.baseQueue = i = o, a.pending = null
        }
        if (o = e.baseState, null === i) e.memoizedState = o;
        else {
            var l = s = null,
                u = null,
                c = t = i.next,
                d = !1;
            do {
                var f = -536870913 & c.lane;
                if (f !== c.lane ? (yu & f) === f : (Bi & f) === f) {
                    var p = c.revertLane;
                    if (0 === p) null !== u && (u = u.next = {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: c.action,
                        hasEagerState: c.hasEagerState,
                        eagerState: c.eagerState,
                        next: null
                    }), f === Wa && (d = !0);
                    else {
                        if ((Bi & p) === p) {
                            c = c.next, p === Wa && (d = !0);
                            continue
                        }
                        f = {
                            lane: 0,
                            revertLane: c.revertLane,
                            gesture: null,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }, null === u ? (l = u = f, s = o) : u = u.next = f, $i.lanes |= p, Tu |= p
                    }
                    f = c.action, Qi && n(o, f), o = c.hasEagerState ? c.eagerState : n(o, f)
                } else p = {
                    lane: f,
                    revertLane: c.revertLane,
                    gesture: c.gesture,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }, null === u ? (l = u = p, s = o) : u = u.next = p, $i.lanes |= f, Tu |= f;
                c = c.next
            } while (null !== c && c !== t);
            if (null === u ? s = o : u.next = l, !er(o, e.memoizedState) && (Ms = !0, d && null !== (n = Ga))) throw n;
            e.memoizedState = o, e.baseState = s, e.baseQueue = u, a.lastRenderedState = o
        }
        return null === i && (a.lanes = 0), [e.memoizedState, a.dispatch]
    }

    function yo(e) {
        var t = co(),
            n = t.queue;
        if (null === n) throw Error(r(311));
        n.lastRenderedReducer = e;
        var a = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
        if (null !== i) {
            n.pending = null;
            var s = i = i.next;
            do {
                o = e(o, s.action), s = s.next
            } while (s !== i);
            er(o, t.memoizedState) || (Ms = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, a]
    }

    function vo(e, t, n) {
        var a = $i,
            i = co(),
            o = pa;
        if (o) {
            if (void 0 === n) throw Error(r(407));
            n = n()
        } else n = t();
        var s = !er((Wi || i).memoizedState, n);
        if (s && (i.memoizedState = n, Ms = !0), i = i.queue, $o(ko.bind(null, a, i, e), [e]), i.getSnapshot !== t || s || null !== Gi && 1 & Gi.memoizedState.tag) {
            if (a.flags |= 2048, Uo(9, {
                    destroy: void 0
                }, So.bind(null, a, i, n, t), null), null === mu) throw Error(r(349));
            o || 127 & Bi || wo(a, t, n)
        }
        return n
    }

    function wo(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, null === (t = $i.updateQueue) ? (t = {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }, $i.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
    }

    function So(e, t, n, r) {
        t.value = n, t.getSnapshot = r, Eo(t) && Co(e)
    }

    function ko(e, t, n) {
        return n(function() {
            Eo(t) && Co(e)
        })
    }

    function Eo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !er(e, n)
        } catch (r) {
            return !0
        }
    }

    function Co(e) {
        var t = Mr(e, 2);
        null !== t && Xu(t, e, 2)
    }

    function Oo(e) {
        var t = uo();
        if ("function" == typeof e) {
            var n = e;
            if (e = n(), Qi) {
                Se(!0);
                try {
                    n()
                } finally {
                    Se(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: go,
            lastRenderedState: e
        }, t
    }

    function To(e, t, n, r) {
        return e.baseState = n, bo(e, Wi, "function" == typeof r ? r : go)
    }

    function xo(e, t, n, a, i) {
        if (hs(e)) throw Error(r(485));
        if (null !== (e = t.action)) {
            var o = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(e) {
                    o.listeners.push(e)
                }
            };
            null !== D.T ? n(!0) : o.isTransition = !1, a(o), null === (n = t.pending) ? (o.next = t.pending = o, _o(t, o)) : (o.next = n.next, t.pending = n.next = o)
        }
    }

    function _o(e, t) {
        var n = t.action,
            r = t.payload,
            a = e.state;
        if (t.isTransition) {
            var i = D.T,
                o = {};
            D.T = o;
            try {
                var s = n(a, r),
                    l = D.S;
                null !== l && l(o, s), No(e, t, s)
            } catch (u) {
                Ao(e, t, u)
            } finally {
                null !== i && null !== o.types && (i.types = o.types), D.T = i
            }
        } else try {
            No(e, t, i = n(a, r))
        } catch (c) {
            Ao(e, t, c)
        }
    }

    function No(e, t, n) {
        null !== n && "object" == typeof n && "function" == typeof n.then ? n.then(function(n) {
            Po(e, t, n)
        }, function(n) {
            return Ao(e, t, n)
        }) : Po(e, t, n)
    }

    function Po(e, t, n) {
        t.status = "fulfilled", t.value = n, Lo(t), e.state = n, null !== (t = e.pending) && ((n = t.next) === t ? e.pending = null : (n = n.next, t.next = n, _o(e, n)))
    }

    function Ao(e, t, n) {
        var r = e.pending;
        if (e.pending = null, null !== r) {
            r = r.next;
            do {
                t.status = "rejected", t.reason = n, Lo(t), t = t.next
            } while (t !== r)
        }
        e.action = null
    }

    function Lo(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function Io(e, t) {
        return t
    }

    function Ro(e, t) {
        if (pa) {
            var n = mu.formState;
            if (null !== n) {
                e: {
                    var r = $i;
                    if (pa) {
                        if (fa) {
                            t: {
                                for (var a = fa, i = ga; 8 !== a.nodeType;) {
                                    if (!i) {
                                        a = null;
                                        break t
                                    }
                                    if (null === (a = Md(a.nextSibling))) {
                                        a = null;
                                        break t
                                    }
                                }
                                a = "F!" === (i = a.data) || "F" === i ? a : null
                            }
                            if (a) {
                                fa = Md(a.nextSibling), r = "F!" === a.data;
                                break e
                            }
                        }
                        ba(r)
                    }
                    r = !1
                }
                r && (t = n[0])
            }
        }
        return (n = uo()).memoizedState = n.baseState = t, r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Io,
            lastRenderedState: t
        }, n.queue = r, n = ds.bind(null, $i, r), r.dispatch = n, r = Oo(!1), i = ps.bind(null, $i, !1, r.queue), a = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, (r = uo()).queue = a, n = xo.bind(null, $i, a, i, n), a.dispatch = n, r.memoizedState = e, [t, n, !1]
    }

    function Mo(e) {
        return Do(co(), Wi, e)
    }

    function Do(e, t, n) {
        if (t = bo(e, t, Io)[0], e = mo(go)[0], "object" == typeof t && null !== t && "function" == typeof t.then) try {
            var r = fo(t)
        } catch (o) {
            if (o === Za) throw ti;
            throw o
        } else r = t;
        var a = (t = co()).queue,
            i = a.dispatch;
        return n !== t.memoizedState && ($i.flags |= 2048, Uo(9, {
            destroy: void 0
        }, zo.bind(null, a, n), null)), [r, i, e]
    }

    function zo(e, t) {
        e.action = t
    }

    function Fo(e) {
        var t = co(),
            n = Wi;
        if (null !== n) return Do(t, n, e);
        co(), t = t.memoizedState;
        var r = (n = co()).queue.dispatch;
        return n.memoizedState = e, [t, r, !1]
    }

    function Uo(e, t, n, r) {
        return e = {
            tag: e,
            create: n,
            deps: r,
            inst: t,
            next: null
        }, null === (t = $i.updateQueue) && (t = {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }, $i.updateQueue = t), null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
    }

    function jo() {
        return co().memoizedState
    }

    function Vo(e, t, n, r) {
        var a = uo();
        $i.flags |= e, a.memoizedState = Uo(1 | t, {
            destroy: void 0
        }, n, void 0 === r ? null : r)
    }

    function Ho(e, t, n, r) {
        var a = co();
        r = void 0 === r ? null : r;
        var i = a.memoizedState.inst;
        null !== Wi && null !== r && to(r, Wi.memoizedState.deps) ? a.memoizedState = Uo(t, i, n, r) : ($i.flags |= e, a.memoizedState = Uo(1 | t, i, n, r))
    }

    function Bo(e, t) {
        Vo(8390656, 8, e, t)
    }

    function $o(e, t) {
        Ho(2048, 8, e, t)
    }

    function Wo(e) {
        var t = co().memoizedState;
        return function(e) {
                $i.flags |= 4;
                var t = $i.updateQueue;
                if (null === t) t = {
                    lastEffect: null,
                    events: null,
                    stores: null,
                    memoCache: null
                }, $i.updateQueue = t, t.events = [e];
                else {
                    var n = t.events;
                    null === n ? t.events = [e] : n.push(e)
                }
            }({
                ref: t,
                nextImpl: e
            }),
            function() {
                if (2 & gu) throw Error(r(440));
                return t.impl.apply(void 0, arguments)
            }
    }

    function Go(e, t) {
        return Ho(4, 2, e, t)
    }

    function qo(e, t) {
        return Ho(4, 4, e, t)
    }

    function Ko(e, t) {
        if ("function" == typeof t) {
            e = e();
            var n = t(e);
            return function() {
                "function" == typeof n ? n() : t(null)
            }
        }
        if (null != t) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Qo(e, t, n) {
        n = null != n ? n.concat([e]) : null, Ho(4, 4, Ko.bind(null, t, e), n)
    }

    function Xo() {}

    function Jo(e, t) {
        var n = co();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== t && to(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function Yo(e, t) {
        var n = co();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        if (null !== t && to(t, r[1])) return r[0];
        if (r = e(), Qi) {
            Se(!0);
            try {
                e()
            } finally {
                Se(!1)
            }
        }
        return n.memoizedState = [r, t], r
    }

    function Zo(e, t, n) {
        return void 0 === n || 1073741824 & Bi && !(261930 & yu) ? e.memoizedState = t : (e.memoizedState = n, e = Qu(), $i.lanes |= e, Tu |= e, n)
    }

    function es(e, t, n, r) {
        return er(n, t) ? n : null !== Ni.current ? (e = Zo(e, n, r), er(e, t) || (Ms = !0), e) : 42 & Bi && (!(1073741824 & Bi) || 261930 & yu) ? (e = Qu(), $i.lanes |= e, Tu |= e, t) : (Ms = !0, e.memoizedState = n)
    }

    function ts(e, t, n, r, a) {
        var i = z.p;
        z.p = 0 !== i && 8 > i ? i : 8;
        var o, s, l, u = D.T,
            c = {};
        D.T = c, ps(e, !1, t, n);
        try {
            var d = a(),
                f = D.S;
            if (null !== f && f(c, d), null !== d && "object" == typeof d && "function" == typeof d.then) fs(e, t, (o = r, s = [], l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(e) {
                    s.push(e)
                }
            }, d.then(function() {
                l.status = "fulfilled", l.value = o;
                for (var e = 0; e < s.length; e++)(0, s[e])(o)
            }, function(e) {
                for (l.status = "rejected", l.reason = e, e = 0; e < s.length; e++)(0, s[e])(void 0)
            }), l), Ku());
            else fs(e, t, r, Ku())
        } catch (p) {
            fs(e, t, {
                then: function() {},
                status: "rejected",
                reason: p
            }, Ku())
        } finally {
            z.p = i, null !== u && null !== c.types && (u.types = c.types), D.T = u
        }
    }

    function ns() {}

    function rs(e, t, n, a) {
        if (5 !== e.tag) throw Error(r(476));
        var i = as(e).queue;
        ts(e, i, t, F, null === n ? ns : function() {
            return is(e), n(a)
        })
    }

    function as(e) {
        var t = e.memoizedState;
        if (null !== t) return t;
        var n = {};
        return (t = {
            memoizedState: F,
            baseState: F,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: go,
                lastRenderedState: F
            },
            next: null
        }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: go,
                lastRenderedState: n
            },
            next: null
        }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
    }

    function is(e) {
        var t = as(e);
        null === t.next && (t = e.alternate.memoizedState), fs(e, t.next.queue, {}, Ku())
    }

    function os() {
        return Ra(pf)
    }

    function ss() {
        return co().memoizedState
    }

    function ls() {
        return co().memoizedState
    }

    function us(e) {
        for (var t = e.return; null !== t;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Ku(),
                        r = Si(t, e = wi(n), n);
                    return null !== r && (Xu(r, t, n), ki(r, t, n)), t = {
                        cache: Va()
                    }, void(e.payload = t)
            }
            t = t.return
        }
    }

    function cs(e, t, n) {
        var r = Ku();
        n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, hs(e) ? gs(t, n) : null !== (n = Rr(e, t, n, r)) && (Xu(n, e, r), ms(n, t, r))
    }

    function ds(e, t, n) {
        fs(e, t, n, Ku())
    }

    function fs(e, t, n, r) {
        var a = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (hs(e)) gs(t, a);
        else {
            var i = e.alternate;
            if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                var o = t.lastRenderedState,
                    s = i(o, n);
                if (a.hasEagerState = !0, a.eagerState = s, er(s, o)) return Ir(e, t, a, 0), null === mu && Lr(), !1
            } catch (l) {}
            if (null !== (n = Rr(e, t, a, r))) return Xu(n, e, r), ms(n, t, r), !0
        }
        return !1
    }

    function ps(e, t, n, a) {
        if (a = {
                lane: 2,
                revertLane: $c(),
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, hs(e)) {
            if (t) throw Error(r(479))
        } else null !== (t = Rr(e, n, a, 2)) && Xu(t, e, 2)
    }

    function hs(e) {
        var t = e.alternate;
        return e === $i || null !== t && t === $i
    }

    function gs(e, t) {
        Ki = qi = !0;
        var n = e.pending;
        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function ms(e, t, n) {
        if (4194048 & n) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, De(e, n)
        }
    }
    var bs = {
        readContext: Ra,
        use: po,
        useCallback: eo,
        useContext: eo,
        useEffect: eo,
        useImperativeHandle: eo,
        useLayoutEffect: eo,
        useInsertionEffect: eo,
        useMemo: eo,
        useReducer: eo,
        useRef: eo,
        useState: eo,
        useDebugValue: eo,
        useDeferredValue: eo,
        useTransition: eo,
        useSyncExternalStore: eo,
        useId: eo,
        useHostTransitionStatus: eo,
        useFormState: eo,
        useActionState: eo,
        useOptimistic: eo,
        useMemoCache: eo,
        useCacheRefresh: eo
    };
    bs.useEffectEvent = eo;
    var ys = {
            readContext: Ra,
            use: po,
            useCallback: function(e, t) {
                return uo().memoizedState = [e, void 0 === t ? null : t], e
            },
            useContext: Ra,
            useEffect: Bo,
            useImperativeHandle: function(e, t, n) {
                n = null != n ? n.concat([e]) : null, Vo(4194308, 4, Ko.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Vo(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                Vo(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = uo();
                t = void 0 === t ? null : t;
                var r = e();
                if (Qi) {
                    Se(!0);
                    try {
                        e()
                    } finally {
                        Se(!1)
                    }
                }
                return n.memoizedState = [r, t], r
            },
            useReducer: function(e, t, n) {
                var r = uo();
                if (void 0 !== n) {
                    var a = n(t);
                    if (Qi) {
                        Se(!0);
                        try {
                            n(t)
                        } finally {
                            Se(!1)
                        }
                    }
                } else a = t;
                return r.memoizedState = r.baseState = a, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: a
                }, r.queue = e, e = e.dispatch = cs.bind(null, $i, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, uo().memoizedState = e
            },
            useState: function(e) {
                var t = (e = Oo(e)).queue,
                    n = ds.bind(null, $i, t);
                return t.dispatch = n, [e.memoizedState, n]
            },
            useDebugValue: Xo,
            useDeferredValue: function(e, t) {
                return Zo(uo(), e, t)
            },
            useTransition: function() {
                var e = Oo(!1);
                return e = ts.bind(null, $i, e.queue, !0, !1), uo().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var a = $i,
                    i = uo();
                if (pa) {
                    if (void 0 === n) throw Error(r(407));
                    n = n()
                } else {
                    if (n = t(), null === mu) throw Error(r(349));
                    127 & yu || wo(a, t, n)
                }
                i.memoizedState = n;
                var o = {
                    value: n,
                    getSnapshot: t
                };
                return i.queue = o, Bo(ko.bind(null, a, o, e), [e]), a.flags |= 2048, Uo(9, {
                    destroy: void 0
                }, So.bind(null, a, o, n, t), null), n
            },
            useId: function() {
                var e = uo(),
                    t = mu.identifierPrefix;
                if (pa) {
                    var n = ia;
                    t = "_" + t + "R_" + (n = (aa & ~(1 << 32 - ke(aa) - 1)).toString(32) + n), 0 < (n = Xi++) && (t += "H" + n.toString(32)), t += "_"
                } else t = "_" + t + "r_" + (n = Zi++).toString(32) + "_";
                return e.memoizedState = t
            },
            useHostTransitionStatus: os,
            useFormState: Ro,
            useActionState: Ro,
            useOptimistic: function(e) {
                var t = uo();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = ps.bind(null, $i, !0, n), n.dispatch = t, [e, t]
            },
            useMemoCache: ho,
            useCacheRefresh: function() {
                return uo().memoizedState = us.bind(null, $i)
            },
            useEffectEvent: function(e) {
                var t = uo(),
                    n = {
                        impl: e
                    };
                return t.memoizedState = n,
                    function() {
                        if (2 & gu) throw Error(r(440));
                        return n.impl.apply(void 0, arguments)
                    }
            }
        },
        vs = {
            readContext: Ra,
            use: po,
            useCallback: Jo,
            useContext: Ra,
            useEffect: $o,
            useImperativeHandle: Qo,
            useInsertionEffect: Go,
            useLayoutEffect: qo,
            useMemo: Yo,
            useReducer: mo,
            useRef: jo,
            useState: function() {
                return mo(go)
            },
            useDebugValue: Xo,
            useDeferredValue: function(e, t) {
                return es(co(), Wi.memoizedState, e, t)
            },
            useTransition: function() {
                var e = mo(go)[0],
                    t = co().memoizedState;
                return ["boolean" == typeof e ? e : fo(e), t]
            },
            useSyncExternalStore: vo,
            useId: ss,
            useHostTransitionStatus: os,
            useFormState: Mo,
            useActionState: Mo,
            useOptimistic: function(e, t) {
                return To(co(), 0, e, t)
            },
            useMemoCache: ho,
            useCacheRefresh: ls
        };
    vs.useEffectEvent = Wo;
    var ws = {
        readContext: Ra,
        use: po,
        useCallback: Jo,
        useContext: Ra,
        useEffect: $o,
        useImperativeHandle: Qo,
        useInsertionEffect: Go,
        useLayoutEffect: qo,
        useMemo: Yo,
        useReducer: yo,
        useRef: jo,
        useState: function() {
            return yo(go)
        },
        useDebugValue: Xo,
        useDeferredValue: function(e, t) {
            var n = co();
            return null === Wi ? Zo(n, e, t) : es(n, Wi.memoizedState, e, t)
        },
        useTransition: function() {
            var e = yo(go)[0],
                t = co().memoizedState;
            return ["boolean" == typeof e ? e : fo(e), t]
        },
        useSyncExternalStore: vo,
        useId: ss,
        useHostTransitionStatus: os,
        useFormState: Fo,
        useActionState: Fo,
        useOptimistic: function(e, t) {
            var n = co();
            return null !== Wi ? To(n, 0, e, t) : (n.baseState = e, [e, n.queue.dispatch])
        },
        useMemoCache: ho,
        useCacheRefresh: ls
    };

    function Ss(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : c({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
    }
    ws.useEffectEvent = Wo;
    var ks = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = Ku(),
                a = wi(r);
            a.payload = t, null != n && (a.callback = n), null !== (t = Si(e, a, r)) && (Xu(t, e, r), ki(t, e, r))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = Ku(),
                a = wi(r);
            a.tag = 1, a.payload = t, null != n && (a.callback = n), null !== (t = Si(e, a, r)) && (Xu(t, e, r), ki(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Ku(),
                r = wi(n);
            r.tag = 2, null != t && (r.callback = t), null !== (t = Si(e, r, n)) && (Xu(t, e, n), ki(t, e, n))
        }
    };

    function Es(e, t, n, r, a, i, o) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, o) : !t.prototype || !t.prototype.isPureReactComponent || (!tr(n, r) || !tr(a, i))
    }

    function Cs(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ks.enqueueReplaceState(t, t.state, null)
    }

    function Os(e, t) {
        var n = t;
        if ("ref" in t)
            for (var r in n = {}, t) "ref" !== r && (n[r] = t[r]);
        if (e = e.defaultProps)
            for (var a in n === t && (n = c({}, n)), e) void 0 === n[a] && (n[a] = e[a]);
        return n
    }

    function Ts(e) {
        _r(e)
    }

    function xs(e) {}

    function _s(e) {
        _r(e)
    }

    function Ns(e, t) {
        try {
            (0, e.onUncaughtError)(t.value, {
                componentStack: t.stack
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }

    function Ps(e, t, n) {
        try {
            (0, e.onCaughtError)(n.value, {
                componentStack: n.stack,
                errorBoundary: 1 === t.tag ? t.stateNode : null
            })
        } catch (r) {
            setTimeout(function() {
                throw r
            })
        }
    }

    function As(e, t, n) {
        return (n = wi(n)).tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            Ns(e, t)
        }, n
    }

    function Ls(e) {
        return (e = wi(e)).tag = 3, e
    }

    function Is(e, t, n, r) {
        var a = n.type.getDerivedStateFromError;
        if ("function" == typeof a) {
            var i = r.value;
            e.payload = function() {
                return a(i)
            }, e.callback = function() {
                Ps(t, n, r)
            }
        }
        var o = n.stateNode;
        null !== o && "function" == typeof o.componentDidCatch && (e.callback = function() {
            Ps(t, n, r), "function" != typeof a && (null === Fu ? Fu = new Set([this]) : Fu.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : ""
            })
        })
    }
    var Rs = Error(r(461)),
        Ms = !1;

    function Ds(e, t, n, r) {
        t.child = null === e ? mi(t, null, n, r) : gi(t, e.child, n, r)
    }

    function zs(e, t, n, r, a) {
        n = n.render;
        var i = t.ref;
        if ("ref" in r) {
            var o = {};
            for (var s in r) "ref" !== s && (o[s] = r[s])
        } else o = r;
        return Ia(t), r = no(e, t, n, o, i, a), s = oo(), null === e || Ms ? (pa && s && la(t), t.flags |= 1, Ds(e, t, r, a), t.child) : (so(e, t, a), ol(e, t, a))
    }

    function Fs(e, t, n, r, a) {
        if (null === e) {
            var i = n.type;
            return "function" != typeof i || Vr(i) || void 0 !== i.defaultProps || null !== n.compare ? ((e = $r(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Us(e, t, i, r, a))
        }
        if (i = e.child, !sl(e, a)) {
            var o = i.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : tr)(o, r) && e.ref === t.ref) return ol(e, t, a)
        }
        return t.flags |= 1, (e = Hr(i, r)).ref = t.ref, e.return = t, t.child = e
    }

    function Us(e, t, n, r, a) {
        if (null !== e) {
            var i = e.memoizedProps;
            if (tr(i, r) && e.ref === t.ref) {
                if (Ms = !1, t.pendingProps = r = i, !sl(e, a)) return t.lanes = e.lanes, ol(e, t, a);
                131072 & e.flags && (Ms = !0)
            }
        }
        return Gs(e, t, n, r, a)
    }

    function js(e, t, n, r) {
        var a = r.children,
            i = null !== e ? e.memoizedState : null;
        if (null === e && null === t.stateNode && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), "hidden" === r.mode) {
            if (128 & t.flags) {
                if (i = null !== i ? i.baseLanes | n : n, null !== e) {
                    for (r = t.child = e.child, a = 0; null !== r;) a = a | r.lanes | r.childLanes, r = r.sibling;
                    r = a & ~i
                } else r = 0, t.child = null;
                return Hs(e, t, i, n, r)
            }
            if (!(536870912 & n)) return r = t.lanes = 536870912, Hs(e, t, null !== i ? i.baseLanes | n : n, n, r);
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, null !== e && Ja(0, null !== i ? i.cachePool : null), null !== i ? Ai(t, i) : Li(), Fi(t)
        } else null !== i ? (Ja(0, i.cachePool), Ai(t, i), Ui(), t.memoizedState = null) : (null !== e && Ja(0, null), Li(), Ui());
        return Ds(e, t, a, n), t.child
    }

    function Vs(e, t) {
        return null !== e && 22 === e.tag || null !== t.stateNode || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }), t.sibling
    }

    function Hs(e, t, n, r, a) {
        var i = Xa();
        return i = null === i ? null : {
            parent: ja._currentValue,
            pool: i
        }, t.memoizedState = {
            baseLanes: n,
            cachePool: i
        }, null !== e && Ja(0, null), Li(), Fi(t), null !== e && Aa(e, t, r, !0), t.childLanes = a, null
    }

    function Bs(e, t) {
        return (t = tl({
            mode: t.mode,
            children: t.children
        }, e.mode)).ref = e.ref, e.child = t, t.return = e, t
    }

    function $s(e, t, n) {
        return gi(t, e.child, null, n), (e = Bs(t, t.pendingProps)).flags |= 2, ji(t), t.memoizedState = null, e
    }

    function Ws(e, t) {
        var n = t.ref;
        if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
        else {
            if ("function" != typeof n && "object" != typeof n) throw Error(r(284));
            null !== e && e.ref === n || (t.flags |= 4194816)
        }
    }

    function Gs(e, t, n, r, a) {
        return Ia(t), n = no(e, t, n, r, void 0, a), r = oo(), null === e || Ms ? (pa && r && la(t), t.flags |= 1, Ds(e, t, n, a), t.child) : (so(e, t, a), ol(e, t, a))
    }

    function qs(e, t, n, r, a, i) {
        return Ia(t), t.updateQueue = null, n = ao(t, r, n, a), ro(e), r = oo(), null === e || Ms ? (pa && r && la(t), t.flags |= 1, Ds(e, t, n, i), t.child) : (so(e, t, i), ol(e, t, i))
    }

    function Ks(e, t, n, r, a) {
        if (Ia(t), null === t.stateNode) {
            var i = Fr,
                o = n.contextType;
            "object" == typeof o && null !== o && (i = Ra(o)), i = new n(r, i), t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, i.updater = ks, t.stateNode = i, i._reactInternals = t, (i = t.stateNode).props = r, i.state = t.memoizedState, i.refs = {}, yi(t), o = n.contextType, i.context = "object" == typeof o && null !== o ? Ra(o) : Fr, i.state = t.memoizedState, "function" == typeof(o = n.getDerivedStateFromProps) && (Ss(t, n, o, r), i.state = t.memoizedState), "function" == typeof n.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (o = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), o !== i.state && ks.enqueueReplaceState(i, i.state, null), Ti(t, r, i, a), Oi(), i.state = t.memoizedState), "function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !0
        } else if (null === e) {
            i = t.stateNode;
            var s = t.memoizedProps,
                l = Os(n, s);
            i.props = l;
            var u = i.context,
                c = n.contextType;
            o = Fr, "object" == typeof c && null !== c && (o = Ra(c));
            var d = n.getDerivedStateFromProps;
            c = "function" == typeof d || "function" == typeof i.getSnapshotBeforeUpdate, s = t.pendingProps !== s, c || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s || u !== o) && Cs(t, i, r, o), bi = !1;
            var f = t.memoizedState;
            i.state = f, Ti(t, r, i, a), Oi(), u = t.memoizedState, s || f !== u || bi ? ("function" == typeof d && (Ss(t, n, d, r), u = t.memoizedState), (l = bi || Es(t, n, l, r, f, u, o)) ? (c || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = o, r = l) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
        } else {
            i = t.stateNode, vi(e, t), c = Os(n, o = t.memoizedProps), i.props = c, d = t.pendingProps, f = i.context, u = n.contextType, l = Fr, "object" == typeof u && null !== u && (l = Ra(u)), (u = "function" == typeof(s = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (o !== d || f !== l) && Cs(t, i, r, l), bi = !1, f = t.memoizedState, i.state = f, Ti(t, r, i, a), Oi();
            var p = t.memoizedState;
            o !== d || f !== p || bi || null !== e && null !== e.dependencies && La(e.dependencies) ? ("function" == typeof s && (Ss(t, n, s, r), p = t.memoizedState), (c = bi || Es(t, n, c, r, f, p, l) || null !== e && null !== e.dependencies && La(e.dependencies)) ? (u || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, p, l), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, p, l)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), i.props = r, i.state = p, i.context = l, r = c) : ("function" != typeof i.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
        }
        return i = r, Ws(e, t), r = !!(128 & t.flags), i || r ? (i = t.stateNode, n = r && "function" != typeof n.getDerivedStateFromError ? null : i.render(), t.flags |= 1, null !== e && r ? (t.child = gi(t, e.child, null, a), t.child = gi(t, null, n, a)) : Ds(e, t, n, a), t.memoizedState = i.state, e = t.child) : e = ol(e, t, a), e
    }

    function Qs(e, t, n, r) {
        return Sa(), t.flags |= 256, Ds(e, t, n, r), t.child
    }
    var Xs = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Js(e) {
        return {
            baseLanes: e,
            cachePool: Ya()
        }
    }

    function Ys(e, t, n) {
        return e = null !== e ? e.childLanes & ~n : 0, t && (e |= Nu), e
    }

    function Zs(e, t, n) {
        var a, i = t.pendingProps,
            o = !1,
            s = !!(128 & t.flags);
        if ((a = s) || (a = (null === e || null !== e.memoizedState) && !!(2 & Vi.current)), a && (o = !0, t.flags &= -129), a = !!(32 & t.flags), t.flags &= -33, null === e) {
            if (pa) {
                if (o ? Di(t) : Ui(), (e = fa) ? null !== (e = null !== (e = Ld(e, ga)) && "&" !== e.data ? e : null) && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: null !== ra ? {
                            id: aa,
                            overflow: ia
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, (n = qr(e)).return = t, t.child = n, da = t, fa = null) : e = null, null === e) throw ba(t);
                return Rd(e) ? t.lanes = 32 : t.lanes = 536870912, null
            }
            var l = i.children;
            return i = i.fallback, o ? (Ui(), l = tl({
                mode: "hidden",
                children: l
            }, o = t.mode), i = Wr(i, o, n, null), l.return = t, i.return = t, l.sibling = i, t.child = l, (i = t.child).memoizedState = Js(n), i.childLanes = Ys(e, a, n), t.memoizedState = Xs, Vs(null, i)) : (Di(t), el(t, l))
        }
        var u = e.memoizedState;
        if (null !== u && null !== (l = u.dehydrated)) {
            if (s) 256 & t.flags ? (Di(t), t.flags &= -257, t = nl(e, t, n)) : null !== t.memoizedState ? (Ui(), t.child = e.child, t.flags |= 128, t = null) : (Ui(), l = i.fallback, o = t.mode, i = tl({
                mode: "visible",
                children: i.children
            }, o), (l = Wr(l, o, n, null)).flags |= 2, i.return = t, l.return = t, i.sibling = l, t.child = i, gi(t, e.child, null, n), (i = t.child).memoizedState = Js(n), i.childLanes = Ys(e, a, n), t.memoizedState = Xs, t = Vs(null, i));
            else if (Di(t), Rd(l)) {
                if (a = l.nextSibling && l.nextSibling.dataset) var c = a.dgst;
                a = c, (i = Error(r(419))).stack = "", i.digest = a, Ea({
                    value: i,
                    source: null,
                    stack: null
                }), t = nl(e, t, n)
            } else if (Ms || Aa(e, t, n, !1), a = 0 !== (n & e.childLanes), Ms || a) {
                if (null !== (a = mu) && (0 !== (i = ze(a, n)) && i !== u.retryLane)) throw u.retryLane = i, Mr(e, i), Xu(a, e, i), Rs;
                Id(l) || lc(), t = nl(e, t, n)
            } else Id(l) ? (t.flags |= 192, t.child = e.child, t = null) : (e = u.treeContext, fa = Md(l.nextSibling), da = t, pa = !0, ha = null, ga = !1, null !== e && ca(t, e), (t = el(t, i.children)).flags |= 4096);
            return t
        }
        return o ? (Ui(), l = i.fallback, o = t.mode, c = (u = e.child).sibling, (i = Hr(u, {
            mode: "hidden",
            children: i.children
        })).subtreeFlags = 65011712 & u.subtreeFlags, null !== c ? l = Hr(c, l) : (l = Wr(l, o, n, null)).flags |= 2, l.return = t, i.return = t, i.sibling = l, t.child = i, Vs(null, i), i = t.child, null === (l = e.child.memoizedState) ? l = Js(n) : (null !== (o = l.cachePool) ? (u = ja._currentValue, o = o.parent !== u ? {
            parent: u,
            pool: u
        } : o) : o = Ya(), l = {
            baseLanes: l.baseLanes | n,
            cachePool: o
        }), i.memoizedState = l, i.childLanes = Ys(e, a, n), t.memoizedState = Xs, Vs(e.child, i)) : (Di(t), e = (n = e.child).sibling, (n = Hr(n, {
            mode: "visible",
            children: i.children
        })).return = t, n.sibling = null, null !== e && (null === (a = t.deletions) ? (t.deletions = [e], t.flags |= 16) : a.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function el(e, t) {
        return (t = tl({
            mode: "visible",
            children: t
        }, e.mode)).return = e, e.child = t
    }

    function tl(e, t) {
        return (e = jr(22, e, null, t)).lanes = 0, e
    }

    function nl(e, t, n) {
        return gi(t, e.child, null, n), (e = el(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
    }

    function rl(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), Na(e.return, t, n)
    }

    function al(e, t, n, r, a, i) {
        var o = e.memoizedState;
        null === o ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
            treeForkCount: i
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a, o.treeForkCount = i)
    }

    function il(e, t, n) {
        var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
        r = r.children;
        var o = Vi.current,
            s = !!(2 & o);
        if (s ? (o = 1 & o | 2, t.flags |= 128) : o &= 1, B(Vi, o), Ds(e, t, r, n), r = pa ? ea : 0, !s && null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && rl(e, n, t);
            else if (19 === e.tag) rl(e, n, t);
            else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        switch (a) {
            case "forwards":
                for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Hi(e) && (a = n), n = n.sibling;
                null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), al(t, !1, a, n, i, r);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (n = null, a = t.child, t.child = null; null !== a;) {
                    if (null !== (e = a.alternate) && null === Hi(e)) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                al(t, !0, n, null, i, r);
                break;
            case "together":
                al(t, !1, null, null, void 0, r);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function ol(e, t, n) {
        if (null !== e && (t.dependencies = e.dependencies), Tu |= t.lanes, 0 === (n & t.childLanes)) {
            if (null === e) return null;
            if (Aa(e, t, n, !1), 0 === (n & t.childLanes)) return null
        }
        if (null !== e && t.child !== e.child) throw Error(r(153));
        if (null !== t.child) {
            for (n = Hr(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Hr(e, e.pendingProps)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function sl(e, t) {
        return 0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !La(e))
    }

    function ll(e, t, n) {
        if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Ms = !0;
            else {
                if (!(sl(e, n) || 128 & t.flags)) return Ms = !1,
                    function(e, t, n) {
                        switch (t.tag) {
                            case 3:
                                X(t, t.stateNode.containerInfo), xa(0, ja, e.memoizedState.cache), Sa();
                                break;
                            case 27:
                            case 5:
                                Y(t);
                                break;
                            case 4:
                                X(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                xa(0, t.type, t.memoizedProps.value);
                                break;
                            case 31:
                                if (null !== t.memoizedState) return t.flags |= 128, zi(t), null;
                                break;
                            case 13:
                                var r = t.memoizedState;
                                if (null !== r) return null !== r.dehydrated ? (Di(t), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Zs(e, t, n) : (Di(t), null !== (e = ol(e, t, n)) ? e.sibling : null);
                                Di(t);
                                break;
                            case 19:
                                var a = !!(128 & e.flags);
                                if ((r = 0 !== (n & t.childLanes)) || (Aa(e, t, n, !1), r = 0 !== (n & t.childLanes)), a) {
                                    if (r) return il(e, t, n);
                                    t.flags |= 128
                                }
                                if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), B(Vi, Vi.current), r) break;
                                return null;
                            case 22:
                                return t.lanes = 0, js(e, t, n, t.pendingProps);
                            case 24:
                                xa(0, ja, e.memoizedState.cache)
                        }
                        return ol(e, t, n)
                    }(e, t, n);
                Ms = !!(131072 & e.flags)
            }
        else Ms = !1, pa && 1048576 & t.flags && sa(t, ea, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    var a = t.pendingProps;
                    if (e = ii(t.elementType), t.type = e, "function" != typeof e) {
                        if (null != e) {
                            var i = e.$$typeof;
                            if (i === k) {
                                t.tag = 11, t = zs(null, t, e, a, n);
                                break e
                            }
                            if (i === T) {
                                t.tag = 14, t = Fs(null, t, e, a, n);
                                break e
                            }
                        }
                        throw t = R(e) || e, Error(r(306, t, ""))
                    }
                    Vr(e) ? (a = Os(e, a), t.tag = 1, t = Ks(null, t, e, a, n)) : (t.tag = 0, t = Gs(null, t, e, a, n))
                }
                return t;
            case 0:
                return Gs(e, t, t.type, t.pendingProps, n);
            case 1:
                return Ks(e, t, a = t.type, i = Os(a, t.pendingProps), n);
            case 3:
                e: {
                    if (X(t, t.stateNode.containerInfo), null === e) throw Error(r(387));a = t.pendingProps;
                    var o = t.memoizedState;i = o.element,
                    vi(e, t),
                    Ti(t, a, null, n);
                    var s = t.memoizedState;
                    if (a = s.cache, xa(0, ja, a), a !== o.cache && Pa(t, [ja], n, !0), Oi(), a = s.element, o.isDehydrated) {
                        if (o = {
                                element: a,
                                isDehydrated: !1,
                                cache: s.cache
                            }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                            t = Qs(e, t, a, n);
                            break e
                        }
                        if (a !== i) {
                            Ea(i = Xr(Error(r(424)), t)), t = Qs(e, t, a, n);
                            break e
                        }
                        if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
                        else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
                        for (fa = Md(e.firstChild), da = t, pa = !0, ha = null, ga = !0, n = mi(t, null, a, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                    } else {
                        if (Sa(), a === i) {
                            t = ol(e, t, n);
                            break e
                        }
                        Ds(e, t, a, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Ws(e, t), null === e ? (n = qd(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : pa || (n = t.type, e = t.pendingProps, (a = yd(K.current).createElement(n))[Be] = t, a[$e] = e, hd(a, n, e), nt(a), t.stateNode = a) : t.memoizedState = qd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return Y(t), null === e && pa && (a = t.stateNode = Ud(t.type, t.pendingProps, K.current), da = t, ga = !0, i = fa, _d(t.type) ? (Dd = i, fa = Md(a.firstChild)) : fa = i), Ds(e, t, t.pendingProps.children, n), Ws(e, t), null === e && (t.flags |= 4194304), t.child;
            case 5:
                return null === e && pa && ((i = a = fa) && (null !== (a = function(e, t, n, r) {
                    for (; 1 === e.nodeType;) {
                        var a = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                            if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type)) break
                        } else if (r) {
                            if (!e[Xe]) switch (t) {
                                case "meta":
                                    if (!e.hasAttribute("itemprop")) break;
                                    return e;
                                case "link":
                                    if ("stylesheet" === (i = e.getAttribute("rel")) && e.hasAttribute("data-precedence")) break;
                                    if (i !== a.rel || e.getAttribute("href") !== (null == a.href || "" === a.href ? null : a.href) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin) || e.getAttribute("title") !== (null == a.title ? null : a.title)) break;
                                    return e;
                                case "style":
                                    if (e.hasAttribute("data-precedence")) break;
                                    return e;
                                case "script":
                                    if (((i = e.getAttribute("src")) !== (null == a.src ? null : a.src) || e.getAttribute("type") !== (null == a.type ? null : a.type) || e.getAttribute("crossorigin") !== (null == a.crossOrigin ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                                    return e;
                                default:
                                    return e
                            }
                        } else {
                            if ("input" !== t || "hidden" !== e.type) return e;
                            var i = null == a.name ? null : "" + a.name;
                            if ("hidden" === a.type && e.getAttribute("name") === i) return e
                        }
                        if (null === (e = Md(e.nextSibling))) break
                    }
                    return null
                }(a, t.type, t.pendingProps, ga)) ? (t.stateNode = a, da = t, fa = Md(a.firstChild), ga = !1, i = !0) : i = !1), i || ba(t)), Y(t), i = t.type, o = t.pendingProps, s = null !== e ? e.memoizedProps : null, a = o.children, Sd(i, o) ? a = null : null !== s && Sd(i, s) && (t.flags |= 32), null !== t.memoizedState && (i = no(e, t, io, null, null, n), pf._currentValue = i), Ws(e, t), Ds(e, t, a, n), t.child;
            case 6:
                return null === e && pa && ((e = n = fa) && (null !== (n = function(e, t, n) {
                    if ("" === t) return null;
                    for (; 3 !== e.nodeType;) {
                        if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !n) return null;
                        if (null === (e = Md(e.nextSibling))) return null
                    }
                    return e
                }(n, t.pendingProps, ga)) ? (t.stateNode = n, da = t, fa = null, e = !0) : e = !1), e || ba(t)), null;
            case 13:
                return Zs(e, t, n);
            case 4:
                return X(t, t.stateNode.containerInfo), a = t.pendingProps, null === e ? t.child = gi(t, null, a, n) : Ds(e, t, a, n), t.child;
            case 11:
                return zs(e, t, t.type, t.pendingProps, n);
            case 7:
                return Ds(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return Ds(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return a = t.pendingProps, xa(0, t.type, a.value), Ds(e, t, a.children, n), t.child;
            case 9:
                return i = t.type._context, a = t.pendingProps.children, Ia(t), a = a(i = Ra(i)), t.flags |= 1, Ds(e, t, a, n), t.child;
            case 14:
                return Fs(e, t, t.type, t.pendingProps, n);
            case 15:
                return Us(e, t, t.type, t.pendingProps, n);
            case 19:
                return il(e, t, n);
            case 31:
                return function(e, t, n) {
                    var a = t.pendingProps,
                        i = !!(128 & t.flags);
                    if (t.flags &= -129, null === e) {
                        if (pa) {
                            if ("hidden" === a.mode) return e = Bs(t, a), t.lanes = 536870912, Vs(null, e);
                            if (zi(t), (e = fa) ? null !== (e = null !== (e = Ld(e, ga)) && "&" === e.data ? e : null) && (t.memoizedState = {
                                    dehydrated: e,
                                    treeContext: null !== ra ? {
                                        id: aa,
                                        overflow: ia
                                    } : null,
                                    retryLane: 536870912,
                                    hydrationErrors: null
                                }, (n = qr(e)).return = t, t.child = n, da = t, fa = null) : e = null, null === e) throw ba(t);
                            return t.lanes = 536870912, null
                        }
                        return Bs(t, a)
                    }
                    var o = e.memoizedState;
                    if (null !== o) {
                        var s = o.dehydrated;
                        if (zi(t), i)
                            if (256 & t.flags) t.flags &= -257, t = $s(e, t, n);
                            else {
                                if (null === t.memoizedState) throw Error(r(558));
                                t.child = e.child, t.flags |= 128, t = null
                            }
                        else if (Ms || Aa(e, t, n, !1), i = 0 !== (n & e.childLanes), Ms || i) {
                            if (null !== (a = mu) && 0 !== (s = ze(a, n)) && s !== o.retryLane) throw o.retryLane = s, Mr(e, s), Xu(a, e, s), Rs;
                            lc(), t = $s(e, t, n)
                        } else e = o.treeContext, fa = Md(s.nextSibling), da = t, pa = !0, ha = null, ga = !1, null !== e && ca(t, e), (t = Bs(t, a)).flags |= 4096;
                        return t
                    }
                    return (e = Hr(e.child, {
                        mode: a.mode,
                        children: a.children
                    })).ref = t.ref, t.child = e, e.return = t, e
                }(e, t, n);
            case 22:
                return js(e, t, n, t.pendingProps);
            case 24:
                return Ia(t), a = Ra(ja), null === e ? (null === (i = Xa()) && (i = mu, o = Va(), i.pooledCache = o, o.refCount++, null !== o && (i.pooledCacheLanes |= n), i = o), t.memoizedState = {
                    parent: a,
                    cache: i
                }, yi(t), xa(0, ja, i)) : (0 !== (e.lanes & n) && (vi(e, t), Ti(t, null, null, n), Oi()), i = e.memoizedState, o = t.memoizedState, i.parent !== a ? (i = {
                    parent: a,
                    cache: a
                }, t.memoizedState = i, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = i), xa(0, ja, a)) : (a = o.cache, xa(0, ja, a), a !== i.cache && Pa(t, [ja], n, !0))), Ds(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(r(156, t.tag))
    }

    function ul(e) {
        e.flags |= 4
    }

    function cl(e, t, n, r, a) {
        if ((t = !!(32 & e.mode)) && (t = !1), t) {
            if (e.flags |= 16777216, (335544128 & a) === a)
                if (e.stateNode.complete) e.flags |= 8192;
                else {
                    if (!ic()) throw oi = ni, ei;
                    e.flags |= 8192
                }
        } else e.flags &= -16777217
    }

    function dl(e, t) {
        if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
        else if (e.flags |= 16777216, !sf(t)) {
            if (!ic()) throw oi = ni, ei;
            e.flags |= 8192
        }
    }

    function fl(e, t) {
        null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? Le() : 536870912, e.lanes |= t, Pu |= t)
    }

    function pl(e, t) {
        if (!pa) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function hl(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
        if (t)
            for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 65011712 & a.subtreeFlags, r |= 65011712 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
        return e.subtreeFlags |= r, e.childLanes = n, t
    }

    function gl(e, t, n) {
        var a = t.pendingProps;
        switch (ua(t), t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
                return hl(t), null;
            case 3:
                return n = t.stateNode, a = null, null !== e && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), _a(ja), J(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (wa(t) ? ul(t) : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, ka())), hl(t), null;
            case 26:
                var i = t.type,
                    o = t.memoizedState;
                return null === e ? (ul(t), null !== o ? (hl(t), dl(t, o)) : (hl(t), cl(t, i, 0, 0, n))) : o ? o !== e.memoizedState ? (ul(t), hl(t), dl(t, o)) : (hl(t), t.flags &= -16777217) : ((e = e.memoizedProps) !== a && ul(t), hl(t), cl(t, i, 0, 0, n)), null;
            case 27:
                if (Z(t), n = K.current, i = t.type, null !== e && null != t.stateNode) e.memoizedProps !== a && ul(t);
                else {
                    if (!a) {
                        if (null === t.stateNode) throw Error(r(166));
                        return hl(t), null
                    }
                    e = G.current, wa(t) ? ya(t) : (e = Ud(i, a, n), t.stateNode = e, ul(t))
                }
                return hl(t), null;
            case 5:
                if (Z(t), i = t.type, null !== e && null != t.stateNode) e.memoizedProps !== a && ul(t);
                else {
                    if (!a) {
                        if (null === t.stateNode) throw Error(r(166));
                        return hl(t), null
                    }
                    if (o = G.current, wa(t)) ya(t);
                    else {
                        var s = yd(K.current);
                        switch (o) {
                            case 1:
                                o = s.createElementNS("http://www.w3.org/2000/svg", i);
                                break;
                            case 2:
                                o = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                                break;
                            default:
                                switch (i) {
                                    case "svg":
                                        o = s.createElementNS("http://www.w3.org/2000/svg", i);
                                        break;
                                    case "math":
                                        o = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                                        break;
                                    case "script":
                                        (o = s.createElement("div")).innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
                                        break;
                                    case "select":
                                        o = "string" == typeof a.is ? s.createElement("select", {
                                            is: a.is
                                        }) : s.createElement("select"), a.multiple ? o.multiple = !0 : a.size && (o.size = a.size);
                                        break;
                                    default:
                                        o = "string" == typeof a.is ? s.createElement(i, {
                                            is: a.is
                                        }) : s.createElement(i)
                                }
                        }
                        o[Be] = t, o[$e] = a;
                        e: for (s = t.child; null !== s;) {
                            if (5 === s.tag || 6 === s.tag) o.appendChild(s.stateNode);
                            else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                                s.child.return = s, s = s.child;
                                continue
                            }
                            if (s === t) break e;
                            for (; null === s.sibling;) {
                                if (null === s.return || s.return === t) break e;
                                s = s.return
                            }
                            s.sibling.return = s.return, s = s.sibling
                        }
                        t.stateNode = o;
                        e: switch (hd(o, i, a), i) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a = !!a.autoFocus;
                                break e;
                            case "img":
                                a = !0;
                                break e;
                            default:
                                a = !1
                        }
                        a && ul(t)
                    }
                }
                return hl(t), cl(t, t.type, null === e || e.memoizedProps, t.pendingProps, n), null;
            case 6:
                if (e && null != t.stateNode) e.memoizedProps !== a && ul(t);
                else {
                    if ("string" != typeof a && null === t.stateNode) throw Error(r(166));
                    if (e = K.current, wa(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, a = null, null !== (i = da)) switch (i.tag) {
                            case 27:
                            case 5:
                                a = i.memoizedProps
                        }
                        e[Be] = t, (e = !!(e.nodeValue === n || null !== a && !0 === a.suppressHydrationWarning || dd(e.nodeValue, n))) || ba(t, !0)
                    } else(e = yd(e).createTextNode(a))[Be] = t, t.stateNode = e
                }
                return hl(t), null;
            case 31:
                if (n = t.memoizedState, null === e || null !== e.memoizedState) {
                    if (a = wa(t), null !== n) {
                        if (null === e) {
                            if (!a) throw Error(r(318));
                            if (!(e = null !== (e = t.memoizedState) ? e.dehydrated : null)) throw Error(r(557));
                            e[Be] = t
                        } else Sa(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        hl(t), e = !1
                    } else n = ka(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = n), e = !0;
                    if (!e) return 256 & t.flags ? (ji(t), t) : (ji(t), null);
                    if (128 & t.flags) throw Error(r(558))
                }
                return hl(t), null;
            case 13:
                if (a = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (i = wa(t), null !== a && null !== a.dehydrated) {
                        if (null === e) {
                            if (!i) throw Error(r(318));
                            if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(r(317));
                            i[Be] = t
                        } else Sa(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        hl(t), i = !1
                    } else i = ka(), null !== e && null !== e.memoizedState && (e.memoizedState.hydrationErrors = i), i = !0;
                    if (!i) return 256 & t.flags ? (ji(t), t) : (ji(t), null)
                }
                return ji(t), 128 & t.flags ? (t.lanes = n, t) : (n = null !== a, e = null !== e && null !== e.memoizedState, n && (i = null, null !== (a = t.child).alternate && null !== a.alternate.memoizedState && null !== a.alternate.memoizedState.cachePool && (i = a.alternate.memoizedState.cachePool.pool), o = null, null !== a.memoizedState && null !== a.memoizedState.cachePool && (o = a.memoizedState.cachePool.pool), o !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), fl(t, t.updateQueue), hl(t), null);
            case 4:
                return J(), null === e && td(t.stateNode.containerInfo), hl(t), null;
            case 10:
                return _a(t.type), hl(t), null;
            case 19:
                if (H(Vi), null === (a = t.memoizedState)) return hl(t), null;
                if (i = !!(128 & t.flags), null === (o = a.rendering))
                    if (i) pl(a, !1);
                    else {
                        if (0 !== Ou || null !== e && 128 & e.flags)
                            for (e = t.child; null !== e;) {
                                if (null !== (o = Hi(e))) {
                                    for (t.flags |= 128, pl(a, !1), e = o.updateQueue, t.updateQueue = e, fl(t, e), t.subtreeFlags = 0, e = n, n = t.child; null !== n;) Br(n, e), n = n.sibling;
                                    return B(Vi, 1 & Vi.current | 2), pa && oa(t, a.treeForkCount), t.child
                                }
                                e = e.sibling
                            }
                        null !== a.tail && ce() > Du && (t.flags |= 128, i = !0, pl(a, !1), t.lanes = 4194304)
                    }
                else {
                    if (!i)
                        if (null !== (e = Hi(o))) {
                            if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, fl(t, e), pl(a, !0), null === a.tail && "hidden" === a.tailMode && !o.alternate && !pa) return hl(t), null
                        } else 2 * ce() - a.renderingStartTime > Du && 536870912 !== n && (t.flags |= 128, i = !0, pl(a, !1), t.lanes = 4194304);
                    a.isBackwards ? (o.sibling = t.child, t.child = o) : (null !== (e = a.last) ? e.sibling = o : t.child = o, a.last = o)
                }
                return null !== a.tail ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ce(), e.sibling = null, n = Vi.current, B(Vi, i ? 1 & n | 2 : 1 & n), pa && oa(t, a.treeForkCount), e) : (hl(t), null);
            case 22:
            case 23:
                return ji(t), Ii(), a = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? !!(536870912 & n) && !(128 & t.flags) && (hl(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : hl(t), null !== (n = t.updateQueue) && fl(t, n.retryQueue), n = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), a = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), null !== e && H(Qa), null;
            case 24:
                return n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), _a(ja), hl(t), null;
            case 25:
            case 30:
                return null
        }
        throw Error(r(156, t.tag))
    }

    function ml(e, t) {
        switch (ua(t), t.tag) {
            case 1:
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3:
                return _a(ja), J(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Z(t), null;
            case 31:
                if (null !== t.memoizedState) {
                    if (ji(t), null === t.alternate) throw Error(r(340));
                    Sa()
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 13:
                if (ji(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate) throw Error(r(340));
                    Sa()
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19:
                return H(Vi), null;
            case 4:
                return J(), null;
            case 10:
                return _a(t.type), null;
            case 22:
            case 23:
                return ji(t), Ii(), null !== e && H(Qa), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 24:
                return _a(ja), null;
            default:
                return null
        }
    }

    function bl(e, t) {
        switch (ua(t), t.tag) {
            case 3:
                _a(ja), J();
                break;
            case 26:
            case 27:
            case 5:
                Z(t);
                break;
            case 4:
                J();
                break;
            case 31:
                null !== t.memoizedState && ji(t);
                break;
            case 13:
                ji(t);
                break;
            case 19:
                H(Vi);
                break;
            case 10:
                _a(t.type);
                break;
            case 22:
            case 23:
                ji(t), Ii(), null !== e && H(Qa);
                break;
            case 24:
                _a(ja)
        }
    }

    function yl(e, t) {
        try {
            var n = t.updateQueue,
                r = null !== n ? n.lastEffect : null;
            if (null !== r) {
                var a = r.next;
                n = a;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var i = n.create,
                            o = n.inst;
                        r = i(), o.destroy = r
                    }
                    n = n.next
                } while (n !== a)
            }
        } catch (s) {
            Oc(t, t.return, s)
        }
    }

    function vl(e, t, n) {
        try {
            var r = t.updateQueue,
                a = null !== r ? r.lastEffect : null;
            if (null !== a) {
                var i = a.next;
                r = i;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst,
                            s = o.destroy;
                        if (void 0 !== s) {
                            o.destroy = void 0, a = t;
                            var l = n,
                                u = s;
                            try {
                                u()
                            } catch (c) {
                                Oc(a, l, c)
                            }
                        }
                    }
                    r = r.next
                } while (r !== i)
            }
        } catch (c) {
            Oc(t, t.return, c)
        }
    }

    function wl(e) {
        var t = e.updateQueue;
        if (null !== t) {
            var n = e.stateNode;
            try {
                _i(t, n)
            } catch (r) {
                Oc(e, e.return, r)
            }
        }
    }

    function Sl(e, t, n) {
        n.props = Os(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (r) {
            Oc(e, t, r)
        }
    }

    function kl(e, t) {
        try {
            var n = e.ref;
            if (null !== n) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var r = e.stateNode;
                        break;
                    default:
                        r = e.stateNode
                }
                "function" == typeof n ? e.refCleanup = n(r) : n.current = r
            }
        } catch (a) {
            Oc(e, t, a)
        }
    }

    function El(e, t) {
        var n = e.ref,
            r = e.refCleanup;
        if (null !== n)
            if ("function" == typeof r) try {
                r()
            } catch (a) {
                Oc(e, t, a)
            } finally {
                e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
            } else if ("function" == typeof n) try {
                n(null)
            } catch (i) {
                Oc(e, t, i)
            } else n.current = null
    }

    function Cl(e) {
        var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && r.focus();
                    break e;
                case "img":
                    n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
            }
        }
        catch (a) {
            Oc(e, e.return, a)
        }
    }

    function Ol(e, t, n) {
        try {
            var a = e.stateNode;
            ! function(e, t, n, a) {
                switch (t) {
                    case "div":
                    case "span":
                    case "svg":
                    case "path":
                    case "a":
                    case "g":
                    case "p":
                    case "li":
                        break;
                    case "input":
                        var i = null,
                            o = null,
                            s = null,
                            l = null,
                            u = null,
                            c = null,
                            d = null;
                        for (h in n) {
                            var f = n[h];
                            if (n.hasOwnProperty(h) && null != f) switch (h) {
                                case "checked":
                                case "value":
                                    break;
                                case "defaultValue":
                                    u = f;
                                default:
                                    a.hasOwnProperty(h) || fd(e, t, h, null, a, f)
                            }
                        }
                        for (var p in a) {
                            var h = a[p];
                            if (f = n[p], a.hasOwnProperty(p) && (null != h || null != f)) switch (p) {
                                case "type":
                                    o = h;
                                    break;
                                case "name":
                                    i = h;
                                    break;
                                case "checked":
                                    c = h;
                                    break;
                                case "defaultChecked":
                                    d = h;
                                    break;
                                case "value":
                                    s = h;
                                    break;
                                case "defaultValue":
                                    l = h;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != h) throw Error(r(137, t));
                                    break;
                                default:
                                    h !== f && fd(e, t, p, h, a, f)
                            }
                        }
                        return void wt(e, s, l, u, c, d, o, i);
                    case "select":
                        for (o in h = s = l = p = null, n)
                            if (u = n[o], n.hasOwnProperty(o) && null != u) switch (o) {
                                case "value":
                                    break;
                                case "multiple":
                                    h = u;
                                default:
                                    a.hasOwnProperty(o) || fd(e, t, o, null, a, u)
                            }
                        for (i in a)
                            if (o = a[i], u = n[i], a.hasOwnProperty(i) && (null != o || null != u)) switch (i) {
                                case "value":
                                    p = o;
                                    break;
                                case "defaultValue":
                                    l = o;
                                    break;
                                case "multiple":
                                    s = o;
                                default:
                                    o !== u && fd(e, t, i, o, a, u)
                            }
                        return t = l, n = s, a = h, void(null != p ? Et(e, !!n, p, !1) : !!a != !!n && (null != t ? Et(e, !!n, t, !0) : Et(e, !!n, n ? [] : "", !1)));
                    case "textarea":
                        for (l in h = p = null, n)
                            if (i = n[l], n.hasOwnProperty(l) && null != i && !a.hasOwnProperty(l)) switch (l) {
                                case "value":
                                case "children":
                                    break;
                                default:
                                    fd(e, t, l, null, a, i)
                            }
                        for (s in a)
                            if (i = a[s], o = n[s], a.hasOwnProperty(s) && (null != i || null != o)) switch (s) {
                                case "value":
                                    p = i;
                                    break;
                                case "defaultValue":
                                    h = i;
                                    break;
                                case "children":
                                    break;
                                case "dangerouslySetInnerHTML":
                                    if (null != i) throw Error(r(91));
                                    break;
                                default:
                                    i !== o && fd(e, t, s, i, a, o)
                            }
                        return void Ct(e, p, h);
                    case "option":
                        for (var g in n)
                            if (p = n[g], n.hasOwnProperty(g) && null != p && !a.hasOwnProperty(g))
                                if ("selected" === g) e.selected = !1;
                                else fd(e, t, g, null, a, p);
                        for (u in a)
                            if (p = a[u], h = n[u], a.hasOwnProperty(u) && p !== h && (null != p || null != h))
                                if ("selected" === u) e.selected = p && "function" != typeof p && "symbol" != typeof p;
                                else fd(e, t, u, p, a, h);
                        return;
                    case "img":
                    case "link":
                    case "area":
                    case "base":
                    case "br":
                    case "col":
                    case "embed":
                    case "hr":
                    case "keygen":
                    case "meta":
                    case "param":
                    case "source":
                    case "track":
                    case "wbr":
                    case "menuitem":
                        for (var m in n) p = n[m], n.hasOwnProperty(m) && null != p && !a.hasOwnProperty(m) && fd(e, t, m, null, a, p);
                        for (c in a)
                            if (p = a[c], h = n[c], a.hasOwnProperty(c) && p !== h && (null != p || null != h)) switch (c) {
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (null != p) throw Error(r(137, t));
                                    break;
                                default:
                                    fd(e, t, c, p, a, h)
                            }
                        return;
                    default:
                        if (Pt(t)) {
                            for (var b in n) p = n[b], n.hasOwnProperty(b) && void 0 !== p && !a.hasOwnProperty(b) && pd(e, t, b, void 0, a, p);
                            for (d in a) p = a[d], h = n[d], !a.hasOwnProperty(d) || p === h || void 0 === p && void 0 === h || pd(e, t, d, p, a, h);
                            return
                        }
                }
                for (var y in n) p = n[y], n.hasOwnProperty(y) && null != p && !a.hasOwnProperty(y) && fd(e, t, y, null, a, p);
                for (f in a) p = a[f], h = n[f], !a.hasOwnProperty(f) || p === h || null == p && null == h || fd(e, t, f, p, a, h)
            }(a, e.type, n, t), a[$e] = t
        } catch (i) {
            Oc(e, e.return, i)
        }
    }

    function Tl(e) {
        return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag && _d(e.type) || 4 === e.tag
    }

    function xl(e) {
        e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || Tl(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (27 === e.tag && _d(e.type)) continue e;
                if (2 & e.flags) continue e;
                if (null === e.child || 4 === e.tag) continue e;
                e.child.return = e, e = e.child
            }
            if (!(2 & e.flags)) return e.stateNode
        }
    }

    function _l(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? (9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).insertBefore(e, t) : ((t = 9 === n.nodeType ? n.body : "HTML" === n.nodeName ? n.ownerDocument.body : n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Rt));
        else if (4 !== r && (27 === r && _d(e.type) && (n = e.stateNode, t = null), null !== (e = e.child)))
            for (_l(e, t, n), e = e.sibling; null !== e;) _l(e, t, n), e = e.sibling
    }

    function Nl(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && (27 === r && _d(e.type) && (n = e.stateNode), null !== (e = e.child)))
            for (Nl(e, t, n), e = e.sibling; null !== e;) Nl(e, t, n), e = e.sibling
    }

    function Pl(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var r = e.type, a = t.attributes; a.length;) t.removeAttributeNode(a[0]);
            hd(t, r, n), t[Be] = e, t[$e] = n
        } catch (i) {
            Oc(e, e.return, i)
        }
    }
    var Al = !1,
        Ll = !1,
        Il = !1,
        Rl = "function" == typeof WeakSet ? WeakSet : Set,
        Ml = null;

    function Dl(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Xl(e, n), 4 & r && yl(5, n);
                break;
            case 1:
                if (Xl(e, n), 4 & r)
                    if (e = n.stateNode, null === t) try {
                        e.componentDidMount()
                    } catch (o) {
                        Oc(n, n.return, o)
                    } else {
                        var a = Os(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (s) {
                            Oc(n, n.return, s)
                        }
                    }
                64 & r && wl(n), 512 & r && kl(n, n.return);
                break;
            case 3:
                if (Xl(e, n), 64 & r && null !== (e = n.updateQueue)) {
                    if (t = null, null !== n.child) switch (n.child.tag) {
                        case 27:
                        case 5:
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        _i(e, t)
                    } catch (o) {
                        Oc(n, n.return, o)
                    }
                }
                break;
            case 27:
                null === t && 4 & r && Pl(n);
            case 26:
            case 5:
                Xl(e, n), null === t && 4 & r && Cl(n), 512 & r && kl(n, n.return);
                break;
            case 12:
                Xl(e, n);
                break;
            case 31:
                Xl(e, n), 4 & r && Hl(e, n);
                break;
            case 13:
                Xl(e, n), 4 & r && Bl(e, n), 64 & r && (null !== (e = n.memoizedState) && (null !== (e = e.dehydrated) && function(e, t) {
                    var n = e.ownerDocument;
                    if ("$~" === e.data) e._reactRetry = t;
                    else if ("$?" !== e.data || "loading" !== n.readyState) t();
                    else {
                        var r = function() {
                            t(), n.removeEventListener("DOMContentLoaded", r)
                        };
                        n.addEventListener("DOMContentLoaded", r), e._reactRetry = r
                    }
                }(e, n = Nc.bind(null, n))));
                break;
            case 22:
                if (!(r = null !== n.memoizedState || Al)) {
                    t = null !== t && null !== t.memoizedState || Ll, a = Al;
                    var i = Ll;
                    Al = r, (Ll = t) && !i ? Yl(e, n, !!(8772 & n.subtreeFlags)) : Xl(e, n), Al = a, Ll = i
                }
                break;
            case 30:
                break;
            default:
                Xl(e, n)
        }
    }

    function zl(e) {
        var t = e.alternate;
        null !== t && (e.alternate = null, zl(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && Je(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Fl = null,
        Ul = !1;

    function jl(e, t, n) {
        for (n = n.child; null !== n;) Vl(e, t, n), n = n.sibling
    }

    function Vl(e, t, n) {
        if (we && "function" == typeof we.onCommitFiberUnmount) try {
            we.onCommitFiberUnmount(ve, n)
        } catch (i) {}
        switch (n.tag) {
            case 26:
                Ll || El(n, t), jl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
                break;
            case 27:
                Ll || El(n, t);
                var r = Fl,
                    a = Ul;
                _d(n.type) && (Fl = n.stateNode, Ul = !1), jl(e, t, n), jd(n.stateNode), Fl = r, Ul = a;
                break;
            case 5:
                Ll || El(n, t);
            case 6:
                if (r = Fl, a = Ul, Fl = null, jl(e, t, n), Ul = a, null !== (Fl = r))
                    if (Ul) try {
                        (9 === Fl.nodeType ? Fl.body : "HTML" === Fl.nodeName ? Fl.ownerDocument.body : Fl).removeChild(n.stateNode)
                    } catch (o) {
                        Oc(n, t, o)
                    } else try {
                        Fl.removeChild(n.stateNode)
                    } catch (o) {
                        Oc(n, t, o)
                    }
                break;
            case 18:
                null !== Fl && (Ul ? (Nd(9 === (e = Fl).nodeType ? e.body : "HTML" === e.nodeName ? e.ownerDocument.body : e, n.stateNode), qf(e)) : Nd(Fl, n.stateNode));
                break;
            case 4:
                r = Fl, a = Ul, Fl = n.stateNode.containerInfo, Ul = !0, jl(e, t, n), Fl = r, Ul = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                vl(2, n, t), Ll || vl(4, n, t), jl(e, t, n);
                break;
            case 1:
                Ll || (El(n, t), "function" == typeof(r = n.stateNode).componentWillUnmount && Sl(n, t, r)), jl(e, t, n);
                break;
            case 21:
                jl(e, t, n);
                break;
            case 22:
                Ll = (r = Ll) || null !== n.memoizedState, jl(e, t, n), Ll = r;
                break;
            default:
                jl(e, t, n)
        }
    }

    function Hl(e, t) {
        if (null === t.memoizedState && (null !== (e = t.alternate) && null !== (e = e.memoizedState))) {
            e = e.dehydrated;
            try {
                qf(e)
            } catch (n) {
                Oc(t, t.return, n)
            }
        }
    }

    function Bl(e, t) {
        if (null === t.memoizedState && (null !== (e = t.alternate) && (null !== (e = e.memoizedState) && null !== (e = e.dehydrated)))) try {
            qf(e)
        } catch (n) {
            Oc(t, t.return, n)
        }
    }

    function $l(e, t) {
        var n = function(e) {
            switch (e.tag) {
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return null === t && (t = e.stateNode = new Rl), t;
                case 22:
                    return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new Rl), t;
                default:
                    throw Error(r(435, e.tag))
            }
        }(e);
        t.forEach(function(t) {
            if (!n.has(t)) {
                n.add(t);
                var r = Pc.bind(null, e, t);
                t.then(r, r)
            }
        })
    }

    function Wl(e, t) {
        var n = t.deletions;
        if (null !== n)
            for (var a = 0; a < n.length; a++) {
                var i = n[a],
                    o = e,
                    s = t,
                    l = s;
                e: for (; null !== l;) {
                    switch (l.tag) {
                        case 27:
                            if (_d(l.type)) {
                                Fl = l.stateNode, Ul = !1;
                                break e
                            }
                            break;
                        case 5:
                            Fl = l.stateNode, Ul = !1;
                            break e;
                        case 3:
                        case 4:
                            Fl = l.stateNode.containerInfo, Ul = !0;
                            break e
                    }
                    l = l.return
                }
                if (null === Fl) throw Error(r(160));
                Vl(o, s, i), Fl = null, Ul = !1, null !== (o = i.alternate) && (o.return = null), i.return = null
            }
        if (13886 & t.subtreeFlags)
            for (t = t.child; null !== t;) ql(t, e), t = t.sibling
    }
    var Gl = null;

    function ql(e, t) {
        var n = e.alternate,
            a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Wl(t, e), Kl(e), 4 & a && (vl(3, e, e.return), yl(3, e), vl(5, e, e.return));
                break;
            case 1:
                Wl(t, e), Kl(e), 512 & a && (Ll || null === n || El(n, n.return)), 64 & a && Al && (null !== (e = e.updateQueue) && (null !== (a = e.callbacks) && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === n ? a : n.concat(a))));
                break;
            case 26:
                var i = Gl;
                if (Wl(t, e), Kl(e), 512 & a && (Ll || null === n || El(n, n.return)), 4 & a) {
                    var o = null !== n ? n.memoizedState : null;
                    if (a = e.memoizedState, null === n)
                        if (null === a)
                            if (null === e.stateNode) {
                                e: {
                                    a = e.type,
                                    n = e.memoizedProps,
                                    i = i.ownerDocument || i;t: switch (a) {
                                        case "title":
                                            (!(o = i.getElementsByTagName("title")[0]) || o[Xe] || o[Be] || "http://www.w3.org/2000/svg" === o.namespaceURI || o.hasAttribute("itemprop")) && (o = i.createElement(a), i.head.insertBefore(o, i.querySelector("head > title"))), hd(o, a, n), o[Be] = e, nt(o), a = o;
                                            break e;
                                        case "link":
                                            var s = af("link", "href", i).get(a + (n.href || ""));
                                            if (s)
                                                for (var l = 0; l < s.length; l++)
                                                    if ((o = s[l]).getAttribute("href") === (null == n.href || "" === n.href ? null : n.href) && o.getAttribute("rel") === (null == n.rel ? null : n.rel) && o.getAttribute("title") === (null == n.title ? null : n.title) && o.getAttribute("crossorigin") === (null == n.crossOrigin ? null : n.crossOrigin)) {
                                                        s.splice(l, 1);
                                                        break t
                                                    }
                                            hd(o = i.createElement(a), a, n), i.head.appendChild(o);
                                            break;
                                        case "meta":
                                            if (s = af("meta", "content", i).get(a + (n.content || "")))
                                                for (l = 0; l < s.length; l++)
                                                    if ((o = s[l]).getAttribute("content") === (null == n.content ? null : "" + n.content) && o.getAttribute("name") === (null == n.name ? null : n.name) && o.getAttribute("property") === (null == n.property ? null : n.property) && o.getAttribute("http-equiv") === (null == n.httpEquiv ? null : n.httpEquiv) && o.getAttribute("charset") === (null == n.charSet ? null : n.charSet)) {
                                                        s.splice(l, 1);
                                                        break t
                                                    }
                                            hd(o = i.createElement(a), a, n), i.head.appendChild(o);
                                            break;
                                        default:
                                            throw Error(r(468, a))
                                    }
                                    o[Be] = e,
                                    nt(o),
                                    a = o
                                }
                                e.stateNode = a
                            }
                    else of(i, e.type, e.stateNode);
                    else e.stateNode = Zd(i, a, e.memoizedProps);
                    else o !== a ? (null === o ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : o.count--, null === a ? of (i, e.type, e.stateNode) : Zd(i, a, e.memoizedProps)) : null === a && null !== e.stateNode && Ol(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                Wl(t, e), Kl(e), 512 & a && (Ll || null === n || El(n, n.return)), null !== n && 4 & a && Ol(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (Wl(t, e), Kl(e), 512 & a && (Ll || null === n || El(n, n.return)), 32 & e.flags) {
                    i = e.stateNode;
                    try {
                        Tt(i, "")
                    } catch (g) {
                        Oc(e, e.return, g)
                    }
                }
                4 & a && null != e.stateNode && Ol(e, i = e.memoizedProps, null !== n ? n.memoizedProps : i), 1024 & a && (Il = !0);
                break;
            case 6:
                if (Wl(t, e), Kl(e), 4 & a) {
                    if (null === e.stateNode) throw Error(r(162));
                    a = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = a
                    } catch (g) {
                        Oc(e, e.return, g)
                    }
                }
                break;
            case 3:
                if (rf = null, i = Gl, Gl = Bd(t.containerInfo), Wl(t, e), Gl = i, Kl(e), 4 & a && null !== n && n.memoizedState.isDehydrated) try {
                    qf(t.containerInfo)
                } catch (g) {
                    Oc(e, e.return, g)
                }
                Il && (Il = !1, Ql(e));
                break;
            case 4:
                a = Gl, Gl = Bd(e.stateNode.containerInfo), Wl(t, e), Kl(e), Gl = a;
                break;
            case 12:
            default:
                Wl(t, e), Kl(e);
                break;
            case 31:
            case 19:
                Wl(t, e), Kl(e), 4 & a && (null !== (a = e.updateQueue) && (e.updateQueue = null, $l(e, a)));
                break;
            case 13:
                Wl(t, e), Kl(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== n && null !== n.memoizedState) && (Ru = ce()), 4 & a && (null !== (a = e.updateQueue) && (e.updateQueue = null, $l(e, a)));
                break;
            case 22:
                i = null !== e.memoizedState;
                var u = null !== n && null !== n.memoizedState,
                    c = Al,
                    d = Ll;
                if (Al = c || i, Ll = d || u, Wl(t, e), Ll = d, Al = c, Kl(e), 8192 & a) e: for (t = e.stateNode, t._visibility = i ? -2 & t._visibility : 1 | t._visibility, i && (null === n || u || Al || Ll || Jl(e)), n = null, t = e;;) {
                    if (5 === t.tag || 26 === t.tag) {
                        if (null === n) {
                            u = n = t;
                            try {
                                if (o = u.stateNode, i) "function" == typeof(s = o.style).setProperty ? s.setProperty("display", "none", "important") : s.display = "none";
                                else {
                                    l = u.stateNode;
                                    var f = u.memoizedProps.style,
                                        p = null != f && f.hasOwnProperty("display") ? f.display : null;
                                    l.style.display = null == p || "boolean" == typeof p ? "" : ("" + p).trim()
                                }
                            } catch (g) {
                                Oc(u, u.return, g)
                            }
                        }
                    } else if (6 === t.tag) {
                        if (null === n) {
                            u = t;
                            try {
                                u.stateNode.nodeValue = i ? "" : u.memoizedProps
                            } catch (g) {
                                Oc(u, u.return, g)
                            }
                        }
                    } else if (18 === t.tag) {
                        if (null === n) {
                            u = t;
                            try {
                                var h = u.stateNode;
                                i ? Pd(h, !0) : Pd(u.stateNode, !1)
                            } catch (g) {
                                Oc(u, u.return, g)
                            }
                        }
                    } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) break e;
                        n === t && (n = null), t = t.return
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                }
                4 & a && (null !== (a = e.updateQueue) && (null !== (n = a.retryQueue) && (a.retryQueue = null, $l(e, n))));
            case 30:
            case 21:
        }
    }

    function Kl(e) {
        var t = e.flags;
        if (2 & t) {
            try {
                for (var n, a = e.return; null !== a;) {
                    if (Tl(a)) {
                        n = a;
                        break
                    }
                    a = a.return
                }
                if (null == n) throw Error(r(160));
                switch (n.tag) {
                    case 27:
                        var i = n.stateNode;
                        Nl(e, xl(e), i);
                        break;
                    case 5:
                        var o = n.stateNode;
                        32 & n.flags && (Tt(o, ""), n.flags &= -33), Nl(e, xl(e), o);
                        break;
                    case 3:
                    case 4:
                        var s = n.stateNode.containerInfo;
                        _l(e, xl(e), s);
                        break;
                    default:
                        throw Error(r(161))
                }
            } catch (l) {
                Oc(e, e.return, l)
            }
            e.flags &= -3
        }
        4096 & t && (e.flags &= -4097)
    }

    function Ql(e) {
        if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e;) {
                var t = e;
                Ql(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), e = e.sibling
            }
    }

    function Xl(e, t) {
        if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t;) Dl(e, t.alternate, t), t = t.sibling
    }

    function Jl(e) {
        for (e = e.child; null !== e;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    vl(4, t, t.return), Jl(t);
                    break;
                case 1:
                    El(t, t.return);
                    var n = t.stateNode;
                    "function" == typeof n.componentWillUnmount && Sl(t, t.return, n), Jl(t);
                    break;
                case 27:
                    jd(t.stateNode);
                case 26:
                case 5:
                    El(t, t.return), Jl(t);
                    break;
                case 22:
                    null === t.memoizedState && Jl(t);
                    break;
                default:
                    Jl(t)
            }
            e = e.sibling
        }
    }

    function Yl(e, t, n) {
        for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t;) {
            var r = t.alternate,
                a = e,
                i = t,
                o = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    Yl(a, i, n), yl(4, i);
                    break;
                case 1:
                    if (Yl(a, i, n), "function" == typeof(a = (r = i).stateNode).componentDidMount) try {
                        a.componentDidMount()
                    } catch (u) {
                        Oc(r, r.return, u)
                    }
                    if (null !== (a = (r = i).updateQueue)) {
                        var s = r.stateNode;
                        try {
                            var l = a.shared.hiddenCallbacks;
                            if (null !== l)
                                for (a.shared.hiddenCallbacks = null, a = 0; a < l.length; a++) xi(l[a], s)
                        } catch (u) {
                            Oc(r, r.return, u)
                        }
                    }
                    n && 64 & o && wl(i), kl(i, i.return);
                    break;
                case 27:
                    Pl(i);
                case 26:
                case 5:
                    Yl(a, i, n), n && null === r && 4 & o && Cl(i), kl(i, i.return);
                    break;
                case 12:
                    Yl(a, i, n);
                    break;
                case 31:
                    Yl(a, i, n), n && 4 & o && Hl(a, i);
                    break;
                case 13:
                    Yl(a, i, n), n && 4 & o && Bl(a, i);
                    break;
                case 22:
                    null === i.memoizedState && Yl(a, i, n), kl(i, i.return);
                    break;
                case 30:
                    break;
                default:
                    Yl(a, i, n)
            }
            t = t.sibling
        }
    }

    function Zl(e, t) {
        var n = null;
        null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (n = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== n && (null != e && e.refCount++, null != n && Ha(n))
    }

    function eu(e, t) {
        e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ha(e))
    }

    function tu(e, t, n, r) {
        if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;) nu(e, t, n, r), t = t.sibling
    }

    function nu(e, t, n, r) {
        var a = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                tu(e, t, n, r), 2048 & a && yl(9, t);
                break;
            case 1:
            case 31:
            case 13:
            default:
                tu(e, t, n, r);
                break;
            case 3:
                tu(e, t, n, r), 2048 & a && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Ha(e)));
                break;
            case 12:
                if (2048 & a) {
                    tu(e, t, n, r), e = t.stateNode;
                    try {
                        var i = t.memoizedProps,
                            o = i.id,
                            s = i.onPostCommit;
                        "function" == typeof s && s(o, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (l) {
                        Oc(t, t.return, l)
                    }
                } else tu(e, t, n, r);
                break;
            case 23:
                break;
            case 22:
                i = t.stateNode, o = t.alternate, null !== t.memoizedState ? 2 & i._visibility ? tu(e, t, n, r) : au(e, t) : 2 & i._visibility ? tu(e, t, n, r) : (i._visibility |= 2, ru(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)), 2048 & a && Zl(o, t);
                break;
            case 24:
                tu(e, t, n, r), 2048 & a && eu(t.alternate, t)
        }
    }

    function ru(e, t, n, r, a) {
        for (a = a && (!!(10256 & t.subtreeFlags) || !1), t = t.child; null !== t;) {
            var i = e,
                o = t,
                s = n,
                l = r,
                u = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    ru(i, o, s, l, a), yl(8, o);
                    break;
                case 23:
                    break;
                case 22:
                    var c = o.stateNode;
                    null !== o.memoizedState ? 2 & c._visibility ? ru(i, o, s, l, a) : au(i, o) : (c._visibility |= 2, ru(i, o, s, l, a)), a && 2048 & u && Zl(o.alternate, o);
                    break;
                case 24:
                    ru(i, o, s, l, a), a && 2048 & u && eu(o.alternate, o);
                    break;
                default:
                    ru(i, o, s, l, a)
            }
            t = t.sibling
        }
    }

    function au(e, t) {
        if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t;) {
                var n = e,
                    r = t,
                    a = r.flags;
                switch (r.tag) {
                    case 22:
                        au(n, r), 2048 & a && Zl(r.alternate, r);
                        break;
                    case 24:
                        au(n, r), 2048 & a && eu(r.alternate, r);
                        break;
                    default:
                        au(n, r)
                }
                t = t.sibling
            }
    }
    var iu = 8192;

    function ou(e, t, n) {
        if (e.subtreeFlags & iu)
            for (e = e.child; null !== e;) su(e, t, n), e = e.sibling
    }

    function su(e, t, n) {
        switch (e.tag) {
            case 26:
                ou(e, t, n), e.flags & iu && null !== e.memoizedState && function(e, t, n, r) {
                    if (!("stylesheet" !== n.type || "string" == typeof r.media && !1 === matchMedia(r.media).matches || 4 & n.state.loading)) {
                        if (null === n.instance) {
                            var a = Kd(r.href),
                                i = t.querySelector(Qd(a));
                            if (i) return null !== (t = i._p) && "object" == typeof t && "function" == typeof t.then && (e.count++, e = uf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, void nt(i);
                            i = t.ownerDocument || t, r = Xd(r), (a = Vd.get(a)) && tf(r, a), nt(i = i.createElement("link"));
                            var o = i;
                            o._p = new Promise(function(e, t) {
                                o.onload = e, o.onerror = t
                            }), hd(i, "link", r), n.instance = i
                        }
                        null === e.stylesheets && (e.stylesheets = new Map), e.stylesheets.set(n, t), (t = n.state.preload) && !(3 & n.state.loading) && (e.count++, n = uf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n))
                    }
                }(n, Gl, e.memoizedState, e.memoizedProps);
                break;
            case 5:
            default:
                ou(e, t, n);
                break;
            case 3:
            case 4:
                var r = Gl;
                Gl = Bd(e.stateNode.containerInfo), ou(e, t, n), Gl = r;
                break;
            case 22:
                null === e.memoizedState && (null !== (r = e.alternate) && null !== r.memoizedState ? (r = iu, iu = 16777216, ou(e, t, n), iu = r) : ou(e, t, n))
        }
    }

    function lu(e) {
        var t = e.alternate;
        if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
                t = e.sibling, e.sibling = null, e = t
            } while (null !== e)
        }
    }

    function uu(e) {
        var t = e.deletions;
        if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    Ml = r, fu(r, e)
                }
            lu(e)
        }
        if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e;) cu(e), e = e.sibling
    }

    function cu(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                uu(e), 2048 & e.flags && vl(9, e, e.return);
                break;
            case 3:
            case 12:
            default:
                uu(e);
                break;
            case 22:
                var t = e.stateNode;
                null !== e.memoizedState && 2 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -3, du(e)) : uu(e)
        }
    }

    function du(e) {
        var t = e.deletions;
        if (16 & e.flags) {
            if (null !== t)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    Ml = r, fu(r, e)
                }
            lu(e)
        }
        for (e = e.child; null !== e;) {
            switch ((t = e).tag) {
                case 0:
                case 11:
                case 15:
                    vl(8, t, t.return), du(t);
                    break;
                case 22:
                    2 & (n = t.stateNode)._visibility && (n._visibility &= -3, du(t));
                    break;
                default:
                    du(t)
            }
            e = e.sibling
        }
    }

    function fu(e, t) {
        for (; null !== Ml;) {
            var n = Ml;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    vl(8, n, t);
                    break;
                case 23:
                case 22:
                    if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                        var r = n.memoizedState.cachePool.pool;
                        null != r && r.refCount++
                    }
                    break;
                case 24:
                    Ha(n.memoizedState.cache)
            }
            if (null !== (r = n.child)) r.return = n, Ml = r;
            else e: for (n = e; null !== Ml;) {
                var a = (r = Ml).sibling,
                    i = r.return;
                if (zl(r), r === n) {
                    Ml = null;
                    break e
                }
                if (null !== a) {
                    a.return = i, Ml = a;
                    break e
                }
                Ml = i
            }
        }
    }
    var pu = {
            getCacheForType: function(e) {
                var t = Ra(ja),
                    n = t.data.get(e);
                return void 0 === n && (n = e(), t.data.set(e, n)), n
            },
            cacheSignal: function() {
                return Ra(ja).controller.signal
            }
        },
        hu = "function" == typeof WeakMap ? WeakMap : Map,
        gu = 0,
        mu = null,
        bu = null,
        yu = 0,
        vu = 0,
        wu = null,
        Su = !1,
        ku = !1,
        Eu = !1,
        Cu = 0,
        Ou = 0,
        Tu = 0,
        xu = 0,
        _u = 0,
        Nu = 0,
        Pu = 0,
        Au = null,
        Lu = null,
        Iu = !1,
        Ru = 0,
        Mu = 0,
        Du = 1 / 0,
        zu = null,
        Fu = null,
        Uu = 0,
        ju = null,
        Vu = null,
        Hu = 0,
        Bu = 0,
        $u = null,
        Wu = null,
        Gu = 0,
        qu = null;

    function Ku() {
        return 2 & gu && 0 !== yu ? yu & -yu : null !== D.T ? $c() : je()
    }

    function Qu() {
        if (0 === Nu)
            if (536870912 & yu && !pa) Nu = 536870912;
            else {
                var e = Te;
                !(3932160 & (Te <<= 1)) && (Te = 262144), Nu = e
            }
        return null !== (e = Ri.current) && (e.flags |= 32), Nu
    }

    function Xu(e, t, n) {
        (e !== mu || 2 !== vu && 9 !== vu) && null === e.cancelPendingCommit || (rc(e, 0), ec(e, yu, Nu, !1)), Re(e, n), 2 & gu && e === mu || (e === mu && (!(2 & gu) && (xu |= n), 4 === Ou && ec(e, yu, Nu, !1)), zc(e))
    }

    function Ju(e, t, n) {
        if (6 & gu) throw Error(r(327));
        for (var a = !n && !(127 & t) && 0 === (t & e.expiredLanes) || Pe(e, t), i = a ? function(e, t) {
                var n = gu;
                gu |= 2;
                var a = oc(),
                    i = sc();
                mu !== e || yu !== t ? (zu = null, Du = ce() + 500, rc(e, t)) : ku = Pe(e, t);
                e: for (;;) try {
                    if (0 !== vu && null !== bu) {
                        t = bu;
                        var o = wu;
                        t: switch (vu) {
                            case 1:
                                vu = 0, wu = null, hc(e, t, o, 1);
                                break;
                            case 2:
                            case 9:
                                if (ri(o)) {
                                    vu = 0, wu = null, pc(t);
                                    break
                                }
                                t = function() {
                                    2 !== vu && 9 !== vu || mu !== e || (vu = 7), zc(e)
                                }, o.then(t, t);
                                break e;
                            case 3:
                                vu = 7;
                                break e;
                            case 4:
                                vu = 5;
                                break e;
                            case 7:
                                ri(o) ? (vu = 0, wu = null, pc(t)) : (vu = 0, wu = null, hc(e, t, o, 7));
                                break;
                            case 5:
                                var s = null;
                                switch (bu.tag) {
                                    case 26:
                                        s = bu.memoizedState;
                                    case 5:
                                    case 27:
                                        var l = bu;
                                        if (s ? sf(s) : l.stateNode.complete) {
                                            vu = 0, wu = null;
                                            var u = l.sibling;
                                            if (null !== u) bu = u;
                                            else {
                                                var c = l.return;
                                                null !== c ? (bu = c, gc(c)) : bu = null
                                            }
                                            break t
                                        }
                                }
                                vu = 0, wu = null, hc(e, t, o, 5);
                                break;
                            case 6:
                                vu = 0, wu = null, hc(e, t, o, 6);
                                break;
                            case 8:
                                nc(), Ou = 6;
                                break e;
                            default:
                                throw Error(r(462))
                        }
                    }
                    dc();
                    break
                } catch (d) {
                    ac(e, d)
                }
                return Ta = Oa = null, D.H = a, D.A = i, gu = n, null !== bu ? 0 : (mu = null, yu = 0, Lr(), Ou)
            }(e, t) : uc(e, t, !0), o = a;;) {
            if (0 === i) {
                ku && !a && ec(e, t, 0, !1);
                break
            }
            if (n = e.current.alternate, !o || Zu(n)) {
                if (2 === i) {
                    if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
                    else s = 0 !== (s = -536870913 & e.pendingLanes) ? s : 536870912 & s ? 536870912 : 0;
                    if (0 !== s) {
                        t = s;
                        e: {
                            var l = e;i = Au;
                            var u = l.current.memoizedState.isDehydrated;
                            if (u && (rc(l, s).flags |= 256), 2 !== (s = uc(l, s, !1))) {
                                if (Eu && !u) {
                                    l.errorRecoveryDisabledLanes |= o, xu |= o, i = 4;
                                    break e
                                }
                                o = Lu, Lu = i, null !== o && (null === Lu ? Lu = o : Lu.push.apply(Lu, o))
                            }
                            i = s
                        }
                        if (o = !1, 2 !== i) continue
                    }
                }
                if (1 === i) {
                    rc(e, 0), ec(e, t, 0, !0);
                    break
                }
                e: {
                    switch (a = e, o = i) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((4194048 & t) !== t) break;
                        case 6:
                            ec(a, t, Nu, !Su);
                            break e;
                        case 2:
                            Lu = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329))
                    }
                    if ((62914560 & t) === t && 10 < (i = Ru + 300 - ce())) {
                        if (ec(a, t, Nu, !Su), 0 !== Ne(a, 0, !0)) break e;
                        Hu = t, a.timeoutHandle = Ed(Yu.bind(null, a, n, Lu, zu, Iu, t, Nu, xu, Pu, Su, o, "Throttled", -0, 0), i)
                    } else Yu(a, n, Lu, zu, Iu, t, Nu, xu, Pu, Su, o, null, -0, 0)
                }
                break
            }
            i = uc(e, t, !1), o = !1
        }
        zc(e)
    }

    function Yu(e, t, n, r, a, i, o, s, l, u, c, d, f, p) {
        if (e.timeoutHandle = -1, 8192 & (d = t.subtreeFlags) || !(16785408 & ~d)) {
            su(t, i, d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Rt
            });
            var h = (62914560 & i) === i ? Ru - ce() : (4194048 & i) === i ? Mu - ce() : 0;
            if (null !== (h = function(e, t) {
                    return e.stylesheets && 0 === e.count && df(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
                        var r = setTimeout(function() {
                            if (e.stylesheets && df(e, e.stylesheets), e.unsuspend) {
                                var t = e.unsuspend;
                                e.unsuspend = null, t()
                            }
                        }, 6e4 + t);
                        0 < e.imgBytes && 0 === lf && (lf = 62500 * function() {
                            if ("function" == typeof performance.getEntriesByType) {
                                for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
                                    var a = n[r],
                                        i = a.transferSize,
                                        o = a.initiatorType,
                                        s = a.duration;
                                    if (i && s && gd(o)) {
                                        for (o = 0, s = a.responseEnd, r += 1; r < n.length; r++) {
                                            var l = n[r],
                                                u = l.startTime;
                                            if (u > s) break;
                                            var c = l.transferSize,
                                                d = l.initiatorType;
                                            c && gd(d) && (o += c * ((l = l.responseEnd) < s ? 1 : (s - u) / (l - u)))
                                        }
                                        if (--r, t += 8 * (i + o) / (a.duration / 1e3), 10 < ++e) break
                                    }
                                }
                                if (0 < e) return t / e / 1e6
                            }
                            return navigator.connection && "number" == typeof(e = navigator.connection.downlink) ? e : 5
                        }());
                        var a = setTimeout(function() {
                            if (e.waitingForImages = !1, 0 === e.count && (e.stylesheets && df(e, e.stylesheets), e.unsuspend)) {
                                var t = e.unsuspend;
                                e.unsuspend = null, t()
                            }
                        }, (e.imgBytes > lf ? 50 : 800) + t);
                        return e.unsuspend = n,
                            function() {
                                e.unsuspend = null, clearTimeout(r), clearTimeout(a)
                            }
                    } : null
                }(d, h))) return Hu = i, e.cancelPendingCommit = h(bc.bind(null, e, t, i, n, r, a, o, s, l, c, d, null, f, p)), void ec(e, i, o, !u)
        }
        bc(e, t, i, n, r, a, o, s, l)
    }

    function Zu(e) {
        for (var t = e;;) {
            var n = t.tag;
            if ((0 === n || 11 === n || 15 === n) && 16384 & t.flags && (null !== (n = t.updateQueue) && null !== (n = n.stores)))
                for (var r = 0; r < n.length; r++) {
                    var a = n[r],
                        i = a.getSnapshot;
                    a = a.value;
                    try {
                        if (!er(i(), a)) return !1
                    } catch (o) {
                        return !1
                    }
                }
            if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function ec(e, t, n, r) {
        t &= ~_u, t &= ~xu, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
        for (var a = t; 0 < a;) {
            var i = 31 - ke(a),
                o = 1 << i;
            r[i] = -1, a &= ~o
        }
        0 !== n && Me(e, n, t)
    }

    function tc() {
        return !!(6 & gu) || (Fc(0), !1)
    }

    function nc() {
        if (null !== bu) {
            if (0 === vu) var e = bu.return;
            else Ta = Oa = null, lo(e = bu), ui = null, ci = 0, e = bu;
            for (; null !== e;) bl(e.alternate, e), e = e.return;
            bu = null
        }
    }

    function rc(e, t) {
        var n = e.timeoutHandle; - 1 !== n && (e.timeoutHandle = -1, Cd(n)), null !== (n = e.cancelPendingCommit) && (e.cancelPendingCommit = null, n()), Hu = 0, nc(), mu = e, bu = n = Hr(e.current, null), yu = t, vu = 0, wu = null, Su = !1, ku = Pe(e, t), Eu = !1, Pu = Nu = _u = xu = Tu = Ou = 0, Lu = Au = null, Iu = !1, 8 & t && (t |= 32 & t);
        var r = e.entangledLanes;
        if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r;) {
                var a = 31 - ke(r),
                    i = 1 << a;
                t |= e[a], r &= ~i
            }
        return Cu = t, Lr(), n
    }

    function ac(e, t) {
        $i = null, D.H = bs, t === Za || t === ti ? (t = si(), vu = 3) : t === ei ? (t = si(), vu = 4) : vu = t === Rs ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, wu = t, null === bu && (Ou = 1, Ns(e, Xr(t, e.current)))
    }

    function ic() {
        var e = Ri.current;
        return null === e || ((4194048 & yu) === yu ? null === Mi : !!((62914560 & yu) === yu || 536870912 & yu) && e === Mi)
    }

    function oc() {
        var e = D.H;
        return D.H = bs, null === e ? bs : e
    }

    function sc() {
        var e = D.A;
        return D.A = pu, e
    }

    function lc() {
        Ou = 4, Su || (4194048 & yu) !== yu && null !== Ri.current || (ku = !0), !(134217727 & Tu) && !(134217727 & xu) || null === mu || ec(mu, yu, Nu, !1)
    }

    function uc(e, t, n) {
        var r = gu;
        gu |= 2;
        var a = oc(),
            i = sc();
        mu === e && yu === t || (zu = null, rc(e, t)), t = !1;
        var o = Ou;
        e: for (;;) try {
            if (0 !== vu && null !== bu) {
                var s = bu,
                    l = wu;
                switch (vu) {
                    case 8:
                        nc(), o = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        null === Ri.current && (t = !0);
                        var u = vu;
                        if (vu = 0, wu = null, hc(e, s, l, u), n && ku) {
                            o = 0;
                            break e
                        }
                        break;
                    default:
                        u = vu, vu = 0, wu = null, hc(e, s, l, u)
                }
            }
            cc(), o = Ou;
            break
        } catch (c) {
            ac(e, c)
        }
        return t && e.shellSuspendCounter++, Ta = Oa = null, gu = r, D.H = a, D.A = i, null === bu && (mu = null, yu = 0, Lr()), o
    }

    function cc() {
        for (; null !== bu;) fc(bu)
    }

    function dc() {
        for (; null !== bu && !le();) fc(bu)
    }

    function fc(e) {
        var t = ll(e.alternate, e, Cu);
        e.memoizedProps = e.pendingProps, null === t ? gc(e) : bu = t
    }

    function pc(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = qs(n, t, t.pendingProps, t.type, void 0, yu);
                break;
            case 11:
                t = qs(n, t, t.pendingProps, t.type.render, t.ref, yu);
                break;
            case 5:
                lo(t);
            default:
                bl(n, t), t = ll(n, t = bu = Br(t, Cu), Cu)
        }
        e.memoizedProps = e.pendingProps, null === t ? gc(e) : bu = t
    }

    function hc(e, t, n, a) {
        Ta = Oa = null, lo(t), ui = null, ci = 0;
        var i = t.return;
        try {
            if (function(e, t, n, a, i) {
                    if (n.flags |= 32768, null !== a && "object" == typeof a && "function" == typeof a.then) {
                        if (null !== (t = n.alternate) && Aa(t, n, i, !0), null !== (n = Ri.current)) {
                            switch (n.tag) {
                                case 31:
                                case 13:
                                    return null === Mi ? lc() : null === n.alternate && 0 === Ou && (Ou = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === ni ? n.flags |= 16384 : (null === (t = n.updateQueue) ? n.updateQueue = new Set([a]) : t.add(a), Tc(e, a, i)), !1;
                                case 22:
                                    return n.flags |= 65536, a === ni ? n.flags |= 16384 : (null === (t = n.updateQueue) ? (t = {
                                        transitions: null,
                                        markerInstances: null,
                                        retryQueue: new Set([a])
                                    }, n.updateQueue = t) : null === (n = t.retryQueue) ? t.retryQueue = new Set([a]) : n.add(a), Tc(e, a, i)), !1
                            }
                            throw Error(r(435, n.tag))
                        }
                        return Tc(e, a, i), lc(), !1
                    }
                    if (pa) return null !== (t = Ri.current) ? (!(65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== ma && Ea(Xr(e = Error(r(422), {
                        cause: a
                    }), n))) : (a !== ma && Ea(Xr(t = Error(r(423), {
                        cause: a
                    }), n)), (e = e.current.alternate).flags |= 65536, i &= -i, e.lanes |= i, a = Xr(a, n), Ei(e, i = As(e.stateNode, a, i)), 4 !== Ou && (Ou = 2)), !1;
                    var o = Error(r(520), {
                        cause: a
                    });
                    if (o = Xr(o, n), null === Au ? Au = [o] : Au.push(o), 4 !== Ou && (Ou = 2), null === t) return !0;
                    a = Xr(a, n), n = t;
                    do {
                        switch (n.tag) {
                            case 3:
                                return n.flags |= 65536, e = i & -i, n.lanes |= e, Ei(n, e = As(n.stateNode, a, e)), !1;
                            case 1:
                                if (t = n.type, o = n.stateNode, !(128 & n.flags || "function" != typeof t.getDerivedStateFromError && (null === o || "function" != typeof o.componentDidCatch || null !== Fu && Fu.has(o)))) return n.flags |= 65536, i &= -i, n.lanes |= i, Is(i = Ls(i), e, n, a), Ei(n, i), !1
                        }
                        n = n.return
                    } while (null !== n);
                    return !1
                }(e, i, t, n, yu)) return Ou = 1, Ns(e, Xr(n, e.current)), void(bu = null)
        } catch (o) {
            if (null !== i) throw bu = i, o;
            return Ou = 1, Ns(e, Xr(n, e.current)), void(bu = null)
        }
        32768 & t.flags ? (pa || 1 === a ? e = !0 : ku || 536870912 & yu ? e = !1 : (Su = e = !0, (2 === a || 9 === a || 3 === a || 6 === a) && (null !== (a = Ri.current) && 13 === a.tag && (a.flags |= 16384))), mc(t, e)) : gc(t)
    }

    function gc(e) {
        var t = e;
        do {
            if (32768 & t.flags) return void mc(t, Su);
            e = t.return;
            var n = gl(t.alternate, t, Cu);
            if (null !== n) return void(bu = n);
            if (null !== (t = t.sibling)) return void(bu = t);
            bu = t = e
        } while (null !== t);
        0 === Ou && (Ou = 5)
    }

    function mc(e, t) {
        do {
            var n = ml(e.alternate, e);
            if (null !== n) return n.flags &= 32767, void(bu = n);
            if (null !== (n = e.return) && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && null !== (e = e.sibling)) return void(bu = e);
            bu = e = n
        } while (null !== e);
        Ou = 6, bu = null
    }

    function bc(e, t, n, a, i, o, s, l, u) {
        e.cancelPendingCommit = null;
        do {
            kc()
        } while (0 !== Uu);
        if (6 & gu) throw Error(r(327));
        if (null !== t) {
            if (t === e.current) throw Error(r(177));
            if (o = t.lanes | t.childLanes, function(e, t, n, r, a, i) {
                    var o = e.pendingLanes;
                    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
                    var s = e.entanglements,
                        l = e.expirationTimes,
                        u = e.hiddenUpdates;
                    for (n = o & ~n; 0 < n;) {
                        var c = 31 - ke(n),
                            d = 1 << c;
                        s[c] = 0, l[c] = -1;
                        var f = u[c];
                        if (null !== f)
                            for (u[c] = null, c = 0; c < f.length; c++) {
                                var p = f[c];
                                null !== p && (p.lane &= -536870913)
                            }
                        n &= ~d
                    }
                    0 !== r && Me(e, r, 0), 0 !== i && 0 === a && 0 !== e.tag && (e.suspendedLanes |= i & ~(o & ~t))
                }(e, n, o |= Ar, s, l, u), e === mu && (bu = mu = null, yu = 0), Vu = t, ju = e, Hu = n, Bu = o, $u = i, Wu = a, 10256 & t.subtreeFlags || 10256 & t.flags ? (e.callbackNode = null, e.callbackPriority = 0, oe(he, function() {
                    return Ec(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), a = !!(13878 & t.flags), 13878 & t.subtreeFlags || a) {
                a = D.T, D.T = null, i = z.p, z.p = 2, s = gu, gu |= 4;
                try {
                    ! function(e, t) {
                        if (e = e.containerInfo, md = kf, or(e = ir(e))) {
                            if ("selectionStart" in e) var n = {
                                start: e.selectionStart,
                                end: e.selectionEnd
                            };
                            else e: {
                                var a = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                if (a && 0 !== a.rangeCount) {
                                    n = a.anchorNode;
                                    var i = a.anchorOffset,
                                        o = a.focusNode;
                                    a = a.focusOffset;
                                    try {
                                        n.nodeType, o.nodeType
                                    } catch (m) {
                                        n = null;
                                        break e
                                    }
                                    var s = 0,
                                        l = -1,
                                        u = -1,
                                        c = 0,
                                        d = 0,
                                        f = e,
                                        p = null;
                                    t: for (;;) {
                                        for (var h; f !== n || 0 !== i && 3 !== f.nodeType || (l = s + i), f !== o || 0 !== a && 3 !== f.nodeType || (u = s + a), 3 === f.nodeType && (s += f.nodeValue.length), null !== (h = f.firstChild);) p = f, f = h;
                                        for (;;) {
                                            if (f === e) break t;
                                            if (p === n && ++c === i && (l = s), p === o && ++d === a && (u = s), null !== (h = f.nextSibling)) break;
                                            p = (f = p).parentNode
                                        }
                                        f = h
                                    }
                                    n = -1 === l || -1 === u ? null : {
                                        start: l,
                                        end: u
                                    }
                                } else n = null
                            }
                            n = n || {
                                start: 0,
                                end: 0
                            }
                        } else n = null;
                        for (bd = {
                                focusedElem: e,
                                selectionRange: n
                            }, kf = !1, Ml = t; null !== Ml;)
                            if (e = (t = Ml).child, 1028 & t.subtreeFlags && null !== e) e.return = t, Ml = e;
                            else
                                for (; null !== Ml;) {
                                    switch (o = (t = Ml).alternate, e = t.flags, t.tag) {
                                        case 0:
                                            if (4 & e && null !== (e = null !== (e = t.updateQueue) ? e.events : null))
                                                for (n = 0; n < e.length; n++)(i = e[n]).ref.impl = i.nextImpl;
                                            break;
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 26:
                                        case 27:
                                        case 6:
                                        case 4:
                                        case 17:
                                            break;
                                        case 1:
                                            if (1024 & e && null !== o) {
                                                e = void 0, n = t, i = o.memoizedProps, o = o.memoizedState, a = n.stateNode;
                                                try {
                                                    var g = Os(n.type, i);
                                                    e = a.getSnapshotBeforeUpdate(g, o), a.__reactInternalSnapshotBeforeUpdate = e
                                                } catch (b) {
                                                    Oc(n, n.return, b)
                                                }
                                            }
                                            break;
                                        case 3:
                                            if (1024 & e)
                                                if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) Ad(e);
                                                else if (1 === n) switch (e.nodeName) {
                                                case "HEAD":
                                                case "HTML":
                                                case "BODY":
                                                    Ad(e);
                                                    break;
                                                default:
                                                    e.textContent = ""
                                            }
                                            break;
                                        default:
                                            if (1024 & e) throw Error(r(163))
                                    }
                                    if (null !== (e = t.sibling)) {
                                        e.return = t.return, Ml = e;
                                        break
                                    }
                                    Ml = t.return
                                }
                    }(e, t)
                } finally {
                    gu = s, z.p = i, D.T = a
                }
            }
            Uu = 1, yc(), vc(), wc()
        }
    }

    function yc() {
        if (1 === Uu) {
            Uu = 0;
            var e = ju,
                t = Vu,
                n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
                n = D.T, D.T = null;
                var r = z.p;
                z.p = 2;
                var a = gu;
                gu |= 4;
                try {
                    ql(t, e);
                    var i = bd,
                        o = ir(e.containerInfo),
                        s = i.focusedElem,
                        l = i.selectionRange;
                    if (o !== s && s && s.ownerDocument && ar(s.ownerDocument.documentElement, s)) {
                        if (null !== l && or(s)) {
                            var u = l.start,
                                c = l.end;
                            if (void 0 === c && (c = u), "selectionStart" in s) s.selectionStart = u, s.selectionEnd = Math.min(c, s.value.length);
                            else {
                                var d = s.ownerDocument || document,
                                    f = d && d.defaultView || window;
                                if (f.getSelection) {
                                    var p = f.getSelection(),
                                        h = s.textContent.length,
                                        g = Math.min(l.start, h),
                                        m = void 0 === l.end ? g : Math.min(l.end, h);
                                    !p.extend && g > m && (o = m, m = g, g = o);
                                    var b = rr(s, g),
                                        y = rr(s, m);
                                    if (b && y && (1 !== p.rangeCount || p.anchorNode !== b.node || p.anchorOffset !== b.offset || p.focusNode !== y.node || p.focusOffset !== y.offset)) {
                                        var v = d.createRange();
                                        v.setStart(b.node, b.offset), p.removeAllRanges(), g > m ? (p.addRange(v), p.extend(y.node, y.offset)) : (v.setEnd(y.node, y.offset), p.addRange(v))
                                    }
                                }
                            }
                        }
                        for (d = [], p = s; p = p.parentNode;) 1 === p.nodeType && d.push({
                            element: p,
                            left: p.scrollLeft,
                            top: p.scrollTop
                        });
                        for ("function" == typeof s.focus && s.focus(), s = 0; s < d.length; s++) {
                            var w = d[s];
                            w.element.scrollLeft = w.left, w.element.scrollTop = w.top
                        }
                    }
                    kf = !!md, bd = md = null
                } finally {
                    gu = a, z.p = r, D.T = n
                }
            }
            e.current = t, Uu = 2
        }
    }

    function vc() {
        if (2 === Uu) {
            Uu = 0;
            var e = ju,
                t = Vu,
                n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
                n = D.T, D.T = null;
                var r = z.p;
                z.p = 2;
                var a = gu;
                gu |= 4;
                try {
                    Dl(e, t.alternate, t)
                } finally {
                    gu = a, z.p = r, D.T = n
                }
            }
            Uu = 3
        }
    }

    function wc() {
        if (4 === Uu || 3 === Uu) {
            Uu = 0, ue();
            var e = ju,
                t = Vu,
                n = Hu,
                r = Wu;
            10256 & t.subtreeFlags || 10256 & t.flags ? Uu = 5 : (Uu = 0, Vu = ju = null, Sc(e, e.pendingLanes));
            var a = e.pendingLanes;
            if (0 === a && (Fu = null), Ue(n), t = t.stateNode, we && "function" == typeof we.onCommitFiberRoot) try {
                we.onCommitFiberRoot(ve, t, void 0, !(128 & ~t.current.flags))
            } catch (l) {}
            if (null !== r) {
                t = D.T, a = z.p, z.p = 2, D.T = null;
                try {
                    for (var i = e.onRecoverableError, o = 0; o < r.length; o++) {
                        var s = r[o];
                        i(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    D.T = t, z.p = a
                }
            }
            3 & Hu && kc(), zc(e), a = e.pendingLanes, 261930 & n && 42 & a ? e === qu ? Gu++ : (Gu = 0, qu = e) : Gu = 0, Fc(0)
        }
    }

    function Sc(e, t) {
        0 === (e.pooledCacheLanes &= t) && (null != (t = e.pooledCache) && (e.pooledCache = null, Ha(t)))
    }

    function kc() {
        return yc(), vc(), wc(), Ec()
    }

    function Ec() {
        if (5 !== Uu) return !1;
        var e = ju,
            t = Bu;
        Bu = 0;
        var n = Ue(Hu),
            a = D.T,
            i = z.p;
        try {
            z.p = 32 > n ? 32 : n, D.T = null, n = $u, $u = null;
            var o = ju,
                s = Hu;
            if (Uu = 0, Vu = ju = null, Hu = 0, 6 & gu) throw Error(r(331));
            var l = gu;
            if (gu |= 4, cu(o.current), nu(o, o.current, s, n), gu = l, Fc(0, !1), we && "function" == typeof we.onPostCommitFiberRoot) try {
                we.onPostCommitFiberRoot(ve, o)
            } catch (u) {}
            return !0
        } finally {
            z.p = i, D.T = a, Sc(e, t)
        }
    }

    function Cc(e, t, n) {
        t = Xr(n, t), null !== (e = Si(e, t = As(e.stateNode, t, 2), 2)) && (Re(e, 2), zc(e))
    }

    function Oc(e, t, n) {
        if (3 === e.tag) Cc(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    Cc(t, e, n);
                    break
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Fu || !Fu.has(r))) {
                        e = Xr(n, e), null !== (r = Si(t, n = Ls(2), 2)) && (Is(n, r, t, e), Re(r, 2), zc(r));
                        break
                    }
                }
                t = t.return
            }
    }

    function Tc(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
            r = e.pingCache = new hu;
            var a = new Set;
            r.set(t, a)
        } else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
        a.has(n) || (Eu = !0, a.add(n), e = xc.bind(null, e, t, n), t.then(e, e))
    }

    function xc(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, mu === e && (yu & n) === n && (4 === Ou || 3 === Ou && (62914560 & yu) === yu && 300 > ce() - Ru ? !(2 & gu) && rc(e, 0) : _u |= n, Pu === yu && (Pu = 0)), zc(e)
    }

    function _c(e, t) {
        0 === t && (t = Le()), null !== (e = Mr(e, t)) && (Re(e, t), zc(e))
    }

    function Nc(e) {
        var t = e.memoizedState,
            n = 0;
        null !== t && (n = t.retryLane), _c(e, n)
    }

    function Pc(e, t) {
        var n = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var a = e.stateNode,
                    i = e.memoizedState;
                null !== i && (n = i.retryLane);
                break;
            case 19:
                a = e.stateNode;
                break;
            case 22:
                a = e.stateNode._retryCache;
                break;
            default:
                throw Error(r(314))
        }
        null !== a && a.delete(t), _c(e, n)
    }
    var Ac = null,
        Lc = null,
        Ic = !1,
        Rc = !1,
        Mc = !1,
        Dc = 0;

    function zc(e) {
        e !== Lc && null === e.next && (null === Lc ? Ac = Lc = e : Lc = Lc.next = e), Rc = !0, Ic || (Ic = !0, Td(function() {
            6 & gu ? oe(fe, Uc) : jc()
        }))
    }

    function Fc(e, t) {
        if (!Mc && Rc) {
            Mc = !0;
            do {
                for (var n = !1, r = Ac; null !== r;) {
                    if (0 !== e) {
                        var a = r.pendingLanes;
                        if (0 === a) var i = 0;
                        else {
                            var o = r.suspendedLanes,
                                s = r.pingedLanes;
                            i = (1 << 31 - ke(42 | e) + 1) - 1, i = 201326741 & (i &= a & ~(o & ~s)) ? 201326741 & i | 1 : i ? 2 | i : 0
                        }
                        0 !== i && (n = !0, Bc(r, i))
                    } else i = yu, !(3 & (i = Ne(r, r === mu ? i : 0, null !== r.cancelPendingCommit || -1 !== r.timeoutHandle))) || Pe(r, i) || (n = !0, Bc(r, i));
                    r = r.next
                }
            } while (n);
            Mc = !1
        }
    }

    function Uc() {
        jc()
    }

    function jc() {
        Rc = Ic = !1;
        var e = 0;
        0 !== Dc && function() {
            var e = window.event;
            if (e && "popstate" === e.type) return e !== kd && (kd = e, !0);
            return kd = null, !1
        }() && (e = Dc);
        for (var t = ce(), n = null, r = Ac; null !== r;) {
            var a = r.next,
                i = Vc(r, t);
            0 === i ? (r.next = null, null === n ? Ac = a : n.next = a, null === a && (Lc = n)) : (n = r, (0 !== e || 3 & i) && (Rc = !0)), r = a
        }
        0 !== Uu && 5 !== Uu || Fc(e), 0 !== Dc && (Dc = 0)
    }

    function Vc(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = -62914561 & e.pendingLanes; 0 < i;) {
            var o = 31 - ke(i),
                s = 1 << o,
                l = a[o]; - 1 === l ? 0 !== (s & n) && 0 === (s & r) || (a[o] = Ae(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
        }
        if (n = yu, n = Ne(e, e === (t = mu) ? n : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle), r = e.callbackNode, 0 === n || e === t && (2 === vu || 9 === vu) || null !== e.cancelPendingCommit) return null !== r && null !== r && se(r), e.callbackNode = null, e.callbackPriority = 0;
        if (!(3 & n) || Pe(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch (null !== r && se(r), Ue(n)) {
                case 2:
                case 8:
                    n = pe;
                    break;
                case 32:
                default:
                    n = he;
                    break;
                case 268435456:
                    n = me
            }
            return r = Hc.bind(null, e), n = oe(n, r), e.callbackPriority = t, e.callbackNode = n, t
        }
        return null !== r && null !== r && se(r), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function Hc(e, t) {
        if (0 !== Uu && 5 !== Uu) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (kc() && e.callbackNode !== n) return null;
        var r = yu;
        return 0 === (r = Ne(e, e === mu ? r : 0, null !== e.cancelPendingCommit || -1 !== e.timeoutHandle)) ? null : (Ju(e, r, t), Vc(e, ce()), null != e.callbackNode && e.callbackNode === n ? Hc.bind(null, e) : null)
    }

    function Bc(e, t) {
        if (kc()) return null;
        Ju(e, t, !0)
    }

    function $c() {
        if (0 === Dc) {
            var e = Wa;
            0 === e && (e = Oe, !(261888 & (Oe <<= 1)) && (Oe = 256)), Dc = e
        }
        return Dc
    }

    function Wc(e) {
        return null == e || "symbol" == typeof e || "boolean" == typeof e ? null : "function" == typeof e ? e : It("" + e)
    }

    function Gc(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
    }
    for (var qc = 0; qc < Tr.length; qc++) {
        var Kc = Tr[qc];
        xr(Kc.toLowerCase(), "on" + (Kc[0].toUpperCase() + Kc.slice(1)))
    }
    xr(yr, "onAnimationEnd"), xr(vr, "onAnimationIteration"), xr(wr, "onAnimationStart"), xr("dblclick", "onDoubleClick"), xr("focusin", "onFocus"), xr("focusout", "onBlur"), xr(Sr, "onTransitionRun"), xr(kr, "onTransitionStart"), xr(Er, "onTransitionCancel"), xr(Cr, "onTransitionEnd"), ot("onMouseEnter", ["mouseout", "mouseover"]), ot("onMouseLeave", ["mouseout", "mouseover"]), ot("onPointerEnter", ["pointerout", "pointerover"]), ot("onPointerLeave", ["pointerout", "pointerover"]), it("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), it("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), it("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), it("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), it("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), it("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Qc = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        Xc = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qc));

    function Jc(e, t) {
        t = !!(4 & t);
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                a = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var s = r[o],
                            l = s.instance,
                            u = s.currentTarget;
                        if (s = s.listener, l !== i && a.isPropagationStopped()) break e;
                        i = s, a.currentTarget = u;
                        try {
                            i(a)
                        } catch (c) {
                            _r(c)
                        }
                        a.currentTarget = null, i = l
                    } else
                        for (o = 0; o < r.length; o++) {
                            if (l = (s = r[o]).instance, u = s.currentTarget, s = s.listener, l !== i && a.isPropagationStopped()) break e;
                            i = s, a.currentTarget = u;
                            try {
                                i(a)
                            } catch (c) {
                                _r(c)
                            }
                            a.currentTarget = null, i = l
                        }
            }
        }
    }

    function Yc(e, t) {
        var n = t[Ge];
        void 0 === n && (n = t[Ge] = new Set);
        var r = e + "__bubble";
        n.has(r) || (nd(t, e, 2, !1), n.add(r))
    }

    function Zc(e, t, n) {
        var r = 0;
        t && (r |= 4), nd(n, e, r, t)
    }
    var ed = "_reactListening" + Math.random().toString(36).slice(2);

    function td(e) {
        if (!e[ed]) {
            e[ed] = !0, rt.forEach(function(t) {
                "selectionchange" !== t && (Xc.has(t) || Zc(t, !1, e), Zc(t, !0, e))
            });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[ed] || (t[ed] = !0, Zc("selectionchange", !1, t))
        }
    }

    function nd(e, t, n, r) {
        switch (Nf(t)) {
            case 2:
                var a = Ef;
                break;
            case 8:
                a = Cf;
                break;
            default:
                a = Of
        }
        n = a.bind(null, t, n, e), a = void 0, !$t || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
            capture: !0,
            passive: a
        }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
            passive: a
        }) : e.addEventListener(t, n, !1)
    }

    function rd(e, t, n, r, a) {
        var o = r;
        if (!(1 & t || 2 & t || null === r)) e: for (;;) {
            if (null === r) return;
            var s = r.tag;
            if (3 === s || 4 === s) {
                var l = r.stateNode.containerInfo;
                if (l === a) break;
                if (4 === s)
                    for (s = r.return; null !== s;) {
                        var u = s.tag;
                        if ((3 === u || 4 === u) && s.stateNode.containerInfo === a) return;
                        s = s.return
                    }
                for (; null !== l;) {
                    if (null === (s = Ye(l))) return;
                    if (5 === (u = s.tag) || 6 === u || 26 === u || 27 === u) {
                        r = o = s;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
        Vt(function() {
            var r = o,
                a = Dt(n),
                s = [];
            e: {
                var l = Or.get(e);
                if (void 0 !== l) {
                    var u = an,
                        c = e;
                    switch (e) {
                        case "keypress":
                            if (0 === Xt(n)) break e;
                        case "keydown":
                        case "keyup":
                            u = wn;
                            break;
                        case "focusin":
                            c = "focus", u = dn;
                            break;
                        case "focusout":
                            c = "blur", u = dn;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            u = dn;
                            break;
                        case "click":
                            if (2 === n.button) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            u = un;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            u = cn;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            u = kn;
                            break;
                        case yr:
                        case vr:
                        case wr:
                            u = fn;
                            break;
                        case Cr:
                            u = En;
                            break;
                        case "scroll":
                        case "scrollend":
                            u = sn;
                            break;
                        case "wheel":
                            u = Cn;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            u = pn;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            u = Sn;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            u = On
                    }
                    var d = !!(4 & t),
                        f = !d && ("scroll" === e || "scrollend" === e),
                        p = d ? null !== l ? l + "Capture" : null : l;
                    d = [];
                    for (var h, g = r; null !== g;) {
                        var m = g;
                        if (h = m.stateNode, 5 !== (m = m.tag) && 26 !== m && 27 !== m || null === h || null === p || null != (m = Ht(g, p)) && d.push(ad(g, m, h)), f) break;
                        g = g.return
                    }
                    0 < d.length && (l = new u(l, c, null, n, a), s.push({
                        event: l,
                        listeners: d
                    }))
                }
            }
            if (!(7 & t)) {
                if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === Mt || !(c = n.relatedTarget || n.fromElement) || !Ye(c) && !c[We]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (c = (c = n.relatedTarget || n.toElement) ? Ye(c) : null) && (f = i(c), d = c.tag, c !== f || 5 !== d && 27 !== d && 6 !== d) && (c = null)) : (u = null, c = r), u !== c)) {
                    if (d = un, m = "onMouseLeave", p = "onMouseEnter", g = "mouse", "pointerout" !== e && "pointerover" !== e || (d = Sn, m = "onPointerLeave", p = "onPointerEnter", g = "pointer"), f = null == u ? l : et(u), h = null == c ? l : et(c), (l = new d(m, g + "leave", u, n, a)).target = f, l.relatedTarget = h, m = null, Ye(a) === r && ((d = new d(p, g + "enter", c, n, a)).target = h, d.relatedTarget = f, m = d), f = m, u && c) e: {
                        for (d = od, g = c, h = 0, m = p = u; m; m = d(m)) h++;m = 0;
                        for (var b = g; b; b = d(b)) m++;
                        for (; 0 < h - m;) p = d(p),
                        h--;
                        for (; 0 < m - h;) g = d(g),
                        m--;
                        for (; h--;) {
                            if (p === g || null !== g && p === g.alternate) {
                                d = p;
                                break e
                            }
                            p = d(p), g = d(g)
                        }
                        d = null
                    }
                    else d = null;
                    null !== u && sd(s, l, u, d, !1), null !== c && null !== f && sd(s, f, c, d, !0)
                }
                if ("select" === (u = (l = r ? et(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var y = Bn;
                else if (zn(l))
                    if ($n) y = Zn;
                    else {
                        y = Jn;
                        var v = Xn
                    }
                else !(u = l.nodeName) || "input" !== u.toLowerCase() || "checkbox" !== l.type && "radio" !== l.type ? r && Pt(r.elementType) && (y = Bn) : y = Yn;
                switch (y && (y = y(e, r)) ? Fn(s, y, n, a) : (v && v(e, l, r), "focusout" === e && r && "number" === l.type && null != r.memoizedProps.value && kt(l, "number", l.value)), v = r ? et(r) : window, e) {
                    case "focusin":
                        (zn(v) || "true" === v.contentEditable) && (lr = v, ur = r, cr = null);
                        break;
                    case "focusout":
                        cr = ur = lr = null;
                        break;
                    case "mousedown":
                        dr = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        dr = !1, fr(s, n, a);
                        break;
                    case "selectionchange":
                        if (sr) break;
                    case "keydown":
                    case "keyup":
                        fr(s, n, a)
                }
                var w;
                if (xn) e: {
                    switch (e) {
                        case "compositionstart":
                            var S = "onCompositionStart";
                            break e;
                        case "compositionend":
                            S = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            S = "onCompositionUpdate";
                            break e
                    }
                    S = void 0
                }
                else Mn ? In(e, n) && (S = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (S = "onCompositionStart");
                S && (Pn && "ko" !== n.locale && (Mn || "onCompositionStart" !== S ? "onCompositionEnd" === S && Mn && (w = Qt()) : (qt = "value" in (Gt = a) ? Gt.value : Gt.textContent, Mn = !0)), 0 < (v = id(r, S)).length && (S = new hn(S, e, null, n, a), s.push({
                        event: S,
                        listeners: v
                    }), w ? S.data = w : null !== (w = Rn(n)) && (S.data = w))), (w = Nn ? function(e, t) {
                        switch (e) {
                            case "compositionend":
                                return Rn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (Ln = !0, An);
                            case "textInput":
                                return (e = t.data) === An && Ln ? null : e;
                            default:
                                return null
                        }
                    }(e, n) : function(e, t) {
                        if (Mn) return "compositionend" === e || !xn && In(e, t) ? (e = Qt(), Kt = qt = Gt = null, Mn = !1, e) : null;
                        switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length) return t.char;
                                    if (t.which) return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Pn && "ko" !== t.locale ? null : t.data
                        }
                    }(e, n)) && (0 < (S = id(r, "onBeforeInput")).length && (v = new hn("onBeforeInput", "beforeinput", null, n, a), s.push({
                        event: v,
                        listeners: S
                    }), v.data = w)),
                    function(e, t, n, r, a) {
                        if ("submit" === t && n && n.stateNode === a) {
                            var i = Wc((a[$e] || null).action),
                                o = r.submitter;
                            o && null !== (t = (t = o[$e] || null) ? Wc(t.formAction) : o.getAttribute("formAction")) && (i = t, o = null);
                            var s = new an("action", "action", null, r, a);
                            e.push({
                                event: s,
                                listeners: [{
                                    instance: null,
                                    listener: function() {
                                        if (r.defaultPrevented) {
                                            if (0 !== Dc) {
                                                var e = o ? Gc(a, o) : new FormData(a);
                                                rs(n, {
                                                    pending: !0,
                                                    data: e,
                                                    method: a.method,
                                                    action: i
                                                }, null, e)
                                            }
                                        } else "function" == typeof i && (s.preventDefault(), e = o ? Gc(a, o) : new FormData(a), rs(n, {
                                            pending: !0,
                                            data: e,
                                            method: a.method,
                                            action: i
                                        }, i, e))
                                    },
                                    currentTarget: a
                                }]
                            })
                        }
                    }(s, e, r, n, a)
            }
            Jc(s, t)
        })
    }

    function ad(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function id(e, t) {
        for (var n = t + "Capture", r = []; null !== e;) {
            var a = e,
                i = a.stateNode;
            if (5 !== (a = a.tag) && 26 !== a && 27 !== a || null === i || (null != (a = Ht(e, n)) && r.unshift(ad(e, a, i)), null != (a = Ht(e, t)) && r.push(ad(e, a, i))), 3 === e.tag) return r;
            e = e.return
        }
        return []
    }

    function od(e) {
        if (null === e) return null;
        do {
            e = e.return
        } while (e && 5 !== e.tag && 27 !== e.tag);
        return e || null
    }

    function sd(e, t, n, r, a) {
        for (var i = t._reactName, o = []; null !== n && n !== r;) {
            var s = n,
                l = s.alternate,
                u = s.stateNode;
            if (s = s.tag, null !== l && l === r) break;
            5 !== s && 26 !== s && 27 !== s || null === u || (l = u, a ? null != (u = Ht(n, i)) && o.unshift(ad(n, u, l)) : a || null != (u = Ht(n, i)) && o.push(ad(n, u, l))), n = n.return
        }
        0 !== o.length && e.push({
            event: t,
            listeners: o
        })
    }
    var ld = /\r\n?/g,
        ud = /\u0000|\uFFFD/g;

    function cd(e) {
        return ("string" == typeof e ? e : "" + e).replace(ld, "\n").replace(ud, "")
    }

    function dd(e, t) {
        return t = cd(t), cd(e) === t
    }

    function fd(e, t, n, a, i, o) {
        switch (n) {
            case "children":
                "string" == typeof a ? "body" === t || "textarea" === t && "" === a || Tt(e, a) : ("number" == typeof a || "bigint" == typeof a) && "body" !== t && Tt(e, "" + a);
                break;
            case "className":
                dt(e, "class", a);
                break;
            case "tabIndex":
                dt(e, "tabindex", a);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                dt(e, n, a);
                break;
            case "style":
                Nt(e, a, o);
                break;
            case "data":
                if ("object" !== t) {
                    dt(e, "data", a);
                    break
                }
            case "src":
            case "href":
                if ("" === a && ("a" !== t || "href" !== n)) {
                    e.removeAttribute(n);
                    break
                }
                if (null == a || "function" == typeof a || "symbol" == typeof a || "boolean" == typeof a) {
                    e.removeAttribute(n);
                    break
                }
                a = It("" + a), e.setAttribute(n, a);
                break;
            case "action":
            case "formAction":
                if ("function" == typeof a) {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                }
                if ("function" == typeof o && ("formAction" === n ? ("input" !== t && fd(e, t, "name", i.name, i, null), fd(e, t, "formEncType", i.formEncType, i, null), fd(e, t, "formMethod", i.formMethod, i, null), fd(e, t, "formTarget", i.formTarget, i, null)) : (fd(e, t, "encType", i.encType, i, null), fd(e, t, "method", i.method, i, null), fd(e, t, "target", i.target, i, null))), null == a || "symbol" == typeof a || "boolean" == typeof a) {
                    e.removeAttribute(n);
                    break
                }
                a = It("" + a), e.setAttribute(n, a);
                break;
            case "onClick":
                null != a && (e.onclick = Rt);
                break;
            case "onScroll":
                null != a && Yc("scroll", e);
                break;
            case "onScrollEnd":
                null != a && Yc("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (null != a) {
                    if ("object" != typeof a || !("__html" in a)) throw Error(r(61));
                    if (null != (n = a.__html)) {
                        if (null != i.children) throw Error(r(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "multiple":
                e.multiple = a && "function" != typeof a && "symbol" != typeof a;
                break;
            case "muted":
                e.muted = a && "function" != typeof a && "symbol" != typeof a;
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
                break;
            case "xlinkHref":
                if (null == a || "function" == typeof a || "boolean" == typeof a || "symbol" == typeof a) {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = It("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                null != a && "function" != typeof a && "symbol" != typeof a ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                a && "function" != typeof a && "symbol" != typeof a ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                !0 === a ? e.setAttribute(n, "") : !1 !== a && null != a && "function" != typeof a && "symbol" != typeof a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                null != a && "function" != typeof a && "symbol" != typeof a && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                null == a || "function" == typeof a || "symbol" == typeof a || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
                break;
            case "popover":
                Yc("beforetoggle", e), Yc("toggle", e), ct(e, "popover", a);
                break;
            case "xlinkActuate":
                ft(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case "xlinkArcrole":
                ft(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case "xlinkRole":
                ft(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case "xlinkShow":
                ft(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case "xlinkTitle":
                ft(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case "xlinkType":
                ft(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case "xmlBase":
                ft(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case "xmlLang":
                ft(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case "xmlSpace":
                ft(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case "is":
                ct(e, "is", a);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && ct(e, n = At.get(n) || n, a)
        }
    }

    function pd(e, t, n, a, i, o) {
        switch (n) {
            case "style":
                Nt(e, a, o);
                break;
            case "dangerouslySetInnerHTML":
                if (null != a) {
                    if ("object" != typeof a || !("__html" in a)) throw Error(r(61));
                    if (null != (n = a.__html)) {
                        if (null != i.children) throw Error(r(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "children":
                "string" == typeof a ? Tt(e, a) : ("number" == typeof a || "bigint" == typeof a) && Tt(e, "" + a);
                break;
            case "onScroll":
                null != a && Yc("scroll", e);
                break;
            case "onScrollEnd":
                null != a && Yc("scrollend", e);
                break;
            case "onClick":
                null != a && (e.onclick = Rt);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
                break;
            default:
                at.hasOwnProperty(n) || ("o" !== n[0] || "n" !== n[1] || (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), "function" == typeof(o = null != (o = e[$e] || null) ? o[n] : null) && e.removeEventListener(t, o, i), "function" != typeof a) ? n in e ? e[n] = a : !0 === a ? e.setAttribute(n, "") : ct(e, n, a) : ("function" != typeof o && null !== o && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i)))
        }
    }

    function hd(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Yc("error", e), Yc("load", e);
                var a, i = !1,
                    o = !1;
                for (a in n)
                    if (n.hasOwnProperty(a)) {
                        var s = n[a];
                        if (null != s) switch (a) {
                            case "src":
                                i = !0;
                                break;
                            case "srcSet":
                                o = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, t));
                            default:
                                fd(e, t, a, s, n, null)
                        }
                    }
                return o && fd(e, t, "srcSet", n.srcSet, n, null), void(i && fd(e, t, "src", n.src, n, null));
            case "input":
                Yc("invalid", e);
                var l = a = s = o = null,
                    u = null,
                    c = null;
                for (i in n)
                    if (n.hasOwnProperty(i)) {
                        var d = n[i];
                        if (null != d) switch (i) {
                            case "name":
                                o = d;
                                break;
                            case "type":
                                s = d;
                                break;
                            case "checked":
                                u = d;
                                break;
                            case "defaultChecked":
                                c = d;
                                break;
                            case "value":
                                a = d;
                                break;
                            case "defaultValue":
                                l = d;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (null != d) throw Error(r(137, t));
                                break;
                            default:
                                fd(e, t, i, d, n, null)
                        }
                    }
                return void St(e, a, l, u, c, s, o, !1);
            case "select":
                for (o in Yc("invalid", e), i = s = a = null, n)
                    if (n.hasOwnProperty(o) && null != (l = n[o])) switch (o) {
                        case "value":
                            a = l;
                            break;
                        case "defaultValue":
                            s = l;
                            break;
                        case "multiple":
                            i = l;
                        default:
                            fd(e, t, o, l, n, null)
                    }
                return t = a, n = s, e.multiple = !!i, void(null != t ? Et(e, !!i, t, !1) : null != n && Et(e, !!i, n, !0));
            case "textarea":
                for (s in Yc("invalid", e), a = o = i = null, n)
                    if (n.hasOwnProperty(s) && null != (l = n[s])) switch (s) {
                        case "value":
                            i = l;
                            break;
                        case "defaultValue":
                            o = l;
                            break;
                        case "children":
                            a = l;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (null != l) throw Error(r(91));
                            break;
                        default:
                            fd(e, t, s, l, n, null)
                    }
                return void Ot(e, i, o, a);
            case "option":
                for (u in n)
                    if (n.hasOwnProperty(u) && null != (i = n[u]))
                        if ("selected" === u) e.selected = i && "function" != typeof i && "symbol" != typeof i;
                        else fd(e, t, u, i, n, null);
                return;
            case "dialog":
                Yc("beforetoggle", e), Yc("toggle", e), Yc("cancel", e), Yc("close", e);
                break;
            case "iframe":
            case "object":
                Yc("load", e);
                break;
            case "video":
            case "audio":
                for (i = 0; i < Qc.length; i++) Yc(Qc[i], e);
                break;
            case "image":
                Yc("error", e), Yc("load", e);
                break;
            case "details":
                Yc("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Yc("error", e), Yc("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (c in n)
                    if (n.hasOwnProperty(c) && null != (i = n[c])) switch (c) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(r(137, t));
                        default:
                            fd(e, t, c, i, n, null)
                    }
                return;
            default:
                if (Pt(t)) {
                    for (d in n) n.hasOwnProperty(d) && (void 0 !== (i = n[d]) && pd(e, t, d, i, n, void 0));
                    return
                }
        }
        for (l in n) n.hasOwnProperty(l) && (null != (i = n[l]) && fd(e, t, l, i, n, null))
    }

    function gd(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }
    var md = null,
        bd = null;

    function yd(e) {
        return 9 === e.nodeType ? e : e.ownerDocument
    }

    function vd(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function wd(e, t) {
        if (0 === e) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return 1 === e && "foreignObject" === t ? 0 : e
    }

    function Sd(e, t) {
        return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "bigint" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var kd = null;
    var Ed = "function" == typeof setTimeout ? setTimeout : void 0,
        Cd = "function" == typeof clearTimeout ? clearTimeout : void 0,
        Od = "function" == typeof Promise ? Promise : void 0,
        Td = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== Od ? function(e) {
            return Od.resolve(null).then(e).catch(xd)
        } : Ed;

    function xd(e) {
        setTimeout(function() {
            throw e
        })
    }

    function _d(e) {
        return "head" === e
    }

    function Nd(e, t) {
        var n = t,
            r = 0;
        do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data) || "/&" === n) {
                    if (0 === r) return e.removeChild(a), void qf(t);
                    r--
                } else if ("$" === n || "$?" === n || "$~" === n || "$!" === n || "&" === n) r++;
            else if ("html" === n) jd(e.ownerDocument.documentElement);
            else if ("head" === n) {
                jd(n = e.ownerDocument.head);
                for (var i = n.firstChild; i;) {
                    var o = i.nextSibling,
                        s = i.nodeName;
                    i[Xe] || "SCRIPT" === s || "STYLE" === s || "LINK" === s && "stylesheet" === i.rel.toLowerCase() || n.removeChild(i), i = o
                }
            } else "body" === n && jd(e.ownerDocument.body);
            n = a
        } while (n);
        qf(t)
    }

    function Pd(e, t) {
        var n = e;
        e = 0;
        do {
            var r = n.nextSibling;
            if (1 === n.nodeType ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", "" === n.getAttribute("style") && n.removeAttribute("style")) : 3 === n.nodeType && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && 8 === r.nodeType)
                if ("/$" === (n = r.data)) {
                    if (0 === e) break;
                    e--
                } else "$" !== n && "$?" !== n && "$~" !== n && "$!" !== n || e++;
            n = r
        } while (n)
    }

    function Ad(e) {
        var t = e.firstChild;
        for (t && 10 === t.nodeType && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Ad(n), Je(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if ("stylesheet" === n.rel.toLowerCase()) continue
            }
            e.removeChild(n)
        }
    }

    function Ld(e, t) {
        for (; 8 !== e.nodeType;) {
            if ((1 !== e.nodeType || "INPUT" !== e.nodeName || "hidden" !== e.type) && !t) return null;
            if (null === (e = Md(e.nextSibling))) return null
        }
        return e
    }

    function Id(e) {
        return "$?" === e.data || "$~" === e.data
    }

    function Rd(e) {
        return "$!" === e.data || "$?" === e.data && "loading" !== e.ownerDocument.readyState
    }

    function Md(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t || "$~" === t || "&" === t || "F!" === t || "F" === t) break;
                if ("/$" === t || "/&" === t) return null
            }
        }
        return e
    }
    var Dd = null;

    function zd(e) {
        e = e.nextSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n || "/&" === n) {
                    if (0 === t) return Md(e.nextSibling);
                    t--
                } else "$" !== n && "$!" !== n && "$?" !== n && "$~" !== n && "&" !== n || t++
            }
            e = e.nextSibling
        }
        return null
    }

    function Fd(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n || "$~" === n || "&" === n) {
                    if (0 === t) return e;
                    t--
                } else "/$" !== n && "/&" !== n || t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Ud(e, t, n) {
        switch (t = yd(n), e) {
            case "html":
                if (!(e = t.documentElement)) throw Error(r(452));
                return e;
            case "head":
                if (!(e = t.head)) throw Error(r(453));
                return e;
            case "body":
                if (!(e = t.body)) throw Error(r(454));
                return e;
            default:
                throw Error(r(451))
        }
    }

    function jd(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        Je(e)
    }
    var Vd = new Map,
        Hd = new Set;

    function Bd(e) {
        return "function" == typeof e.getRootNode ? e.getRootNode() : 9 === e.nodeType ? e : e.ownerDocument
    }
    var $d = z.d;
    z.d = {
        f: function() {
            var e = $d.f(),
                t = tc();
            return e || t
        },
        r: function(e) {
            var t = Ze(e);
            null !== t && 5 === t.tag && "form" === t.type ? is(t) : $d.r(e)
        },
        D: function(e) {
            $d.D(e), Gd("dns-prefetch", e, null)
        },
        C: function(e, t) {
            $d.C(e, t), Gd("preconnect", e, t)
        },
        L: function(e, t, n) {
            $d.L(e, t, n);
            var r = Wd;
            if (r && e && t) {
                var a = 'link[rel="preload"][as="' + vt(t) + '"]';
                "image" === t && n && n.imageSrcSet ? (a += '[imagesrcset="' + vt(n.imageSrcSet) + '"]', "string" == typeof n.imageSizes && (a += '[imagesizes="' + vt(n.imageSizes) + '"]')) : a += '[href="' + vt(e) + '"]';
                var i = a;
                switch (t) {
                    case "style":
                        i = Kd(e);
                        break;
                    case "script":
                        i = Jd(e)
                }
                Vd.has(i) || (e = c({
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t
                }, n), Vd.set(i, e), null !== r.querySelector(a) || "style" === t && r.querySelector(Qd(i)) || "script" === t && r.querySelector(Yd(i)) || (hd(t = r.createElement("link"), "link", e), nt(t), r.head.appendChild(t)))
            }
        },
        m: function(e, t) {
            $d.m(e, t);
            var n = Wd;
            if (n && e) {
                var r = t && "string" == typeof t.as ? t.as : "script",
                    a = 'link[rel="modulepreload"][as="' + vt(r) + '"][href="' + vt(e) + '"]',
                    i = a;
                switch (r) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        i = Jd(e)
                }
                if (!Vd.has(i) && (e = c({
                        rel: "modulepreload",
                        href: e
                    }, t), Vd.set(i, e), null === n.querySelector(a))) {
                    switch (r) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (n.querySelector(Yd(i))) return
                    }
                    hd(r = n.createElement("link"), "link", e), nt(r), n.head.appendChild(r)
                }
            }
        },
        X: function(e, t) {
            $d.X(e, t);
            var n = Wd;
            if (n && e) {
                var r = tt(n).hoistableScripts,
                    a = Jd(e),
                    i = r.get(a);
                i || ((i = n.querySelector(Yd(a))) || (e = c({
                    src: e,
                    async: !0
                }, t), (t = Vd.get(a)) && nf(e, t), nt(i = n.createElement("script")), hd(i, "link", e), n.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, r.set(a, i))
            }
        },
        S: function(e, t, n) {
            $d.S(e, t, n);
            var r = Wd;
            if (r && e) {
                var a = tt(r).hoistableStyles,
                    i = Kd(e);
                t = t || "default";
                var o = a.get(i);
                if (!o) {
                    var s = {
                        loading: 0,
                        preload: null
                    };
                    if (o = r.querySelector(Qd(i))) s.loading = 5;
                    else {
                        e = c({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, n), (n = Vd.get(i)) && tf(e, n);
                        var l = o = r.createElement("link");
                        nt(l), hd(l, "link", e), l._p = new Promise(function(e, t) {
                            l.onload = e, l.onerror = t
                        }), l.addEventListener("load", function() {
                            s.loading |= 1
                        }), l.addEventListener("error", function() {
                            s.loading |= 2
                        }), s.loading |= 4, ef(o, t, r)
                    }
                    o = {
                        type: "stylesheet",
                        instance: o,
                        count: 1,
                        state: s
                    }, a.set(i, o)
                }
            }
        },
        M: function(e, t) {
            $d.M(e, t);
            var n = Wd;
            if (n && e) {
                var r = tt(n).hoistableScripts,
                    a = Jd(e),
                    i = r.get(a);
                i || ((i = n.querySelector(Yd(a))) || (e = c({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = Vd.get(a)) && nf(e, t), nt(i = n.createElement("script")), hd(i, "link", e), n.head.appendChild(i)), i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                }, r.set(a, i))
            }
        }
    };
    var Wd = "undefined" == typeof document ? null : document;

    function Gd(e, t, n) {
        var r = Wd;
        if (r && "string" == typeof t && t) {
            var a = vt(t);
            a = 'link[rel="' + e + '"][href="' + a + '"]', "string" == typeof n && (a += '[crossorigin="' + n + '"]'), Hd.has(a) || (Hd.add(a), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, null === r.querySelector(a) && (hd(t = r.createElement("link"), "link", e), nt(t), r.head.appendChild(t)))
        }
    }

    function qd(e, t, n, a) {
        var i, o, s, l, u = (u = K.current) ? Bd(u) : null;
        if (!u) throw Error(r(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return "string" == typeof n.precedence && "string" == typeof n.href ? (t = Kd(n.href), (a = (n = tt(u).hoistableStyles).get(t)) || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if ("stylesheet" === n.rel && "string" == typeof n.href && "string" == typeof n.precedence) {
                    e = Kd(n.href);
                    var c = tt(u).hoistableStyles,
                        d = c.get(e);
                    if (d || (u = u.ownerDocument || u, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, c.set(e, d), (c = u.querySelector(Qd(e))) && !c._p && (d.instance = c, d.state.loading = 5), Vd.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Vd.set(e, n), c || (i = u, o = e, s = n, l = d.state, i.querySelector('link[rel="preload"][as="style"][' + o + "]") ? l.loading = 1 : (o = i.createElement("link"), l.preload = o, o.addEventListener("load", function() {
                            return l.loading |= 1
                        }), o.addEventListener("error", function() {
                            return l.loading |= 2
                        }), hd(o, "link", s), nt(o), i.head.appendChild(o))))), t && null === a) throw Error(r(528, ""));
                    return d
                }
                if (t && null !== a) throw Error(r(529, ""));
                return null;
            case "script":
                return t = n.async, "string" == typeof(n = n.src) && t && "function" != typeof t && "symbol" != typeof t ? (t = Jd(n), (a = (n = tt(u).hoistableScripts).get(t)) || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, a)), a) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(r(444, e))
        }
    }

    function Kd(e) {
        return 'href="' + vt(e) + '"'
    }

    function Qd(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Xd(e) {
        return c({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function Jd(e) {
        return '[src="' + vt(e) + '"]'
    }

    function Yd(e) {
        return "script[async]" + e
    }

    function Zd(e, t, n) {
        if (t.count++, null === t.instance) switch (t.type) {
            case "style":
                var a = e.querySelector('style[data-href~="' + vt(n.href) + '"]');
                if (a) return t.instance = a, nt(a), a;
                var i = c({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return nt(a = (e.ownerDocument || e).createElement("style")), hd(a, "style", i), ef(a, n.precedence, e), t.instance = a;
            case "stylesheet":
                i = Kd(n.href);
                var o = e.querySelector(Qd(i));
                if (o) return t.state.loading |= 4, t.instance = o, nt(o), o;
                a = Xd(n), (i = Vd.get(i)) && tf(a, i), nt(o = (e.ownerDocument || e).createElement("link"));
                var s = o;
                return s._p = new Promise(function(e, t) {
                    s.onload = e, s.onerror = t
                }), hd(o, "link", a), t.state.loading |= 4, ef(o, n.precedence, e), t.instance = o;
            case "script":
                return o = Jd(n.src), (i = e.querySelector(Yd(o))) ? (t.instance = i, nt(i), i) : (a = n, (i = Vd.get(o)) && nf(a = c({}, n), i), nt(i = (e = e.ownerDocument || e).createElement("script")), hd(i, "link", a), e.head.appendChild(i), t.instance = i);
            case "void":
                return null;
            default:
                throw Error(r(443, t.type))
        } else "stylesheet" === t.type && !(4 & t.state.loading) && (a = t.instance, t.state.loading |= 4, ef(a, n.precedence, e));
        return t.instance
    }

    function ef(e, t, n) {
        for (var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), a = r.length ? r[r.length - 1] : null, i = a, o = 0; o < r.length; o++) {
            var s = r[o];
            if (s.dataset.precedence === t) i = s;
            else if (i !== a) break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild)
    }

    function tf(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.title && (e.title = t.title)
    }

    function nf(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin), null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), null == e.integrity && (e.integrity = t.integrity)
    }
    var rf = null;

    function af(e, t, n) {
        if (null === rf) {
            var r = new Map,
                a = rf = new Map;
            a.set(n, r)
        } else(r = (a = rf).get(n)) || (r = new Map, a.set(n, r));
        if (r.has(e)) return r;
        for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
            var i = n[a];
            if (!(i[Xe] || i[Be] || "link" === e && "stylesheet" === i.getAttribute("rel")) && "http://www.w3.org/2000/svg" !== i.namespaceURI) {
                var o = i.getAttribute(t) || "";
                o = e + o;
                var s = r.get(o);
                s ? s.push(i) : r.set(o, [i])
            }
        }
        return r
    }

    function of (e, t, n) {
        (e = e.ownerDocument || e).head.insertBefore(n, "title" === t ? e.querySelector("head > title") : null)
    }

    function sf(e) {
        return !!("stylesheet" !== e.type || 3 & e.state.loading)
    }
    var lf = 0;

    function uf() {
        if (this.count--, 0 === this.count && (0 === this.imgCount || !this.waitingForImages))
            if (this.stylesheets) df(this, this.stylesheets);
            else if (this.unsuspend) {
            var e = this.unsuspend;
            this.unsuspend = null, e()
        }
    }
    var cf = null;

    function df(e, t) {
        e.stylesheets = null, null !== e.unsuspend && (e.count++, cf = new Map, t.forEach(ff, e), cf = null, uf.call(e))
    }

    function ff(e, t) {
        if (!(4 & t.state.loading)) {
            var n = cf.get(e);
            if (n) var r = n.get(null);
            else {
                n = new Map, cf.set(e, n);
                for (var a = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < a.length; i++) {
                    var o = a[i];
                    "LINK" !== o.nodeName && "not all" === o.getAttribute("media") || (n.set(o.dataset.precedence, o), r = o)
                }
                r && n.set(null, r)
            }
            o = (a = t.instance).getAttribute("data-precedence"), (i = n.get(o) || r) === r && n.set(null, a), n.set(o, a), this.count++, r = uf.bind(this), a.addEventListener("load", r), a.addEventListener("error", r), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild), t.state.loading |= 4
        }
    }
    var pf = {
        $$typeof: S,
        Provider: null,
        Consumer: null,
        _currentValue: F,
        _currentValue2: F,
        _threadCount: 0
    };

    function hf(e, t, n, r, a, i, o, s, l) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ie(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ie(0), this.hiddenUpdates = Ie(null), this.identifierPrefix = r, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = new Map
    }

    function gf(e, t, n, r, a, i, o, s, l, u, c, d) {
        return e = new hf(e, t, n, o, l, u, c, d, s), t = 1, !0 === i && (t |= 24), i = jr(3, null, null, t), e.current = i, i.stateNode = e, (t = Va()).refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: t
        }, yi(i), e
    }

    function mf(e) {
        return e ? e = Fr : Fr
    }

    function bf(e, t, n, r, a, i) {
        a = mf(a), null === r.context ? r.context = a : r.pendingContext = a, (r = wi(t)).payload = {
            element: n
        }, null !== (i = void 0 === i ? null : i) && (r.callback = i), null !== (n = Si(e, r, t)) && (Xu(n, 0, t), ki(n, e, t))
    }

    function yf(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t
        }
    }

    function vf(e, t) {
        yf(e, t), (e = e.alternate) && yf(e, t)
    }

    function wf(e) {
        if (13 === e.tag || 31 === e.tag) {
            var t = Mr(e, 67108864);
            null !== t && Xu(t, 0, 67108864), vf(e, 67108864)
        }
    }

    function Sf(e) {
        if (13 === e.tag || 31 === e.tag) {
            var t = Ku(),
                n = Mr(e, t = Fe(t));
            null !== n && Xu(n, 0, t), vf(e, t)
        }
    }
    var kf = !0;

    function Ef(e, t, n, r) {
        var a = D.T;
        D.T = null;
        var i = z.p;
        try {
            z.p = 2, Of(e, t, n, r)
        } finally {
            z.p = i, D.T = a
        }
    }

    function Cf(e, t, n, r) {
        var a = D.T;
        D.T = null;
        var i = z.p;
        try {
            z.p = 8, Of(e, t, n, r)
        } finally {
            z.p = i, D.T = a
        }
    }

    function Of(e, t, n, r) {
        if (kf) {
            var a = Tf(r);
            if (null === a) rd(e, t, r, xf, n), Ff(e, r);
            else if (function(e, t, n, r, a) {
                    switch (t) {
                        case "focusin":
                            return Af = Uf(Af, e, t, n, r, a), !0;
                        case "dragenter":
                            return Lf = Uf(Lf, e, t, n, r, a), !0;
                        case "mouseover":
                            return If = Uf(If, e, t, n, r, a), !0;
                        case "pointerover":
                            var i = a.pointerId;
                            return Rf.set(i, Uf(Rf.get(i) || null, e, t, n, r, a)), !0;
                        case "gotpointercapture":
                            return i = a.pointerId, Mf.set(i, Uf(Mf.get(i) || null, e, t, n, r, a)), !0
                    }
                    return !1
                }(a, e, t, n, r)) r.stopPropagation();
            else if (Ff(e, r), 4 & t && -1 < zf.indexOf(e)) {
                for (; null !== a;) {
                    var i = Ze(a);
                    if (null !== i) switch (i.tag) {
                        case 3:
                            if ((i = i.stateNode).current.memoizedState.isDehydrated) {
                                var o = _e(i.pendingLanes);
                                if (0 !== o) {
                                    var s = i;
                                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                                        var l = 1 << 31 - ke(o);
                                        s.entanglements[1] |= l, o &= ~l
                                    }
                                    zc(i), !(6 & gu) && (Du = ce() + 500, Fc(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            null !== (s = Mr(i, 2)) && Xu(s, 0, 2), tc(), vf(i, 2)
                    }
                    if (null === (i = Tf(r)) && rd(e, t, r, xf, n), i === a) break;
                    a = i
                }
                null !== a && r.stopPropagation()
            } else rd(e, t, r, null, n)
        }
    }

    function Tf(e) {
        return _f(e = Dt(e))
    }
    var xf = null;

    function _f(e) {
        if (xf = null, null !== (e = Ye(e))) {
            var t = i(e);
            if (null === t) e = null;
            else {
                var n = t.tag;
                if (13 === n) {
                    if (null !== (e = o(t))) return e;
                    e = null
                } else if (31 === n) {
                    if (null !== (e = s(t))) return e;
                    e = null
                } else if (3 === n) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return xf = e, null
    }

    function Nf(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (de()) {
                    case fe:
                        return 2;
                    case pe:
                        return 8;
                    case he:
                    case ge:
                        return 32;
                    case me:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Pf = !1,
        Af = null,
        Lf = null,
        If = null,
        Rf = new Map,
        Mf = new Map,
        Df = [],
        zf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Ff(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Af = null;
                break;
            case "dragenter":
            case "dragleave":
                Lf = null;
                break;
            case "mouseover":
            case "mouseout":
                If = null;
                break;
            case "pointerover":
            case "pointerout":
                Rf.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Mf.delete(t.pointerId)
        }
    }

    function Uf(e, t, n, r, a, i) {
        return null === e || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: i,
            targetContainers: [a]
        }, null !== t && (null !== (t = Ze(t)) && wf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
    }

    function jf(e) {
        var t = Ye(e.target);
        if (null !== t) {
            var n = i(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = o(n))) return e.blockedOn = t, void Ve(e.priority, function() {
                        Sf(n)
                    })
                } else if (31 === t) {
                if (null !== (t = s(n))) return e.blockedOn = t, void Ve(e.priority, function() {
                    Sf(n)
                })
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function Vf(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = Tf(e.nativeEvent);
            if (null !== n) return null !== (t = Ze(n)) && wf(t), e.blockedOn = n, !1;
            var r = new(n = e.nativeEvent).constructor(n.type, n);
            Mt = r, n.target.dispatchEvent(r), Mt = null, t.shift()
        }
        return !0
    }

    function Hf(e, t, n) {
        Vf(e) && n.delete(t)
    }

    function Bf() {
        Pf = !1, null !== Af && Vf(Af) && (Af = null), null !== Lf && Vf(Lf) && (Lf = null), null !== If && Vf(If) && (If = null), Rf.forEach(Hf), Mf.forEach(Hf)
    }

    function $f(t, n) {
        t.blockedOn === n && (t.blockedOn = null, Pf || (Pf = !0, e.unstable_scheduleCallback(e.unstable_NormalPriority, Bf)))
    }
    var Wf = null;

    function Gf(t) {
        Wf !== t && (Wf = t, e.unstable_scheduleCallback(e.unstable_NormalPriority, function() {
            Wf === t && (Wf = null);
            for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                    r = t[e + 1],
                    a = t[e + 2];
                if ("function" != typeof r) {
                    if (null === _f(r || n)) continue;
                    break
                }
                var i = Ze(n);
                null !== i && (t.splice(e, 3), e -= 3, rs(i, {
                    pending: !0,
                    data: a,
                    method: n.method,
                    action: r
                }, r, a))
            }
        }))
    }

    function qf(e) {
        function t(t) {
            return $f(t, e)
        }
        null !== Af && $f(Af, e), null !== Lf && $f(Lf, e), null !== If && $f(If, e), Rf.forEach(t), Mf.forEach(t);
        for (var n = 0; n < Df.length; n++) {
            var r = Df[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < Df.length && null === (n = Df[0]).blockedOn;) jf(n), null === n.blockedOn && Df.shift();
        if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
                var a = n[r],
                    i = n[r + 1],
                    o = a[$e] || null;
                if ("function" == typeof i) o || Gf(n);
                else if (o) {
                    var s = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (a = i, o = i[$e] || null) s = o.formAction;
                        else if (null !== _f(a)) continue
                    } else s = o.action;
                    "function" == typeof s ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Gf(n)
                }
            }
    }

    function Kf() {
        function e(e) {
            e.canIntercept && "react-transition" === e.info && e.intercept({
                handler: function() {
                    return new Promise(function(e) {
                        return a = e
                    })
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }

        function t() {
            null !== a && (a(), a = null), r || setTimeout(n, 20)
        }

        function n() {
            if (!r && !navigation.transition) {
                var e = navigation.currentEntry;
                e && null != e.url && navigation.navigate(e.url, {
                    state: e.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if ("object" == typeof navigation) {
            var r = !1,
                a = null;
            return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100),
                function() {
                    r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), null !== a && (a(), a = null)
                }
        }
    }

    function Qf(e) {
        this._internalRoot = e
    }

    function Xf(e) {
        this._internalRoot = e
    }
    Xf.prototype.render = Qf.prototype.render = function(e) {
        var t = this._internalRoot;
        if (null === t) throw Error(r(409));
        bf(t.current, Ku(), e, t, null, null)
    }, Xf.prototype.unmount = Qf.prototype.unmount = function() {
        var e = this._internalRoot;
        if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            bf(e.current, 2, null, e, null, null), tc(), t[We] = null
        }
    }, Xf.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = je();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Df.length && 0 !== t && t < Df[n].priority; n++);
            Df.splice(n, 0, e), 0 === n && jf(e)
        }
    };
    var Jf = t.version;
    if ("19.2.1" !== Jf) throw Error(r(527, Jf, "19.2.1"));
    z.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(r(188));
            throw e = Object.keys(e).join(","), Error(r(268, e))
        }
        return e = function(e) {
            var t = e.alternate;
            if (!t) {
                if (null === (t = i(e))) throw Error(r(188));
                return t !== e ? null : e
            }
            for (var n = e, a = t;;) {
                var o = n.return;
                if (null === o) break;
                var s = o.alternate;
                if (null === s) {
                    if (null !== (a = o.return)) {
                        n = a;
                        continue
                    }
                    break
                }
                if (o.child === s.child) {
                    for (s = o.child; s;) {
                        if (s === n) return l(o), e;
                        if (s === a) return l(o), t;
                        s = s.sibling
                    }
                    throw Error(r(188))
                }
                if (n.return !== a.return) n = o, a = s;
                else {
                    for (var u = !1, c = o.child; c;) {
                        if (c === n) {
                            u = !0, n = o, a = s;
                            break
                        }
                        if (c === a) {
                            u = !0, a = o, n = s;
                            break
                        }
                        c = c.sibling
                    }
                    if (!u) {
                        for (c = s.child; c;) {
                            if (c === n) {
                                u = !0, n = s, a = o;
                                break
                            }
                            if (c === a) {
                                u = !0, a = s, n = o;
                                break
                            }
                            c = c.sibling
                        }
                        if (!u) throw Error(r(189))
                    }
                }
                if (n.alternate !== a) throw Error(r(190))
            }
            if (3 !== n.tag) throw Error(r(188));
            return n.stateNode.current === n ? e : t
        }(t), e = null === (e = null !== e ? u(e) : null) ? null : e.stateNode
    };
    var Yf = {
        bundleType: 0,
        version: "19.2.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: D,
        reconcilerVersion: "19.2.1"
    };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var Zf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Zf.isDisabled && Zf.supportsFiber) try {
            ve = Zf.inject(Yf), we = Zf
        } catch (tp) {}
    }
    return d.createRoot = function(e, t) {
        if (!a(e)) throw Error(r(299));
        var n = !1,
            i = "",
            o = Ts,
            s = xs,
            l = _s;
        return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (i = t.identifierPrefix), void 0 !== t.onUncaughtError && (o = t.onUncaughtError), void 0 !== t.onCaughtError && (s = t.onCaughtError), void 0 !== t.onRecoverableError && (l = t.onRecoverableError)), t = gf(e, 1, !1, null, 0, n, i, null, o, s, l, Kf), e[We] = t.current, td(e), new Qf(t)
    }, d.hydrateRoot = function(e, t, n) {
        if (!a(e)) throw Error(r(299));
        var i = !1,
            o = "",
            s = Ts,
            l = xs,
            u = _s,
            c = null;
        return null != n && (!0 === n.unstable_strictMode && (i = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onUncaughtError && (s = n.onUncaughtError), void 0 !== n.onCaughtError && (l = n.onCaughtError), void 0 !== n.onRecoverableError && (u = n.onRecoverableError), void 0 !== n.formState && (c = n.formState)), (t = gf(e, 1, !0, t, 0, i, o, c, s, l, u, Kf)).context = mf(null), n = t.current, (o = wi(i = Fe(i = Ku()))).callback = null, Si(n, o, i), n = i, t.current.lanes = n, Re(t, n), zc(t), e[We] = t.current, td(e), new Xf(t)
    }, d.version = "19.2.1", d
}
const P = n((C || (C = 1, function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (t) {}
    }(), c.exports = N()), c.exports)),
    A = {},
    L = function(e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
            let e = function(e) {
                return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                    status: "fulfilled",
                    value: e
                }), e => ({
                    status: "rejected",
                    reason: e
                }))))
            };
            document.getElementsByTagName("link");
            const n = document.querySelector("meta[property=csp-nonce]"),
                a = n ? .nonce || n ? .getAttribute("nonce");
            r = e(t.map(e => {
                if ((e = function(e) {
                        return "https://adsagentclientafd-b7hqhjdrf3fpeqh2.b01.azurefd.net/" + e
                    }(e)) in A) return;
                A[e] = !0;
                const t = e.endsWith(".css"),
                    n = t ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${e}"]${n}`)) return;
                const r = document.createElement("link");
                return r.rel = t ? "stylesheet" : "modulepreload", t || (r.as = "script"), r.crossOrigin = "", r.href = e, a && r.setAttribute("nonce", a), document.head.appendChild(r), t ? new Promise((t, n) => {
                    r.addEventListener("load", t), r.addEventListener("error", () => n(new Error(`Unable to preload CSS for ${e}`)))
                }) : void 0
            }))
        }

        function a(e) {
            const t = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e
        }
        return r.then(t => {
            for (const e of t || []) "rejected" === e.status && a(e.reason);
            return e().catch(a)
        })
    },
    I = {};

function R(e, t) {
    return e.unstable_is ? e.unstable_is(t) : t === e
}

function M(e) {
    return "init" in e
}

function D(e) {
    return !!e.write
}

function z(e) {
    return "v" in e || "e" in e
}

function F(e) {
    if ("e" in e) throw e.e;
    if ("production" !== (I ? "production" : void 0) && !("v" in e)) throw new Error("[Bug] atom state is not initialized");
    return e.v
}
const U = new WeakMap;

function j(e) {
    var t;
    return H(e) && !!(null == (t = U.get(e)) ? void 0 : t[0])
}

function V(e, t) {
    let n = U.get(e);
    if (!n) {
        n = [!0, new Set], U.set(e, n);
        const t = () => {
            n[0] = !1
        };
        e.then(t, t)
    }
    n[1].add(t)
}

function H(e) {
    return "function" == typeof(null == e ? void 0 : e.then)
}

function B(e, t, n) {
    if (!n.p.has(e)) {
        n.p.add(e);
        const r = () => n.p.delete(e);
        t.then(r, r)
    }
}

function $(e, t, n) {
    var r;
    const a = new Set;
    for (const i of (null == (r = n.get(e)) ? void 0 : r.t) || []) n.has(i) && a.add(i);
    for (const i of t.p) a.add(i);
    return a
}
const W = (e, t, ...n) => t.read(...n),
    G = (e, t, ...n) => t.write(...n),
    q = (e, t) => {
        var n;
        return null == (n = t.unstable_onInit) ? void 0 : n.call(t, e)
    },
    K = (e, t, n) => {
        var r;
        return null == (r = t.onMount) ? void 0 : r.call(t, n)
    },
    Q = (e, t) => {
        const n = ue(e),
            r = n[0],
            a = n[9];
        if ("production" !== (I ? "production" : void 0) && !t) throw new Error("Atom is undefined or null");
        let i = r.get(t);
        return i || (i = {
            d: new Map,
            p: new Set,
            n: 0
        }, r.set(t, i), null == a || a(e, t)), i
    },
    X = e => {
        const t = ue(e),
            n = t[1],
            r = t[3],
            a = t[4],
            i = t[5],
            o = t[6],
            s = t[13],
            l = [],
            u = e => {
                try {
                    e()
                } catch (t) {
                    l.push(t)
                }
            };
        do {
            o.f && u(o.f);
            const t = new Set,
                l = t.add.bind(t);
            r.forEach(e => {
                var t;
                return null == (t = n.get(e)) ? void 0 : t.l.forEach(l)
            }), r.clear(), i.forEach(l), i.clear(), a.forEach(l), a.clear(), t.forEach(u), r.size && s(e)
        } while (r.size || i.size || a.size);
        if (l.length) throw new AggregateError(l)
    },
    J = e => {
        const t = ue(e),
            n = t[1],
            r = t[2],
            a = t[3],
            i = t[11],
            o = t[14],
            s = t[17],
            l = [],
            u = new WeakSet,
            c = new WeakSet,
            d = Array.from(a);
        for (; d.length;) {
            const t = d[d.length - 1],
                a = i(e, t);
            if (c.has(t)) d.pop();
            else if (u.has(t)) {
                if (r.get(t) === a.n) l.push([t, a]);
                else if ("production" !== (I ? "production" : void 0) && r.has(t)) throw new Error("[Bug] invalidated atom exists");
                c.add(t), d.pop()
            } else {
                u.add(t);
                for (const e of $(t, a, n)) u.has(e) || d.push(e)
            }
        }
        for (let f = l.length - 1; f >= 0; --f) {
            const [t, n] = l[f];
            let i = !1;
            for (const e of n.d.keys())
                if (e !== t && a.has(e)) {
                    i = !0;
                    break
                }
            i && (o(e, t), s(e, t)), r.delete(t)
        }
    },
    Y = (e, t) => {
        var n;
        const r = ue(e),
            a = r[1],
            i = r[2],
            o = r[3],
            s = r[6],
            l = r[7],
            u = r[11],
            c = r[12],
            d = r[13],
            f = r[14],
            p = r[16],
            h = r[17],
            g = u(e, t);
        if (z(g)) {
            if (a.has(t) && i.get(t) !== g.n) return g;
            if (Array.from(g.d).every(([t, n]) => f(e, t).n === n)) return g
        }
        g.d.clear();
        let m, b, y = !0;

        function v() {
            a.has(t) && (h(e, t), d(e), c(e))
        }
        const w = {
                get signal() {
                    return m || (m = new AbortController), m.signal
                },
                get setSelf() {
                    return "production" !== (I ? "production" : void 0) && D(t), !b && D(t) && (b = (...n) => {
                        if (!y) try {
                            return p(e, t, ...n)
                        } finally {
                            d(e), c(e)
                        }
                    }), b
                }
            },
            S = g.n;
        try {
            const n = l(e, t, function(n) {
                var r;
                if (R(t, n)) {
                    const t = u(e, n);
                    if (!z(t)) {
                        if (!M(n)) throw new Error("no atom init");
                        ae(e, n, n.init)
                    }
                    return F(t)
                }
                const i = f(e, n);
                try {
                    return F(i)
                } finally {
                    g.d.set(n, i.n), j(g.v) && B(t, g.v, i), null == (r = a.get(n)) || r.t.add(t), y || v()
                }
            }, w);
            return ae(e, t, n), H(n) && (V(n, () => null == m ? void 0 : m.abort()), n.then(v, v)), g
        } catch (k) {
            return delete g.v, g.e = k, ++g.n, g
        } finally {
            y = !1, S !== g.n && i.get(t) === S && (i.set(t, g.n), o.add(t), null == (n = s.c) || n.call(s, t))
        }
    },
    Z = (e, t) => {
        const n = ue(e),
            r = n[1],
            a = n[2],
            i = n[11],
            o = [t];
        for (; o.length;) {
            const t = o.pop(),
                n = i(e, t);
            for (const s of $(t, n, r)) {
                const t = i(e, s);
                a.set(s, t.n), o.push(s)
            }
        }
    },
    ee = (e, t, ...n) => {
        const r = ue(e),
            a = r[3],
            i = r[6],
            o = r[8],
            s = r[11],
            l = r[12],
            u = r[13],
            c = r[14],
            d = r[15],
            f = r[17];
        let p = !0;
        const h = t => F(c(e, t)),
            g = (n, ...r) => {
                var o;
                const c = s(e, n);
                try {
                    if (R(t, n)) {
                        if (!M(n)) throw new Error("atom not writable");
                        const t = c.n,
                            s = r[0];
                        return ae(e, n, s), f(e, n), void(t !== c.n && (a.add(n), null == (o = i.c) || o.call(i, n), d(e, n)))
                    }
                    return ee(e, n, ...r)
                } finally {
                    p || (u(e), l(e))
                }
            };
        try {
            return o(e, t, h, g, ...n)
        } finally {
            p = !1
        }
    },
    te = (e, t) => {
        var n;
        const r = ue(e),
            a = r[1],
            i = r[3],
            o = r[6],
            s = r[11],
            l = r[15],
            u = r[18],
            c = r[19],
            d = s(e, t),
            f = a.get(t);
        if (f && !j(d.v)) {
            for (const [r, a] of d.d)
                if (!f.d.has(r)) {
                    const c = s(e, r);
                    u(e, r).t.add(t), f.d.add(r), a !== c.n && (i.add(r), null == (n = o.c) || n.call(o, r), l(e, r))
                }
            for (const n of f.d || [])
                if (!d.d.has(n)) {
                    f.d.delete(n);
                    const r = c(e, n);
                    null == r || r.t.delete(t)
                }
        }
    },
    ne = (e, t) => {
        var n;
        const r = ue(e),
            a = r[1],
            i = r[4],
            o = r[6],
            s = r[10],
            l = r[11],
            u = r[12],
            c = r[13],
            d = r[14],
            f = r[16],
            p = l(e, t);
        let h = a.get(t);
        if (!h) {
            d(e, t);
            for (const n of p.d.keys()) {
                ne(e, n).t.add(t)
            }
            if (h = {
                    l: new Set,
                    d: new Set(p.d.keys()),
                    t: new Set
                }, a.set(t, h), null == (n = o.m) || n.call(o, t), D(t)) {
                const n = () => {
                    let n = !0;
                    const r = (...r) => {
                        try {
                            return f(e, t, ...r)
                        } finally {
                            n || (c(e), u(e))
                        }
                    };
                    try {
                        const a = s(e, t, r);
                        a && (h.u = () => {
                            n = !0;
                            try {
                                a()
                            } finally {
                                n = !1
                            }
                        })
                    } finally {
                        n = !1
                    }
                };
                i.add(n)
            }
        }
        return h
    },
    re = (e, t) => {
        var n;
        const r = ue(e),
            a = r[1],
            i = r[5],
            o = r[6],
            s = r[11],
            l = r[19],
            u = s(e, t);
        let c = a.get(t);
        if (!c || c.l.size || Array.from(c.t).some(e => {
                var n;
                return null == (n = a.get(e)) ? void 0 : n.d.has(t)
            })) return c;
        c.u && i.add(c.u), c = void 0, a.delete(t), null == (n = o.u) || n.call(o, t);
        for (const d of u.d.keys()) {
            const n = l(e, d);
            null == n || n.t.delete(t)
        }
    },
    ae = (e, t, n) => {
        const r = ue(e)[11],
            a = r(e, t),
            i = "v" in a,
            o = a.v;
        if (H(n))
            for (const s of a.d.keys()) B(t, n, r(e, s));
        a.v = n, delete a.e, i && Object.is(o, a.v) || (++a.n, H(o) && function(e) {
            const t = U.get(e);
            (null == t ? void 0 : t[0]) && (t[0] = !1, t[1].forEach(e => e()))
        }(o))
    },
    ie = (e, t) => F((0, ue(e)[14])(e, t)),
    oe = (e, t, ...n) => {
        const r = ue(e),
            a = r[12],
            i = r[13],
            o = r[16];
        try {
            return o(e, t, ...n)
        } finally {
            i(e), a(e)
        }
    },
    se = (e, t, n) => {
        const r = ue(e),
            a = r[12],
            i = r[18],
            o = r[19],
            s = i(e, t).l;
        return s.add(n), a(e), () => {
            s.delete(n), o(e, t), a(e)
        }
    },
    le = new WeakMap;

function ue(e) {
    const t = le.get(e);
    if ("production" !== (I ? "production" : void 0) && !t) throw new Error("Store must be created by buildStore to read its building blocks");
    return t
}
const ce = {};
let de, fe = 0;

function pe(e, t) {
    const n = "atom" + ++fe,
        r = {
            toString() {
                return "production" !== (ce ? "production" : void 0) && this.debugLabel ? n + ":" + this.debugLabel : n
            }
        };
    return "function" == typeof e ? r.read = e : (r.init = e, r.read = he, r.write = ge), r
}

function he(e) {
    return e(this)
}

function ge(e, t, n) {
    return t(this, "function" == typeof n ? n(e(this)) : n)
}

function me() {
    return function(...e) {
        const t = {
                get: e => (0, ue(t)[21])(t, e),
                set: (e, ...n) => (0, ue(t)[22])(t, e, ...n),
                sub: (e, n) => (0, ue(t)[23])(t, e, n)
            },
            n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, W, G, q, K, Q, X, J, Y, Z, ee, te, ne, re, ae, ie, oe, se].map((t, n) => e[n] || t);
        return le.set(t, Object.freeze(n)), t
    }()
}
var be = w();
const ye = n(be),
    ve = e({
        __proto__: null,
        default: ye
    }, [be]),
    we = {},
    Se = be.createContext(void 0);

function ke(e) {
    return be.useContext(Se) || (de || (de = me(), "production" !== (ce ? "production" : void 0) && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = de), globalThis.__JOTAI_DEFAULT_STORE__)), de)
}
const Ee = e => "function" == typeof(null == e ? void 0 : e.then),
    Ce = e => {
        e.status || (e.status = "pending", e.then(t => {
            e.status = "fulfilled", e.value = t
        }, t => {
            e.status = "rejected", e.reason = t
        }))
    },
    Oe = ye.use || (e => {
        if ("pending" === e.status) throw e;
        if ("fulfilled" === e.status) return e.value;
        throw "rejected" === e.status ? e.reason : (Ce(e), e)
    }),
    Te = new WeakMap,
    xe = (e, t) => {
        let n = Te.get(e);
        return n || (n = new Promise((r, a) => {
            let i = e;
            const o = e => t => {
                    i === e && r(t)
                },
                s = e => t => {
                    i === e && a(t)
                },
                l = () => {
                    try {
                        const e = t();
                        Ee(e) ? (Te.set(e, n), i = e, e.then(o(e), s(e)), V(e, l)) : r(e)
                    } catch (e) {
                        a(e)
                    }
                };
            e.then(o(e), s(e)), V(e, l)
        }), Te.set(e, n)), n
    };

function _e(e, t) {
    const {
        delay: n,
        unstable_promiseStatus: r = !ye.use
    } = {}, a = ke(), [
        [i, o, s], l
    ] = be.useReducer(t => {
        const n = a.get(e);
        return Object.is(t[0], n) && t[1] === a && t[2] === e ? t : [n, a, e]
    }, void 0, () => [a.get(e), a, e]);
    let u = i;
    if (o === a && s === e || (l(), u = a.get(e)), be.useEffect(() => {
            const t = a.sub(e, () => {
                if (r) try {
                    const t = a.get(e);
                    Ee(t) && Ce(xe(t, () => a.get(e)))
                } catch (t) {}
                "number" != typeof n ? l() : setTimeout(l, n)
            });
            return l(), t
        }, [a, e, n, r]), be.useDebugValue(u), Ee(u)) {
        const t = xe(u, () => a.get(e));
        return r && Ce(t), Oe(t)
    }
    return u
}

function Ne(e, t) {
    const n = ke();
    return be.useCallback((...t) => {
        if ("production" !== (we ? "production" : void 0) && !("write" in e)) throw new Error("not writable atom");
        return n.set(e, ...t)
    }, [n, e])
}

function Pe(e, t) {
    return [_e(e), Ne(e)]
}
const Ae = be.createContext(void 0);

function Le() {
    return function() {
        const e = be.useContext(Ae);
        if (void 0 === e) throw new Error("useColorScheme must be used within a ColorSchemeProvider");
        return e
    }().colorScheme
}

function Ie({
    children: e
}) {
    const [t, n] = be.useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    be.useEffect(() => {
        const e = window.matchMedia("(prefers-color-scheme: dark)");
        n(e.matches ? "dark" : "light");
        const t = e => {
            n(e.matches ? "dark" : "light")
        };
        return e.addEventListener("change", t), () => {
            e.removeEventListener("change", t)
        }
    }, []);
    const r = {
        colorScheme: t,
        toggleColorScheme: () => {
            n(e => "light" === e ? "dark" : "light")
        }
    };
    return u.jsx(Ae.Provider, {
        value: r,
        children: e
    })
}
var Re = (e => (e.AdsAIAgentClient = "AdsAIAgentClient", e))(Re || {}),
    Me = (e => (e.Error = "Error", e.ChatClick = "ChatClick", e.UIEvent = "UIEvent", e.Performance = "Performance", e.Debug = "Debug", e.SSE = "SSE", e))(Me || {}),
    De = (e => (e.Product = "Product", e.AddToCart = "AddToCart", e.BuyNow = "BuyNow", e.BackButton = "BackButton", e.Stop = "Stop", e.Specification = "Specification", e.Feedback = "Feedback", e.PdpRedirect = "PdpRedirect", e.Suggestions = "Suggestions", e.SelectableChipSubmit = "SelectableChipSubmit", e.CollectionSuggestions = "CollectionSuggestions", e.ViewCart = "ViewCart", e.CollectionRedirect = "CollectionRedirect", e.AllReviewsRedirect = "AllReviewsRedirect", e.ReviewCard = "ReviewCard", e.ReviewImage = "ReviewImage", e.ReviewExpand = "ReviewExpand", e.ImageCarouselBack = "ImageCarouselBack", e.Checkout = "Checkout", e.PanelToggle = "PanelToggle", e.OrderFormSubmit = "OrderFormSubmit", e))(De || {}),
    ze = (e => (e.BubbleShown = "BubbleShown", e.NudgeShown = "NudgeShown", e.AgentMessage = "AgentMessage", e.EntrypointNudgeClick = "EntrypointNudgeClick", e.EntrypointClick = "EntrypointClick", e.ClarityNudgeShown = "ClarityNudgeShown", e.ClarityNudgeClick = "ClarityNudgeClick", e.ChatLayoutShown = "ChatLayoutShown", e.ConsentUpdate = "ConsentUpdate", e.CheckoutRedirect = "CheckoutRedirect", e.CartRedirect = "CartRedirect", e.EventSourceRetry = "EventSourceRetry", e.StartedNewSession = "StartedNewSession", e.ChatLayoutReceived = "ChatLayoutReceived", e.EntrypointNudgeToCheckoutRedirect = "EntrypointNudgeToCheckoutRedirect", e.TutorialStepShown = "TutorialStepShown", e.UserMessage = "UserMessage", e.ChatOpenedWithParam = "ChatOpenedWithParam", e.InvalidUrl = "InvalidUrl", e.EntrypointDismiss = "EntrypointDismiss", e))(ze || {}),
    Fe = (e => (e.TimeToShowBubble = "TimeToShowBubble", e.TimeToFetchManifest = "TimeToFetchManifest", e.TimeToFetchAndLoadIndex = "TimeToFetchAndLoadIndex", e.TimeToFirstTokenRender = "TimeToFirstTokenRender", e.TimeToGenUIExecuting = "TimeToGenUIExecuting", e.TimeToGenUICompleted = "TimeToGenUICompleted", e.TimeToLastTokenRender = "TimeToLastTokenRender", e.TimeToFirstByte = "TimeToFirstByte", e.APIPerformance = "APIPerformance", e))(Fe || {}),
    Ue = (e => (e.ClientInit = "ClientInit", e.ElementClickLog = "ElementClickLog", e.ErrorLogging = "ErrorLogging", e.ClaritySignalReceived = "ClaritySignalReceived", e.ClaritySignalDecoded = "ClaritySignalDecoded", e.ClarityInitializationFailed = "ClarityInitializationFailed", e.ClarityMetadataNoData = "ClarityMetadataNoData", e.ClarityMetadataTimedOut = "ClarityMetadataTimedOut", e.ShopifyConsentTrackingError = "ShopifyConsentTrackingError", e.ShopifyCartUpdateLog = "ShopifyCartUpdateLog", e.MagentoCartUpdateLog = "MagentoCartUpdateLog", e.WooCommerceCartUpdateLog = "WooCommerceCartUpdateLog", e.CartHydrationTriggered = "CartHydrationTriggered", e.CartHydrationSuccess = "CartHydrationSuccess", e.CartHydrationFailed = "CartHydrationFailed", e.CartHydrationSkipped = "CartHydrationSkipped", e.CartFetchResult = "CartFetchResult", e.SessionDataSent = "SessionDataSent", e))(Ue || {}),
    je = (e => (e.TotalCrash = "TotalCrash", e.ServerError = "ServerError", e.SessionExpired = "SessionExpired", e.SessionDataError = "SessionDataError", e.AddToCartButton = "AddToCartButton", e.ResponseLatencyHigh = "ResponseLatencyHigh", e.ImageFailedToLoad = "ImageFailedToLoad", e.ClaritySignalDecodeError = "ClaritySignalDecodeError", e.ShopifyUpdateCartError = "ShopifyUpdateCartError", e.MagentoUpdateCartError = "MagentoUpdateCartError", e.WooCommerceUpdateCartError = "WooCommerceUpdateCartError", e.ComponentError = "ComponentError", e.ClientConfigFetchError = "ClientConfigFetchError", e.ClientInformationFetchError = "ClientInformationFetchError", e.EventSourceError = "EventSourceError", e))(je || {});
const Ve = !1,
    He = "https://adsagentserverprod-ekd5fygyhpbvh9bd.b01.azurefd.net",
    Be = "https://adsagentclientafd-b7hqhjdrf3fpeqh2.b01.azurefd.net",
    $e = !1,
    We = (() => {
        if ("/preview" !== window.location.pathname.replace(/\/+$/, "")) return !1;
        const e = new URLSearchParams(window.location.search),
            t = e.get("adid"),
            n = e.get("domain"),
            r = e.get("jwt");
        return n && "" !== n.trim() ? e.get("setflight") ? .includes("mcpflow") ? ? !1 : !!r && "" !== r.trim() && e.get("setflight") ? .includes("mcpflow") && !!t && "" !== t.trim()
    })(),
    Ge = (() => {
        if (We) {
            const e = new URLSearchParams(window.location.search),
                t = e.get("adid");
            if (t && "" !== t.trim()) return e.get("setflight") ? .includes("mcpflow") ? ? !1
        }
        return !1
    })(),
    qe = "ads-agent-host",
    Ke = "ads",
    Qe = "chs",
    Xe = "ss",
    Je = "mls",
    Ye = "ccs",
    Ze = "lcit",
    et = "cvid",
    tt = "lcft",
    nt = "vp",
    rt = "nss",
    at = "ilk",
    it = "tcus",
    ot = "wms",
    st = "ofl",
    lt = "ladft",
    ut = "pmc",
    ct = 4096,
    dt = 6,
    ft = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    },
    pt = 33e3,
    ht = "brandagent:active",
    gt = "brandagent:conversation-id-changed",
    mt = "clarity-initialization-failed",
    bt = "clarity-metadata-no-data",
    yt = "clarity-metadata-timed-out",
    vt = "und",
    wt = new Set(["jwt", "token", "access_token", "id_token", "auth_token", "refresh_token", "api_key", "apikey", "shopifyauthorization", "setflight", "sig", "signature", "hmac", "key", "secret", "password", "pwd", "code", "auth", "authorization", "bearer", "session", "sessiontoken"]),
    St = /eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]*)?/,
    kt = /^[A-Za-z0-9\-_+/=.]+$/;

function Et(e) {
    try {
        return decodeURIComponent(e)
    } catch {
        return e
    }
}

function Ct(e) {
    return e ? e.split("&").map(e => {
        if (!e) return e;
        const t = e.indexOf("=");
        if (t < 0) return e;
        const n = e.slice(0, t),
            r = e.slice(t + 1);
        return wt.has(Et(n).toLowerCase()) || function(e) {
            if (!e) return !1;
            if (St.test(e)) return !0;
            if (e.length < 40 || !kt.test(e)) return !1;
            const t = /[A-Za-z]/.test(e),
                n = /[0-9]/.test(e);
            return t && n
        }(Et(r)) ? `${n}=[REDACTED]` : e
    }).join("&") : e
}

function Ot(e) {
    if (!e) return e ? ? "";
    const t = e.indexOf("#"),
        n = t >= 0 ? e.slice(0, t) : e,
        r = t >= 0 ? e.slice(t + 1) : null,
        a = n.indexOf("?"),
        i = a >= 0 ? n.slice(0, a) : n,
        o = a >= 0 ? n.slice(a + 1) : null,
        s = null !== r && r.includes("=") ? Ct(r) : r;
    let l = i;
    return null !== o && (l += `?${Ct(o)}`), null !== r && (l += `#${s}`), l
}
var Tt = (e => (e.ProductDeepDive = "ProductDeepDive", e.PdpHandoff = "PdpHandoff", e.ProductOnSale = "ProductOnSale", e.Search = "Search", e.CategoryDiscovery = "CategoryDiscovery", e.TopSeller = "TopSeller", e.TopViewed = "TopViewed", e.CartPriceDrop = "CartPriceDrop", e.SizeConfusion = "SizeConfusion", e.ProlongedPdpStay = "ProlongedPdpStay", e.FrustrationScore = "FrustrationScore", e.ProductComparison = "ProductComparison", e.ColorConfusion = "ColorConfusion", e.FreeShipping = "FreeShipping", e.FreeShippingMet = "FreeShippingMet", e.DiscountedItem = "DiscountedItem", e.PWILO = "PWILO", e.CuratedCollectionDeals = "CuratedCollectionDeals", e.CuratedCollectionBestsellers = "CuratedCollectionBestsellers", e.WebsiteAbandonment = "WebsiteAbandonment", e.Coupons = "Coupons", e.OfflineHighlight = "OfflineHighlight", e.OfflineQuestion = "OfflineQuestion", e.OfflineComparison = "OfflineComparison", e))(Tt || {}),
    xt = (e => (e.Shopify = "Shopify", e.Magento = "Magento", e.WooCommerce = "WooCommerce", e.Unknown = "Unknown", e))(xt || {});
let _t = null;

function Nt() {
    _t = null
}

function Pt() {
    if (null !== _t) return _t;
    if (void 0 !== window.Shopify) return _t = "Shopify", _t;
    if (void 0 !== window.checkout || document.querySelector("[data-mage-init]") || document.querySelector("[data-bind]") ? .getAttribute("data-bind") ? .includes("Magento")) return _t = "Magento", _t;
    if (function() {
            if (void 0 !== window.wc_add_to_cart_params || void 0 !== window.woocommerce_params) return !0;
            if (void 0 !== window.wcSettings) return !0;
            try {
                if ("undefined" != typeof localStorage && (null !== localStorage.getItem("storeApiNonce") || null !== localStorage.getItem("storeApiCartData") || null !== localStorage.getItem("storeApiCartHash"))) return !0
            } catch (e) {}
            if (null !== document.querySelector('link[rel="https://api.w.org/"]')) {
                const e = document.body.classList.contains("woocommerce") || document.body.classList.contains("woocommerce-page"),
                    t = Array.from(document.querySelectorAll('meta[name="generator"]')).some(e => e.content.toLowerCase().includes("woocommerce"));
                if (e || t) return !0
            }
            return !1
        }()) return _t = "WooCommerce", _t;
    const e = function(e) {
        switch (e) {
            case "Shopify":
                return "Shopify";
            case "Magento":
                return "Magento";
            case "WooCommerce":
                return "WooCommerce";
            default:
                return null
        }
    }(ri() ? .platform);
    return null !== e ? (_t = e, _t) : (_t = "Unknown", _t)
}

function At() {
    return "Shopify" === Pt()
}

function Lt() {
    return "Magento" === Pt()
}

function It() {
    return "WooCommerce" === Pt()
}

function Rt() {
    return ""
}
const Mt = Object.freeze(Object.defineProperty({
    __proto__: null,
    getPlatformClientInformation: async function(e, t, n) {
        return { ...await Vn(e, t, n),
            platform: xt.Unknown,
            platformSessionId: "",
            platformUserId: ""
        }
    },
    getPlatformCountryCode: function() {
        return null
    },
    getPlatformCurrencyCode: function() {
        return null
    },
    getPlatformLocale: function() {
        return "undefined" == typeof window ? vt : window.navigator.language.split("-")[0] || vt
    },
    getPlatformRegexes: function() {
        return {
            query: "\\/search(?:.*[?&]q=([^&]+))",
            product: "\\/products\\/([^?\\/]+)(?:.*[?&]variant=(\\d+))?",
            category: "\\/collections\\/([\\w\\-]+)(?=\\/?(?:\\?|$))"
        }
    },
    getPlatformSessionId: Rt
}, Symbol.toStringTag, {
    value: "Module"
}));

function Dt() {
    return ""
}
async function zt(e, t, n) {
    return { ...await Vn(e, t, n),
        platform: xt.Magento,
        platformSessionId: "",
        platformUserId: ""
    }
}

function Ft() {
    const e = window.checkout;
    if (e ? .defaultCountryId) return e.defaultCountryId;
    const t = window.customerData;
    if (t ? .customer) {
        const e = t.customer();
        if (e ? .addresses ? .[0] ? .countryId) return e.addresses[0].countryId
    }
    const n = window.STORE_CONFIG;
    return n ? .default_country_id ? n.default_country_id : null
}

function Ut() {
    const e = window.thbCurrency;
    if (e ? .code) return e.code;
    const t = window.checkout;
    if (t ? .baseCurrencyCode) return t.baseCurrencyCode;
    if (t ? .quoteData ? .quote_currency_code) return t.quoteData.quote_currency_code;
    const n = window.STORE_CONFIG;
    if (n ? .base_currency_code) return n.base_currency_code;
    const r = document.querySelector('meta[name="currency"]');
    return r ? r.getAttribute("content") : null
}
const jt = Object.freeze(Object.defineProperty({
    __proto__: null,
    getPlatformClientInformation: zt,
    getPlatformCountryCode: Ft,
    getPlatformCurrencyCode: Ut,
    getPlatformLocale: function() {
        if ("undefined" == typeof window || "undefined" == typeof document) return vt;
        const e = document.documentElement.lang;
        if (e) return e.split("-")[0] || vt;
        const t = window.STORE_CONFIG;
        return t ? .locale ? t.locale.split("_")[0] || vt : window.navigator.language.split("-")[0] || vt
    },
    getPlatformRegexes: function() {
        return {
            query: "\\/search(?:.*[?&]q=([^&]+))",
            product: "\\/products\\/([^?\\/]+)(?:.*[?&]variant=(\\d+))?",
            category: "\\/collections\\/([\\w\\-]+)(?=\\/?(?:\\?|$))"
        }
    },
    getPlatformSessionId: Dt
}, Symbol.toStringTag, {
    value: "Module"
}));

function Vt(e) {
    const t = document.cookie.split(";");
    for (const n of t) {
        const [t, r] = n.trim().split("=");
        if (t === e) return decodeURIComponent(r || "")
    }
    return ""
}

function Ht() {
    if (window.ShopifyAnalytics ? .lib ? .config ? .initialDocumentCookie ? ? "") {
        return Vt("_shopify_s")
    }
    return ""
}
async function Bt(e, t, n) {
    const r = await Vn(e, t, n),
        a = Ht(),
        i = function() {
            if (window.ShopifyAnalytics ? .lib ? .config ? .initialDocumentCookie) return Vt("_shopify_y");
            return ""
        }();
    return { ...r,
        platform: xt.Shopify,
        platformSessionId: a,
        platformUserId: i
    }
}

function $t() {
    if ("undefined" == typeof window) return vt;
    let e;
    if (window.Shopify ? .locale) return e = window.Shopify.locale, e;
    return e = window.navigator.language.split("-")[0] || vt, e
}
const Wt = Object.freeze(Object.defineProperty({
        __proto__: null,
        getPlatformClientInformation: Bt,
        getPlatformCountryCode: function() {
            let e = null;
            if (window.Shopify ? .country) return e = window.Shopify.country, e;
            const t = Object.fromEntries(document.cookie.split("; ").map(e => e.split("=")));
            return t.localization ? (e = t.localization, e) : e
        },
        getPlatformCurrencyCode: function() {
            let e = null;
            return window.Shopify ? .currency ? .active ? (e = window.Shopify ? .currency ? .active, e) : (e = Object.fromEntries(document.cookie.split("; ").map(e => e.split("="))).cart_currency || null, e)
        },
        getPlatformLocale: $t,
        getPlatformRegexes: function() {
            return {
                query: "\\/search(?:.*[?&]q=([^&]+))",
                product: "\\/products\\/([^?\\/]+)(?:.*[?&]variant=(\\d+))?",
                category: "\\/collections\\/([\\w\\-]+)(?=\\/?(?:\\?|$))"
            }
        },
        getPlatformSessionId: Ht
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Gt = {
        currencyCode: null,
        countryCode: null,
        loaded: !1
    };
let qt = !1;

function Kt() {
    qt || (qt = !0, function() {
        if ("undefined" != typeof window) try {
            const e = localStorage.getItem("storeApiCartData");
            if (!e) return;
            const t = JSON.parse(e);
            t ? .totals ? .currency_code && (Gt.currencyCode = t.totals.currency_code);
            const n = t ? .billing_address ? .country || t ? .shipping_address ? .country;
            n && (Gt.countryCode = n), (Gt.currencyCode || Gt.countryCode) && (Gt.loaded = !0)
        } catch {}
    }(), "undefined" != typeof window && "undefined" != typeof fetch && (Gt.currencyCode && Gt.countryCode || fetch("/wp-json/wc/store/v1/cart", {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
        }
    }).then(e => {
        if (!e.ok) throw new Error(`Store API ${e.status}`);
        return e.json()
    }).then(e => {
        e ? .totals ? .currency_code && !Gt.currencyCode && (Gt.currencyCode = e.totals.currency_code);
        const t = e ? .billing_address ? .country || e ? .shipping_address ? .country;
        t && !Gt.countryCode && (Gt.countryCode = t), Gt.loaded = !0
    }).catch(() => {
        Gt.loaded = !0
    })))
}

function Qt() {
    try {
        const e = document.cookie.split(";");
        let t = null,
            n = null;
        for (const r of e) {
            const e = r.trim();
            if (e.startsWith("wp_woocommerce_session_")) {
                const t = e.indexOf("=");
                if (-1 === t) continue;
                const n = e.substring(t + 1);
                if (n) {
                    const e = decodeURIComponent(n).split("||");
                    if (e.length > 0 && e[0]) return e[0]
                }
            }
            if (e.startsWith("woocommerce_cart_hash=")) {
                const n = e.substring(22);
                n && (t = n)
            }
            if (e.startsWith("wordpress_logged_in_")) {
                const t = e.indexOf("=");
                if (-1 !== t) {
                    const r = decodeURIComponent(e.substring(t + 1)),
                        a = r.indexOf("|"),
                        i = -1 !== a ? r.substring(0, a) : r;
                    i && (n = `wp_user_${i}`)
                }
            }
        }
        if (t) return t;
        if (n) return n
    } catch {}
    return ""
}
async function Xt(e, t, n) {
    const r = await Vn(e, t, n),
        a = Qt();
    return { ...r,
        platform: xt.WooCommerce,
        platformSessionId: a,
        platformUserId: ""
    }
}

function Jt() {
    try {
        if (Kt(), Gt.currencyCode) return Gt.currencyCode;
        const e = window.wcSettings;
        if (e ? .currency ? .code) return e.currency.code
    } catch {}
    return null
}

function Yt() {
    try {
        if (Kt(), Gt.countryCode) return Gt.countryCode;
        const e = window.wcSettings;
        if (e ? .baseLocation ? .country) return e.baseLocation.country;
        const t = e ? .locale ? .siteLocale;
        if (t) {
            const e = t.split("_")[1];
            if (e && 2 === e.length) return e.toUpperCase()
        }
        if ("undefined" != typeof document) {
            const e = document.documentElement.lang || document.documentElement.getAttribute("xml:lang");
            if (e) {
                const t = e.split("-")[1];
                if (t && 2 === t.length) return t.toUpperCase()
            }
        }
    } catch {}
    return null
}

function Zt() {
    if ("undefined" == typeof window || "undefined" == typeof document) return vt;
    const e = window.wcSettings;
    if (e ? .locale ? .siteLocale) return e.locale.siteLocale.replace("_", "-");
    const t = document.documentElement.lang || document.documentElement.getAttribute("xml:lang");
    if (t) return t;
    return window.navigator.language || vt
}
const en = Object.freeze(Object.defineProperty({
    __proto__: null,
    getPlatformClientInformation: Xt,
    getPlatformCountryCode: Yt,
    getPlatformCurrencyCode: Jt,
    getPlatformLocale: Zt,
    getPlatformRegexes: function() {
        return {
            query: "\\/search(?:.*[?&]q=([^&]+))",
            product: "\\/product\\/([^?\\/]+)(?:.*[?&]variant=(\\d+))?",
            category: "\\/product-category\\/([\\w\\-]+)(?=\\/?(?:\\?|$))"
        }
    },
    getPlatformSessionId: Qt
}, Symbol.toStringTag, {
    value: "Module"
}));
let tn = null;

function nn() {
    if (tn) return tn;
    switch (Pt()) {
        case xt.Shopify:
            tn = Wt;
            break;
        case xt.Magento:
            tn = jt;
            break;
        case xt.WooCommerce:
            tn = en;
            break;
        default:
            tn = Mt
    }
    return tn
}

function rn() {
    return nn().getPlatformSessionId()
}

function an() {
    return nn().getPlatformCountryCode()
}

function on() {
    return nn().getPlatformCurrencyCode()
}

function sn() {
    return nn().getPlatformLocale()
}

function ln() {
    return nn().getPlatformRegexes()
}

function un(e, t, n) {
    return nn().getPlatformClientInformation(e, t, n)
}
const cn = {
        ENTRYPOINT: {
            SUBTITLE: "entrypoint.subtitle",
            INPUT_PLACEHOLDER: "entrypoint.inputPlaceholder",
            BRANDED_INPUT_PLACEHOLDER: "entrypoint.inputPlaceholderBranded",
            INPUT_PLACEHOLDER_SHORT: "entrypoint.inputPlaceholderShort",
            INPUT_PLACEHOLDER_JEWELHUT: "entrypoint.inputPlaceholderJewelHut"
        },
        CART: {
            CART: "cart.cart",
            ADD: "cart.add",
            ADD_MULTIPLE: "cart.addMultiple",
            ADDED: "cart.added",
            ADDING: "cart.adding",
            UNAVAILABLE: "cart.unavailable",
            BUY_NOW: "cart.buyNow",
            GET_NOW: "cart.getNow",
            SELECT: "cart.select",
            LABEL: "cart.label",
            IN_CART: "cart.inCart",
            QUANTITY: "cart.quantity",
            INCREASE_QUANTITY: "cart.increaseQuantity",
            DECREASE_QUANTITY: "cart.decreaseQuantity"
        },
        CART_CARD: {
            TITLE: "cartCard.title",
            CHECKOUT: "cartCard.checkout",
            VIEW_CART: "cartCard.viewCart"
        },
        MENU: {
            MENU: "menu.menu",
            TERMS_OF_USE: "menu.termsOfUse",
            PRIVACY: "menu.privacy",
            SETTINGS: "menu.settings",
            DISCLAIMER: "menu.disclaimer"
        },
        RESTART: {
            TITLE: "restart.title",
            MESSAGE: "restart.message"
        },
        COMPOSER: {
            PLACEHOLDER: "composer.placeholder",
            BRANDED_PLACEHOLDER: "composer.brandedPlaceholder"
        },
        SESSION: {
            EXPIRED_TITLE: "session.expiredTitle",
            EXPIRED_MESSAGE: "session.expiredMessage"
        },
        ERROR: {
            TITLE: "error.title",
            MESSAGE: "error.message",
            RETRIES: "error.retries",
            LOADING_TITLE: "error.loadingTitle",
            LOADING_MESSAGE: "error.loadingMessage",
            REFRESH_ACTION: "error.refreshAction"
        },
        LEARN: {
            MORE: "learn.more"
        },
        PRODUCT: {
            OVERVIEW_TITLE: "product.overviewTitle",
            CONFIRMATION_TITLE: "product.confirmationTitle",
            VIEW_DETAILS: "product.viewDetails",
            OPTIONS_TITLE: "product.optionsTitle",
            SELECTED_VARIANT: "product.selectedVariant",
            INQUIRY_PROMPT: "product.inquiryPrompt",
            VIEW_PRODUCTS: "product.viewProducts",
            CURRENT_PRICE: "product.currentPrice",
            DISCOUNTED_PRICE: "product.discountedPrice"
        },
        NEW_CHAT: {
            CONFIRMATION: "newChat.confirmation",
            QUESTION: "newChat.question",
            MESSAGE: "newChat.message"
        },
        ACTIONS: {
            BACK: "actions.back",
            CANCEL: "actions.cancel",
            CONFIRM: "actions.confirm",
            NEXT: "actions.next",
            COPIED: "actions.copied",
            CLOSE: "actions.close",
            DISMISS: "actions.dismiss",
            SUBMIT: "actions.submit",
            STOP: "actions.stop",
            LIKED: "actions.liked",
            UNLIKED: "actions.unliked",
            DISLIKED: "actions.disliked",
            UNDISLIKED: "actions.undisliked",
            SCROLL_LEFT: "actions.scrollLeft",
            SCROLL_RIGHT: "actions.scrollRight",
            NAVIGATE_PDP: "actions.navigatePdp",
            EXPLORE: "actions.explore",
            EXPAND: "actions.expand",
            MINIMIZE: "actions.minimize",
            SEND_MESSAGE: "actions.sendMessage",
            COPY_RESPONSE: "actions.copyResponse",
            GIVE_THUMBS_UP: "actions.giveThumbsUp",
            GIVE_THUMBS_DOWN: "actions.giveThumbsDown",
            CLOSE_CHAT: "actions.closeChat",
            EXPAND_CHAT: "actions.expandChat",
            MORE_OPTIONS: "actions.moreOptions",
            SCROLL_PRODUCTS_LEFT: "actions.scrollProductsLeft",
            SCROLL_PRODUCTS_RIGHT: "actions.scrollProductsRight",
            SCROLL_COMPARISONS_LEFT: "actions.scrollComparisonsLeft",
            SCROLL_COMPARISONS_RIGHT: "actions.scrollComparisonsRight"
        },
        FOOTER: {
            DISCLAIMER: "footer.disclaimer",
            TOTAL_PRICE: "footer.totalPrice"
        },
        LOADING: {
            DEFAULT: "loading.default",
            CHECKOUT: "loading.checkout",
            VIEW_CART: "loading.viewcart",
            TEXT1: "loading.text1",
            TEXT2: "loading.text2",
            TEXT3: "loading.text3"
        },
        GREETING: {
            HANDWAVE: "greeting.handwave"
        },
        REVIEW: {
            SEE: "review.see",
            TITLE: "review.title",
            VIEW_ALL: "review.viewAll",
            CUSTOMER_REVIEWS: "review.customerReviews",
            CUSTOMERS_SAY: "review.customersSay",
            BUTTON_TEXT: "review.reviewButtonText",
            PHOTO_LABEL: "review.photoLabel"
        },
        NUDGE: {
            PROLONGED_PDP_NUDGE_MESSAGE: "nudge.prolongedPdpStay.nudgeMessage",
            PROLONGED_PDP_SHORT_NUDGE_MESSAGE: "nudge.prolongedPdpStay.mobileNudgeMessage",
            PROLONGED_PDP_AGENT_MESSAGE: "nudge.prolongedPdpStay.agentMessage",
            PROLONGED_PDP_CHAT_MESSAGE: "nudge.prolongedPdpStay.chatMessage",
            SIZE_CONFUSION_NUDGE_MESSAGE: "nudge.sizeConfusion.nudgeMessage",
            SIZE_CONFUSION_SHORT_NUDGE_MESSAGE: "nudge.sizeConfusion.mobileNudgeMessage",
            SIZE_CONFUSION_AGENT_MESSAGE: "nudge.sizeConfusion.agentMessage",
            SIZE_CONFUSION_CHAT_MESSAGE: "nudge.sizeConfusion.chatMessage",
            FRUSTRATION_SCORE_NUDGE_MESSAGE: "nudge.frustrationScore.nudgeMessage",
            FRUSTATION_SCORE_SHORT_NUDGE_MESSAGE: "nudge.frustrationScore.mobileNudgeMessage",
            FRUSTRATION_SCORE_AGENT_MESSAGE: "nudge.frustrationScore.agentMessage",
            FRUSTRATION_SCORE_CHAT_MESSAGE: "nudge.frustrationScore.chatMessage",
            PRODUCT_COMPARISON_NUDGE_MESSAGE: "nudge.productComparison.nudgeMessage",
            PRODUCT_COMPARISON_SHORT_NUDGE_MESSAGE: "nudge.productComparison.mobileNudgeMessage",
            PRODUCT_COMPARISON_AGENT_MESSAGE: "nudge.productComparison.agentMessage",
            PRODUCT_COMPARISON_CHAT_MESSAGE: "nudge.productComparison.chatMessage",
            COLOR_CONFUSION_NUDGE_MESSAGE: "nudge.colorConfusion.nudgeMessage",
            COLOR_CONFUSION_SHORT_NUDGE_MESSAGE: "nudge.colorConfusion.mobileNudgeMessage",
            COLOR_CONFUSION_AGENT_MESSAGE: "nudge.colorConfusion.agentMessage",
            COLOR_CONFUSION_CHAT_MESSAGE: "nudge.colorConfusion.chatMessage",
            WEBSITE_ABANDONMENT_NUDGE_MESSAGE: "nudge.websiteAbandonment.nudgeMessage",
            WEBSITE_ABANDONMENT_SHORT_NUDGE_MESSAGE: "nudge.websiteAbandonment.mobileNudgeMessage",
            WEBSITE_ABANDONMENT_AGENT_MESSAGE: "nudge.websiteAbandonment.agentMessage",
            WEBSITE_ABANDONMENT_CHAT_MESSAGE: "nudge.websiteAbandonment.chatMessage",
            PROLONGED_PDP_NUDGE_MESSAGE_NEW: "nudge.prolongedPdpStay.nudgeMessageNew",
            PROLONGED_PDP_AGENT_MESSAGE_NEW: "nudge.prolongedPdpStay.agentMessageNew",
            PROLONGED_PDP_CHAT_MESSAGE_NEW: "nudge.prolongedPdpStay.chatMessageNew",
            SIZE_CONFUSION_NUDGE_MESSAGE_NEW: "nudge.sizeConfusion.nudgeMessageNew",
            SIZE_CONFUSION_AGENT_MESSAGE_NEW: "nudge.sizeConfusion.agentMessageNew",
            SIZE_CONFUSION_CHAT_MESSAGE_NEW: "nudge.sizeConfusion.chatMessageNew",
            FRUSTRATION_SCORE_NUDGE_MESSAGE_NEW: "nudge.frustrationScore.nudgeMessageNew",
            FRUSTRATION_SCORE_AGENT_MESSAGE_NEW: "nudge.frustrationScore.agentMessageNew",
            FRUSTRATION_SCORE_CHAT_MESSAGE_NEW: "nudge.frustrationScore.chatMessageNew",
            PRODUCT_COMPARISON_NUDGE_MESSAGE_NEW: "nudge.productComparison.nudgeMessageNew",
            PRODUCT_COMPARISON_AGENT_MESSAGE_NEW: "nudge.productComparison.agentMessageNew",
            PRODUCT_COMPARISON_CHAT_MESSAGE_NEW: "nudge.productComparison.chatMessageNew",
            COLOR_CONFUSION_NUDGE_MESSAGE_NEW: "nudge.colorConfusion.nudgeMessageNew",
            COLOR_CONFUSION_AGENT_MESSAGE_NEW: "nudge.colorConfusion.agentMessageNew",
            COLOR_CONFUSION_CHAT_MESSAGE_NEW: "nudge.colorConfusion.chatMessageNew",
            WEBSITE_ABANDONMENT_NUDGE_MESSAGE_NEW: "nudge.websiteAbandonment.nudgeMessageNew",
            WEBSITE_ABANDONMENT_AGENT_MESSAGE_NEW: "nudge.websiteAbandonment.agentMessageNew",
            WEBSITE_ABANDONMENT_CHAT_MESSAGE_NEW: "nudge.websiteAbandonment.chatMessageNew",
            OFFLINE_NUDGES_SUGGESTED_PROMPTS_ARIA_LABEL: "nudge.offlineNudges.suggestedPromptsAriaLabel",
            METADATA_AVAILABLE: "nudge.metadataAvailable"
        },
        DISCOUNT: {
            APPLY_DISCOUNT: "discount.applyDiscount",
            DISCOUNT_BADGE: "discount.discountBadge",
            SHOP_SALE: "discount.shopSale"
        },
        TRACKER: {
            PROGRESS_MESSAGE: "tracker.progressMessage",
            ELIGIBLE_MESSAGE: "tracker.eligibleMessage"
        },
        SHIPPING: {
            PRODUCT_LIST_TITLE: "shipping.productListTitle",
            PROGRESS_TITLE: "shipping.progressTitle",
            ELIGIBLE_TITLE: "shipping.eligibleTitle"
        },
        CHAT: {
            CONVERSATION: "chat.conversation",
            USER_MESSAGE: "chat.userMessage",
            AGENT_MESSAGE: "chat.agentMessage",
            LOADING: "chat.loading",
            AGENT_TYPING: "chat.agentTyping",
            PDP_HANDOFF_PULLING_CONTEXT_FROM_BING: "chat.pdpHandoffPullingContextFromBing",
            PDP_HANDOFF_STARTED_FROM_BING: "chat.pdpHandoffStartedFromBing"
        },
        GENUX: {
            SCROLLABLE_ITEMS: "genux.scrollableItems"
        },
        TABS: {
            MORE: "tabs.more"
        },
        LIST: {
            SHOW_MORE: "list.showMore",
            SHOW_MORE_WITH_LABEL: "list.showMoreWithLabel"
        },
        CAROUSEL: {
            IMAGE_CAROUSEL_LABEL: "carousel.imageCarouselLabel",
            IMAGE_LABEL: "carousel.imageLabel"
        },
        RATING: {
            STAR_RATING: "rating.starRating"
        },
        TUTORIAL: {
            MESSAGE_BAR: "tutorial.messageBar",
            MESSAGE_BAR_BUTTON_CTA: "tutorial.messageBarButtonCTA",
            WELCOME_POPOVER_TITLE: "tutorial.welcomePopoverTitle",
            WELCOME_POPOVER_DESCRIPTION: "tutorial.welcomePopoverDescription",
            PREVIEW_POPOVER_TITLE: "tutorial.previewPopoverTitle",
            FOLLOWUP_POPOVER_TITLE: "tutorial.followupPopoverTitle",
            FOLLOWUP_POPOVER_DESCRIPTION: "tutorial.followupPopoverDescription",
            CALLOUT_LABEL: "tutorial.calloutLabel",
            EXIT_TUTORIAL: "tutorial.exitTutorial",
            EXIT_TUTORIAL_DESCRIPTION: "tutorial.exitTutorialDescription"
        },
        MCP: {
            MESSAGE_BAR: "mcp.messageBar"
        },
        FORM: {
            DONE: "form.done",
            DONE_SELECTED: "form.doneSelected"
        },
        ORDER_TRACKING: {
            EMAIL_LABEL: "orderTracking.emailLabel",
            EMAIL_PLACEHOLDER: "orderTracking.emailPlaceholder",
            EMAIL_ERROR: "orderTracking.emailError",
            ORDER_LABEL: "orderTracking.orderLabel",
            ORDER_PLACEHOLDER: "orderTracking.orderPlaceholder",
            ORDER_ERROR: "orderTracking.orderError",
            ORDER_NUMBER: "orderTracking.orderNumber",
            TRACK: "orderTracking.track",
            LOADING: "orderTracking.findingOrder"
        }
    },
    dn = 5,
    fn = 100,
    pn = 1e3,
    hn = "No data received",
    gn = "Fetching clarity metadata timed out",
    mn = new Map([
        [hn, bt],
        [gn, yt]
    ]),
    bn = new WeakMap;

function yn(e, t) {
    try {
        const n = On();
        n ? .("set", e, t)
    } catch {}
}

function vn(e) {
    try {
        const t = On();
        t ? .("event", e)
    } catch {}
}

function wn(e) {
    try {
        window.parent.postMessage({
            type: e
        }, "*")
    } catch {}
}
async function Sn(e, t) {
    await async function(e, t) {
        let n = 0;
        for (; n < dn;) {
            if (Tn(e, t)) return;
            await new Promise(e => setTimeout(e, fn)), n++
        }
    }(e, t);
    if (!On()) return xn(mt), null;
    try {
        return await async function() {
            try {
                const e = await
                function() {
                    const e = On();
                    return new Promise((t, n) => {
                        e("metadata", e => {
                            e && "object" == typeof e ? t(new Map(Object.entries(e))) : n(new Error(hn))
                        }, !1), setTimeout(() => n(new Error(gn)), pn)
                    })
                }();
                return e
            } catch (e) {
                const t = e.message,
                    n = mn.get(t);
                return n && xn(n, t), null
            }
        }()
    } catch {
        return null
    }
}

function kn(e, t) {
    On() ? .("identify", e, t)
}

function En(e) {
    const t = ["AgentNudge", "FrustrationScore"];
    try {
        if ("FrustrationScore" === e.type) return {
            value: e.value ? ? 0
        };
        if (! function(e, t) {
                return !!e && "object" == typeof e && "type" in e && "message" in e && t.includes(e.type)
            }(e, t)) return null;
        const n = atob(e.message);
        return JSON.parse(n)
    } catch (n) {
        return null
    }
}

function Cn(e, t, n) {
    let r = !1;
    const a = () => {
        if (r) return !0;
        const t = On();
        if (!t) return !1;
        let n = bn.get(t);
        return n || (n = new WeakSet, bn.set(t, n)), n.has(e) ? (r = !0, !0) : (t("signal", e), n.add(e), r = !0, !0)
    };
    if (a()) return;
    Sn(t, n).then(() => {
        a()
    });
    let i = 0;
    const o = () => {
        r || i >= 30 || (i++, a() || setTimeout(o, 500))
    };
    setTimeout(o, 500)
}

function On() {
    return window.clarity
}

function Tn(e, t) {
    const n = On();
    if (!n) return !1;
    const r = rn();
    return !!n("identify", e, `AGENTS_${r}`, t || r)
}

function xn(e, t) {
    const n = {
        clarityVersion: _n(),
        clarityQueueLength: Nn(),
        ...t && {
            errorMessage: t
        }
    };
    window.dispatchEvent(new CustomEvent(e, {
        detail: n
    }))
}

function _n() {
    const e = On();
    return e ? e.v ? ? "Clarity version is undefined" : "Clarity is undefined"
}

function Nn() {
    const e = On();
    return e ? e.q ? .length ? ? "Clarity queue is undefined" : "Clarity is undefined"
}

function Pn(e) {
    return !!e && ("p" in e && "sgt" in e)
}

function An(e) {
    const t = e.map(e => {
        try {
            return new URL(e).pathname
        } catch {
            return e
        }
    });
    return Array.from(new Set(t))
}
const Ln = new Set(["EncryptedMuid"]),
    In = new Set(["ClickedColors", "ClickedSizes"]),
    Rn = /(?:rs\.?|₨|\$|€|£|usd|pkr|inr)\s?[\d.,]+/i,
    Mn = [/filter/i, /\bsort\b/i, /\bclear\b/i, /\bapply\b/i, /delivered/i, /%\s?off/i, /\/\s?\d+\b/],
    Dn = {
        [Tt.ColorConfusion]: ["ClickedColors"],
        [Tt.SizeConfusion]: ["ClickedSizes"],
        [Tt.WebsiteAbandonment]: ["abandonmentType", "confidence", "siteCategory", "reasons", "hiddenDuration", "hiddenRatio"]
    },
    zn = {
        ClickedColors: "clicked_colors",
        ClickedSizes: "clicked_sizes",
        VisitedCategories: "visited_categories",
        abandonmentType: "abandonment_type",
        confidence: "confidence",
        siteCategory: "site_category",
        reasons: "reasons",
        hiddenDuration: "hidden_duration_ms",
        hiddenRatio: "hidden_ratio"
    };

function Fn(e) {
    const t = new Set,
        n = [];
    for (const r of e.split(",")) {
        const e = r.trim();
        if (!e || e.length > 40) continue;
        if (Rn.test(e)) continue;
        if (Mn.some(t => t.test(e))) continue;
        const a = e.toLowerCase();
        if (!t.has(a) && (t.add(a), n.push(e), n.length >= 5)) break
    }
    return n.join(", ")
}

function Un(e, t, n, r) {
    const a = [];
    if (e) {
        const t = Dn[n],
            r = Object.entries(e).filter(([e]) => !Ln.has(e) && (!t || t.includes(e)));
        for (const [e, n] of r) {
            const t = zn[e] ? ? e;
            let r = String(n);
            In.has(e) && (r = Fn(r), !r) || a.push(`${t}: ${r}`)
        }
    }
    if (t && t.length > 0 && a.push(`${zn.VisitedCategories}: ${t.join(", ")}`), 0 === a.length) return "";
    const i = a.join(", "),
        o = i.length > 500 ? i.slice(0, 500) + "…" : i;
    return ` ${r(cn.NUDGE.METADATA_AVAILABLE,{metadata:o})}`
}

function jn() {
    const e = new URLSearchParams(window.location.search);
    return {
        pageUrl: Ot(window.location.href),
        referrerUrl: Ot(document.referrer || ""),
        utmSource: e.get("utm_source"),
        utmMedium: e.get("utm_medium"),
        utmCampaign: e.get("utm_campaign")
    }
}
async function Vn(e, t, n) {
    const r = bi(),
        a = await async function(e, t, n) {
            const r = await Sn(e, t);
            return {
                sessionId: r ? .get("sessionId") || "",
                userId: r ? .get("userId") || "",
                projectId: r ? .get("projectId") || "",
                muid: n || void 0
            }
        }(e, t, n);
    return {
        userAgentInformation: r,
        clarityInformation: a,
        landingPageInformation: jn(),
        conversationId: Ai(et)
    }
}

function Hn() {
    return new URLSearchParams(window.location.search).get("oquery")
}

function Bn(e) {
    const t = new URL(window.location.href),
        n = t.searchParams.get("setflight") || "";
    if (n) {
        const r = n.split(",").filter(t => t.trim().toLowerCase() !== e.toLowerCase()).join(",");
        r && t.searchParams.set("setflight", r)
    }
    window.history.replaceState(null, "", t.toString()), window.location.reload()
}

function $n(e) {
    const t = new URLSearchParams(window.location.search).get("setflight"),
        n = t ? .split(",").some(e => "enablelivepreview" === e.trim().toLowerCase());
    return !(!e.IsLivePreviewSearchEnabled || n) || !!t && t.split(",").some(e => "-" === e.trim().toLowerCase())
}

function Wn(e) {
    if (!e.jwtToken ? .expiresAt) return !1;
    const t = new Date(e.jwtToken.expiresAt + "Z");
    return new Date < t
}
var Gn, qn, Kn = {},
    Qn = {
        exports: {}
    },
    Xn = Qn.exports;

function Jn() {
    return Gn || (Gn = 1, e = Qn, t = Qn.exports, function(n, r) {
        var a = "function",
            i = "undefined",
            o = "object",
            s = "string",
            l = "major",
            u = "model",
            c = "name",
            d = "type",
            f = "vendor",
            p = "version",
            h = "architecture",
            g = "console",
            m = "mobile",
            b = "tablet",
            y = "smarttv",
            v = "wearable",
            w = "embedded",
            S = "Amazon",
            k = "Apple",
            E = "ASUS",
            C = "BlackBerry",
            O = "Browser",
            T = "Chrome",
            x = "Firefox",
            _ = "Google",
            N = "Honor",
            P = "Huawei",
            A = "LG",
            L = "Microsoft",
            I = "Motorola",
            R = "Nvidia",
            M = "OnePlus",
            D = "Opera",
            z = "OPPO",
            F = "Samsung",
            U = "Sharp",
            j = "Sony",
            V = "Xiaomi",
            H = "Zebra",
            B = "Facebook",
            $ = "Chromium OS",
            W = "Mac OS",
            G = " Browser",
            q = function(e) {
                for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                return t
            },
            K = function(e, t) {
                return typeof e === s && -1 !== Q(t).indexOf(Q(e))
            },
            Q = function(e) {
                return e.toLowerCase()
            },
            X = function(e, t) {
                if (typeof e === s) return e = e.replace(/^\s\s*/, ""), typeof t === i ? e : e.substring(0, 500)
            },
            J = function(e, t) {
                for (var n, i, s, l, u, c, d = 0; d < t.length && !u;) {
                    var f = t[d],
                        p = t[d + 1];
                    for (n = i = 0; n < f.length && !u && f[n];)
                        if (u = f[n++].exec(e))
                            for (s = 0; s < p.length; s++) c = u[++i], typeof(l = p[s]) === o && l.length > 0 ? 2 === l.length ? typeof l[1] == a ? this[l[0]] = l[1].call(this, c) : this[l[0]] = l[1] : 3 === l.length ? typeof l[1] !== a || l[1].exec && l[1].test ? this[l[0]] = c ? c.replace(l[1], l[2]) : r : this[l[0]] = c ? l[1].call(this, c, l[2]) : r : 4 === l.length && (this[l[0]] = c ? l[3].call(this, c.replace(l[1], l[2])) : r) : this[l] = c || r;
                    d += 2
                }
            },
            Y = function(e, t) {
                for (var n in t)
                    if (typeof t[n] === o && t[n].length > 0) {
                        for (var a = 0; a < t[n].length; a++)
                            if (K(t[n][a], e)) return "?" === n ? r : n
                    } else if (K(t[n], e)) return "?" === n ? r : n;
                return t.hasOwnProperty("*") ? t["*"] : e
            },
            Z = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM"
            },
            ee = {
                browser: [
                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                    [p, [c, "Chrome"]],
                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                    [p, [c, "Edge"]],
                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                    [c, p],
                    [/opios[\/ ]+([\w\.]+)/i],
                    [p, [c, D + " Mini"]],
                    [/\bop(?:rg)?x\/([\w\.]+)/i],
                    [p, [c, D + " GX"]],
                    [/\bopr\/([\w\.]+)/i],
                    [p, [c, D]],
                    [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                    [p, [c, "Baidu"]],
                    [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
                    [p, [c, "Maxthon"]],
                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                    [c, p],
                    [/quark(?:pc)?\/([-\w\.]+)/i],
                    [p, [c, "Quark"]],
                    [/\bddg\/([\w\.]+)/i],
                    [p, [c, "DuckDuckGo"]],
                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                    [p, [c, "UC" + O]],
                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                    [p, [c, "WeChat"]],
                    [/konqueror\/([\w\.]+)/i],
                    [p, [c, "Konqueror"]],
                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                    [p, [c, "IE"]],
                    [/ya(?:search)?browser\/([\w\.]+)/i],
                    [p, [c, "Yandex"]],
                    [/slbrowser\/([\w\.]+)/i],
                    [p, [c, "Smart Lenovo " + O]],
                    [/(avast|avg)\/([\w\.]+)/i],
                    [
                        [c, /(.+)/, "$1 Secure " + O], p
                    ],
                    [/\bfocus\/([\w\.]+)/i],
                    [p, [c, x + " Focus"]],
                    [/\bopt\/([\w\.]+)/i],
                    [p, [c, D + " Touch"]],
                    [/coc_coc\w+\/([\w\.]+)/i],
                    [p, [c, "Coc Coc"]],
                    [/dolfin\/([\w\.]+)/i],
                    [p, [c, "Dolphin"]],
                    [/coast\/([\w\.]+)/i],
                    [p, [c, D + " Coast"]],
                    [/miuibrowser\/([\w\.]+)/i],
                    [p, [c, "MIUI" + G]],
                    [/fxios\/([\w\.-]+)/i],
                    [p, [c, x]],
                    [/\bqihoobrowser\/?([\w\.]*)/i],
                    [p, [c, "360"]],
                    [/\b(qq)\/([\w\.]+)/i],
                    [
                        [c, /(.+)/, "$1Browser"], p
                    ],
                    [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
                    [
                        [c, /(.+)/, "$1" + G], p
                    ],
                    [/samsungbrowser\/([\w\.]+)/i],
                    [p, [c, F + " Internet"]],
                    [/metasr[\/ ]?([\d\.]+)/i],
                    [p, [c, "Sogou Explorer"]],
                    [/(sogou)mo\w+\/([\d\.]+)/i],
                    [
                        [c, "Sogou Mobile"], p
                    ],
                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
                    [c, p],
                    [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
                    [c],
                    [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
                    [p, c],
                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                    [
                        [c, B], p
                    ],
                    [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                    [c, p],
                    [/\bgsa\/([\w\.]+) .*safari\//i],
                    [p, [c, "GSA"]],
                    [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                    [p, [c, "TikTok"]],
                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                    [p, [c, T + " Headless"]],
                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                    [
                        [c, T + " WebView"], p
                    ],
                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                    [p, [c, "Android " + O]],
                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                    [c, p],
                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                    [p, [c, "Mobile Safari"]],
                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                    [p, c],
                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                    [c, [p, Y, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]],
                    [/(webkit|khtml)\/([\w\.]+)/i],
                    [c, p],
                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                    [
                        [c, "Netscape"], p
                    ],
                    [/(wolvic|librewolf)\/([\w\.]+)/i],
                    [c, p],
                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                    [p, [c, x + " Reality"]],
                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
                    [c, [p, /_/g, "."]],
                    [/(cobalt)\/([\w\.]+)/i],
                    [c, [p, /master.|lts./, ""]]
                ],
                cpu: [
                    [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
                    [
                        [h, "amd64"]
                    ],
                    [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
                    [
                        [h, "ia32"]
                    ],
                    [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
                    [
                        [h, "arm64"]
                    ],
                    [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
                    [
                        [h, "armhf"]
                    ],
                    [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
                    [
                        [h, "arm"]
                    ],
                    [/((ppc|powerpc)(64)?)( mac|;|\))/i],
                    [
                        [h, /ower/, "", Q]
                    ],
                    [/ sun4\w[;\)]/i],
                    [
                        [h, "sparc"]
                    ],
                    [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],
                    [
                        [h, Q]
                    ]
                ],
                device: [
                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                    [u, [f, F],
                        [d, b]
                    ],
                    [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i],
                    [u, [f, F],
                        [d, m]
                    ],
                    [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                    [u, [f, k],
                        [d, m]
                    ],
                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                    [u, [f, k],
                        [d, b]
                    ],
                    [/(macintosh);/i],
                    [u, [f, k]],
                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                    [u, [f, U],
                        [d, m]
                    ],
                    [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
                    [u, [f, N],
                        [d, b]
                    ],
                    [/honor([-\w ]+)[;\)]/i],
                    [u, [f, N],
                        [d, m]
                    ],
                    [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
                    [u, [f, P],
                        [d, b]
                    ],
                    [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                    [u, [f, P],
                        [d, m]
                    ],
                    [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
                    [
                        [u, /_/g, " "],
                        [f, V],
                        [d, b]
                    ],
                    [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
                    [
                        [u, /_/g, " "],
                        [f, V],
                        [d, m]
                    ],
                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                    [u, [f, z],
                        [d, m]
                    ],
                    [/\b(opd2(\d{3}a?))(?: bui|\))/i],
                    [u, [f, Y, {
                            OnePlus: ["304", "403", "203"],
                            "*": z
                        }],
                        [d, b]
                    ],
                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                    [u, [f, "Vivo"],
                        [d, m]
                    ],
                    [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                    [u, [f, "Realme"],
                        [d, m]
                    ],
                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                    [u, [f, I],
                        [d, m]
                    ],
                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                    [u, [f, I],
                        [d, b]
                    ],
                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                    [u, [f, A],
                        [d, b]
                    ],
                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i, /\blg-?([\d\w]+) bui/i],
                    [u, [f, A],
                        [d, m]
                    ],
                    [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
                    [u, [f, "Lenovo"],
                        [d, b]
                    ],
                    [/(nokia) (t[12][01])/i],
                    [f, u, [d, b]],
                    [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*))/i],
                    [
                        [u, /_/g, " "],
                        [d, m],
                        [f, "Nokia"]
                    ],
                    [/(pixel (c|tablet))\b/i],
                    [u, [f, _],
                        [d, b]
                    ],
                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                    [u, [f, _],
                        [d, m]
                    ],
                    [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                    [u, [f, j],
                        [d, m]
                    ],
                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                    [
                        [u, "Xperia Tablet"],
                        [f, j],
                        [d, b]
                    ],
                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                    [u, [f, M],
                        [d, m]
                    ],
                    [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                    [u, [f, S],
                        [d, b]
                    ],
                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                    [
                        [u, /(.+)/g, "Fire Phone $1"],
                        [f, S],
                        [d, m]
                    ],
                    [/(playbook);[-\w\),; ]+(rim)/i],
                    [u, f, [d, b]],
                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                    [u, [f, C],
                        [d, m]
                    ],
                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                    [u, [f, E],
                        [d, b]
                    ],
                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                    [u, [f, E],
                        [d, m]
                    ],
                    [/(nexus 9)/i],
                    [u, [f, "HTC"],
                        [d, b]
                    ],
                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                    [f, [u, /_/g, " "],
                        [d, m]
                    ],
                    [/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],
                    [u, [f, "TCL"],
                        [d, b]
                    ],
                    [/(itel) ((\w+))/i],
                    [
                        [f, Q], u, [d, Y, {
                            tablet: ["p10001l", "w7001"],
                            "*": "mobile"
                        }]
                    ],
                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                    [u, [f, "Acer"],
                        [d, b]
                    ],
                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                    [u, [f, "Meizu"],
                        [d, m]
                    ],
                    [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                    [u, [f, "Ulefone"],
                        [d, m]
                    ],
                    [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
                    [u, [f, "Energizer"],
                        [d, m]
                    ],
                    [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
                    [u, [f, "Cat"],
                        [d, m]
                    ],
                    [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
                    [u, [f, "Smartfren"],
                        [d, m]
                    ],
                    [/droid.+; (a(?:015|06[35]|142p?))/i],
                    [u, [f, "Nothing"],
                        [d, m]
                    ],
                    [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
                    [u, [f, "Archos"],
                        [d, b]
                    ],
                    [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
                    [u, [f, "Archos"],
                        [d, m]
                    ],
                    [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
                    [f, u, [d, b]],
                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (hmd|imo) ([\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i, /(oppo) ?([\w ]+) bui/i],
                    [f, u, [d, m]],
                    [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                    [f, u, [d, b]],
                    [/(surface duo)/i],
                    [u, [f, L],
                        [d, b]
                    ],
                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                    [u, [f, "Fairphone"],
                        [d, m]
                    ],
                    [/(u304aa)/i],
                    [u, [f, "AT&T"],
                        [d, m]
                    ],
                    [/\bsie-(\w*)/i],
                    [u, [f, "Siemens"],
                        [d, m]
                    ],
                    [/\b(rct\w+) b/i],
                    [u, [f, "RCA"],
                        [d, b]
                    ],
                    [/\b(venue[\d ]{2,7}) b/i],
                    [u, [f, "Dell"],
                        [d, b]
                    ],
                    [/\b(q(?:mv|ta)\w+) b/i],
                    [u, [f, "Verizon"],
                        [d, b]
                    ],
                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                    [u, [f, "Barnes & Noble"],
                        [d, b]
                    ],
                    [/\b(tm\d{3}\w+) b/i],
                    [u, [f, "NuVision"],
                        [d, b]
                    ],
                    [/\b(k88) b/i],
                    [u, [f, "ZTE"],
                        [d, b]
                    ],
                    [/\b(nx\d{3}j) b/i],
                    [u, [f, "ZTE"],
                        [d, m]
                    ],
                    [/\b(gen\d{3}) b.+49h/i],
                    [u, [f, "Swiss"],
                        [d, m]
                    ],
                    [/\b(zur\d{3}) b/i],
                    [u, [f, "Swiss"],
                        [d, b]
                    ],
                    [/\b((zeki)?tb.*\b) b/i],
                    [u, [f, "Zeki"],
                        [d, b]
                    ],
                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                    [
                        [f, "Dragon Touch"], u, [d, b]
                    ],
                    [/\b(ns-?\w{0,9}) b/i],
                    [u, [f, "Insignia"],
                        [d, b]
                    ],
                    [/\b((nxa|next)-?\w{0,9}) b/i],
                    [u, [f, "NextBook"],
                        [d, b]
                    ],
                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                    [
                        [f, "Voice"], u, [d, m]
                    ],
                    [/\b(lvtel\-)?(v1[12]) b/i],
                    [
                        [f, "LvTel"], u, [d, m]
                    ],
                    [/\b(ph-1) /i],
                    [u, [f, "Essential"],
                        [d, m]
                    ],
                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                    [u, [f, "Envizen"],
                        [d, b]
                    ],
                    [/\b(trio[-\w\. ]+) b/i],
                    [u, [f, "MachSpeed"],
                        [d, b]
                    ],
                    [/\btu_(1491) b/i],
                    [u, [f, "Rotor"],
                        [d, b]
                    ],
                    [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
                    [u, [f, R],
                        [d, b]
                    ],
                    [/(sprint) (\w+)/i],
                    [f, u, [d, m]],
                    [/(kin\.[onetw]{3})/i],
                    [
                        [u, /\./g, " "],
                        [f, L],
                        [d, m]
                    ],
                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                    [u, [f, H],
                        [d, b]
                    ],
                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                    [u, [f, H],
                        [d, m]
                    ],
                    [/smart-tv.+(samsung)/i],
                    [f, [d, y]],
                    [/hbbtv.+maple;(\d+)/i],
                    [
                        [u, /^/, "SmartTV"],
                        [f, F],
                        [d, y]
                    ],
                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                    [
                        [f, A],
                        [d, y]
                    ],
                    [/(apple) ?tv/i],
                    [f, [u, k + " TV"],
                        [d, y]
                    ],
                    [/crkey/i],
                    [
                        [u, T + "cast"],
                        [f, _],
                        [d, y]
                    ],
                    [/droid.+aft(\w+)( bui|\))/i],
                    [u, [f, S],
                        [d, y]
                    ],
                    [/(shield \w+ tv)/i],
                    [u, [f, R],
                        [d, y]
                    ],
                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                    [u, [f, U],
                        [d, y]
                    ],
                    [/(bravia[\w ]+)( bui|\))/i],
                    [u, [f, j],
                        [d, y]
                    ],
                    [/(mi(tv|box)-?\w+) bui/i],
                    [u, [f, V],
                        [d, y]
                    ],
                    [/Hbbtv.*(technisat) (.*);/i],
                    [f, u, [d, y]],
                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                    [
                        [f, X],
                        [u, X],
                        [d, y]
                    ],
                    [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
                    [u, [d, y]],
                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                    [
                        [d, y]
                    ],
                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                    [f, u, [d, g]],
                    [/droid.+; (shield)( bui|\))/i],
                    [u, [f, R],
                        [d, g]
                    ],
                    [/(playstation \w+)/i],
                    [u, [f, j],
                        [d, g]
                    ],
                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                    [u, [f, L],
                        [d, g]
                    ],
                    [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
                    [u, [f, F],
                        [d, v]
                    ],
                    [/((pebble))app/i, /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
                    [f, u, [d, v]],
                    [/(ow(?:19|20)?we?[1-3]{1,3})/i],
                    [u, [f, z],
                        [d, v]
                    ],
                    [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                    [u, [f, k],
                        [d, v]
                    ],
                    [/(opwwe\d{3})/i],
                    [u, [f, M],
                        [d, v]
                    ],
                    [/(moto 360)/i],
                    [u, [f, I],
                        [d, v]
                    ],
                    [/(smartwatch 3)/i],
                    [u, [f, j],
                        [d, v]
                    ],
                    [/(g watch r)/i],
                    [u, [f, A],
                        [d, v]
                    ],
                    [/droid.+; (wt63?0{2,3})\)/i],
                    [u, [f, H],
                        [d, v]
                    ],
                    [/droid.+; (glass) \d/i],
                    [u, [f, _],
                        [d, v]
                    ],
                    [/(pico) (4|neo3(?: link|pro)?)/i],
                    [f, u, [d, v]],
                    [/; (quest( \d| pro)?)/i],
                    [u, [f, B],
                        [d, v]
                    ],
                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                    [f, [d, w]],
                    [/(aeobc)\b/i],
                    [u, [f, S],
                        [d, w]
                    ],
                    [/(homepod).+mac os/i],
                    [u, [f, k],
                        [d, w]
                    ],
                    [/windows iot/i],
                    [
                        [d, w]
                    ],
                    [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                    [u, [d, m]],
                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                    [u, [d, b]],
                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                    [
                        [d, b]
                    ],
                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                    [
                        [d, m]
                    ],
                    [/droid .+?; ([\w\. -]+)( bui|\))/i],
                    [u, [f, "Generic"]]
                ],
                engine: [
                    [/windows.+ edge\/([\w\.]+)/i],
                    [p, [c, "EdgeHTML"]],
                    [/(arkweb)\/([\w\.]+)/i],
                    [c, p],
                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                    [p, [c, "Blink"]],
                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                    [c, p],
                    [/ladybird\//i],
                    [
                        [c, "LibWeb"]
                    ],
                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                    [p, c]
                ],
                os: [
                    [/microsoft (windows) (vista|xp)/i],
                    [c, p],
                    [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
                    [c, [p, Y, Z]],
                    [/windows nt 6\.2; (arm)/i, /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                    [
                        [p, Y, Z],
                        [c, "Windows"]
                    ],
                    [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                    [
                        [p, /_/g, "."],
                        [c, "iOS"]
                    ],
                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                    [
                        [c, W],
                        [p, /_/g, "."]
                    ],
                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                    [p, c],
                    [/(ubuntu) ([\w\.]+) like android/i],
                    [
                        [c, /(.+)/, "$1 Touch"], p
                    ],
                    [/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i],
                    [c, p],
                    [/\(bb(10);/i],
                    [p, [c, C]],
                    [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
                    [p, [c, "Symbian"]],
                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                    [p, [c, x + " OS"]],
                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                    [p, [c, "webOS"]],
                    [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                    [p, [c, "watchOS"]],
                    [/crkey\/([\d\.]+)/i],
                    [p, [c, T + "cast"]],
                    [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                    [
                        [c, $], p
                    ],
                    [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                    [c, p],
                    [/(sunos) ?([\w\.\d]*)/i],
                    [
                        [c, "Solaris"], p
                    ],
                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                    [c, p]
                ]
            },
            te = function(e, t) {
                if (typeof e === o && (t = e, e = r), !(this instanceof te)) return new te(e, t).getResult();
                var g = typeof n !== i && n.navigator ? n.navigator : r,
                    y = e || (g && g.userAgent ? g.userAgent : ""),
                    v = g && g.userAgentData ? g.userAgentData : r,
                    w = t ? function(e, t) {
                        var n = {};
                        for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                        return n
                    }(ee, t) : ee,
                    S = g && g.userAgent == y;
                return this.getBrowser = function() {
                    var e, t = {};
                    return t[c] = r, t[p] = r, J.call(t, y, w.browser), t[l] = typeof(e = t[p]) === s ? e.replace(/[^\d\.]/g, "").split(".")[0] : r, S && g && g.brave && typeof g.brave.isBrave == a && (t[c] = "Brave"), t
                }, this.getCPU = function() {
                    var e = {};
                    return e[h] = r, J.call(e, y, w.cpu), e
                }, this.getDevice = function() {
                    var e = {};
                    return e[f] = r, e[u] = r, e[d] = r, J.call(e, y, w.device), S && !e[d] && v && v.mobile && (e[d] = m), S && "Macintosh" == e[u] && g && typeof g.standalone !== i && g.maxTouchPoints && g.maxTouchPoints > 2 && (e[u] = "iPad", e[d] = b), e
                }, this.getEngine = function() {
                    var e = {};
                    return e[c] = r, e[p] = r, J.call(e, y, w.engine), e
                }, this.getOS = function() {
                    var e = {};
                    return e[c] = r, e[p] = r, J.call(e, y, w.os), S && !e[c] && v && v.platform && "Unknown" != v.platform && (e[c] = v.platform.replace(/chrome os/i, $).replace(/macos/i, W)), e
                }, this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }, this.getUA = function() {
                    return y
                }, this.setUA = function(e) {
                    return y = typeof e === s && e.length > 500 ? X(e, 500) : e, this
                }, this.setUA(y), this
            };
        te.VERSION = "1.0.41", te.BROWSER = q([c, p, l]), te.CPU = q([h]), te.DEVICE = q([u, f, d, g, m, y, b, v, w]), te.ENGINE = te.OS = q([c, p]), e.exports && (t = e.exports = te), t.UAParser = te;
        var ne = typeof n !== i && (n.jQuery || n.Zepto);
        if (ne && !ne.ua) {
            var re = new te;
            ne.ua = re.getResult(), ne.ua.get = function() {
                return re.getUA()
            }, ne.ua.set = function(e) {
                re.setUA(e);
                var t = re.getResult();
                for (var n in t) ne.ua[n] = t[n]
            }
        }
    }("object" == typeof window ? window : Xn)), Qn.exports;
    var e, t
}
var Yn = function() {
    if (qn) return Kn;
    qn = 1, Object.defineProperty(Kn, "__esModule", {
        value: !0
    });
    var e, t = w(),
        n = (e = t) && "object" == typeof e && "default" in e ? e.default : e,
        r = Jn(),
        a = new r,
        i = a.getBrowser(),
        o = a.getCPU(),
        s = a.getDevice(),
        l = a.getEngine(),
        u = a.getOS(),
        c = a.getUA(),
        d = function(e) {
            return a.setUA(e)
        },
        f = function(e) {
            if (e) {
                var t = new r(e);
                return {
                    UA: t,
                    browser: t.getBrowser(),
                    cpu: t.getCPU(),
                    device: t.getDevice(),
                    engine: t.getEngine(),
                    os: t.getOS(),
                    ua: t.getUA(),
                    setUserAgent: function(e) {
                        return t.setUA(e)
                    }
                }
            }
        },
        p = Object.freeze({
            ClientUAInstance: a,
            browser: i,
            cpu: o,
            device: s,
            engine: l,
            os: u,
            ua: c,
            setUa: d,
            parseUserAgent: f
        });

    function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, r)
        }
        return n
    }

    function g(e) {
        return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function m(e, t, n) {
        return t && function(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }(e.prototype, t), e
    }

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y() {
        return y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, y.apply(this, arguments)
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function k(e, t) {
        if (null == e) return {};
        var n, r, a = function(e, t) {
            if (null == e) return {};
            var n, r, a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
        }
        return a
    }

    function E(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function C(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, a, i = [],
                o = !0,
                s = !1;
            try {
                for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
            } catch (l) {
                s = !0, a = l
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
            return i
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return O(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var T = "mobile",
        x = "tablet",
        _ = "smarttv",
        N = "console",
        P = "wearable",
        A = "embedded",
        L = void 0,
        I = {
            Chrome: "Chrome",
            Firefox: "Firefox",
            Opera: "Opera",
            Yandex: "Yandex",
            Safari: "Safari",
            InternetExplorer: "Internet Explorer",
            Edge: "Edge",
            Chromium: "Chromium",
            Ie: "IE",
            MobileSafari: "Mobile Safari",
            EdgeChromium: "Edge Chromium",
            MIUI: "MIUI Browser",
            SamsungBrowser: "Samsung Browser"
        },
        R = {
            IOS: "iOS",
            Android: "Android",
            WindowsPhone: "Windows Phone",
            Windows: "Windows",
            MAC_OS: "Mac OS"
        },
        M = {
            isMobile: !1,
            isTablet: !1,
            isBrowser: !1,
            isSmartTV: !1,
            isConsole: !1,
            isWearable: !1
        },
        D = function(e) {
            return e || (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none")
        },
        z = function() {
            return !("undefined" == typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
        },
        F = function(e) {
            var t = z();
            return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
        },
        U = function(e, t, n, r) {
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(n), !0).forEach(function(t) {
                        b(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }({}, e, {
                vendor: D(t.vendor),
                model: D(t.model),
                os: D(n.name),
                osVersion: D(n.version),
                ua: D(r)
            })
        },
        j = function(e) {
            return e.type === T
        },
        V = function(e) {
            return e.type === x
        },
        H = function(e) {
            var t = e.type;
            return t === T || t === x
        },
        B = function(e) {
            return e.type === _
        },
        $ = function(e) {
            return e.type === L
        },
        W = function(e) {
            return e.type === P
        },
        G = function(e) {
            return e.type === N
        },
        q = function(e) {
            return e.type === A
        },
        K = function(e) {
            var t = e.vendor;
            return D(t)
        },
        Q = function(e) {
            var t = e.model;
            return D(t)
        },
        X = function(e) {
            var t = e.type;
            return D(t, "browser")
        },
        J = function(e) {
            return e.name === R.Android
        },
        Y = function(e) {
            return e.name === R.Windows
        },
        Z = function(e) {
            return e.name === R.MAC_OS
        },
        ee = function(e) {
            return e.name === R.WindowsPhone
        },
        te = function(e) {
            return e.name === R.IOS
        },
        ne = function(e) {
            var t = e.version;
            return D(t)
        },
        re = function(e) {
            var t = e.name;
            return D(t)
        },
        ae = function(e) {
            return e.name === I.Chrome
        },
        ie = function(e) {
            return e.name === I.Firefox
        },
        oe = function(e) {
            return e.name === I.Chromium
        },
        se = function(e) {
            return e.name === I.Edge
        },
        le = function(e) {
            return e.name === I.Yandex
        },
        ue = function(e) {
            var t = e.name;
            return t === I.Safari || t === I.MobileSafari
        },
        ce = function(e) {
            return e.name === I.MobileSafari
        },
        de = function(e) {
            return e.name === I.Opera
        },
        fe = function(e) {
            var t = e.name;
            return t === I.InternetExplorer || t === I.Ie
        },
        pe = function(e) {
            return e.name === I.MIUI
        },
        he = function(e) {
            return e.name === I.SamsungBrowser
        },
        ge = function(e) {
            var t = e.version;
            return D(t)
        },
        me = function(e) {
            var t = e.major;
            return D(t)
        },
        be = function(e) {
            var t = e.name;
            return D(t)
        },
        ye = function(e) {
            var t = e.name;
            return D(t)
        },
        ve = function(e) {
            var t = e.version;
            return D(t)
        },
        we = function() {
            var e = z(),
                t = e && e.userAgent && e.userAgent.toLowerCase();
            return "string" == typeof t && /electron/.test(t)
        },
        Se = function(e) {
            return "string" == typeof e && -1 !== e.indexOf("Edg/")
        },
        ke = function() {
            var e = z();
            return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
        },
        Ee = function() {
            return F("iPad")
        },
        Ce = function() {
            return F("iPhone")
        },
        Oe = function() {
            return F("iPod")
        },
        Te = function(e) {
            return D(e)
        };

    function xe(e) {
        var t = e || p,
            n = t.device,
            r = t.browser,
            a = t.os,
            i = t.engine,
            o = t.ua;
        return {
            isSmartTV: B(n),
            isConsole: G(n),
            isWearable: W(n),
            isEmbedded: q(n),
            isMobileSafari: ce(r) || Ee(),
            isChromium: oe(r),
            isMobile: H(n) || Ee(),
            isMobileOnly: j(n),
            isTablet: V(n) || Ee(),
            isBrowser: $(n),
            isDesktop: $(n),
            isAndroid: J(a),
            isWinPhone: ee(a),
            isIOS: te(a) || Ee(),
            isChrome: ae(r),
            isFirefox: ie(r),
            isSafari: ue(r),
            isOpera: de(r),
            isIE: fe(r),
            osVersion: ne(a),
            osName: re(a),
            fullBrowserVersion: ge(r),
            browserVersion: me(r),
            browserName: be(r),
            mobileVendor: K(n),
            mobileModel: Q(n),
            engineName: ye(i),
            engineVersion: ve(i),
            getUA: Te(o),
            isEdge: se(r) || Se(o),
            isYandex: le(r),
            deviceType: X(n),
            isIOS13: ke(),
            isIPad13: Ee(),
            isIPhone13: Ce(),
            isIPod13: Oe(),
            isElectron: we(),
            isEdgeChromium: Se(o),
            isLegacyEdge: se(r) && !Se(o),
            isWindows: Y(a),
            isMacOs: Z(a),
            isMIUI: pe(r),
            isSamsungBrowser: he(r)
        }
    }
    var _e = B(s),
        Ne = G(s),
        Pe = W(s),
        Ae = q(s),
        Le = ce(i) || Ee(),
        Ie = oe(i),
        Re = H(s) || Ee(),
        Me = j(s),
        De = V(s) || Ee(),
        ze = $(s),
        Fe = $(s),
        Ue = J(u),
        je = ee(u),
        Ve = te(u) || Ee(),
        He = ae(i),
        Be = ie(i),
        $e = ue(i),
        We = de(i),
        Ge = fe(i),
        qe = ne(u),
        Ke = re(u),
        Qe = ge(i),
        Xe = me(i),
        Je = be(i),
        Ye = K(s),
        Ze = Q(s),
        et = ye(l),
        tt = ve(l),
        nt = Te(c),
        rt = se(i) || Se(c),
        at = le(i),
        it = X(s),
        ot = ke(),
        st = Ee(),
        lt = Ce(),
        ut = Oe(),
        ct = we(),
        dt = Se(c),
        ft = se(i) && !Se(c),
        pt = Y(u),
        ht = Z(u),
        gt = pe(i),
        mt = he(i);

    function bt(e) {
        var t = e || window.navigator.userAgent;
        return f(t)
    }
    return Kn.AndroidView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return Ue ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.BrowserTypes = I, Kn.BrowserView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return ze ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.ConsoleView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return Ne ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.CustomView = function(e) {
        var r = e.renderWithFragment,
            a = e.children;
        e.viewClassName, e.style;
        var i = e.condition,
            o = k(e, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);
        return i ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", o, a) : null
    }, Kn.IEView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return Ge ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.IOSView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return Ve ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.MobileOnlyView = function(e) {
        var r = e.renderWithFragment,
            a = e.children;
        e.viewClassName, e.style;
        var i = k(e, ["renderWithFragment", "children", "viewClassName", "style"]);
        return Me ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.MobileView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return Re ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.OsTypes = R, Kn.SmartTVView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return _e ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.TabletView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return De ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.WearableView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return Pe ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.WinPhoneView = function(e) {
        var r = e.renderWithFragment,
            a = e.children,
            i = k(e, ["renderWithFragment", "children"]);
        return je ? r ? n.createElement(t.Fragment, null, a) : n.createElement("div", i, a) : null
    }, Kn.browserName = Je, Kn.browserVersion = Xe, Kn.deviceDetect = function(e) {
        var t = e ? f(e) : p,
            n = t.device,
            r = t.browser,
            a = t.engine,
            i = t.os,
            o = t.ua,
            s = function(e) {
                switch (e) {
                    case T:
                        return {
                            isMobile: !0
                        };
                    case x:
                        return {
                            isTablet: !0
                        };
                    case _:
                        return {
                            isSmartTV: !0
                        };
                    case N:
                        return {
                            isConsole: !0
                        };
                    case P:
                        return {
                            isWearable: !0
                        };
                    case L:
                        return {
                            isBrowser: !0
                        };
                    case A:
                        return {
                            isEmbedded: !0
                        };
                    default:
                        return M
                }
            }(n.type),
            l = s.isBrowser,
            u = s.isMobile,
            c = s.isTablet,
            d = s.isSmartTV,
            h = s.isConsole,
            g = s.isWearable,
            m = s.isEmbedded;
        return l ? function(e, t, n, r, a) {
            return {
                isBrowser: e,
                browserMajorVersion: D(t.major),
                browserFullVersion: D(t.version),
                browserName: D(t.name),
                engineName: D(n.name),
                engineVersion: D(n.version),
                osName: D(r.name),
                osVersion: D(r.version),
                userAgent: D(a)
            }
        }(l, r, a, i, o) : d ? function(e, t, n, r) {
            return {
                isSmartTV: e,
                engineName: D(t.name),
                engineVersion: D(t.version),
                osName: D(n.name),
                osVersion: D(n.version),
                userAgent: D(r)
            }
        }(d, a, i, o) : h ? function(e, t, n, r) {
            return {
                isConsole: e,
                engineName: D(t.name),
                engineVersion: D(t.version),
                osName: D(n.name),
                osVersion: D(n.version),
                userAgent: D(r)
            }
        }(h, a, i, o) : u || c ? U(s, n, i, o) : g ? function(e, t, n, r) {
            return {
                isWearable: e,
                engineName: D(t.name),
                engineVersion: D(t.version),
                osName: D(n.name),
                osVersion: D(n.version),
                userAgent: D(r)
            }
        }(g, a, i, o) : m ? function(e, t, n, r, a) {
            return {
                isEmbedded: e,
                vendor: D(t.vendor),
                model: D(t.model),
                engineName: D(n.name),
                engineVersion: D(n.version),
                osName: D(r.name),
                osVersion: D(r.version),
                userAgent: D(a)
            }
        }(m, n, a, i, o) : void 0
    }, Kn.deviceType = it, Kn.engineName = et, Kn.engineVersion = tt, Kn.fullBrowserVersion = Qe, Kn.getSelectorsByUserAgent = function(e) {
        if (e && "string" == typeof e) {
            var t = f(e);
            return xe({
                device: t.device,
                browser: t.browser,
                os: t.os,
                engine: t.engine,
                ua: t.ua
            })
        }
    }, Kn.getUA = nt, Kn.isAndroid = Ue, Kn.isBrowser = ze, Kn.isChrome = He, Kn.isChromium = Ie, Kn.isConsole = Ne, Kn.isDesktop = Fe, Kn.isEdge = rt, Kn.isEdgeChromium = dt, Kn.isElectron = ct, Kn.isEmbedded = Ae, Kn.isFirefox = Be, Kn.isIE = Ge, Kn.isIOS = Ve, Kn.isIOS13 = ot, Kn.isIPad13 = st, Kn.isIPhone13 = lt, Kn.isIPod13 = ut, Kn.isLegacyEdge = ft, Kn.isMIUI = gt, Kn.isMacOs = ht, Kn.isMobile = Re, Kn.isMobileOnly = Me, Kn.isMobileSafari = Le, Kn.isOpera = We, Kn.isSafari = $e, Kn.isSamsungBrowser = mt, Kn.isSmartTV = _e, Kn.isTablet = De, Kn.isWearable = Pe, Kn.isWinPhone = je, Kn.isWindows = pt, Kn.isYandex = at, Kn.mobileModel = Ze, Kn.mobileVendor = Ye, Kn.osName = Ke, Kn.osVersion = qe, Kn.parseUserAgent = f, Kn.setUserAgent = function(e) {
        return d(e)
    }, Kn.useDeviceData = bt, Kn.useDeviceSelectors = function(e) {
        var t = bt(e || window.navigator.userAgent);
        return [xe(t), t]
    }, Kn.useMobileOrientation = function() {
        var e = C(t.useState(function() {
                var e = window.innerWidth > window.innerHeight ? 90 : 0;
                return {
                    isPortrait: 0 === e,
                    isLandscape: 90 === e,
                    orientation: 0 === e ? "portrait" : "landscape"
                }
            }), 2),
            n = e[0],
            r = e[1],
            a = t.useCallback(function() {
                var e = window.innerWidth > window.innerHeight ? 90 : 0,
                    t = {
                        isPortrait: 0 === e,
                        isLandscape: 90 === e,
                        orientation: 0 === e ? "portrait" : "landscape"
                    };
                n.orientation !== t.orientation && r(t)
            }, [n.orientation]);
        return t.useEffect(function() {
            return void 0 !== ("undefined" == typeof window ? "undefined" : g(window)) && Re && (a(), window.addEventListener("load", a, !1), window.addEventListener("resize", a, !1)),
                function() {
                    window.removeEventListener("resize", a, !1), window.removeEventListener("load", a, !1)
                }
        }, [a]), n
    }, Kn.withOrientationChange = function(e) {
        return function(t) {
            function r(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, r), (t = function(e, t) {
                    if (t && ("object" == typeof t || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return E(e)
                }(this, v(r).call(this, e))).isEventListenerAdded = !1, t.handleOrientationChange = t.handleOrientationChange.bind(E(t)), t.onOrientationChange = t.onOrientationChange.bind(E(t)), t.onPageLoad = t.onPageLoad.bind(E(t)), t.state = {
                    isLandscape: !1,
                    isPortrait: !1
                }, t
            }
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && S(e, t)
            }(r, t), m(r, [{
                key: "handleOrientationChange",
                value: function() {
                    this.isEventListenerAdded || (this.isEventListenerAdded = !0);
                    var e = window.innerWidth > window.innerHeight ? 90 : 0;
                    this.setState({
                        isPortrait: 0 === e,
                        isLandscape: 90 === e
                    })
                }
            }, {
                key: "onOrientationChange",
                value: function() {
                    this.handleOrientationChange()
                }
            }, {
                key: "onPageLoad",
                value: function() {
                    this.handleOrientationChange()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    void 0 !== ("undefined" == typeof window ? "undefined" : g(window)) && Re && (this.isEventListenerAdded ? window.removeEventListener("load", this.onPageLoad, !1) : (this.handleOrientationChange(), window.addEventListener("load", this.onPageLoad, !1)), window.addEventListener("resize", this.onOrientationChange, !1))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.onOrientationChange, !1)
                }
            }, {
                key: "render",
                value: function() {
                    return n.createElement(e, y({}, this.props, {
                        isLandscape: this.state.isLandscape,
                        isPortrait: this.state.isPortrait
                    }))
                }
            }]), r
        }(n.Component)
    }, Kn
}();
const Zn = Ge,
    er = !!Zn || Yn.isMobile,
    tr = !Zn && Yn.isDesktop,
    nr = Yn.isAndroid,
    rr = Yn.isMobileSafari,
    ar = Yn.deviceDetect,
    ir = Yn.deviceType;
var or, sr = 500,
    lr = "user-agent",
    ur = "",
    cr = {
        FUNCTION: "function",
        OBJECT: "object",
        STRING: "string",
        UNDEFINED: "undefined"
    },
    dr = "browser",
    fr = "cpu",
    pr = "device",
    hr = "engine",
    gr = "os",
    mr = "result",
    br = "name",
    yr = "type",
    vr = "vendor",
    wr = "version",
    Sr = "architecture",
    kr = "major",
    Er = "model",
    Cr = "console",
    Or = "mobile",
    Tr = "tablet",
    xr = "smarttv",
    _r = "wearable",
    Nr = "xr",
    Pr = "embedded",
    Ar = "inapp",
    Lr = "brands",
    Ir = "formFactors",
    Rr = "fullVersionList",
    Mr = "platform",
    Dr = "platformVersion",
    zr = "bitness",
    Fr = "sec-ch-ua",
    Ur = Fr + "-full-version-list",
    jr = Fr + "-arch",
    Vr = Fr + "-" + zr,
    Hr = Fr + "-form-factors",
    Br = Fr + "-" + Or,
    $r = Fr + "-" + Er,
    Wr = Fr + "-" + Mr,
    Gr = Wr + "-version",
    qr = [Lr, Rr, Or, Er, Mr, Dr, Sr, Ir, zr],
    Kr = "Amazon",
    Qr = "Apple",
    Xr = "ASUS",
    Jr = "BlackBerry",
    Yr = "Google",
    Zr = "Huawei",
    ea = "Lenovo",
    ta = "Honor",
    na = "LG",
    ra = "Microsoft",
    aa = "Motorola",
    ia = "Nvidia",
    oa = "OnePlus",
    sa = "OPPO",
    la = "Samsung",
    ua = "Sharp",
    ca = "Sony",
    da = "Xiaomi",
    fa = "Zebra",
    pa = "Chrome",
    ha = "Chromium",
    ga = "Chromecast",
    ma = "Edge",
    ba = "Firefox",
    ya = "Opera",
    va = "Facebook",
    wa = "Sogou",
    Sa = "Mobile ",
    ka = " Browser",
    Ea = "Windows",
    Ca = typeof window !== cr.UNDEFINED && window.navigator ? window.navigator : void 0,
    Oa = Ca && Ca.userAgentData ? Ca.userAgentData : void 0,
    Ta = function(e, t) {
        var n = {},
            r = t;
        if (!Na(t))
            for (var a in r = {}, t)
                for (var i in t[a]) r[i] = t[a][i].concat(r[i] ? r[i] : []);
        for (var o in e) n[o] = r[o] && r[o].length % 2 == 0 ? r[o].concat(e[o]) : e[o];
        return n
    },
    xa = function(e) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
        return t
    },
    _a = function(e, t) {
        if (typeof e === cr.OBJECT && e.length > 0) {
            for (var n in e)
                if (La(t) == La(e[n])) return !0;
            return !1
        }
        return !!Pa(e) && La(t) == La(e)
    },
    Na = function(e, t) {
        for (var n in e) return /^(browser|cpu|device|engine|os)$/.test(n) || !!t && Na(e[n])
    },
    Pa = function(e) {
        return typeof e === cr.STRING
    },
    Aa = function(e) {
        if (e) {
            for (var t = [], n = Ma(/\\?\"/g, e).split(","), r = 0; r < n.length; r++)
                if (n[r].indexOf(";") > -1) {
                    var a = za(n[r]).split(";v=");
                    t[r] = {
                        brand: a[0],
                        version: a[1]
                    }
                } else t[r] = za(n[r]);
            return t
        }
    },
    La = function(e) {
        return Pa(e) ? e.toLowerCase() : e
    },
    Ia = function(e) {
        return Pa(e) ? Ma(/[^\d\.]/g, e).split(".")[0] : void 0
    },
    Ra = function(e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var n = e[t];
                typeof n == cr.OBJECT && 2 == n.length ? this[n[0]] = n[1] : this[n] = void 0
            }
        return this
    },
    Ma = function(e, t) {
        return Pa(t) ? t.replace(e, ur) : t
    },
    Da = function(e) {
        return Ma(/\\?\"/g, e)
    },
    za = function(e, t) {
        return e = Ma(/^\s\s*/, String(e)), typeof t === cr.UNDEFINED ? e : e.substring(0, t)
    },
    Fa = function(e, t) {
        if (e && t)
            for (var n, r, a, i, o, s, l = 0; l < t.length && !o;) {
                var u = t[l],
                    c = t[l + 1];
                for (n = r = 0; n < u.length && !o && u[n];)
                    if (o = u[n++].exec(e))
                        for (a = 0; a < c.length; a++) s = o[++r], typeof(i = c[a]) === cr.OBJECT && i.length > 0 ? 2 === i.length ? typeof i[1] == cr.FUNCTION ? this[i[0]] = i[1].call(this, s) : this[i[0]] = i[1] : i.length >= 3 && (typeof i[1] !== cr.FUNCTION || i[1].exec && i[1].test ? 3 == i.length ? this[i[0]] = s ? s.replace(i[1], i[2]) : void 0 : 4 == i.length ? this[i[0]] = s ? i[3].call(this, s.replace(i[1], i[2])) : void 0 : i.length > 4 && (this[i[0]] = s ? i[3].apply(this, [s.replace(i[1], i[2])].concat(i.slice(4))) : void 0) : i.length > 3 ? this[i[0]] = s ? i[1].apply(this, i.slice(2)) : void 0 : this[i[0]] = s ? i[1].call(this, s, i[2]) : void 0) : this[i] = s || void 0;
                l += 2
            }
    },
    Ua = function(e, t) {
        for (var n in t)
            if (typeof t[n] === cr.OBJECT && t[n].length > 0) {
                for (var r = 0; r < t[n].length; r++)
                    if (_a(t[n][r], e)) return "?" === n ? void 0 : n
            } else if (_a(t[n], e)) return "?" === n ? void 0 : n;
        return t.hasOwnProperty("*") ? t["*"] : e
    },
    ja = {
        ME: "4.90",
        "NT 3.51": "3.51",
        "NT 4.0": "4.0",
        2e3: ["5.0", "5.01"],
        XP: ["5.1", "5.2"],
        Vista: "6.0",
        7: "6.1",
        8: "6.2",
        8.1: "6.3",
        10: ["6.4", "10.0"],
        NT: ""
    },
    Va = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0
    },
    Ha = {
        Chrome: "Google Chrome",
        Edge: "Microsoft Edge",
        "Edge WebView2": "Microsoft Edge WebView2",
        "Chrome WebView": "Android WebView",
        "Chrome Headless": "HeadlessChrome",
        "Huawei Browser": "HuaweiBrowser",
        "MIUI Browser": "Miui Browser",
        "Opera Mobi": "OperaMobile",
        Yandex: "YaBrowser"
    },
    Ba = {
        browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [wr, [br, Sa + "Chrome"]],
            [/webview.+edge\/([\w\.]+)/i],
            [wr, [br, ma + " WebView"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [wr, [br, "Edge"]],
            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
            [br, wr],
            [/opios[\/ ]+([\w\.]+)/i],
            [wr, [br, ya + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [wr, [br, ya + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [wr, [br, ya]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [wr, [br, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [wr, [br, "Maxthon"]],
            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser|palemoon)\/([-\w\.]+)/i, /(heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i, /(qwant)(?:ios|mobile)\/([\d\.]+)/i, /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],
            [br, wr],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [wr, [br, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [wr, [br, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [wr, [br, "UCBrowser"]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [wr, [br, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [wr, [br, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [wr, [br, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [wr, [br, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [wr, [br, "Smart " + ea + ka]],
            [/(avast|avg)\/([\w\.]+)/i],
            [
                [br, /(.+)/, "$1 Secure" + ka], wr
            ],
            [/\bfocus\/([\w\.]+)/i],
            [wr, [br, ba + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [wr, [br, ya + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [wr, [br, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [wr, [br, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [wr, [br, ya + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [wr, [br, "MIUI" + ka]],
            [/fxios\/([\w\.-]+)/i],
            [wr, [br, Sa + ba]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [wr, [br, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [
                [br, /(.+)/, "$1Browser"], wr
            ],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [
                [br, /(.+)/, "$1" + ka], wr
            ],
            [/samsungbrowser\/([\w\.]+)/i],
            [wr, [br, la + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [wr, [br, wa + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [
                [br, wa + " Mobile"], wr
            ],
            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],
            [br, wr],
            [/(lbbrowser|rekonq|steam(?= (clie|tenf|gameo)))/i],
            [br],
            [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i],
            [wr, br],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [
                [br, va], wr, [yr, Ar]
            ],
            [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /(daum)apps[\/ ]([\w\.]+)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(bing)(?:web|sapphire)\/([\w\.]+)/i, /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],
            [br, wr, [yr, Ar]],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [wr, [br, "GSA"],
                [yr, Ar]
            ],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [wr, [br, "TikTok"],
                [yr, Ar]
            ],
            [/\[(linkedin)app\]/i],
            [br, [yr, Ar]],
            [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
            [
                [br, /(.+)/, "Zalo"], wr, [yr, Ar]
            ],
            [/(chromium)[\/ ]([-\w\.]+)/i],
            [br, wr],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [wr, [br, pa + " Headless"]],
            [/wv\).+chrome\/([\w\.]+).+edgw\//i],
            [wr, [br, ma + " WebView2"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [
                [br, pa + " WebView"], wr
            ],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [wr, [br, "Android" + ka]],
            [/chrome\/([\w\.]+) mobile/i],
            [wr, [br, Sa + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [br, wr],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [wr, [br, Sa + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [
                [br, Sa + "Safari"]
            ],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [wr, br],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [br, [wr, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [br, wr],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [
                [br, Sa + ba], wr
            ],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [
                [br, "Netscape"], wr
            ],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [br, wr],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [wr, [br, ba + " Reality"]],
            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i, /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i],
            [br, [wr, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [br, [wr, /[^\d\.]+./, ur]]
        ],
        cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [
                [Sr, "amd64"]
            ],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [
                [Sr, "ia32"]
            ],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [
                [Sr, "arm64"]
            ],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [
                [Sr, "armhf"]
            ],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [
                [Sr, "arm"]
            ],
            [/ sun4\w[;\)]/i],
            [
                [Sr, "sparc"]
            ],
            [/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i, /((ppc|powerpc)(64)?)( mac|;|\))/i, /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],
            [
                [Sr, /ower/, ur, La]
            ],
            [/mc680.0/i],
            [
                [Sr, "68k"]
            ],
            [/winnt.+\[axp/i],
            [
                [Sr, "alpha"]
            ]
        ],
        device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [Er, [vr, la],
                [yr, Tr]
            ],
            [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i, /sec-(sgh\w+)/i],
            [Er, [vr, la],
                [yr, Or]
            ],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
            [Er, [vr, Qr],
                [yr, Or]
            ],
            [/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
            [Er, [vr, Qr],
                [yr, Tr]
            ],
            [/(macintosh);/i],
            [Er, [vr, Qr]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [Er, [vr, ua],
                [yr, Or]
            ],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [Er, [vr, ta],
                [yr, Tr]
            ],
            [/honor([-\w ]+)[;\)]/i],
            [Er, [vr, ta],
                [yr, Or]
            ],
            [/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],
            [Er, [vr, Zr],
                [yr, Tr]
            ],
            [/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
            [Er, [vr, Zr],
                [yr, Or]
            ],
            [/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i, /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],
            [
                [Er, /_/g, " "],
                [vr, da],
                [yr, Tr]
            ],
            [/\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i, / ([\w ]+) miui\/v?\d/i],
            [
                [Er, /_/g, " "],
                [vr, da],
                [yr, Or]
            ],
            [/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
            [Er, [vr, oa],
                [yr, Or]
            ],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [Er, [vr, sa],
                [yr, Or]
            ],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [Er, [vr, Ua, {
                    OnePlus: ["203", "304", "403", "404", "413", "415"],
                    "*": sa
                }],
                [yr, Tr]
            ],
            [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
            [Er, [vr, "BLU"],
                [yr, Or]
            ],
            [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [Er, [vr, "Vivo"],
                [yr, Or]
            ],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [Er, [vr, "Realme"],
                [yr, Or]
            ],
            [/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i, /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],
            [Er, [vr, ea],
                [yr, Tr]
            ],
            [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
            [Er, [vr, ea],
                [yr, Or]
            ],
            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i, /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],
            [Er, [vr, aa],
                [yr, Or]
            ],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [Er, [vr, aa],
                [yr, Tr]
            ],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [Er, [vr, na],
                [yr, Tr]
            ],
            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i, /\blg-?([\d\w]+) bui/i],
            [Er, [vr, na],
                [yr, Or]
            ],
            [/(nokia) (t[12][01])/i],
            [vr, Er, [yr, Tr]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
            [
                [Er, /_/g, " "],
                [yr, Or],
                [vr, "Nokia"]
            ],
            [/(pixel (c|tablet))\b/i],
            [Er, [vr, Yr],
                [yr, Tr]
            ],
            [/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],
            [Er, [vr, Yr],
                [yr, Or]
            ],
            [/(google) (pixelbook( go)?)/i],
            [vr, Er],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [Er, [vr, ca],
                [yr, Or]
            ],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
                [Er, "Xperia Tablet"],
                [vr, ca],
                [yr, Tr]
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [Er, [vr, Kr],
                [yr, Tr]
            ],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
                [Er, /(.+)/g, "Fire Phone $1"],
                [vr, Kr],
                [yr, Or]
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [Er, vr, [yr, Tr]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
            [Er, [vr, Jr],
                [yr, Or]
            ],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [Er, [vr, Xr],
                [yr, Tr]
            ],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [Er, [vr, Xr],
                [yr, Or]
            ],
            [/(nexus 9)/i],
            [Er, [vr, "HTC"],
                [yr, Tr]
            ],
            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
            [vr, [Er, /_/g, " "],
                [yr, Or]
            ],
            [/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],
            [Er, [vr, "TCL"],
                [yr, Tr]
            ],
            [/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],
            [Er, [vr, "TCL"],
                [yr, Or]
            ],
            [/(itel) ((\w+))/i],
            [
                [vr, La], Er, [yr, Ua, {
                    tablet: ["p10001l", "w7001"],
                    "*": "mobile"
                }]
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [Er, [vr, "Acer"],
                [yr, Tr]
            ],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [Er, [vr, "Meizu"],
                [yr, Or]
            ],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [Er, [vr, "Ulefone"],
                [yr, Or]
            ],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [Er, [vr, "Energizer"],
                [yr, Or]
            ],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [Er, [vr, "Cat"],
                [yr, Or]
            ],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [Er, [vr, "Smartfren"],
                [yr, Or]
            ],
            [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
            [Er, [vr, "Nothing"],
                [yr, Or]
            ],
            [/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i, /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],
            [Er, [vr, "Archos"],
                [yr, Tr]
            ],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [Er, [vr, "Archos"],
                [yr, Or]
            ],
            [/; (n159v)/i],
            [Er, [vr, "HMD"],
                [yr, Or]
            ],
            [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
            [vr, Er, [yr, Tr]],
            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i, /(hp) ([\w ]+\w)/i, /(microsoft); (lumia[\w ]+)/i, /(oppo) ?([\w ]+) bui/i, /(hisense) ([ehv][\w ]+)\)/i, /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],
            [vr, Er, [yr, Or]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i],
            [vr, Er, [yr, Tr]],
            [/(surface duo)/i],
            [Er, [vr, ra],
                [yr, Tr]
            ],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [Er, [vr, "Fairphone"],
                [yr, Or]
            ],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [Er, [vr, ia],
                [yr, Tr]
            ],
            [/(sprint) (\w+)/i],
            [vr, Er, [yr, Or]],
            [/(kin\.[onetw]{3})/i],
            [
                [Er, /\./g, " "],
                [vr, ra],
                [yr, Or]
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [Er, [vr, fa],
                [yr, Tr]
            ],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [Er, [vr, fa],
                [yr, Or]
            ],
            [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
            [vr, [yr, xr]],
            [/hbbtv.+maple;(\d+)/i],
            [
                [Er, /^/, "SmartTV"],
                [vr, la],
                [yr, xr]
            ],
            [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
            [vr, Er, [yr, xr]],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
                [vr, na],
                [yr, xr]
            ],
            [/(apple) ?tv/i],
            [vr, [Er, Qr + " TV"],
                [yr, xr]
            ],
            [/crkey.*devicetype\/chromecast/i],
            [
                [Er, ga + " Third Generation"],
                [vr, Yr],
                [yr, xr]
            ],
            [/crkey.*devicetype\/([^/]*)/i],
            [
                [Er, /^/, "Chromecast "],
                [vr, Yr],
                [yr, xr]
            ],
            [/fuchsia.*crkey/i],
            [
                [Er, ga + " Nest Hub"],
                [vr, Yr],
                [yr, xr]
            ],
            [/crkey/i],
            [
                [Er, ga],
                [vr, Yr],
                [yr, xr]
            ],
            [/(portaltv)/i],
            [Er, [vr, va],
                [yr, xr]
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [Er, [vr, Kr],
                [yr, xr]
            ],
            [/(shield \w+ tv)/i],
            [Er, [vr, ia],
                [yr, xr]
            ],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [Er, [vr, ua],
                [yr, xr]
            ],
            [/(bravia[\w ]+)( bui|\))/i],
            [Er, [vr, ca],
                [yr, xr]
            ],
            [/(mi(tv|box)-?\w+) bui/i],
            [Er, [vr, da],
                [yr, xr]
            ],
            [/Hbbtv.*(technisat) (.*);/i],
            [vr, Er, [yr, xr]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
                [vr, /.+\/(\w+)/, "$1", Ua, {
                    LG: "lge"
                }],
                [Er, za],
                [yr, xr]
            ],
            [/(playstation \w+)/i],
            [Er, [vr, ca],
                [yr, Cr]
            ],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [Er, [vr, ra],
                [yr, Cr]
            ],
            [/(ouya)/i, /(nintendo) (\w+)/i, /(retroid) (pocket ([^\)]+))/i, /(valve).+(steam deck)/i, /droid.+; ((shield|rgcube|gr0006))( bui|\))/i],
            [
                [vr, Ua, {
                    Nvidia: "Shield",
                    Anbernic: "RGCUBE",
                    Logitech: "GR0006"
                }], Er, [yr, Cr]
            ],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [Er, [vr, la],
                [yr, _r]
            ],
            [/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [vr, Er, [yr, _r]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [Er, [vr, sa],
                [yr, _r]
            ],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [Er, [vr, Qr],
                [yr, _r]
            ],
            [/(opwwe\d{3})/i],
            [Er, [vr, oa],
                [yr, _r]
            ],
            [/(moto 360)/i],
            [Er, [vr, aa],
                [yr, _r]
            ],
            [/(smartwatch 3)/i],
            [Er, [vr, ca],
                [yr, _r]
            ],
            [/(g watch r)/i],
            [Er, [vr, na],
                [yr, _r]
            ],
            [/droid.+; (wt63?0{2,3})\)/i],
            [Er, [vr, fa],
                [yr, _r]
            ],
            [/droid.+; (glass) \d/i],
            [Er, [vr, Yr],
                [yr, Nr]
            ],
            [/(pico) ([\w ]+) os\d/i],
            [vr, Er, [yr, Nr]],
            [/(quest( \d| pro)?s?).+vr/i],
            [Er, [vr, va],
                [yr, Nr]
            ],
            [/mobile vr; rv.+firefox/i],
            [
                [yr, Nr]
            ],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [vr, [yr, Pr]],
            [/(aeobc)\b/i],
            [Er, [vr, Kr],
                [yr, Pr]
            ],
            [/(homepod).+mac os/i],
            [Er, [vr, Qr],
                [yr, Pr]
            ],
            [/windows iot/i],
            [
                [yr, Pr]
            ],
            [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
            [Er, [yr, xr]],
            [/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
            [
                [yr, xr]
            ],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
            [Er, [yr, Ua, {
                mobile: "Mobile",
                xr: "VR",
                "*": Tr
            }]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [
                [yr, Tr]
            ],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [
                [yr, Or]
            ],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [Er, [vr, "Generic"]]
        ],
        engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [wr, [br, ma + "HTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [br, wr],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [wr, [br, "Blink"]],
            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
            [br, wr],
            [/ladybird\//i],
            [
                [br, "LibWeb"]
            ],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [wr, br]
        ],
        os: [
            [/(windows nt) (6\.[23]); arm/i],
            [
                [br, /N/, "R"],
                [wr, Ua, ja]
            ],
            [/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i, /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],
            [br, wr],
            [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
            [
                [wr, /(;|\))/g, "", Ua, ja],
                [br, Ea]
            ],
            [/(windows ce)\/?([\d\.]*)/i],
            [br, wr],
            [/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i, /\btvos ?([\w\.]+)/i, /cfnetwork\/.+darwin/i],
            [
                [wr, /_/g, "."],
                [br, "iOS"]
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
            [
                [br, "macOS"],
                [wr, /_/g, "."]
            ],
            [/android ([\d\.]+).*crkey/i],
            [wr, [br, ga + " Android"]],
            [/fuchsia.*crkey\/([\d\.]+)/i],
            [wr, [br, ga + " Fuchsia"]],
            [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
            [wr, [br, ga + " SmartSpeaker"]],
            [/linux.*crkey\/([\d\.]+)/i],
            [wr, [br, ga + " Linux"]],
            [/crkey\/([\d\.]+)/i],
            [wr, [br, ga]],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [wr, br],
            [/(ubuntu) ([\w\.]+) like android/i],
            [
                [br, /(.+)/, "$1 Touch"], wr
            ],
            [/(harmonyos)[\/ ]?([\d\.]*)/i, /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],
            [br, wr],
            [/\(bb(10);/i],
            [wr, [br, Jr]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [wr, [br, "Symbian"]],
            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
            [wr, [br, ba + " OS"]],
            [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
            [wr, [br, "webOS"]],
            [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
            [
                [wr, Ua, {
                    25: "120",
                    24: "108",
                    23: "94",
                    22: "87",
                    6: "79",
                    5: "68",
                    4: "53",
                    3: "38",
                    2: "538",
                    1: "537",
                    "*": "TV"
                }],
                [br, "webOS"]
            ],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [wr, [br, "watchOS"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [
                [br, "Chrome OS"], wr
            ],
            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /(pico) .+os([\w\.]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /linux.+(mint)[\/\(\) ]?([\w\.]*)/i, /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /\b(aix)[; ]([1-9\.]{0,4})/i, /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) ?(r\d)?/i],
            [br, wr],
            [/(sunos) ?([\d\.]*)/i],
            [
                [br, "Solaris"], wr
            ],
            [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [br, wr]
        ]
    },
    $a = (or = {
        init: {},
        isIgnore: {},
        isIgnoreRgx: {},
        toString: {}
    }, Ra.call(or.init, [
        [dr, [br, wr, kr, yr]],
        [fr, [Sr]],
        [pr, [yr, Er, vr]],
        [hr, [br, wr]],
        [gr, [br, wr]]
    ]), Ra.call(or.isIgnore, [
        [dr, [wr, kr]],
        [hr, [wr]],
        [gr, [wr]]
    ]), Ra.call(or.isIgnoreRgx, [
        [dr, / ?browser$/i],
        [gr, / ?os$/i]
    ]), Ra.call(or.toString, [
        [dr, [br, wr]],
        [fr, [Sr]],
        [pr, [vr, Er]],
        [hr, [br, wr]],
        [gr, [br, wr]]
    ]), or),
    Wa = function(e, t) {
        var n = $a.init[t],
            r = $a.isIgnore[t] || 0,
            a = $a.isIgnoreRgx[t] || 0,
            i = $a.toString[t] || 0;

        function o() {
            Ra.call(this, n)
        }
        return o.prototype.getItem = function() {
            return e
        }, o.prototype.withClientHints = function() {
            return Oa ? Oa.getHighEntropyValues(qr).then(function(t) {
                return e.setCH(new Ga(t, !1)).parseCH().get()
            }) : e.parseCH().get()
        }, o.prototype.withFeatureCheck = function() {
            return e.detectFeature().get()
        }, t != mr && (o.prototype.is = function(e) {
            var t = !1;
            for (var n in this)
                if (this.hasOwnProperty(n) && !_a(r, n) && La(a ? Ma(a, this[n]) : this[n]) == La(a ? Ma(a, e) : e)) {
                    if (t = !0, e != cr.UNDEFINED) break
                } else if (e == cr.UNDEFINED && t) {
                t = !t;
                break
            }
            return t
        }, o.prototype.toString = function() {
            var e = ur;
            for (var t in i) typeof this[i[t]] !== cr.UNDEFINED && (e += (e ? " " : ur) + this[i[t]]);
            return e || cr.UNDEFINED
        }), o.prototype.then = function(e) {
            var t = this,
                n = function() {
                    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e])
                };
            n.prototype = {
                is: o.prototype.is,
                toString: o.prototype.toString,
                withClientHints: o.prototype.withClientHints,
                withFeatureCheck: o.prototype.withFeatureCheck
            };
            var r = new n;
            return e(r), r
        }, new o
    };

function Ga(e, t) {
    if (e = e || {}, Ra.call(this, qr), t) Ra.call(this, [
        [Lr, Aa(e[Fr])],
        [Rr, Aa(e[Ur])],
        [Or, /\?1/.test(e[Br])],
        [Er, Da(e[$r])],
        [Mr, Da(e[Wr])],
        [Dr, Da(e[Gr])],
        [Sr, Da(e[jr])],
        [Ir, Aa(e[Hr])],
        [zr, Da(e[Vr])]
    ]);
    else
        for (var n in e) this.hasOwnProperty(n) && typeof e[n] !== cr.UNDEFINED && (this[n] = e[n])
}

function qa(e, t, n, r) {
    return Ra.call(this, [
        ["itemType", e],
        ["ua", t],
        ["uaCH", r],
        ["rgxMap", n],
        ["data", Wa(this, e)]
    ]), this
}

function Ka(e, t, n) {
    if (typeof e === cr.OBJECT ? (Na(e, !0) ? (typeof t === cr.OBJECT && (n = t), t = e) : (n = e, t = void 0), e = void 0) : typeof e !== cr.STRING || Na(t, !0) || (n = t, t = void 0), n)
        if (typeof n.append === cr.FUNCTION) {
            var r = {};
            n.forEach(function(e, t) {
                r[String(t).toLowerCase()] = e
            }), n = r
        } else {
            var a = {};
            for (var i in n) n.hasOwnProperty(i) && (a[String(i).toLowerCase()] = n[i]);
            n = a
        }
    if (!(this instanceof Ka)) return new Ka(e, t, n).getResult();
    var o = typeof e === cr.STRING ? e : n && n[lr] ? n[lr] : Ca && Ca.userAgent ? Ca.userAgent : ur,
        s = new Ga(n, !0),
        l = t ? Ta(Ba, t) : Ba,
        u = function(e) {
            return e == mr ? function() {
                return new qa(e, o, l, s).set("ua", o).set(dr, this.getBrowser()).set(fr, this.getCPU()).set(pr, this.getDevice()).set(hr, this.getEngine()).set(gr, this.getOS()).get()
            } : function() {
                return new qa(e, o, l[e], s).parseUA().get()
            }
        };
    return Ra.call(this, [
        ["getBrowser", u(dr)],
        ["getCPU", u(fr)],
        ["getDevice", u(pr)],
        ["getEngine", u(hr)],
        ["getOS", u(gr)],
        ["getResult", u(mr)],
        ["getUA", function() {
            return o
        }],
        ["setUA", function(e) {
            return Pa(e) && (o = za(e, sr)), this
        }]
    ]).setUA(o), this
}

function Qa(e) {
    const t = new Ka("undefined" != typeof navigator ? navigator.userAgent : ""),
        n = t.getResult(),
        {
            browser: r,
            os: a,
            device: i,
            engine: o
        } = n,
        s = i.model ? ? "",
        l = i.vendor ? ? "";
    let u = i.type ? ? "";
    !u && r.name && (u = "desktop");
    const c = r.name ? ? "",
        d = r.version ? ? "",
        f = a.name ? ? "",
        p = a.version ? ? "",
        h = o.name ? ? "",
        g = o.version ? ? "",
        m = function() {
            const e = ar(window.navigator.userAgent);
            return {
                device: "mobile" === ir || "tablet" === ir || "embedded" === ir ? `${e.vendor} ${e.model}`.trim() : "",
                deviceType: "browser" === ir ? "desktop" : ir,
                browser: "browser" === ir ? `${e.browserName} ${e.browserFullVersion}`.trim() : "",
                os: `${e.osName} ${e.osVersion}`.trim(),
                engine: "mobile" !== ir ? `${e.engineName} ${e.engineVersion}`.trim() : "",
                userAgent: window.navigator.userAgent
            }
        }();
    return {
        schemaVersion: "1.0",
        deviceName: s,
        deviceVendor: l,
        deviceType: u,
        browserName: c,
        browserVersion: d,
        osName: f,
        osVersion: p,
        engineName: h,
        engineVersion: g,
        device: m.device,
        os: m.os,
        browser: m.browser,
        engine: m.engine,
        userAgent: t.getUA()
    }
}

function Xa() {
    return Li(Je, !1)
}

function Ja(e) {
    localStorage.setItem(Je, JSON.stringify(e))
}

function Ya(e) {
    localStorage.setItem("mss", JSON.stringify(e))
}

function Za() {
    const e = {
            clientId: "",
            sessionId: "",
            advertiserId: "",
            jwtToken: null,
            createdAt: "",
            isTestingSession: !1,
            features: "",
            expAssignmentContext: ""
        },
        t = Li(Xe, e);
    return t && Wn(t) ? t : e
}

function ei(e) {
    const t = Za();
    return t.sessionId && t.sessionId === e.sessionId && t.jwtToken ? .token === e.jwtToken ? .token && t.features === e.features && t.clientId === e.clientId ? t : (localStorage.setItem(Xe, JSON.stringify(e)), e)
}

function ti(e) {
    localStorage.setItem(Ye, JSON.stringify(e))
}
qa.prototype.get = function(e) {
    return e ? this.data.hasOwnProperty(e) ? this.data[e] : void 0 : this.data
}, qa.prototype.set = function(e, t) {
    return this.data[e] = t, this
}, qa.prototype.setCH = function(e) {
    return this.uaCH = e, this
}, qa.prototype.detectFeature = function() {
    if (Ca && Ca.userAgent == this.ua) switch (this.itemType) {
        case dr:
            Ca.brave && typeof Ca.brave.isBrave == cr.FUNCTION && this.set(br, "Brave");
            break;
        case pr:
            !this.get(yr) && Oa && Oa[Or] && this.set(yr, Or), "Macintosh" == this.get(Er) && Ca && typeof Ca.standalone !== cr.UNDEFINED && Ca.maxTouchPoints && Ca.maxTouchPoints > 2 && this.set(Er, "iPad").set(yr, Tr);
            break;
        case gr:
            !this.get(br) && Oa && Oa[Mr] && this.set(br, Oa[Mr]);
            break;
        case mr:
            var e = this.data,
                t = function(t) {
                    return e[t].getItem().detectFeature().get()
                };
            this.set(dr, t(dr)).set(fr, t(fr)).set(pr, t(pr)).set(hr, t(hr)).set(gr, t(gr))
    }
    return this
}, qa.prototype.parseUA = function() {
    switch (this.itemType != mr && Fa.call(this.data, this.ua, this.rgxMap), this.itemType) {
        case dr:
            this.set(kr, Ia(this.get(wr)));
            break;
        case gr:
            if ("iOS" == this.get(br) && "18.6" == this.get(wr)) {
                var e = /\) Version\/([\d\.]+)/.exec(this.ua);
                e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(wr, e[1])
            }
    }
    return this
}, qa.prototype.parseCH = function() {
    var e = this.uaCH,
        t = this.rgxMap;
    switch (this.itemType) {
        case dr:
        case hr:
            var n, r = e[Rr] || e[Lr];
            if (r)
                for (var a = 0; a < r.length; a++) {
                    var i = r[a].brand || r[a],
                        o = r[a].version;
                    this.itemType == dr && !/not.a.brand/i.test(i) && (!n || /Chrom/.test(n) && i != ha || n == ma && /WebView2/.test(i)) && (i = Ua(i, Ha), (n = this.get(br)) && !/Chrom/.test(n) && /Chrom/.test(i) || this.set(br, i).set(wr, o).set(kr, Ia(o)), n = i), this.itemType == hr && i == ha && this.set(wr, o)
                }
            break;
        case fr:
            var s = e[Sr];
            s && (s && "64" == e[zr] && (s += "64"), Fa.call(this.data, s + ";", t));
            break;
        case pr:
            if (e[Or] && this.set(yr, Or), e[Er] && (this.set(Er, e[Er]), !this.get(yr) || !this.get(vr))) {
                var l = {};
                Fa.call(l, "droid 9; " + e[Er] + ")", t), !this.get(yr) && l.type && this.set(yr, l.type), !this.get(vr) && l.vendor && this.set(vr, l.vendor)
            }
            if (e[Ir]) {
                var u;
                if ("string" != typeof e[Ir])
                    for (var c = 0; !u && c < e[Ir].length;) u = Ua(e[Ir][c++], Va);
                else u = Ua(e[Ir], Va);
                this.set(yr, u)
            }
            break;
        case gr:
            var d = e[Mr];
            if (d) {
                var f = e[Dr];
                d == Ea && (f = parseInt(Ia(f), 10) >= 13 ? "11" : "10"), this.set(br, d).set(wr, f)
            }
            this.get(br) == Ea && "Xbox" == e[Er] && this.set(br, "Xbox").set(wr, void 0);
            break;
        case mr:
            var p = this.data,
                h = function(t) {
                    return p[t].getItem().setCH(e).parseCH().get()
                };
            this.set(dr, h(dr)).set(fr, h(fr)).set(pr, h(pr)).set(hr, h(hr)).set(gr, h(gr))
    }
    return this
}, Ka.VERSION = "2.0.7", Ka.BROWSER = xa([br, wr, kr, yr]), Ka.CPU = xa([Sr]), Ka.DEVICE = xa([Er, vr, yr, Cr, Or, xr, Tr, _r, Pr]), Ka.ENGINE = Ka.OS = xa([br, wr]);
const ni = 864e5;

function ri() {
    const e = Li(Ke, null);
    if (!e) return null;
    const t = localStorage.getItem(lt),
        n = t ? Number(t) : 0;
    return !Number.isFinite(n) || Date.now() - n > ni ? null : e
}

function ai() {
    if (!Li(Ke, null)) return !1;
    const e = localStorage.getItem(lt),
        t = e ? Number(e) : 0;
    return Number.isFinite(t) && Date.now() - t <= ni
}

function ii(e) {
    localStorage.setItem(Ke, JSON.stringify(e)), localStorage.setItem(lt, Date.now().toString())
}

function oi() {
    var e = Ai("cid");
    return e || (e = crypto.randomUUID(), localStorage.setItem("cid", e)), e
}

function si() {
    return Li(Qe, [])
}

function li(e) {
    localStorage.setItem(Qe, JSON.stringify(e))
}

function ui() {
    return Li(ot, [])
}

function ci(e) {
    localStorage.setItem(ot, JSON.stringify(e))
}

function di() {
    localStorage.removeItem(ot)
}

function fi(e) {
    const t = Li(nt, []);
    t.find(t => t.ProductId === e.ProductId) || (t.push(e), localStorage.setItem(nt, JSON.stringify(t)))
}

function pi() {
    return Li(nt, [])
}

function hi() {
    return Li("cs", null)
}

function gi(e) {
    localStorage.setItem("cs", JSON.stringify(e))
}

function mi() {
    localStorage.setItem("fs", "1")
}

function bi() {
    const e = Li("uas", null);
    if (!e || !e.schemaVersion || "1.0" !== e.schemaVersion) {
        const e = Qa();
        return localStorage.setItem("uas", JSON.stringify(e)), e
    }
    return e
}

function yi() {
    const e = localStorage.getItem(tt);
    return e ? Number(e) : 0
}

function vi() {
    localStorage.setItem(tt, Date.now().toString())
}

function wi(e) {
    localStorage.setItem(it, e)
}

function Si() {
    localStorage.removeItem(it)
}

function ki(e, t, n) {
    let r = {};
    const a = Ai(rt);
    try {
        r = "" === a ? {} : JSON.parse(a)
    } catch (i) {
        r = {}
    }
    r[e] = {
        timeShown: Date.now(),
        scope: t,
        pageType: n
    }, localStorage.setItem(rt, JSON.stringify(r))
}

function Ei(e) {
    let t = {};
    const n = Ai(rt);
    try {
        t = "" === n ? {} : JSON.parse(n)
    } catch (r) {
        t = {}
    }
    return t[e] || null
}

function Ci(e) {
    const t = e.indexOf("@");
    return t <= 0 ? "****" : e[0] + "****" + e.slice(t)
}

function Oi() {
    return Li(st, {})
}

function Ti(e, t, n) {
    const r = Oi();
    var a;
    r[e] = {
        email: Ci(t),
        orderNumber: (a = n, a.length <= 1 ? "****" : a[0] + "*".repeat(Math.min(a.length - 1, 8)))
    };
    const i = Object.keys(r);
    if (i.length > 20)
        for (const o of i.slice(0, i.length - 20)) delete r[o];
    localStorage.setItem(st, JSON.stringify(r))
}

function xi() {
    const e = localStorage.getItem(at);
    if (e) {
        const t = Number(e);
        if (Date.now() - t < 3e4) return !1
    }
    return localStorage.setItem(at, Date.now().toString()), !0
}

function _i() {
    localStorage.removeItem(at)
}

function Ni() {
    return !! function() {
        const e = new URLSearchParams(window.location.search).get("setflight");
        return !!e && e.split(",").some(e => "aichat" === e.trim().toLowerCase())
    }() && ("1" !== sessionStorage.getItem("tci") && (localStorage.removeItem(Ye), sessionStorage.setItem("tci", "1"), !0))
}

function Pi() {
    localStorage.removeItem(Xe), localStorage.removeItem(Qe), localStorage.removeItem(Je), localStorage.removeItem("lnss"), localStorage.removeItem(Ze), localStorage.removeItem(et), localStorage.removeItem(tt), localStorage.removeItem(nt), localStorage.removeItem(rt), localStorage.removeItem(at), localStorage.removeItem(st)
}

function Ai(e) {
    return localStorage.getItem(e) || ""
}

function Li(e, t) {
    const n = Ai(e);
    try {
        return "" === n ? t : JSON.parse(n)
    } catch (r) {
        return t
    }
}
const Ii = pe(si()),
    Ri = pe(!1),
    Mi = pe(null),
    Di = pe(null),
    zi = pe(!1),
    Fi = pe(0),
    Ui = pe([]),
    ji = pe(null),
    Vi = pe(!1),
    Hi = pe(!1),
    Bi = pe(!1),
    $i = pe(!1),
    Wi = pe(Za()),
    Gi = pe(!1),
    qi = pe(!1),
    Ki = pe(Li(Ye, null)),
    Qi = pe(Ai("fs")),
    Xi = pe(!1),
    Ji = pe(!1),
    Yi = pe(!1),
    Zi = pe(localStorage.getItem(it) || null);
var eo = (e => (e.Home = "Home", e.Product = "Product", e.Query = "Query", e.Collection = "Collection", e.Unknown = "Unknown", e))(eo || {});
const to = pe(null),
    no = pe(ri()),
    ro = pe(null),
    ao = pe(null),
    io = pe([]),
    oo = pe(null),
    so = pe([]),
    lo = pe(null),
    uo = pe(null),
    co = pe({
        PageType: eo.Unknown
    }),
    fo = pe(null),
    po = pe(null),
    ho = pe({}),
    go = pe(null),
    mo = pe({
        visitedCategories: [],
        exploredGenders: []
    }),
    bo = pe(null),
    yo = pe(0),
    vo = pe(!1),
    wo = pe(!0),
    So = pe(0),
    ko = pe(!1),
    Eo = pe(!1);
pe(!1);
const Co = pe(null),
    Oo = pe(!1),
    To = pe(new Map),
    xo = pe(new Set),
    _o = pe(!1),
    No = pe(null),
    Po = pe("idle"),
    Ao = pe(null),
    Lo = pe(null),
    Io = {
        UserMessageSent: "UserMessageSent",
        AgentMessageSent: "AgentMessageSent",
        ConversationStarted: "AgentConversationStarted",
        ChatClosed: "AgentChatClosed",
        SuggestionClick: "AgentSuggestionClick",
        EntrypointClick: "AgentEntrypointClick",
        BubbleShown: "AgentBubbleShown",
        NudgeShown: "AgentNudgeShown",
        Active: "AgentActive",
        LivePreview: "AgentLivePreview"
    };

function Ro(e) {
    return `Agent${e}Click`
}
const Mo = "agent_chat_segment_end";
const Do = {
    Crash: "crash",
    Error: "error",
    Feedback: "feedback",
    AgentEntrypoint: "agent_entrypoint",
    AgentTutorial: "agent_tutorial",
    AgentPreview: "agent_preview"
};
let zo = null;

function Fo() {
    zo = null
}

function Uo() {
    const e = Date.now();
    zo = zo ? { ...zo,
        lastMessageTime: e
    } : {
        firstMessageTime: e,
        lastMessageTime: e
    }
}

function jo() {
    Uo(), vn(Io.UserMessageSent)
}

function Vo() {
    if (null !== zo) {
        const e = zo.lastMessageTime - zo.firstMessageTime;
        e > 0 && vn(function({
            durationMs: e
        }) {
            return [Mo, `duration_ms:${e}`].join(",")
        }({
            durationMs: e
        }))
    }
    Fo()
}
let Ho = null,
    Bo = !1;

function $o() {
    Bo || (Ho = function() {
        const e = localStorage.getItem(Ze);
        return e ? Number(e) : 0
    }(), Bo = !0)
}

function Wo() {
    Ho = null, Bo = !1, Fo()
}

function Go() {
    Vo();
    const e = crypto.randomUUID();
    var t;
    return t = e, localStorage.setItem(et, t), window.dispatchEvent(new Event(gt)), vn(Io.ConversationStarted), e
}

function qo() {
    $o(), (null === Ho || 0 === Ho || Date.now() - Ho >= 18e5) && Go(), Ho = Date.now(), localStorage.setItem(Ze, Date.now().toString())
}
const Ko = new Set([ze.AgentMessage, ze.EntrypointNudgeClick, ze.EntrypointClick, ze.ClarityNudgeClick]),
    Qo = new Set([ze.BubbleShown, ze.NudgeShown, ze.EntrypointClick, ze.EntrypointNudgeClick, ze.CheckoutRedirect, ze.EntrypointNudgeToCheckoutRedirect, De.AddToCart, De.BackButton, De.PdpRedirect]);

function Xo(e) {
    switch (e.errorEventType) {
        case je.TotalCrash:
            yn(Do.Crash, "fullpage");
            break;
        case je.AddToCartButton:
            yn(Do.Crash, "addToCart");
            break;
        case je.ServerError:
            yn(Do.Error, e.errorMessage.substring(0, 100))
    }
    return {
        namespace: Re.AdsAIAgentClient,
        metric: Me.Error,
        dimensions: { ...e,
            errorCode: String(e.errorCode)
        }
    }
}

function Jo(e) {
    switch (qo(), e.chatClickType) {
        case De.BackButton:
            window.dispatchEvent(new CustomEvent("brandagent:dismissed")), Vo(), vn(Io.ChatClosed);
            break;
        case De.Feedback:
            yn(Do.Feedback, e.metadata.action);
            break;
        case De.Suggestions:
            wn("SuggestionClicked"), vn(Io.SuggestionClick);
            break;
        case De.AddToCart:
            void 0 !== e.metadata.success && vn(Ro(e.chatClickType));
            break;
        default:
            vn(Ro(e.chatClickType))
    }
    return {
        namespace: Re.AdsAIAgentClient,
        metric: Me.ChatClick,
        dimensions: e,
        isCriticalEvent: Qo.has(e.chatClickType)
    }
}

function Yo(e) {
    switch (Ko.has(e.uiEventType) && qo(), e.uiEventType) {
        case ze.AgentMessage:
            Uo(), vn(Io.AgentMessageSent);
            break;
        case ze.BubbleShown:
            yn(Do.AgentEntrypoint, e.metadata.PageType), vn(Io.BubbleShown);
            break;
        case ze.NudgeShown:
            vn(Io.NudgeShown);
            break;
        case ze.EntrypointNudgeClick:
        case ze.ClarityNudgeClick:
        case ze.EntrypointClick:
            window.dispatchEvent(new CustomEvent("brandagent:shown")), Vo(), vn(Io.EntrypointClick);
            break;
        case ze.UserMessage:
            wn("UserMessage")
    }
    return {
        namespace: Re.AdsAIAgentClient,
        metric: Me.UIEvent,
        dimensions: e,
        isCriticalEvent: Qo.has(e.uiEventType)
    }
}

function Zo(e) {
    return {
        namespace: Re.AdsAIAgentClient,
        metric: Me.SSE,
        dimensions: e
    }
}

function es(e) {
    return {
        namespace: Re.AdsAIAgentClient,
        metric: Me.Performance,
        dimensions: e
    }
}

function ts(e) {
    return {
        namespace: Re.AdsAIAgentClient,
        metric: Me.Debug,
        dimensions: e
    }
}

function ns() {
    return He + "/sessiondata/setSessionData"
}

function rs() {
    return He + "/api/v1/chat"
}

function as() {
    return He + "/api/v1/action"
}

function is() {
    const e = window.location.search,
        t = new URLSearchParams(window.location.search).get("domain");
    let n;
    if (We) {
        if (t) return n = `https://${t}/a/msba`, n + `/api/v1/init${e}`;
        n = He
    } else n = `https://${window.location.hostname}/a/msba`;
    return n + `/api/v1/init${e}`
}

function os(e, t, n, r, a, i, o, s, l) {
    const u = new URL(e);
    return u.searchParams.set("domain", a), t && u.searchParams.set("cartId", t), n && u.searchParams.set("currency", n), r && u.searchParams.set("country", r), u.searchParams.set("userAgentInformation", JSON.stringify(i)), us(u, s), o.features && u.searchParams.set("features", o.features), o.expAssignmentContext && u.searchParams.set("expAssignmentContext", o.expAssignmentContext), l && u.searchParams.set("landingPageInformation", JSON.stringify(l)), u.toString()
}
async function ss(e, t, n, r, a, i, o, s) {
    const l = new URL(e);
    n && l.searchParams.set("jwt", n);
    const u = new URLSearchParams(window.location.search),
        c = u.get("setflight");
    c && l.searchParams.set("setflight", c);
    const d = u.get("env");
    d && l.searchParams.set("env", d), l.searchParams.set("clientId", r), l.searchParams.set("query", t), l.searchParams.set("author", i), l.searchParams.set("eventTimestamp", (new Date).toISOString());
    const f = an();
    f && l.searchParams.set("countryCode", f);
    const p = on();
    p && l.searchParams.set("currencyCode", p);
    const h = await un(r, a, o);
    l.searchParams.set("clientInformation", JSON.stringify(h)), s && Object.keys(s).length > 0 && l.searchParams.set("metadata", JSON.stringify(s));
    return us(l, sn()), l.toString()
}
async function ls(e, t, n) {
    const r = new URL(function(e) {
        const t = window.location.search;
        return (e ? .token ? He : `https://${window.location.hostname}/a/msba`) + `/api/config/read${t}`
    }(e));
    r.searchParams.delete("adid"), r.searchParams.set("clientId", oi()), r.searchParams.set("lang", sn());
    const a = an();
    a && r.searchParams.set("countryCode", a);
    const i = on();
    i && r.searchParams.set("currencyCode", i);
    const o = await un(t, n);
    return r.searchParams.set("clientInformation", JSON.stringify(o)), e ? .token && r.searchParams.set("jwt", e.token), r.toString()
}

function us(e, t) {
    t && e.searchParams.set("lang", t)
}
var cs = (e => (e.CLOSE = "Close", e.ERROR = "Error", e.EVENTSOURCE_ERROR = "EventSourceError", e.VERBAL_RESPONSE = "VerbalResponseData", e.EMPTY = "Empty", e.SESSION_INFO = "SessionInfo", e.ADVERTISER_DATA = "AdvertiserData", e.ENTRYPOINT_DATA = "EntrypointData", e.ADD_TO_CART = "AddToCart", e.FEEDBACK_DATA = "FeedbackData", e.CLEAR_RESPONSE_STREAM = "ClearResponseStream", e.KILL_COMMAND = "KillCommand", e.CHECKOUT = "Checkout", e.VIEW_CART = "ViewCart", e.CHAT_LAYOUT_DATA = "ChatLayoutData", e.VARIANT_INFO = "VariantInfo", e.CART_CHANGE = "CartChange", e.OFFLINE_NUDGES = "OfflineNudges", e.ORDER_FORM_STATUS = "OrderFormStatus", e.SSE_OPEN = "Open", e.REDIRECT_NUDGE_DATA = "RedirectNudge", e.ROTATING_NUDGES = "RotatingNudges", e.PRE_MESSAGE_METADATA = "PreMessageMetadata", e))(cs || {}),
    ds = (e => (e.Question = "question", e.Highlight = "highlight", e.Comparison = "comparison", e))(ds || {});

function fs(e) {
    try {
        const t = function(e) {
            if (Array.isArray(e)) return e;
            if (e && "object" == typeof e && Array.isArray(e.nudges)) return e.nudges;
            return []
        }(JSON.parse(e));
        return t.map(e => function(e) {
            const t = "string" == typeof e.text ? e.text.trim() : "",
                n = function(e, t) {
                    if ("string" == typeof e.chat_request_text) return e.chat_request_text;
                    if ("string" == typeof e.chatRequestText) return e.chatRequestText;
                    return t
                }(e, t),
                r = "string" == typeof e.type ? function(e) {
                    switch (e.trim().toLowerCase()) {
                        case ds.Question:
                            return ds.Question;
                        case ds.Highlight:
                            return ds.Highlight;
                        case ds.Comparison:
                            return ds.Comparison;
                        default:
                            return ds.Question
                    }
                }(e.type) : ds.Question,
                a = "number" == typeof e.priority ? e.priority : Number(e.priority ? ? Number.MAX_SAFE_INTEGER);
            return {
                text: t,
                type: r,
                chatRequestText: n,
                priority: Number.isFinite(a) ? a : Number.MAX_SAFE_INTEGER
            }
        }(e)).filter(e => "" !== e.text)
    } catch (t) {
        return []
    }
}
var ps = (e => (e.PRODUCT_CLICK = "ProductClick", e.ADD_TO_CART_API = "AddToCartApi", e.ADD_TO_CART = "AddToCart", e.CONTEXT = "Context", e.INITIALIZATION = "Initialization", e.ADVERTISER_DATA = "AdvertiserData", e.SUGGESTION_CLICK = "SuggestionClick", e.SELECTABLE_CHIP_SUBMIT = "SelectableChipSubmit", e.ENTRYPOINT_CLICK = "EntrypointClick", e.WELCOME_MESSAGE = "WelcomeMessage", e.COLLECTION_CLICK = "CollectionClick", e.ORDER_FORM_SUBMIT = "OrderFormSubmit", e))(ps || {}),
    hs = (e => (e.Pill = "Pill", e.Bubble = "Bubble", e.Tag = "Tag", e))(hs || {}),
    gs = (e => (e.CallChatEndpoint = "CallChatEndpoint", e.CallActionEndpoint = "CallActionEndpoint", e.OpenCheckoutPage = "OpenCheckoutPage", e))(gs || {});
let ms = null,
    bs = 0,
    ys = "",
    vs = !1,
    ws = [];

function Ss() {
    return null !== ms
}

function ks(e) {
    null === ms ? e() : ws.push(e)
}

function Es() {
    ms ? .close(), ms = null, bs = 0, ys = "", vs = !1;
    const e = ws;
    ws = [], e.forEach(e => {
        try {
            e()
        } catch (t) {}
    })
}

function Cs(e) {
    let t = () => {};
    return new Promise(n => {
        n({
            disconnect: () => {
                Es(), t({
                    event: cs.CLOSE
                })
            },
            sendMessage: async n => {
                const {
                    type: r,
                    sessionInfo: a,
                    sendTelemetry: i,
                    baseTelemetryFields: o
                } = n, s = a.jwtToken ? .token ? ? "";
                let l = "",
                    u = !0,
                    c = null;
                switch (r) {
                    case "stop":
                        Es(), t({
                            event: cs.CLOSE
                        }), u = !1;
                        break;
                    case "chat":
                        {
                            const {
                                message: r,
                                displayMessage: i,
                                mode: o,
                                muid: u,
                                metadata: c,
                                author: d
                            } = n;
                            "explicit" === o && t({
                                event: cs.VERBAL_RESPONSE,
                                message: i || r,
                                displayMessage: i,
                                author: "user"
                            }),
                            l = await ss(e, r, s, a.clientId, a.sessionId, d, u, c);
                            break
                        }
                    case "authorization":
                        {
                            const {
                                sessionInfo: t
                            } = n;l = await async function(e, t) {
                                const n = new URL(e);
                                if (We) {
                                    n.searchParams.set("mcp", Ge ? "upsell" : "preview");
                                    const e = n.searchParams.get("adid");
                                    e && n.searchParams.set("shop", e)
                                }
                                n.searchParams.delete("adid"), t.sessionId && Wn(t) && n.searchParams.set("sessionId", t.sessionId), n.searchParams.set("clientId", oi()), n.searchParams.set("lang", sn());
                                const r = an();
                                r && n.searchParams.set("countryCode", r);
                                const a = on();
                                a && n.searchParams.set("currencyCode", a);
                                const i = await un(t.clientId, t.sessionId);
                                return n.searchParams.set("clientInformation", JSON.stringify(i)), t.jwtToken && Wn(t) && n.searchParams.set("jwt", t.jwtToken.token), n.toString()
                            }(e, t);
                            break
                        }
                    case "action":
                        {
                            const {
                                request: t,
                                action: r,
                                muid: i,
                                metadata: o
                            } = n;
                            let d = null;c = r;
                            let f = "ui";
                            switch (r) {
                                case ps.SUGGESTION_CLICK:
                                    d = t.Prompt, f = "suggestionChips";
                                    break;
                                case ps.SELECTABLE_CHIP_SUBMIT:
                                    d = t.Prompt, f = "selectableChip";
                                    break;
                                case ps.ENTRYPOINT_CLICK:
                                    t.ActionToTake === gs.CallChatEndpoint && (d = t.AgentMessage), f = "nudge";
                                    break;
                                case ps.COLLECTION_CLICK:
                                    f = "collectionChips";
                                    break;
                                case ps.ADD_TO_CART:
                                    f = t.Author ? ? "ui";
                                    break;
                                case ps.PRODUCT_CLICK:
                                    f = "ui";
                                    break;
                                case ps.ORDER_FORM_SUBMIT:
                                case ps.CONTEXT:
                                case ps.INITIALIZATION:
                                case ps.ADVERTISER_DATA:
                                case ps.WELCOME_MESSAGE:
                                    break;
                                case ps.ADD_TO_CART_API:
                                default:
                                    u = !1
                            }
                            l = d ? await ss(e, d, s, a.clientId, a.sessionId, f, i, o) : await async function(e, t, n, r, a, i, o, s, l) {
                                const u = new URL(e);
                                u.searchParams.delete("adid"), r && u.searchParams.set("jwt", r);
                                const c = new URLSearchParams(window.location.search),
                                    d = c.get("setflight");
                                d && u.searchParams.set("setflight", d);
                                const f = c.get("env");
                                f && u.searchParams.set("env", f), u.searchParams.set("parameters", JSON.stringify(t)), u.searchParams.set("actionType", n), u.searchParams.set("author", o), u.searchParams.set("eventTimestamp", (new Date).toISOString()), u.searchParams.set("clientId", a);
                                const p = an();
                                p && u.searchParams.set("countryCode", p);
                                const h = on();
                                h && u.searchParams.set("currencyCode", h);
                                const g = await un(a, i, s);
                                return u.searchParams.set("clientInformation", JSON.stringify(g)), l && Object.keys(l).length > 0 && u.searchParams.set("metadata", JSON.stringify(l)), us(u, sn()), u.toString()
                            }(e, t, r, s, a.clientId, a.sessionId, f, i, o);
                            break
                        }
                }
                if (u) {
                    (ys !== l || null === ms) && (bs = 0, vs = !1, ys = l), Es(), ms = new EventSource(l), t({
                        event: cs.SSE_OPEN
                    }), ms.onerror = e => {
                        if (bs++, bs >= 3) return Es(), t({
                            event: cs.EVENTSOURCE_ERROR,
                            errorMessage: "EventSource max retries exceeded",
                            errorCode: "MAX_RETRIES"
                        }), t({
                            event: cs.CLOSE
                        }), void(o && i && i(Yo({
                            baseFields: o,
                            uiEventType: ze.EventSourceRetry,
                            metadata: {
                                retryCount: bs,
                                type: r,
                                action: c ? ? "N/A",
                                reason: "MAX_RETRIES"
                            }
                        })));
                        try {
                            ms ? .readyState === EventSource.CLOSED && fetch(e.target ? .url).then(e => {
                                t({
                                    event: cs.EVENTSOURCE_ERROR,
                                    errorMessage: "EventSource failed",
                                    errorCode: e.status.toString()
                                })
                            }).catch(() => {
                                t({
                                    event: cs.EVENTSOURCE_ERROR,
                                    errorMessage: "EventSource failed"
                                })
                            })
                        } catch {
                            t({
                                event: cs.EVENTSOURCE_ERROR,
                                errorMessage: "EventSource failed"
                            })
                        }
                        o && i && i(Yo({
                            baseFields: o,
                            uiEventType: ze.EventSourceRetry,
                            metadata: {
                                retryCount: bs,
                                type: r,
                                action: c ? ? "N/A"
                            }
                        }))
                    }, ms.onmessage = e => {
                        vs = !0, bs = 0
                    }, ms.addEventListener(cs.SESSION_INFO, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.SESSION_INFO,
                            clientId: n.ClientId,
                            sessionId: n.SessionId,
                            jwtToken: {
                                token: n.JwtToken,
                                expiresAt: n.JwtTokenExpiresAt
                            },
                            createdAt: n.CreatedAt,
                            advertiserId: n.AdvertiserId,
                            features: n.Features ? ? "",
                            expAssignmentContext: n.ExPAssignmentContext ? ? "",
                            isTestingSession: n.IsInternalTestingSession ? ? !1
                        }), vs = !0, bs = 0
                    }), ms.addEventListener(cs.CLOSE, () => {
                        t({
                            event: cs.CLOSE,
                            action: c
                        }), Es()
                    }), ms.addEventListener(cs.FEEDBACK_DATA, e => {
                        try {
                            const n = JSON.parse(e.data);
                            t({
                                event: cs.FEEDBACK_DATA,
                                message: n.message,
                                feedbackState: n.feedbackState ? ? "none",
                                author: "feedback"
                            })
                        } catch (n) {}
                    }), ms.addEventListener(cs.VERBAL_RESPONSE, e => {
                        t({
                            event: cs.VERBAL_RESPONSE,
                            message: e.data,
                            author: "agent"
                        })
                    }), ms.addEventListener(cs.PRE_MESSAGE_METADATA, e => {
                        try {
                            const n = JSON.parse(e.data);
                            t({
                                event: cs.PRE_MESSAGE_METADATA,
                                messageId: n.messageId
                            })
                        } catch (n) {}
                    }), ms.addEventListener(cs.ERROR, e => {
                        try {
                            const n = JSON.parse(e.data);
                            t({
                                event: cs.ERROR,
                                errorMessage: n.errorMessage || "An unknown error occurred",
                                errorCode: n.errorCode
                            })
                        } catch (n) {
                            t({
                                event: cs.ERROR,
                                errorMessage: "Failed to process error message"
                            })
                        }
                    }), ms.addEventListener(cs.ADVERTISER_DATA, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.ADVERTISER_DATA,
                            ...n
                        })
                    }), ms.addEventListener(cs.ADD_TO_CART, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.ADD_TO_CART,
                            ...n
                        })
                    }), ms.addEventListener(cs.CART_CHANGE, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.CART_CHANGE,
                            ...n
                        })
                    }), ms.addEventListener(cs.ENTRYPOINT_DATA, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.ENTRYPOINT_DATA,
                            ...n
                        })
                    }), ms.addEventListener(cs.REDIRECT_NUDGE_DATA, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.REDIRECT_NUDGE_DATA,
                            ...n
                        })
                    }), ms.addEventListener(cs.ROTATING_NUDGES, e => {
                        try {
                            const n = JSON.parse(e.data);
                            t({
                                event: cs.ROTATING_NUDGES,
                                data: n
                            })
                        } catch (n) {}
                    }), ms.addEventListener(cs.CLEAR_RESPONSE_STREAM, e => {
                        t({
                            event: cs.CLEAR_RESPONSE_STREAM
                        })
                    }), ms.addEventListener(cs.KILL_COMMAND, () => {
                        t({
                            event: cs.KILL_COMMAND
                        })
                    }), ms.addEventListener(cs.CHECKOUT, () => {
                        t({
                            event: cs.CHECKOUT
                        })
                    }), ms.addEventListener(cs.VIEW_CART, () => {
                        t({
                            event: cs.VIEW_CART
                        })
                    }), ms.addEventListener(cs.CHAT_LAYOUT_DATA, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.CHAT_LAYOUT_DATA,
                            layout: n,
                            author: "genUI"
                        })
                    }), ms.addEventListener(cs.VARIANT_INFO, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.VARIANT_INFO,
                            data: n,
                            author: "genUI"
                        })
                    }), ms.addEventListener(cs.OFFLINE_NUDGES, e => {
                        t({
                            event: cs.OFFLINE_NUDGES,
                            data: fs(e.data)
                        })
                    }), ms.addEventListener(cs.ORDER_FORM_STATUS, e => {
                        const n = JSON.parse(e.data);
                        t({
                            event: cs.ORDER_FORM_STATUS,
                            FormId: n.FormId,
                            Success: n.Success,
                            ErrorMessage: n.ErrorMessage
                        })
                    })
                }
            },
            handleOnMessage: e => {
                t = e
            }
        })
    })
}

function Os() {
    Ja(!1), Ya(!1)
}
window.addEventListener("beforeunload", () => {
    Vo(), Os(), Es()
}), window.addEventListener("pagehide", () => {
    Vo(), Os(), Es()
});
const Ts = e => "string" == typeof e,
    xs = () => {
        let e, t;
        const n = new Promise((n, r) => {
            e = n, t = r
        });
        return n.resolve = e, n.reject = t, n
    },
    _s = e => null == e ? "" : "" + e,
    Ns = /###/g,
    Ps = e => e && e.indexOf("###") > -1 ? e.replace(Ns, ".") : e,
    As = e => !e || Ts(e),
    Ls = (e, t, n) => {
        const r = Ts(t) ? t.split(".") : t;
        let a = 0;
        for (; a < r.length - 1;) {
            if (As(e)) return {};
            const t = Ps(r[a]);
            !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++a
        }
        return As(e) ? {} : {
            obj: e,
            k: Ps(r[a])
        }
    },
    Is = (e, t, n) => {
        const {
            obj: r,
            k: a
        } = Ls(e, t, Object);
        if (void 0 !== r || 1 === t.length) return void(r[a] = n);
        let i = t[t.length - 1],
            o = t.slice(0, t.length - 1),
            s = Ls(e, o, Object);
        for (; void 0 === s.obj && o.length;) i = `${o[o.length-1]}.${i}`, o = o.slice(0, o.length - 1), s = Ls(e, o, Object), s ? .obj && void 0 !== s.obj[`${s.k}.${i}`] && (s.obj = void 0);
        s.obj[`${s.k}.${i}`] = n
    },
    Rs = (e, t) => {
        const {
            obj: n,
            k: r
        } = Ls(e, t);
        if (n && Object.prototype.hasOwnProperty.call(n, r)) return n[r]
    },
    Ms = (e, t, n) => {
        for (const r in t) "__proto__" !== r && "constructor" !== r && (r in e ? Ts(e[r]) || e[r] instanceof String || Ts(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : Ms(e[r], t[r], n) : e[r] = t[r]);
        return e
    },
    Ds = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var zs = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const Fs = e => Ts(e) ? e.replace(/[&<>"'\/]/g, e => zs[e]) : e;
const Us = [" ", ",", "?", "!", ";"],
    js = new class {
        constructor(e) {
            this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
        }
        getRegExp(e) {
            const t = this.regExpMap.get(e);
            if (void 0 !== t) return t;
            const n = new RegExp(e);
            return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
        }
    }(20),
    Vs = (e, t, n = ".") => {
        if (!e) return;
        if (e[t]) {
            if (!Object.prototype.hasOwnProperty.call(e, t)) return;
            return e[t]
        }
        const r = t.split(n);
        let a = e;
        for (let i = 0; i < r.length;) {
            if (!a || "object" != typeof a) return;
            let e, t = "";
            for (let o = i; o < r.length; ++o)
                if (o !== i && (t += n), t += r[o], e = a[t], void 0 !== e) {
                    if (["string", "number", "boolean"].indexOf(typeof e) > -1 && o < r.length - 1) continue;
                    i += o - i + 1;
                    break
                }
            a = e
        }
        return a
    },
    Hs = e => e ? .replace("_", "-"),
    Bs = {
        type: "logger",
        log(e) {
            this.output("log", e)
        },
        warn(e) {
            this.output("warn", e)
        },
        error(e) {
            this.output("error", e)
        },
        output(e, t) {}
    };
class $s {
    constructor(e, t = {}) {
        this.init(e, t)
    }
    init(e, t = {}) {
        this.prefix = t.prefix || "i18next:", this.logger = e || Bs, this.options = t, this.debug = t.debug
    }
    log(...e) {
        return this.forward(e, "log", "", !0)
    }
    warn(...e) {
        return this.forward(e, "warn", "", !0)
    }
    error(...e) {
        return this.forward(e, "error", "")
    }
    deprecate(...e) {
        return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(e, t, n, r) {
        return r && !this.debug ? null : (Ts(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
    }
    create(e) {
        return new $s(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options
        })
    }
    clone(e) {
        return (e = e || this.options).prefix = e.prefix || this.prefix, new $s(this.logger, e)
    }
}
var Ws = new $s;
class Gs {
    constructor() {
        this.observers = {}
    }
    on(e, t) {
        return e.split(" ").forEach(e => {
            this.observers[e] || (this.observers[e] = new Map);
            const n = this.observers[e].get(t) || 0;
            this.observers[e].set(t, n + 1)
        }), this
    }
    off(e, t) {
        this.observers[e] && (t ? this.observers[e].delete(t) : delete this.observers[e])
    }
    emit(e, ...t) {
        if (this.observers[e]) {
            Array.from(this.observers[e].entries()).forEach(([e, n]) => {
                for (let r = 0; r < n; r++) e(...t)
            })
        }
        if (this.observers["*"]) {
            Array.from(this.observers["*"].entries()).forEach(([n, r]) => {
                for (let a = 0; a < r; a++) n.apply(n, [e, ...t])
            })
        }
    }
}
class qs extends Gs {
    constructor(e, t = {
        ns: ["translation"],
        defaultNS: "translation"
    }) {
        super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(e) {
        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
    }
    removeNamespaces(e) {
        const t = this.options.ns.indexOf(e);
        t > -1 && this.options.ns.splice(t, 1)
    }
    getResource(e, t, n, r = {}) {
        const a = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
            i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let o;
        e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], n && (Array.isArray(n) ? o.push(...n) : Ts(n) && a ? o.push(...n.split(a)) : o.push(n)));
        const s = Rs(this.data, o);
        return !s && !t && !n && e.indexOf(".") > -1 && (e = o[0], t = o[1], n = o.slice(2).join(".")), !s && i && Ts(n) ? Vs(this.data ? .[e] ? .[t], n, a) : s
    }
    addResource(e, t, n, r, a = {
        silent: !1
    }) {
        const i = void 0 !== a.keySeparator ? a.keySeparator : this.options.keySeparator;
        let o = [e, t];
        n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split("."), r = t, t = o[1]), this.addNamespaces(t), Is(this.data, o, r), a.silent || this.emit("added", e, t, n, r)
    }
    addResources(e, t, n, r = {
        silent: !1
    }) {
        for (const a in n)(Ts(n[a]) || Array.isArray(n[a])) && this.addResource(e, t, a, n[a], {
            silent: !0
        });
        r.silent || this.emit("added", e, t, n)
    }
    addResourceBundle(e, t, n, r, a, i = {
        silent: !1,
        skipCopy: !1
    }) {
        let o = [e, t];
        e.indexOf(".") > -1 && (o = e.split("."), r = n, n = t, t = o[1]), this.addNamespaces(t);
        let s = Rs(this.data, o) || {};
        i.skipCopy || (n = JSON.parse(JSON.stringify(n))), r ? Ms(s, n, a) : s = { ...s,
            ...n
        }, Is(this.data, o, s), i.silent || this.emit("added", e, t, n)
    }
    removeResourceBundle(e, t) {
        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
    }
    hasResourceBundle(e, t) {
        return void 0 !== this.getResource(e, t)
    }
    getResourceBundle(e, t) {
        return t || (t = this.options.defaultNS), this.getResource(e, t)
    }
    getDataByLanguage(e) {
        return this.data[e]
    }
    hasLanguageSomeTranslations(e) {
        const t = this.getDataByLanguage(e);
        return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Ks = {
    processors: {},
    addPostProcessor(e) {
        this.processors[e.name] = e
    },
    handle(e, t, n, r, a) {
        return e.forEach(e => {
            t = this.processors[e] ? .process(t, n, r, a) ? ? t
        }), t
    }
};
const Qs = Symbol("i18next/PATH_KEY");

function Xs(e, t) {
    const {
        [Qs]: n
    } = e(function() {
        const e = [],
            t = Object.create(null);
        let n;
        return t.get = (r, a) => (n ? .revoke ? .(), a === Qs ? e : (e.push(a), n = Proxy.revocable(r, t), n.proxy)), Proxy.revocable(Object.create(null), t).proxy
    }());
    return n.join(t ? .keySeparator ? ? ".")
}
const Js = {},
    Ys = e => !Ts(e) && "boolean" != typeof e && "number" != typeof e;
class Zs extends Gs {
    constructor(e, t = {}) {
        var n, r;
        super(), n = e, r = this, ["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"].forEach(e => {
            n[e] && (r[e] = n[e])
        }), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = Ws.create("translator")
    }
    changeLanguage(e) {
        e && (this.language = e)
    }
    exists(e, t = {
        interpolation: {}
    }) {
        const n = { ...t
        };
        if (null == e) return !1;
        const r = this.resolve(e, n);
        return void 0 !== r ? .res
    }
    extractFromKey(e, t) {
        let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
        void 0 === n && (n = ":");
        const r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator;
        let a = t.ns || this.options.defaultNS || [];
        const i = n && e.indexOf(n) > -1,
            o = !(this.options.userDefinedKeySeparator || t.keySeparator || this.options.userDefinedNsSeparator || t.nsSeparator || ((e, t, n) => {
                t = t || "", n = n || "";
                const r = Us.filter(e => t.indexOf(e) < 0 && n.indexOf(e) < 0);
                if (0 === r.length) return !0;
                const a = js.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);
                let i = !a.test(e);
                if (!i) {
                    const t = e.indexOf(n);
                    t > 0 && !a.test(e.substring(0, t)) && (i = !0)
                }
                return i
            })(e, n, r));
        if (i && !o) {
            const t = e.match(this.interpolator.nestingRegexp);
            if (t && t.length > 0) return {
                key: e,
                namespaces: Ts(a) ? [a] : a
            };
            const i = e.split(n);
            (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (a = i.shift()), e = i.join(r)
        }
        return {
            key: e,
            namespaces: Ts(a) ? [a] : a
        }
    }
    translate(e, t, n) {
        let r = "object" == typeof t ? { ...t
        } : t;
        if ("object" != typeof r && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof r && (r = { ...r
            }), r || (r = {}), null == e) return "";
        "function" == typeof e && (e = Xs(e, { ...this.options,
            ...r
        })), Array.isArray(e) || (e = [String(e)]);
        const a = void 0 !== r.returnDetails ? r.returnDetails : this.options.returnDetails,
            i = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
            {
                key: o,
                namespaces: s
            } = this.extractFromKey(e[e.length - 1], r),
            l = s[s.length - 1];
        let u = void 0 !== r.nsSeparator ? r.nsSeparator : this.options.nsSeparator;
        void 0 === u && (u = ":");
        const c = r.lng || this.language,
            d = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if ("cimode" === c ? .toLowerCase()) return d ? a ? {
            res: `${l}${u}${o}`,
            usedKey: o,
            exactUsedKey: o,
            usedLng: c,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(r)
        } : `${l}${u}${o}` : a ? {
            res: o,
            usedKey: o,
            exactUsedKey: o,
            usedLng: c,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(r)
        } : o;
        const f = this.resolve(e, r);
        let p = f ? .res;
        const h = f ? .usedKey || o,
            g = f ? .exactUsedKey || o,
            m = void 0 !== r.joinArrays ? r.joinArrays : this.options.joinArrays,
            b = !this.i18nFormat || this.i18nFormat.handleAsObject,
            y = void 0 !== r.count && !Ts(r.count),
            v = Zs.hasDefaultValue(r),
            w = y ? this.pluralResolver.getSuffix(c, r.count, r) : "",
            S = r.ordinal && y ? this.pluralResolver.getSuffix(c, r.count, {
                ordinal: !1
            }) : "",
            k = y && !r.ordinal && 0 === r.count,
            E = k && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${w}`] || r[`defaultValue${S}`] || r.defaultValue;
        let C = p;
        b && !p && v && (C = E);
        const O = Ys(C),
            T = Object.prototype.toString.apply(C);
        if (!(b && C && O && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(T) < 0) || Ts(m) && Array.isArray(C))
            if (b && Ts(m) && Array.isArray(p)) p = p.join(m), p && (p = this.extendTranslation(p, e, r, n));
            else {
                let t = !1,
                    a = !1;
                !this.isValidLookup(p) && v && (t = !0, p = E), this.isValidLookup(p) || (a = !0, p = o);
                const s = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && a ? void 0 : p,
                    d = v && E !== p && this.options.updateMissing;
                if (a || t || d) {
                    if (this.logger.log(d ? "updateKey" : "missingKey", c, l, o, d ? E : p), i) {
                        const e = this.resolve(o, { ...r,
                            keySeparator: !1
                        });
                        e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                    }
                    let e = [];
                    const t = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
                    if ("fallback" === this.options.saveMissingTo && t && t[0])
                        for (let r = 0; r < t.length; r++) e.push(t[r]);
                    else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(r.lng || this.language) : e.push(r.lng || this.language);
                    const n = (e, t, n) => {
                        const a = v && n !== p ? n : s;
                        this.options.missingKeyHandler ? this.options.missingKeyHandler(e, l, t, a, d, r) : this.backendConnector ? .saveMissing && this.backendConnector.saveMissing(e, l, t, a, d, r), this.emit("missingKey", e, l, t, p)
                    };
                    this.options.saveMissing && (this.options.saveMissingPlurals && y ? e.forEach(e => {
                        const t = this.pluralResolver.getSuffixes(e, r);
                        k && r[`defaultValue${this.options.pluralSeparator}zero`] && t.indexOf(`${this.options.pluralSeparator}zero`) < 0 && t.push(`${this.options.pluralSeparator}zero`), t.forEach(t => {
                            n([e], o + t, r[`defaultValue${t}`] || E)
                        })
                    }) : n(e, o, E))
                }
                p = this.extendTranslation(p, e, r, f, n), a && p === o && this.options.appendNamespaceToMissingKey && (p = `${l}${u}${o}`), (a || t) && this.options.parseMissingKeyHandler && (p = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}${u}${o}` : o, t ? p : void 0, r))
            }
        else {
            if (!r.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(h, C, { ...r,
                    ns: s
                }) : `key '${o} (${this.language})' returned an object instead of string.`;
                return a ? (f.res = e, f.usedParams = this.getUsedParamsDetails(r), f) : e
            }
            if (i) {
                const e = Array.isArray(C),
                    t = e ? [] : {},
                    n = e ? g : h;
                for (const a in C)
                    if (Object.prototype.hasOwnProperty.call(C, a)) {
                        const e = `${n}${i}${a}`;
                        t[a] = v && !p ? this.translate(e, { ...r,
                            defaultValue: Ys(E) ? E[a] : void 0,
                            joinArrays: !1,
                            ns: s
                        }) : this.translate(e, { ...r,
                            joinArrays: !1,
                            ns: s
                        }), t[a] === e && (t[a] = C[a])
                    }
                p = t
            }
        }
        return a ? (f.res = p, f.usedParams = this.getUsedParamsDetails(r), f) : p
    }
    extendTranslation(e, t, n, r, a) {
        if (this.i18nFormat ? .parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
            ...n
        }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
            resolved: r
        });
        else if (!n.skipInterpolation) {
            n.interpolation && this.interpolator.init({ ...n,
                interpolation: { ...this.options.interpolation,
                    ...n.interpolation
                }
            });
            const i = Ts(e) && (void 0 !== n ? .interpolation ? .skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let o;
            if (i) {
                const t = e.match(this.interpolator.nestingRegexp);
                o = t && t.length
            }
            let s = n.replace && !Ts(n.replace) ? n.replace : n;
            if (this.options.interpolation.defaultVariables && (s = { ...this.options.interpolation.defaultVariables,
                    ...s
                }), e = this.interpolator.interpolate(e, s, n.lng || this.language || r.usedLng, n), i) {
                const t = e.match(this.interpolator.nestingRegexp);
                o < (t && t.length) && (n.nest = !1)
            }!n.lng && r && r.res && (n.lng = this.language || r.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, (...e) => a ? .[0] !== e[0] || n.context ? this.translate(...e, t) : (this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`), null), n)), n.interpolation && this.interpolator.reset()
        }
        const i = n.postProcess || this.options.postProcess,
            o = Ts(i) ? [i] : i;
        return null != e && o ? .length && !1 !== n.applyPostProcessor && (e = Ks.handle(o, e, t, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: { ...r,
                usedParams: this.getUsedParamsDetails(n)
            },
            ...n
        } : n, this)), e
    }
    resolve(e, t = {}) {
        let n, r, a, i, o;
        return Ts(e) && (e = [e]), e.forEach(e => {
            if (this.isValidLookup(n)) return;
            const s = this.extractFromKey(e, t),
                l = s.key;
            r = l;
            let u = s.namespaces;
            this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
            const c = void 0 !== t.count && !Ts(t.count),
                d = c && !t.ordinal && 0 === t.count,
                f = void 0 !== t.context && (Ts(t.context) || "number" == typeof t.context) && "" !== t.context,
                p = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
            u.forEach(e => {
                this.isValidLookup(n) || (o = e, Js[`${p[0]}-${e}`] || !this.utils ? .hasLoadedNamespace || this.utils ? .hasLoadedNamespace(o) || (Js[`${p[0]}-${e}`] = !0, this.logger.warn(`key "${r}" for languages "${p.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), p.forEach(r => {
                    if (this.isValidLookup(n)) return;
                    i = r;
                    const o = [l];
                    if (this.i18nFormat ? .addLookupKeys) this.i18nFormat.addLookupKeys(o, l, r, e, t);
                    else {
                        let e;
                        c && (e = this.pluralResolver.getSuffix(r, t.count, t));
                        const n = `${this.options.pluralSeparator}zero`,
                            a = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (c && (t.ordinal && 0 === e.indexOf(a) && o.push(l + e.replace(a, this.options.pluralSeparator)), o.push(l + e), d && o.push(l + n)), f) {
                            const r = `${l}${this.options.contextSeparator||"_"}${t.context}`;
                            o.push(r), c && (t.ordinal && 0 === e.indexOf(a) && o.push(r + e.replace(a, this.options.pluralSeparator)), o.push(r + e), d && o.push(r + n))
                        }
                    }
                    let s;
                    for (; s = o.pop();) this.isValidLookup(n) || (a = s, n = this.getResource(r, e, s, t))
                }))
            })
        }), {
            res: n,
            usedKey: r,
            exactUsedKey: a,
            usedLng: i,
            usedNS: o
        }
    }
    isValidLookup(e) {
        return !(void 0 === e || !this.options.returnNull && null === e || !this.options.returnEmptyString && "" === e)
    }
    getResource(e, t, n, r = {}) {
        return this.i18nFormat ? .getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
    }
    getUsedParamsDetails(e = {}) {
        const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            n = e.replace && !Ts(e.replace);
        let r = n ? e.replace : e;
        if (n && void 0 !== e.count && (r.count = e.count), this.options.interpolation.defaultVariables && (r = { ...this.options.interpolation.defaultVariables,
                ...r
            }), !n) {
            r = { ...r
            };
            for (const e of t) delete r[e]
        }
        return r
    }
    static hasDefaultValue(e) {
        const t = "defaultValue";
        for (const n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, 12) && void 0 !== e[n]) return !0;
        return !1
    }
}
class el {
    constructor(e) {
        this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ws.create("languageUtils")
    }
    getScriptPartFromCode(e) {
        if (!(e = Hs(e)) || e.indexOf("-") < 0) return null;
        const t = e.split("-");
        return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
    }
    getLanguagePartFromCode(e) {
        if (!(e = Hs(e)) || e.indexOf("-") < 0) return e;
        const t = e.split("-");
        return this.formatLanguageCode(t[0])
    }
    formatLanguageCode(e) {
        if (Ts(e) && e.indexOf("-") > -1) {
            let n;
            try {
                n = Intl.getCanonicalLocales(e)[0]
            } catch (t) {}
            return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? e.toLowerCase() : e)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
    }
    isSupportedCode(e) {
        return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
    }
    getBestMatchFromCodes(e) {
        if (!e) return null;
        let t;
        return e.forEach(e => {
            if (t) return;
            const n = this.formatLanguageCode(e);
            this.options.supportedLngs && !this.isSupportedCode(n) || (t = n)
        }), !t && this.options.supportedLngs && e.forEach(e => {
            if (t) return;
            const n = this.getScriptPartFromCode(e);
            if (this.isSupportedCode(n)) return t = n;
            const r = this.getLanguagePartFromCode(e);
            if (this.isSupportedCode(r)) return t = r;
            t = this.options.supportedLngs.find(e => e === r ? e : e.indexOf("-") < 0 && r.indexOf("-") < 0 ? void 0 : e.indexOf("-") > 0 && r.indexOf("-") < 0 && e.substring(0, e.indexOf("-")) === r || 0 === e.indexOf(r) && r.length > 1 ? e : void 0)
        }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
    }
    getFallbackCodes(e, t) {
        if (!e) return [];
        if ("function" == typeof e && (e = e(t)), Ts(e) && (e = [e]), Array.isArray(e)) return e;
        if (!t) return e.default || [];
        let n = e[t];
        return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
    }
    toResolveHierarchy(e, t) {
        const n = this.getFallbackCodes((!1 === t ? [] : t) || this.options.fallbackLng || [], e),
            r = [],
            a = e => {
                e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
            };
        return Ts(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && a(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && a(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && a(this.getLanguagePartFromCode(e))) : Ts(e) && a(this.formatLanguageCode(e)), n.forEach(e => {
            r.indexOf(e) < 0 && a(this.formatLanguageCode(e))
        }), r
    }
}
const tl = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    },
    nl = {
        select: e => 1 === e ? "one" : "other",
        resolvedOptions: () => ({
            pluralCategories: ["one", "other"]
        })
    };
class rl {
    constructor(e, t = {}) {
        this.languageUtils = e, this.options = t, this.logger = Ws.create("pluralResolver"), this.pluralRulesCache = {}
    }
    addRule(e, t) {
        this.rules[e] = t
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(e, t = {}) {
        const n = Hs("dev" === e ? "en" : e),
            r = t.ordinal ? "ordinal" : "cardinal",
            a = JSON.stringify({
                cleanedCode: n,
                type: r
            });
        if (a in this.pluralRulesCache) return this.pluralRulesCache[a];
        let i;
        try {
            i = new Intl.PluralRules(n, {
                type: r
            })
        } catch (o) {
            if (!Intl) return this.logger.error("No Intl support, please use an Intl polyfill!"), nl;
            if (!e.match(/-|_/)) return nl;
            const n = this.languageUtils.getLanguagePartFromCode(e);
            i = this.getRule(n, t)
        }
        return this.pluralRulesCache[a] = i, i
    }
    needsPlural(e, t = {}) {
        let n = this.getRule(e, t);
        return n || (n = this.getRule("dev", t)), n ? .resolvedOptions().pluralCategories.length > 1
    }
    getPluralFormsOfKey(e, t, n = {}) {
        return this.getSuffixes(e, n).map(e => `${t}${e}`)
    }
    getSuffixes(e, t = {}) {
        let n = this.getRule(e, t);
        return n || (n = this.getRule("dev", t)), n ? n.resolvedOptions().pluralCategories.sort((e, t) => tl[e] - tl[t]).map(e => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`) : []
    }
    getSuffix(e, t, n = {}) {
        const r = this.getRule(e, n);
        return r ? `${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", t, n))
    }
}
const al = (e, t, n, r = ".", a = !0) => {
        let i = ((e, t, n) => {
            const r = Rs(e, n);
            return void 0 !== r ? r : Rs(t, n)
        })(e, t, n);
        return !i && a && Ts(n) && (i = Vs(e, n, r), void 0 === i && (i = Vs(t, n, r))), i
    },
    il = e => e.replace(/\$/g, "$$$$");
class ol {
    constructor(e = {}) {
        this.logger = Ws.create("interpolator"), this.options = e, this.format = e ? .interpolation ? .format || (e => e), this.init(e)
    }
    init(e = {}) {
        e.interpolation || (e.interpolation = {
            escapeValue: !0
        });
        const {
            escape: t,
            escapeValue: n,
            useRawValueToEscape: r,
            prefix: a,
            prefixEscaped: i,
            suffix: o,
            suffixEscaped: s,
            formatSeparator: l,
            unescapeSuffix: u,
            unescapePrefix: c,
            nestingPrefix: d,
            nestingPrefixEscaped: f,
            nestingSuffix: p,
            nestingSuffixEscaped: h,
            nestingOptionsSeparator: g,
            maxReplaces: m,
            alwaysFormat: b
        } = e.interpolation;
        this.escape = void 0 !== t ? t : Fs, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== r && r, this.prefix = a ? Ds(a) : i || "{{", this.suffix = o ? Ds(o) : s || "}}", this.formatSeparator = l || ",", this.unescapePrefix = u ? "" : c || "-", this.unescapeSuffix = this.unescapePrefix ? "" : u || "", this.nestingPrefix = d ? Ds(d) : f || Ds("$t("), this.nestingSuffix = p ? Ds(p) : h || Ds(")"), this.nestingOptionsSeparator = g || ",", this.maxReplaces = m || 1e3, this.alwaysFormat = void 0 !== b && b, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const e = (e, t) => e ? .source === t ? (e.lastIndex = 0, e) : new RegExp(t, "g");
        this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)
    }
    interpolate(e, t, n, r) {
        let a, i, o;
        const s = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
            l = e => {
                if (e.indexOf(this.formatSeparator) < 0) {
                    const a = al(t, s, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                    return this.alwaysFormat ? this.format(a, void 0, n, { ...r,
                        ...t,
                        interpolationkey: e
                    }) : a
                }
                const a = e.split(this.formatSeparator),
                    i = a.shift().trim(),
                    o = a.join(this.formatSeparator).trim();
                return this.format(al(t, s, i, this.options.keySeparator, this.options.ignoreJSONStructure), o, n, { ...r,
                    ...t,
                    interpolationkey: i
                })
            };
        this.resetRegExp();
        const u = r ? .missingInterpolationHandler || this.options.missingInterpolationHandler,
            c = void 0 !== r ? .interpolation ? .skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: e => il(e)
        }, {
            regex: this.regexp,
            safeValue: e => this.escapeValue ? il(this.escape(e)) : il(e)
        }].forEach(t => {
            for (o = 0; a = t.regex.exec(e);) {
                const n = a[1].trim();
                if (i = l(n), void 0 === i)
                    if ("function" == typeof u) {
                        const t = u(e, a, r);
                        i = Ts(t) ? t : ""
                    } else if (r && Object.prototype.hasOwnProperty.call(r, n)) i = "";
                else {
                    if (c) {
                        i = a[0];
                        continue
                    }
                    this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), i = ""
                } else Ts(i) || this.useRawValueToEscape || (i = _s(i));
                const s = t.safeValue(i);
                if (e = e.replace(a[0], s), c ? (t.regex.lastIndex += i.length, t.regex.lastIndex -= a[0].length) : t.regex.lastIndex = 0, o++, o >= this.maxReplaces) break
            }
        }), e
    }
    nest(e, t, n = {}) {
        let r, a, i;
        const o = (e, t) => {
            const n = this.nestingOptionsSeparator;
            if (e.indexOf(n) < 0) return e;
            const r = e.split(new RegExp(`${n}[ ]*{`));
            let a = `{${r[1]}`;
            e = r[0], a = this.interpolate(a, i);
            const o = a.match(/'/g),
                s = a.match(/"/g);
            ((o ? .length ? ? 0) % 2 == 0 && !s || s.length % 2 != 0) && (a = a.replace(/'/g, '"'));
            try {
                i = JSON.parse(a), t && (i = { ...t,
                    ...i
                })
            } catch (l) {
                return this.logger.warn(`failed parsing options string in nesting for key ${e}`, l), `${e}${n}${a}`
            }
            return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, e
        };
        for (; r = this.nestingRegexp.exec(e);) {
            let s = [];
            i = { ...n
            }, i = i.replace && !Ts(i.replace) ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
            const l = /{.*}/.test(r[1]) ? r[1].lastIndexOf("}") + 1 : r[1].indexOf(this.formatSeparator);
            if (-1 !== l && (s = r[1].slice(l).split(this.formatSeparator).map(e => e.trim()).filter(Boolean), r[1] = r[1].slice(0, l)), a = t(o.call(this, r[1].trim(), i), i), a && r[0] === e && !Ts(a)) return a;
            Ts(a) || (a = _s(a)), a || (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`), a = ""), s.length && (a = s.reduce((e, t) => this.format(e, t, n.lng, { ...n,
                interpolationkey: r[1].trim()
            }), a.trim())), e = e.replace(r[0], a), this.regexp.lastIndex = 0
        }
        return e
    }
}
const sl = e => {
        const t = {};
        return (n, r, a) => {
            let i = a;
            a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (i = { ...i,
                [a.interpolationkey]: void 0
            });
            const o = r + JSON.stringify(i);
            let s = t[o];
            return s || (s = e(Hs(r), a), t[o] = s), s(n)
        }
    },
    ll = e => (t, n, r) => e(Hs(n), r)(t);
class ul {
    constructor(e = {}) {
        this.logger = Ws.create("formatter"), this.options = e, this.init(e)
    }
    init(e, t = {
        interpolation: {}
    }) {
        this.formatSeparator = t.interpolation.formatSeparator || ",";
        const n = t.cacheInBuiltFormats ? sl : ll;
        this.formats = {
            number: n((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t
                });
                return e => n.format(e)
            }),
            currency: n((e, t) => {
                const n = new Intl.NumberFormat(e, { ...t,
                    style: "currency"
                });
                return e => n.format(e)
            }),
            datetime: n((e, t) => {
                const n = new Intl.DateTimeFormat(e, { ...t
                });
                return e => n.format(e)
            }),
            relativetime: n((e, t) => {
                const n = new Intl.RelativeTimeFormat(e, { ...t
                });
                return e => n.format(e, t.range || "day")
            }),
            list: n((e, t) => {
                const n = new Intl.ListFormat(e, { ...t
                });
                return e => n.format(e)
            })
        }
    }
    add(e, t) {
        this.formats[e.toLowerCase().trim()] = t
    }
    addCached(e, t) {
        this.formats[e.toLowerCase().trim()] = sl(t)
    }
    format(e, t, n, r = {}) {
        const a = t.split(this.formatSeparator);
        if (a.length > 1 && a[0].indexOf("(") > 1 && a[0].indexOf(")") < 0 && a.find(e => e.indexOf(")") > -1)) {
            const e = a.findIndex(e => e.indexOf(")") > -1);
            a[0] = [a[0], ...a.splice(1, e)].join(this.formatSeparator)
        }
        return a.reduce((e, t) => {
            const {
                formatName: a,
                formatOptions: i
            } = (e => {
                let t = e.toLowerCase().trim();
                const n = {};
                if (e.indexOf("(") > -1) {
                    const r = e.split("(");
                    t = r[0].toLowerCase().trim();
                    const a = r[1].substring(0, r[1].length - 1);
                    "currency" === t && a.indexOf(":") < 0 ? n.currency || (n.currency = a.trim()) : "relativetime" === t && a.indexOf(":") < 0 ? n.range || (n.range = a.trim()) : a.split(";").forEach(e => {
                        if (e) {
                            const [t, ...r] = e.split(":"), a = r.join(":").trim().replace(/^'+|'+$/g, ""), i = t.trim();
                            n[i] || (n[i] = a), "false" === a && (n[i] = !1), "true" === a && (n[i] = !0), isNaN(a) || (n[i] = parseInt(a, 10))
                        }
                    })
                }
                return {
                    formatName: t,
                    formatOptions: n
                }
            })(t);
            if (this.formats[a]) {
                let t = e;
                try {
                    const o = r ? .formatParams ? .[r.interpolationkey] || {},
                        s = o.locale || o.lng || r.locale || r.lng || n;
                    t = this.formats[a](e, s, { ...i,
                        ...r,
                        ...o
                    })
                } catch (o) {
                    this.logger.warn(o)
                }
                return t
            }
            return this.logger.warn(`there was no format function for ${a}`), e
        }, e)
    }
}
class cl extends Gs {
    constructor(e, t, n, r = {}) {
        super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = r, this.logger = Ws.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = r.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5, this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350, this.state = {}, this.queue = [], this.backend ? .init ? .(n, r.backend, r)
    }
    queueLoad(e, t, n, r) {
        const a = {},
            i = {},
            o = {},
            s = {};
        return e.forEach(e => {
            let r = !0;
            t.forEach(t => {
                const o = `${e}|${t}`;
                !n.reload && this.store.hasResourceBundle(e, t) ? this.state[o] = 2 : this.state[o] < 0 || (1 === this.state[o] ? void 0 === i[o] && (i[o] = !0) : (this.state[o] = 1, r = !1, void 0 === i[o] && (i[o] = !0), void 0 === a[o] && (a[o] = !0), void 0 === s[t] && (s[t] = !0)))
            }), r || (o[e] = !0)
        }), (Object.keys(a).length || Object.keys(i).length) && this.queue.push({
            pending: i,
            pendingCount: Object.keys(i).length,
            loaded: {},
            errors: [],
            callback: r
        }), {
            toLoad: Object.keys(a),
            pending: Object.keys(i),
            toLoadLanguages: Object.keys(o),
            toLoadNamespaces: Object.keys(s)
        }
    }
    loaded(e, t, n) {
        const r = e.split("|"),
            a = r[0],
            i = r[1];
        t && this.emit("failedLoading", a, i, t), !t && n && this.store.addResourceBundle(a, i, n, void 0, void 0, {
            skipCopy: !0
        }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
        const o = {};
        this.queue.forEach(n => {
            ((e, t, n) => {
                const {
                    obj: r,
                    k: a
                } = Ls(e, t, Object);
                r[a] = r[a] || [], r[a].push(n)
            })(n.loaded, [a], i), ((e, t) => {
                void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
            })(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e => {
                o[e] || (o[e] = {});
                const t = n.loaded[e];
                t.length && t.forEach(t => {
                    void 0 === o[e][t] && (o[e][t] = !0)
                })
            }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
        }), this.emit("loaded", o), this.queue = this.queue.filter(e => !e.done)
    }
    read(e, t, n, r = 0, a = this.retryTimeout, i) {
        if (!e.length) return i(null, {});
        if (this.readingCalls >= this.maxParallelReads) return void this.waitingReads.push({
            lng: e,
            ns: t,
            fcName: n,
            tried: r,
            wait: a,
            callback: i
        });
        this.readingCalls++;
        const o = (o, s) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const e = this.waitingReads.shift();
                    this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                }
                o && s && r < this.maxRetries ? setTimeout(() => {
                    this.read.call(this, e, t, n, r + 1, 2 * a, i)
                }, a) : i(o, s)
            },
            s = this.backend[n].bind(this.backend);
        if (2 !== s.length) return s(e, t, o);
        try {
            const n = s(e, t);
            n && "function" == typeof n.then ? n.then(e => o(null, e)).catch(o) : o(null, n)
        } catch (l) {
            o(l)
        }
    }
    prepareLoading(e, t, n = {}, r) {
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
        Ts(e) && (e = this.languageUtils.toResolveHierarchy(e)), Ts(t) && (t = [t]);
        const a = this.queueLoad(e, t, n, r);
        if (!a.toLoad.length) return a.pending.length || r(), null;
        a.toLoad.forEach(e => {
            this.loadOne(e)
        })
    }
    load(e, t, n) {
        this.prepareLoading(e, t, {}, n)
    }
    reload(e, t, n) {
        this.prepareLoading(e, t, {
            reload: !0
        }, n)
    }
    loadOne(e, t = "") {
        const n = e.split("|"),
            r = n[0],
            a = n[1];
        this.read(r, a, "read", void 0, void 0, (n, i) => {
            n && this.logger.warn(`${t}loading namespace ${a} for language ${r} failed`, n), !n && i && this.logger.log(`${t}loaded namespace ${a} for language ${r}`, i), this.loaded(e, n, i)
        })
    }
    saveMissing(e, t, n, r, a, i = {}, o = () => {}) {
        if (!this.services ? .utils ? .hasLoadedNamespace || this.services ? .utils ? .hasLoadedNamespace(t)) {
            if (null != n && "" !== n) {
                if (this.backend ? .create) {
                    const l = { ...i,
                            isUpdate: a
                        },
                        u = this.backend.create.bind(this.backend);
                    if (u.length < 6) try {
                        let a;
                        a = 5 === u.length ? u(e, t, n, r, l) : u(e, t, n, r), a && "function" == typeof a.then ? a.then(e => o(null, e)).catch(o) : o(null, a)
                    } catch (s) {
                        o(s)
                    } else u(e, t, n, r, o, l)
                }
                e && e[0] && this.store.addResource(e[0], t, n, r)
            }
        } else this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")
    }
}
const dl = () => ({
        debug: !1,
        initAsync: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: e => {
            let t = {};
            if ("object" == typeof e[1] && (t = e[1]), Ts(e[1]) && (t.defaultValue = e[1]), Ts(e[2]) && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                const n = e[3] || e[2];
                Object.keys(n).forEach(e => {
                    t[e] = n[e]
                })
            }
            return t
        },
        interpolation: {
            escapeValue: !0,
            format: e => e,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        },
        cacheInBuiltFormats: !0
    }),
    fl = e => (Ts(e.ns) && (e.ns = [e.ns]), Ts(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), Ts(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs ? .indexOf ? .("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), "boolean" == typeof e.initImmediate && (e.initAsync = e.initImmediate), e),
    pl = () => {};
class hl extends Gs {
    constructor(e = {}, t) {
        var n;
        if (super(), this.options = fl(e), this.services = {}, this.logger = Ws, this.modules = {
                external: []
            }, n = this, Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(e => {
                "function" == typeof n[e] && (n[e] = n[e].bind(n))
            }), t && !this.isInitialized && !e.isClone) {
            if (!this.options.initAsync) return this.init(e, t), this;
            setTimeout(() => {
                this.init(e, t)
            }, 0)
        }
    }
    init(e = {}, t) {
        this.isInitializing = !0, "function" == typeof e && (t = e, e = {}), null == e.defaultNS && e.ns && (Ts(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
        const n = dl();
        this.options = { ...n,
            ...this.options,
            ...fl(e)
        }, this.options.interpolation = { ...n.interpolation,
            ...this.options.interpolation
        }, void 0 !== e.keySeparator && (this.options.userDefinedKeySeparator = e.keySeparator), void 0 !== e.nsSeparator && (this.options.userDefinedNsSeparator = e.nsSeparator);
        const r = e => e ? "function" == typeof e ? new e : e : null;
        if (!this.options.isClone) {
            let e;
            this.modules.logger ? Ws.init(r(this.modules.logger), this.options) : Ws.init(null, this.options), e = this.modules.formatter ? this.modules.formatter : ul;
            const t = new el(this.options);
            this.store = new qs(this.options.resources, this.options);
            const a = this.services;
            a.logger = Ws, a.resourceStore = this.store, a.languageUtils = t, a.pluralResolver = new rl(t, {
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            });
            this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), !e || this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format || (a.formatter = r(e), a.formatter.init && a.formatter.init(a, this.options), this.options.interpolation.format = a.formatter.format.bind(a.formatter)), a.interpolator = new ol(this.options), a.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, a.backendConnector = new cl(r(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (e, ...t) => {
                this.emit(e, ...t)
            }), this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector), a.languageDetector.init && a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new Zs(this.services, this.options), this.translator.on("*", (e, ...t) => {
                this.emit(e, ...t)
            }), this.modules.external.forEach(e => {
                e.init && e.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, t || (t = pl), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
        }
        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(e => {
            this[e] = (...t) => this.store[e](...t)
        });
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(e => {
            this[e] = (...t) => (this.store[e](...t), this)
        });
        const a = xs(),
            i = () => {
                const e = (e, n) => {
                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), a.resolve(n), t(e, n)
                };
                if (this.languages && !this.isInitialized) return e(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, e)
            };
        return this.options.resources || !this.options.initAsync ? i() : setTimeout(i, 0), a
    }
    loadResources(e, t = pl) {
        let n = t;
        const r = Ts(e) ? e : this.language;
        if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
            if ("cimode" === r ? .toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return n();
            const e = [],
                t = t => {
                    if (!t) return;
                    if ("cimode" === t) return;
                    this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                        "cimode" !== t && e.indexOf(t) < 0 && e.push(t)
                    })
                };
            if (r) t(r);
            else {
                this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e))
            }
            this.options.preload ? .forEach ? .(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(e)
            })
        } else n(null)
    }
    reloadResources(e, t, n) {
        const r = xs();
        return "function" == typeof e && (n = e, e = void 0), "function" == typeof t && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = pl), this.services.backendConnector.reload(e, t, e => {
            r.resolve(), n(e)
        }), r
    }
    use(e) {
        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && Ks.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
    }
    setResolvedLanguage(e) {
        if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1)) {
            for (let e = 0; e < this.languages.length; e++) {
                const t = this.languages[e];
                if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                    this.resolvedLanguage = t;
                    break
                }
            }!this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e))
        }
    }
    changeLanguage(e, t) {
        this.isLanguageChangingTo = e;
        const n = xs();
        this.emit("languageChanging", e);
        const r = e => {
                this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
            },
            a = (a, i) => {
                i ? this.isLanguageChangingTo === e && (r(i), this.translator.changeLanguage(i), this.isLanguageChangingTo = void 0, this.emit("languageChanged", i), this.logger.log("languageChanged", i)) : this.isLanguageChangingTo = void 0, n.resolve((...e) => this.t(...e)), t && t(a, (...e) => this.t(...e))
            },
            i = t => {
                e || t || !this.services.languageDetector || (t = []);
                const n = Ts(t) ? t : t && t[0],
                    i = this.store.hasLanguageSomeTranslations(n) ? n : this.services.languageUtils.getBestMatchFromCodes(Ts(t) ? [t] : t);
                i && (this.language || r(i), this.translator.language || this.translator.changeLanguage(i), this.services.languageDetector ? .cacheUserLanguage ? .(i)), this.loadResources(i, e => {
                    a(e, i)
                })
            };
        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(i) : this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()), n
    }
    getFixedT(e, t, n) {
        const r = (e, t, ...a) => {
            let i;
            i = "object" != typeof t ? this.options.overloadTranslationOptionHandler([e, t].concat(a)) : { ...t
            }, i.lng = i.lng || r.lng, i.lngs = i.lngs || r.lngs, i.ns = i.ns || r.ns, "" !== i.keyPrefix && (i.keyPrefix = i.keyPrefix || n || r.keyPrefix);
            const o = this.options.keySeparator || ".";
            let s;
            return i.keyPrefix && Array.isArray(e) ? s = e.map(e => ("function" == typeof e && (e = Xs(e, { ...this.options,
                ...t
            })), `${i.keyPrefix}${o}${e}`)) : ("function" == typeof e && (e = Xs(e, { ...this.options,
                ...t
            })), s = i.keyPrefix ? `${i.keyPrefix}${o}${e}` : e), this.t(s, i)
        };
        return Ts(e) ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r
    }
    t(...e) {
        return this.translator ? .translate(...e)
    }
    exists(...e) {
        return this.translator ? .exists(...e)
    }
    setDefaultNamespace(e) {
        this.options.defaultNS = e
    }
    hasLoadedNamespace(e, t = {}) {
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const n = t.lng || this.resolvedLanguage || this.languages[0],
            r = !!this.options && this.options.fallbackLng,
            a = this.languages[this.languages.length - 1];
        if ("cimode" === n.toLowerCase()) return !0;
        const i = (e, t) => {
            const n = this.services.backendConnector.state[`${e}|${t}`];
            return -1 === n || 0 === n || 2 === n
        };
        if (t.precheck) {
            const e = t.precheck(this, i);
            if (void 0 !== e) return e
        }
        return !!this.hasResourceBundle(n, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!i(n, e) || r && !i(a, e)))
    }
    loadNamespaces(e, t) {
        const n = xs();
        return this.options.ns ? (Ts(e) && (e = [e]), e.forEach(e => {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
        }), this.loadResources(e => {
            n.resolve(), t && t(e)
        }), n) : (t && t(), Promise.resolve())
    }
    loadLanguages(e, t) {
        const n = xs();
        Ts(e) && (e = [e]);
        const r = this.options.preload || [],
            a = e.filter(e => r.indexOf(e) < 0 && this.services.languageUtils.isSupportedCode(e));
        return a.length ? (this.options.preload = r.concat(a), this.loadResources(e => {
            n.resolve(), t && t(e)
        }), n) : (t && t(), Promise.resolve())
    }
    dir(e) {
        if (e || (e = this.resolvedLanguage || (this.languages ? .length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
        try {
            const t = new Intl.Locale(e);
            if (t && t.getTextInfo) {
                const e = t.getTextInfo();
                if (e && e.direction) return e.direction
            }
        } catch (n) {}
        const t = this.services ? .languageUtils || new el(dl());
        return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance(e = {}, t) {
        return new hl(e, t)
    }
    cloneInstance(e = {}, t = pl) {
        const n = e.forkResourceStore;
        n && delete e.forkResourceStore;
        const r = { ...this.options,
                ...e,
                isClone: !0
            },
            a = new hl(r);
        void 0 === e.debug && void 0 === e.prefix || (a.logger = a.logger.clone(e));
        if (["store", "services", "language"].forEach(e => {
                a[e] = this[e]
            }), a.services = { ...this.services
            }, a.services.utils = {
                hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
            }, n) {
            const e = Object.keys(this.store.data).reduce((e, t) => (e[t] = { ...this.store.data[t]
            }, e[t] = Object.keys(e[t]).reduce((n, r) => (n[r] = { ...e[t][r]
            }, n), e[t]), e), {});
            a.store = new qs(e, r), a.services.resourceStore = a.store
        }
        return a.translator = new Zs(a.services, r), a.translator.on("*", (e, ...t) => {
            a.emit(e, ...t)
        }), a.init(r, t), a.translator.options = r, a.translator.backendConnector.services.utils = {
            hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
        }, a
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const gl = hl.createInstance();
gl.createInstance = hl.createInstance, gl.createInstance, gl.dir, gl.init, gl.loadResources, gl.reloadResources, gl.use, gl.changeLanguage, gl.getFixedT;
const ml = gl.t;
gl.exists, gl.setDefaultNamespace, gl.hasLoadedNamespace, gl.loadNamespaces, gl.loadLanguages;
const bl = new Date;
bl.setDate(bl.getDate() + 1), bl.toISOString(), eo.Home, Tt.CartPriceDrop, eo.Collection, Tt.CategoryDiscovery, eo.Product, Tt.ProductDeepDive, eo.Query, Tt.Search;
var yl = (e => (e.Checkmark = "Checkmark", e.SmileEmoji = "SmileEmoji", e.FrownEmoji = "FrownEmoji", e.Star = "Star", e.Clock = "Clock", e.Calendar = "Calendar", e.Location = "Location", e.Tag = "Tag", e.OpenFilled = "OpenFilled", e.AddFilled = "AddFilled", e.Loading = "Loading", e))(yl || {}),
    vl = (e => (e.GoodReview = "GoodReview", e.BadReview = "BadReview", e.Highlight = "Highlight", e.Default = "Default", e.Loading = "Loading", e))(vl || {}),
    wl = (e => (e.Vertical = "Vertical", e.Horizontal = "Horizontal", e))(wl || {});
async function Sl(e = null, t = "", n = "", r = !1) {
    if (r) {
        return {
            IsEntryPointEnabled: !0,
            IsFeedbackEnabled: !0,
            ShouldInstrumentAllClientErrors: !1,
            UseStorefrontAPI: !1,
            IsVariantSpecificContentEnabled: !1,
            ShouldHackCart: !1,
            IsClarityCustomIdentityEnabled: !1,
            IsClarityNudgeEnabled: !1,
            IsBrandedPlaceholderEnabled: !1,
            IsKalkiCustomEnabled: !1,
            IsBubbleEntrypointEnabled: !1,
            IsExPEntryPointDisabled: !1,
            IsPlaceholderOnBubbleEnabled: !1,
            IsColorConfusionNudgeEnabled: !1,
            IsComparisonNudgeEnabled: !1,
            IsWebsiteAbandonmentNudgeEnabled: !1,
            IsFreeShippingNudgeEnabled: !1,
            IsLivePreviewSearchEnabled: !1,
            UseNewNudgeCopy: !1,
            UseNewNudgeCopyAndPrompt: !1,
            IsBubbleDragEnabled: !1,
            IsMcpFlowEnabled: !1,
            IsCuratedCollectionDealsNudgeEnabled: !1,
            IsCuratedCollectionBestsellersNudgeEnabled: !1,
            IsHomePageCollectionChipsFromClientEnabled: !1,
            IsRotatingNudgesEnabled: !1
        }
    }
    var a = null;
    e && (a = e);
    var i = await ls(a, n, t);
    const o = await fetch(i, {
        method: "GET"
    });
    if (!o.ok) return null;
    try {
        return await o.json()
    } catch {
        return null
    }
}
wl.Vertical, yl.Checkmark, yl.Checkmark, yl.Checkmark, yl.Checkmark, yl.Checkmark, yl.Checkmark, yl.Checkmark, yl.Checkmark, yl.Checkmark, wl.Vertical, wl.Vertical, wl.Vertical, wl.Vertical, wl.Vertical, wl.Horizontal;
const kl = "https://adsagentclientafd-b7hqhjdrf3fpeqh2.b01.azurefd.net/assets/index-B6m1v7j0.css";

function El(e) {
    return (El = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function Cl() {
    return "function" == typeof XMLHttpRequest || "object" === ("undefined" == typeof XMLHttpRequest ? "undefined" : El(XMLHttpRequest))
}

function Ol(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Tl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ol(Object(n), !0).forEach(function(t) {
            xl(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ol(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function xl(e, t, n) {
    return (t = function(e) {
        var t = function(e, t) {
            if ("object" != _l(e) || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t);
                if ("object" != _l(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == _l(t) ? t : t + ""
    }(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _l(e) {
    return (_l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
var Nl, Pl, Al = "function" == typeof fetch ? fetch : void 0;
if ("undefined" != typeof global && global.fetch ? Al = global.fetch : "undefined" != typeof window && window.fetch && (Al = window.fetch), Cl() && ("undefined" != typeof global && global.XMLHttpRequest ? Nl = global.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (Nl = window.XMLHttpRequest)), "function" == typeof ActiveXObject && ("undefined" != typeof global && global.ActiveXObject ? Pl = global.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (Pl = window.ActiveXObject)), "function" != typeof Al && (Al = void 0), !Al && !Nl && !Pl) try {
    L(() =>
        import ("./chunk-browser-ponyfill-ZEt_XXUs.js").then(e => e.b), []).then(function(e) {
        Al = e.default
    }).catch(function() {})
} catch (Jl) {}
var Ll = function(e, t) {
        if (t && "object" === _l(t)) {
            var n = "";
            for (var r in t) n += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
            if (!n) return e;
            e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
        }
        return e
    },
    Il = function(e, t, n, r) {
        var a = function(e) {
            if (!e.ok) return n(e.statusText || "Error", {
                status: e.status
            });
            e.text().then(function(t) {
                n(null, {
                    status: e.status,
                    data: t
                })
            }).catch(n)
        };
        if (r) {
            var i = r(e, t);
            if (i instanceof Promise) return void i.then(a).catch(n)
        }
        "function" == typeof fetch ? fetch(e, t).then(a).catch(n) : Al(e, t).then(a).catch(n)
    },
    Rl = !1,
    Ml = function(e, t, n, r) {
        return "function" == typeof n && (r = n, n = void 0), r = r || function() {}, Al && 0 !== t.indexOf("file:") ? function(e, t, n, r) {
            e.queryStringParams && (t = Ll(t, e.queryStringParams));
            var a = Tl({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
            "undefined" == typeof window && "undefined" != typeof global && void 0 !== global.process && global.process.versions && global.process.versions.node && (a["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), n && (a["Content-Type"] = "application/json");
            var i = "function" == typeof e.requestOptions ? e.requestOptions(n) : e.requestOptions,
                o = Tl({
                    method: n ? "POST" : "GET",
                    body: n ? e.stringify(n) : void 0,
                    headers: a
                }, Rl ? {} : i),
                s = "function" == typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
            try {
                Il(t, o, r, s)
            } catch (Jl) {
                if (!i || 0 === Object.keys(i).length || !Jl.message || Jl.message.indexOf("not implemented") < 0) return r(Jl);
                try {
                    Object.keys(i).forEach(function(e) {
                        delete o[e]
                    }), Il(t, o, r, s), Rl = !0
                } catch (l) {
                    r(l)
                }
            }
        }(e, t, n, r) : Cl() || "function" == typeof ActiveXObject ? function(e, t, n, r) {
            n && "object" === _l(n) && (n = Ll("", n).slice(1)), e.queryStringParams && (t = Ll(t, e.queryStringParams));
            try {
                var a = Nl ? new Nl : new Pl("MSXML2.XMLHTTP.3.0");
                a.open(n ? "POST" : "GET", t, 1), e.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!e.withCredentials, n && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
                var i = e.customHeaders;
                if (i = "function" == typeof i ? i() : i)
                    for (var o in i) a.setRequestHeader(o, i[o]);
                a.onreadystatechange = function() {
                    a.readyState > 3 && r(a.status >= 400 ? a.statusText : null, {
                        status: a.status,
                        data: a.responseText
                    })
                }, a.send(n)
            } catch (Jl) {
                console
            }
        }(e, t, n, r) : void r(new Error("No fetch and no xhr implementation found!"))
    };

function Dl(e) {
    return (Dl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function zl(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function Fl(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? zl(Object(n), !0).forEach(function(t) {
            jl(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zl(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}

function Ul(e, t, n) {
    return t && function(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Vl(r.key), r)
        }
    }(e.prototype, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function jl(e, t, n) {
    return (t = Vl(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Vl(e) {
    var t = function(e, t) {
        if ("object" != Dl(e) || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t);
            if ("object" != Dl(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return String(e)
    }(e, "string");
    return "symbol" == Dl(t) ? t : t + ""
}
var Hl = Ul(function e(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    ! function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }(this, e), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r)
}, [{
    key: "init",
    value: function(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (this.services = e, this.options = Fl(Fl(Fl({}, {
                loadPath: "/locales/{{lng}}/{{ns}}.json",
                addPath: "/locales/add/{{lng}}/{{ns}}",
                parse: function(e) {
                    return JSON.parse(e)
                },
                stringify: JSON.stringify,
                parsePayload: function(e, t, n) {
                    return jl({}, t, n || "")
                },
                parseLoadPayload: function(e, t) {},
                request: Ml,
                reloadInterval: "undefined" == typeof window && 36e5,
                customHeaders: {},
                queryStringParams: {},
                crossDomain: !1,
                withCredentials: !1,
                overrideMimeType: !1,
                requestOptions: {
                    mode: "cors",
                    credentials: "same-origin",
                    cache: "default"
                }
            }), this.options || {}), n), this.allOptions = r, this.services && this.options.reloadInterval) {
            var a = setInterval(function() {
                return t.reload()
            }, this.options.reloadInterval);
            "object" === Dl(a) && "function" == typeof a.unref && a.unref()
        }
    }
}, {
    key: "readMulti",
    value: function(e, t, n) {
        this._readAny(e, e, t, t, n)
    }
}, {
    key: "read",
    value: function(e, t, n) {
        this._readAny([e], e, [t], t, n)
    }
}, {
    key: "_readAny",
    value: function(e, t, n, r, a) {
        var i, o = this,
            s = this.options.loadPath;
        "function" == typeof this.options.loadPath && (s = this.options.loadPath(e, n)), (s = function(e) {
            return !!e && "function" == typeof e.then
        }(i = s) ? i : Promise.resolve(i)).then(function(i) {
            if (!i) return a(null, {});
            var s = o.services.interpolator.interpolate(i, {
                lng: e.join("+"),
                ns: n.join("+")
            });
            o.loadUrl(s, a, t, r)
        })
    }
}, {
    key: "loadUrl",
    value: function(e, t, n, r) {
        var a = this,
            i = "string" == typeof n ? [n] : n,
            o = "string" == typeof r ? [r] : r,
            s = this.options.parseLoadPayload(i, o);
        this.options.request(this.options, e, s, function(i, o) {
            if (o && (o.status >= 500 && o.status < 600 || !o.status)) return t("failed loading " + e + "; status code: " + o.status, !0);
            if (o && o.status >= 400 && o.status < 500) return t("failed loading " + e + "; status code: " + o.status, !1);
            if (!o && i && i.message) {
                var s = i.message.toLowerCase();
                if (["failed", "fetch", "network", "load"].find(function(e) {
                        return s.indexOf(e) > -1
                    })) return t("failed loading " + e + ": " + i.message, !0)
            }
            if (i) return t(i, !1);
            var l, u;
            try {
                l = "string" == typeof o.data ? a.options.parse(o.data, n, r) : o.data
            } catch (Jl) {
                u = "failed parsing " + e + " to json"
            }
            if (u) return t(u, !1);
            t(null, l)
        })
    }
}, {
    key: "create",
    value: function(e, t, n, r, a) {
        var i = this;
        if (this.options.addPath) {
            "string" == typeof e && (e = [e]);
            var o = this.options.parsePayload(t, n, r),
                s = 0,
                l = [],
                u = [];
            e.forEach(function(n) {
                var r = i.options.addPath;
                "function" == typeof i.options.addPath && (r = i.options.addPath(n, t));
                var c = i.services.interpolator.interpolate(r, {
                    lng: n,
                    ns: t
                });
                i.options.request(i.options, c, o, function(t, n) {
                    s += 1, l.push(t), u.push(n), s === e.length && "function" == typeof a && a(l, u)
                })
            })
        }
    }
}, {
    key: "reload",
    value: function() {
        var e = this,
            t = this.services,
            n = t.backendConnector,
            r = t.languageUtils,
            a = t.logger,
            i = n.language;
        if (!i || "cimode" !== i.toLowerCase()) {
            var o = [],
                s = function(e) {
                    r.toResolveHierarchy(e).forEach(function(e) {
                        o.indexOf(e) < 0 && o.push(e)
                    })
                };
            s(i), this.allOptions.preload && this.allOptions.preload.forEach(function(e) {
                return s(e)
            }), o.forEach(function(t) {
                e.allOptions.ns.forEach(function(e) {
                    n.read(t, e, "read", null, null, function(r, i) {
                        r && a.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), r), !r && i && a.log("loaded namespace ".concat(e, " for language ").concat(t), i), n.loaded("".concat(t, "|").concat(e), r, i)
                    })
                })
            })
        }
    }
}]);
Hl.type = "backend";
const Bl = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
    $l = {
        "&amp;": "&",
        "&#38;": "&",
        "&lt;": "<",
        "&#60;": "<",
        "&gt;": ">",
        "&#62;": ">",
        "&apos;": "'",
        "&#39;": "'",
        "&quot;": '"',
        "&#34;": '"',
        "&nbsp;": " ",
        "&#160;": " ",
        "&copy;": "©",
        "&#169;": "©",
        "&reg;": "®",
        "&#174;": "®",
        "&hellip;": "…",
        "&#8230;": "…",
        "&#x2F;": "/",
        "&#47;": "/"
    },
    Wl = e => $l[e];
let Gl = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: e => e.replace(Bl, Wl)
};
const ql = () => Gl;
let Kl;
const Ql = () => Kl,
    Xl = {
        type: "3rdParty",
        init(e) {
            ((e = {}) => {
                Gl = { ...Gl,
                    ...e
                }
            })(e.options.react), (e => {
                Kl = e
            })(e)
        }
    };
gl.use(Hl).use(Xl).init({
    lng: sn(),
    fallbackLng: "en",
    debug: Ve,
    ns: ["translation"],
    defaultNS: "translation",
    backend: {
        loadPath: `${Be}/locales/{{lng}}/{{ns}}.json?v=${Date.now()}`
    },
    detection: {
        order: ["querystring", "navigator", "localStorage", "htmlTag"],
        lookupQuerystring: "lng",
        lookupLocalStorage: "i18nextLng",
        caches: ["localStorage"]
    },
    interpolation: {
        escapeValue: !1
    },
    react: {
        useSuspense: !0
    }
});
export {
    Ut as $, _i as A, ml as B, Xo as C, Ii as D, je as E, He as F, mt as G, qe as H, We as I, Ue as J, bt as K, yt as L, sn as M, on as N, an as O, rn as P, wo as Q, P as R, cn as S, Me as T, Ve as U, ts as V, Be as W, un as X, Ot as Y, Ft as Z, L as _, _e as a, So as a$, zt as a0, Bt as a1, $t as a2, Xt as a3, Yt as a4, Jt as a5, Zt as a6, Pt as a7, xt as a8, _ as a9, ht as aA, vn as aB, Io as aC, wi as aD, Si as aE, Xi as aF, co as aG, $i as aH, hi as aI, ln as aJ, gi as aK, Ht as aL, Ri as aM, zi as aN, Mi as aO, fo as aP, Ui as aQ, Ya as aR, Ja as aS, ft as aT, tr as aU, lo as aV, ro as aW, oo as aX, so as aY, ao as aZ, io as a_, ye as aa, Lo as ab, Jo as ac, De as ad, Le as ae, $e as af, Eo as ag, to as ah, bo as ai, Ao as aj, er as ak, Ss as al, ks as am, rr as an, eo as ao, gs as ap, Yo as aq, ze as ar, ps as as, Tt as at, ds as au, Zi as av, es as aw, Fe as ax, hs as ay, kn as az, $n as b, ei as b$, Hn as b0, ke as b1, Pi as b2, Wo as b3, Xa as b4, ui as b5, mi as b6, Yi as b7, Bi as b8, Ji as b9, Qi as bA, yo as bB, ko as bC, vo as bD, cs as bE, Oo as bF, At as bG, uo as bH, mo as bI, Cn as bJ, En as bK, Pn as bL, An as bM, Un as bN, pi as bO, Fi as bP, pt as bQ, Di as bR, po as bS, To as bT, ho as bU, go as bV, Zo as bW, ci as bX, fi as bY, wl as bZ, ii as b_, Gi as ba, Cs as bb, is as bc, as as bd, rs as be, Ql as bf, ql as bg, ve as bh, ut as bi, xo as bj, No as bk, _o as bl, yl as bm, os as bn, jn as bo, Za as bp, bi as bq, ns as br, ki as bs, Ei as bt, si as bu, ai as bv, xi as bw, Co as bx, ct as by, dt as bz, vi as c, jo as c0, qo as c1, li as c2, Nt as c3, Hi as c4, Vi as c5, Lt as c6, It as c7, ji as c8, nr as c9, vl as ca, Oi as cb, Ti as cc, Po as cd, ti as d, gt as e, Ie as f, Sl as g, Ki as h, Ni as i, u as j, kl as k, yi as l, Ne as m, t as n, n as o, Bn as p, no as q, be as r, Wi as s, qi as t, Pe as u, Wn as v, Ge as w, yn as x, Do as y, di as z
};