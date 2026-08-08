(function() {
    "use strict";
    var mf = document.createElement("style");
    mf.textContent = `.chat-window{width:min(400px,calc(100vw - 10px));height:min(600px,calc(100vh - 50px));background:#fff;box-shadow:0 4px 10px #0000004d;border-radius:20px;position:fixed;bottom:20px;display:flex;flex-direction:column;z-index:999;overflow:hidden;animation:scaleUp .4s cubic-bezier(.34,1.56,.64,1);opacity:1;transform:scale(1);transition:all .4s cubic-bezier(.34,1.56,.64,1);pointer-events:auto;direction:ltr}.chat-header{color:#fff;padding:15px;display:flex;justify-content:space-between;align-items:center;border-radius:20px 20px 0 0}.d-widget-close-btn{background:none;border:none;color:#fff;font-size:18px;cursor:pointer;display:flex;justify-content:center;padding:1px 0;width:24px;height:24px;margin-bottom:0}.chat-messages{flex:1;padding:10px;overflow-y:auto;background-color:#fff;display:flex!important;flex-direction:column;gap:5px}.message{padding:8px 12px;border-radius:8px;position:relative;margin:4px 0;max-width:80%;word-wrap:break-word;width:fit-content}.message.user{margin-left:40px;align-self:flex-end;border-bottom-right-radius:0;color:#fff}.message.reply{padding-left:12px;background-color:#f0f0f0;margin-right:50px;margin-left:40px;align-self:flex-start;border-bottom-left-radius:0}.chat-input{display:flex;padding:10px 20px;border-top:1px solid #ddd;background-color:#fff}.chat-input input{flex:1;padding:8px 12px;border:1px solid #999999;border-radius:10px;outline:none;font-size:14px!important;color:#000!important;line-height:normal!important;letter-spacing:normal!important;font-family:Arial,Helvetica,sans-serif!important}.chat-input button{color:#fff;border:none;border-radius:50%;width:40px;height:40px;min-width:40px!important;min-height:40px!important;margin-left:10px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center}.chat-input button img{width:24px!important;height:24px!important;min-width:24px!important;min-height:24px!important;object-fit:contain}@keyframes scaleUp{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}.chat-fade-wrapper{position:fixed;bottom:20px;transition:all .4s cubic-bezier(.34,1.56,.64,1);pointer-events:none}.chat-fade-wrapper.open{opacity:1;transform:scale(1)}.chat-fade-wrapper.closing{opacity:0;transform:scale(.8);pointer-events:none}.typing-indicator{display:flex;gap:4px;height:20px;align-items:center}.typing-indicator span{width:6px;height:6px;background-color:#999;border-radius:50%;animation:blink 1.4s infinite both}.typing-indicator span:nth-child(2){animation-delay:.2s}.typing-indicator span:nth-child(3){animation-delay:.4s}@keyframes blink{0%{opacity:.2;transform:translateY(0)}20%{opacity:1;transform:translateY(-4px)}to{opacity:.2;transform:translateY(0)}}.bot-avatar{width:23px;height:23px;position:absolute;left:5px;bottom:0;border-radius:50%;margin-left:-35px;background-color:#fff;padding:0;box-shadow:0 1px 3px #0000001a}.powered-by{text-align:center;padding:15px;font-size:16px;color:#666;border-top:1px solid #eee;display:flex!important;justify-content:center;align-items:center;height:50px}.powered-by img{vertical-align:middle;margin-left:10px;margin-right:10px}.chat-window.closing{opacity:0;transform:scale(.8);pointer-events:none}.chat-window[style*="left:"],.chat-fade-wrapper[style*="left:"]{left:20px;transform-origin:bottom left}.chat-window[style*="right:"],.chat-fade-wrapper[style*="right:"]{right:20px;transform-origin:bottom right}@media screen and (max-width:480px){.chat-window{width:43vh;transform:translate(-50%)!important}.chat-window[style*="left:"]{left:184px!important}.chat-window[style*="right:"]{right:auto!important;left:-184px!important}.message{max-width:85%}.chat-input{padding:10px;width:100%;box-sizing:border-box;position:absolute;bottom:48px}.powered-by{position:absolute;bottom:0;width:100%;padding:10px;box-sizing:border-box;background:#fff}.powered-by img{margin-top:3px}}@media screen and (max-width:480px){.chat-window.closing{opacity:0;transform:translate(-50%) scale(.8)!important}}.chat-window.whatsapp-theme{background-color:#e4ddd6}.chat-window.whatsapp-theme .chat-header{background-color:#075e54!important}.chat-window.whatsapp-theme .chat-messages{background-image:url(https://cdn.shopify.com/s/files/1/0726/1339/6765/files/Dondy_production_wp_bg_img_dont_delete.jpg?v=1746507841);background-size:contain;background-repeat:repeat}.chat-window.whatsapp-theme .message{position:relative;margin:2px 0}.chat-window.whatsapp-theme .message:before{content:"";position:absolute;top:0;width:12px;height:12px}.chat-window.whatsapp-theme .message.user{margin-left:10px;margin-right:10px;background-color:#dcf8c6!important;color:#000;box-shadow:0 1px .5px #00000021;border-radius:8px 0 8px 8px}.chat-window.whatsapp-theme .message.user:before{right:-8px;background:linear-gradient(to bottom right,#dcf8c6 50%,transparent 50%)}.chat-window.whatsapp-theme .message.reply{margin-left:10px;margin-right:10px;background-color:#fff;box-shadow:0 1px .5px #00000021;border-radius:0 8px 8px}.chat-window.whatsapp-theme .message.reply:before{left:-8px;background:linear-gradient(to bottom left,#ffffff 50%,transparent 50%)}.chat-window.whatsapp-theme .chat-input{background-image:url(https://cdn.shopify.com/s/files/1/0726/1339/6765/files/Dondy_production_wp_bg_img_dont_delete.jpg?v=1746507841);background-size:contain;background-repeat:repeat;background-color:transparent;padding:10px}.chat-window.whatsapp-theme .chat-input input{border-radius:20px;background-color:#fff;border:none;padding:12px 15px}.chat-window.whatsapp-theme .chat-input button{background-color:#075e54!important}.chat-window.whatsapp-theme .powered-by{background-color:#fff}.chat-window.whatsapp-theme .bot-avatar{display:none}@keyframes whatsapp-fade-in{0%{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}.whatsapp-widget{position:fixed;bottom:10px;z-index:2147483648;display:none}.whatsapp-widget-visible{display:block!important}.whatsapp-widget-left{left:10px}.whatsapp-widget-right{right:10px}.whatsapp-widget-upper-left{left:10px;bottom:90px}.whatsapp-widget-upper-right{right:10px;bottom:90px}.whatsapp-widget-mid-upper-right{right:10px;bottom:47px}.whatsapp-widget-mid-upper-left{left:10px;bottom:47px}.whatsapp-text{font-family:Helvetica;font-weight:610;font-size:12.5px;color:#000;background-color:#ffffffda;border-radius:11px;margin:0 5.5px;padding:2px 10px}.whatsapp-flex-container{display:flex;align-items:center}#whatsapp-link{text-decoration:none}#whatsapp-link svg{stroke:none;width:var(--whatsapp-link-width);height:var(--whatsapp-link-height);display:block!important}#whatsapp-link svg path{display:block!important}#whatsapp-link svg g{display:block!important;transform-origin:revert!important}
/*$vite$:1*/`, document.head.appendChild(mf);
    var Qn = {
            exports: {}
        },
        Me = {};
    /**
     * @license React
     * react-jsx-runtime.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var yf;

    function U1() {
        if (yf) return Me;
        yf = 1;
        var g = Symbol.for("react.transitional.element"),
            P = Symbol.for("react.fragment");

        function j(y, J, ll) {
            var nl = null;
            if (ll !== void 0 && (nl = "" + ll), J.key !== void 0 && (nl = "" + J.key), "key" in J) {
                ll = {};
                for (var ml in J) ml !== "key" && (ll[ml] = J[ml])
            } else ll = J;
            return J = ll.ref, {
                $$typeof: g,
                type: y,
                key: nl,
                ref: J !== void 0 ? J : null,
                props: ll
            }
        }
        return Me.Fragment = P, Me.jsx = j, Me.jsxs = j, Me
    }
    var vf;

    function C1() {
        return vf || (vf = 1, Qn.exports = U1()), Qn.exports
    }
    var $ = C1(),
        Xn = {
            exports: {}
        },
        Oe = {},
        Zn = {
            exports: {}
        },
        Ln = {};
    /**
     * @license React
     * scheduler.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var rf;

    function N1() {
        return rf || (rf = 1, (function(g) {
            function P(S, A) {
                var R = S.length;
                S.push(A);
                l: for (; 0 < R;) {
                    var sl = R - 1 >>> 1,
                        rl = S[sl];
                    if (0 < J(rl, A)) S[sl] = A, S[R] = rl, R = sl;
                    else break l
                }
            }

            function j(S) {
                return S.length === 0 ? null : S[0]
            }

            function y(S) {
                if (S.length === 0) return null;
                var A = S[0],
                    R = S.pop();
                if (R !== A) {
                    S[0] = R;
                    l: for (var sl = 0, rl = S.length, o = rl >>> 1; sl < o;) {
                        var E = 2 * (sl + 1) - 1,
                            _ = S[E],
                            x = E + 1,
                            Y = S[x];
                        if (0 > J(_, R)) x < rl && 0 > J(Y, _) ? (S[sl] = Y, S[x] = R, sl = x) : (S[sl] = _, S[E] = R, sl = E);
                        else if (x < rl && 0 > J(Y, R)) S[sl] = Y, S[x] = R, sl = x;
                        else break l
                    }
                }
                return A
            }

            function J(S, A) {
                var R = S.sortIndex - A.sortIndex;
                return R !== 0 ? R : S.id - A.id
            }
            if (g.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var ll = performance;
                g.unstable_now = function() {
                    return ll.now()
                }
            } else {
                var nl = Date,
                    ml = nl.now();
                g.unstable_now = function() {
                    return nl.now() - ml
                }
            }
            var M = [],
                z = [],
                H = 1,
                D = null,
                Z = 3,
                zl = !1,
                Ml = !1,
                yl = !1,
                Ol = !1,
                El = typeof setTimeout == "function" ? setTimeout : null,
                tl = typeof clearTimeout == "function" ? clearTimeout : null,
                X = typeof setImmediate < "u" ? setImmediate : null;

            function F(S) {
                for (var A = j(z); A !== null;) {
                    if (A.callback === null) y(z);
                    else if (A.startTime <= S) y(z), A.sortIndex = A.expirationTime, P(M, A);
                    else break;
                    A = j(z)
                }
            }

            function pl(S) {
                if (yl = !1, F(S), !Ml)
                    if (j(M) !== null) Ml = !0, vl || (vl = !0, Ql());
                    else {
                        var A = j(z);
                        A !== null && At(pl, A.startTime - S)
                    }
            }
            var vl = !1,
                G = -1,
                jl = 5,
                K = -1;

            function Kl() {
                return Ol ? !0 : !(g.unstable_now() - K < jl)
            }

            function Wl() {
                if (Ol = !1, vl) {
                    var S = g.unstable_now();
                    K = S;
                    var A = !0;
                    try {
                        l: {
                            Ml = !1,
                            yl && (yl = !1, tl(G), G = -1),
                            zl = !0;
                            var R = Z;
                            try {
                                t: {
                                    for (F(S), D = j(M); D !== null && !(D.expirationTime > S && Kl());) {
                                        var sl = D.callback;
                                        if (typeof sl == "function") {
                                            D.callback = null, Z = D.priorityLevel;
                                            var rl = sl(D.expirationTime <= S);
                                            if (S = g.unstable_now(), typeof rl == "function") {
                                                D.callback = rl, F(S), A = !0;
                                                break t
                                            }
                                            D === j(M) && y(M), F(S)
                                        } else y(M);
                                        D = j(M)
                                    }
                                    if (D !== null) A = !0;
                                    else {
                                        var o = j(z);
                                        o !== null && At(pl, o.startTime - S), A = !1
                                    }
                                }
                                break l
                            }
                            finally {
                                D = null, Z = R, zl = !1
                            }
                            A = void 0
                        }
                    }
                    finally {
                        A ? Ql() : vl = !1
                    }
                }
            }
            var Ql;
            if (typeof X == "function") Ql = function() {
                X(Wl)
            };
            else if (typeof MessageChannel < "u") {
                var Ta = new MessageChannel,
                    Nt = Ta.port2;
                Ta.port1.onmessage = Wl, Ql = function() {
                    Nt.postMessage(null)
                }
            } else Ql = function() {
                El(Wl, 0)
            };

            function At(S, A) {
                G = El(function() {
                    S(g.unstable_now())
                }, A)
            }
            g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(S) {
                S.callback = null
            }, g.unstable_forceFrameRate = function(S) {
                0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : jl = 0 < S ? Math.floor(1e3 / S) : 5
            }, g.unstable_getCurrentPriorityLevel = function() {
                return Z
            }, g.unstable_next = function(S) {
                switch (Z) {
                    case 1:
                    case 2:
                    case 3:
                        var A = 3;
                        break;
                    default:
                        A = Z
                }
                var R = Z;
                Z = A;
                try {
                    return S()
                } finally {
                    Z = R
                }
            }, g.unstable_requestPaint = function() {
                Ol = !0
            }, g.unstable_runWithPriority = function(S, A) {
                switch (S) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        S = 3
                }
                var R = Z;
                Z = S;
                try {
                    return A()
                } finally {
                    Z = R
                }
            }, g.unstable_scheduleCallback = function(S, A, R) {
                var sl = g.unstable_now();
                switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? sl + R : sl) : R = sl, S) {
                    case 1:
                        var rl = -1;
                        break;
                    case 2:
                        rl = 250;
                        break;
                    case 5:
                        rl = 1073741823;
                        break;
                    case 4:
                        rl = 1e4;
                        break;
                    default:
                        rl = 5e3
                }
                return rl = R + rl, S = {
                    id: H++,
                    callback: A,
                    priorityLevel: S,
                    startTime: R,
                    expirationTime: rl,
                    sortIndex: -1
                }, R > sl ? (S.sortIndex = R, P(z, S), j(M) === null && S === j(z) && (yl ? (tl(G), G = -1) : yl = !0, At(pl, R - sl))) : (S.sortIndex = rl, P(M, S), Ml || zl || (Ml = !0, vl || (vl = !0, Ql()))), S
            }, g.unstable_shouldYield = Kl, g.unstable_wrapCallback = function(S) {
                var A = Z;
                return function() {
                    var R = Z;
                    Z = A;
                    try {
                        return S.apply(this, arguments)
                    } finally {
                        Z = R
                    }
                }
            }
        })(Ln)), Ln
    }
    var gf;

    function H1() {
        return gf || (gf = 1, Zn.exports = N1()), Zn.exports
    }
    var wn = {
            exports: {}
        },
        q = {};
    /**
     * @license React
     * react.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var pf;

    function R1() {
        if (pf) return q;
        pf = 1;
        var g = Symbol.for("react.transitional.element"),
            P = Symbol.for("react.portal"),
            j = Symbol.for("react.fragment"),
            y = Symbol.for("react.strict_mode"),
            J = Symbol.for("react.profiler"),
            ll = Symbol.for("react.consumer"),
            nl = Symbol.for("react.context"),
            ml = Symbol.for("react.forward_ref"),
            M = Symbol.for("react.suspense"),
            z = Symbol.for("react.memo"),
            H = Symbol.for("react.lazy"),
            D = Symbol.for("react.activity"),
            Z = Symbol.iterator;

        function zl(o) {
            return o === null || typeof o != "object" ? null : (o = Z && o[Z] || o["@@iterator"], typeof o == "function" ? o : null)
        }
        var Ml = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            },
            yl = Object.assign,
            Ol = {};

        function El(o, E, _) {
            this.props = o, this.context = E, this.refs = Ol, this.updater = _ || Ml
        }
        El.prototype.isReactComponent = {}, El.prototype.setState = function(o, E) {
            if (typeof o != "object" && typeof o != "function" && o != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, o, E, "setState")
        }, El.prototype.forceUpdate = function(o) {
            this.updater.enqueueForceUpdate(this, o, "forceUpdate")
        };

        function tl() {}
        tl.prototype = El.prototype;

        function X(o, E, _) {
            this.props = o, this.context = E, this.refs = Ol, this.updater = _ || Ml
        }
        var F = X.prototype = new tl;
        F.constructor = X, yl(F, El.prototype), F.isPureReactComponent = !0;
        var pl = Array.isArray;

        function vl() {}
        var G = {
                H: null,
                A: null,
                T: null,
                S: null
            },
            jl = Object.prototype.hasOwnProperty;

        function K(o, E, _) {
            var x = _.ref;
            return {
                $$typeof: g,
                type: o,
                key: E,
                ref: x !== void 0 ? x : null,
                props: _
            }
        }

        function Kl(o, E) {
            return K(o.type, E, o.props)
        }

        function Wl(o) {
            return typeof o == "object" && o !== null && o.$$typeof === g
        }

        function Ql(o) {
            var E = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + o.replace(/[=:]/g, function(_) {
                return E[_]
            })
        }
        var Ta = /\/+/g;

        function Nt(o, E) {
            return typeof o == "object" && o !== null && o.key != null ? Ql("" + o.key) : E.toString(36)
        }

        function At(o) {
            switch (o.status) {
                case "fulfilled":
                    return o.value;
                case "rejected":
                    throw o.reason;
                default:
                    switch (typeof o.status == "string" ? o.then(vl, vl) : (o.status = "pending", o.then(function(E) {
                        o.status === "pending" && (o.status = "fulfilled", o.value = E)
                    }, function(E) {
                        o.status === "pending" && (o.status = "rejected", o.reason = E)
                    })), o.status) {
                        case "fulfilled":
                            return o.value;
                        case "rejected":
                            throw o.reason
                    }
            }
            throw o
        }

        function S(o, E, _, x, Y) {
            var L = typeof o;
            (L === "undefined" || L === "boolean") && (o = null);
            var il = !1;
            if (o === null) il = !0;
            else switch (L) {
                case "bigint":
                case "string":
                case "number":
                    il = !0;
                    break;
                case "object":
                    switch (o.$$typeof) {
                        case g:
                        case P:
                            il = !0;
                            break;
                        case H:
                            return il = o._init, S(il(o._payload), E, _, x, Y)
                    }
            }
            if (il) return Y = Y(o), il = x === "" ? "." + Nt(o, 0) : x, pl(Y) ? (_ = "", il != null && (_ = il.replace(Ta, "$&/") + "/"), S(Y, E, _, "", function(xe) {
                return xe
            })) : Y != null && (Wl(Y) && (Y = Kl(Y, _ + (Y.key == null || o && o.key === Y.key ? "" : ("" + Y.key).replace(Ta, "$&/") + "/") + il)), E.push(Y)), 1;
            il = 0;
            var kl = x === "" ? "." : x + ":";
            if (pl(o))
                for (var xl = 0; xl < o.length; xl++) x = o[xl], L = kl + Nt(x, xl), il += S(x, E, _, L, Y);
            else if (xl = zl(o), typeof xl == "function")
                for (o = xl.call(o), xl = 0; !(x = o.next()).done;) x = x.value, L = kl + Nt(x, xl++), il += S(x, E, _, L, Y);
            else if (L === "object") {
                if (typeof o.then == "function") return S(At(o), E, _, x, Y);
                throw E = String(o), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.")
            }
            return il
        }

        function A(o, E, _) {
            if (o == null) return o;
            var x = [],
                Y = 0;
            return S(o, x, "", "", function(L) {
                return E.call(_, L, Y++)
            }), x
        }

        function R(o) {
            if (o._status === -1) {
                var E = o._result;
                E = E(), E.then(function(_) {
                    (o._status === 0 || o._status === -1) && (o._status = 1, o._result = _)
                }, function(_) {
                    (o._status === 0 || o._status === -1) && (o._status = 2, o._result = _)
                }), o._status === -1 && (o._status = 0, o._result = E)
            }
            if (o._status === 1) return o._result.default;
            throw o._result
        }
        var sl = typeof reportError == "function" ? reportError : function(o) {
                if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                    var E = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
                        error: o
                    });
                    if (!window.dispatchEvent(E)) return
                } else if (typeof process == "object" && typeof process.emit == "function") {
                    process.emit("uncaughtException", o);
                    return
                }
                console.error(o)
            },
            rl = {
                map: A,
                forEach: function(o, E, _) {
                    A(o, function() {
                        E.apply(this, arguments)
                    }, _)
                },
                count: function(o) {
                    var E = 0;
                    return A(o, function() {
                        E++
                    }), E
                },
                toArray: function(o) {
                    return A(o, function(E) {
                        return E
                    }) || []
                },
                only: function(o) {
                    if (!Wl(o)) throw Error("React.Children.only expected to receive a single React element child.");
                    return o
                }
            };
        return q.Activity = D, q.Children = rl, q.Component = El, q.Fragment = j, q.Profiler = J, q.PureComponent = X, q.StrictMode = y, q.Suspense = M, q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, q.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(o) {
                return G.H.useMemoCache(o)
            }
        }, q.cache = function(o) {
            return function() {
                return o.apply(null, arguments)
            }
        }, q.cacheSignal = function() {
            return null
        }, q.cloneElement = function(o, E, _) {
            if (o == null) throw Error("The argument must be a React element, but you passed " + o + ".");
            var x = yl({}, o.props),
                Y = o.key;
            if (E != null)
                for (L in E.key !== void 0 && (Y = "" + E.key), E) !jl.call(E, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && E.ref === void 0 || (x[L] = E[L]);
            var L = arguments.length - 2;
            if (L === 1) x.children = _;
            else if (1 < L) {
                for (var il = Array(L), kl = 0; kl < L; kl++) il[kl] = arguments[kl + 2];
                x.children = il
            }
            return K(o.type, Y, x)
        }, q.createContext = function(o) {
            return o = {
                $$typeof: nl,
                _currentValue: o,
                _currentValue2: o,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, o.Provider = o, o.Consumer = {
                $$typeof: ll,
                _context: o
            }, o
        }, q.createElement = function(o, E, _) {
            var x, Y = {},
                L = null;
            if (E != null)
                for (x in E.key !== void 0 && (L = "" + E.key), E) jl.call(E, x) && x !== "key" && x !== "__self" && x !== "__source" && (Y[x] = E[x]);
            var il = arguments.length - 2;
            if (il === 1) Y.children = _;
            else if (1 < il) {
                for (var kl = Array(il), xl = 0; xl < il; xl++) kl[xl] = arguments[xl + 2];
                Y.children = kl
            }
            if (o && o.defaultProps)
                for (x in il = o.defaultProps, il) Y[x] === void 0 && (Y[x] = il[x]);
            return K(o, L, Y)
        }, q.createRef = function() {
            return {
                current: null
            }
        }, q.forwardRef = function(o) {
            return {
                $$typeof: ml,
                render: o
            }
        }, q.isValidElement = Wl, q.lazy = function(o) {
            return {
                $$typeof: H,
                _payload: {
                    _status: -1,
                    _result: o
                },
                _init: R
            }
        }, q.memo = function(o, E) {
            return {
                $$typeof: z,
                type: o,
                compare: E === void 0 ? null : E
            }
        }, q.startTransition = function(o) {
            var E = G.T,
                _ = {};
            G.T = _;
            try {
                var x = o(),
                    Y = G.S;
                Y !== null && Y(_, x), typeof x == "object" && x !== null && typeof x.then == "function" && x.then(vl, sl)
            } catch (L) {
                sl(L)
            } finally {
                E !== null && _.types !== null && (E.types = _.types), G.T = E
            }
        }, q.unstable_useCacheRefresh = function() {
            return G.H.useCacheRefresh()
        }, q.use = function(o) {
            return G.H.use(o)
        }, q.useActionState = function(o, E, _) {
            return G.H.useActionState(o, E, _)
        }, q.useCallback = function(o, E) {
            return G.H.useCallback(o, E)
        }, q.useContext = function(o) {
            return G.H.useContext(o)
        }, q.useDebugValue = function() {}, q.useDeferredValue = function(o, E) {
            return G.H.useDeferredValue(o, E)
        }, q.useEffect = function(o, E) {
            return G.H.useEffect(o, E)
        }, q.useEffectEvent = function(o) {
            return G.H.useEffectEvent(o)
        }, q.useId = function() {
            return G.H.useId()
        }, q.useImperativeHandle = function(o, E, _) {
            return G.H.useImperativeHandle(o, E, _)
        }, q.useInsertionEffect = function(o, E) {
            return G.H.useInsertionEffect(o, E)
        }, q.useLayoutEffect = function(o, E) {
            return G.H.useLayoutEffect(o, E)
        }, q.useMemo = function(o, E) {
            return G.H.useMemo(o, E)
        }, q.useOptimistic = function(o, E) {
            return G.H.useOptimistic(o, E)
        }, q.useReducer = function(o, E, _) {
            return G.H.useReducer(o, E, _)
        }, q.useRef = function(o) {
            return G.H.useRef(o)
        }, q.useState = function(o) {
            return G.H.useState(o)
        }, q.useSyncExternalStore = function(o, E, _) {
            return G.H.useSyncExternalStore(o, E, _)
        }, q.useTransition = function() {
            return G.H.useTransition()
        }, q.version = "19.2.8", q
    }
    var Sf;

    function Vn() {
        return Sf || (Sf = 1, wn.exports = R1()), wn.exports
    }
    var Jn = {
            exports: {}
        },
        Jl = {};
    /**
     * @license React
     * react-dom.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var bf;

    function q1() {
        if (bf) return Jl;
        bf = 1;
        var g = Vn();

        function P(M) {
            var z = "https://react.dev/errors/" + M;
            if (1 < arguments.length) {
                z += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var H = 2; H < arguments.length; H++) z += "&args[]=" + encodeURIComponent(arguments[H])
            }
            return "Minified React error #" + M + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }

        function j() {}
        var y = {
                d: {
                    f: j,
                    r: function() {
                        throw Error(P(522))
                    },
                    D: j,
                    C: j,
                    L: j,
                    m: j,
                    X: j,
                    S: j,
                    M: j
                },
                p: 0,
                findDOMNode: null
            },
            J = Symbol.for("react.portal");

        function ll(M, z, H) {
            var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: J,
                key: D == null ? null : "" + D,
                children: M,
                containerInfo: z,
                implementation: H
            }
        }
        var nl = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

        function ml(M, z) {
            if (M === "font") return "";
            if (typeof z == "string") return z === "use-credentials" ? z : ""
        }
        return Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, Jl.createPortal = function(M, z) {
            var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(P(299));
            return ll(M, z, null, H)
        }, Jl.flushSync = function(M) {
            var z = nl.T,
                H = y.p;
            try {
                if (nl.T = null, y.p = 2, M) return M()
            } finally {
                nl.T = z, y.p = H, y.d.f()
            }
        }, Jl.preconnect = function(M, z) {
            typeof M == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, y.d.C(M, z))
        }, Jl.prefetchDNS = function(M) {
            typeof M == "string" && y.d.D(M)
        }, Jl.preinit = function(M, z) {
            if (typeof M == "string" && z && typeof z.as == "string") {
                var H = z.as,
                    D = ml(H, z.crossOrigin),
                    Z = typeof z.integrity == "string" ? z.integrity : void 0,
                    zl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
                H === "style" ? y.d.S(M, typeof z.precedence == "string" ? z.precedence : void 0, {
                    crossOrigin: D,
                    integrity: Z,
                    fetchPriority: zl
                }) : H === "script" && y.d.X(M, {
                    crossOrigin: D,
                    integrity: Z,
                    fetchPriority: zl,
                    nonce: typeof z.nonce == "string" ? z.nonce : void 0
                })
            }
        }, Jl.preinitModule = function(M, z) {
            if (typeof M == "string")
                if (typeof z == "object" && z !== null) {
                    if (z.as == null || z.as === "script") {
                        var H = ml(z.as, z.crossOrigin);
                        y.d.M(M, {
                            crossOrigin: H,
                            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                            nonce: typeof z.nonce == "string" ? z.nonce : void 0
                        })
                    }
                } else z == null && y.d.M(M)
        }, Jl.preload = function(M, z) {
            if (typeof M == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
                var H = z.as,
                    D = ml(H, z.crossOrigin);
                y.d.L(M, H, {
                    crossOrigin: D,
                    integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                    nonce: typeof z.nonce == "string" ? z.nonce : void 0,
                    type: typeof z.type == "string" ? z.type : void 0,
                    fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
                    referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
                    imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
                    imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
                    media: typeof z.media == "string" ? z.media : void 0
                })
            }
        }, Jl.preloadModule = function(M, z) {
            if (typeof M == "string")
                if (z) {
                    var H = ml(z.as, z.crossOrigin);
                    y.d.m(M, {
                        as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
                        crossOrigin: H,
                        integrity: typeof z.integrity == "string" ? z.integrity : void 0
                    })
                } else y.d.m(M)
        }, Jl.requestFormReset = function(M) {
            y.d.r(M)
        }, Jl.unstable_batchedUpdates = function(M, z) {
            return M(z)
        }, Jl.useFormState = function(M, z, H) {
            return nl.H.useFormState(M, z, H)
        }, Jl.useFormStatus = function() {
            return nl.H.useHostTransitionStatus()
        }, Jl.version = "19.2.8", Jl
    }
    var zf;

    function j1() {
        if (zf) return Jn.exports;
        zf = 1;

        function g() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)
            } catch (P) {
                console.error(P)
            }
        }
        return g(), Jn.exports = q1(), Jn.exports
    }
    /**
     * @license React
     * react-dom-client.production.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var Tf;

    function Y1() {
        if (Tf) return Oe;
        Tf = 1;
        var g = H1(),
            P = Vn(),
            j = j1();

        function y(l) {
            var t = "https://react.dev/errors/" + l;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
            }
            return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }

        function J(l) {
            return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
        }

        function ll(l) {
            var t = l,
                a = l;
            if (l.alternate)
                for (; t.return;) t = t.return;
            else {
                l = t;
                do t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return; while (l)
            }
            return t.tag === 3 ? a : null
        }

        function nl(l) {
            if (l.tag === 13) {
                var t = l.memoizedState;
                if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
            }
            return null
        }

        function ml(l) {
            if (l.tag === 31) {
                var t = l.memoizedState;
                if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
            }
            return null
        }

        function M(l) {
            if (ll(l) !== l) throw Error(y(188))
        }

        function z(l) {
            var t = l.alternate;
            if (!t) {
                if (t = ll(l), t === null) throw Error(y(188));
                return t !== l ? null : l
            }
            for (var a = l, e = t;;) {
                var u = a.return;
                if (u === null) break;
                var n = u.alternate;
                if (n === null) {
                    if (e = u.return, e !== null) {
                        a = e;
                        continue
                    }
                    break
                }
                if (u.child === n.child) {
                    for (n = u.child; n;) {
                        if (n === a) return M(u), l;
                        if (n === e) return M(u), t;
                        n = n.sibling
                    }
                    throw Error(y(188))
                }
                if (a.return !== e.return) a = u, e = n;
                else {
                    for (var i = !1, c = u.child; c;) {
                        if (c === a) {
                            i = !0, a = u, e = n;
                            break
                        }
                        if (c === e) {
                            i = !0, e = u, a = n;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i) {
                        for (c = n.child; c;) {
                            if (c === a) {
                                i = !0, a = n, e = u;
                                break
                            }
                            if (c === e) {
                                i = !0, e = n, a = u;
                                break
                            }
                            c = c.sibling
                        }
                        if (!i) throw Error(y(189))
                    }
                }
                if (a.alternate !== e) throw Error(y(190))
            }
            if (a.tag !== 3) throw Error(y(188));
            return a.stateNode.current === a ? l : t
        }

        function H(l) {
            var t = l.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return l;
            for (l = l.child; l !== null;) {
                if (t = H(l), t !== null) return t;
                l = l.sibling
            }
            return null
        }
        var D = Object.assign,
            Z = Symbol.for("react.element"),
            zl = Symbol.for("react.transitional.element"),
            Ml = Symbol.for("react.portal"),
            yl = Symbol.for("react.fragment"),
            Ol = Symbol.for("react.strict_mode"),
            El = Symbol.for("react.profiler"),
            tl = Symbol.for("react.consumer"),
            X = Symbol.for("react.context"),
            F = Symbol.for("react.forward_ref"),
            pl = Symbol.for("react.suspense"),
            vl = Symbol.for("react.suspense_list"),
            G = Symbol.for("react.memo"),
            jl = Symbol.for("react.lazy"),
            K = Symbol.for("react.activity"),
            Kl = Symbol.for("react.memo_cache_sentinel"),
            Wl = Symbol.iterator;

        function Ql(l) {
            return l === null || typeof l != "object" ? null : (l = Wl && l[Wl] || l["@@iterator"], typeof l == "function" ? l : null)
        }
        var Ta = Symbol.for("react.client.reference");

        function Nt(l) {
            if (l == null) return null;
            if (typeof l == "function") return l.$$typeof === Ta ? null : l.displayName || l.name || null;
            if (typeof l == "string") return l;
            switch (l) {
                case yl:
                    return "Fragment";
                case El:
                    return "Profiler";
                case Ol:
                    return "StrictMode";
                case pl:
                    return "Suspense";
                case vl:
                    return "SuspenseList";
                case K:
                    return "Activity"
            }
            if (typeof l == "object") switch (l.$$typeof) {
                case Ml:
                    return "Portal";
                case X:
                    return l.displayName || "Context";
                case tl:
                    return (l._context.displayName || "Context") + ".Consumer";
                case F:
                    var t = l.render;
                    return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
                case G:
                    return t = l.displayName || null, t !== null ? t : Nt(l.type) || "Memo";
                case jl:
                    t = l._payload, l = l._init;
                    try {
                        return Nt(l(t))
                    } catch {}
            }
            return null
        }
        var At = Array.isArray,
            S = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            A = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
            R = {
                pending: !1,
                data: null,
                method: null,
                action: null
            },
            sl = [],
            rl = -1;

        function o(l) {
            return {
                current: l
            }
        }

        function E(l) {
            0 > rl || (l.current = sl[rl], sl[rl] = null, rl--)
        }

        function _(l, t) {
            rl++, sl[rl] = l.current, l.current = t
        }
        var x = o(null),
            Y = o(null),
            L = o(null),
            il = o(null);

        function kl(l, t) {
            switch (_(L, t), _(Y, l), _(x, null), t.nodeType) {
                case 9:
                case 11:
                    l = (l = t.documentElement) && (l = l.namespaceURI) ? Po(l) : 0;
                    break;
                default:
                    if (l = t.tagName, t = t.namespaceURI) t = Po(t), l = l1(t, l);
                    else switch (l) {
                        case "svg":
                            l = 1;
                            break;
                        case "math":
                            l = 2;
                            break;
                        default:
                            l = 0
                    }
            }
            E(x), _(x, l)
        }

        function xl() {
            E(x), E(Y), E(L)
        }

        function xe(l) {
            l.memoizedState !== null && _(il, l);
            var t = x.current,
                a = l1(t, l.type);
            t !== a && (_(Y, l), _(x, a))
        }

        function zu(l) {
            Y.current === l && (E(x), E(Y)), il.current === l && (E(il), gu._currentValue = R)
        }
        var Wn, xf;

        function Ea(l) {
            if (Wn === void 0) try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Wn = t && t[1] || "", xf = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
            return `
` + Wn + l + xf
        }
        var kn = !1;

        function $n(l, t) {
            if (!l || kn) return "";
            kn = !0;
            var a = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var e = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var T = function() {
                                    throw Error()
                                };
                                if (Object.defineProperty(T.prototype, "props", {
                                        set: function() {
                                            throw Error()
                                        }
                                    }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(T, [])
                                    } catch (r) {
                                        var v = r
                                    }
                                    Reflect.construct(l, [], T)
                                } else {
                                    try {
                                        T.call()
                                    } catch (r) {
                                        v = r
                                    }
                                    l.call(T.prototype)
                                }
                            } else {
                                try {
                                    throw Error()
                                } catch (r) {
                                    v = r
                                }(T = l()) && typeof T.catch == "function" && T.catch(function() {})
                            }
                        } catch (r) {
                            if (r && v && typeof r.stack == "string") return [r.stack, v.stack]
                        }
                        return [null, null]
                    }
                };
                e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var u = Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot, "name");
                u && u.configurable && Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var n = e.DetermineComponentFrameRoot(),
                    i = n[0],
                    c = n[1];
                if (i && c) {
                    var f = i.split(`
`),
                        m = c.split(`
`);
                    for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot");) e++;
                    for (; u < m.length && !m[u].includes("DetermineComponentFrameRoot");) u++;
                    if (e === f.length || u === m.length)
                        for (e = f.length - 1, u = m.length - 1; 1 <= e && 0 <= u && f[e] !== m[u];) u--;
                    for (; 1 <= e && 0 <= u; e--, u--)
                        if (f[e] !== m[u]) {
                            if (e !== 1 || u !== 1)
                                do
                                    if (e--, u--, 0 > u || f[e] !== m[u]) {
                                        var p = `
` + f[e].replace(" at new ", " at ");
                                        return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)), p
                                    }
                            while (1 <= e && 0 <= u);
                            break
                        }
                }
            } finally {
                kn = !1, Error.prepareStackTrace = a
            }
            return (a = l ? l.displayName || l.name : "") ? Ea(a) : ""
        }

        function ld(l, t) {
            switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    return Ea(l.type);
                case 16:
                    return Ea("Lazy");
                case 13:
                    return l.child !== t && t !== null ? Ea("Suspense Fallback") : Ea("Suspense");
                case 19:
                    return Ea("SuspenseList");
                case 0:
                case 15:
                    return $n(l.type, !1);
                case 11:
                    return $n(l.type.render, !1);
                case 1:
                    return $n(l.type, !0);
                case 31:
                    return Ea("Activity");
                default:
                    return ""
            }
        }

        function Df(l) {
            try {
                var t = "",
                    a = null;
                do t += ld(l, a), a = l, l = l.return; while (l);
                return t
            } catch (e) {
                return `
Error generating stack: ` + e.message + `
` + e.stack
            }
        }
        var Fn = Object.prototype.hasOwnProperty,
            In = g.unstable_scheduleCallback,
            Pn = g.unstable_cancelCallback,
            td = g.unstable_shouldYield,
            ad = g.unstable_requestPaint,
            ut = g.unstable_now,
            ed = g.unstable_getCurrentPriorityLevel,
            Uf = g.unstable_ImmediatePriority,
            Cf = g.unstable_UserBlockingPriority,
            Tu = g.unstable_NormalPriority,
            ud = g.unstable_LowPriority,
            Nf = g.unstable_IdlePriority,
            nd = g.log,
            id = g.unstable_setDisableYieldValue,
            De = null,
            nt = null;

        function Ft(l) {
            if (typeof nd == "function" && id(l), nt && typeof nt.setStrictMode == "function") try {
                nt.setStrictMode(De, l)
            } catch {}
        }
        var it = Math.clz32 ? Math.clz32 : sd,
            cd = Math.log,
            fd = Math.LN2;

        function sd(l) {
            return l >>>= 0, l === 0 ? 32 : 31 - (cd(l) / fd | 0) | 0
        }
        var Eu = 256,
            Au = 262144,
            _u = 4194304;

        function Aa(l) {
            var t = l & 42;
            if (t !== 0) return t;
            switch (l & -l) {
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
                    return l & 261888;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return l & 3932160;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return l & 62914560;
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
                    return l
            }
        }

        function Mu(l, t, a) {
            var e = l.pendingLanes;
            if (e === 0) return 0;
            var u = 0,
                n = l.suspendedLanes,
                i = l.pingedLanes;
            l = l.warmLanes;
            var c = e & 134217727;
            return c !== 0 ? (e = c & ~n, e !== 0 ? u = Aa(e) : (i &= c, i !== 0 ? u = Aa(i) : a || (a = c & ~l, a !== 0 && (u = Aa(a))))) : (c = e & ~n, c !== 0 ? u = Aa(c) : i !== 0 ? u = Aa(i) : a || (a = e & ~l, a !== 0 && (u = Aa(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u
        }

        function Ue(l, t) {
            return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
        }

        function od(l, t) {
            switch (l) {
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1
            }
        }

        function Hf() {
            var l = _u;
            return _u <<= 1, (_u & 62914560) === 0 && (_u = 4194304), l
        }

        function li(l) {
            for (var t = [], a = 0; 31 > a; a++) t.push(l);
            return t
        }

        function Ce(l, t) {
            l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
        }

        function dd(l, t, a, e, u, n) {
            var i = l.pendingLanes;
            l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
            var c = l.entanglements,
                f = l.expirationTimes,
                m = l.hiddenUpdates;
            for (a = i & ~a; 0 < a;) {
                var p = 31 - it(a),
                    T = 1 << p;
                c[p] = 0, f[p] = -1;
                var v = m[p];
                if (v !== null)
                    for (m[p] = null, p = 0; p < v.length; p++) {
                        var r = v[p];
                        r !== null && (r.lane &= -536870913)
                    }
                a &= ~T
            }
            e !== 0 && Rf(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
        }

        function Rf(l, t, a) {
            l.pendingLanes |= t, l.suspendedLanes &= ~t;
            var e = 31 - it(t);
            l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930
        }

        function qf(l, t) {
            var a = l.entangledLanes |= t;
            for (l = l.entanglements; a;) {
                var e = 31 - it(a),
                    u = 1 << e;
                u & t | l[e] & t && (l[e] |= t), a &= ~u
            }
        }

        function jf(l, t) {
            var a = t & -t;
            return a = (a & 42) !== 0 ? 1 : ti(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
        }

        function ti(l) {
            switch (l) {
                case 2:
                    l = 1;
                    break;
                case 8:
                    l = 4;
                    break;
                case 32:
                    l = 16;
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
                    l = 128;
                    break;
                case 268435456:
                    l = 134217728;
                    break;
                default:
                    l = 0
            }
            return l
        }

        function ai(l) {
            return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
        }

        function Yf() {
            var l = A.p;
            return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : E1(l.type))
        }

        function Bf(l, t) {
            var a = A.p;
            try {
                return A.p = l, t()
            } finally {
                A.p = a
            }
        }
        var It = Math.random().toString(36).slice(2),
            Xl = "__reactFiber$" + It,
            Fl = "__reactProps$" + It,
            Za = "__reactContainer$" + It,
            ei = "__reactEvents$" + It,
            hd = "__reactListeners$" + It,
            md = "__reactHandles$" + It,
            Gf = "__reactResources$" + It,
            Ne = "__reactMarker$" + It;

        function ui(l) {
            delete l[Xl], delete l[Fl], delete l[ei], delete l[hd], delete l[md]
        }

        function La(l) {
            var t = l[Xl];
            if (t) return t;
            for (var a = l.parentNode; a;) {
                if (t = a[Za] || a[Xl]) {
                    if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                        for (l = c1(l); l !== null;) {
                            if (a = l[Xl]) return a;
                            l = c1(l)
                        }
                    return t
                }
                l = a, a = l.parentNode
            }
            return null
        }

        function wa(l) {
            if (l = l[Xl] || l[Za]) {
                var t = l.tag;
                if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l
            }
            return null
        }

        function He(l) {
            var t = l.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
            throw Error(y(33))
        }

        function Va(l) {
            var t = l[Gf];
            return t || (t = l[Gf] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t
        }

        function Bl(l) {
            l[Ne] = !0
        }
        var Qf = new Set,
            Xf = {};

        function _a(l, t) {
            Ja(l, t), Ja(l + "Capture", t)
        }

        function Ja(l, t) {
            for (Xf[l] = t, l = 0; l < t.length; l++) Qf.add(t[l])
        }
        var yd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
            Zf = {},
            Lf = {};

        function vd(l) {
            return Fn.call(Lf, l) ? !0 : Fn.call(Zf, l) ? !1 : yd.test(l) ? Lf[l] = !0 : (Zf[l] = !0, !1)
        }

        function Ou(l, t, a) {
            if (vd(t))
                if (a === null) l.removeAttribute(t);
                else {
                    switch (typeof a) {
                        case "undefined":
                        case "function":
                        case "symbol":
                            l.removeAttribute(t);
                            return;
                        case "boolean":
                            var e = t.toLowerCase().slice(0, 5);
                            if (e !== "data-" && e !== "aria-") {
                                l.removeAttribute(t);
                                return
                            }
                    }
                    l.setAttribute(t, "" + a)
                }
        }

        function xu(l, t, a) {
            if (a === null) l.removeAttribute(t);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        l.removeAttribute(t);
                        return
                }
                l.setAttribute(t, "" + a)
            }
        }

        function Ht(l, t, a, e) {
            if (e === null) l.removeAttribute(a);
            else {
                switch (typeof e) {
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        l.removeAttribute(a);
                        return
                }
                l.setAttributeNS(t, a, "" + e)
            }
        }

        function yt(l) {
            switch (typeof l) {
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return l;
                case "object":
                    return l;
                default:
                    return ""
            }
        }

        function wf(l) {
            var t = l.type;
            return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
        }

        function rd(l, t, a) {
            var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
            if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
                var u = e.get,
                    n = e.set;
                return Object.defineProperty(l, t, {
                    configurable: !0,
                    get: function() {
                        return u.call(this)
                    },
                    set: function(i) {
                        a = "" + i, n.call(this, i)
                    }
                }), Object.defineProperty(l, t, {
                    enumerable: e.enumerable
                }), {
                    getValue: function() {
                        return a
                    },
                    setValue: function(i) {
                        a = "" + i
                    },
                    stopTracking: function() {
                        l._valueTracker = null, delete l[t]
                    }
                }
            }
        }

        function ni(l) {
            if (!l._valueTracker) {
                var t = wf(l) ? "checked" : "value";
                l._valueTracker = rd(l, t, "" + l[t])
            }
        }

        function Vf(l) {
            if (!l) return !1;
            var t = l._valueTracker;
            if (!t) return !0;
            var a = t.getValue(),
                e = "";
            return l && (e = wf(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), !0) : !1
        }

        function Du(l) {
            if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
            try {
                return l.activeElement || l.body
            } catch {
                return l.body
            }
        }
        var gd = /[\n"\\]/g;

        function vt(l) {
            return l.replace(gd, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " "
            })
        }

        function ii(l, t, a, e, u, n, i, c) {
            l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + yt(t)) : l.value !== "" + yt(t) && (l.value = "" + yt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? ci(l, i, yt(t)) : a != null ? ci(l, i, yt(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + yt(c) : l.removeAttribute("name")
        }

        function Jf(l, t, a, e, u, n, i, c) {
            if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
                if (!(n !== "submit" && n !== "reset" || t != null)) {
                    ni(l);
                    return
                }
                a = a != null ? "" + yt(a) : "", t = t != null ? "" + yt(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t
            }
            e = e ? ? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = c ? l.checked : !!e, l.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), ni(l)
        }

        function ci(l, t, a) {
            t === "number" && Du(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a)
        }

        function Ka(l, t, a, e) {
            if (l = l.options, t) {
                t = {};
                for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
                for (a = 0; a < l.length; a++) u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = !0)
            } else {
                for (a = "" + yt(a), t = null, u = 0; u < l.length; u++) {
                    if (l[u].value === a) {
                        l[u].selected = !0, e && (l[u].defaultSelected = !0);
                        return
                    }
                    t !== null || l[u].disabled || (t = l[u])
                }
                t !== null && (t.selected = !0)
            }
        }

        function Kf(l, t, a) {
            if (t != null && (t = "" + yt(t), t !== l.value && (l.value = t), a == null)) {
                l.defaultValue !== t && (l.defaultValue = t);
                return
            }
            l.defaultValue = a != null ? "" + yt(a) : ""
        }

        function Wf(l, t, a, e) {
            if (t == null) {
                if (e != null) {
                    if (a != null) throw Error(y(92));
                    if (At(e)) {
                        if (1 < e.length) throw Error(y(93));
                        e = e[0]
                    }
                    a = e
                }
                a == null && (a = ""), t = a
            }
            a = yt(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), ni(l)
        }

        function Wa(l, t) {
            if (t) {
                var a = l.firstChild;
                if (a && a === l.lastChild && a.nodeType === 3) {
                    a.nodeValue = t;
                    return
                }
            }
            l.textContent = t
        }
        var pd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

        function kf(l, t, a) {
            var e = t.indexOf("--") === 0;
            a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || pd.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px"
        }

        function $f(l, t, a) {
            if (t != null && typeof t != "object") throw Error(y(62));
            if (l = l.style, a != null) {
                for (var e in a) !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
                for (var u in t) e = t[u], t.hasOwnProperty(u) && a[u] !== e && kf(l, u, e)
            } else
                for (var n in t) t.hasOwnProperty(n) && kf(l, n, t[n])
        }

        function fi(l) {
            if (l.indexOf("-") === -1) return !1;
            switch (l) {
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
        var Sd = new Map([
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
            bd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

        function Uu(l) {
            return bd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
        }

        function Rt() {}
        var si = null;

        function oi(l) {
            return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
        }
        var ka = null,
            $a = null;

        function Ff(l) {
            var t = wa(l);
            if (t && (l = t.stateNode)) {
                var a = l[Fl] || null;
                l: switch (l = t.stateNode, t.type) {
                    case "input":
                        if (ii(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                            for (a = l; a.parentNode;) a = a.parentNode;
                            for (a = a.querySelectorAll('input[name="' + vt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                                var e = a[t];
                                if (e !== l && e.form === l.form) {
                                    var u = e[Fl] || null;
                                    if (!u) throw Error(y(90));
                                    ii(e, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                                }
                            }
                            for (t = 0; t < a.length; t++) e = a[t], e.form === l.form && Vf(e)
                        }
                        break l;
                    case "textarea":
                        Kf(l, a.value, a.defaultValue);
                        break l;
                    case "select":
                        t = a.value, t != null && Ka(l, !!a.multiple, t, !1)
                }
            }
        }
        var di = !1;

        function If(l, t, a) {
            if (di) return l(t, a);
            di = !0;
            try {
                var e = l(t);
                return e
            } finally {
                if (di = !1, (ka !== null || $a !== null) && (pn(), ka && (t = ka, l = $a, $a = ka = null, Ff(t), l)))
                    for (t = 0; t < l.length; t++) Ff(l[t])
            }
        }

        function Re(l, t) {
            var a = l.stateNode;
            if (a === null) return null;
            var e = a[Fl] || null;
            if (e === null) return null;
            a = e[t];
            l: switch (t) {
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
                    (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
                    break l;
                default:
                    l = !1
            }
            if (l) return null;
            if (a && typeof a != "function") throw Error(y(231, t, typeof a));
            return a
        }
        var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
            hi = !1;
        if (qt) try {
            var qe = {};
            Object.defineProperty(qe, "passive", {
                get: function() {
                    hi = !0
                }
            }), window.addEventListener("test", qe, qe), window.removeEventListener("test", qe, qe)
        } catch {
            hi = !1
        }
        var Pt = null,
            mi = null,
            Cu = null;

        function Pf() {
            if (Cu) return Cu;
            var l, t = mi,
                a = t.length,
                e, u = "value" in Pt ? Pt.value : Pt.textContent,
                n = u.length;
            for (l = 0; l < a && t[l] === u[l]; l++);
            var i = a - l;
            for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
            return Cu = u.slice(l, 1 < e ? 1 - e : void 0)
        }

        function Nu(l) {
            var t = l.keyCode;
            return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
        }

        function Hu() {
            return !0
        }

        function l0() {
            return !1
        }

        function Il(l) {
            function t(a, e, u, n, i) {
                this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
                for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
                return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Hu : l0, this.isPropagationStopped = l0, this
            }
            return D(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Hu)
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Hu)
                },
                persist: function() {},
                isPersistent: Hu
            }), t
        }
        var Ma = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(l) {
                    return l.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            },
            Ru = Il(Ma),
            je = D({}, Ma, {
                view: 0,
                detail: 0
            }),
            zd = Il(je),
            yi, vi, Ye, qu = D({}, je, {
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
                getModifierState: gi,
                button: 0,
                buttons: 0,
                relatedTarget: function(l) {
                    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
                },
                movementX: function(l) {
                    return "movementX" in l ? l.movementX : (l !== Ye && (Ye && l.type === "mousemove" ? (yi = l.screenX - Ye.screenX, vi = l.screenY - Ye.screenY) : vi = yi = 0, Ye = l), yi)
                },
                movementY: function(l) {
                    return "movementY" in l ? l.movementY : vi
                }
            }),
            t0 = Il(qu),
            Td = D({}, qu, {
                dataTransfer: 0
            }),
            Ed = Il(Td),
            Ad = D({}, je, {
                relatedTarget: 0
            }),
            ri = Il(Ad),
            _d = D({}, Ma, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            Md = Il(_d),
            Od = D({}, Ma, {
                clipboardData: function(l) {
                    return "clipboardData" in l ? l.clipboardData : window.clipboardData
                }
            }),
            xd = Il(Od),
            Dd = D({}, Ma, {
                data: 0
            }),
            a0 = Il(Dd),
            Ud = {
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
            Cd = {
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
            Nd = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };

        function Hd(l) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(l) : (l = Nd[l]) ? !!t[l] : !1
        }

        function gi() {
            return Hd
        }
        var Rd = D({}, je, {
                key: function(l) {
                    if (l.key) {
                        var t = Ud[l.key] || l.key;
                        if (t !== "Unidentified") return t
                    }
                    return l.type === "keypress" ? (l = Nu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Cd[l.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: gi,
                charCode: function(l) {
                    return l.type === "keypress" ? Nu(l) : 0
                },
                keyCode: function(l) {
                    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
                },
                which: function(l) {
                    return l.type === "keypress" ? Nu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
                }
            }),
            qd = Il(Rd),
            jd = D({}, qu, {
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
            }),
            e0 = Il(jd),
            Yd = D({}, je, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: gi
            }),
            Bd = Il(Yd),
            Gd = D({}, Ma, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }),
            Qd = Il(Gd),
            Xd = D({}, qu, {
                deltaX: function(l) {
                    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
                },
                deltaY: function(l) {
                    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            }),
            Zd = Il(Xd),
            Ld = D({}, Ma, {
                newState: 0,
                oldState: 0
            }),
            wd = Il(Ld),
            Vd = [9, 13, 27, 32],
            pi = qt && "CompositionEvent" in window,
            Be = null;
        qt && "documentMode" in document && (Be = document.documentMode);
        var Jd = qt && "TextEvent" in window && !Be,
            u0 = qt && (!pi || Be && 8 < Be && 11 >= Be),
            n0 = " ",
            i0 = !1;

        function c0(l, t) {
            switch (l) {
                case "keyup":
                    return Vd.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
            }
        }

        function f0(l) {
            return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
        }
        var Fa = !1;

        function Kd(l, t) {
            switch (l) {
                case "compositionend":
                    return f0(t);
                case "keypress":
                    return t.which !== 32 ? null : (i0 = !0, n0);
                case "textInput":
                    return l = t.data, l === n0 && i0 ? null : l;
                default:
                    return null
            }
        }

        function Wd(l, t) {
            if (Fa) return l === "compositionend" || !pi && c0(l, t) ? (l = Pf(), Cu = mi = Pt = null, Fa = !1, l) : null;
            switch (l) {
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which)
                    }
                    return null;
                case "compositionend":
                    return u0 && t.locale !== "ko" ? null : t.data;
                default:
                    return null
            }
        }
        var kd = {
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

        function s0(l) {
            var t = l && l.nodeName && l.nodeName.toLowerCase();
            return t === "input" ? !!kd[l.type] : t === "textarea"
        }

        function o0(l, t, a, e) {
            ka ? $a ? $a.push(e) : $a = [e] : ka = e, t = _n(t, "onChange"), 0 < t.length && (a = new Ru("onChange", "change", null, a, e), l.push({
                event: a,
                listeners: t
            }))
        }
        var Ge = null,
            Qe = null;

        function $d(l) {
            Ko(l, 0)
        }

        function ju(l) {
            var t = He(l);
            if (Vf(t)) return l
        }

        function d0(l, t) {
            if (l === "change") return t
        }
        var h0 = !1;
        if (qt) {
            var Si;
            if (qt) {
                var bi = "oninput" in document;
                if (!bi) {
                    var m0 = document.createElement("div");
                    m0.setAttribute("oninput", "return;"), bi = typeof m0.oninput == "function"
                }
                Si = bi
            } else Si = !1;
            h0 = Si && (!document.documentMode || 9 < document.documentMode)
        }

        function y0() {
            Ge && (Ge.detachEvent("onpropertychange", v0), Qe = Ge = null)
        }

        function v0(l) {
            if (l.propertyName === "value" && ju(Qe)) {
                var t = [];
                o0(t, Qe, l, oi(l)), If($d, t)
            }
        }

        function Fd(l, t, a) {
            l === "focusin" ? (y0(), Ge = t, Qe = a, Ge.attachEvent("onpropertychange", v0)) : l === "focusout" && y0()
        }

        function Id(l) {
            if (l === "selectionchange" || l === "keyup" || l === "keydown") return ju(Qe)
        }

        function Pd(l, t) {
            if (l === "click") return ju(t)
        }

        function l2(l, t) {
            if (l === "input" || l === "change") return ju(t)
        }

        function t2(l, t) {
            return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
        }
        var ct = typeof Object.is == "function" ? Object.is : t2;

        function Xe(l, t) {
            if (ct(l, t)) return !0;
            if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
            var a = Object.keys(l),
                e = Object.keys(t);
            if (a.length !== e.length) return !1;
            for (e = 0; e < a.length; e++) {
                var u = a[e];
                if (!Fn.call(t, u) || !ct(l[u], t[u])) return !1
            }
            return !0
        }

        function r0(l) {
            for (; l && l.firstChild;) l = l.firstChild;
            return l
        }

        function g0(l, t) {
            var a = r0(l);
            l = 0;
            for (var e; a;) {
                if (a.nodeType === 3) {
                    if (e = l + a.textContent.length, l <= t && e >= t) return {
                        node: a,
                        offset: t - l
                    };
                    l = e
                }
                l: {
                    for (; a;) {
                        if (a.nextSibling) {
                            a = a.nextSibling;
                            break l
                        }
                        a = a.parentNode
                    }
                    a = void 0
                }
                a = r0(a)
            }
        }

        function p0(l, t) {
            return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? p0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
        }

        function S0(l) {
            l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
            for (var t = Du(l.document); t instanceof l.HTMLIFrameElement;) {
                try {
                    var a = typeof t.contentWindow.location.href == "string"
                } catch {
                    a = !1
                }
                if (a) l = t.contentWindow;
                else break;
                t = Du(l.document)
            }
            return t
        }

        function zi(l) {
            var t = l && l.nodeName && l.nodeName.toLowerCase();
            return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
        }
        var a2 = qt && "documentMode" in document && 11 >= document.documentMode,
            Ia = null,
            Ti = null,
            Ze = null,
            Ei = !1;

        function b0(l, t, a) {
            var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
            Ei || Ia == null || Ia !== Du(e) || (e = Ia, "selectionStart" in e && zi(e) ? e = {
                start: e.selectionStart,
                end: e.selectionEnd
            } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
                anchorNode: e.anchorNode,
                anchorOffset: e.anchorOffset,
                focusNode: e.focusNode,
                focusOffset: e.focusOffset
            }), Ze && Xe(Ze, e) || (Ze = e, e = _n(Ti, "onSelect"), 0 < e.length && (t = new Ru("onSelect", "select", null, t, a), l.push({
                event: t,
                listeners: e
            }), t.target = Ia)))
        }

        function Oa(l, t) {
            var a = {};
            return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a
        }
        var Pa = {
                animationend: Oa("Animation", "AnimationEnd"),
                animationiteration: Oa("Animation", "AnimationIteration"),
                animationstart: Oa("Animation", "AnimationStart"),
                transitionrun: Oa("Transition", "TransitionRun"),
                transitionstart: Oa("Transition", "TransitionStart"),
                transitioncancel: Oa("Transition", "TransitionCancel"),
                transitionend: Oa("Transition", "TransitionEnd")
            },
            Ai = {},
            z0 = {};
        qt && (z0 = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);

        function xa(l) {
            if (Ai[l]) return Ai[l];
            if (!Pa[l]) return l;
            var t = Pa[l],
                a;
            for (a in t)
                if (t.hasOwnProperty(a) && a in z0) return Ai[l] = t[a];
            return l
        }
        var T0 = xa("animationend"),
            E0 = xa("animationiteration"),
            A0 = xa("animationstart"),
            e2 = xa("transitionrun"),
            u2 = xa("transitionstart"),
            n2 = xa("transitioncancel"),
            _0 = xa("transitionend"),
            M0 = new Map,
            _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        _i.push("scrollEnd");

        function _t(l, t) {
            M0.set(l, t), _a(t, [l])
        }
        var Yu = typeof reportError == "function" ? reportError : function(l) {
                if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                    var t = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                        error: l
                    });
                    if (!window.dispatchEvent(t)) return
                } else if (typeof process == "object" && typeof process.emit == "function") {
                    process.emit("uncaughtException", l);
                    return
                }
                console.error(l)
            },
            rt = [],
            le = 0,
            Mi = 0;

        function Bu() {
            for (var l = le, t = Mi = le = 0; t < l;) {
                var a = rt[t];
                rt[t++] = null;
                var e = rt[t];
                rt[t++] = null;
                var u = rt[t];
                rt[t++] = null;
                var n = rt[t];
                if (rt[t++] = null, e !== null && u !== null) {
                    var i = e.pending;
                    i === null ? u.next = u : (u.next = i.next, i.next = u), e.pending = u
                }
                n !== 0 && O0(a, u, n)
            }
        }

        function Gu(l, t, a, e) {
            rt[le++] = l, rt[le++] = t, rt[le++] = a, rt[le++] = e, Mi |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e)
        }

        function Oi(l, t, a, e) {
            return Gu(l, t, a, e), Qu(l)
        }

        function Da(l, t) {
            return Gu(l, null, null, t), Qu(l)
        }

        function O0(l, t, a) {
            l.lanes |= a;
            var e = l.alternate;
            e !== null && (e.lanes |= a);
            for (var u = !1, n = l.return; n !== null;) n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
            return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - it(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null
        }

        function Qu(l) {
            if (50 < ou) throw ou = 0, jc = null, Error(y(185));
            for (var t = l.return; t !== null;) l = t, t = l.return;
            return l.tag === 3 ? l.stateNode : null
        }
        var te = {};

        function i2(l, t, a, e) {
            this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
        }

        function ft(l, t, a, e) {
            return new i2(l, t, a, e)
        }

        function xi(l) {
            return l = l.prototype, !(!l || !l.isReactComponent)
        }

        function jt(l, t) {
            var a = l.alternate;
            return a === null ? (a = ft(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a
        }

        function x0(l, t) {
            l.flags &= 65011714;
            var a = l.alternate;
            return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), l
        }

        function Xu(l, t, a, e, u, n) {
            var i = 0;
            if (e = l, typeof l == "function") xi(l) && (i = 1);
            else if (typeof l == "string") i = dh(l, a, x.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
            else l: switch (l) {
                case K:
                    return l = ft(31, a, t, u), l.elementType = K, l.lanes = n, l;
                case yl:
                    return Ua(a.children, u, n, t);
                case Ol:
                    i = 8, u |= 24;
                    break;
                case El:
                    return l = ft(12, a, t, u | 2), l.elementType = El, l.lanes = n, l;
                case pl:
                    return l = ft(13, a, t, u), l.elementType = pl, l.lanes = n, l;
                case vl:
                    return l = ft(19, a, t, u), l.elementType = vl, l.lanes = n, l;
                default:
                    if (typeof l == "object" && l !== null) switch (l.$$typeof) {
                        case X:
                            i = 10;
                            break l;
                        case tl:
                            i = 9;
                            break l;
                        case F:
                            i = 11;
                            break l;
                        case G:
                            i = 14;
                            break l;
                        case jl:
                            i = 16, e = null;
                            break l
                    }
                    i = 29, a = Error(y(130, l === null ? "null" : typeof l, "")), e = null
            }
            return t = ft(i, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t
        }

        function Ua(l, t, a, e) {
            return l = ft(7, l, e, t), l.lanes = a, l
        }

        function Di(l, t, a) {
            return l = ft(6, l, null, t), l.lanes = a, l
        }

        function D0(l) {
            var t = ft(18, null, null, 0);
            return t.stateNode = l, t
        }

        function Ui(l, t, a) {
            return t = ft(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
                containerInfo: l.containerInfo,
                pendingChildren: null,
                implementation: l.implementation
            }, t
        }
        var U0 = new WeakMap;

        function gt(l, t) {
            if (typeof l == "object" && l !== null) {
                var a = U0.get(l);
                return a !== void 0 ? a : (t = {
                    value: l,
                    source: t,
                    stack: Df(t)
                }, U0.set(l, t), t)
            }
            return {
                value: l,
                source: t,
                stack: Df(t)
            }
        }
        var ae = [],
            ee = 0,
            Zu = null,
            Le = 0,
            pt = [],
            St = 0,
            la = null,
            xt = 1,
            Dt = "";

        function Yt(l, t) {
            ae[ee++] = Le, ae[ee++] = Zu, Zu = l, Le = t
        }

        function C0(l, t, a) {
            pt[St++] = xt, pt[St++] = Dt, pt[St++] = la, la = l;
            var e = xt;
            l = Dt;
            var u = 32 - it(e) - 1;
            e &= ~(1 << u), a += 1;
            var n = 32 - it(t) + u;
            if (30 < n) {
                var i = u - u % 5;
                n = (e & (1 << i) - 1).toString(32), e >>= i, u -= i, xt = 1 << 32 - it(t) + u | a << u | e, Dt = n + l
            } else xt = 1 << n | a << u | e, Dt = l
        }

        function Ci(l) {
            l.return !== null && (Yt(l, 1), C0(l, 1, 0))
        }

        function Ni(l) {
            for (; l === Zu;) Zu = ae[--ee], ae[ee] = null, Le = ae[--ee], ae[ee] = null;
            for (; l === la;) la = pt[--St], pt[St] = null, Dt = pt[--St], pt[St] = null, xt = pt[--St], pt[St] = null
        }

        function N0(l, t) {
            pt[St++] = xt, pt[St++] = Dt, pt[St++] = la, xt = t.id, Dt = t.overflow, la = l
        }
        var Zl = null,
            Sl = null,
            I = !1,
            ta = null,
            bt = !1,
            Hi = Error(y(519));

        function aa(l) {
            var t = Error(y(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
            throw we(gt(t, l)), Hi
        }

        function H0(l) {
            var t = l.stateNode,
                a = l.type,
                e = l.memoizedProps;
            switch (t[Xl] = l, t[Fl] = e, a) {
                case "dialog":
                    V("cancel", t), V("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    V("load", t);
                    break;
                case "video":
                case "audio":
                    for (a = 0; a < hu.length; a++) V(hu[a], t);
                    break;
                case "source":
                    V("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    V("error", t), V("load", t);
                    break;
                case "details":
                    V("toggle", t);
                    break;
                case "input":
                    V("invalid", t), Jf(t, e.value, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name, !0);
                    break;
                case "select":
                    V("invalid", t);
                    break;
                case "textarea":
                    V("invalid", t), Wf(t, e.value, e.defaultValue, e.children)
            }
            a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || Fo(t.textContent, a) ? (e.popover != null && (V("beforetoggle", t), V("toggle", t)), e.onScroll != null && V("scroll", t), e.onScrollEnd != null && V("scrollend", t), e.onClick != null && (t.onclick = Rt), t = !0) : t = !1, t || aa(l, !0)
        }

        function R0(l) {
            for (Zl = l.return; Zl;) switch (Zl.tag) {
                case 5:
                case 31:
                case 13:
                    bt = !1;
                    return;
                case 27:
                case 3:
                    bt = !0;
                    return;
                default:
                    Zl = Zl.return
            }
        }

        function ue(l) {
            if (l !== Zl) return !1;
            if (!I) return R0(l), I = !0, !1;
            var t = l.tag,
                a;
            if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Fc(l.type, l.memoizedProps)), a = !a), a && Sl && aa(l), R0(l), t === 13) {
                if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
                Sl = i1(l)
            } else if (t === 31) {
                if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(317));
                Sl = i1(l)
            } else t === 27 ? (t = Sl, ra(l.type) ? (l = af, af = null, Sl = l) : Sl = t) : Sl = Zl ? Tt(l.stateNode.nextSibling) : null;
            return !0
        }

        function Ca() {
            Sl = Zl = null, I = !1
        }

        function Ri() {
            var l = ta;
            return l !== null && (at === null ? at = l : at.push.apply(at, l), ta = null), l
        }

        function we(l) {
            ta === null ? ta = [l] : ta.push(l)
        }
        var qi = o(null),
            Na = null,
            Bt = null;

        function ea(l, t, a) {
            _(qi, t._currentValue), t._currentValue = a
        }

        function Gt(l) {
            l._currentValue = qi.current, E(qi)
        }

        function ji(l, t, a) {
            for (; l !== null;) {
                var e = l.alternate;
                if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
                l = l.return
            }
        }

        function Yi(l, t, a, e) {
            var u = l.child;
            for (u !== null && (u.return = l); u !== null;) {
                var n = u.dependencies;
                if (n !== null) {
                    var i = u.child;
                    n = n.firstContext;
                    l: for (; n !== null;) {
                        var c = n;
                        n = u;
                        for (var f = 0; f < t.length; f++)
                            if (c.context === t[f]) {
                                n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), ji(n.return, a, l), e || (i = null);
                                break l
                            }
                        n = c.next
                    }
                } else if (u.tag === 18) {
                    if (i = u.return, i === null) throw Error(y(341));
                    i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), ji(i, a, l), i = null
                } else i = u.child;
                if (i !== null) i.return = u;
                else
                    for (i = u; i !== null;) {
                        if (i === l) {
                            i = null;
                            break
                        }
                        if (u = i.sibling, u !== null) {
                            u.return = i.return, i = u;
                            break
                        }
                        i = i.return
                    }
                u = i
            }
        }

        function ne(l, t, a, e) {
            l = null;
            for (var u = t, n = !1; u !== null;) {
                if (!n) {
                    if ((u.flags & 524288) !== 0) n = !0;
                    else if ((u.flags & 262144) !== 0) break
                }
                if (u.tag === 10) {
                    var i = u.alternate;
                    if (i === null) throw Error(y(387));
                    if (i = i.memoizedProps, i !== null) {
                        var c = u.type;
                        ct(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
                    }
                } else if (u === il.current) {
                    if (i = u.alternate, i === null) throw Error(y(387));
                    i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(gu) : l = [gu])
                }
                u = u.return
            }
            l !== null && Yi(t, l, a, e), t.flags |= 262144
        }

        function Lu(l) {
            for (l = l.firstContext; l !== null;) {
                if (!ct(l.context._currentValue, l.memoizedValue)) return !0;
                l = l.next
            }
            return !1
        }

        function Ha(l) {
            Na = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null)
        }

        function Ll(l) {
            return q0(Na, l)
        }

        function wu(l, t) {
            return Na === null && Ha(l), q0(l, t)
        }

        function q0(l, t) {
            var a = t._currentValue;
            if (t = {
                    context: t,
                    memoizedValue: a,
                    next: null
                }, Bt === null) {
                if (l === null) throw Error(y(308));
                Bt = t, l.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, l.flags |= 524288
            } else Bt = Bt.next = t;
            return a
        }
        var c2 = typeof AbortController < "u" ? AbortController : function() {
                var l = [],
                    t = this.signal = {
                        aborted: !1,
                        addEventListener: function(a, e) {
                            l.push(e)
                        }
                    };
                this.abort = function() {
                    t.aborted = !0, l.forEach(function(a) {
                        return a()
                    })
                }
            },
            f2 = g.unstable_scheduleCallback,
            s2 = g.unstable_NormalPriority,
            Nl = {
                $$typeof: X,
                Consumer: null,
                Provider: null,
                _currentValue: null,
                _currentValue2: null,
                _threadCount: 0
            };

        function Bi() {
            return {
                controller: new c2,
                data: new Map,
                refCount: 0
            }
        }

        function Ve(l) {
            l.refCount--, l.refCount === 0 && f2(s2, function() {
                l.controller.abort()
            })
        }
        var Je = null,
            Gi = 0,
            ie = 0,
            ce = null;

        function o2(l, t) {
            if (Je === null) {
                var a = Je = [];
                Gi = 0, ie = Zc(), ce = {
                    status: "pending",
                    value: void 0,
                    then: function(e) {
                        a.push(e)
                    }
                }
            }
            return Gi++, t.then(j0, j0), t
        }

        function j0() {
            if (--Gi === 0 && Je !== null) {
                ce !== null && (ce.status = "fulfilled");
                var l = Je;
                Je = null, ie = 0, ce = null;
                for (var t = 0; t < l.length; t++)(0, l[t])()
            }
        }

        function d2(l, t) {
            var a = [],
                e = {
                    status: "pending",
                    value: null,
                    reason: null,
                    then: function(u) {
                        a.push(u)
                    }
                };
            return l.then(function() {
                e.status = "fulfilled", e.value = t;
                for (var u = 0; u < a.length; u++)(0, a[u])(t)
            }, function(u) {
                for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)(0, a[u])(void 0)
            }), e
        }
        var Y0 = S.S;
        S.S = function(l, t) {
            zo = ut(), typeof t == "object" && t !== null && typeof t.then == "function" && o2(l, t), Y0 !== null && Y0(l, t)
        };
        var Ra = o(null);

        function Qi() {
            var l = Ra.current;
            return l !== null ? l : gl.pooledCache
        }

        function Vu(l, t) {
            t === null ? _(Ra, Ra.current) : _(Ra, t.pool)
        }

        function B0() {
            var l = Qi();
            return l === null ? null : {
                parent: Nl._currentValue,
                pool: l
            }
        }
        var fe = Error(y(460)),
            Xi = Error(y(474)),
            Ju = Error(y(542)),
            Ku = {
                then: function() {}
            };

        function G0(l) {
            return l = l.status, l === "fulfilled" || l === "rejected"
        }

        function Q0(l, t, a) {
            switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Rt, Rt), t = a), t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw l = t.reason, Z0(l), l;
                default:
                    if (typeof t.status == "string") t.then(Rt, Rt);
                    else {
                        if (l = gl, l !== null && 100 < l.shellSuspendCounter) throw Error(y(482));
                        l = t, l.status = "pending", l.then(function(e) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "fulfilled", u.value = e
                            }
                        }, function(e) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "rejected", u.reason = e
                            }
                        })
                    }
                    switch (t.status) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw l = t.reason, Z0(l), l
                    }
                    throw ja = t, fe
            }
        }

        function qa(l) {
            try {
                var t = l._init;
                return t(l._payload)
            } catch (a) {
                throw a !== null && typeof a == "object" && typeof a.then == "function" ? (ja = a, fe) : a
            }
        }
        var ja = null;

        function X0() {
            if (ja === null) throw Error(y(459));
            var l = ja;
            return ja = null, l
        }

        function Z0(l) {
            if (l === fe || l === Ju) throw Error(y(483))
        }
        var se = null,
            Ke = 0;

        function Wu(l) {
            var t = Ke;
            return Ke += 1, se === null && (se = []), Q0(se, l, t)
        }

        function We(l, t) {
            t = t.props.ref, l.ref = t !== void 0 ? t : null
        }

        function ku(l, t) {
            throw t.$$typeof === Z ? Error(y(525)) : (l = Object.prototype.toString.call(t), Error(y(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
        }

        function L0(l) {
            function t(d, s) {
                if (l) {
                    var h = d.deletions;
                    h === null ? (d.deletions = [s], d.flags |= 16) : h.push(s)
                }
            }

            function a(d, s) {
                if (!l) return null;
                for (; s !== null;) t(d, s), s = s.sibling;
                return null
            }

            function e(d) {
                for (var s = new Map; d !== null;) d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
                return s
            }

            function u(d, s) {
                return d = jt(d, s), d.index = 0, d.sibling = null, d
            }

            function n(d, s, h) {
                return d.index = h, l ? (h = d.alternate, h !== null ? (h = h.index, h < s ? (d.flags |= 67108866, s) : h) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s)
            }

            function i(d) {
                return l && d.alternate === null && (d.flags |= 67108866), d
            }

            function c(d, s, h, b) {
                return s === null || s.tag !== 6 ? (s = Di(h, d.mode, b), s.return = d, s) : (s = u(s, h), s.return = d, s)
            }

            function f(d, s, h, b) {
                var C = h.type;
                return C === yl ? p(d, s, h.props.children, b, h.key) : s !== null && (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jl && qa(C) === s.type) ? (s = u(s, h.props), We(s, h), s.return = d, s) : (s = Xu(h.type, h.key, h.props, null, d.mode, b), We(s, h), s.return = d, s)
            }

            function m(d, s, h, b) {
                return s === null || s.tag !== 4 || s.stateNode.containerInfo !== h.containerInfo || s.stateNode.implementation !== h.implementation ? (s = Ui(h, d.mode, b), s.return = d, s) : (s = u(s, h.children || []), s.return = d, s)
            }

            function p(d, s, h, b, C) {
                return s === null || s.tag !== 7 ? (s = Ua(h, d.mode, b, C), s.return = d, s) : (s = u(s, h), s.return = d, s)
            }

            function T(d, s, h) {
                if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint") return s = Di("" + s, d.mode, h), s.return = d, s;
                if (typeof s == "object" && s !== null) {
                    switch (s.$$typeof) {
                        case zl:
                            return h = Xu(s.type, s.key, s.props, null, d.mode, h), We(h, s), h.return = d, h;
                        case Ml:
                            return s = Ui(s, d.mode, h), s.return = d, s;
                        case jl:
                            return s = qa(s), T(d, s, h)
                    }
                    if (At(s) || Ql(s)) return s = Ua(s, d.mode, h, null), s.return = d, s;
                    if (typeof s.then == "function") return T(d, Wu(s), h);
                    if (s.$$typeof === X) return T(d, wu(d, s), h);
                    ku(d, s)
                }
                return null
            }

            function v(d, s, h, b) {
                var C = s !== null ? s.key : null;
                if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return C !== null ? null : c(d, s, "" + h, b);
                if (typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case zl:
                            return h.key === C ? f(d, s, h, b) : null;
                        case Ml:
                            return h.key === C ? m(d, s, h, b) : null;
                        case jl:
                            return h = qa(h), v(d, s, h, b)
                    }
                    if (At(h) || Ql(h)) return C !== null ? null : p(d, s, h, b, null);
                    if (typeof h.then == "function") return v(d, s, Wu(h), b);
                    if (h.$$typeof === X) return v(d, s, wu(d, h), b);
                    ku(d, h)
                }
                return null
            }

            function r(d, s, h, b, C) {
                if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return d = d.get(h) || null, c(s, d, "" + b, C);
                if (typeof b == "object" && b !== null) {
                    switch (b.$$typeof) {
                        case zl:
                            return d = d.get(b.key === null ? h : b.key) || null, f(s, d, b, C);
                        case Ml:
                            return d = d.get(b.key === null ? h : b.key) || null, m(s, d, b, C);
                        case jl:
                            return b = qa(b), r(d, s, h, b, C)
                    }
                    if (At(b) || Ql(b)) return d = d.get(h) || null, p(s, d, b, C, null);
                    if (typeof b.then == "function") return r(d, s, h, Wu(b), C);
                    if (b.$$typeof === X) return r(d, s, h, wu(s, b), C);
                    ku(s, b)
                }
                return null
            }

            function O(d, s, h, b) {
                for (var C = null, al = null, U = s, Q = s = 0, k = null; U !== null && Q < h.length; Q++) {
                    U.index > Q ? (k = U, U = null) : k = U.sibling;
                    var el = v(d, U, h[Q], b);
                    if (el === null) {
                        U === null && (U = k);
                        break
                    }
                    l && U && el.alternate === null && t(d, U), s = n(el, s, Q), al === null ? C = el : al.sibling = el, al = el, U = k
                }
                if (Q === h.length) return a(d, U), I && Yt(d, Q), C;
                if (U === null) {
                    for (; Q < h.length; Q++) U = T(d, h[Q], b), U !== null && (s = n(U, s, Q), al === null ? C = U : al.sibling = U, al = U);
                    return I && Yt(d, Q), C
                }
                for (U = e(U); Q < h.length; Q++) k = r(U, d, Q, h[Q], b), k !== null && (l && k.alternate !== null && U.delete(k.key === null ? Q : k.key), s = n(k, s, Q), al === null ? C = k : al.sibling = k, al = k);
                return l && U.forEach(function(za) {
                    return t(d, za)
                }), I && Yt(d, Q), C
            }

            function N(d, s, h, b) {
                if (h == null) throw Error(y(151));
                for (var C = null, al = null, U = s, Q = s = 0, k = null, el = h.next(); U !== null && !el.done; Q++, el = h.next()) {
                    U.index > Q ? (k = U, U = null) : k = U.sibling;
                    var za = v(d, U, el.value, b);
                    if (za === null) {
                        U === null && (U = k);
                        break
                    }
                    l && U && za.alternate === null && t(d, U), s = n(za, s, Q), al === null ? C = za : al.sibling = za, al = za, U = k
                }
                if (el.done) return a(d, U), I && Yt(d, Q), C;
                if (U === null) {
                    for (; !el.done; Q++, el = h.next()) el = T(d, el.value, b), el !== null && (s = n(el, s, Q), al === null ? C = el : al.sibling = el, al = el);
                    return I && Yt(d, Q), C
                }
                for (U = e(U); !el.done; Q++, el = h.next()) el = r(U, d, Q, el.value, b), el !== null && (l && el.alternate !== null && U.delete(el.key === null ? Q : el.key), s = n(el, s, Q), al === null ? C = el : al.sibling = el, al = el);
                return l && U.forEach(function(Th) {
                    return t(d, Th)
                }), I && Yt(d, Q), C
            }

            function hl(d, s, h, b) {
                if (typeof h == "object" && h !== null && h.type === yl && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                    switch (h.$$typeof) {
                        case zl:
                            l: {
                                for (var C = h.key; s !== null;) {
                                    if (s.key === C) {
                                        if (C = h.type, C === yl) {
                                            if (s.tag === 7) {
                                                a(d, s.sibling), b = u(s, h.props.children), b.return = d, d = b;
                                                break l
                                            }
                                        } else if (s.elementType === C || typeof C == "object" && C !== null && C.$$typeof === jl && qa(C) === s.type) {
                                            a(d, s.sibling), b = u(s, h.props), We(b, h), b.return = d, d = b;
                                            break l
                                        }
                                        a(d, s);
                                        break
                                    } else t(d, s);
                                    s = s.sibling
                                }
                                h.type === yl ? (b = Ua(h.props.children, d.mode, b, h.key), b.return = d, d = b) : (b = Xu(h.type, h.key, h.props, null, d.mode, b), We(b, h), b.return = d, d = b)
                            }
                            return i(d);
                        case Ml:
                            l: {
                                for (C = h.key; s !== null;) {
                                    if (s.key === C)
                                        if (s.tag === 4 && s.stateNode.containerInfo === h.containerInfo && s.stateNode.implementation === h.implementation) {
                                            a(d, s.sibling), b = u(s, h.children || []), b.return = d, d = b;
                                            break l
                                        } else {
                                            a(d, s);
                                            break
                                        }
                                    else t(d, s);
                                    s = s.sibling
                                }
                                b = Ui(h, d.mode, b),
                                b.return = d,
                                d = b
                            }
                            return i(d);
                        case jl:
                            return h = qa(h), hl(d, s, h, b)
                    }
                    if (At(h)) return O(d, s, h, b);
                    if (Ql(h)) {
                        if (C = Ql(h), typeof C != "function") throw Error(y(150));
                        return h = C.call(h), N(d, s, h, b)
                    }
                    if (typeof h.then == "function") return hl(d, s, Wu(h), b);
                    if (h.$$typeof === X) return hl(d, s, wu(d, h), b);
                    ku(d, h)
                }
                return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, s !== null && s.tag === 6 ? (a(d, s.sibling), b = u(s, h), b.return = d, d = b) : (a(d, s), b = Di(h, d.mode, b), b.return = d, d = b), i(d)) : a(d, s)
            }
            return function(d, s, h, b) {
                try {
                    Ke = 0;
                    var C = hl(d, s, h, b);
                    return se = null, C
                } catch (U) {
                    if (U === fe || U === Ju) throw U;
                    var al = ft(29, U, null, d.mode);
                    return al.lanes = b, al.return = d, al
                } finally {}
            }
        }
        var Ya = L0(!0),
            w0 = L0(!1),
            ua = !1;

        function Zi(l) {
            l.updateQueue = {
                baseState: l.memoizedState,
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

        function Li(l, t) {
            l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
                baseState: l.baseState,
                firstBaseUpdate: l.firstBaseUpdate,
                lastBaseUpdate: l.lastBaseUpdate,
                shared: l.shared,
                callbacks: null
            })
        }

        function na(l) {
            return {
                lane: l,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }

        function ia(l, t, a) {
            var e = l.updateQueue;
            if (e === null) return null;
            if (e = e.shared, (ul & 2) !== 0) {
                var u = e.pending;
                return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = Qu(l), O0(l, null, a), t
            }
            return Gu(l, e, t, a), Qu(l)
        }

        function ke(l, t, a) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
                var e = t.lanes;
                e &= l.pendingLanes, a |= e, t.lanes = a, qf(l, a)
            }
        }

        function wi(l, t) {
            var a = l.updateQueue,
                e = l.alternate;
            if (e !== null && (e = e.updateQueue, a === e)) {
                var u = null,
                    n = null;
                if (a = a.firstBaseUpdate, a !== null) {
                    do {
                        var i = {
                            lane: a.lane,
                            tag: a.tag,
                            payload: a.payload,
                            callback: null,
                            next: null
                        };
                        n === null ? u = n = i : n = n.next = i, a = a.next
                    } while (a !== null);
                    n === null ? u = n = t : n = n.next = t
                } else u = n = t;
                a = {
                    baseState: e.baseState,
                    firstBaseUpdate: u,
                    lastBaseUpdate: n,
                    shared: e.shared,
                    callbacks: e.callbacks
                }, l.updateQueue = a;
                return
            }
            l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t
        }
        var Vi = !1;

        function $e() {
            if (Vi) {
                var l = ce;
                if (l !== null) throw l
            }
        }

        function Fe(l, t, a, e) {
            Vi = !1;
            var u = l.updateQueue;
            ua = !1;
            var n = u.firstBaseUpdate,
                i = u.lastBaseUpdate,
                c = u.shared.pending;
            if (c !== null) {
                u.shared.pending = null;
                var f = c,
                    m = f.next;
                f.next = null, i === null ? n = m : i.next = m, i = f;
                var p = l.alternate;
                p !== null && (p = p.updateQueue, c = p.lastBaseUpdate, c !== i && (c === null ? p.firstBaseUpdate = m : c.next = m, p.lastBaseUpdate = f))
            }
            if (n !== null) {
                var T = u.baseState;
                i = 0, p = m = f = null, c = n;
                do {
                    var v = c.lane & -536870913,
                        r = v !== c.lane;
                    if (r ? (W & v) === v : (e & v) === v) {
                        v !== 0 && v === ie && (Vi = !0), p !== null && (p = p.next = {
                            lane: 0,
                            tag: c.tag,
                            payload: c.payload,
                            callback: null,
                            next: null
                        });
                        l: {
                            var O = l,
                                N = c;v = t;
                            var hl = a;
                            switch (N.tag) {
                                case 1:
                                    if (O = N.payload, typeof O == "function") {
                                        T = O.call(hl, T, v);
                                        break l
                                    }
                                    T = O;
                                    break l;
                                case 3:
                                    O.flags = O.flags & -65537 | 128;
                                case 0:
                                    if (O = N.payload, v = typeof O == "function" ? O.call(hl, T, v) : O, v == null) break l;
                                    T = D({}, T, v);
                                    break l;
                                case 2:
                                    ua = !0
                            }
                        }
                        v = c.callback, v !== null && (l.flags |= 64, r && (l.flags |= 8192), r = u.callbacks, r === null ? u.callbacks = [v] : r.push(v))
                    } else r = {
                        lane: v,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    }, p === null ? (m = p = r, f = T) : p = p.next = r, i |= v;
                    if (c = c.next, c === null) {
                        if (c = u.shared.pending, c === null) break;
                        r = c, c = r.next, r.next = null, u.lastBaseUpdate = r, u.shared.pending = null
                    }
                } while (!0);
                p === null && (f = T), u.baseState = f, u.firstBaseUpdate = m, u.lastBaseUpdate = p, n === null && (u.shared.lanes = 0), da |= i, l.lanes = i, l.memoizedState = T
            }
        }

        function V0(l, t) {
            if (typeof l != "function") throw Error(y(191, l));
            l.call(t)
        }

        function J0(l, t) {
            var a = l.callbacks;
            if (a !== null)
                for (l.callbacks = null, l = 0; l < a.length; l++) V0(a[l], t)
        }
        var oe = o(null),
            $u = o(0);

        function K0(l, t) {
            l = Wt, _($u, l), _(oe, t), Wt = l | t.baseLanes
        }

        function Ji() {
            _($u, Wt), _(oe, oe.current)
        }

        function Ki() {
            Wt = $u.current, E(oe), E($u)
        }
        var st = o(null),
            zt = null;

        function ca(l) {
            var t = l.alternate;
            _(Dl, Dl.current & 1), _(st, l), zt === null && (t === null || oe.current !== null || t.memoizedState !== null) && (zt = l)
        }

        function Wi(l) {
            _(Dl, Dl.current), _(st, l), zt === null && (zt = l)
        }

        function W0(l) {
            l.tag === 22 ? (_(Dl, Dl.current), _(st, l), zt === null && (zt = l)) : fa()
        }

        function fa() {
            _(Dl, Dl.current), _(st, st.current)
        }

        function ot(l) {
            E(st), zt === l && (zt = null), E(Dl)
        }
        var Dl = o(0);

        function Fu(l) {
            for (var t = l; t !== null;) {
                if (t.tag === 13) {
                    var a = t.memoizedState;
                    if (a !== null && (a = a.dehydrated, a === null || lf(a) || tf(a))) return t
                } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                    if ((t.flags & 128) !== 0) return t
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue
                }
                if (t === l) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === l) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
            return null
        }
        var Qt = 0,
            B = null,
            ol = null,
            Hl = null,
            Iu = !1,
            de = !1,
            Ba = !1,
            Pu = 0,
            Ie = 0,
            he = null,
            h2 = 0;

        function Al() {
            throw Error(y(321))
        }

        function ki(l, t) {
            if (t === null) return !1;
            for (var a = 0; a < t.length && a < l.length; a++)
                if (!ct(l[a], t[a])) return !1;
            return !0
        }

        function $i(l, t, a, e, u, n) {
            return Qt = n, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = l === null || l.memoizedState === null ? Cs : dc, Ba = !1, n = a(e, u), Ba = !1, de && (n = $0(t, a, e, u)), k0(l), n
        }

        function k0(l) {
            S.H = tu;
            var t = ol !== null && ol.next !== null;
            if (Qt = 0, Hl = ol = B = null, Iu = !1, Ie = 0, he = null, t) throw Error(y(300));
            l === null || Rl || (l = l.dependencies, l !== null && Lu(l) && (Rl = !0))
        }

        function $0(l, t, a, e) {
            B = l;
            var u = 0;
            do {
                if (de && (he = null), Ie = 0, de = !1, 25 <= u) throw Error(y(301));
                if (u += 1, Hl = ol = null, l.updateQueue != null) {
                    var n = l.updateQueue;
                    n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0)
                }
                S.H = Ns, n = t(a, e)
            } while (de);
            return n
        }

        function m2() {
            var l = S.H,
                t = l.useState()[0];
            return t = typeof t.then == "function" ? Pe(t) : t, l = l.useState()[0], (ol !== null ? ol.memoizedState : null) !== l && (B.flags |= 1024), t
        }

        function Fi() {
            var l = Pu !== 0;
            return Pu = 0, l
        }

        function Ii(l, t, a) {
            t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a
        }

        function Pi(l) {
            if (Iu) {
                for (l = l.memoizedState; l !== null;) {
                    var t = l.queue;
                    t !== null && (t.pending = null), l = l.next
                }
                Iu = !1
            }
            Qt = 0, Hl = ol = B = null, de = !1, Ie = Pu = 0, he = null
        }

        function $l() {
            var l = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Hl === null ? B.memoizedState = Hl = l : Hl = Hl.next = l, Hl
        }

        function Ul() {
            if (ol === null) {
                var l = B.alternate;
                l = l !== null ? l.memoizedState : null
            } else l = ol.next;
            var t = Hl === null ? B.memoizedState : Hl.next;
            if (t !== null) Hl = t, ol = l;
            else {
                if (l === null) throw B.alternate === null ? Error(y(467)) : Error(y(310));
                ol = l, l = {
                    memoizedState: ol.memoizedState,
                    baseState: ol.baseState,
                    baseQueue: ol.baseQueue,
                    queue: ol.queue,
                    next: null
                }, Hl === null ? B.memoizedState = Hl = l : Hl = Hl.next = l
            }
            return Hl
        }

        function ln() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }
        }

        function Pe(l) {
            var t = Ie;
            return Ie += 1, he === null && (he = []), l = Q0(he, l, t), t = B, (Hl === null ? t.memoizedState : Hl.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? Cs : dc), l
        }

        function tn(l) {
            if (l !== null && typeof l == "object") {
                if (typeof l.then == "function") return Pe(l);
                if (l.$$typeof === X) return Ll(l)
            }
            throw Error(y(438, String(l)))
        }

        function lc(l) {
            var t = null,
                a = B.updateQueue;
            if (a !== null && (t = a.memoCache), t == null) {
                var e = B.alternate;
                e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
                    data: e.data.map(function(u) {
                        return u.slice()
                    }),
                    index: 0
                })))
            }
            if (t == null && (t = {
                    data: [],
                    index: 0
                }), a === null && (a = ln(), B.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
                for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Kl;
            return t.index++, a
        }

        function Xt(l, t) {
            return typeof t == "function" ? t(l) : t
        }

        function an(l) {
            var t = Ul();
            return tc(t, ol, l)
        }

        function tc(l, t, a) {
            var e = l.queue;
            if (e === null) throw Error(y(311));
            e.lastRenderedReducer = a;
            var u = l.baseQueue,
                n = e.pending;
            if (n !== null) {
                if (u !== null) {
                    var i = u.next;
                    u.next = n.next, n.next = i
                }
                t.baseQueue = u = n, e.pending = null
            }
            if (n = l.baseState, u === null) l.memoizedState = n;
            else {
                t = u.next;
                var c = i = null,
                    f = null,
                    m = t,
                    p = !1;
                do {
                    var T = m.lane & -536870913;
                    if (T !== m.lane ? (W & T) === T : (Qt & T) === T) {
                        var v = m.revertLane;
                        if (v === 0) f !== null && (f = f.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: m.action,
                            hasEagerState: m.hasEagerState,
                            eagerState: m.eagerState,
                            next: null
                        }), T === ie && (p = !0);
                        else if ((Qt & v) === v) {
                            m = m.next, v === ie && (p = !0);
                            continue
                        } else T = {
                            lane: 0,
                            revertLane: m.revertLane,
                            gesture: null,
                            action: m.action,
                            hasEagerState: m.hasEagerState,
                            eagerState: m.eagerState,
                            next: null
                        }, f === null ? (c = f = T, i = n) : f = f.next = T, B.lanes |= v, da |= v;
                        T = m.action, Ba && a(n, T), n = m.hasEagerState ? m.eagerState : a(n, T)
                    } else v = {
                        lane: T,
                        revertLane: m.revertLane,
                        gesture: m.gesture,
                        action: m.action,
                        hasEagerState: m.hasEagerState,
                        eagerState: m.eagerState,
                        next: null
                    }, f === null ? (c = f = v, i = n) : f = f.next = v, B.lanes |= T, da |= T;
                    m = m.next
                } while (m !== null && m !== t);
                if (f === null ? i = n : f.next = c, !ct(n, l.memoizedState) && (Rl = !0, p && (a = ce, a !== null))) throw a;
                l.memoizedState = n, l.baseState = i, l.baseQueue = f, e.lastRenderedState = n
            }
            return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]
        }

        function ac(l) {
            var t = Ul(),
                a = t.queue;
            if (a === null) throw Error(y(311));
            a.lastRenderedReducer = l;
            var e = a.dispatch,
                u = a.pending,
                n = t.memoizedState;
            if (u !== null) {
                a.pending = null;
                var i = u = u.next;
                do n = l(n, i.action), i = i.next; while (i !== u);
                ct(n, t.memoizedState) || (Rl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n
            }
            return [n, e]
        }

        function F0(l, t, a) {
            var e = B,
                u = Ul(),
                n = I;
            if (n) {
                if (a === void 0) throw Error(y(407));
                a = a()
            } else a = t();
            var i = !ct((ol || u).memoizedState, a);
            if (i && (u.memoizedState = a, Rl = !0), u = u.queue, nc(ls.bind(null, e, u, l), [l]), u.getSnapshot !== t || i || Hl !== null && Hl.memoizedState.tag & 1) {
                if (e.flags |= 2048, me(9, {
                        destroy: void 0
                    }, P0.bind(null, e, u, a, t), null), gl === null) throw Error(y(349));
                n || (Qt & 127) !== 0 || I0(e, t, a)
            }
            return a
        }

        function I0(l, t, a) {
            l.flags |= 16384, l = {
                getSnapshot: t,
                value: a
            }, t = B.updateQueue, t === null ? (t = ln(), B.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l))
        }

        function P0(l, t, a, e) {
            t.value = a, t.getSnapshot = e, ts(t) && as(l)
        }

        function ls(l, t, a) {
            return a(function() {
                ts(t) && as(l)
            })
        }

        function ts(l) {
            var t = l.getSnapshot;
            l = l.value;
            try {
                var a = t();
                return !ct(l, a)
            } catch {
                return !0
            }
        }

        function as(l) {
            var t = Da(l, 2);
            t !== null && et(t, l, 2)
        }

        function ec(l) {
            var t = $l();
            if (typeof l == "function") {
                var a = l;
                if (l = a(), Ba) {
                    Ft(!0);
                    try {
                        a()
                    } finally {
                        Ft(!1)
                    }
                }
            }
            return t.memoizedState = t.baseState = l, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: l
            }, t
        }

        function es(l, t, a, e) {
            return l.baseState = a, tc(l, ol, typeof e == "function" ? e : Xt)
        }

        function y2(l, t, a, e, u) {
            if (nn(l)) throw Error(y(485));
            if (l = t.action, l !== null) {
                var n = {
                    payload: u,
                    action: l,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(i) {
                        n.listeners.push(i)
                    }
                };
                S.T !== null ? a(!0) : n.isTransition = !1, e(n), a = t.pending, a === null ? (n.next = t.pending = n, us(t, n)) : (n.next = a.next, t.pending = a.next = n)
            }
        }

        function us(l, t) {
            var a = t.action,
                e = t.payload,
                u = l.state;
            if (t.isTransition) {
                var n = S.T,
                    i = {};
                S.T = i;
                try {
                    var c = a(u, e),
                        f = S.S;
                    f !== null && f(i, c), ns(l, t, c)
                } catch (m) {
                    uc(l, t, m)
                } finally {
                    n !== null && i.types !== null && (n.types = i.types), S.T = n
                }
            } else try {
                n = a(u, e), ns(l, t, n)
            } catch (m) {
                uc(l, t, m)
            }
        }

        function ns(l, t, a) {
            a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(e) {
                is(l, t, e)
            }, function(e) {
                return uc(l, t, e)
            }) : is(l, t, a)
        }

        function is(l, t, a) {
            t.status = "fulfilled", t.value = a, cs(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, us(l, a)))
        }

        function uc(l, t, a) {
            var e = l.pending;
            if (l.pending = null, e !== null) {
                e = e.next;
                do t.status = "rejected", t.reason = a, cs(t), t = t.next; while (t !== e)
            }
            l.action = null
        }

        function cs(l) {
            l = l.listeners;
            for (var t = 0; t < l.length; t++)(0, l[t])()
        }

        function fs(l, t) {
            return t
        }

        function ss(l, t) {
            if (I) {
                var a = gl.formState;
                if (a !== null) {
                    l: {
                        var e = B;
                        if (I) {
                            if (Sl) {
                                t: {
                                    for (var u = Sl, n = bt; u.nodeType !== 8;) {
                                        if (!n) {
                                            u = null;
                                            break t
                                        }
                                        if (u = Tt(u.nextSibling), u === null) {
                                            u = null;
                                            break t
                                        }
                                    }
                                    n = u.data,
                                    u = n === "F!" || n === "F" ? u : null
                                }
                                if (u) {
                                    Sl = Tt(u.nextSibling), e = u.data === "F!";
                                    break l
                                }
                            }
                            aa(e)
                        }
                        e = !1
                    }
                    e && (t = a[0])
                }
            }
            return a = $l(), a.memoizedState = a.baseState = t, e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: fs,
                lastRenderedState: t
            }, a.queue = e, a = xs.bind(null, B, e), e.dispatch = a, e = ec(!1), n = oc.bind(null, B, !1, e.queue), e = $l(), u = {
                state: t,
                dispatch: null,
                action: l,
                pending: null
            }, e.queue = u, a = y2.bind(null, B, u, n, a), u.dispatch = a, e.memoizedState = l, [t, a, !1]
        }

        function os(l) {
            var t = Ul();
            return ds(t, ol, l)
        }

        function ds(l, t, a) {
            if (t = tc(l, t, fs)[0], l = an(Xt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var e = Pe(t)
            } catch (i) {
                throw i === fe ? Ju : i
            } else e = t;
            t = Ul();
            var u = t.queue,
                n = u.dispatch;
            return a !== t.memoizedState && (B.flags |= 2048, me(9, {
                destroy: void 0
            }, v2.bind(null, u, a), null)), [e, n, l]
        }

        function v2(l, t) {
            l.action = t
        }

        function hs(l) {
            var t = Ul(),
                a = ol;
            if (a !== null) return ds(t, a, l);
            Ul(), t = t.memoizedState, a = Ul();
            var e = a.queue.dispatch;
            return a.memoizedState = l, [t, e, !1]
        }

        function me(l, t, a, e) {
            return l = {
                tag: l,
                create: a,
                deps: e,
                inst: t,
                next: null
            }, t = B.updateQueue, t === null && (t = ln(), B.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l
        }

        function ms() {
            return Ul().memoizedState
        }

        function en(l, t, a, e) {
            var u = $l();
            B.flags |= l, u.memoizedState = me(1 | t, {
                destroy: void 0
            }, a, e === void 0 ? null : e)
        }

        function un(l, t, a, e) {
            var u = Ul();
            e = e === void 0 ? null : e;
            var n = u.memoizedState.inst;
            ol !== null && e !== null && ki(e, ol.memoizedState.deps) ? u.memoizedState = me(t, n, a, e) : (B.flags |= l, u.memoizedState = me(1 | t, n, a, e))
        }

        function ys(l, t) {
            en(8390656, 8, l, t)
        }

        function nc(l, t) {
            un(2048, 8, l, t)
        }

        function r2(l) {
            B.flags |= 4;
            var t = B.updateQueue;
            if (t === null) t = ln(), B.updateQueue = t, t.events = [l];
            else {
                var a = t.events;
                a === null ? t.events = [l] : a.push(l)
            }
        }

        function vs(l) {
            var t = Ul().memoizedState;
            return r2({
                    ref: t,
                    nextImpl: l
                }),
                function() {
                    if ((ul & 2) !== 0) throw Error(y(440));
                    return t.impl.apply(void 0, arguments)
                }
        }

        function rs(l, t) {
            return un(4, 2, l, t)
        }

        function gs(l, t) {
            return un(4, 4, l, t)
        }

        function ps(l, t) {
            if (typeof t == "function") {
                l = l();
                var a = t(l);
                return function() {
                    typeof a == "function" ? a() : t(null)
                }
            }
            if (t != null) return l = l(), t.current = l,
                function() {
                    t.current = null
                }
        }

        function Ss(l, t, a) {
            a = a != null ? a.concat([l]) : null, un(4, 4, ps.bind(null, t, l), a)
        }

        function ic() {}

        function bs(l, t) {
            var a = Ul();
            t = t === void 0 ? null : t;
            var e = a.memoizedState;
            return t !== null && ki(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l)
        }

        function zs(l, t) {
            var a = Ul();
            t = t === void 0 ? null : t;
            var e = a.memoizedState;
            if (t !== null && ki(t, e[1])) return e[0];
            if (e = l(), Ba) {
                Ft(!0);
                try {
                    l()
                } finally {
                    Ft(!1)
                }
            }
            return a.memoizedState = [e, t], e
        }

        function cc(l, t, a) {
            return a === void 0 || (Qt & 1073741824) !== 0 && (W & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = Eo(), B.lanes |= l, da |= l, a)
        }

        function Ts(l, t, a, e) {
            return ct(a, t) ? a : oe.current !== null ? (l = cc(l, a, e), ct(l, t) || (Rl = !0), l) : (Qt & 42) === 0 || (Qt & 1073741824) !== 0 && (W & 261930) === 0 ? (Rl = !0, l.memoizedState = a) : (l = Eo(), B.lanes |= l, da |= l, t)
        }

        function Es(l, t, a, e, u) {
            var n = A.p;
            A.p = n !== 0 && 8 > n ? n : 8;
            var i = S.T,
                c = {};
            S.T = c, oc(l, !1, t, a);
            try {
                var f = u(),
                    m = S.S;
                if (m !== null && m(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
                    var p = d2(f, e);
                    lu(l, t, p, mt(l))
                } else lu(l, t, e, mt(l))
            } catch (T) {
                lu(l, t, {
                    then: function() {},
                    status: "rejected",
                    reason: T
                }, mt())
            } finally {
                A.p = n, i !== null && c.types !== null && (i.types = c.types), S.T = i
            }
        }

        function g2() {}

        function fc(l, t, a, e) {
            if (l.tag !== 5) throw Error(y(476));
            var u = As(l).queue;
            Es(l, u, t, R, a === null ? g2 : function() {
                return _s(l), a(e)
            })
        }

        function As(l) {
            var t = l.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: R,
                baseState: R,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Xt,
                    lastRenderedState: R
                },
                next: null
            };
            var a = {};
            return t.next = {
                memoizedState: a,
                baseState: a,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Xt,
                    lastRenderedState: a
                },
                next: null
            }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
        }

        function _s(l) {
            var t = As(l);
            t.next === null && (t = l.alternate.memoizedState), lu(l, t.next.queue, {}, mt())
        }

        function sc() {
            return Ll(gu)
        }

        function Ms() {
            return Ul().memoizedState
        }

        function Os() {
            return Ul().memoizedState
        }

        function p2(l) {
            for (var t = l.return; t !== null;) {
                switch (t.tag) {
                    case 24:
                    case 3:
                        var a = mt();
                        l = na(a);
                        var e = ia(t, l, a);
                        e !== null && (et(e, t, a), ke(e, t, a)), t = {
                            cache: Bi()
                        }, l.payload = t;
                        return
                }
                t = t.return
            }
        }

        function S2(l, t, a) {
            var e = mt();
            a = {
                lane: e,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, nn(l) ? Ds(t, a) : (a = Oi(l, t, a, e), a !== null && (et(a, l, e), Us(a, t, e)))
        }

        function xs(l, t, a) {
            var e = mt();
            lu(l, t, a, e)
        }

        function lu(l, t, a, e) {
            var u = {
                lane: e,
                revertLane: 0,
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (nn(l)) Ds(t, u);
            else {
                var n = l.alternate;
                if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
                    var i = t.lastRenderedState,
                        c = n(i, a);
                    if (u.hasEagerState = !0, u.eagerState = c, ct(c, i)) return Gu(l, t, u, 0), gl === null && Bu(), !1
                } catch {} finally {}
                if (a = Oi(l, t, u, e), a !== null) return et(a, l, e), Us(a, t, e), !0
            }
            return !1
        }

        function oc(l, t, a, e) {
            if (e = {
                    lane: 2,
                    revertLane: Zc(),
                    gesture: null,
                    action: e,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, nn(l)) {
                if (t) throw Error(y(479))
            } else t = Oi(l, a, e, 2), t !== null && et(t, l, 2)
        }

        function nn(l) {
            var t = l.alternate;
            return l === B || t !== null && t === B
        }

        function Ds(l, t) {
            de = Iu = !0;
            var a = l.pending;
            a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t
        }

        function Us(l, t, a) {
            if ((a & 4194048) !== 0) {
                var e = t.lanes;
                e &= l.pendingLanes, a |= e, t.lanes = a, qf(l, a)
            }
        }
        var tu = {
            readContext: Ll,
            use: tn,
            useCallback: Al,
            useContext: Al,
            useEffect: Al,
            useImperativeHandle: Al,
            useLayoutEffect: Al,
            useInsertionEffect: Al,
            useMemo: Al,
            useReducer: Al,
            useRef: Al,
            useState: Al,
            useDebugValue: Al,
            useDeferredValue: Al,
            useTransition: Al,
            useSyncExternalStore: Al,
            useId: Al,
            useHostTransitionStatus: Al,
            useFormState: Al,
            useActionState: Al,
            useOptimistic: Al,
            useMemoCache: Al,
            useCacheRefresh: Al
        };
        tu.useEffectEvent = Al;
        var Cs = {
                readContext: Ll,
                use: tn,
                useCallback: function(l, t) {
                    return $l().memoizedState = [l, t === void 0 ? null : t], l
                },
                useContext: Ll,
                useEffect: ys,
                useImperativeHandle: function(l, t, a) {
                    a = a != null ? a.concat([l]) : null, en(4194308, 4, ps.bind(null, t, l), a)
                },
                useLayoutEffect: function(l, t) {
                    return en(4194308, 4, l, t)
                },
                useInsertionEffect: function(l, t) {
                    en(4, 2, l, t)
                },
                useMemo: function(l, t) {
                    var a = $l();
                    t = t === void 0 ? null : t;
                    var e = l();
                    if (Ba) {
                        Ft(!0);
                        try {
                            l()
                        } finally {
                            Ft(!1)
                        }
                    }
                    return a.memoizedState = [e, t], e
                },
                useReducer: function(l, t, a) {
                    var e = $l();
                    if (a !== void 0) {
                        var u = a(t);
                        if (Ba) {
                            Ft(!0);
                            try {
                                a(t)
                            } finally {
                                Ft(!1)
                            }
                        }
                    } else u = t;
                    return e.memoizedState = e.baseState = u, l = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: l,
                        lastRenderedState: u
                    }, e.queue = l, l = l.dispatch = S2.bind(null, B, l), [e.memoizedState, l]
                },
                useRef: function(l) {
                    var t = $l();
                    return l = {
                        current: l
                    }, t.memoizedState = l
                },
                useState: function(l) {
                    l = ec(l);
                    var t = l.queue,
                        a = xs.bind(null, B, t);
                    return t.dispatch = a, [l.memoizedState, a]
                },
                useDebugValue: ic,
                useDeferredValue: function(l, t) {
                    var a = $l();
                    return cc(a, l, t)
                },
                useTransition: function() {
                    var l = ec(!1);
                    return l = Es.bind(null, B, l.queue, !0, !1), $l().memoizedState = l, [!1, l]
                },
                useSyncExternalStore: function(l, t, a) {
                    var e = B,
                        u = $l();
                    if (I) {
                        if (a === void 0) throw Error(y(407));
                        a = a()
                    } else {
                        if (a = t(), gl === null) throw Error(y(349));
                        (W & 127) !== 0 || I0(e, t, a)
                    }
                    u.memoizedState = a;
                    var n = {
                        value: a,
                        getSnapshot: t
                    };
                    return u.queue = n, ys(ls.bind(null, e, n, l), [l]), e.flags |= 2048, me(9, {
                        destroy: void 0
                    }, P0.bind(null, e, n, a, t), null), a
                },
                useId: function() {
                    var l = $l(),
                        t = gl.identifierPrefix;
                    if (I) {
                        var a = Dt,
                            e = xt;
                        a = (e & ~(1 << 32 - it(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pu++, 0 < a && (t += "H" + a.toString(32)), t += "_"
                    } else a = h2++, t = "_" + t + "r_" + a.toString(32) + "_";
                    return l.memoizedState = t
                },
                useHostTransitionStatus: sc,
                useFormState: ss,
                useActionState: ss,
                useOptimistic: function(l) {
                    var t = $l();
                    t.memoizedState = t.baseState = l;
                    var a = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: null,
                        lastRenderedState: null
                    };
                    return t.queue = a, t = oc.bind(null, B, !0, a), a.dispatch = t, [l, t]
                },
                useMemoCache: lc,
                useCacheRefresh: function() {
                    return $l().memoizedState = p2.bind(null, B)
                },
                useEffectEvent: function(l) {
                    var t = $l(),
                        a = {
                            impl: l
                        };
                    return t.memoizedState = a,
                        function() {
                            if ((ul & 2) !== 0) throw Error(y(440));
                            return a.impl.apply(void 0, arguments)
                        }
                }
            },
            dc = {
                readContext: Ll,
                use: tn,
                useCallback: bs,
                useContext: Ll,
                useEffect: nc,
                useImperativeHandle: Ss,
                useInsertionEffect: rs,
                useLayoutEffect: gs,
                useMemo: zs,
                useReducer: an,
                useRef: ms,
                useState: function() {
                    return an(Xt)
                },
                useDebugValue: ic,
                useDeferredValue: function(l, t) {
                    var a = Ul();
                    return Ts(a, ol.memoizedState, l, t)
                },
                useTransition: function() {
                    var l = an(Xt)[0],
                        t = Ul().memoizedState;
                    return [typeof l == "boolean" ? l : Pe(l), t]
                },
                useSyncExternalStore: F0,
                useId: Ms,
                useHostTransitionStatus: sc,
                useFormState: os,
                useActionState: os,
                useOptimistic: function(l, t) {
                    var a = Ul();
                    return es(a, ol, l, t)
                },
                useMemoCache: lc,
                useCacheRefresh: Os
            };
        dc.useEffectEvent = vs;
        var Ns = {
            readContext: Ll,
            use: tn,
            useCallback: bs,
            useContext: Ll,
            useEffect: nc,
            useImperativeHandle: Ss,
            useInsertionEffect: rs,
            useLayoutEffect: gs,
            useMemo: zs,
            useReducer: ac,
            useRef: ms,
            useState: function() {
                return ac(Xt)
            },
            useDebugValue: ic,
            useDeferredValue: function(l, t) {
                var a = Ul();
                return ol === null ? cc(a, l, t) : Ts(a, ol.memoizedState, l, t)
            },
            useTransition: function() {
                var l = ac(Xt)[0],
                    t = Ul().memoizedState;
                return [typeof l == "boolean" ? l : Pe(l), t]
            },
            useSyncExternalStore: F0,
            useId: Ms,
            useHostTransitionStatus: sc,
            useFormState: hs,
            useActionState: hs,
            useOptimistic: function(l, t) {
                var a = Ul();
                return ol !== null ? es(a, ol, l, t) : (a.baseState = l, [l, a.queue.dispatch])
            },
            useMemoCache: lc,
            useCacheRefresh: Os
        };
        Ns.useEffectEvent = vs;

        function hc(l, t, a, e) {
            t = l.memoizedState, a = a(e, t), a = a == null ? t : D({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a)
        }
        var mc = {
            enqueueSetState: function(l, t, a) {
                l = l._reactInternals;
                var e = mt(),
                    u = na(e);
                u.payload = t, a != null && (u.callback = a), t = ia(l, u, e), t !== null && (et(t, l, e), ke(t, l, e))
            },
            enqueueReplaceState: function(l, t, a) {
                l = l._reactInternals;
                var e = mt(),
                    u = na(e);
                u.tag = 1, u.payload = t, a != null && (u.callback = a), t = ia(l, u, e), t !== null && (et(t, l, e), ke(t, l, e))
            },
            enqueueForceUpdate: function(l, t) {
                l = l._reactInternals;
                var a = mt(),
                    e = na(a);
                e.tag = 2, t != null && (e.callback = t), t = ia(l, e, a), t !== null && (et(t, l, a), ke(t, l, a))
            }
        };

        function Hs(l, t, a, e, u, n, i) {
            return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Xe(a, e) || !Xe(u, n) : !0
        }

        function Rs(l, t, a, e) {
            l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && mc.enqueueReplaceState(t, t.state, null)
        }

        function Ga(l, t) {
            var a = t;
            if ("ref" in t) {
                a = {};
                for (var e in t) e !== "ref" && (a[e] = t[e])
            }
            if (l = l.defaultProps) {
                a === t && (a = D({}, a));
                for (var u in l) a[u] === void 0 && (a[u] = l[u])
            }
            return a
        }

        function qs(l) {
            Yu(l)
        }

        function js(l) {
            console.error(l)
        }

        function Ys(l) {
            Yu(l)
        }

        function cn(l, t) {
            try {
                var a = l.onUncaughtError;
                a(t.value, {
                    componentStack: t.stack
                })
            } catch (e) {
                setTimeout(function() {
                    throw e
                })
            }
        }

        function Bs(l, t, a) {
            try {
                var e = l.onCaughtError;
                e(a.value, {
                    componentStack: a.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                })
            } catch (u) {
                setTimeout(function() {
                    throw u
                })
            }
        }

        function yc(l, t, a) {
            return a = na(a), a.tag = 3, a.payload = {
                element: null
            }, a.callback = function() {
                cn(l, t)
            }, a
        }

        function Gs(l) {
            return l = na(l), l.tag = 3, l
        }

        function Qs(l, t, a, e) {
            var u = a.type.getDerivedStateFromError;
            if (typeof u == "function") {
                var n = e.value;
                l.payload = function() {
                    return u(n)
                }, l.callback = function() {
                    Bs(t, a, e)
                }
            }
            var i = a.stateNode;
            i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
                Bs(t, a, e), typeof u != "function" && (ha === null ? ha = new Set([this]) : ha.add(this));
                var c = e.stack;
                this.componentDidCatch(e.value, {
                    componentStack: c !== null ? c : ""
                })
            })
        }

        function b2(l, t, a, e, u) {
            if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
                if (t = a.alternate, t !== null && ne(t, a, u, !0), a = st.current, a !== null) {
                    switch (a.tag) {
                        case 31:
                        case 13:
                            return zt === null ? Sn() : a.alternate === null && _l === 0 && (_l = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === Ku ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([e]) : t.add(e), Gc(l, e, u)), !1;
                        case 22:
                            return a.flags |= 65536, e === Ku ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([e])
                            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([e]) : a.add(e)), Gc(l, e, u)), !1
                    }
                    throw Error(y(435, a.tag))
                }
                return Gc(l, e, u), Sn(), !1
            }
            if (I) return t = st.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== Hi && (l = Error(y(422), {
                cause: e
            }), we(gt(l, a)))) : (e !== Hi && (t = Error(y(423), {
                cause: e
            }), we(gt(t, a))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = gt(e, a), u = yc(l.stateNode, e, u), wi(l, u), _l !== 4 && (_l = 2)), !1;
            var n = Error(y(520), {
                cause: e
            });
            if (n = gt(n, a), su === null ? su = [n] : su.push(n), _l !== 4 && (_l = 2), t === null) return !0;
            e = gt(e, a), a = t;
            do {
                switch (a.tag) {
                    case 3:
                        return a.flags |= 65536, l = u & -u, a.lanes |= l, l = yc(a.stateNode, e, l), wi(a, l), !1;
                    case 1:
                        if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ha === null || !ha.has(n)))) return a.flags |= 65536, u &= -u, a.lanes |= u, u = Gs(u), Qs(u, l, a, e), wi(a, u), !1
                }
                a = a.return
            } while (a !== null);
            return !1
        }
        var vc = Error(y(461)),
            Rl = !1;

        function wl(l, t, a, e) {
            t.child = l === null ? w0(t, null, a, e) : Ya(t, l.child, a, e)
        }

        function Xs(l, t, a, e, u) {
            a = a.render;
            var n = t.ref;
            if ("ref" in e) {
                var i = {};
                for (var c in e) c !== "ref" && (i[c] = e[c])
            } else i = e;
            return Ha(t), e = $i(l, t, a, i, n, u), c = Fi(), l !== null && !Rl ? (Ii(l, t, u), Zt(l, t, u)) : (I && c && Ci(t), t.flags |= 1, wl(l, t, e, u), t.child)
        }

        function Zs(l, t, a, e, u) {
            if (l === null) {
                var n = a.type;
                return typeof n == "function" && !xi(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Ls(l, t, n, e, u)) : (l = Xu(a.type, null, e, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l)
            }
            if (n = l.child, !Ec(l, u)) {
                var i = n.memoizedProps;
                if (a = a.compare, a = a !== null ? a : Xe, a(i, e) && l.ref === t.ref) return Zt(l, t, u)
            }
            return t.flags |= 1, l = jt(n, e), l.ref = t.ref, l.return = t, t.child = l
        }

        function Ls(l, t, a, e, u) {
            if (l !== null) {
                var n = l.memoizedProps;
                if (Xe(n, e) && l.ref === t.ref)
                    if (Rl = !1, t.pendingProps = e = n, Ec(l, u))(l.flags & 131072) !== 0 && (Rl = !0);
                    else return t.lanes = l.lanes, Zt(l, t, u)
            }
            return rc(l, t, a, e, u)
        }

        function ws(l, t, a, e) {
            var u = e.children,
                n = l !== null ? l.memoizedState : null;
            if (l === null && t.stateNode === null && (t.stateNode = {
                    _visibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null
                }), e.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (n = n !== null ? n.baseLanes | a : a, l !== null) {
                        for (e = t.child = l.child, u = 0; e !== null;) u = u | e.lanes | e.childLanes, e = e.sibling;
                        e = u & ~n
                    } else e = 0, t.child = null;
                    return Vs(l, t, n, a, e)
                }
                if ((a & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, l !== null && Vu(t, n !== null ? n.cachePool : null), n !== null ? K0(t, n) : Ji(), W0(t);
                else return e = t.lanes = 536870912, Vs(l, t, n !== null ? n.baseLanes | a : a, a, e)
            } else n !== null ? (Vu(t, n.cachePool), K0(t, n), fa(), t.memoizedState = null) : (l !== null && Vu(t, null), Ji(), fa());
            return wl(l, t, u, a), t.child
        }

        function au(l, t) {
            return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), t.sibling
        }

        function Vs(l, t, a, e, u) {
            var n = Qi();
            return n = n === null ? null : {
                parent: Nl._currentValue,
                pool: n
            }, t.memoizedState = {
                baseLanes: a,
                cachePool: n
            }, l !== null && Vu(t, null), Ji(), W0(t), l !== null && ne(l, t, e, !0), t.childLanes = u, null
        }

        function fn(l, t) {
            return t = on({
                mode: t.mode,
                children: t.children
            }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t
        }

        function Js(l, t, a) {
            return Ya(t, l.child, null, a), l = fn(t, t.pendingProps), l.flags |= 2, ot(t), t.memoizedState = null, l
        }

        function z2(l, t, a) {
            var e = t.pendingProps,
                u = (t.flags & 128) !== 0;
            if (t.flags &= -129, l === null) {
                if (I) {
                    if (e.mode === "hidden") return l = fn(t, e), t.lanes = 536870912, au(null, l);
                    if (Wi(t), (l = Sl) ? (l = n1(l, bt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
                            dehydrated: l,
                            treeContext: la !== null ? {
                                id: xt,
                                overflow: Dt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, a = D0(l), a.return = t, t.child = a, Zl = t, Sl = null)) : l = null, l === null) throw aa(t);
                    return t.lanes = 536870912, null
                }
                return fn(t, e)
            }
            var n = l.memoizedState;
            if (n !== null) {
                var i = n.dehydrated;
                if (Wi(t), u)
                    if (t.flags & 256) t.flags &= -257, t = Js(l, t, a);
                    else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
                else throw Error(y(558));
                else if (Rl || ne(l, t, a, !1), u = (a & l.childLanes) !== 0, Rl || u) {
                    if (e = gl, e !== null && (i = jf(e, a), i !== 0 && i !== n.retryLane)) throw n.retryLane = i, Da(l, i), et(e, l, i), vc;
                    Sn(), t = Js(l, t, a)
                } else l = n.treeContext, Sl = Tt(i.nextSibling), Zl = t, I = !0, ta = null, bt = !1, l !== null && N0(t, l), t = fn(t, e), t.flags |= 4096;
                return t
            }
            return l = jt(l.child, {
                mode: e.mode,
                children: e.children
            }), l.ref = t.ref, t.child = l, l.return = t, l
        }

        function sn(l, t) {
            var a = t.ref;
            if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof a != "function" && typeof a != "object") throw Error(y(284));
                (l === null || l.ref !== a) && (t.flags |= 4194816)
            }
        }

        function rc(l, t, a, e, u) {
            return Ha(t), a = $i(l, t, a, e, void 0, u), e = Fi(), l !== null && !Rl ? (Ii(l, t, u), Zt(l, t, u)) : (I && e && Ci(t), t.flags |= 1, wl(l, t, a, u), t.child)
        }

        function Ks(l, t, a, e, u, n) {
            return Ha(t), t.updateQueue = null, a = $0(t, e, a, u), k0(l), e = Fi(), l !== null && !Rl ? (Ii(l, t, n), Zt(l, t, n)) : (I && e && Ci(t), t.flags |= 1, wl(l, t, a, n), t.child)
        }

        function Ws(l, t, a, e, u) {
            if (Ha(t), t.stateNode === null) {
                var n = te,
                    i = a.contextType;
                typeof i == "object" && i !== null && (n = Ll(i)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = mc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Zi(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? Ll(i) : te, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (hc(t, a, i, e), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && mc.enqueueReplaceState(n, n.state, null), Fe(t, e, n, u), $e(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0
            } else if (l === null) {
                n = t.stateNode;
                var c = t.memoizedProps,
                    f = Ga(a, c);
                n.props = f;
                var m = n.context,
                    p = a.contextType;
                i = te, typeof p == "object" && p !== null && (i = Ll(p));
                var T = a.getDerivedStateFromProps;
                p = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== i) && Rs(t, n, e, i), ua = !1;
                var v = t.memoizedState;
                n.state = v, Fe(t, e, n, u), $e(), m = t.memoizedState, c || v !== m || ua ? (typeof T == "function" && (hc(t, a, T, e), m = t.memoizedState), (f = ua || Hs(t, a, f, e, v, m, i)) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = m), n.props = e, n.state = m, n.context = i, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1)
            } else {
                n = t.stateNode, Li(l, t), i = t.memoizedProps, p = Ga(a, i), n.props = p, T = t.pendingProps, v = n.context, m = a.contextType, f = te, typeof m == "object" && m !== null && (f = Ll(m)), c = a.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== T || v !== f) && Rs(t, n, e, f), ua = !1, v = t.memoizedState, n.state = v, Fe(t, e, n, u), $e();
                var r = t.memoizedState;
                i !== T || v !== r || ua || l !== null && l.dependencies !== null && Lu(l.dependencies) ? (typeof c == "function" && (hc(t, a, c, e), r = t.memoizedState), (p = ua || Hs(t, a, p, e, v, r, f) || l !== null && l.dependencies !== null && Lu(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, r, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(e, r, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = r), n.props = e, n.state = r, n.context = f, e = p) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), e = !1)
            }
            return n = e, sn(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = Ya(t, l.child, null, u), t.child = Ya(t, null, a, u)) : wl(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Zt(l, t, u), l
        }

        function ks(l, t, a, e) {
            return Ca(), t.flags |= 256, wl(l, t, a, e), t.child
        }
        var gc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };

        function pc(l) {
            return {
                baseLanes: l,
                cachePool: B0()
            }
        }

        function Sc(l, t, a) {
            return l = l !== null ? l.childLanes & ~a : 0, t && (l |= ht), l
        }

        function $s(l, t, a) {
            var e = t.pendingProps,
                u = !1,
                n = (t.flags & 128) !== 0,
                i;
            if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (Dl.current & 2) !== 0), i && (u = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
                if (I) {
                    if (u ? ca(t) : fa(), (l = Sl) ? (l = n1(l, bt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
                            dehydrated: l,
                            treeContext: la !== null ? {
                                id: xt,
                                overflow: Dt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, a = D0(l), a.return = t, t.child = a, Zl = t, Sl = null)) : l = null, l === null) throw aa(t);
                    return tf(l) ? t.lanes = 32 : t.lanes = 536870912, null
                }
                var c = e.children;
                return e = e.fallback, u ? (fa(), u = t.mode, c = on({
                    mode: "hidden",
                    children: c
                }, u), e = Ua(e, u, a, null), c.return = t, e.return = t, c.sibling = e, t.child = c, e = t.child, e.memoizedState = pc(a), e.childLanes = Sc(l, i, a), t.memoizedState = gc, au(null, e)) : (ca(t), bc(t, c))
            }
            var f = l.memoizedState;
            if (f !== null && (c = f.dehydrated, c !== null)) {
                if (n) t.flags & 256 ? (ca(t), t.flags &= -257, t = zc(l, t, a)) : t.memoizedState !== null ? (fa(), t.child = l.child, t.flags |= 128, t = null) : (fa(), c = e.fallback, u = t.mode, e = on({
                    mode: "visible",
                    children: e.children
                }, u), c = Ua(c, u, a, null), c.flags |= 2, e.return = t, c.return = t, e.sibling = c, t.child = e, Ya(t, l.child, null, a), e = t.child, e.memoizedState = pc(a), e.childLanes = Sc(l, i, a), t.memoizedState = gc, t = au(null, e));
                else if (ca(t), tf(c)) {
                    if (i = c.nextSibling && c.nextSibling.dataset, i) var m = i.dgst;
                    i = m, e = Error(y(419)), e.stack = "", e.digest = i, we({
                        value: e,
                        source: null,
                        stack: null
                    }), t = zc(l, t, a)
                } else if (Rl || ne(l, t, a, !1), i = (a & l.childLanes) !== 0, Rl || i) {
                    if (i = gl, i !== null && (e = jf(i, a), e !== 0 && e !== f.retryLane)) throw f.retryLane = e, Da(l, e), et(i, l, e), vc;
                    lf(c) || Sn(), t = zc(l, t, a)
                } else lf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, Sl = Tt(c.nextSibling), Zl = t, I = !0, ta = null, bt = !1, l !== null && N0(t, l), t = bc(t, e.children), t.flags |= 4096);
                return t
            }
            return u ? (fa(), c = e.fallback, u = t.mode, f = l.child, m = f.sibling, e = jt(f, {
                mode: "hidden",
                children: e.children
            }), e.subtreeFlags = f.subtreeFlags & 65011712, m !== null ? c = jt(m, c) : (c = Ua(c, u, a, null), c.flags |= 2), c.return = t, e.return = t, e.sibling = c, t.child = e, au(null, e), e = t.child, c = l.child.memoizedState, c === null ? c = pc(a) : (u = c.cachePool, u !== null ? (f = Nl._currentValue, u = u.parent !== f ? {
                parent: f,
                pool: f
            } : u) : u = B0(), c = {
                baseLanes: c.baseLanes | a,
                cachePool: u
            }), e.memoizedState = c, e.childLanes = Sc(l, i, a), t.memoizedState = gc, au(l.child, e)) : (ca(t), a = l.child, l = a.sibling, a = jt(a, {
                mode: "visible",
                children: e.children
            }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a)
        }

        function bc(l, t) {
            return t = on({
                mode: "visible",
                children: t
            }, l.mode), t.return = l, l.child = t
        }

        function on(l, t) {
            return l = ft(22, l, null, t), l.lanes = 0, l
        }

        function zc(l, t, a) {
            return Ya(t, l.child, null, a), l = bc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
        }

        function Fs(l, t, a) {
            l.lanes |= t;
            var e = l.alternate;
            e !== null && (e.lanes |= t), ji(l.return, t, a)
        }

        function Tc(l, t, a, e, u, n) {
            var i = l.memoizedState;
            i === null ? l.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: e,
                tail: a,
                tailMode: u,
                treeForkCount: n
            } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = e, i.tail = a, i.tailMode = u, i.treeForkCount = n)
        }

        function Is(l, t, a) {
            var e = t.pendingProps,
                u = e.revealOrder,
                n = e.tail;
            e = e.children;
            var i = Dl.current,
                c = (i & 2) !== 0;
            if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, _(Dl, i), wl(l, t, e, a), e = I ? Le : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null;) {
                if (l.tag === 13) l.memoizedState !== null && Fs(l, a, t);
                else if (l.tag === 19) Fs(l, a, t);
                else if (l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue
                }
                if (l === t) break l;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t) break l;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
            switch (u) {
                case "forwards":
                    for (a = t.child, u = null; a !== null;) l = a.alternate, l !== null && Fu(l) === null && (u = a), a = a.sibling;
                    a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), Tc(t, !1, u, a, n, e);
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for (a = null, u = t.child, t.child = null; u !== null;) {
                        if (l = u.alternate, l !== null && Fu(l) === null) {
                            t.child = u;
                            break
                        }
                        l = u.sibling, u.sibling = a, a = u, u = l
                    }
                    Tc(t, !0, a, null, n, e);
                    break;
                case "together":
                    Tc(t, !1, null, null, void 0, e);
                    break;
                default:
                    t.memoizedState = null
            }
            return t.child
        }

        function Zt(l, t, a) {
            if (l !== null && (t.dependencies = l.dependencies), da |= t.lanes, (a & t.childLanes) === 0)
                if (l !== null) {
                    if (ne(l, t, a, !1), (a & t.childLanes) === 0) return null
                } else return null;
            if (l !== null && t.child !== l.child) throw Error(y(153));
            if (t.child !== null) {
                for (l = t.child, a = jt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null;) l = l.sibling, a = a.sibling = jt(l, l.pendingProps), a.return = t;
                a.sibling = null
            }
            return t.child
        }

        function Ec(l, t) {
            return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Lu(l)))
        }

        function T2(l, t, a) {
            switch (t.tag) {
                case 3:
                    kl(t, t.stateNode.containerInfo), ea(t, Nl, l.memoizedState.cache), Ca();
                    break;
                case 27:
                case 5:
                    xe(t);
                    break;
                case 4:
                    kl(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    ea(t, t.type, t.memoizedProps.value);
                    break;
                case 31:
                    if (t.memoizedState !== null) return t.flags |= 128, Wi(t), null;
                    break;
                case 13:
                    var e = t.memoizedState;
                    if (e !== null) return e.dehydrated !== null ? (ca(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? $s(l, t, a) : (ca(t), l = Zt(l, t, a), l !== null ? l.sibling : null);
                    ca(t);
                    break;
                case 19:
                    var u = (l.flags & 128) !== 0;
                    if (e = (a & t.childLanes) !== 0, e || (ne(l, t, a, !1), e = (a & t.childLanes) !== 0), u) {
                        if (e) return Is(l, t, a);
                        t.flags |= 128
                    }
                    if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), _(Dl, Dl.current), e) break;
                    return null;
                case 22:
                    return t.lanes = 0, ws(l, t, a, t.pendingProps);
                case 24:
                    ea(t, Nl, l.memoizedState.cache)
            }
            return Zt(l, t, a)
        }

        function Ps(l, t, a) {
            if (l !== null)
                if (l.memoizedProps !== t.pendingProps) Rl = !0;
                else {
                    if (!Ec(l, a) && (t.flags & 128) === 0) return Rl = !1, T2(l, t, a);
                    Rl = (l.flags & 131072) !== 0
                }
            else Rl = !1, I && (t.flags & 1048576) !== 0 && C0(t, Le, t.index);
            switch (t.lanes = 0, t.tag) {
                case 16:
                    l: {
                        var e = t.pendingProps;
                        if (l = qa(t.elementType), t.type = l, typeof l == "function") xi(l) ? (e = Ga(l, e), t.tag = 1, t = Ws(null, t, l, e, a)) : (t.tag = 0, t = rc(null, t, l, e, a));
                        else {
                            if (l != null) {
                                var u = l.$$typeof;
                                if (u === F) {
                                    t.tag = 11, t = Xs(null, t, l, e, a);
                                    break l
                                } else if (u === G) {
                                    t.tag = 14, t = Zs(null, t, l, e, a);
                                    break l
                                }
                            }
                            throw t = Nt(l) || l, Error(y(306, t, ""))
                        }
                    }
                    return t;
                case 0:
                    return rc(l, t, t.type, t.pendingProps, a);
                case 1:
                    return e = t.type, u = Ga(e, t.pendingProps), Ws(l, t, e, u, a);
                case 3:
                    l: {
                        if (kl(t, t.stateNode.containerInfo), l === null) throw Error(y(387));e = t.pendingProps;
                        var n = t.memoizedState;u = n.element,
                        Li(l, t),
                        Fe(t, e, null, a);
                        var i = t.memoizedState;
                        if (e = i.cache, ea(t, Nl, e), e !== n.cache && Yi(t, [Nl], a, !0), $e(), e = i.element, n.isDehydrated)
                            if (n = {
                                    element: e,
                                    isDehydrated: !1,
                                    cache: i.cache
                                }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
                                t = ks(l, t, e, a);
                                break l
                            } else if (e !== u) {
                            u = gt(Error(y(424)), t), we(u), t = ks(l, t, e, a);
                            break l
                        } else {
                            switch (l = t.stateNode.containerInfo, l.nodeType) {
                                case 9:
                                    l = l.body;
                                    break;
                                default:
                                    l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                            }
                            for (Sl = Tt(l.firstChild), Zl = t, I = !0, ta = null, bt = !0, a = w0(t, null, e, a), t.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling
                        } else {
                            if (Ca(), e === u) {
                                t = Zt(l, t, a);
                                break l
                            }
                            wl(l, t, e, a)
                        }
                        t = t.child
                    }
                    return t;
                case 26:
                    return sn(l, t), l === null ? (a = d1(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : I || (a = t.type, l = t.pendingProps, e = Mn(L.current).createElement(a), e[Xl] = t, e[Fl] = l, Vl(e, a, l), Bl(e), t.stateNode = e) : t.memoizedState = d1(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
                case 27:
                    return xe(t), l === null && I && (e = t.stateNode = f1(t.type, t.pendingProps, L.current), Zl = t, bt = !0, u = Sl, ra(t.type) ? (af = u, Sl = Tt(e.firstChild)) : Sl = u), wl(l, t, t.pendingProps.children, a), sn(l, t), l === null && (t.flags |= 4194304), t.child;
                case 5:
                    return l === null && I && ((u = e = Sl) && (e = I2(e, t.type, t.pendingProps, bt), e !== null ? (t.stateNode = e, Zl = t, Sl = Tt(e.firstChild), bt = !1, u = !0) : u = !1), u || aa(t)), xe(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, e = n.children, Fc(u, n) ? e = null : i !== null && Fc(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = $i(l, t, m2, null, null, a), gu._currentValue = u), sn(l, t), wl(l, t, e, a), t.child;
                case 6:
                    return l === null && I && ((l = a = Sl) && (a = P2(a, t.pendingProps, bt), a !== null ? (t.stateNode = a, Zl = t, Sl = null, l = !0) : l = !1), l || aa(t)), null;
                case 13:
                    return $s(l, t, a);
                case 4:
                    return kl(t, t.stateNode.containerInfo), e = t.pendingProps, l === null ? t.child = Ya(t, null, e, a) : wl(l, t, e, a), t.child;
                case 11:
                    return Xs(l, t, t.type, t.pendingProps, a);
                case 7:
                    return wl(l, t, t.pendingProps, a), t.child;
                case 8:
                    return wl(l, t, t.pendingProps.children, a), t.child;
                case 12:
                    return wl(l, t, t.pendingProps.children, a), t.child;
                case 10:
                    return e = t.pendingProps, ea(t, t.type, e.value), wl(l, t, e.children, a), t.child;
                case 9:
                    return u = t.type._context, e = t.pendingProps.children, Ha(t), u = Ll(u), e = e(u), t.flags |= 1, wl(l, t, e, a), t.child;
                case 14:
                    return Zs(l, t, t.type, t.pendingProps, a);
                case 15:
                    return Ls(l, t, t.type, t.pendingProps, a);
                case 19:
                    return Is(l, t, a);
                case 31:
                    return z2(l, t, a);
                case 22:
                    return ws(l, t, a, t.pendingProps);
                case 24:
                    return Ha(t), e = Ll(Nl), l === null ? (u = Qi(), u === null && (u = gl, n = Bi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = {
                        parent: e,
                        cache: u
                    }, Zi(t), ea(t, Nl, u)) : ((l.lanes & a) !== 0 && (Li(l, t), Fe(t, null, null, a), $e()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = {
                        parent: e,
                        cache: e
                    }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ea(t, Nl, e)) : (e = n.cache, ea(t, Nl, e), e !== u.cache && Yi(t, [Nl], a, !0))), wl(l, t, t.pendingProps.children, a), t.child;
                case 29:
                    throw t.pendingProps
            }
            throw Error(y(156, t.tag))
        }

        function Lt(l) {
            l.flags |= 4
        }

        function Ac(l, t, a, e, u) {
            if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
                if (l.flags |= 16777216, (u & 335544128) === u)
                    if (l.stateNode.complete) l.flags |= 8192;
                    else if (Oo()) l.flags |= 8192;
                else throw ja = Ku, Xi
            } else l.flags &= -16777217
        }

        function lo(l, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
            else if (l.flags |= 16777216, !r1(t))
                if (Oo()) l.flags |= 8192;
                else throw ja = Ku, Xi
        }

        function dn(l, t) {
            t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Hf() : 536870912, l.lanes |= t, ge |= t)
        }

        function eu(l, t) {
            if (!I) switch (l.tailMode) {
                case "hidden":
                    t = l.tail;
                    for (var a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
                    a === null ? l.tail = null : a.sibling = null;
                    break;
                case "collapsed":
                    a = l.tail;
                    for (var e = null; a !== null;) a.alternate !== null && (e = a), a = a.sibling;
                    e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null
            }
        }

        function bl(l) {
            var t = l.alternate !== null && l.alternate.child === l.child,
                a = 0,
                e = 0;
            if (t)
                for (var u = l.child; u !== null;) a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
            else
                for (u = l.child; u !== null;) a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
            return l.subtreeFlags |= e, l.childLanes = a, t
        }

        function E2(l, t, a) {
            var e = t.pendingProps;
            switch (Ni(t), t.tag) {
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return bl(t), null;
                case 1:
                    return bl(t), null;
                case 3:
                    return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Gt(Nl), xl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (ue(t) ? Lt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ri())), bl(t), null;
                case 26:
                    var u = t.type,
                        n = t.memoizedState;
                    return l === null ? (Lt(t), n !== null ? (bl(t), lo(t, n)) : (bl(t), Ac(t, u, null, e, a))) : n ? n !== l.memoizedState ? (Lt(t), bl(t), lo(t, n)) : (bl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && Lt(t), bl(t), Ac(t, u, l, e, a)), null;
                case 27:
                    if (zu(t), a = L.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== e && Lt(t);
                    else {
                        if (!e) {
                            if (t.stateNode === null) throw Error(y(166));
                            return bl(t), null
                        }
                        l = x.current, ue(t) ? H0(t) : (l = f1(u, e, a), t.stateNode = l, Lt(t))
                    }
                    return bl(t), null;
                case 5:
                    if (zu(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== e && Lt(t);
                    else {
                        if (!e) {
                            if (t.stateNode === null) throw Error(y(166));
                            return bl(t), null
                        }
                        if (n = x.current, ue(t)) H0(t);
                        else {
                            var i = Mn(L.current);
                            switch (n) {
                                case 1:
                                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                                    break;
                                case 2:
                                    n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                    break;
                                default:
                                    switch (u) {
                                        case "svg":
                                            n = i.createElementNS("http://www.w3.org/2000/svg", u);
                                            break;
                                        case "math":
                                            n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                            break;
                                        case "script":
                                            n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                                            break;
                                        case "select":
                                            n = typeof e.is == "string" ? i.createElement("select", {
                                                is: e.is
                                            }) : i.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                                            break;
                                        default:
                                            n = typeof e.is == "string" ? i.createElement(u, {
                                                is: e.is
                                            }) : i.createElement(u)
                                    }
                            }
                            n[Xl] = t, n[Fl] = e;
                            l: for (i = t.child; i !== null;) {
                                if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
                                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                                    i.child.return = i, i = i.child;
                                    continue
                                }
                                if (i === t) break l;
                                for (; i.sibling === null;) {
                                    if (i.return === null || i.return === t) break l;
                                    i = i.return
                                }
                                i.sibling.return = i.return, i = i.sibling
                            }
                            t.stateNode = n;
                            l: switch (Vl(n, u, e), u) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    e = !!e.autoFocus;
                                    break l;
                                case "img":
                                    e = !0;
                                    break l;
                                default:
                                    e = !1
                            }
                            e && Lt(t)
                        }
                    }
                    return bl(t), Ac(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
                case 6:
                    if (l && t.stateNode != null) l.memoizedProps !== e && Lt(t);
                    else {
                        if (typeof e != "string" && t.stateNode === null) throw Error(y(166));
                        if (l = L.current, ue(t)) {
                            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Zl, u !== null) switch (u.tag) {
                                case 27:
                                case 5:
                                    e = u.memoizedProps
                            }
                            l[Xl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || Fo(l.nodeValue, a)), l || aa(t, !0)
                        } else l = Mn(l).createTextNode(e), l[Xl] = t, t.stateNode = l
                    }
                    return bl(t), null;
                case 31:
                    if (a = t.memoizedState, l === null || l.memoizedState !== null) {
                        if (e = ue(t), a !== null) {
                            if (l === null) {
                                if (!e) throw Error(y(318));
                                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(y(557));
                                l[Xl] = t
                            } else Ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            bl(t), l = !1
                        } else a = Ri(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
                        if (!l) return t.flags & 256 ? (ot(t), t) : (ot(t), null);
                        if ((t.flags & 128) !== 0) throw Error(y(558))
                    }
                    return bl(t), null;
                case 13:
                    if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                        if (u = ue(t), e !== null && e.dehydrated !== null) {
                            if (l === null) {
                                if (!u) throw Error(y(318));
                                if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(y(317));
                                u[Xl] = t
                            } else Ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            bl(t), u = !1
                        } else u = Ri(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
                        if (!u) return t.flags & 256 ? (ot(t), t) : (ot(t), null)
                    }
                    return ot(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), dn(t, t.updateQueue), bl(t), null);
                case 4:
                    return xl(), l === null && Jc(t.stateNode.containerInfo), bl(t), null;
                case 10:
                    return Gt(t.type), bl(t), null;
                case 19:
                    if (E(Dl), e = t.memoizedState, e === null) return bl(t), null;
                    if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
                        if (u) eu(e, !1);
                        else {
                            if (_l !== 0 || l !== null && (l.flags & 128) !== 0)
                                for (l = t.child; l !== null;) {
                                    if (n = Fu(l), n !== null) {
                                        for (t.flags |= 128, eu(e, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null;) x0(a, l), a = a.sibling;
                                        return _(Dl, Dl.current & 1 | 2), I && Yt(t, e.treeForkCount), t.child
                                    }
                                    l = l.sibling
                                }
                            e.tail !== null && ut() > rn && (t.flags |= 128, u = !0, eu(e, !1), t.lanes = 4194304)
                        }
                    else {
                        if (!u)
                            if (l = Fu(n), l !== null) {
                                if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), eu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !I) return bl(t), null
                            } else 2 * ut() - e.renderingStartTime > rn && a !== 536870912 && (t.flags |= 128, u = !0, eu(e, !1), t.lanes = 4194304);
                        e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n)
                    }
                    return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = ut(), l.sibling = null, a = Dl.current, _(Dl, u ? a & 1 | 2 : a & 1), I && Yt(t, e.treeForkCount), l) : (bl(t), null);
                case 22:
                case 23:
                    return ot(t), Ki(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (bl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : bl(t), a = t.updateQueue, a !== null && dn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && E(Ra), null;
                case 24:
                    return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Gt(Nl), bl(t), null;
                case 25:
                    return null;
                case 30:
                    return null
            }
            throw Error(y(156, t.tag))
        }

        function A2(l, t) {
            switch (Ni(t), t.tag) {
                case 1:
                    return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
                case 3:
                    return Gt(Nl), xl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return zu(t), null;
                case 31:
                    if (t.memoizedState !== null) {
                        if (ot(t), t.alternate === null) throw Error(y(340));
                        Ca()
                    }
                    return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
                case 13:
                    if (ot(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                        if (t.alternate === null) throw Error(y(340));
                        Ca()
                    }
                    return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
                case 19:
                    return E(Dl), null;
                case 4:
                    return xl(), null;
                case 10:
                    return Gt(t.type), null;
                case 22:
                case 23:
                    return ot(t), Ki(), l !== null && E(Ra), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
                case 24:
                    return Gt(Nl), null;
                case 25:
                    return null;
                default:
                    return null
            }
        }

        function to(l, t) {
            switch (Ni(t), t.tag) {
                case 3:
                    Gt(Nl), xl();
                    break;
                case 26:
                case 27:
                case 5:
                    zu(t);
                    break;
                case 4:
                    xl();
                    break;
                case 31:
                    t.memoizedState !== null && ot(t);
                    break;
                case 13:
                    ot(t);
                    break;
                case 19:
                    E(Dl);
                    break;
                case 10:
                    Gt(t.type);
                    break;
                case 22:
                case 23:
                    ot(t), Ki(), l !== null && E(Ra);
                    break;
                case 24:
                    Gt(Nl)
            }
        }

        function uu(l, t) {
            try {
                var a = t.updateQueue,
                    e = a !== null ? a.lastEffect : null;
                if (e !== null) {
                    var u = e.next;
                    a = u;
                    do {
                        if ((a.tag & l) === l) {
                            e = void 0;
                            var n = a.create,
                                i = a.inst;
                            e = n(), i.destroy = e
                        }
                        a = a.next
                    } while (a !== u)
                }
            } catch (c) {
                fl(t, t.return, c)
            }
        }

        function sa(l, t, a) {
            try {
                var e = t.updateQueue,
                    u = e !== null ? e.lastEffect : null;
                if (u !== null) {
                    var n = u.next;
                    e = n;
                    do {
                        if ((e.tag & l) === l) {
                            var i = e.inst,
                                c = i.destroy;
                            if (c !== void 0) {
                                i.destroy = void 0, u = t;
                                var f = a,
                                    m = c;
                                try {
                                    m()
                                } catch (p) {
                                    fl(u, f, p)
                                }
                            }
                        }
                        e = e.next
                    } while (e !== n)
                }
            } catch (p) {
                fl(t, t.return, p)
            }
        }

        function ao(l) {
            var t = l.updateQueue;
            if (t !== null) {
                var a = l.stateNode;
                try {
                    J0(t, a)
                } catch (e) {
                    fl(l, l.return, e)
                }
            }
        }

        function eo(l, t, a) {
            a.props = Ga(l.type, l.memoizedProps), a.state = l.memoizedState;
            try {
                a.componentWillUnmount()
            } catch (e) {
                fl(l, t, e)
            }
        }

        function nu(l, t) {
            try {
                var a = l.ref;
                if (a !== null) {
                    switch (l.tag) {
                        case 26:
                        case 27:
                        case 5:
                            var e = l.stateNode;
                            break;
                        case 30:
                            e = l.stateNode;
                            break;
                        default:
                            e = l.stateNode
                    }
                    typeof a == "function" ? l.refCleanup = a(e) : a.current = e
                }
            } catch (u) {
                fl(l, t, u)
            }
        }

        function Ut(l, t) {
            var a = l.ref,
                e = l.refCleanup;
            if (a !== null)
                if (typeof e == "function") try {
                    e()
                } catch (u) {
                    fl(l, t, u)
                } finally {
                    l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
                } else if (typeof a == "function") try {
                    a(null)
                } catch (u) {
                    fl(l, t, u)
                } else a.current = null
        }

        function uo(l) {
            var t = l.type,
                a = l.memoizedProps,
                e = l.stateNode;
            try {
                l: switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a.autoFocus && e.focus();
                        break l;
                    case "img":
                        a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet)
                }
            }
            catch (u) {
                fl(l, l.return, u)
            }
        }

        function _c(l, t, a) {
            try {
                var e = l.stateNode;
                J2(e, l.type, a, t), e[Fl] = t
            } catch (u) {
                fl(l, l.return, u)
            }
        }

        function no(l) {
            return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ra(l.type) || l.tag === 4
        }

        function Mc(l) {
            l: for (;;) {
                for (; l.sibling === null;) {
                    if (l.return === null || no(l.return)) return null;
                    l = l.return
                }
                for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                    if (l.tag === 27 && ra(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                    l.child.return = l, l = l.child
                }
                if (!(l.flags & 2)) return l.stateNode
            }
        }

        function Oc(l, t, a) {
            var e = l.tag;
            if (e === 5 || e === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Rt));
            else if (e !== 4 && (e === 27 && ra(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null))
                for (Oc(l, t, a), l = l.sibling; l !== null;) Oc(l, t, a), l = l.sibling
        }

        function hn(l, t, a) {
            var e = l.tag;
            if (e === 5 || e === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
            else if (e !== 4 && (e === 27 && ra(l.type) && (a = l.stateNode), l = l.child, l !== null))
                for (hn(l, t, a), l = l.sibling; l !== null;) hn(l, t, a), l = l.sibling
        }

        function io(l) {
            var t = l.stateNode,
                a = l.memoizedProps;
            try {
                for (var e = l.type, u = t.attributes; u.length;) t.removeAttributeNode(u[0]);
                Vl(t, e, a), t[Xl] = l, t[Fl] = a
            } catch (n) {
                fl(l, l.return, n)
            }
        }
        var wt = !1,
            ql = !1,
            xc = !1,
            co = typeof WeakSet == "function" ? WeakSet : Set,
            Gl = null;

        function _2(l, t) {
            if (l = l.containerInfo, kc = Hn, l = S0(l), zi(l)) {
                if ("selectionStart" in l) var a = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
                else l: {
                    a = (a = l.ownerDocument) && a.defaultView || window;
                    var e = a.getSelection && a.getSelection();
                    if (e && e.rangeCount !== 0) {
                        a = e.anchorNode;
                        var u = e.anchorOffset,
                            n = e.focusNode;
                        e = e.focusOffset;
                        try {
                            a.nodeType, n.nodeType
                        } catch {
                            a = null;
                            break l
                        }
                        var i = 0,
                            c = -1,
                            f = -1,
                            m = 0,
                            p = 0,
                            T = l,
                            v = null;
                        t: for (;;) {
                            for (var r; T !== a || u !== 0 && T.nodeType !== 3 || (c = i + u), T !== n || e !== 0 && T.nodeType !== 3 || (f = i + e), T.nodeType === 3 && (i += T.nodeValue.length), (r = T.firstChild) !== null;) v = T, T = r;
                            for (;;) {
                                if (T === l) break t;
                                if (v === a && ++m === u && (c = i), v === n && ++p === e && (f = i), (r = T.nextSibling) !== null) break;
                                T = v, v = T.parentNode
                            }
                            T = r
                        }
                        a = c === -1 || f === -1 ? null : {
                            start: c,
                            end: f
                        }
                    } else a = null
                }
                a = a || {
                    start: 0,
                    end: 0
                }
            } else a = null;
            for ($c = {
                    focusedElem: l,
                    selectionRange: a
                }, Hn = !1, Gl = t; Gl !== null;)
                if (t = Gl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Gl = l;
                else
                    for (; Gl !== null;) {
                        switch (t = Gl, n = t.alternate, l = t.flags, t.tag) {
                            case 0:
                                if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                                    for (a = 0; a < l.length; a++) u = l[a], u.ref.impl = u.nextImpl;
                                break;
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if ((l & 1024) !== 0 && n !== null) {
                                    l = void 0, a = t, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
                                    try {
                                        var O = Ga(a.type, u);
                                        l = e.getSnapshotBeforeUpdate(O, n), e.__reactInternalSnapshotBeforeUpdate = l
                                    } catch (N) {
                                        fl(a, a.return, N)
                                    }
                                }
                                break;
                            case 3:
                                if ((l & 1024) !== 0) {
                                    if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) Pc(l);
                                    else if (a === 1) switch (l.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            Pc(l);
                                            break;
                                        default:
                                            l.textContent = ""
                                    }
                                }
                                break;
                            case 5:
                            case 26:
                            case 27:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                if ((l & 1024) !== 0) throw Error(y(163))
                        }
                        if (l = t.sibling, l !== null) {
                            l.return = t.return, Gl = l;
                            break
                        }
                        Gl = t.return
                    }
        }

        function fo(l, t, a) {
            var e = a.flags;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Jt(l, a), e & 4 && uu(5, a);
                    break;
                case 1:
                    if (Jt(l, a), e & 4)
                        if (l = a.stateNode, t === null) try {
                            l.componentDidMount()
                        } catch (i) {
                            fl(a, a.return, i)
                        } else {
                            var u = Ga(a.type, t.memoizedProps);
                            t = t.memoizedState;
                            try {
                                l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                            } catch (i) {
                                fl(a, a.return, i)
                            }
                        }
                    e & 64 && ao(a), e & 512 && nu(a, a.return);
                    break;
                case 3:
                    if (Jt(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
                        if (t = null, a.child !== null) switch (a.child.tag) {
                            case 27:
                            case 5:
                                t = a.child.stateNode;
                                break;
                            case 1:
                                t = a.child.stateNode
                        }
                        try {
                            J0(l, t)
                        } catch (i) {
                            fl(a, a.return, i)
                        }
                    }
                    break;
                case 27:
                    t === null && e & 4 && io(a);
                case 26:
                case 5:
                    Jt(l, a), t === null && e & 4 && uo(a), e & 512 && nu(a, a.return);
                    break;
                case 12:
                    Jt(l, a);
                    break;
                case 31:
                    Jt(l, a), e & 4 && ho(l, a);
                    break;
                case 13:
                    Jt(l, a), e & 4 && mo(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = R2.bind(null, a), lh(l, a))));
                    break;
                case 22:
                    if (e = a.memoizedState !== null || wt, !e) {
                        t = t !== null && t.memoizedState !== null || ql, u = wt;
                        var n = ql;
                        wt = e, (ql = t) && !n ? Kt(l, a, (a.subtreeFlags & 8772) !== 0) : Jt(l, a), wt = u, ql = n
                    }
                    break;
                case 30:
                    break;
                default:
                    Jt(l, a)
            }
        }

        function so(l) {
            var t = l.alternate;
            t !== null && (l.alternate = null, so(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ui(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
        }
        var Tl = null,
            Pl = !1;

        function Vt(l, t, a) {
            for (a = a.child; a !== null;) oo(l, t, a), a = a.sibling
        }

        function oo(l, t, a) {
            if (nt && typeof nt.onCommitFiberUnmount == "function") try {
                nt.onCommitFiberUnmount(De, a)
            } catch {}
            switch (a.tag) {
                case 26:
                    ql || Ut(a, t), Vt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                    break;
                case 27:
                    ql || Ut(a, t);
                    var e = Tl,
                        u = Pl;
                    ra(a.type) && (Tl = a.stateNode, Pl = !1), Vt(l, t, a), yu(a.stateNode), Tl = e, Pl = u;
                    break;
                case 5:
                    ql || Ut(a, t);
                case 6:
                    if (e = Tl, u = Pl, Tl = null, Vt(l, t, a), Tl = e, Pl = u, Tl !== null)
                        if (Pl) try {
                            (Tl.nodeType === 9 ? Tl.body : Tl.nodeName === "HTML" ? Tl.ownerDocument.body : Tl).removeChild(a.stateNode)
                        } catch (n) {
                            fl(a, t, n)
                        } else try {
                            Tl.removeChild(a.stateNode)
                        } catch (n) {
                            fl(a, t, n)
                        }
                    break;
                case 18:
                    Tl !== null && (Pl ? (l = Tl, e1(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), _e(l)) : e1(Tl, a.stateNode));
                    break;
                case 4:
                    e = Tl, u = Pl, Tl = a.stateNode.containerInfo, Pl = !0, Vt(l, t, a), Tl = e, Pl = u;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    sa(2, a, t), ql || sa(4, a, t), Vt(l, t, a);
                    break;
                case 1:
                    ql || (Ut(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && eo(a, t, e)), Vt(l, t, a);
                    break;
                case 21:
                    Vt(l, t, a);
                    break;
                case 22:
                    ql = (e = ql) || a.memoizedState !== null, Vt(l, t, a), ql = e;
                    break;
                default:
                    Vt(l, t, a)
            }
        }

        function ho(l, t) {
            if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
                l = l.dehydrated;
                try {
                    _e(l)
                } catch (a) {
                    fl(t, t.return, a)
                }
            }
        }

        function mo(l, t) {
            if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
                _e(l)
            } catch (a) {
                fl(t, t.return, a)
            }
        }

        function M2(l) {
            switch (l.tag) {
                case 31:
                case 13:
                case 19:
                    var t = l.stateNode;
                    return t === null && (t = l.stateNode = new co), t;
                case 22:
                    return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new co), t;
                default:
                    throw Error(y(435, l.tag))
            }
        }

        function mn(l, t) {
            var a = M2(l);
            t.forEach(function(e) {
                if (!a.has(e)) {
                    a.add(e);
                    var u = q2.bind(null, l, e);
                    e.then(u, u)
                }
            })
        }

        function lt(l, t) {
            var a = t.deletions;
            if (a !== null)
                for (var e = 0; e < a.length; e++) {
                    var u = a[e],
                        n = l,
                        i = t,
                        c = i;
                    l: for (; c !== null;) {
                        switch (c.tag) {
                            case 27:
                                if (ra(c.type)) {
                                    Tl = c.stateNode, Pl = !1;
                                    break l
                                }
                                break;
                            case 5:
                                Tl = c.stateNode, Pl = !1;
                                break l;
                            case 3:
                            case 4:
                                Tl = c.stateNode.containerInfo, Pl = !0;
                                break l
                        }
                        c = c.return
                    }
                    if (Tl === null) throw Error(y(160));
                    oo(n, i, u), Tl = null, Pl = !1, n = u.alternate, n !== null && (n.return = null), u.return = null
                }
            if (t.subtreeFlags & 13886)
                for (t = t.child; t !== null;) yo(t, l), t = t.sibling
        }
        var Mt = null;

        function yo(l, t) {
            var a = l.alternate,
                e = l.flags;
            switch (l.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    lt(t, l), tt(l), e & 4 && (sa(3, l, l.return), uu(3, l), sa(5, l, l.return));
                    break;
                case 1:
                    lt(t, l), tt(l), e & 512 && (ql || a === null || Ut(a, a.return)), e & 64 && wt && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
                    break;
                case 26:
                    var u = Mt;
                    if (lt(t, l), tt(l), e & 512 && (ql || a === null || Ut(a, a.return)), e & 4) {
                        var n = a !== null ? a.memoizedState : null;
                        if (e = l.memoizedState, a === null)
                            if (e === null)
                                if (l.stateNode === null) {
                                    l: {
                                        e = l.type,
                                        a = l.memoizedProps,
                                        u = u.ownerDocument || u;t: switch (e) {
                                            case "title":
                                                n = u.getElementsByTagName("title")[0], (!n || n[Ne] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(n, u.querySelector("head > title"))), Vl(n, e, a), n[Xl] = l, Bl(n), e = n;
                                                break l;
                                            case "link":
                                                var i = y1("link", "href", u).get(e + (a.href || ""));
                                                if (i) {
                                                    for (var c = 0; c < i.length; c++)
                                                        if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                            i.splice(c, 1);
                                                            break t
                                                        }
                                                }
                                                n = u.createElement(e), Vl(n, e, a), u.head.appendChild(n);
                                                break;
                                            case "meta":
                                                if (i = y1("meta", "content", u).get(e + (a.content || ""))) {
                                                    for (c = 0; c < i.length; c++)
                                                        if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                            i.splice(c, 1);
                                                            break t
                                                        }
                                                }
                                                n = u.createElement(e), Vl(n, e, a), u.head.appendChild(n);
                                                break;
                                            default:
                                                throw Error(y(468, e))
                                        }
                                        n[Xl] = l,
                                        Bl(n),
                                        e = n
                                    }
                                    l.stateNode = e
                                }
                        else v1(u, l.type, l.stateNode);
                        else l.stateNode = m1(u, e, l.memoizedProps);
                        else n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? v1(u, l.type, l.stateNode) : m1(u, e, l.memoizedProps)) : e === null && l.stateNode !== null && _c(l, l.memoizedProps, a.memoizedProps)
                    }
                    break;
                case 27:
                    lt(t, l), tt(l), e & 512 && (ql || a === null || Ut(a, a.return)), a !== null && e & 4 && _c(l, l.memoizedProps, a.memoizedProps);
                    break;
                case 5:
                    if (lt(t, l), tt(l), e & 512 && (ql || a === null || Ut(a, a.return)), l.flags & 32) {
                        u = l.stateNode;
                        try {
                            Wa(u, "")
                        } catch (O) {
                            fl(l, l.return, O)
                        }
                    }
                    e & 4 && l.stateNode != null && (u = l.memoizedProps, _c(l, u, a !== null ? a.memoizedProps : u)), e & 1024 && (xc = !0);
                    break;
                case 6:
                    if (lt(t, l), tt(l), e & 4) {
                        if (l.stateNode === null) throw Error(y(162));
                        e = l.memoizedProps, a = l.stateNode;
                        try {
                            a.nodeValue = e
                        } catch (O) {
                            fl(l, l.return, O)
                        }
                    }
                    break;
                case 3:
                    if (Dn = null, u = Mt, Mt = On(t.containerInfo), lt(t, l), Mt = u, tt(l), e & 4 && a !== null && a.memoizedState.isDehydrated) try {
                        _e(t.containerInfo)
                    } catch (O) {
                        fl(l, l.return, O)
                    }
                    xc && (xc = !1, vo(l));
                    break;
                case 4:
                    e = Mt, Mt = On(l.stateNode.containerInfo), lt(t, l), tt(l), Mt = e;
                    break;
                case 12:
                    lt(t, l), tt(l);
                    break;
                case 31:
                    lt(t, l), tt(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, mn(l, e)));
                    break;
                case 13:
                    lt(t, l), tt(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (vn = ut()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, mn(l, e)));
                    break;
                case 22:
                    u = l.memoizedState !== null;
                    var f = a !== null && a.memoizedState !== null,
                        m = wt,
                        p = ql;
                    if (wt = m || u, ql = p || f, lt(t, l), ql = p, wt = m, tt(l), e & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || f || wt || ql || Qa(l)), a = null, t = l;;) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (a === null) {
                                f = a = t;
                                try {
                                    if (n = f.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                    else {
                                        c = f.stateNode;
                                        var T = f.memoizedProps.style,
                                            v = T != null && T.hasOwnProperty("display") ? T.display : null;
                                        c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim()
                                    }
                                } catch (O) {
                                    fl(f, f.return, O)
                                }
                            }
                        } else if (t.tag === 6) {
                            if (a === null) {
                                f = t;
                                try {
                                    f.stateNode.nodeValue = u ? "" : f.memoizedProps
                                } catch (O) {
                                    fl(f, f.return, O)
                                }
                            }
                        } else if (t.tag === 18) {
                            if (a === null) {
                                f = t;
                                try {
                                    var r = f.stateNode;
                                    u ? u1(r, !0) : u1(f.stateNode, !1)
                                } catch (O) {
                                    fl(f, f.return, O)
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === l) break l;
                        for (; t.sibling === null;) {
                            if (t.return === null || t.return === l) break l;
                            a === t && (a = null), t = t.return
                        }
                        a === t && (a = null), t.sibling.return = t.return, t = t.sibling
                    }
                    e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, mn(l, a))));
                    break;
                case 19:
                    lt(t, l), tt(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, mn(l, e)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    lt(t, l), tt(l)
            }
        }

        function tt(l) {
            var t = l.flags;
            if (t & 2) {
                try {
                    for (var a, e = l.return; e !== null;) {
                        if (no(e)) {
                            a = e;
                            break
                        }
                        e = e.return
                    }
                    if (a == null) throw Error(y(160));
                    switch (a.tag) {
                        case 27:
                            var u = a.stateNode,
                                n = Mc(l);
                            hn(l, n, u);
                            break;
                        case 5:
                            var i = a.stateNode;
                            a.flags & 32 && (Wa(i, ""), a.flags &= -33);
                            var c = Mc(l);
                            hn(l, c, i);
                            break;
                        case 3:
                        case 4:
                            var f = a.stateNode.containerInfo,
                                m = Mc(l);
                            Oc(l, m, f);
                            break;
                        default:
                            throw Error(y(161))
                    }
                } catch (p) {
                    fl(l, l.return, p)
                }
                l.flags &= -3
            }
            t & 4096 && (l.flags &= -4097)
        }

        function vo(l) {
            if (l.subtreeFlags & 1024)
                for (l = l.child; l !== null;) {
                    var t = l;
                    vo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
                }
        }

        function Jt(l, t) {
            if (t.subtreeFlags & 8772)
                for (t = t.child; t !== null;) fo(l, t.alternate, t), t = t.sibling
        }

        function Qa(l) {
            for (l = l.child; l !== null;) {
                var t = l;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        sa(4, t, t.return), Qa(t);
                        break;
                    case 1:
                        Ut(t, t.return);
                        var a = t.stateNode;
                        typeof a.componentWillUnmount == "function" && eo(t, t.return, a), Qa(t);
                        break;
                    case 27:
                        yu(t.stateNode);
                    case 26:
                    case 5:
                        Ut(t, t.return), Qa(t);
                        break;
                    case 22:
                        t.memoizedState === null && Qa(t);
                        break;
                    case 30:
                        Qa(t);
                        break;
                    default:
                        Qa(t)
                }
                l = l.sibling
            }
        }

        function Kt(l, t, a) {
            for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
                var e = t.alternate,
                    u = l,
                    n = t,
                    i = n.flags;
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Kt(u, n, a), uu(4, n);
                        break;
                    case 1:
                        if (Kt(u, n, a), e = n, u = e.stateNode, typeof u.componentDidMount == "function") try {
                            u.componentDidMount()
                        } catch (m) {
                            fl(e, e.return, m)
                        }
                        if (e = n, u = e.updateQueue, u !== null) {
                            var c = e.stateNode;
                            try {
                                var f = u.shared.hiddenCallbacks;
                                if (f !== null)
                                    for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) V0(f[u], c)
                            } catch (m) {
                                fl(e, e.return, m)
                            }
                        }
                        a && i & 64 && ao(n), nu(n, n.return);
                        break;
                    case 27:
                        io(n);
                    case 26:
                    case 5:
                        Kt(u, n, a), a && e === null && i & 4 && uo(n), nu(n, n.return);
                        break;
                    case 12:
                        Kt(u, n, a);
                        break;
                    case 31:
                        Kt(u, n, a), a && i & 4 && ho(u, n);
                        break;
                    case 13:
                        Kt(u, n, a), a && i & 4 && mo(u, n);
                        break;
                    case 22:
                        n.memoizedState === null && Kt(u, n, a), nu(n, n.return);
                        break;
                    case 30:
                        break;
                    default:
                        Kt(u, n, a)
                }
                t = t.sibling
            }
        }

        function Dc(l, t) {
            var a = null;
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Ve(a))
        }

        function Uc(l, t) {
            l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ve(l))
        }

        function Ot(l, t, a, e) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;) ro(l, t, a, e), t = t.sibling
        }

        function ro(l, t, a, e) {
            var u = t.flags;
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    Ot(l, t, a, e), u & 2048 && uu(9, t);
                    break;
                case 1:
                    Ot(l, t, a, e);
                    break;
                case 3:
                    Ot(l, t, a, e), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ve(l)));
                    break;
                case 12:
                    if (u & 2048) {
                        Ot(l, t, a, e), l = t.stateNode;
                        try {
                            var n = t.memoizedProps,
                                i = n.id,
                                c = n.onPostCommit;
                            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                        } catch (f) {
                            fl(t, t.return, f)
                        }
                    } else Ot(l, t, a, e);
                    break;
                case 31:
                    Ot(l, t, a, e);
                    break;
                case 13:
                    Ot(l, t, a, e);
                    break;
                case 23:
                    break;
                case 22:
                    n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ot(l, t, a, e) : iu(l, t) : n._visibility & 2 ? Ot(l, t, a, e) : (n._visibility |= 2, ye(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && Dc(i, t);
                    break;
                case 24:
                    Ot(l, t, a, e), u & 2048 && Uc(t.alternate, t);
                    break;
                default:
                    Ot(l, t, a, e)
            }
        }

        function ye(l, t, a, e, u) {
            for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;) {
                var n = l,
                    i = t,
                    c = a,
                    f = e,
                    m = i.flags;
                switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye(n, i, c, f, u), uu(8, i);
                        break;
                    case 23:
                        break;
                    case 22:
                        var p = i.stateNode;
                        i.memoizedState !== null ? p._visibility & 2 ? ye(n, i, c, f, u) : iu(n, i) : (p._visibility |= 2, ye(n, i, c, f, u)), u && m & 2048 && Dc(i.alternate, i);
                        break;
                    case 24:
                        ye(n, i, c, f, u), u && m & 2048 && Uc(i.alternate, i);
                        break;
                    default:
                        ye(n, i, c, f, u)
                }
                t = t.sibling
            }
        }

        function iu(l, t) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null;) {
                    var a = l,
                        e = t,
                        u = e.flags;
                    switch (e.tag) {
                        case 22:
                            iu(a, e), u & 2048 && Dc(e.alternate, e);
                            break;
                        case 24:
                            iu(a, e), u & 2048 && Uc(e.alternate, e);
                            break;
                        default:
                            iu(a, e)
                    }
                    t = t.sibling
                }
        }
        var cu = 8192;

        function ve(l, t, a) {
            if (l.subtreeFlags & cu)
                for (l = l.child; l !== null;) go(l, t, a), l = l.sibling
        }

        function go(l, t, a) {
            switch (l.tag) {
                case 26:
                    ve(l, t, a), l.flags & cu && l.memoizedState !== null && hh(a, Mt, l.memoizedState, l.memoizedProps);
                    break;
                case 5:
                    ve(l, t, a);
                    break;
                case 3:
                case 4:
                    var e = Mt;
                    Mt = On(l.stateNode.containerInfo), ve(l, t, a), Mt = e;
                    break;
                case 22:
                    l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = cu, cu = 16777216, ve(l, t, a), cu = e) : ve(l, t, a));
                    break;
                default:
                    ve(l, t, a)
            }
        }

        function po(l) {
            var t = l.alternate;
            if (t !== null && (l = t.child, l !== null)) {
                t.child = null;
                do t = l.sibling, l.sibling = null, l = t; while (l !== null)
            }
        }

        function fu(l) {
            var t = l.deletions;
            if ((l.flags & 16) !== 0) {
                if (t !== null)
                    for (var a = 0; a < t.length; a++) {
                        var e = t[a];
                        Gl = e, bo(e, l)
                    }
                po(l)
            }
            if (l.subtreeFlags & 10256)
                for (l = l.child; l !== null;) So(l), l = l.sibling
        }

        function So(l) {
            switch (l.tag) {
                case 0:
                case 11:
                case 15:
                    fu(l), l.flags & 2048 && sa(9, l, l.return);
                    break;
                case 3:
                    fu(l);
                    break;
                case 12:
                    fu(l);
                    break;
                case 22:
                    var t = l.stateNode;
                    l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, yn(l)) : fu(l);
                    break;
                default:
                    fu(l)
            }
        }

        function yn(l) {
            var t = l.deletions;
            if ((l.flags & 16) !== 0) {
                if (t !== null)
                    for (var a = 0; a < t.length; a++) {
                        var e = t[a];
                        Gl = e, bo(e, l)
                    }
                po(l)
            }
            for (l = l.child; l !== null;) {
                switch (t = l, t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        sa(8, t, t.return), yn(t);
                        break;
                    case 22:
                        a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, yn(t));
                        break;
                    default:
                        yn(t)
                }
                l = l.sibling
            }
        }

        function bo(l, t) {
            for (; Gl !== null;) {
                var a = Gl;
                switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                        sa(8, a, t);
                        break;
                    case 23:
                    case 22:
                        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                            var e = a.memoizedState.cachePool.pool;
                            e != null && e.refCount++
                        }
                        break;
                    case 24:
                        Ve(a.memoizedState.cache)
                }
                if (e = a.child, e !== null) e.return = a, Gl = e;
                else l: for (a = l; Gl !== null;) {
                    e = Gl;
                    var u = e.sibling,
                        n = e.return;
                    if (so(e), e === a) {
                        Gl = null;
                        break l
                    }
                    if (u !== null) {
                        u.return = n, Gl = u;
                        break l
                    }
                    Gl = n
                }
            }
        }
        var O2 = {
                getCacheForType: function(l) {
                    var t = Ll(Nl),
                        a = t.data.get(l);
                    return a === void 0 && (a = l(), t.data.set(l, a)), a
                },
                cacheSignal: function() {
                    return Ll(Nl).controller.signal
                }
            },
            x2 = typeof WeakMap == "function" ? WeakMap : Map,
            ul = 0,
            gl = null,
            w = null,
            W = 0,
            cl = 0,
            dt = null,
            oa = !1,
            re = !1,
            Cc = !1,
            Wt = 0,
            _l = 0,
            da = 0,
            Xa = 0,
            Nc = 0,
            ht = 0,
            ge = 0,
            su = null,
            at = null,
            Hc = !1,
            vn = 0,
            zo = 0,
            rn = 1 / 0,
            gn = null,
            ha = null,
            Yl = 0,
            ma = null,
            pe = null,
            kt = 0,
            Rc = 0,
            qc = null,
            To = null,
            ou = 0,
            jc = null;

        function mt() {
            return (ul & 2) !== 0 && W !== 0 ? W & -W : S.T !== null ? Zc() : Yf()
        }

        function Eo() {
            if (ht === 0)
                if ((W & 536870912) === 0 || I) {
                    var l = Au;
                    Au <<= 1, (Au & 3932160) === 0 && (Au = 262144), ht = l
                } else ht = 536870912;
            return l = st.current, l !== null && (l.flags |= 32), ht
        }

        function et(l, t, a) {
            (l === gl && (cl === 2 || cl === 9) || l.cancelPendingCommit !== null) && (Se(l, 0), ya(l, W, ht, !1)), Ce(l, a), ((ul & 2) === 0 || l !== gl) && (l === gl && ((ul & 2) === 0 && (Xa |= a), _l === 4 && ya(l, W, ht, !1)), Ct(l))
        }

        function Ao(l, t, a) {
            if ((ul & 6) !== 0) throw Error(y(327));
            var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ue(l, t),
                u = e ? C2(l, t) : Bc(l, t, !0),
                n = e;
            do {
                if (u === 0) {
                    re && !e && ya(l, t, 0, !1);
                    break
                } else {
                    if (a = l.current.alternate, n && !D2(a)) {
                        u = Bc(l, t, !1), n = !1;
                        continue
                    }
                    if (u === 2) {
                        if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
                        else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                        if (i !== 0) {
                            t = i;
                            l: {
                                var c = l;u = su;
                                var f = c.current.memoizedState.isDehydrated;
                                if (f && (Se(c, i).flags |= 256), i = Bc(c, i, !1), i !== 2) {
                                    if (Cc && !f) {
                                        c.errorRecoveryDisabledLanes |= n, Xa |= n, u = 4;
                                        break l
                                    }
                                    n = at, at = u, n !== null && (at === null ? at = n : at.push.apply(at, n))
                                }
                                u = i
                            }
                            if (n = !1, u !== 2) continue
                        }
                    }
                    if (u === 1) {
                        Se(l, 0), ya(l, t, 0, !0);
                        break
                    }
                    l: {
                        switch (e = l, n = u, n) {
                            case 0:
                            case 1:
                                throw Error(y(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                ya(e, t, ht, !oa);
                                break l;
                            case 2:
                                at = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(y(329))
                        }
                        if ((t & 62914560) === t && (u = vn + 300 - ut(), 10 < u)) {
                            if (ya(e, t, ht, !oa), Mu(e, 0, !0) !== 0) break l;
                            kt = t, e.timeoutHandle = t1(_o.bind(null, e, a, at, gn, Hc, t, ht, Xa, ge, oa, n, "Throttled", -0, 0), u);
                            break l
                        }
                        _o(e, a, at, gn, Hc, t, ht, Xa, ge, oa, n, null, -0, 0)
                    }
                }
                break
            } while (!0);
            Ct(l)
        }

        function _o(l, t, a, e, u, n, i, c, f, m, p, T, v, r) {
            if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
                T = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: Rt
                }, go(t, n, T);
                var O = (n & 62914560) === n ? vn - ut() : (n & 4194048) === n ? zo - ut() : 0;
                if (O = mh(T, O), O !== null) {
                    kt = n, l.cancelPendingCommit = O(Ho.bind(null, l, t, n, a, e, u, i, c, f, p, T, null, v, r)), ya(l, n, i, !m);
                    return
                }
            }
            Ho(l, t, n, a, e, u, i, c, f)
        }

        function D2(l) {
            for (var t = l;;) {
                var a = t.tag;
                if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
                    for (var e = 0; e < a.length; e++) {
                        var u = a[e],
                            n = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!ct(n(), u)) return !1
                        } catch {
                            return !1
                        }
                    }
                if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
                else {
                    if (t === l) break;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l) return !0;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
            }
            return !0
        }

        function ya(l, t, a, e) {
            t &= ~Nc, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
            for (var u = t; 0 < u;) {
                var n = 31 - it(u),
                    i = 1 << n;
                e[n] = -1, u &= ~i
            }
            a !== 0 && Rf(l, a, t)
        }

        function pn() {
            return (ul & 6) === 0 ? (du(0), !1) : !0
        }

        function Yc() {
            if (w !== null) {
                if (cl === 0) var l = w.return;
                else l = w, Bt = Na = null, Pi(l), se = null, Ke = 0, l = w;
                for (; l !== null;) to(l.alternate, l), l = l.return;
                w = null
            }
        }

        function Se(l, t) {
            var a = l.timeoutHandle;
            a !== -1 && (l.timeoutHandle = -1, k2(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), kt = 0, Yc(), gl = l, w = a = jt(l.current, null), W = t, cl = 0, dt = null, oa = !1, re = Ue(l, t), Cc = !1, ge = ht = Nc = Xa = da = _l = 0, at = su = null, Hc = !1, (t & 8) !== 0 && (t |= t & 32);
            var e = l.entangledLanes;
            if (e !== 0)
                for (l = l.entanglements, e &= t; 0 < e;) {
                    var u = 31 - it(e),
                        n = 1 << u;
                    t |= l[u], e &= ~n
                }
            return Wt = t, Bu(), a
        }

        function Mo(l, t) {
            B = null, S.H = tu, t === fe || t === Ju ? (t = X0(), cl = 3) : t === Xi ? (t = X0(), cl = 4) : cl = t === vc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, dt = t, w === null && (_l = 1, cn(l, gt(t, l.current)))
        }

        function Oo() {
            var l = st.current;
            return l === null ? !0 : (W & 4194048) === W ? zt === null : (W & 62914560) === W || (W & 536870912) !== 0 ? l === zt : !1
        }

        function xo() {
            var l = S.H;
            return S.H = tu, l === null ? tu : l
        }

        function Do() {
            var l = S.A;
            return S.A = O2, l
        }

        function Sn() {
            _l = 4, oa || (W & 4194048) !== W && st.current !== null || (re = !0), (da & 134217727) === 0 && (Xa & 134217727) === 0 || gl === null || ya(gl, W, ht, !1)
        }

        function Bc(l, t, a) {
            var e = ul;
            ul |= 2;
            var u = xo(),
                n = Do();
            (gl !== l || W !== t) && (gn = null, Se(l, t)), t = !1;
            var i = _l;
            l: do try {
                    if (cl !== 0 && w !== null) {
                        var c = w,
                            f = dt;
                        switch (cl) {
                            case 8:
                                Yc(), i = 6;
                                break l;
                            case 3:
                            case 2:
                            case 9:
                            case 6:
                                st.current === null && (t = !0);
                                var m = cl;
                                if (cl = 0, dt = null, be(l, c, f, m), a && re) {
                                    i = 0;
                                    break l
                                }
                                break;
                            default:
                                m = cl, cl = 0, dt = null, be(l, c, f, m)
                        }
                    }
                    U2(), i = _l;
                    break
                } catch (p) {
                    Mo(l, p)
                }
                while (!0);
                return t && l.shellSuspendCounter++, Bt = Na = null, ul = e, S.H = u, S.A = n, w === null && (gl = null, W = 0, Bu()), i
        }

        function U2() {
            for (; w !== null;) Uo(w)
        }

        function C2(l, t) {
            var a = ul;
            ul |= 2;
            var e = xo(),
                u = Do();
            gl !== l || W !== t ? (gn = null, rn = ut() + 500, Se(l, t)) : re = Ue(l, t);
            l: do try {
                    if (cl !== 0 && w !== null) {
                        t = w;
                        var n = dt;
                        t: switch (cl) {
                            case 1:
                                cl = 0, dt = null, be(l, t, n, 1);
                                break;
                            case 2:
                            case 9:
                                if (G0(n)) {
                                    cl = 0, dt = null, Co(t);
                                    break
                                }
                                t = function() {
                                    cl !== 2 && cl !== 9 || gl !== l || (cl = 7), Ct(l)
                                }, n.then(t, t);
                                break l;
                            case 3:
                                cl = 7;
                                break l;
                            case 4:
                                cl = 5;
                                break l;
                            case 7:
                                G0(n) ? (cl = 0, dt = null, Co(t)) : (cl = 0, dt = null, be(l, t, n, 7));
                                break;
                            case 5:
                                var i = null;
                                switch (w.tag) {
                                    case 26:
                                        i = w.memoizedState;
                                    case 5:
                                    case 27:
                                        var c = w;
                                        if (i ? r1(i) : c.stateNode.complete) {
                                            cl = 0, dt = null;
                                            var f = c.sibling;
                                            if (f !== null) w = f;
                                            else {
                                                var m = c.return;
                                                m !== null ? (w = m, bn(m)) : w = null
                                            }
                                            break t
                                        }
                                }
                                cl = 0, dt = null, be(l, t, n, 5);
                                break;
                            case 6:
                                cl = 0, dt = null, be(l, t, n, 6);
                                break;
                            case 8:
                                Yc(), _l = 6;
                                break l;
                            default:
                                throw Error(y(462))
                        }
                    }
                    N2();
                    break
                } catch (p) {
                    Mo(l, p)
                }
                while (!0);
                return Bt = Na = null, S.H = e, S.A = u, ul = a, w !== null ? 0 : (gl = null, W = 0, Bu(), _l)
        }

        function N2() {
            for (; w !== null && !td();) Uo(w)
        }

        function Uo(l) {
            var t = Ps(l.alternate, l, Wt);
            l.memoizedProps = l.pendingProps, t === null ? bn(l) : w = t
        }

        function Co(l) {
            var t = l,
                a = t.alternate;
            switch (t.tag) {
                case 15:
                case 0:
                    t = Ks(a, t, t.pendingProps, t.type, void 0, W);
                    break;
                case 11:
                    t = Ks(a, t, t.pendingProps, t.type.render, t.ref, W);
                    break;
                case 5:
                    Pi(t);
                default:
                    to(a, t), t = w = x0(t, Wt), t = Ps(a, t, Wt)
            }
            l.memoizedProps = l.pendingProps, t === null ? bn(l) : w = t
        }

        function be(l, t, a, e) {
            Bt = Na = null, Pi(t), se = null, Ke = 0;
            var u = t.return;
            try {
                if (b2(l, u, t, a, W)) {
                    _l = 1, cn(l, gt(a, l.current)), w = null;
                    return
                }
            } catch (n) {
                if (u !== null) throw w = u, n;
                _l = 1, cn(l, gt(a, l.current)), w = null;
                return
            }
            t.flags & 32768 ? (I || e === 1 ? l = !0 : re || (W & 536870912) !== 0 ? l = !1 : (oa = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = st.current, e !== null && e.tag === 13 && (e.flags |= 16384))), No(t, l)) : bn(t)
        }

        function bn(l) {
            var t = l;
            do {
                if ((t.flags & 32768) !== 0) {
                    No(t, oa);
                    return
                }
                l = t.return;
                var a = E2(t.alternate, t, Wt);
                if (a !== null) {
                    w = a;
                    return
                }
                if (t = t.sibling, t !== null) {
                    w = t;
                    return
                }
                w = t = l
            } while (t !== null);
            _l === 0 && (_l = 5)
        }

        function No(l, t) {
            do {
                var a = A2(l.alternate, l);
                if (a !== null) {
                    a.flags &= 32767, w = a;
                    return
                }
                if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
                    w = l;
                    return
                }
                w = l = a
            } while (l !== null);
            _l = 6, w = null
        }

        function Ho(l, t, a, e, u, n, i, c, f) {
            l.cancelPendingCommit = null;
            do zn(); while (Yl !== 0);
            if ((ul & 6) !== 0) throw Error(y(327));
            if (t !== null) {
                if (t === l.current) throw Error(y(177));
                if (n = t.lanes | t.childLanes, n |= Mi, dd(l, a, n, i, c, f), l === gl && (w = gl = null, W = 0), pe = t, ma = l, kt = a, Rc = n, qc = u, To = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, j2(Tu, function() {
                        return Bo(), null
                    })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
                    e = S.T, S.T = null, u = A.p, A.p = 2, i = ul, ul |= 4;
                    try {
                        _2(l, t, a)
                    } finally {
                        ul = i, A.p = u, S.T = e
                    }
                }
                Yl = 1, Ro(), qo(), jo()
            }
        }

        function Ro() {
            if (Yl === 1) {
                Yl = 0;
                var l = ma,
                    t = pe,
                    a = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || a) {
                    a = S.T, S.T = null;
                    var e = A.p;
                    A.p = 2;
                    var u = ul;
                    ul |= 4;
                    try {
                        yo(t, l);
                        var n = $c,
                            i = S0(l.containerInfo),
                            c = n.focusedElem,
                            f = n.selectionRange;
                        if (i !== c && c && c.ownerDocument && p0(c.ownerDocument.documentElement, c)) {
                            if (f !== null && zi(c)) {
                                var m = f.start,
                                    p = f.end;
                                if (p === void 0 && (p = m), "selectionStart" in c) c.selectionStart = m, c.selectionEnd = Math.min(p, c.value.length);
                                else {
                                    var T = c.ownerDocument || document,
                                        v = T && T.defaultView || window;
                                    if (v.getSelection) {
                                        var r = v.getSelection(),
                                            O = c.textContent.length,
                                            N = Math.min(f.start, O),
                                            hl = f.end === void 0 ? N : Math.min(f.end, O);
                                        !r.extend && N > hl && (i = hl, hl = N, N = i);
                                        var d = g0(c, N),
                                            s = g0(c, hl);
                                        if (d && s && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== s.node || r.focusOffset !== s.offset)) {
                                            var h = T.createRange();
                                            h.setStart(d.node, d.offset), r.removeAllRanges(), N > hl ? (r.addRange(h), r.extend(s.node, s.offset)) : (h.setEnd(s.node, s.offset), r.addRange(h))
                                        }
                                    }
                                }
                            }
                            for (T = [], r = c; r = r.parentNode;) r.nodeType === 1 && T.push({
                                element: r,
                                left: r.scrollLeft,
                                top: r.scrollTop
                            });
                            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
                                var b = T[c];
                                b.element.scrollLeft = b.left, b.element.scrollTop = b.top
                            }
                        }
                        Hn = !!kc, $c = kc = null
                    } finally {
                        ul = u, A.p = e, S.T = a
                    }
                }
                l.current = t, Yl = 2
            }
        }

        function qo() {
            if (Yl === 2) {
                Yl = 0;
                var l = ma,
                    t = pe,
                    a = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || a) {
                    a = S.T, S.T = null;
                    var e = A.p;
                    A.p = 2;
                    var u = ul;
                    ul |= 4;
                    try {
                        fo(l, t.alternate, t)
                    } finally {
                        ul = u, A.p = e, S.T = a
                    }
                }
                Yl = 3
            }
        }

        function jo() {
            if (Yl === 4 || Yl === 3) {
                Yl = 0, ad();
                var l = ma,
                    t = pe,
                    a = kt,
                    e = To;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Yl = 5 : (Yl = 0, pe = ma = null, Yo(l, l.pendingLanes));
                var u = l.pendingLanes;
                if (u === 0 && (ha = null), ai(a), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
                    nt.onCommitFiberRoot(De, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
                if (e !== null) {
                    t = S.T, u = A.p, A.p = 2, S.T = null;
                    try {
                        for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
                            var c = e[i];
                            n(c.value, {
                                componentStack: c.stack
                            })
                        }
                    } finally {
                        S.T = t, A.p = u
                    }
                }(kt & 3) !== 0 && zn(), Ct(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === jc ? ou++ : (ou = 0, jc = l) : ou = 0, du(0)
            }
        }

        function Yo(l, t) {
            (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ve(t)))
        }

        function zn() {
            return Ro(), qo(), jo(), Bo()
        }

        function Bo() {
            if (Yl !== 5) return !1;
            var l = ma,
                t = Rc;
            Rc = 0;
            var a = ai(kt),
                e = S.T,
                u = A.p;
            try {
                A.p = 32 > a ? 32 : a, S.T = null, a = qc, qc = null;
                var n = ma,
                    i = kt;
                if (Yl = 0, pe = ma = null, kt = 0, (ul & 6) !== 0) throw Error(y(331));
                var c = ul;
                if (ul |= 4, So(n.current), ro(n, n.current, i, a), ul = c, du(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function") try {
                    nt.onPostCommitFiberRoot(De, n)
                } catch {}
                return !0
            } finally {
                A.p = u, S.T = e, Yo(l, t)
            }
        }

        function Go(l, t, a) {
            t = gt(a, t), t = yc(l.stateNode, t, 2), l = ia(l, t, 2), l !== null && (Ce(l, 2), Ct(l))
        }

        function fl(l, t, a) {
            if (l.tag === 3) Go(l, l, a);
            else
                for (; t !== null;) {
                    if (t.tag === 3) {
                        Go(t, l, a);
                        break
                    } else if (t.tag === 1) {
                        var e = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (ha === null || !ha.has(e))) {
                            l = gt(a, l), a = Gs(2), e = ia(t, a, 2), e !== null && (Qs(a, e, t, l), Ce(e, 2), Ct(e));
                            break
                        }
                    }
                    t = t.return
                }
        }

        function Gc(l, t, a) {
            var e = l.pingCache;
            if (e === null) {
                e = l.pingCache = new x2;
                var u = new Set;
                e.set(t, u)
            } else u = e.get(t), u === void 0 && (u = new Set, e.set(t, u));
            u.has(a) || (Cc = !0, u.add(a), l = H2.bind(null, l, t, a), t.then(l, l))
        }

        function H2(l, t, a) {
            var e = l.pingCache;
            e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, gl === l && (W & a) === a && (_l === 4 || _l === 3 && (W & 62914560) === W && 300 > ut() - vn ? (ul & 2) === 0 && Se(l, 0) : Nc |= a, ge === W && (ge = 0)), Ct(l)
        }

        function Qo(l, t) {
            t === 0 && (t = Hf()), l = Da(l, t), l !== null && (Ce(l, t), Ct(l))
        }

        function R2(l) {
            var t = l.memoizedState,
                a = 0;
            t !== null && (a = t.retryLane), Qo(l, a)
        }

        function q2(l, t) {
            var a = 0;
            switch (l.tag) {
                case 31:
                case 13:
                    var e = l.stateNode,
                        u = l.memoizedState;
                    u !== null && (a = u.retryLane);
                    break;
                case 19:
                    e = l.stateNode;
                    break;
                case 22:
                    e = l.stateNode._retryCache;
                    break;
                default:
                    throw Error(y(314))
            }
            e !== null && e.delete(t), Qo(l, a)
        }

        function j2(l, t) {
            return In(l, t)
        }
        var Tn = null,
            ze = null,
            Qc = !1,
            En = !1,
            Xc = !1,
            va = 0;

        function Ct(l) {
            l !== ze && l.next === null && (ze === null ? Tn = ze = l : ze = ze.next = l), En = !0, Qc || (Qc = !0, B2())
        }

        function du(l, t) {
            if (!Xc && En) {
                Xc = !0;
                do
                    for (var a = !1, e = Tn; e !== null;) {
                        if (l !== 0) {
                            var u = e.pendingLanes;
                            if (u === 0) var n = 0;
                            else {
                                var i = e.suspendedLanes,
                                    c = e.pingedLanes;
                                n = (1 << 31 - it(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                            }
                            n !== 0 && (a = !0, wo(e, n))
                        } else n = W, n = Mu(e, e === gl ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), (n & 3) === 0 || Ue(e, n) || (a = !0, wo(e, n));
                        e = e.next
                    }
                while (a);
                Xc = !1
            }
        }

        function Y2() {
            Xo()
        }

        function Xo() {
            En = Qc = !1;
            var l = 0;
            va !== 0 && W2() && (l = va);
            for (var t = ut(), a = null, e = Tn; e !== null;) {
                var u = e.next,
                    n = Zo(e, t);
                n === 0 ? (e.next = null, a === null ? Tn = u : a.next = u, u === null && (ze = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (En = !0)), e = u
            }
            Yl !== 0 && Yl !== 5 || du(l), va !== 0 && (va = 0)
        }

        function Zo(l, t) {
            for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n;) {
                var i = 31 - it(n),
                    c = 1 << i,
                    f = u[i];
                f === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = od(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c
            }
            if (t = gl, a = W, a = Mu(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), e = l.callbackNode, a === 0 || l === t && (cl === 2 || cl === 9) || l.cancelPendingCommit !== null) return e !== null && e !== null && Pn(e), l.callbackNode = null, l.callbackPriority = 0;
            if ((a & 3) === 0 || Ue(l, a)) {
                if (t = a & -a, t === l.callbackPriority) return t;
                switch (e !== null && Pn(e), ai(a)) {
                    case 2:
                    case 8:
                        a = Cf;
                        break;
                    case 32:
                        a = Tu;
                        break;
                    case 268435456:
                        a = Nf;
                        break;
                    default:
                        a = Tu
                }
                return e = Lo.bind(null, l), a = In(a, e), l.callbackPriority = t, l.callbackNode = a, t
            }
            return e !== null && e !== null && Pn(e), l.callbackPriority = 2, l.callbackNode = null, 2
        }

        function Lo(l, t) {
            if (Yl !== 0 && Yl !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
            var a = l.callbackNode;
            if (zn() && l.callbackNode !== a) return null;
            var e = W;
            return e = Mu(l, l === gl ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), e === 0 ? null : (Ao(l, e, t), Zo(l, ut()), l.callbackNode != null && l.callbackNode === a ? Lo.bind(null, l) : null)
        }

        function wo(l, t) {
            if (zn()) return null;
            Ao(l, t, !0)
        }

        function B2() {
            $2(function() {
                (ul & 6) !== 0 ? In(Uf, Y2) : Xo()
            })
        }

        function Zc() {
            if (va === 0) {
                var l = ie;
                l === 0 && (l = Eu, Eu <<= 1, (Eu & 261888) === 0 && (Eu = 256)), va = l
            }
            return va
        }

        function Vo(l) {
            return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Uu("" + l)
        }

        function Jo(l, t) {
            var a = t.ownerDocument.createElement("input");
            return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l
        }

        function G2(l, t, a, e, u) {
            if (t === "submit" && a && a.stateNode === u) {
                var n = Vo((u[Fl] || null).action),
                    i = e.submitter;
                i && (t = (t = i[Fl] || null) ? Vo(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
                var c = new Ru("action", "action", null, e, u);
                l.push({
                    event: c,
                    listeners: [{
                        instance: null,
                        listener: function() {
                            if (e.defaultPrevented) {
                                if (va !== 0) {
                                    var f = i ? Jo(u, i) : new FormData(u);
                                    fc(a, {
                                        pending: !0,
                                        data: f,
                                        method: u.method,
                                        action: n
                                    }, null, f)
                                }
                            } else typeof n == "function" && (c.preventDefault(), f = i ? Jo(u, i) : new FormData(u), fc(a, {
                                pending: !0,
                                data: f,
                                method: u.method,
                                action: n
                            }, n, f))
                        },
                        currentTarget: u
                    }]
                })
            }
        }
        for (var Lc = 0; Lc < _i.length; Lc++) {
            var wc = _i[Lc],
                Q2 = wc.toLowerCase(),
                X2 = wc[0].toUpperCase() + wc.slice(1);
            _t(Q2, "on" + X2)
        }
        _t(T0, "onAnimationEnd"), _t(E0, "onAnimationIteration"), _t(A0, "onAnimationStart"), _t("dblclick", "onDoubleClick"), _t("focusin", "onFocus"), _t("focusout", "onBlur"), _t(e2, "onTransitionRun"), _t(u2, "onTransitionStart"), _t(n2, "onTransitionCancel"), _t(_0, "onTransitionEnd"), Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]), _a("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _a("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _a("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _a("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _a("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _a("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var hu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
            Z2 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hu));

        function Ko(l, t) {
            t = (t & 4) !== 0;
            for (var a = 0; a < l.length; a++) {
                var e = l[a],
                    u = e.event;
                e = e.listeners;
                l: {
                    var n = void 0;
                    if (t)
                        for (var i = e.length - 1; 0 <= i; i--) {
                            var c = e[i],
                                f = c.instance,
                                m = c.currentTarget;
                            if (c = c.listener, f !== n && u.isPropagationStopped()) break l;
                            n = c, u.currentTarget = m;
                            try {
                                n(u)
                            } catch (p) {
                                Yu(p)
                            }
                            u.currentTarget = null, n = f
                        } else
                            for (i = 0; i < e.length; i++) {
                                if (c = e[i], f = c.instance, m = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped()) break l;
                                n = c, u.currentTarget = m;
                                try {
                                    n(u)
                                } catch (p) {
                                    Yu(p)
                                }
                                u.currentTarget = null, n = f
                            }
                }
            }
        }

        function V(l, t) {
            var a = t[ei];
            a === void 0 && (a = t[ei] = new Set);
            var e = l + "__bubble";
            a.has(e) || (Wo(t, l, 2, !1), a.add(e))
        }

        function Vc(l, t, a) {
            var e = 0;
            t && (e |= 4), Wo(a, l, e, t)
        }
        var An = "_reactListening" + Math.random().toString(36).slice(2);

        function Jc(l) {
            if (!l[An]) {
                l[An] = !0, Qf.forEach(function(a) {
                    a !== "selectionchange" && (Z2.has(a) || Vc(a, !1, l), Vc(a, !0, l))
                });
                var t = l.nodeType === 9 ? l : l.ownerDocument;
                t === null || t[An] || (t[An] = !0, Vc("selectionchange", !1, t))
            }
        }

        function Wo(l, t, a, e) {
            switch (E1(t)) {
                case 2:
                    var u = rh;
                    break;
                case 8:
                    u = gh;
                    break;
                default:
                    u = ff
            }
            a = u.bind(null, t, a, l), u = void 0, !hi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), e ? u !== void 0 ? l.addEventListener(t, a, {
                capture: !0,
                passive: u
            }) : l.addEventListener(t, a, !0) : u !== void 0 ? l.addEventListener(t, a, {
                passive: u
            }) : l.addEventListener(t, a, !1)
        }

        function Kc(l, t, a, e, u) {
            var n = e;
            if ((t & 1) === 0 && (t & 2) === 0 && e !== null) l: for (;;) {
                if (e === null) return;
                var i = e.tag;
                if (i === 3 || i === 4) {
                    var c = e.stateNode.containerInfo;
                    if (c === u) break;
                    if (i === 4)
                        for (i = e.return; i !== null;) {
                            var f = i.tag;
                            if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
                            i = i.return
                        }
                    for (; c !== null;) {
                        if (i = La(c), i === null) return;
                        if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
                            e = n = i;
                            continue l
                        }
                        c = c.parentNode
                    }
                }
                e = e.return
            }
            If(function() {
                var m = n,
                    p = oi(a),
                    T = [];
                l: {
                    var v = M0.get(l);
                    if (v !== void 0) {
                        var r = Ru,
                            O = l;
                        switch (l) {
                            case "keypress":
                                if (Nu(a) === 0) break l;
                            case "keydown":
                            case "keyup":
                                r = qd;
                                break;
                            case "focusin":
                                O = "focus", r = ri;
                                break;
                            case "focusout":
                                O = "blur", r = ri;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                r = ri;
                                break;
                            case "click":
                                if (a.button === 2) break l;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                r = t0;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                r = Ed;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                r = Bd;
                                break;
                            case T0:
                            case E0:
                            case A0:
                                r = Md;
                                break;
                            case _0:
                                r = Qd;
                                break;
                            case "scroll":
                            case "scrollend":
                                r = zd;
                                break;
                            case "wheel":
                                r = Zd;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                r = xd;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                r = e0;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                r = wd
                        }
                        var N = (t & 4) !== 0,
                            hl = !N && (l === "scroll" || l === "scrollend"),
                            d = N ? v !== null ? v + "Capture" : null : v;
                        N = [];
                        for (var s = m, h; s !== null;) {
                            var b = s;
                            if (h = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || h === null || d === null || (b = Re(s, d), b != null && N.push(mu(s, b, h))), hl) break;
                            s = s.return
                        }
                        0 < N.length && (v = new r(v, O, null, a, p), T.push({
                            event: v,
                            listeners: N
                        }))
                    }
                }
                if ((t & 7) === 0) {
                    l: {
                        if (v = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", v && a !== si && (O = a.relatedTarget || a.fromElement) && (La(O) || O[Za])) break l;
                        if ((r || v) && (v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window, r ? (O = a.relatedTarget || a.toElement, r = m, O = O ? La(O) : null, O !== null && (hl = ll(O), N = O.tag, O !== hl || N !== 5 && N !== 27 && N !== 6) && (O = null)) : (r = null, O = m), r !== O)) {
                            if (N = t0, b = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (N = e0, b = "onPointerLeave", d = "onPointerEnter", s = "pointer"), hl = r == null ? v : He(r), h = O == null ? v : He(O), v = new N(b, s + "leave", r, a, p), v.target = hl, v.relatedTarget = h, b = null, La(p) === m && (N = new N(d, s + "enter", O, a, p), N.target = h, N.relatedTarget = hl, b = N), hl = b, r && O) t: {
                                for (N = L2, d = r, s = O, h = 0, b = d; b; b = N(b)) h++;b = 0;
                                for (var C = s; C; C = N(C)) b++;
                                for (; 0 < h - b;) d = N(d),
                                h--;
                                for (; 0 < b - h;) s = N(s),
                                b--;
                                for (; h--;) {
                                    if (d === s || s !== null && d === s.alternate) {
                                        N = d;
                                        break t
                                    }
                                    d = N(d), s = N(s)
                                }
                                N = null
                            }
                            else N = null;
                            r !== null && ko(T, v, r, N, !1), O !== null && hl !== null && ko(T, hl, O, N, !0)
                        }
                    }
                    l: {
                        if (v = m ? He(m) : window, r = v.nodeName && v.nodeName.toLowerCase(), r === "select" || r === "input" && v.type === "file") var al = d0;
                        else if (s0(v))
                            if (h0) al = l2;
                            else {
                                al = Id;
                                var U = Fd
                            }
                        else r = v.nodeName,
                        !r || r.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? m && fi(m.elementType) && (al = d0) : al = Pd;
                        if (al && (al = al(l, m))) {
                            o0(T, al, a, p);
                            break l
                        }
                        U && U(l, v, m),
                        l === "focusout" && m && v.type === "number" && m.memoizedProps.value != null && ci(v, "number", v.value)
                    }
                    switch (U = m ? He(m) : window, l) {
                        case "focusin":
                            (s0(U) || U.contentEditable === "true") && (Ia = U, Ti = m, Ze = null);
                            break;
                        case "focusout":
                            Ze = Ti = Ia = null;
                            break;
                        case "mousedown":
                            Ei = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Ei = !1, b0(T, a, p);
                            break;
                        case "selectionchange":
                            if (a2) break;
                        case "keydown":
                        case "keyup":
                            b0(T, a, p)
                    }
                    var Q;
                    if (pi) l: {
                        switch (l) {
                            case "compositionstart":
                                var k = "onCompositionStart";
                                break l;
                            case "compositionend":
                                k = "onCompositionEnd";
                                break l;
                            case "compositionupdate":
                                k = "onCompositionUpdate";
                                break l
                        }
                        k = void 0
                    }
                    else Fa ? c0(l, a) && (k = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (k = "onCompositionStart");k && (u0 && a.locale !== "ko" && (Fa || k !== "onCompositionStart" ? k === "onCompositionEnd" && Fa && (Q = Pf()) : (Pt = p, mi = "value" in Pt ? Pt.value : Pt.textContent, Fa = !0)), U = _n(m, k), 0 < U.length && (k = new a0(k, l, null, a, p), T.push({
                        event: k,
                        listeners: U
                    }), Q ? k.data = Q : (Q = f0(a), Q !== null && (k.data = Q)))),
                    (Q = Jd ? Kd(l, a) : Wd(l, a)) && (k = _n(m, "onBeforeInput"), 0 < k.length && (U = new a0("onBeforeInput", "beforeinput", null, a, p), T.push({
                        event: U,
                        listeners: k
                    }), U.data = Q)),
                    G2(T, l, m, a, p)
                }
                Ko(T, t)
            })
        }

        function mu(l, t, a) {
            return {
                instance: l,
                listener: t,
                currentTarget: a
            }
        }

        function _n(l, t) {
            for (var a = t + "Capture", e = []; l !== null;) {
                var u = l,
                    n = u.stateNode;
                if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Re(l, a), u != null && e.unshift(mu(l, u, n)), u = Re(l, t), u != null && e.push(mu(l, u, n))), l.tag === 3) return e;
                l = l.return
            }
            return []
        }

        function L2(l) {
            if (l === null) return null;
            do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
            return l || null
        }

        function ko(l, t, a, e, u) {
            for (var n = t._reactName, i = []; a !== null && a !== e;) {
                var c = a,
                    f = c.alternate,
                    m = c.stateNode;
                if (c = c.tag, f !== null && f === e) break;
                c !== 5 && c !== 26 && c !== 27 || m === null || (f = m, u ? (m = Re(a, n), m != null && i.unshift(mu(a, m, f))) : u || (m = Re(a, n), m != null && i.push(mu(a, m, f)))), a = a.return
            }
            i.length !== 0 && l.push({
                event: t,
                listeners: i
            })
        }
        var w2 = /\r\n?/g,
            V2 = /\u0000|\uFFFD/g;

        function $o(l) {
            return (typeof l == "string" ? l : "" + l).replace(w2, `
`).replace(V2, "")
        }

        function Fo(l, t) {
            return t = $o(t), $o(l) === t
        }

        function dl(l, t, a, e, u, n) {
            switch (a) {
                case "children":
                    typeof e == "string" ? t === "body" || t === "textarea" && e === "" || Wa(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && Wa(l, "" + e);
                    break;
                case "className":
                    xu(l, "class", e);
                    break;
                case "tabIndex":
                    xu(l, "tabindex", e);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    xu(l, a, e);
                    break;
                case "style":
                    $f(l, e, n);
                    break;
                case "data":
                    if (t !== "object") {
                        xu(l, "data", e);
                        break
                    }
                case "src":
                case "href":
                    if (e === "" && (t !== "a" || a !== "href")) {
                        l.removeAttribute(a);
                        break
                    }
                    if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
                        l.removeAttribute(a);
                        break
                    }
                    e = Uu("" + e), l.setAttribute(a, e);
                    break;
                case "action":
                case "formAction":
                    if (typeof e == "function") {
                        l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break
                    } else typeof n == "function" && (a === "formAction" ? (t !== "input" && dl(l, t, "name", u.name, u, null), dl(l, t, "formEncType", u.formEncType, u, null), dl(l, t, "formMethod", u.formMethod, u, null), dl(l, t, "formTarget", u.formTarget, u, null)) : (dl(l, t, "encType", u.encType, u, null), dl(l, t, "method", u.method, u, null), dl(l, t, "target", u.target, u, null)));
                    if (e == null || typeof e == "symbol" || typeof e == "boolean") {
                        l.removeAttribute(a);
                        break
                    }
                    e = Uu("" + e), l.setAttribute(a, e);
                    break;
                case "onClick":
                    e != null && (l.onclick = Rt);
                    break;
                case "onScroll":
                    e != null && V("scroll", l);
                    break;
                case "onScrollEnd":
                    e != null && V("scrollend", l);
                    break;
                case "dangerouslySetInnerHTML":
                    if (e != null) {
                        if (typeof e != "object" || !("__html" in e)) throw Error(y(61));
                        if (a = e.__html, a != null) {
                            if (u.children != null) throw Error(y(60));
                            l.innerHTML = a
                        }
                    }
                    break;
                case "multiple":
                    l.multiple = e && typeof e != "function" && typeof e != "symbol";
                    break;
                case "muted":
                    l.muted = e && typeof e != "function" && typeof e != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
                        l.removeAttribute("xlink:href");
                        break
                    }
                    a = Uu("" + e), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
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
                    e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
                    break;
                case "capture":
                case "download":
                    e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
                    break;
                case "rowSpan":
                case "start":
                    e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
                    break;
                case "popover":
                    V("beforetoggle", l), V("toggle", l), Ou(l, "popover", e);
                    break;
                case "xlinkActuate":
                    Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
                    break;
                case "xlinkArcrole":
                    Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
                    break;
                case "xlinkRole":
                    Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
                    break;
                case "xlinkShow":
                    Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
                    break;
                case "xlinkTitle":
                    Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
                    break;
                case "xlinkType":
                    Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
                    break;
                case "xmlBase":
                    Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
                    break;
                case "xmlLang":
                    Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
                    break;
                case "xmlSpace":
                    Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
                    break;
                case "is":
                    Ou(l, "is", e);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Sd.get(a) || a, Ou(l, a, e))
            }
        }

        function Wc(l, t, a, e, u, n) {
            switch (a) {
                case "style":
                    $f(l, e, n);
                    break;
                case "dangerouslySetInnerHTML":
                    if (e != null) {
                        if (typeof e != "object" || !("__html" in e)) throw Error(y(61));
                        if (a = e.__html, a != null) {
                            if (u.children != null) throw Error(y(60));
                            l.innerHTML = a
                        }
                    }
                    break;
                case "children":
                    typeof e == "string" ? Wa(l, e) : (typeof e == "number" || typeof e == "bigint") && Wa(l, "" + e);
                    break;
                case "onScroll":
                    e != null && V("scroll", l);
                    break;
                case "onScrollEnd":
                    e != null && V("scrollend", l);
                    break;
                case "onClick":
                    e != null && (l.onclick = Rt);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!Xf.hasOwnProperty(a)) l: {
                        if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[Fl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
                            typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
                            break l
                        }
                        a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Ou(l, a, e)
                    }
            }
        }

        function Vl(l, t, a) {
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
                    V("error", l), V("load", l);
                    var e = !1,
                        u = !1,
                        n;
                    for (n in a)
                        if (a.hasOwnProperty(n)) {
                            var i = a[n];
                            if (i != null) switch (n) {
                                case "src":
                                    e = !0;
                                    break;
                                case "srcSet":
                                    u = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(y(137, t));
                                default:
                                    dl(l, t, n, i, a, null)
                            }
                        }
                    u && dl(l, t, "srcSet", a.srcSet, a, null), e && dl(l, t, "src", a.src, a, null);
                    return;
                case "input":
                    V("invalid", l);
                    var c = n = i = u = null,
                        f = null,
                        m = null;
                    for (e in a)
                        if (a.hasOwnProperty(e)) {
                            var p = a[e];
                            if (p != null) switch (e) {
                                case "name":
                                    u = p;
                                    break;
                                case "type":
                                    i = p;
                                    break;
                                case "checked":
                                    f = p;
                                    break;
                                case "defaultChecked":
                                    m = p;
                                    break;
                                case "value":
                                    n = p;
                                    break;
                                case "defaultValue":
                                    c = p;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (p != null) throw Error(y(137, t));
                                    break;
                                default:
                                    dl(l, t, e, p, a, null)
                            }
                        }
                    Jf(l, n, c, f, m, i, u, !1);
                    return;
                case "select":
                    V("invalid", l), e = i = n = null;
                    for (u in a)
                        if (a.hasOwnProperty(u) && (c = a[u], c != null)) switch (u) {
                            case "value":
                                n = c;
                                break;
                            case "defaultValue":
                                i = c;
                                break;
                            case "multiple":
                                e = c;
                            default:
                                dl(l, t, u, c, a, null)
                        }
                    t = n, a = i, l.multiple = !!e, t != null ? Ka(l, !!e, t, !1) : a != null && Ka(l, !!e, a, !0);
                    return;
                case "textarea":
                    V("invalid", l), n = u = e = null;
                    for (i in a)
                        if (a.hasOwnProperty(i) && (c = a[i], c != null)) switch (i) {
                            case "value":
                                e = c;
                                break;
                            case "defaultValue":
                                u = c;
                                break;
                            case "children":
                                n = c;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (c != null) throw Error(y(91));
                                break;
                            default:
                                dl(l, t, i, c, a, null)
                        }
                    Wf(l, e, u, n);
                    return;
                case "option":
                    for (f in a)
                        if (a.hasOwnProperty(f) && (e = a[f], e != null)) switch (f) {
                            case "selected":
                                l.selected = e && typeof e != "function" && typeof e != "symbol";
                                break;
                            default:
                                dl(l, t, f, e, a, null)
                        }
                    return;
                case "dialog":
                    V("beforetoggle", l), V("toggle", l), V("cancel", l), V("close", l);
                    break;
                case "iframe":
                case "object":
                    V("load", l);
                    break;
                case "video":
                case "audio":
                    for (e = 0; e < hu.length; e++) V(hu[e], l);
                    break;
                case "image":
                    V("error", l), V("load", l);
                    break;
                case "details":
                    V("toggle", l);
                    break;
                case "embed":
                case "source":
                case "link":
                    V("error", l), V("load", l);
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
                    for (m in a)
                        if (a.hasOwnProperty(m) && (e = a[m], e != null)) switch (m) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(y(137, t));
                            default:
                                dl(l, t, m, e, a, null)
                        }
                    return;
                default:
                    if (fi(t)) {
                        for (p in a) a.hasOwnProperty(p) && (e = a[p], e !== void 0 && Wc(l, t, p, e, a, void 0));
                        return
                    }
            }
            for (c in a) a.hasOwnProperty(c) && (e = a[c], e != null && dl(l, t, c, e, a, null))
        }

        function J2(l, t, a, e) {
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
                    var u = null,
                        n = null,
                        i = null,
                        c = null,
                        f = null,
                        m = null,
                        p = null;
                    for (r in a) {
                        var T = a[r];
                        if (a.hasOwnProperty(r) && T != null) switch (r) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                f = T;
                            default:
                                e.hasOwnProperty(r) || dl(l, t, r, null, e, T)
                        }
                    }
                    for (var v in e) {
                        var r = e[v];
                        if (T = a[v], e.hasOwnProperty(v) && (r != null || T != null)) switch (v) {
                            case "type":
                                n = r;
                                break;
                            case "name":
                                u = r;
                                break;
                            case "checked":
                                m = r;
                                break;
                            case "defaultChecked":
                                p = r;
                                break;
                            case "value":
                                i = r;
                                break;
                            case "defaultValue":
                                c = r;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (r != null) throw Error(y(137, t));
                                break;
                            default:
                                r !== T && dl(l, t, v, r, e, T)
                        }
                    }
                    ii(l, i, c, f, m, p, n, u);
                    return;
                case "select":
                    r = i = c = v = null;
                    for (n in a)
                        if (f = a[n], a.hasOwnProperty(n) && f != null) switch (n) {
                            case "value":
                                break;
                            case "multiple":
                                r = f;
                            default:
                                e.hasOwnProperty(n) || dl(l, t, n, null, e, f)
                        }
                    for (u in e)
                        if (n = e[u], f = a[u], e.hasOwnProperty(u) && (n != null || f != null)) switch (u) {
                            case "value":
                                v = n;
                                break;
                            case "defaultValue":
                                c = n;
                                break;
                            case "multiple":
                                i = n;
                            default:
                                n !== f && dl(l, t, u, n, e, f)
                        }
                    t = c, a = i, e = r, v != null ? Ka(l, !!a, v, !1) : !!e != !!a && (t != null ? Ka(l, !!a, t, !0) : Ka(l, !!a, a ? [] : "", !1));
                    return;
                case "textarea":
                    r = v = null;
                    for (c in a)
                        if (u = a[c], a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c)) switch (c) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                dl(l, t, c, null, e, u)
                        }
                    for (i in e)
                        if (u = e[i], n = a[i], e.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
                            case "value":
                                v = u;
                                break;
                            case "defaultValue":
                                r = u;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (u != null) throw Error(y(91));
                                break;
                            default:
                                u !== n && dl(l, t, i, u, e, n)
                        }
                    Kf(l, v, r);
                    return;
                case "option":
                    for (var O in a)
                        if (v = a[O], a.hasOwnProperty(O) && v != null && !e.hasOwnProperty(O)) switch (O) {
                            case "selected":
                                l.selected = !1;
                                break;
                            default:
                                dl(l, t, O, null, e, v)
                        }
                    for (f in e)
                        if (v = e[f], r = a[f], e.hasOwnProperty(f) && v !== r && (v != null || r != null)) switch (f) {
                            case "selected":
                                l.selected = v && typeof v != "function" && typeof v != "symbol";
                                break;
                            default:
                                dl(l, t, f, v, e, r)
                        }
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
                    for (var N in a) v = a[N], a.hasOwnProperty(N) && v != null && !e.hasOwnProperty(N) && dl(l, t, N, null, e, v);
                    for (m in e)
                        if (v = e[m], r = a[m], e.hasOwnProperty(m) && v !== r && (v != null || r != null)) switch (m) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (v != null) throw Error(y(137, t));
                                break;
                            default:
                                dl(l, t, m, v, e, r)
                        }
                    return;
                default:
                    if (fi(t)) {
                        for (var hl in a) v = a[hl], a.hasOwnProperty(hl) && v !== void 0 && !e.hasOwnProperty(hl) && Wc(l, t, hl, void 0, e, v);
                        for (p in e) v = e[p], r = a[p], !e.hasOwnProperty(p) || v === r || v === void 0 && r === void 0 || Wc(l, t, p, v, e, r);
                        return
                    }
            }
            for (var d in a) v = a[d], a.hasOwnProperty(d) && v != null && !e.hasOwnProperty(d) && dl(l, t, d, null, e, v);
            for (T in e) v = e[T], r = a[T], !e.hasOwnProperty(T) || v === r || v == null && r == null || dl(l, t, T, v, e, r)
        }

        function Io(l) {
            switch (l) {
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

        function K2() {
            if (typeof performance.getEntriesByType == "function") {
                for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
                    var u = a[e],
                        n = u.transferSize,
                        i = u.initiatorType,
                        c = u.duration;
                    if (n && c && Io(i)) {
                        for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
                            var f = a[e],
                                m = f.startTime;
                            if (m > c) break;
                            var p = f.transferSize,
                                T = f.initiatorType;
                            p && Io(T) && (f = f.responseEnd, i += p * (f < c ? 1 : (c - m) / (f - m)))
                        }
                        if (--e, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break
                    }
                }
                if (0 < l) return t / l / 1e6
            }
            return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5
        }
        var kc = null,
            $c = null;

        function Mn(l) {
            return l.nodeType === 9 ? l : l.ownerDocument
        }

        function Po(l) {
            switch (l) {
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0
            }
        }

        function l1(l, t) {
            if (l === 0) switch (t) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0
            }
            return l === 1 && t === "foreignObject" ? 0 : l
        }

        function Fc(l, t) {
            return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var Ic = null;

        function W2() {
            var l = window.event;
            return l && l.type === "popstate" ? l === Ic ? !1 : (Ic = l, !0) : (Ic = null, !1)
        }
        var t1 = typeof setTimeout == "function" ? setTimeout : void 0,
            k2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
            a1 = typeof Promise == "function" ? Promise : void 0,
            $2 = typeof queueMicrotask == "function" ? queueMicrotask : typeof a1 < "u" ? function(l) {
                return a1.resolve(null).then(l).catch(F2)
            } : t1;

        function F2(l) {
            setTimeout(function() {
                throw l
            })
        }

        function ra(l) {
            return l === "head"
        }

        function e1(l, t) {
            var a = t,
                e = 0;
            do {
                var u = a.nextSibling;
                if (l.removeChild(a), u && u.nodeType === 8)
                    if (a = u.data, a === "/$" || a === "/&") {
                        if (e === 0) {
                            l.removeChild(u), _e(t);
                            return
                        }
                        e--
                    } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") e++;
                else if (a === "html") yu(l.ownerDocument.documentElement);
                else if (a === "head") {
                    a = l.ownerDocument.head, yu(a);
                    for (var n = a.firstChild; n;) {
                        var i = n.nextSibling,
                            c = n.nodeName;
                        n[Ne] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i
                    }
                } else a === "body" && yu(l.ownerDocument.body);
                a = u
            } while (a);
            _e(t)
        }

        function u1(l, t) {
            var a = l;
            l = 0;
            do {
                var e = a.nextSibling;
                if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8)
                    if (a = e.data, a === "/$") {
                        if (l === 0) break;
                        l--
                    } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
                a = e
            } while (a)
        }

        function Pc(l) {
            var t = l.firstChild;
            for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
                var a = t;
                switch (t = t.nextSibling, a.nodeName) {
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        Pc(a), ui(a);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (a.rel.toLowerCase() === "stylesheet") continue
                }
                l.removeChild(a)
            }
        }

        function I2(l, t, a, e) {
            for (; l.nodeType === 1;) {
                var u = a;
                if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
                } else if (e) {
                    if (!l[Ne]) switch (t) {
                        case "meta":
                            if (!l.hasAttribute("itemprop")) break;
                            return l;
                        case "link":
                            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
                            if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                            return l;
                        case "style":
                            if (l.hasAttribute("data-precedence")) break;
                            return l;
                        case "script":
                            if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                            return l;
                        default:
                            return l
                    }
                } else if (t === "input" && l.type === "hidden") {
                    var n = u.name == null ? null : "" + u.name;
                    if (u.type === "hidden" && l.getAttribute("name") === n) return l
                } else return l;
                if (l = Tt(l.nextSibling), l === null) break
            }
            return null
        }

        function P2(l, t, a) {
            if (t === "") return null;
            for (; l.nodeType !== 3;)
                if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Tt(l.nextSibling), l === null)) return null;
            return l
        }

        function n1(l, t) {
            for (; l.nodeType !== 8;)
                if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Tt(l.nextSibling), l === null)) return null;
            return l
        }

        function lf(l) {
            return l.data === "$?" || l.data === "$~"
        }

        function tf(l) {
            return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
        }

        function lh(l, t) {
            var a = l.ownerDocument;
            if (l.data === "$~") l._reactRetry = t;
            else if (l.data !== "$?" || a.readyState !== "loading") t();
            else {
                var e = function() {
                    t(), a.removeEventListener("DOMContentLoaded", e)
                };
                a.addEventListener("DOMContentLoaded", e), l._reactRetry = e
            }
        }

        function Tt(l) {
            for (; l != null; l = l.nextSibling) {
                var t = l.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
                    if (t === "/$" || t === "/&") return null
                }
            }
            return l
        }
        var af = null;

        function i1(l) {
            l = l.nextSibling;
            for (var t = 0; l;) {
                if (l.nodeType === 8) {
                    var a = l.data;
                    if (a === "/$" || a === "/&") {
                        if (t === 0) return Tt(l.nextSibling);
                        t--
                    } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
                }
                l = l.nextSibling
            }
            return null
        }

        function c1(l) {
            l = l.previousSibling;
            for (var t = 0; l;) {
                if (l.nodeType === 8) {
                    var a = l.data;
                    if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                        if (t === 0) return l;
                        t--
                    } else a !== "/$" && a !== "/&" || t++
                }
                l = l.previousSibling
            }
            return null
        }

        function f1(l, t, a) {
            switch (t = Mn(a), l) {
                case "html":
                    if (l = t.documentElement, !l) throw Error(y(452));
                    return l;
                case "head":
                    if (l = t.head, !l) throw Error(y(453));
                    return l;
                case "body":
                    if (l = t.body, !l) throw Error(y(454));
                    return l;
                default:
                    throw Error(y(451))
            }
        }

        function yu(l) {
            for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
            ui(l)
        }
        var Et = new Map,
            s1 = new Set;

        function On(l) {
            return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
        }
        var $t = A.d;
        A.d = {
            f: th,
            r: ah,
            D: eh,
            C: uh,
            L: nh,
            m: ih,
            X: fh,
            S: ch,
            M: sh
        };

        function th() {
            var l = $t.f(),
                t = pn();
            return l || t
        }

        function ah(l) {
            var t = wa(l);
            t !== null && t.tag === 5 && t.type === "form" ? _s(t) : $t.r(l)
        }
        var Te = typeof document > "u" ? null : document;

        function o1(l, t, a) {
            var e = Te;
            if (e && typeof t == "string" && t) {
                var u = vt(t);
                u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), s1.has(u) || (s1.add(u), l = {
                    rel: l,
                    crossOrigin: a,
                    href: t
                }, e.querySelector(u) === null && (t = e.createElement("link"), Vl(t, "link", l), Bl(t), e.head.appendChild(t)))
            }
        }

        function eh(l) {
            $t.D(l), o1("dns-prefetch", l, null)
        }

        function uh(l, t) {
            $t.C(l, t), o1("preconnect", l, t)
        }

        function nh(l, t, a) {
            $t.L(l, t, a);
            var e = Te;
            if (e && l && t) {
                var u = 'link[rel="preload"][as="' + vt(t) + '"]';
                t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + vt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + vt(a.imageSizes) + '"]')) : u += '[href="' + vt(l) + '"]';
                var n = u;
                switch (t) {
                    case "style":
                        n = Ee(l);
                        break;
                    case "script":
                        n = Ae(l)
                }
                Et.has(n) || (l = D({
                    rel: "preload",
                    href: t === "image" && a && a.imageSrcSet ? void 0 : l,
                    as: t
                }, a), Et.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(vu(n)) || t === "script" && e.querySelector(ru(n)) || (t = e.createElement("link"), Vl(t, "link", l), Bl(t), e.head.appendChild(t)))
            }
        }

        function ih(l, t) {
            $t.m(l, t);
            var a = Te;
            if (a && l) {
                var e = t && typeof t.as == "string" ? t.as : "script",
                    u = 'link[rel="modulepreload"][as="' + vt(e) + '"][href="' + vt(l) + '"]',
                    n = u;
                switch (e) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        n = Ae(l)
                }
                if (!Et.has(n) && (l = D({
                        rel: "modulepreload",
                        href: l
                    }, t), Et.set(n, l), a.querySelector(u) === null)) {
                    switch (e) {
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (a.querySelector(ru(n))) return
                    }
                    e = a.createElement("link"), Vl(e, "link", l), Bl(e), a.head.appendChild(e)
                }
            }
        }

        function ch(l, t, a) {
            $t.S(l, t, a);
            var e = Te;
            if (e && l) {
                var u = Va(e).hoistableStyles,
                    n = Ee(l);
                t = t || "default";
                var i = u.get(n);
                if (!i) {
                    var c = {
                        loading: 0,
                        preload: null
                    };
                    if (i = e.querySelector(vu(n))) c.loading = 5;
                    else {
                        l = D({
                            rel: "stylesheet",
                            href: l,
                            "data-precedence": t
                        }, a), (a = Et.get(n)) && ef(l, a);
                        var f = i = e.createElement("link");
                        Bl(f), Vl(f, "link", l), f._p = new Promise(function(m, p) {
                            f.onload = m, f.onerror = p
                        }), f.addEventListener("load", function() {
                            c.loading |= 1
                        }), f.addEventListener("error", function() {
                            c.loading |= 2
                        }), c.loading |= 4, xn(i, t, e)
                    }
                    i = {
                        type: "stylesheet",
                        instance: i,
                        count: 1,
                        state: c
                    }, u.set(n, i)
                }
            }
        }

        function fh(l, t) {
            $t.X(l, t);
            var a = Te;
            if (a && l) {
                var e = Va(a).hoistableScripts,
                    u = Ae(l),
                    n = e.get(u);
                n || (n = a.querySelector(ru(u)), n || (l = D({
                    src: l,
                    async: !0
                }, t), (t = Et.get(u)) && uf(l, t), n = a.createElement("script"), Bl(n), Vl(n, "link", l), a.head.appendChild(n)), n = {
                    type: "script",
                    instance: n,
                    count: 1,
                    state: null
                }, e.set(u, n))
            }
        }

        function sh(l, t) {
            $t.M(l, t);
            var a = Te;
            if (a && l) {
                var e = Va(a).hoistableScripts,
                    u = Ae(l),
                    n = e.get(u);
                n || (n = a.querySelector(ru(u)), n || (l = D({
                    src: l,
                    async: !0,
                    type: "module"
                }, t), (t = Et.get(u)) && uf(l, t), n = a.createElement("script"), Bl(n), Vl(n, "link", l), a.head.appendChild(n)), n = {
                    type: "script",
                    instance: n,
                    count: 1,
                    state: null
                }, e.set(u, n))
            }
        }

        function d1(l, t, a, e) {
            var u = (u = L.current) ? On(u) : null;
            if (!u) throw Error(y(446));
            switch (l) {
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Ee(a.href), a = Va(u).hoistableStyles, e = a.get(t), e || (e = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, a.set(t, e)), e) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                        l = Ee(a.href);
                        var n = Va(u).hoistableStyles,
                            i = n.get(l);
                        if (i || (u = u.ownerDocument || u, i = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: {
                                    loading: 0,
                                    preload: null
                                }
                            }, n.set(l, i), (n = u.querySelector(vu(l))) && !n._p && (i.instance = n, i.state.loading = 5), Et.has(l) || (a = {
                                rel: "preload",
                                as: "style",
                                href: a.href,
                                crossOrigin: a.crossOrigin,
                                integrity: a.integrity,
                                media: a.media,
                                hrefLang: a.hrefLang,
                                referrerPolicy: a.referrerPolicy
                            }, Et.set(l, a), n || oh(u, l, a, i.state))), t && e === null) throw Error(y(528, ""));
                        return i
                    }
                    if (t && e !== null) throw Error(y(529, ""));
                    return null;
                case "script":
                    return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ae(a), a = Va(u).hoistableScripts, e = a.get(t), e || (e = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, a.set(t, e)), e) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(y(444, l))
            }
        }

        function Ee(l) {
            return 'href="' + vt(l) + '"'
        }

        function vu(l) {
            return 'link[rel="stylesheet"][' + l + "]"
        }

        function h1(l) {
            return D({}, l, {
                "data-precedence": l.precedence,
                precedence: null
            })
        }

        function oh(l, t, a, e) {
            l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
                return e.loading |= 1
            }), t.addEventListener("error", function() {
                return e.loading |= 2
            }), Vl(t, "link", a), Bl(t), l.head.appendChild(t))
        }

        function Ae(l) {
            return '[src="' + vt(l) + '"]'
        }

        function ru(l) {
            return "script[async]" + l
        }

        function m1(l, t, a) {
            if (t.count++, t.instance === null) switch (t.type) {
                case "style":
                    var e = l.querySelector('style[data-href~="' + vt(a.href) + '"]');
                    if (e) return t.instance = e, Bl(e), e;
                    var u = D({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return e = (l.ownerDocument || l).createElement("style"), Bl(e), Vl(e, "style", u), xn(e, a.precedence, l), t.instance = e;
                case "stylesheet":
                    u = Ee(a.href);
                    var n = l.querySelector(vu(u));
                    if (n) return t.state.loading |= 4, t.instance = n, Bl(n), n;
                    e = h1(a), (u = Et.get(u)) && ef(e, u), n = (l.ownerDocument || l).createElement("link"), Bl(n);
                    var i = n;
                    return i._p = new Promise(function(c, f) {
                        i.onload = c, i.onerror = f
                    }), Vl(n, "link", e), t.state.loading |= 4, xn(n, a.precedence, l), t.instance = n;
                case "script":
                    return n = Ae(a.src), (u = l.querySelector(ru(n))) ? (t.instance = u, Bl(u), u) : (e = a, (u = Et.get(n)) && (e = D({}, a), uf(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), Bl(u), Vl(u, "link", e), l.head.appendChild(u), t.instance = u);
                case "void":
                    return null;
                default:
                    throw Error(y(443, t.type))
            } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, xn(e, a.precedence, l));
            return t.instance
        }

        function xn(l, t, a) {
            for (var e = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
                var c = e[i];
                if (c.dataset.precedence === t) n = c;
                else if (n !== u) break
            }
            n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild))
        }

        function ef(l, t) {
            l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
        }

        function uf(l, t) {
            l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
        }
        var Dn = null;

        function y1(l, t, a) {
            if (Dn === null) {
                var e = new Map,
                    u = Dn = new Map;
                u.set(a, e)
            } else u = Dn, e = u.get(a), e || (e = new Map, u.set(a, e));
            if (e.has(l)) return e;
            for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
                var n = a[u];
                if (!(n[Ne] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var i = n.getAttribute(t) || "";
                    i = l + i;
                    var c = e.get(i);
                    c ? c.push(n) : e.set(i, [n])
                }
            }
            return e
        }

        function v1(l, t, a) {
            l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null)
        }

        function dh(l, t, a) {
            if (a === 1 || t.itemProp != null) return !1;
            switch (l) {
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                    return !0;
                case "link":
                    if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                    switch (t.rel) {
                        case "stylesheet":
                            return l = t.disabled, typeof t.precedence == "string" && l == null;
                        default:
                            return !0
                    }
                case "script":
                    if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
            }
            return !1
        }

        function r1(l) {
            return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
        }

        function hh(l, t, a, e) {
            if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
                if (a.instance === null) {
                    var u = Ee(e.href),
                        n = t.querySelector(vu(u));
                    if (n) {
                        t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Un.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Bl(n);
                        return
                    }
                    n = t.ownerDocument || t, e = h1(e), (u = Et.get(u)) && ef(e, u), n = n.createElement("link"), Bl(n);
                    var i = n;
                    i._p = new Promise(function(c, f) {
                        i.onload = c, i.onerror = f
                    }), Vl(n, "link", e), a.instance = n
                }
                l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Un.bind(l), t.addEventListener("load", a), t.addEventListener("error", a))
            }
        }
        var nf = 0;

        function mh(l, t) {
            return l.stylesheets && l.count === 0 && Nn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
                var e = setTimeout(function() {
                    if (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend) {
                        var n = l.unsuspend;
                        l.unsuspend = null, n()
                    }
                }, 6e4 + t);
                0 < l.imgBytes && nf === 0 && (nf = 62500 * K2());
                var u = setTimeout(function() {
                    if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Nn(l, l.stylesheets), l.unsuspend)) {
                        var n = l.unsuspend;
                        l.unsuspend = null, n()
                    }
                }, (l.imgBytes > nf ? 50 : 800) + t);
                return l.unsuspend = a,
                    function() {
                        l.unsuspend = null, clearTimeout(e), clearTimeout(u)
                    }
            } : null
        }

        function Un() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) Nn(this, this.stylesheets);
                else if (this.unsuspend) {
                    var l = this.unsuspend;
                    this.unsuspend = null, l()
                }
            }
        }
        var Cn = null;

        function Nn(l, t) {
            l.stylesheets = null, l.unsuspend !== null && (l.count++, Cn = new Map, t.forEach(yh, l), Cn = null, Un.call(l))
        }

        function yh(l, t) {
            if (!(t.state.loading & 4)) {
                var a = Cn.get(l);
                if (a) var e = a.get(null);
                else {
                    a = new Map, Cn.set(l, a);
                    for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                        var i = u[n];
                        (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), e = i)
                    }
                    e && a.set(null, e)
                }
                u = t.instance, i = u.getAttribute("data-precedence"), n = a.get(i) || e, n === e && a.set(null, u), a.set(i, u), this.count++, e = Un.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4
            }
        }
        var gu = {
            $$typeof: X,
            Provider: null,
            Consumer: null,
            _currentValue: R,
            _currentValue2: R,
            _threadCount: 0
        };

        function vh(l, t, a, e, u, n, i, c, f) {
            this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = li(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.hiddenUpdates = li(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = new Map
        }

        function g1(l, t, a, e, u, n, i, c, f, m, p, T) {
            return l = new vh(l, t, a, i, f, m, p, T, c), t = 1, n === !0 && (t |= 24), n = ft(3, null, null, t), l.current = n, n.stateNode = l, t = Bi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
                element: e,
                isDehydrated: a,
                cache: t
            }, Zi(n), l
        }

        function p1(l) {
            return l ? (l = te, l) : te
        }

        function S1(l, t, a, e, u, n) {
            u = p1(u), e.context === null ? e.context = u : e.pendingContext = u, e = na(t), e.payload = {
                element: a
            }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = ia(l, e, t), a !== null && (et(a, l, t), ke(a, l, t))
        }

        function b1(l, t) {
            if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
                var a = l.retryLane;
                l.retryLane = a !== 0 && a < t ? a : t
            }
        }

        function cf(l, t) {
            b1(l, t), (l = l.alternate) && b1(l, t)
        }

        function z1(l) {
            if (l.tag === 13 || l.tag === 31) {
                var t = Da(l, 67108864);
                t !== null && et(t, l, 67108864), cf(l, 67108864)
            }
        }

        function T1(l) {
            if (l.tag === 13 || l.tag === 31) {
                var t = mt();
                t = ti(t);
                var a = Da(l, t);
                a !== null && et(a, l, t), cf(l, t)
            }
        }
        var Hn = !0;

        function rh(l, t, a, e) {
            var u = S.T;
            S.T = null;
            var n = A.p;
            try {
                A.p = 2, ff(l, t, a, e)
            } finally {
                A.p = n, S.T = u
            }
        }

        function gh(l, t, a, e) {
            var u = S.T;
            S.T = null;
            var n = A.p;
            try {
                A.p = 8, ff(l, t, a, e)
            } finally {
                A.p = n, S.T = u
            }
        }

        function ff(l, t, a, e) {
            if (Hn) {
                var u = sf(e);
                if (u === null) Kc(l, t, e, Rn, a), A1(l, e);
                else if (Sh(u, l, t, a, e)) e.stopPropagation();
                else if (A1(l, e), t & 4 && -1 < ph.indexOf(l)) {
                    for (; u !== null;) {
                        var n = wa(u);
                        if (n !== null) switch (n.tag) {
                            case 3:
                                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                                    var i = Aa(n.pendingLanes);
                                    if (i !== 0) {
                                        var c = n;
                                        for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                                            var f = 1 << 31 - it(i);
                                            c.entanglements[1] |= f, i &= ~f
                                        }
                                        Ct(n), (ul & 6) === 0 && (rn = ut() + 500, du(0))
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                c = Da(n, 2), c !== null && et(c, n, 2), pn(), cf(n, 2)
                        }
                        if (n = sf(e), n === null && Kc(l, t, e, Rn, a), n === u) break;
                        u = n
                    }
                    u !== null && e.stopPropagation()
                } else Kc(l, t, e, null, a)
            }
        }

        function sf(l) {
            return l = oi(l), of (l)
        }
        var Rn = null;

        function of (l) {
            if (Rn = null, l = La(l), l !== null) {
                var t = ll(l);
                if (t === null) l = null;
                else {
                    var a = t.tag;
                    if (a === 13) {
                        if (l = nl(t), l !== null) return l;
                        l = null
                    } else if (a === 31) {
                        if (l = ml(t), l !== null) return l;
                        l = null
                    } else if (a === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        l = null
                    } else t !== l && (l = null)
                }
            }
            return Rn = l, null
        }

        function E1(l) {
            switch (l) {
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
                    switch (ed()) {
                        case Uf:
                            return 2;
                        case Cf:
                            return 8;
                        case Tu:
                        case ud:
                            return 32;
                        case Nf:
                            return 268435456;
                        default:
                            return 32
                    }
                default:
                    return 32
            }
        }
        var df = !1,
            ga = null,
            pa = null,
            Sa = null,
            pu = new Map,
            Su = new Map,
            ba = [],
            ph = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

        function A1(l, t) {
            switch (l) {
                case "focusin":
                case "focusout":
                    ga = null;
                    break;
                case "dragenter":
                case "dragleave":
                    pa = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Sa = null;
                    break;
                case "pointerover":
                case "pointerout":
                    pu.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Su.delete(t.pointerId)
            }
        }

        function bu(l, t, a, e, u, n) {
            return l === null || l.nativeEvent !== n ? (l = {
                blockedOn: t,
                domEventName: a,
                eventSystemFlags: e,
                nativeEvent: n,
                targetContainers: [u]
            }, t !== null && (t = wa(t), t !== null && z1(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l)
        }

        function Sh(l, t, a, e, u) {
            switch (t) {
                case "focusin":
                    return ga = bu(ga, l, t, a, e, u), !0;
                case "dragenter":
                    return pa = bu(pa, l, t, a, e, u), !0;
                case "mouseover":
                    return Sa = bu(Sa, l, t, a, e, u), !0;
                case "pointerover":
                    var n = u.pointerId;
                    return pu.set(n, bu(pu.get(n) || null, l, t, a, e, u)), !0;
                case "gotpointercapture":
                    return n = u.pointerId, Su.set(n, bu(Su.get(n) || null, l, t, a, e, u)), !0
            }
            return !1
        }

        function _1(l) {
            var t = La(l.target);
            if (t !== null) {
                var a = ll(t);
                if (a !== null) {
                    if (t = a.tag, t === 13) {
                        if (t = nl(a), t !== null) {
                            l.blockedOn = t, Bf(l.priority, function() {
                                T1(a)
                            });
                            return
                        }
                    } else if (t === 31) {
                        if (t = ml(a), t !== null) {
                            l.blockedOn = t, Bf(l.priority, function() {
                                T1(a)
                            });
                            return
                        }
                    } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                        l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                        return
                    }
                }
            }
            l.blockedOn = null
        }

        function qn(l) {
            if (l.blockedOn !== null) return !1;
            for (var t = l.targetContainers; 0 < t.length;) {
                var a = sf(l.nativeEvent);
                if (a === null) {
                    a = l.nativeEvent;
                    var e = new a.constructor(a.type, a);
                    si = e, a.target.dispatchEvent(e), si = null
                } else return t = wa(a), t !== null && z1(t), l.blockedOn = a, !1;
                t.shift()
            }
            return !0
        }

        function M1(l, t, a) {
            qn(l) && a.delete(t)
        }

        function bh() {
            df = !1, ga !== null && qn(ga) && (ga = null), pa !== null && qn(pa) && (pa = null), Sa !== null && qn(Sa) && (Sa = null), pu.forEach(M1), Su.forEach(M1)
        }

        function jn(l, t) {
            l.blockedOn === t && (l.blockedOn = null, df || (df = !0, g.unstable_scheduleCallback(g.unstable_NormalPriority, bh)))
        }
        var Yn = null;

        function O1(l) {
            Yn !== l && (Yn = l, g.unstable_scheduleCallback(g.unstable_NormalPriority, function() {
                Yn === l && (Yn = null);
                for (var t = 0; t < l.length; t += 3) {
                    var a = l[t],
                        e = l[t + 1],
                        u = l[t + 2];
                    if (typeof e != "function") {
                        if ( of (e || a) === null) continue;
                        break
                    }
                    var n = wa(a);
                    n !== null && (l.splice(t, 3), t -= 3, fc(n, {
                        pending: !0,
                        data: u,
                        method: a.method,
                        action: e
                    }, e, u))
                }
            }))
        }

        function _e(l) {
            function t(f) {
                return jn(f, l)
            }
            ga !== null && jn(ga, l), pa !== null && jn(pa, l), Sa !== null && jn(Sa, l), pu.forEach(t), Su.forEach(t);
            for (var a = 0; a < ba.length; a++) {
                var e = ba[a];
                e.blockedOn === l && (e.blockedOn = null)
            }
            for (; 0 < ba.length && (a = ba[0], a.blockedOn === null);) _1(a), a.blockedOn === null && ba.shift();
            if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
                for (e = 0; e < a.length; e += 3) {
                    var u = a[e],
                        n = a[e + 1],
                        i = u[Fl] || null;
                    if (typeof n == "function") i || O1(a);
                    else if (i) {
                        var c = null;
                        if (n && n.hasAttribute("formAction")) {
                            if (u = n, i = n[Fl] || null) c = i.formAction;
                            else if ( of (u) !== null) continue
                        } else c = i.action;
                        typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3), e -= 3), O1(a)
                    }
                }
        }

        function x1() {
            function l(n) {
                n.canIntercept && n.info === "react-transition" && n.intercept({
                    handler: function() {
                        return new Promise(function(i) {
                            return u = i
                        })
                    },
                    focusReset: "manual",
                    scroll: "manual"
                })
            }

            function t() {
                u !== null && (u(), u = null), e || setTimeout(a, 20)
            }

            function a() {
                if (!e && !navigation.transition) {
                    var n = navigation.currentEntry;
                    n && n.url != null && navigation.navigate(n.url, {
                        state: n.getState(),
                        info: "react-transition",
                        history: "replace"
                    })
                }
            }
            if (typeof navigation == "object") {
                var e = !1,
                    u = null;
                return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100),
                    function() {
                        e = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null)
                    }
            }
        }

        function hf(l) {
            this._internalRoot = l
        }
        Bn.prototype.render = hf.prototype.render = function(l) {
            var t = this._internalRoot;
            if (t === null) throw Error(y(409));
            var a = t.current,
                e = mt();
            S1(a, e, l, t, null, null)
        }, Bn.prototype.unmount = hf.prototype.unmount = function() {
            var l = this._internalRoot;
            if (l !== null) {
                this._internalRoot = null;
                var t = l.containerInfo;
                S1(l.current, 2, null, l, null, null), pn(), t[Za] = null
            }
        };

        function Bn(l) {
            this._internalRoot = l
        }
        Bn.prototype.unstable_scheduleHydration = function(l) {
            if (l) {
                var t = Yf();
                l = {
                    blockedOn: null,
                    target: l,
                    priority: t
                };
                for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++);
                ba.splice(a, 0, l), a === 0 && _1(l)
            }
        };
        var D1 = P.version;
        if (D1 !== "19.2.8") throw Error(y(527, D1, "19.2.8"));
        A.findDOMNode = function(l) {
            var t = l._reactInternals;
            if (t === void 0) throw typeof l.render == "function" ? Error(y(188)) : (l = Object.keys(l).join(","), Error(y(268, l)));
            return l = z(t), l = l !== null ? H(l) : null, l = l === null ? null : l.stateNode, l
        };
        var zh = {
            bundleType: 0,
            version: "19.2.8",
            rendererPackageName: "react-dom",
            currentDispatcherRef: S,
            reconcilerVersion: "19.2.8"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!Gn.isDisabled && Gn.supportsFiber) try {
                De = Gn.inject(zh), nt = Gn
            } catch {}
        }
        return Oe.createRoot = function(l, t) {
            if (!J(l)) throw Error(y(299));
            var a = !1,
                e = "",
                u = qs,
                n = js,
                i = Ys;
            return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = g1(l, 1, !1, null, null, a, e, null, u, n, i, x1), l[Za] = t.current, Jc(l), new hf(t)
        }, Oe.hydrateRoot = function(l, t, a) {
            if (!J(l)) throw Error(y(299));
            var e = !1,
                u = "",
                n = qs,
                i = js,
                c = Ys,
                f = null;
            return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = g1(l, 1, !0, t, a ? ? null, e, u, f, n, i, c, x1), t.context = p1(null), a = t.current, e = mt(), e = ti(e), u = na(e), u.callback = null, ia(a, u, e), a = e, t.current.lanes = a, Ce(t, a), Ct(t), l[Za] = t.current, Jc(l), new Bn(t)
        }, Oe.version = "19.2.8", Oe
    }
    var Ef;

    function B1() {
        if (Ef) return Xn.exports;
        Ef = 1;

        function g() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)
            } catch (P) {
                console.error(P)
            }
        }
        return g(), Xn.exports = Y1(), Xn.exports
    }
    var G1 = B1(),
        Cl = Vn();
    const Q1 = "#ff9100",
        X1 = ["ar", "fa", "he", "ur", "he-IL"],
        Z1 = () => {
            const [g, P] = Cl.useState(!1);
            return Cl.useEffect(() => {
                const j = () => {
                        let J = !1;
                        return (function(ll) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ll) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ll.substr(0, 4))) && (J = !0)
                        })(navigator.userAgent || navigator.vendor || window.opera), J
                    },
                    y = () => window.innerWidth <= 800 && window.innerHeight <= 600;
                P(j() || y())
            }, []), {
                isMobile: g,
                isDesktop: !g
            }
        },
        L1 = g => {
            const [P, j] = Cl.useState(!1);
            return Cl.useEffect(() => {
                var z;
                const y = () => {
                    const {
                        pathname: H
                    } = window.location, D = {
                        Homepage: /^\/$/,
                        Collection: /^\/collections\//,
                        Product: /^\/products\//,
                        Cart: /^\/cart$/,
                        Blog: /^\/blogs\//,
                        About: /^\/about$/,
                        Contact: /contact/i,
                        Faqs: /^\/pages\/faqs$/,
                        FrequentlyAskedQuestions: /^\/pages\/frequently-asked-questions$/
                    };
                    for (const [Z, zl] of Object.entries(D))
                        if (zl.test(H)) return Z;
                    return null
                };
                if (!g) {
                    j(!1);
                    return
                }
                const J = y(),
                    ll = !(g != null && g.hasShowOnThesePages) || !!J && ((z = g.showOnThesePages) == null ? void 0 : z.includes(J)),
                    nl = window.location.href,
                    ml = (g.customPageUrls || "").split(",").map(H => H.trim()).filter(Boolean),
                    M = g.hasCustomPageUrls ? ml.some(H => nl.includes(H)) : !1;
                j(!!(ll || M))
            }, [g]), {
                isValidPage: P
            }
        },
        Af = "https://widget-view.dondy.net/api",
        w1 = async g => (await fetch(`${Af}/reports`, {
            method: "POST",
            body: JSON.stringify(g),
            headers: {
                "Content-Type": "application/json"
            }
        })).json(),
        V1 = async g => (await fetch(`${Af}/WhatsAppWidgetsView/${g}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })).json();
    var J1 = {};
    const _f = () => {
            const [g, P] = Cl.useState(null), {
                isMobile: j,
                isDesktop: y
            } = Z1(), {
                isValidPage: J
            } = L1(g), [ll, nl] = Cl.useState(!1), [ml, M] = Cl.useState(!1);
            Cl.useEffect(() => {
                var F;
                (async () => {
                    var pl;
                    try {
                        const vl = (pl = window.Shopify) == null ? void 0 : pl.shop,
                            G = await V1(vl);
                        P(G)
                    } catch (vl) {
                        console.error("Failed to load widget details:", vl)
                    }
                })();
                const X = (F = window.Shopify) == null ? void 0 : F.locale;
                X1.includes(X) && nl(!0)
            }, []), Cl.useEffect(() => {
                if (!g) return;
                const tl = g.widgetDisplayDelay;
                if (!tl || tl <= 0) {
                    M(!0);
                    return
                }
                let X;
                const F = () => {
                    X = setTimeout(() => M(!0), tl * 1e3)
                };
                return document.readyState === "complete" ? F() : window.addEventListener("load", F, {
                    once: !0
                }), () => {
                    window.removeEventListener("load", F), clearTimeout(X)
                }
            }, [g]);
            const z = async (tl = "click_chat") => {
                    var F;
                    const X = ((F = window.Shopify) == null ? void 0 : F.shop) || J1.VITE_OVERRIDE_SHOP_DOMAIN;
                    if (X) try {
                        const pl = !Z();
                        await w1({
                            shopDomain: "https://" + X,
                            eventType: tl,
                            isUnique: pl
                        })
                    } catch (pl) {
                        console.error("Error:", pl)
                    }
                },
                H = async () => {
                    await z("chat_window_opened")
                },
                D = async () => {
                    await z("click_chat")
                },
                Z = () => localStorage.getItem("chatClicked") ? !0 : (localStorage.setItem("chatClicked", "true"), !1),
                zl = tl => {
                    if (!(g != null && g.phoneNumber)) return "";
                    let X = `https://wa.me/${g.phoneNumber}?text=`;
                    !j && g.whatsAppDesktop === !1 && (X = `https://web.whatsapp.com/send?phone=${g.phoneNumber}&text=`);
                    const F = window.location.href.split("?")[0],
                        pl = g.AddPageURL ? encodeURIComponent(F) : "",
                        vl = tl === void 0 ? g.prefilledMessage : tl;
                    return vl && pl ? `${X}${encodeURIComponent(vl)}%0A%0A${pl}` : `${X}${encodeURIComponent(vl)}${pl}`
                },
                Ml = tl => {
                    var Ql;
                    if (!((Ql = tl == null ? void 0 : tl.timeZone) != null && Ql.value) || !tl.hoursRange) return !1;
                    const X = tl.timeZone.value,
                        F = new Date,
                        pl = new Intl.DateTimeFormat("en-US", {
                            timeZone: X,
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: !1
                        }).format(F),
                        [vl, G] = pl.split(":"),
                        jl = `${vl.padStart(2,"0")}:${G.padStart(2,"0")}`,
                        K = new Intl.DateTimeFormat("en-US", {
                            timeZone: X,
                            weekday: "long"
                        }).format(F).toLowerCase(),
                        Kl = tl.hoursRange[`${K}From`],
                        Wl = tl.hoursRange[`${K}To`];
                    return !Kl || !Wl ? !1 : jl >= Kl && jl <= Wl
                },
                yl = (() => {
                    if (!(g != null && g.phoneNumber) || !ml || g.customHours && g.hasCustomHours && !Ml(g.customHours) || !J) return !1;
                    const {
                        showWidgetOnSelectedDevice: tl
                    } = g;
                    switch (tl) {
                        case "Phone":
                            return j;
                        case "Desktop":
                            return y;
                        case "Both":
                        default:
                            return !0
                    }
                })(),
                Ol = (g == null ? void 0 : g.WidgetSize) || "60px",
                El = (g == null ? void 0 : g.chatSide) || "right";
            return {
                widgetDetails: g,
                getWhatsAppLink: zl,
                isVisible: yl,
                handleClick: z,
                handleChatWindowOpened: H,
                handleChatClick: D,
                position: El,
                widgetSize: Ol,
                showRTL: ll
            }
        },
        Mf = Cl.createContext(void 0),
        K1 = ({
            children: g
        }) => {
            const [P, j] = Cl.useState(() => {
                const M = localStorage.getItem("chatMessages");
                return M ? JSON.parse(M) : []
            }), [y, J] = Cl.useState(""), [ll, nl] = Cl.useState(!1), ml = async M => {
                const z = {
                        text: M,
                        type: "user"
                    },
                    H = [...P, z];
                try {
                    nl(!0), j(H), localStorage.setItem("chatMessages", JSON.stringify(H)), J("");
                    const yl = {
                            text: (await (await fetch("https://cdn.chatbot.com/widget/api/v2/chat", {
                                method: "POST",
                                headers: {
                                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2ODE0OTg3MzZhYmJlNTAwMDc5NzQyNGMiLCJvcmciOiI1Y2E3MTk0MmQwNDJlYjAwMDc2NTJlZjIiLCJzY29wZSI6ImNoYXQiLCJtZXRhIjp7InNvdXJjZSI6Im9wZW53aWRnZXQiLCJzdG9yeUlkIjoiNjFmMjg0NTFmZGQ3YzUwMDA3MjhiNGY2Iiwic2lkIjoiN2YzZmI1YjAtYzY2ZS00ZGE5LWIyNzAtODhiZWJiOTQ2NGJkIn0sImlhdCI6MTc0NjE4MDIxMSwiZXhwIjoxNzQ2MjA5MDExLCJhdWQiOiJhcGkuY2hhdGJvdC5jb20iLCJpc3MiOiJhcGkuY2hhdGJvdC5jb20iLCJqdGkiOiJiYzM0Y2NjZi0xNjIzLTRkN2ItOTk4OS0yYzA3ZjRlNzIzODYifQ.QF0Ih-s_bhfu5mo41dNtyrsLLqifjWuXrl7oHuYE4_E",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    inputType: "MESSAGE",
                                    inputValue: M
                                })
                            })).json()).responses.find(El => El.type === "BOT_RESPONSE").responses[0].message || "Sorry, I could not process that.",
                            type: "reply"
                        },
                        Ol = [...H, yl];
                    j(Ol), localStorage.setItem("chatMessages", JSON.stringify(Ol))
                } catch (D) {
                    console.error("Error sending message:", D);
                    const Z = {
                            text: "Sorry, something went wrong.",
                            type: "reply"
                        },
                        zl = [...H, Z];
                    j(zl), localStorage.setItem("chatMessages", JSON.stringify(zl))
                } finally {
                    nl(!1)
                }
            };
            return $.jsx(Mf.Provider, {
                value: {
                    messages: P,
                    input: y,
                    isTyping: ll,
                    setInput: J,
                    sendMessage: ml
                },
                children: g
            })
        };

    function W1() {
        const g = Cl.useContext(Mf);
        if (g === void 0) throw new Error("useChatContext must be used within a ChatProvider");
        return g
    }
    const k1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2010.586L16.95%205.63599L18.364%207.04999L13.414%2012L18.364%2016.95L16.95%2018.364L12%2013.414L7.04999%2018.364L5.63599%2016.95L10.586%2012L5.63599%207.04999L7.04999%205.63599L12%2010.586Z'%20fill='white'%3e%3c/path%3e%3c/svg%3e",
        Of = "data:image/svg+xml,%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20122.88%20122.88'%20style='enable-background:new%200%200%20122.88%20122.88'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:rgb(255,145,0);}%20/*%20formerly%20%231A73E8%20*/%20.st1{fill:%23185ABC;}%20/*%20unchanged%20*/%20.st2{fill:%23FFFFFF;}%20/*%20white%20stays%20the%20same%20*/%20.st3{fill:rgb(255,187,98);}%20/*%20formerly%20%238AB4F8%20*/%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M122.88,61.41C122.88,27.49,95.39,0,61.47,0S0.06,27.49,0.06,61.41s27.49,61.41,61.41,61.41%20S122.88,95.32,122.88,61.41L122.88,61.41z'/%3e%3cpath%20class='st1'%20d='M83.82,87.93H41.97c-5.95,0-11.14-4.49-11.14-10.45v-0.06v3.48c0,5.95,5.19,11.14,11.14,11.14h41.85%20c6.01,0,11.14-5.25,11.14-11.14v-3.48C94.96,83.38,89.77,87.93,83.82,87.93L83.82,87.93L83.82,87.93z%20M30.77,57.93v-4.75%20l-7.79-12.85c-0.44-0.7-0.63-1.33-0.57-1.96v5.44c0,0.51,0.19,1.01,0.51,1.58L30.77,57.93L30.77,57.93z'/%3e%3cpath%20class='st2'%20d='M83.82,36.28H25.2c-2.34,0-3.67,2.03-2.09,4.18l7.66,13.29v23.74c0,6.08,4.43,11.14,10.45,11.14h42.54%20c6.01,0,11.14-5.13,11.14-11.14V47.48C94.96,41.4,89.83,36.28,83.82,36.28L83.82,36.28z'/%3e%3cpath%20class='st3'%20d='M83.12,53.05H42.67c-1.77,0-3.48-1.08-3.48-2.79c0-1.71,1.71-2.79,3.48-2.79h40.45c1.77,0,3.48,1.08,3.48,2.79%20C86.6,51.98,84.9,53.05,83.12,53.05L83.12,53.05L83.12,53.05z%20M83.12,64.19H42.67c-1.77,0-3.48-1.08-3.48-2.79%20c0-1.71,1.71-2.79,3.48-2.79h40.45c1.77,0,3.48,1.08,3.48,2.79C86.6,63.12,84.9,64.19,83.12,64.19L83.12,64.19L83.12,64.19z%20M71.92,75.4H42.61c-1.77,0-3.48-1.08-3.48-2.79c0-1.71,1.71-2.79,3.48-2.79h29.31c1.77,0,3.48,1.08,3.48,2.79%20C75.4,74.32,73.69,75.4,71.92,75.4L71.92,75.4z'/%3e%3cpath%20class='st1'%20d='M122.88,61.09c-0.13,26.91-17.66,49.76-41.85,57.86c-6.14,2.09-12.72,3.17-19.56,3.17%20c-33.81,0-61.22-27.29-61.41-61.03v0.38c0,33.93,27.48,61.41,61.41,61.41c6.84,0,13.42-1.14,19.56-3.17%20c24.31-8.17,41.85-31.15,41.85-58.24V61.09L122.88,61.09z'/%3e%3cpath%20class='st3'%20d='M80.97,3.17C74.83,1.08,68.25,0,61.41,0C27.48,0,0,27.48,0,61.41v0.38C0.19,28.04,27.6,0.76,61.41,0.76%20c6.84,0,13.42,1.14,19.56,3.17c24.25,8.1,41.72,30.96,41.85,57.86v-0.38C122.88,34.31,105.34,11.33,80.97,3.17L80.97,3.17z'/%3e%3c/g%3e%3c/svg%3e",
        $1 = "data:image/svg+xml,%3csvg%20preserveAspectRatio='xMidYMid%20meet'%20data-bbox='0%200%20358.751%20106'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20358.751%20106'%20height='106'%20width='359'%20data-type='color'%20role='presentation'%20aria-hidden='true'%20aria-label=''%3e%3cg%3e%3cpath%20fill='%23DD7C15'%20d='M53.452%205.074Q44.38.154%2032.246.155H0v77.39h32.246q12.134%200%2021.206-5.027%209.182-5.138%2014.1-13.992%204.92-8.854%204.92-19.894%200-11.15-4.92-19.894-4.918-8.745-14.1-13.664m2.703%2033.777c0%2011.738-9.516%2021.254-21.254%2021.254a21.2%2021.2%200%200%201-6.763-1.098l-15.24%206.236%203.968-15.14a21.16%2021.16%200%200%201-3.22-11.252c0-11.739%209.516-21.255%2021.255-21.255s21.254%209.516%2021.254%2021.255'%20clip-rule='evenodd'%20fill-rule='evenodd'%20data-color='1'%3e%3c/path%3e%3cpath%20fill='%23DD7C15'%20d='M112.446%2078.894q-8.649%200-15.61-3.692-6.856-3.692-10.864-10.547-3.903-6.856-3.902-16.032%200-9.07%204.008-15.926%204.007-6.962%2010.969-10.653t15.61-3.692%2015.61%203.692q6.96%203.69%2010.969%2010.653%204.008%206.855%204.008%2015.926t-4.114%2016.032q-4.008%206.855-11.074%2010.547-6.961%203.692-15.61%203.692m0-15.61q5.168%200%208.754-3.797%203.691-3.798%203.691-10.864t-3.586-10.864q-3.48-3.797-8.648-3.797-5.274%200-8.755%203.797-3.48%203.692-3.48%2010.864%200%207.066%203.375%2010.864%203.48%203.796%208.649%203.797'%20data-color='1'%3e%3c/path%3e%3cpath%20fill='%23DD7C15'%20d='M189.727%2018.563q10.337%200%2016.454%206.75%206.223%206.645%206.223%2018.353V78.05h-17.93V46.092q0-5.907-3.059-9.177-3.058-3.27-8.227-3.27-5.168%200-8.227%203.27-3.058%203.27-3.058%209.177V78.05h-18.036V19.196h18.036v7.805q2.742-3.902%207.383-6.117%204.64-2.32%2010.441-2.32'%20data-color='1'%3e%3c/path%3e%3cpath%20fill='%23DD7C15'%20d='M222.406%2048.517q0-9.07%203.375-15.926%203.48-6.855%209.387-10.547%205.906-3.692%2013.184-3.692%205.8%200%2010.547%202.426%204.852%202.426%207.594%206.54V0h18.036v78.05h-18.036v-8.438q-2.53%204.22-7.277%206.75-4.64%202.532-10.864%202.532-7.278%200-13.184-3.692-5.907-3.796-9.387-10.653-3.375-6.96-3.375-16.032m44.087.106q0-6.75-3.797-10.653-3.691-3.902-9.07-3.902t-9.176%203.902q-3.692%203.797-3.692%2010.547t3.692%2010.759q3.797%203.902%209.176%203.902t9.07-3.902q3.798-3.903%203.797-10.653'%20data-color='1'%3e%3c/path%3e%3cpath%20fill='%23DD7C15'%20d='M358.751%2019.196%20321.836%20106h-19.407l13.501-29.954-23.943-56.85h20.146l13.606%2036.81%2013.5-36.81z'%20data-color='1'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",
        F1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='white'%3e%3cpath%20d='M2%2021l21-9L2%203v7l15%202-15%202v7z'/%3e%3c/svg%3e",
        I1 = ({
            onClose: g,
            chatColor: P,
            position: j,
            shouldAdjustHeight: y,
            chatTheme: J,
            prefilledMessage: ll,
            hideBranding: nl,
            welcomeMessage: ml,
            onMessageSent: M
        }) => {
            const {
                messages: z,
                input: H,
                isTyping: D,
                setInput: Z,
                sendMessage: zl
            } = W1(), Ml = ml ? [{
                text: ml,
                type: "reply"
            }, ...z] : z, yl = Cl.useRef(null), Ol = Cl.useRef(null), [El, tl] = Cl.useState(!1), {
                getWhatsAppLink: X,
                showRTL: F
            } = _f();
            Cl.useEffect(() => {
                const K = document.getElementById("whatsapp-link");
                return K && (K.style.display = "none"), ll && Z(ll), () => {
                    K && (K.style.display = "flex")
                }
            }, []), Cl.useEffect(() => {
                y && pl()
            }, [y]);
            const pl = () => {
                    setTimeout(() => {
                        var K;
                        yl.current && (yl.current.scrollTop = yl.current.scrollHeight), (K = Ol.current) == null || K.focus()
                    }, 100)
                },
                vl = async () => {
                    const K = H.trim(),
                        Kl = X(K);
                    window.open(Kl, "_blank"), M && M()
                },
                G = () => {
                    tl(!0), setTimeout(() => {
                        g()
                    }, 200)
                },
                jl = () => J === "whatsapp" ? "whatsapp-theme" : "";
            return $.jsxs("div", {
                className: `chat-window ${El?"closing":""} ${jl()}`,
                style: {
                    position: "fixed",
                    bottom: "20px",
                    [j]: "20px"
                },
                children: [$.jsxs("div", {
                    className: "chat-header",
                    style: {
                        backgroundColor: P
                    },
                    children: [$.jsx("span", {
                        children: "WhatsApp"
                    }), $.jsx("button", {
                        className: "d-widget-close-btn",
                        style: {
                            minWidth: "24px",
                            minHeight: "24px"
                        },
                        onClick: G,
                        children: $.jsx("img", {
                            src: k1,
                            alt: "Close"
                        })
                    })]
                }), $.jsxs("div", {
                    className: "chat-messages",
                    ref: yl,
                    children: [Ml.map((K, Kl) => $.jsxs("div", {
                        className: `message ${K.type}`,
                        style: K.type === "user" ? {
                            backgroundColor: P
                        } : void 0,
                        children: [K.type === "reply" && $.jsx("img", {
                            src: Of,
                            alt: "Bot",
                            className: "bot-avatar"
                        }), K.text]
                    }, Kl)), D && $.jsxs("div", {
                        className: "message reply",
                        children: [$.jsx("img", {
                            src: Of,
                            alt: "Bot",
                            className: "bot-avatar"
                        }), $.jsxs("div", {
                            className: "typing-indicator",
                            children: [$.jsx("span", {}), $.jsx("span", {}), $.jsx("span", {})]
                        })]
                    })]
                }), $.jsxs("div", {
                    className: "chat-input",
                    children: [$.jsx("input", {
                        ref: Ol,
                        type: "text",
                        value: H,
                        disabled: D,
                        style: {
                            maxHeight: "40px"
                        },
                        onChange: K => Z(K.target.value),
                        onKeyDown: K => K.key === "Enter" && vl(),
                        dir: F ? "rtl" : "ltr",
                        onBlur: K => {
                            var Kl, Wl;
                            K.relatedTarget && !((Kl = K.currentTarget.closest(".chat-window")) != null && Kl.contains(K.relatedTarget)) && ((Wl = Ol.current) == null || Wl.focus())
                        }
                    }), $.jsx("button", {
                        onClick: vl,
                        style: {
                            backgroundColor: P,
                            padding: "1px 0px"
                        },
                        children: $.jsx("img", {
                            src: F1,
                            alt: "Send"
                        })
                    })]
                }), $.jsx("div", {
                    className: "powered-by",
                    children: !nl && $.jsxs($.Fragment, {
                        children: ["Powered by", $.jsx("div", {
                            children: $.jsx("img", {
                                src: $1,
                                alt: "Dondy",
                                style: {
                                    cursor: "pointer",
                                    maxHeight: "16px",
                                    minHeight: "16px",
                                    height: "16px",
                                    width: "auto",
                                    objectFit: "contain",
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginLeft: "10px",
                                    marginRight: "10px"
                                },
                                onClick: () => window.open("https://dondy.net", "_blank")
                            })
                        })]
                    })
                })]
            })
        },
        P1 = () => {
            var yl, Ol, El, tl;
            const {
                widgetDetails: g,
                getWhatsAppLink: P,
                isVisible: j,
                handleClick: y,
                handleChatWindowOpened: J,
                handleChatClick: ll,
                position: nl,
                widgetSize: ml
            } = _f(), [M, z] = Cl.useState(!1), H = ((yl = g == null ? void 0 : g.chatWindow) == null ? void 0 : yl.enabled) || !1;
            if (!g) return null;
            const D = {
                "--whatsapp-link-width": ml,
                "--whatsapp-link-height": ml
            };
            console.log("With new chat widget");
            const Z = ["left", "upper-left", "mid-upper-left"].includes(nl),
                zl = () => {
                    const X = g.WhatsAppIconSvg;
                    X || console.log("No icon svg");
                    const F = g.TextBesideTheIcon;
                    return F ? (console.log("text", F), $.jsxs("div", {
                        style: D,
                        className: "whatsapp-flex-container",
                        children: [Z && $.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: X
                            }
                        }), $.jsx("span", {
                            className: "whatsapp-text",
                            children: F
                        }), !Z && $.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: X
                            }
                        })]
                    })) : (console.log("No text"), $.jsx("div", {
                        style: D,
                        dangerouslySetInnerHTML: {
                            __html: X
                        }
                    }))
                },
                Ml = X => {
                    H ? (X.preventDefault(), z(F => !F), J()) : y()
                };
            return j && $.jsxs("div", {
                id: "chat-bubble",
                className: `whatsapp-widget whatsapp-widget-${nl} whatsapp-widget-visible`,
                "aria-label": "Open WhatsApp chat",
                children: [$.jsx("a", {
                    id: "whatsapp-link",
                    href: P(),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: Ml,
                    "aria-label": "Send a message via WhatsApp",
                    style: {
                        position: "relative"
                    },
                    children: zl()
                }), H && $.jsx("div", {
                    className: `chat-fade-wrapper ${M?"open":"closing"}`,
                    "data-position": nl,
                    children: M && $.jsx(K1, {
                        children: $.jsx(I1, {
                            onClose: () => z(!1),
                            chatColor: Q1,
                            position: Z ? "left" : "right",
                            shouldAdjustHeight: M,
                            chatTheme: (Ol = g == null ? void 0 : g.chatWindow) == null ? void 0 : Ol.theme,
                            prefilledMessage: g == null ? void 0 : g.prefilledMessage,
                            hideBranding: (El = g == null ? void 0 : g.chatWindow) == null ? void 0 : El.hideBranding,
                            welcomeMessage: (tl = g == null ? void 0 : g.chatWindow) == null ? void 0 : tl.welcomeMessage,
                            onMessageSent: ll
                        })
                    })
                })]
            })
        },
        Kn = document.createElement("div");
    Kn.id = "whatsapp-widget-root", document.body.appendChild(Kn), G1.createRoot(Kn).render($.jsx(P1, {}))
})();