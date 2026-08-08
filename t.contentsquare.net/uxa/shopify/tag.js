// 1.41.12-es2019 (built:es2019) 2026-08-06T08:03:25.515Z
(function() {
    "use strict";
    var Vo, vo, bo, yo, wt, wo, No, Co, Oo, Do, Mo, ko;
    let ei;
    const Hs = () => {
            if (!ei) {
                try {
                    const i = globalThis.performance;
                    if (i != null && typeof i.now == "function") return ei = i.now.bind(i), ei()
                } catch {}
                ei = () => Date.now()
            }
            return ei()
        },
        uc = () => {
            try {
                if (typeof scheduler != "undefined" && typeof scheduler.yield == "function") return scheduler.yield()
            } catch {}
            return new Promise(i => setTimeout(i, 0))
        };

    function Zt(i) {
        return Symbol(i)
    }
    const hc = 20,
        Kt = i => {
            var e;
            return ir(i) ? (e = i.name) != null ? e : "anonymous" : String(i)
        },
        ir = i => typeof i == "function" && i.prototype && i.prototype.constructor === i,
        _c = i => typeof i == "object" && i !== null && "__optional" in i,
        dc = i => {
            const e = i.prototype;
            return e != null && e.__module === !0
        },
        Ec = i => {
            var s, n;
            const e = i.prototype,
                t = (s = e.imports) != null ? s : [];
            return {
                providers: (n = e.providers) != null ? n : [],
                imports: t.filter(a => !!a),
                exports: e.exports
            }
        },
        fc = i => {
            var t;
            return ((t = i.prototype.imports) != null ? t : []).filter(s => !!s)
        },
        Tc = i => {
            const e = i;
            return e === String || e === Number || e === Boolean || e === Object || e === Array || e === Symbol || e === BigInt
        };
    class ii {
        constructor() {
            this.registrations = new Map, this.registeredModules = new Set, this.tokenModuleOwner = new Map, this.moduleExportSets = new Map, this.moduleRegistrations = new Map, this.moduleImportsList = new Map, this.lastYieldTime = 0, this.registrations.set(ii, {
                type: "factory",
                provider: () => this,
                token: ii,
                instance: this
            })
        }
        register(e, t, s) {
            if (ir(e)) {
                const n = t != null ? t : e,
                    a = {
                        type: "class",
                        provider: e,
                        token: n
                    };
                if (this.registrations.has(n)) throw new Error(`Token "${Kt(n)}" is already registered`);
                this.registrations.set(n, a), n !== e && this.registrations.set(e, a)
            } else {
                if (t === void 0) throw new Error("A token is required when registering a factory function");
                this.registrations.set(t, {
                    type: "factory",
                    provider: e,
                    token: t,
                    deps: s
                })
            }
        }
        override(e, t) {
            this.registrations.set(e, {
                type: "factory",
                provider: () => t,
                token: e,
                instance: t
            })
        }
        registerModule(e) {
            if (this.registeredModules.has(e)) return;
            this.registeredModules.add(e);
            const {
                providers: t,
                imports: s,
                exports: n
            } = Ec(e);
            for (const o of s) this.registerModule(o);
            this.moduleImportsList.set(e, s), n !== void 0 && this.moduleExportSets.set(e, new Set(n));
            const a = new Map;
            this.moduleRegistrations.set(e, a), a.set(e, {
                type: "class",
                provider: e,
                token: e
            }), this.tokenModuleOwner.set(e, e);
            for (const o of t) o && this.registerProviderInModule(e, a, o);
            this.checkForDuplicateExports(e, a, s)
        }
        checkForDuplicateExports(e, t, s) {
            for (const n of s) {
                const a = this.moduleRegistrations.get(n);
                if (a) {
                    for (const o of a.keys())
                        if (o !== n && this.isExportedFrom(n, o) && !this.registrations.has(o) && t.has(o)) throw new Error(`Duplicate provider: "${Kt(o)}" is provided by "${e.name}" and also exported by imported module "${n.name}". Remove it from one of them.`)
                }
            }
        }
        registerProviderInModule(e, t, s) {
            if (typeof s == "function") {
                const n = s;
                if (typeof n.useFactory == "function") s = {
                    provide: s.provide || s,
                    useFactory: n.useFactory.bind(n),
                    inject: n.inject
                };
                else {
                    t.set(s, {
                        type: "class",
                        provider: s,
                        token: s
                    }), this.tokenModuleOwner.set(s, e);
                    return
                }
            }
            if ("useClass" in s) {
                const n = s.provide,
                    a = {
                        type: "class",
                        provider: s.useClass,
                        token: n
                    };
                t.set(n, a), n !== s.useClass && (t.set(s.useClass, a), this.tokenModuleOwner.set(s.useClass, e)), this.tokenModuleOwner.set(n, e)
            } else if ("useValue" in s) {
                const n = s.provide;
                t.set(n, {
                    type: "factory",
                    provider: () => s.useValue,
                    token: n
                }), this.tokenModuleOwner.set(n, e)
            } else if ("useFactory" in s) {
                const n = s.provide;
                t.set(n, {
                    type: "factory",
                    provider: s.useFactory,
                    token: n,
                    deps: s.inject
                }), this.tokenModuleOwner.set(n, e)
            }
        }
        findRegistrationInScope(e, t) {
            const s = this.registrations.get(e);
            if (s) return {
                registration: s,
                owningModule: t
            };
            const n = this.moduleRegistrations.get(t);
            if (n != null && n.has(e)) return {
                registration: n.get(e),
                owningModule: t
            };
            const a = this.getModuleImports(t);
            for (const o of a)
                if (this.isExportedFrom(o, e)) {
                    const c = this.moduleRegistrations.get(o);
                    if (c != null && c.has(e)) return {
                        registration: c.get(e),
                        owningModule: o
                    };
                    const h = this.findRegistrationInScope(e, o);
                    if (h) return h
                }
        }
        isExportedFrom(e, t) {
            return this.moduleExportSets.has(e) ? this.moduleExportSets.get(e).has(t) : !0
        }
        getModuleImports(e) {
            var t;
            return (t = this.moduleImportsList.get(e)) != null ? t : []
        }
        async resolve(e) {
            this.lastYieldTime = Hs();
            const t = this.registrations.has(e) ? void 0 : this.tokenModuleOwner.get(e);
            return this.resolveInternal(e, new Set, t)
        }
        async resolveInternal(e, t, s) {
            if (e == null) return;
            if (t.has(e)) throw new Error(`Circular dependency detected for token: ${Kt(e)}`);
            const n = this.maybeYield();
            n && await n;
            let a, o = s;
            if (s) {
                const d = this.findRegistrationInScope(e, s);
                d && (a = d.registration, o = d.owningModule)
            } else a = this.registrations.get(e);
            if (a || this.throwNotFoundError(e, t, s), a.instance !== void 0) return a.instance;
            if (a.resolving) return a.resolving;
            t.add(e);
            const h = (async () => {
                var d, f;
                try {
                    let T;
                    if (a.type === "factory") {
                        const g = a.provider,
                            p = (d = a.deps) != null ? d : [],
                            A = await this.resolveDependencies(p, t, o);
                        T = await g(...A)
                    } else {
                        const g = a.provider,
                            p = (f = g.$deps) != null ? f : [];
                        await this.resolveImportedModules(g, t);
                        const A = await this.resolveDependencies(p, t, o);
                        T = new g(...A), await this.resolvePropertyDependencies(T, g, t, o), await this.callOnInit(T)
                    }
                    return a.instance = T, T
                } finally {
                    a.resolving = void 0, t.delete(e)
                }
            })();
            return a.resolving = h, h
        }
        async resolveDependencies(e, t, s) {
            const n = [];
            for (const a of e) {
                const o = this.maybeYield();
                o && await o;
                let c, h;
                if (_c(a) ? (c = a.__optional, h = !0) : (c = a, h = !1), Tc(c)) {
                    const f = Array.from(t).map(Kt).join(" -> "),
                        T = f ? `
Resolution path: ${f} -> ${Kt(c)}` : "";
                    throw new Error(`Cannot resolve primitive type: ${Kt(c)}. Use @Inject with a token instead.${T}`)
                }
                if (h && !(s ? this.findRegistrationInScope(c, s) !== void 0 : this.registrations.has(c))) {
                    n.push(void 0);
                    continue
                }
                const d = await this.resolveInternal(c, t, s);
                n.push(d)
            }
            return n
        }
        async resolveImportedModules(e, t) {
            if (!dc(e)) return;
            const s = fc(e);
            for (const n of s) {
                const a = this.maybeYield();
                a && await a, await this.resolveInternal(n, t, n)
            }
        }
        async resolvePropertyDependencies(e, t, s, n) {
            const a = t.$propDeps;
            if (a)
                for (const o of Object.keys(a)) {
                    const c = await this.resolveDependencies([a[o]], s, n);
                    e[o] = c[0]
                }
        }
        async callOnInit(e) {
            e !== null && typeof e == "object" && "onInit" in e && typeof e.onInit == "function" && await e.onInit()
        }
        throwNotFoundError(e, t, s) {
            const n = Kt(e),
                a = Array.from(t).map(Kt).join(" -> "),
                o = a ? `
Resolution path: ${a} -> ${n}` : "";
            if (s) {
                const c = this.getModuleImports(s);
                for (const d of c) {
                    const f = this.moduleRegistrations.get(d);
                    if (f != null && f.has(e)) throw new Error(`Module boundary violation: "${n}" is not exported from module "${d.name}". Add it to ${d.name}'s exports array to make it accessible.${o}`)
                }
                const h = this.tokenModuleOwner.get(e);
                if (h) throw new Error(`Module boundary violation: "${n}" is provided by "${h.name}" but "${s.name}" does not import "${h.name}".${o}`)
            }
            throw new Error(`No registration found for token: ${n}${o}`)
        }
        maybeYield() {
            if (Hs() - this.lastYieldTime >= hc) return this.lastYieldTime = Hs(), uc()
        }
        findRegistration(e) {
            var n;
            const t = this.registrations.get(e);
            if (t) return t;
            const s = this.tokenModuleOwner.get(e);
            if (s) return (n = this.moduleRegistrations.get(s)) == null ? void 0 : n.get(e)
        }
        getDeps(e) {
            var s, n;
            const t = this.findRegistration(e);
            return t ? t.type === "class" ? (s = t.provider.$deps) != null ? s : [] : (n = t.deps) != null ? n : [] : []
        }
        has(e) {
            return this.registrations.has(e) ? !0 : this.tokenModuleOwner.has(e)
        }
        async bootModules() {
            var n, a;
            const e = new Set,
                t = [],
                s = o => {
                    if (!e.has(o)) {
                        e.add(o);
                        for (const c of this.getModuleImports(o)) s(c);
                        t.push(o)
                    }
                };
            for (const o of this.registeredModules) s(o);
            for (const o of t) {
                const c = this.maybeYield();
                c && await c;
                const h = (a = (n = this.moduleRegistrations.get(o)) == null ? void 0 : n.get(o)) == null ? void 0 : a.instance;
                h != null && typeof h == "object" && "onBootstrap" in h && typeof h.onBootstrap == "function" && await h.onBootstrap()
            }
        }
    }

    function Z(i) {
        return e => (e.prototype.__module = !0, i.providers && (e.prototype.providers = i.providers), i.imports && (e.prototype.imports = i.imports), i.exports && (e.prototype.exports = i.exports), e)
    }

    function gc(i, e) {
        return {
            provide: i,
            useClass: e
        }
    }

    function Et(i, e, t) {
        return t ? {
            provide: i,
            useFactory: e,
            inject: t
        } : {
            provide: i,
            useFactory: e
        }
    }
    const qi = typeof window == "undefined",
        de = globalThis;

    function Rc() {
        var s, n;
        const i = (s = document.getElementsByTagName("cs-native-frame-holder")[0]) != null ? s : document.createElement("cs-native-frame-holder");
        if (i.contentWindow && i.isConnected) return i.contentWindow;
        i.setAttribute("hidden", "");
        const e = ((n = i.attachShadow) == null ? void 0 : n.call(i, {
            mode: "closed"
        })) || i;
        e.innerHTML = '<iframe id="cs-native-frame" title="Intentionally blank" hidden sandbox="allow-same-origin"></iframe>';
        const t = e.firstElementChild;
        return (document.head || document.body).appendChild(i), i.contentWindow = t.contentWindow, i.contentWindow
    }

    function pc(i) {
        if (!i.document || typeof i.setTimeout != "function") throw new Error("Pure window is missing expected APIs")
    }
    const sr = (() => {
        if (qi) return de;
        try {
            const i = Rc();
            return pc(i), i
        } catch (i) {
            return nr("Warning", `failed to copy references from pure iframe: ${i.message}`), de
        }
    })();

    function nr(i, e) {
        de.CSProtectnativeFunctionsLogs = de.CSProtectnativeFunctionsLogs || {}, de.CSProtectnativeFunctionsLogs[i] = e
    }

    function Gi(i) {
        if (qi) return de[i];
        try {
            return sr[i]
        } catch (e) {
            return nr("Warning", `Failed to access global property ${i} from pure window: ${e.message}`), de[i]
        }
    }
    const mc = {
        Element: 1,
        Document: 9,
        DocumentFragment: 11
    };

    function rr(i, e) {
        var t;
        try {
            const s = (t = sr[i]) == null ? void 0 : t.prototype;
            return s ? Object.getOwnPropertyDescriptor(s, e) : void 0
        } catch {
            return
        }
    }
    const ar = qi || (Vo = rr("Node", "nodeType")) == null ? void 0 : Vo.get;

    function Ic(i) {
        try {
            return ar ? ar.call(i) : i.nodeType
        } catch {
            return
        }
    }

    function Ac(i, e) {
        const t = [];
        if (!qi)
            for (let a = 0; a < i.length; a++) t[a] = rr(i[a], e);

        function s(a) {
            if (t.length < 2) return t[0];
            const o = Ic(a);
            for (let c = 0; c < i.length; c++)
                if (mc[i[c]] === o) return t[c]
        }
        const n = (...a) => [n, a];
        return n.g = a => {
            const o = s(a);
            if (!o) return a[e];
            try {
                return o.get ? o.get.call(a) : o.value
            } catch {
                return a[e]
            }
        }, n.s = (a, o) => {
            const c = s(a);
            if (c != null && c.set) {
                try {
                    c.set.call(a, o)
                } catch {
                    a[e] = o
                }
                return
            }
            a[e] = o
        }, n.c = (a, o) => n.g(a).apply(a, o), n
    }
    const Bi = 0;

    function I(i, ...e) {
        let t = i;
        for (let s = 0; s < e.length; s++) {
            const n = e[s];
            if (n === Bi) {
                if (t == null) return
            } else typeof n == "function" ? t = n.g(t) : typeof n == "string" ? t = t[n] : t = n[0].c(t, n[1])
        }
        return t
    }
    const Qt = (...i) => e => Ac(i, e),
        Lt = Gi("JSON"),
        Pc = Gi("URL"),
        Ee = Gi("RegExp"),
        or = Gi("screen");
    let z = Qt("Node");
    const si = z("nodeType"),
        qs = z("parentNode"),
        Sc = z("nextSibling"),
        cr = z("parentElement");
    z = Qt("Element", "Document", "DocumentFragment");
    const lr = z("querySelectorAll");
    z = Qt("Element");
    const ke = z("shadowRoot"),
        Vc = z("matches"),
        vc = z("matchesSelector"),
        bc = z("mozMatchesSelector"),
        yc = z("msMatchesSelector"),
        wc = z("oMatchesSelector"),
        Nc = z("webkitMatchesSelector"),
        Cc = z("getAttribute"),
        W = z("localName");
    z = Qt("HTMLImageElement"), z = Qt("Array");
    const xe = z("filter"),
        it = z("push"),
        ur = z("pop"),
        Oc = z("shift"),
        Dc = z("splice"),
        Mc = z("indexOf"),
        Jt = z("map");
    z = Qt("String");
    const ni = z("indexOf"),
        Gs = z("slice"),
        Bs = z("split"),
        kc = z("trim"),
        Le = z("replace");
    z = Qt("Navigator"), z = Qt("Event");
    const k = (() => {
        class i {
            static init(t) {
                this.maxScrollRateService = t
            }
            static getDocumentHeight() {
                return Math.max(this.windowHeight, this.htmlScrollHeight, this.htmlClientHeight)
            }
            static updateFromContext(t) {
                this.windowWidth = t.window.innerWidth, this.windowHeight = t.window.innerHeight, this.screenWidth = t.window.screen.width, this.screenHeight = t.window.screen.height, this.documentWidth = t.window.outerWidth, this.documentReferrer = t.document.referrer, this.documentTitle = t.document.title, this.documentUrl = t.document.location.href, this.language = t.navigator.language, this.location = t.window.location, this.pageXOffset = t.window.pageXOffset, this.pageYOffset = t.window.pageYOffset
            }
            static updateDimensionsFromHtmlNode(t) {
                var s, n, a;
                this.htmlClientHeight = ((s = t.clientRect) === null || s === void 0 ? void 0 : s.height) || 0, this.htmlScrollHeight = ((n = t.scroll) === null || n === void 0 ? void 0 : n.height) || 0, this.pageYOffset = ((a = t.scroll) === null || a === void 0 ? void 0 : a.y) || 0, this.maxScrollRateService && this.maxScrollRateService.updateMaxScrollRate(this.getDocumentHeight(), this.windowHeight, this.pageYOffset)
            }
            static isCurrentPageCheckout() {
                return I(i.location.pathname, ni("/checkouts")) > -1 && I(i.location.pathname, ni("/processing")) === -1
            }
        }
        return i.windowWidth = 0, i.windowHeight = 0, i.htmlClientHeight = 0, i.htmlScrollHeight = 0, i
    })();

    function Ys(i) {
        return {
            debug(...e) {
                i.debug(...e)
            },
            warn(...e) {
                i.warn(...e)
            },
            error(e, ...t) {
                i.error(e, ...t)
            },
            critical(e, ...t) {
                const s = i.critical;
                s ? s.call(i, e, ...t) : i.error(e, ...t)
            }
        }
    }
    let ri = Ys(console);

    function xc(i) {
        ri = Ys(i)
    }

    function hr(i, e) {
        var t;
        return e instanceof Error ? `${i}
Caused by: ${e.message}
${(t=e.stack)!=null?t:""}` : `${i}: ${String(e)}`
    }

    function ai(i) {
        let e;

        function t(a) {
            if (!i) return a;
            const o = a instanceof Error ? a.message : a;
            return `[${i}] ${o}`
        }
        const s = {
            debug(...a) {
                const [o, ...c] = a;
                (e != null ? e : ri).debug(...i && typeof o == "string" ? [t(o), ...c] : a)
            },
            warn(...a) {
                const [o, ...c] = a;
                (e != null ? e : ri).warn(...i && typeof o == "string" ? [t(o), ...c] : a)
            },
            error(a, ...o) {
                const c = e != null ? e : ri,
                    [h, ...d] = o,
                    f = t(a);
                if (h != null && typeof h != "string") {
                    const T = typeof f == "string" ? f : f.message;
                    c.error(hr(T, h))
                } else h !== void 0 ? c.error(f, h, ...d) : c.error(f)
            },
            critical(a, ...o) {
                const c = e != null ? e : ri,
                    [h, ...d] = o,
                    f = t(a);
                if (h != null && typeof h != "string") {
                    const T = typeof f == "string" ? f : f.message;
                    c.critical(hr(T, h))
                } else h !== void 0 ? c.critical(f, h, ...d) : c.critical(f)
            }
        };

        function n(a) {
            e = Ys(a)
        }
        return {
            logger: s,
            setLogger: n
        }
    }
    const {
        logger: Lc
    } = ai("metrics"), oi = {
        error(i, e) {
            Lc.error(i, e)
        }
    }, _r = typeof performance != "undefined" && !!performance.now, dr = _r ? () => performance.now() : () => Date.now(), Uc = _r ? (yo = (vo = performance.timing) == null ? void 0 : vo.navigationStart) != null ? yo : Math.floor((bo = performance.timeOrigin) != null ? bo : 0) : 0, zc = {
        now() {
            return Math.round(dr() + Uc)
        },
        elapsed() {
            return dr()
        }
    };

    function $c(i, e) {
        const t = e.wait;
        let s, n = [],
            a = null,
            o;
        const c = () => {
                zc.now(), a = null, o = i.apply(s, n), n = [], s = null
            },
            h = function(...d) {
                return s = this, n = [...d], a || (a = setTimeout(c, t)), o
            };
        return h.cancel = () => {
            a && (clearTimeout(a), a = null, n = [])
        }, h.flushPending = () => {
            a && (clearTimeout(a), c())
        }, h
    }

    function Fc(i, e) {
        let t = null,
            s, n = [];
        const a = () => {
            t = null, i.apply(s, n), n = [], s = null
        };
        return function(...o) {
            s = this, n = [...o], t && clearTimeout(t), t = setTimeout(a, e)
        }
    }
    const Er = i => (e, t, s) => {
        const n = (t == null ? void 0 : t.toString()) || "",
            a = `${e.constructor&&e.constructor.name}.${n}`;
        if (s) {
            const o = s.value;
            s.value = function(...c) {
                return Hc(a, o.bind(this))(...c)
            }
        }
    };

    function fr(i) {
        return i instanceof Error
    }

    function Hc(i, e) {
        return function(...t) {
            try {
                const s = e.apply(this, t);
                return s instanceof Promise ? s.then(n => n, n => oi.error(fr(n) ? n : new Error(n), i)) : s
            } catch (s) {
                try {
                    oi.error(fr(s) ? s : new Error(s), i)
                } catch {}
            }
        }
    }
    var qc = Object.defineProperty,
        Gc = Object.getOwnPropertyDescriptor,
        Tr = (i, e, t, s) => {
            for (var n = Gc(e, t), a = i.length - 1, o; a >= 0; a--)(o = i[a]) && (n = o(e, t, n) || n);
            return n && qc(e, t, n), n
        };
    const gr = (wt = class {
        constructor(e) {
            this.name = e, this.values = {}, wt.validateMetricName(e)
        }
        static setGlobalService(e) {
            wt.globalService = e
        }
        static validateMetricName(e) {
            this.METRIC_NAME_REGEX.test(e) || oi.error(`Invalid metric name: "${e}". Must contain only letters with optional hyphens or dots between words.`)
        }
        static validateParameterName(e) {
            return !/^https?:\/\/.+/.test(e) && !this.PARAMETER_NAME_REGEX.test(e) ? (oi.error(`Invalid parameter name: "${e}". Must start with letters, optionally followed by segments of letters or digits separated by hyphens, dots, colons, underscores, or pipes.`), !1) : !0
        }
        reset() {
            this.values = {}
        }
        flush(e = "") {
            if (!wt.globalService) return !1;
            const t = this.values,
                s = Object.keys(t);
            if (!s.length) return !1;
            const n = s.map(a => ({
                name: this.name,
                parameter: `${e===""?"":`${e}.`}${a}`,
                value: Math.round(t[a])
            }));
            return wt.globalService.push(n), this.reset(), n.length > 0
        }
    }, wt.globalService = null, wt.METRIC_NAME_REGEX = /^[a-zA-Z]+([-.][a-zA-Z]+)*$/, wt.PARAMETER_NAME_REGEX = /^[a-zA-Z]+([-.:_|][a-zA-Z0-9]+)*$/, wt);
    Tr([Er()], gr.prototype, "flush");
    let ht = gr;
    class K extends ht {
        constructor(e, t = 100) {
            super(e), this.debounceInterval = t, this.values = {}, this.debouncedFlush = () => this.flush(), t && (this.debouncedFlush = Fc(() => this.flush(), this.debounceInterval))
        }
        count(e, t = 1) {
            ht.globalService && (this.values[e] || ht.validateParameterName(e), this.values[e] = (this.values[e] || 0) + t, this.debouncedFlush())
        }
    }
    class ci extends ht {
        constructor(e, t = ["max", "average", "total", "count"]) {
            super(e), this.collecting = t, this.values = {
                average: 0,
                count: 0,
                max: 0,
                total: 0
            }
        }
        get average() {
            return this.values.average
        }
        get count() {
            return this.values.count
        }
        get max() {
            return this.values.max
        }
        get total() {
            return this.values.total
        }
        flush(e = "") {
            return this.count === 0 ? !1 : (Object.keys(this.values).filter(s => !this.collecting.some(n => s === n)).forEach(s => {
                delete this.values[s]
            }), super.flush(e))
        }
        push(e) {
            this.values.count++, this.values.total += e, this.values.max = Math.max(this.values.max, e), this.values.average = this.values.total / this.values.count
        }
        reset() {
            this.values = {
                count: 0,
                total: 0,
                max: 0,
                average: 0
            }
        }
    }
    class li extends ht {
        constructor(e, t = ["max", "average", "total", "count"]) {
            super(e), this.collecting = t
        }
        flush(e = "") {
            return Object.keys(this.values).filter(s => !this.collecting.some(n => s.endsWith(`.${n}`))).forEach(s => {
                delete this.values[s]
            }), super.flush(e)
        }
        add(e, t) {
            var n, a, o, c, h, d, f;
            if (!ht.globalService) return;
            this.values[`${e}.count`] || ht.validateParameterName(e);
            const s = T => this.values[`${e}.${T}`];
            (o = (n = this.values)[a = `${e}.count`]) != null || (n[a] = 0), (d = (c = this.values)[h = `${e}.total`]) != null || (c[h] = 0), this.values[`${e}.count`]++, this.values[`${e}.total`] += t, this.values[`${e}.max`] = Math.max((f = s("max")) != null ? f : 0, t), this.values[`${e}.average`] = s("total") / s("count")
        }
    }
    class Rr extends ht {
        constructor() {
            super(...arguments), this.values = {}
        }
        set(e, t = "flags") {
            var s, n;
            ht.globalService && (this.values[t] || ht.validateParameterName(t), (n = (s = this.values)[t]) != null || (s[t] = 0), this.values[t] |= e, this.flush())
        }
    }
    class Bc extends ht {
        constructor(e, t = {
            iterations: 10,
            interval: 2e3
        }) {
            super(e), this.settings = t, this.total = 0, this.intervalId = null, this.timeSeriesData = [], this.values = {}
        }
        push(e) {
            document.visibilityState !== "hidden" && (this.total += e, this.intervalId || this.timeSerie())
        }
        timeSerie() {
            this.intervalId = setInterval(() => {
                this.timeSeriesData.push(this.total), this.total = 0, this.timeSeriesData.length >= this.settings.iterations && this.intervalId && clearInterval(this.intervalId)
            }, this.settings.interval)
        }
        flush(e) {
            return this.intervalId && (clearInterval(this.intervalId), this.intervalId = null), this.timeSeriesData.forEach((t, s) => {
                this.values[`interval.${s+1}`] = t
            }), this.timeSeriesData = [], this.total = 0, super.flush(e)
        }
    }
    class pr extends ht {
        constructor() {
            super("upload-size"), this.requests = new Map
        }
        add(e, t, s) {
            if (e === 0) return;
            try {
                t = `${new URL(t).pathname.replace(/[^a-z0-9]+/g,"-").substring(1)||"home"}|${s}`, t = t.replace(/^v2-/, "").toLowerCase()
            } catch {
                oi.error(`Invalid URL for upload size metric: ${t}`);
                return
            }
            const n = this.requests.get(t) || {
                count: 0,
                total: 0,
                max: 0,
                average: 0
            };
            n.count++, n.total += e, n.max = Math.max(n.max, e), n.average = n.total / n.count, this.requests.set(t, n)
        }
        flush(e) {
            if (ht.globalService === null || isNaN(+e)) return !1;
            const t = [];
            return this.requests.forEach((s, n) => {
                Object.keys(s).forEach(a => {
                    const o = `${n}.${a}.${e}`;
                    ht.validateParameterName(o), t.push({
                        name: this.name,
                        parameter: o,
                        value: Math.round(s[a])
                    })
                })
            }), ht.globalService.push(t), this.requests.clear(), !0
        }
    }
    Tr([Er()], pr.prototype, "flush");
    const nt = {
            counters: {
                boot: new K("boot"),
                commandsFromIntegrations: new K("commands-from-integrations"),
                commandsFromCSTC: new K("commands-from-cstc"),
                commandsFromIframe: new K("commands-from-iframe"),
                commandApplied: new K("command-applied"),
                commandError: new K("command-error"),
                commandMisuse: new K("command-misuse"),
                CSTCSnippetUsed: new K("cstc-snippet-used"),
                redactedPII: new K("redacted-pii"),
                pageAnonymisation: new K("page-anonymisation"),
                patchedNativeFunctions: new K("patched-native-functions"),
                pureWindowState: new K("pure-window-state"),
                sensitiveElements: new K("sensitive-elements"),
                networkRequests: new K("network-requests"),
                webVitalsErrors: new K("web-vitals-errors"),
                tagSegments: new Rr("segment"),
                longTasks: new ci("long-tasks"),
                errors: new K("errors"),
                methodPerformance: new li("perf"),
                transferSize: new ci("transfer-size", ["max", "average"]),
                downloadTime: new ci("download-time", ["average"]),
                blockingTime: new ci("blocking-time"),
                inpContribution: new ci("inp-contribution"),
                tasks: new li("tasks"),
                availableFeatures: new Rr("available-features"),
                dom: new li("dom", ["total"]),
                mutations: new Bc("mutations"),
                requestTimeouts: new K("request-timeouts"),
                requestErrors: new K("request-errors"),
                requestCounts: new K("request-counter"),
                payloadSize: new pr,
                featureUsage: new K("feature-usage"),
                inpLoaf: new li("inp-loaf", ["max", "average"]),
                transactions: new K("transactions"),
                cssomVarFallback: new K("cssom-var-fallback"),
                nativeOverrides: new K("native-overrides"),
                experimentVariantApplied: new K("experiment-variant-applied"),
                experimentVariantApplyDuration: new li("experiment-variant-apply-duration"),
                experimentFailed: new K("experiment-failed"),
                cookieStorage: new K("cookie-storage")
            },
            setService(i) {
                ht.setGlobalService(i)
            },
            normalizeParameter(i) {
                return i.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase()
            }
        },
        Cs = class Cs {
            constructor(e, t, s, n = Cs.THROTTLE_INTERVAL) {
                var a;
                this.send = e, this.getRequestParameters = t, this.onInit = s, this.queue = [], this.throttledFlush = $c(() => this._flush(), {
                    wait: n
                }), (a = this.onInit) == null || a.call(this)
            }
            _flush() {
                this.queue.length !== 0 && (this.send({
                    m: this.queue.map(e => ({
                        n: e.name,
                        p: e.parameter,
                        v: e.value
                    })),
                    ...this.getRequestParameters()
                }), this.queue = [])
            }
            push(e) {
                this.queue.push(...e), this.throttledFlush()
            }
        };
    Cs.THROTTLE_INTERVAL = 5e3;
    let Ws = Cs;
    const Yc = /[a-zA-Z0-9._%+-]+(?:@|%40|%2540)[a-zA-Z0-9.%-_]+((?:\.|%2[eE])[a-zA-Z0-9-]+)+/g,
        Wc = /[a-zA-Z0-9+_-](?:@|%40|%2540)/,
        Xc = "CS_ANONYMIZED_EMAIL",
        Xs = "([-A-Za-z0-9+/=_]|=[^=]|={3,})+",
        jc = new RegExp(`(ey${Xs}\\.ey${Xs}\\.${Xs})`, "g"),
        Zc = "CS_ANONYMIZED_JWT",
        Kc = /[0-9]{4}/,
        Qc = /(^|[^a-zA-Z0-9*.,-])([45*][0-9*]{3}([ -]?)[0-9*]{4}\3[0-9*]{4}\3[0-9*]{4})($|[^a-zA-Z0-9*.,-])/g,
        Jc = "CS_ANONYMIZED_PII",
        tl = "•",
        el = /\d/g,
        il = /([+(]{0,2}\d[-_ ()/]{0,4}){9,}/,
        sl = /(?:\d{1,3}\.){3}\d{1,3}/,
        nl = /(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}/,
        rl = new RegExp("(?:^|[?&#]|%3[fF]|%2[36])(?:id_token|access_token|refresh_token|auth_token)(=|%3[dD]).*?(?=%2[36]|&|$)", "gi"),
        al = /_token/i,
        ol = "CS_ANONYMIZED_TOKEN";
    var vt;
    (i => {
        function e(T) {
            return T.replace(Yc, Xc)
        }
        i.replaceEmail = e;

        function t(T) {
            return T.replace(jc, Zc)
        }
        i.replaceJWT = t;

        function s(T, g) {
            return T.replace(Qc, g)
        }
        i.replaceCreditCardNumber = s;

        function n(T) {
            return T.replace(el, tl)
        }
        i.replaceDigits = n;

        function a(T) {
            return T.replace(rl, function(g) {
                const p = g.match(/%3d/i),
                    A = p ? p[0] : "=";
                return g.split(A)[0] + A + ol
            })
        }
        i.replaceTokens = a;

        function o(T) {
            return sl.test(T) || nl.test(T)
        }
        i.mayHaveIPAddress = o;

        function c(T) {
            return il.test(T)
        }
        i.mayHaveNumberSequence = c;

        function h(T) {
            return Kc.test(T)
        }
        i.mayHaveCreditCardNumber = h;

        function d(T) {
            return Wc.test(T)
        }
        i.mayHaveEmail = d;

        function f(T) {
            return al.test(T)
        }
        i.mayHaveToken = f
    })(vt || (vt = {}));
    class Ct {
        hasPII(e, t) {
            const s = this.checkAndAnonymizePII(e, t);
            return e !== s
        }
        checkAndAnonymizePII(e, t = null) {
            let s = this.anonymizeCreditCard(this.anonymizeEmail(e));
            return t === !0 ? this.anonymizeAllDigits(s) : this.anonymizeNumberSequence(s)
        }
        anonymizePII(e) {
            return this.anonymizeEmail(e)
        }
        anonymizeJwt(e) {
            return vt.replaceJWT(e)
        }
        anonymizeTokens(e) {
            return vt.mayHaveToken(e) ? vt.replaceTokens(e) : e
        }
        anonymizeFields(e, t) {
            return t.forEach(s => {
                e[s] = this.anonymizeEmail(e[s])
            }), e
        }
        anonymizeEmail(e) {
            if (vt.mayHaveEmail(e)) {
                const t = vt.replaceEmail(e);
                return t !== e && nt.counters.redactedPII.count("email"), t
            }
            return e
        }
        anonymizeAllDigits(e) {
            return vt.replaceDigits(e)
        }
        anonymizeNumberSequence(e) {
            return vt.mayHaveNumberSequence(e) ? vt.replaceDigits(e) : e
        }
        anonymizeCreditCard(e) {
            return vt.mayHaveCreditCardNumber(e) ? vt.replaceCreditCardNumber(e, (t, s, n, a, o) => {
                if (n.indexOf("*") === -1) {
                    const h = a.length ? n.split(a).join("") : n;
                    if (!this.checkLuhn(h)) return t;
                    nt.counters.redactedPII.count("cc")
                } else nt.counters.redactedPII.count("cc-partial");
                return `${s}${Jc}${o}`
            }) : e
        }
        checkLuhn(e) {
            const t = parseInt(e[e.length - 1]);
            let s = 0;
            for (let n = e.length - 2; n >= 0; n--) {
                let a = parseInt(e[n]);
                n % 2 === 0 && (a *= 2), s += Math.floor(a / 10) + a % 10
            }
            return 10 - s % 10 === t
        }
    }
    const _t = (() => {
        let i;
        return function(e) {
            e.debug = "debug", e.warn = "warn", e.implementation = "implementation", e.error = "error", e.critical = "critical"
        }(i || (i = {})), i
    })();

    function te(i) {
        return q(i) && (typeof i == "number" || i instanceof Number) && !isNaN(i)
    }

    function ui(i) {
        return i === parseInt(i, 10)
    }

    function rt(i) {
        return q(i) && (typeof i == "string" || i instanceof String)
    }

    function mr(i) {
        return typeof i == "boolean"
    }

    function Ir(i) {
        return typeof i == "object"
    }

    function q(i) {
        return typeof i != "undefined"
    }

    function fe(i) {
        return q(i) && i !== null
    }

    function js(i) {
        return typeof Node != "undefined" && i instanceof Node
    }

    function Yi(i) {
        return i instanceof Error
    }

    function Ar(i) {
        const e = i.length;
        for (let t = 0; t < e; t++) switch (i.charCodeAt(t)) {
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 32:
            case 160:
                continue;
            default:
                return !1
        }
        return !0
    }
    const Pr = {
        [_t.debug]: 0,
        [_t.warn]: 1,
        [_t.implementation]: 1,
        [_t.error]: 2,
        [_t.critical]: 3
    };
    let ft = {
        debug(...i) {},
        warn(...i) {},
        implementation(...i) {},
        error(...i) {},
        critical(...i) {},
        isPerfLoggingActive() {
            return !1
        }
    };

    function cl(i) {
        ft = i
    }
    const pt = i => (e, t, s) => {
        const n = (t == null ? void 0 : t.toString()) || "",
            a = i || `${e.constructor&&e.constructor.name}.${n}`;
        if (s) {
            const o = s.value;
            s.value = function(...c) {
                return Te(a, o.bind(this))(...c)
            }
        }
    };

    function Te(i, e) {
        return function(...t) {
            try {
                const s = e.apply(this, t);
                return q(self.Promise) && s instanceof self.Promise ? s.then(n => n, n => ft.error(Yi(n) ? n : new Error(n), i)) : s
            } catch (s) {
                try {
                    ft.error(Yi(s) ? s : new Error(s), i)
                } catch {}
            }
        }
    }

    function Sr(i) {
        var s;
        const e = (s = i.length) != null ? s : 0,
            t = new Array(e);
        for (let n = 0; n < e; n += 1) t[n] = i[n];
        return t
    }

    function ll(i, e) {
        const t = i.length,
            s = new Array(t);
        for (let n = 0; n < t; n += 1) s[n] = e(i[n]);
        return s
    }

    function Q(i, e) {
        if (ul(i)) {
            const t = i.length;
            for (let s = 0; s < t; s++) e(i[s], s)
        } else {
            let t = 0,
                s = i.next();
            for (; !s.done;) e(s.value, t++), s = i.next()
        }
    }

    function ul(i) {
        return i.length >= 0
    }

    function Vr(i, e) {
        const t = i.length;
        for (let s = 0; s < t; s++)
            if (e(i[s], s)) return i[s]
    }

    function Zs(i, e) {
        const t = i.length;
        for (let s = 0; s < t; s++)
            if (e(i[s], s)) return !0;
        return !1
    }

    function vr(i, e) {
        const t = i.length,
            s = [];
        for (let n = 0; n < t; n += 1) {
            const a = i[n];
            e(a) && I(s, it(a))
        }
        return s
    }

    function hl(i, e, t) {
        const s = i.length + e.length + 0,
            n = new Array(s);
        let a = 0;
        for (let o = 0; o < i.length; o++) n[a++] = i[o];
        for (let o = 0; o < e.length; o++) n[a++] = e[o];
        return n
    }

    function _l(i, e) {
        const t = i.length;
        for (let s = 0; s < t; s++)
            if (e(i[s], s)) return s;
        return -1
    }

    function Wi(i) {
        const e = i instanceof Map,
            t = [];
        return i.forEach((s, n) => t.push(e ? [n, s] : s)), t
    }
    const br = (() => {
        let i;
        return function(e) {
            function t() {
                const T = [n()];
                return document.documentElement && I(T, it(document.documentElement.scrollHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight)), document.body && I(T, it(document.body.scrollHeight, document.body.offsetHeight)), Math.max(...T)
            }
            e.documentHeight = t;

            function s() {
                return document.documentElement.scrollWidth
            }
            e.documentWidth = s;

            function n() {
                return window.innerHeight
            }
            e.windowHeight = n;

            function a() {
                return window.innerWidth
            }
            e.windowWidth = a;

            function o() {
                const T = or.width;
                return ui(T) && T > 0 ? T : window.screen.width
            }
            e.screenWidth = o;

            function c() {
                const T = or.height;
                return ui(T) && T > 0 ? T : window.screen.height
            }
            e.screenHeight = c;

            function h() {
                return window.pageXOffset
            }
            e.windowOffsetX = h;

            function d() {
                return window.pageYOffset
            }
            e.windowOffsetY = d;

            function f() {
                return {
                    dw: `${s()}`,
                    dh: `${t()}`,
                    ww: `${a()}`,
                    wh: `${n()}`,
                    sw: `${o()}`,
                    sh: `${c()}`
                }
            }
            e.getRequestParameters = f
        }(i || (i = {})), i
    })();

    function Ot(i) {
        return I(i, si) === Node.ELEMENT_NODE
    }

    function dl(i) {
        return Ot(i) && I(i, W) === "link"
    }

    function El(i) {
        return Ot(i) && I(i, W) === "a"
    }

    function fl(i) {
        return dl(i) && I(i.rel, ni("stylesheet")) !== -1
    }

    function Ks(i) {
        return Ot(i) && I(i, W) === "style"
    }

    function Tl(i) {
        return Ot(i) && I(i, W) === "input"
    }

    function yr(i) {
        return Ot(i) && I(i, W) === "textarea"
    }

    function gl(i) {
        return Ot(i) && I(i, W) === "script"
    }

    function Rl(i) {
        return Ot(i) && I(i, W) === "button"
    }

    function pl(i) {
        return Ot(i) && I(i, W) === "select"
    }

    function ml(i) {
        return Ot(i) && I(i, W) === "details"
    }

    function Il(i) {
        return Ot(i) && I(i, W) === "summary"
    }

    function Al(i) {
        switch (I(i, si)) {
            case Node.DOCUMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
                return !0;
            default:
                return !1
        }
    }

    function Xi(i) {
        return Al(i) && "host" in i && "mode" in i
    }

    function wr(i) {
        return Ot(i) && !!I(i, ke) && Xi(I(i, ke))
    }

    function hi(i, e = Tt.SHOW_ALL) {
        const t = e | Tt.SHOW_ELEMENT,
            s = [document.createTreeWalker(i, t, null, !1)];
        let n = Nr(i);
        n && I(s, it(document.createTreeWalker(n, t, null, !1)));
        let a = null;
        return {
            root: i,
            nextNode() {
                if (n) {
                    const o = n;
                    return n = null, o
                }
                for (; s.length > 0;) {
                    if (a) {
                        const d = a;
                        return a = null, d
                    }
                    const c = s[s.length - 1].nextNode();
                    if (!c) {
                        I(s, ur());
                        continue
                    }
                    const h = Nr(c);
                    if (e & Tt.SHOW_DOCUMENT_FRAGMENT && h && (a = h), h && I(s, it(document.createTreeWalker(h, t, null, !1))), (Qs[I(c, si)] & e) !== 0) return c
                }
                return null
            },
            visitAll(o) {
                Qs[I(i, si)] & e && o(i);
                let c = this.nextNode();
                for (; c;) {
                    if ((Qs[I(c, si)] & e) === 0) {
                        c = this.nextNode();
                        continue
                    }
                    o(c), c = this.nextNode()
                }
            },
            find(o) {
                let c;
                return this.visitAll(h => o(h) && (c = h)), c
            },
            collectAll(o) {
                const c = [];
                return this.visitAll(h => c.push(o ? o(h) : h)), c
            }
        }
    }

    function Nr(i) {
        return i && wr(i) ? I(i, ke) : null
    }
    const bt = (wo = globalThis.Node) != null ? wo : {},
        Tt = (No = globalThis.NodeFilter) != null ? No : {},
        Qs = {
            [bt.ATTRIBUTE_NODE]: Tt.SHOW_ATTRIBUTE,
            [bt.CDATA_SECTION_NODE]: Tt.SHOW_CDATA_SECTION,
            [bt.COMMENT_NODE]: Tt.SHOW_COMMENT,
            [bt.DOCUMENT_FRAGMENT_NODE]: Tt.SHOW_DOCUMENT_FRAGMENT,
            [bt.DOCUMENT_NODE]: Tt.SHOW_DOCUMENT,
            [bt.DOCUMENT_TYPE_NODE]: Tt.SHOW_DOCUMENT_TYPE,
            [bt.ELEMENT_NODE]: Tt.SHOW_ELEMENT,
            [bt.ENTITY_NODE]: Tt.SHOW_ENTITY,
            [bt.ENTITY_REFERENCE_NODE]: Tt.SHOW_ENTITY_REFERENCE,
            [bt.NOTATION_NODE]: Tt.SHOW_NOTATION,
            [bt.PROCESSING_INSTRUCTION_NODE]: Tt.SHOW_PROCESSING_INSTRUCTION,
            [bt.TEXT_NODE]: Tt.SHOW_TEXT
        };

    function Cr(i, e) {
        let t, s, n, a, o, c = null;
        const h = f => {
                const T = mt.elapsed();
                if (!f && c !== null) {
                    const p = e - (T - c);
                    if (p >= 1) {
                        n = setTimeout(h, p);
                        return
                    }
                }
                const g = T - a;
                n = null, c = null, a = null, o = i.apply(t, [g, ...s])
            },
            d = function() {
                if (t = this, s = arguments, a) {
                    c = mt.elapsed();
                    return
                }
                return a = mt.elapsed(), n = setTimeout(h, e), o
            };
        return d.flushPending = () => {
            n && (clearTimeout(n), h(!0))
        }, d.cancel = () => {
            c = null, a = null, n && (clearTimeout(n), n = null)
        }, d
    }

    function Or(i, e) {
        return function() {
            return i.apply(this, arguments)
        }
    }
    const ji = function(i) {
            return function(e, t, s) {
                const n = s.value;
                s.value = Or(n)
            }
        },
        Pl = typeof performance != "undefined" && !!performance.now ? () => performance.now() : () => Date.now(),
        Dr = {
            elapsed() {
                return Pl()
            }
        },
        {
            logger: Mr
        } = ai("task");

    function Sl(i, e = globalThis) {
        let t;
        return typeof Zone != "undefined" && typeof Zone.__symbol__ == "function" && (t = e[Zone.__symbol__(i)]), t != null ? t : e[i]
    }
    let kr = class {
        constructor() {
            this._length = 0
        }
        get length() {
            return this._length
        }
        get isEmpty() {
            return !this.head
        }
        pushAll(e) {
            for (let t = 0; t < e.length; t++) this.push(e[t])
        }
        push(e) {
            this._length++, this.tail ? this.tail = this.tail[1] = [e, void 0] : this.tail = this.head = [e, void 0]
        }
        pop() {
            if (!this.head) return null;
            this._length--;
            const e = this.head[0];
            return this.head = this.head[1], this.head || (this.tail = void 0), e
        }
        forEach(e) {
            let t = this.head;
            for (; t != null && t.length;) e(t[0]), t = t[1]
        }
        clear() {
            this._length = 0, this.head = this.tail = void 0
        }
    };
    var xr = (i => (i.Timer = "timer", i.MonkeyPatch = "monkeyPatch", i.MutationObserver = "mutationObserver", i.EventListener = "eventListener", i.IntersectionObserver = "intersectionObserver", i.MicroTask = "microtask", i))(xr || {});
    let Dt = null;
    const Vl = ["click", "tap", "keyup", "keydown", "pointerup", "pointerdown"];
    async function vl(i, e, t = null) {
        if (Dt && e[0] !== "microtask") return i();
        t && (Dt = t), Dt || (Dt = {
            type: e[0],
            elapsed: 0
        });
        try {
            Dt.elapsed += bl(i)
        } catch (s) {
            Mr.critical(new Error(`Task error:  ${e}/${i.name}.
${s.message}
${s.stack}`), "TASK_ERROR")
        } finally {
            Js <= 0 && (Dt.elapsed > 50 && (nt.counters.longTasks.push(Dt.elapsed), nt.counters.blockingTime.push(Dt.elapsed - 50)), nt.counters.tasks.add(e[0], Dt.elapsed), Vl.includes(e[1]) && nt.counters.inpContribution.push(Dt.elapsed), Dt = null)
        }
    }

    function bl(i) {
        const e = Dr.elapsed();
        return i(), Dr.elapsed() - e
    }
    let Js = 0;
    const yl = Sl("queueMicrotask"),
        Lr = i => {
            Js++, yl(() => vl(() => {
                try {
                    i()
                } finally {
                    Js--
                }
            }, [xr.MicroTask, "queueMicrotask"]))
        },
        Zi = new kr,
        Ki = new kr;

    function Qi(i, e = "high") {
        Zi.isEmpty && Ki.isEmpty && Ur(wl), e === "high" ? Ki.push(zr(i)) : Zi.push(zr(i))
    }

    function Ur(i, e = 10) {
        e === 0 ? Lr(i) : queueMicrotask(() => Ur(i, e - 1))
    }

    function wl() {
        for (; !Ki.isEmpty;) Ki.pop()();
        for (; !Zi.isEmpty;) Zi.pop()()
    }

    function zr(i) {
        return function() {
            try {
                i.apply(window, arguments)
            } catch (e) {
                Mr.critical(e)
            }
        }
    }
    const tn = () => (i, e, t) => {
        t.value = Nl(t.value)
    };

    function Nl(i) {
        const e = Symbol("oncePerTickSymbol");
        let t = null;
        const s = {},
            n = function() {
                const a = this != null ? this : s;
                if (t = arguments, a[e]) return;
                a[e] = !0, Lr(() => {
                    a[e] = !1, i.apply(a, t)
                })
            };
        return n.oncePerTickSymbol = e, n
    }
    tn.isScheduled = (i, e) => {
        const t = e.oncePerTickSymbol;
        return i[t]
    };

    function _i(i, e) {
        typeof e == "number" && (e = {
            wait: e
        });
        const t = e.wait,
            s = e.mode || "leading";
        let n, a = [],
            o = null,
            c = 0,
            h;
        const d = () => {
                c = mt.now(), o = null, h = i.apply(n, a), a = [], n = null
            },
            f = function(...T) {
                if (n = this != null ? this : globalThis, a = [...T], s === "trailing") return o || (o = setTimeout(d, t)), h;
                const g = mt.now(),
                    p = t - (g - c);
                return p <= 0 || p > t ? (c = g, h = i.apply(n, a), o ? (clearTimeout(o), o = null) : a = []) : o || (o = setTimeout(d, p)), h
            };
        return f.cancel = () => {
            o && (clearTimeout(o), c = 0, o = null, a = [])
        }, f.flushPending = () => {
            o && (clearTimeout(o), d())
        }, f
    }
    const en = i => (e, t, s) => {
            const n = s.value,
                a = new WeakMap,
                o = c => {
                    let h = a.get(c);
                    return h || (h = _i(n.bind(c), i), a.set(c, h)), h
                };
            s.value = function(...c) {
                if (typeof this != "object" && typeof this != "function" || this === null) {
                    ft.warn("@Throttle decorated method called without a valid instance context");
                    return
                }
                return o(this)(...c)
            }
        },
        ge = (() => {
            let i;
            return function(e) {
                function t() {
                    return !!Element.prototype.attachShadow
                }
                e.isSupported = t;

                function s(a) {
                    return a && wr(a) ? I(a, ke) : null
                }
                e.getShadowRoot = s;

                function n(a) {
                    return hi(a, NodeFilter.SHOW_DOCUMENT_FRAGMENT).collectAll(o => o.host)
                }
                e.getAllShadowHosts = Or(n)
            }(i || (i = {})), i
        })(),
        sn = (Co = globalThis.Node) != null ? Co : Object,
        Re = (() => {
            let i;
            return function(e) {
                const t = "isConnected" in sn.prototype ? R => R.isConnected : R => !R.ownerDocument || !(R.ownerDocument.compareDocumentPosition(R) & R.DOCUMENT_POSITION_DISCONNECTED);

                function s(R, y) {
                    for (let w = R; w; w = I(w, Sc)) y(R)
                }
                e.forEachChild = s;

                function n(R) {
                    return t(R)
                }
                e.isConnected = n;

                function a(R, y) {
                    const w = [];
                    for (const D of h(R, y)) I(w, it(D));
                    return w
                }
                e.getAncestors = a;
                const o = (R, y) => {
                    var w;
                    return (w = I(R, qs)) != null ? w : y && Xi(R) ? R.host : null
                };

                function c(R, y, w = !1) {
                    let D = R;
                    for (; D;) {
                        if (y(D)) return D;
                        const lt = o(D, w);
                        if (lt && lt !== D) D = lt;
                        else break
                    }
                    return null
                }
                e.findAncestor = c;

                function* h(R, y = !1) {
                    let w = R;
                    for (; w;) {
                        yield w;
                        const D = o(w, y);
                        if (D && D !== w) w = D;
                        else break
                    }
                }
                e.walkUp = h;

                function d(R, y) {
                    if (R === y || y.contains(R)) return !0;
                    const w = e.getParentElement(R);
                    return w && w !== R ? d(w, y) : !1
                }
                e.isDescendantOf = d;

                function f(R) {
                    var y;
                    return I(R, cr) ? I(R, cr) : e.getRootNode(R) ? (y = e.getRootNode(R)) == null ? void 0 : y.host : null
                }
                e.getParentElement = f;

                function T(R, y = document) {
                    const w = Sr(I(y, lr(R))),
                        D = ge.getAllShadowHosts(y);
                    for (const lt of D) {
                        const Ft = ge.getShadowRoot(lt);
                        if (!Ft) continue;
                        const ki = Sr(I(Ft, lr(R)));
                        I(w, it(...ki))
                    }
                    return w
                }
                e.findAllElements = T, e.getRootNode = (() => {
                    if ("getRootNode" in sn.prototype) return (w, D) => w.getRootNode(D);

                    function R(w) {
                        const D = y(w);
                        return Xi(D) ? R(D.host) : D
                    }

                    function y(w) {
                        return I(w, qs) != null ? y(I(w, qs)) : w
                    }
                    return (w, D) => typeof D == "object" && !!D.composed ? R(w) : y(w)
                })();

                function g(R) {
                    return R === "transparent" || /^(rgba|hsla)\(\d+, \d+%?, \d+%?, 0\)$/.test(R)
                }

                function p(R) {
                    const y = R.getBoundingClientRect();
                    return y.right + br.windowOffsetX() < 0 || y.bottom + br.windowOffsetY() < 0
                }

                function A(R) {
                    var D, lt;
                    if (((D = R.checkVisibility) == null ? void 0 : D.call(R, {
                            checkOpacity: !0,
                            checkVisibilityCSS: !0
                        })) === !1) return !0;
                    if (!R.offsetParent) {
                        if (!R.getBoundingClientRect) return ft.warn(`SUP-11432: Element doesn't have getBoundingClientRect. Node: ${R instanceof sn} Ctor: ${(lt=R==null?void 0:R.constructor)==null?void 0:lt.name}`), !1;
                        const Ft = R.getBoundingClientRect();
                        if (Ft.width === 0 && Ft.height === 0) return !0
                    }
                    const y = window.getComputedStyle(R);
                    return y ? y.display === "none" || y.visibility === "hidden" || y.visibility === "collapse" || y.opacity === "0" || y.filter === "opacity(0)" || y.width === "0px" && y.height === "0px" || g(y.color) : !0
                }
                e.isHiddenByCSS = A;

                function S(R) {
                    if (A(R)) return !0;
                    const w = f(R);
                    return w != null && S(w)
                }
                e.areAncestorsHiddenByCSS = S;

                function v(R) {
                    let y = null,
                        w = R;
                    do
                        if (A(w)) y = w;
                        else break; while (w = f(w));
                    return y
                }
                e.getTopAncestorHiddenByCSS = v;

                function N(R) {
                    const y = B(R);
                    return y !== null && !R.contains(y) && !y.contains(R)
                }

                function B(R) {
                    const y = R.getBoundingClientRect(),
                        w = y.left + .5 * y.width,
                        D = y.top + .5 * y.height;
                    return j(document, w, D)
                }
                e.getTopElement = B;

                function $(R) {
                    if (!R.getBoundingClientRect) return null;
                    const y = R.getBoundingClientRect(),
                        w = y.x + y.width / 2,
                        D = y.y + y.height / 2;
                    return e.getTopElementFromPoint(document, w, D)
                }
                e.getElementOnTop = $;

                function j(R, y, w) {
                    const D = R.elementFromPoint(y, w);
                    if (!D) return null;
                    const lt = ge.getShadowRoot(D);
                    return lt && lt !== e.getRootNode(document.body) && lt !== R ? j(lt, y, w) : D
                }
                e.getTopElementFromPoint = j;

                function b(R) {
                    return !p(R) && !A(R) && !N(R)
                }
                e.isVisibleInDocument = b;

                function st(R) {
                    return A(R) ? !1 : Y(R)
                }
                e.isVisibleInViewportInForeground = st;

                function Y(R) {
                    const y = B(R);
                    return y === null ? !1 : R === y ? !0 : Mi(R) ? R.textContent !== "" && y.contains(R) : R.contains(y)
                }
                e.isInViewPort = Y;

                function et(R, y, w) {
                    const D = R.getAttributeNS(y, w);
                    return D === "" ? R.hasAttributeNS(y, w) ? D : null : D
                }
                e.getAttributeNS = et;

                function Di(R) {
                    return !!(R.hasAttribute("tabIndex") || I(R, Cc("contentEditable")) === "true" || El(R) && R.hasAttribute("href") || (pl(R) || yr(R) || Tl(R) || Rl(R)) && !R.hasAttribute("disabled") || ml(R) || Il(R))
                }
                e.isElementFocusable = Di;

                function Mi(R) {
                    return I(R, W) === "span" || I(R, W) === "a" || I(R, W) === "b" || I(R, W) === "i" || I(R, W) === "button" || I(R, W) === "input" || I(R, W) === "label" || I(R, W) === "cite" || I(R, W) === "small" || I(R, W) === "strong" || I(R, W) === "code" || I(R, W) === "abbr" || I(R, W) === "em" || I(R, W) === "dfn" || I(R, W) === "time" || I(R, W) === "output" || I(R, W) === "object" || I(R, W) === "sub"
                }
                e.isInlineElement = Mi;

                function Xn(R) {
                    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => R(), {
                        once: !0
                    }) : setTimeout(R)
                }
                e.onDocumentLoaded = Xn
            }(i || (i = {})), i
        })(),
        $r = typeof window == "undefined";

    function Cl() {
        try {
            const i = new Error;
            let e = i.stack ? i.stack.split(`
`).filter(s => s !== "Error" && s.toLowerCase().indexOf("promise ") === -1 && s.indexOf("[native code]") === -1 && s.indexOf("(<anonymous>)") === -1) : [];
            if (e.length === 0) return "";
            const t = Dl(e);
            return t === "" || (e = Ml(e, t), e.length === 0) ? "" : Fr(e[0])
        } catch {
            return ""
        }
    }

    function Ol(i) {
        return i.indexOf("@") !== -1
    }

    function Dl(i) {
        return i.length > 0 ? Fr(i[0]) : ""
    }

    function Ml(i, e) {
        return i.filter(t => t.indexOf(e) === -1)
    }

    function Fr(i) {
        let e = "",
            t;
        Ol(i) ? t = new RegExp("@(.+):(\\d+):(\\d+)$") : t = new RegExp("\\((.+):(\\d+):(\\d+)\\)");
        const s = t.exec(i);
        return s && (e = s[1]), e
    }
    const {
        logger: di
    } = ai("domListeners");
    let kl;

    function Hr(i, e) {
        try {
            kl || i()
        } catch (t) {
            di.error(`Error in ${e.type}/${e.type==="intercept"?e.method:e.name}`, t)
        }
    }
    var Ei = (i => (i[i.Properties = 1] = "Properties", i[i.Methods = 2] = "Methods", i[i.All = 3] = "All", i))(Ei || {});
    const Ji = new WeakMap,
        nn = new WeakMap;

    function xl(i, e) {
        if (!i || typeof i != "object" && typeof i != "function") return i;
        if (Ji.has(i)) return Ji.get(i);
        const t = e();
        return Ji.set(i, t), t
    }

    function rn(i, e) {
        return i.prototype = e.prototype, Object.defineProperty(i, "toString", {
            value: () => e.toString()
        }), i
    }

    function Ll(i, e, t, s, n) {
        const a = String(e);
        Object.defineProperty(i, e, {
            set(o) {
                var d;
                const c = t.get ? t.get.call(this) : void 0,
                    h = (d = t.set) == null ? void 0 : d.apply(this, [o]);
                return Ji.delete(c), s(this, {
                    name: a,
                    args: [o],
                    result: h,
                    oldValue: c
                }), h
            },
            get() {
                var h;
                const o = this,
                    c = (h = t.get) == null ? void 0 : h.apply(this);
                return typeof Proxy != "function" ? c : xl(c, () => {
                    const d = new Map,
                        f = new Proxy(c, {
                            get(T, g) {
                                const p = Reflect.get(T, g);
                                if (typeof p != "function") return p;
                                const A = d.get(p);
                                if (A) return A;
                                let S;
                                return n & 2 ? S = rn(function(...v) {
                                    const N = nn.get(this) || this,
                                        B = Reflect.apply(p, N, v);
                                    return s(o, {
                                        name: a,
                                        property: g,
                                        args: v,
                                        result: B
                                    }), B
                                }, p) : S = rn(function(...v) {
                                    const N = nn.get(this) || this;
                                    return Reflect.apply(p, N, v)
                                }, p), d.set(p, S), S
                            },
                            set: n & 1 ? (T, g, p) => {
                                const A = Reflect.get(T, g),
                                    S = Reflect.set(T, g, p);
                                return s(o, {
                                    name: a,
                                    property: g,
                                    args: [p],
                                    result: S,
                                    oldValue: A
                                }), S
                            } : Reflect.set
                        });
                    return nn.set(f, c), f
                })
            }
        })
    }

    function Ul(i, e, t, s, n, a) {
        const o = String(e),
            c = {};
        t.get && (c.get = t.get), t.set && (c.set = function(h) {
            const d = t.get ? t.get.call(this) : this[e],
                f = t.set.call(this, h);
            return s(this, {
                name: o,
                args: [h],
                result: f,
                oldValue: d
            }), f
        }), t.value && (typeof t.value == "function" ? c.value = rn(function(...h) {
            const d = n ? n(h) : h,
                f = Reflect.apply(t.value, this, h);
            if (a) {
                const T = Cl();
                s(this, {
                    name: o,
                    args: Array.from(d),
                    result: f,
                    callerName: T
                })
            } else s(this, {
                name: o,
                args: Array.from(d),
                result: f
            });
            return f
        }, t.value) : c.value = t.value, c.writable = t.writable !== !1), t.configurable !== void 0 && (c.configurable = t.configurable), t.enumerable !== void 0 && (c.enumerable = t.enumerable), Object.defineProperty(i, e, c)
    }

    function F(i, e, t, s = {}) {
        var g, p;
        const n = i && i.prototype ? i.prototype : i;
        if (!n) return () => {};
        const a = (g = s.ownProperty) != null ? g : !1,
            o = s.mode != null ? `_m${s.mode}` : "",
            c = Symbol.for(`fd_intercept_${e}${o}`);
        if (a ? Object.prototype.hasOwnProperty.call(n, c) : c in n) {
            const A = n[c];
            return A.add(t), () => A.delete(t)
        }
        const d = new Set([t]);
        n[c] = d;
        const f = Object.getOwnPropertyDescriptor(n, e);
        if (!f) return di.warn(`Could not find descriptor for ${e} on target ${n}`), () => d.delete(t);
        if (!f.configurable) return di.warn(`Cannot intercept non-configurable property '${e}' on target ${n}`), () => d.delete(t);
        if (f.value && typeof f.value == "function" && !f.writable) return di.warn(`Cannot intercept read-only function '${e}' on target ${n}`), () => d.delete(t);
        const T = (A, S) => {
            Hr(() => {
                for (const v of d) try {
                    v(A, S)
                } catch (N) {
                    di.error(`Error in intercept hook for ${e} on target ${n}`, N)
                }
            }, {
                type: "intercept",
                method: e,
                context: A,
                args: S.args
            })
        };
        return s.mode ? Ll(n, e, f, T, s.mode) : Ul(n, e, f, T, s.prepareArgs, (p = s.withCallerName) != null ? p : !1), () => d.delete(t)
    }

    function gt(i, e, t, s) {
        const o = c => {
            Hr(() => t(c), {
                type: "listen",
                event: c,
                name: e
            })
        };
        return i.addEventListener(e, o, {
            capture: !0,
            passive: !0
        }), () => {
            i.removeEventListener(e, o, {
                capture: !0
            })
        }
    }

    function zl(i) {
        const e = Array.from(new Uint8Array(i));
        return I(e, Jt(t => t.toString(16).padStart(2, "0"))).join("")
    }
    const qr = typeof performance != "undefined" && !!performance.now,
        Gr = qr ? () => performance.now() : () => Date.now(),
        $l = qr ? (Do = (Oo = performance.timing) == null ? void 0 : Oo.navigationStart) != null ? Do : Math.floor(performance.timeOrigin) : 0,
        Br = 34164e6,
        mt = {
            now() {
                return Math.round(Gr() + $l)
            },
            elapsed() {
                return Gr()
            }
        };

    function Yr() {
        return Math.floor(mt.now() / 1e3)
    }

    function Ut(i, e) {
        return i.lastIndexOf(e, 0) === 0
    }

    function Wr(i, e) {
        return I(i, ni(e, i.length - e.length)) !== -1
    }
    const Fl = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Ue = {
            percentage() {
                return Math.floor(Math.random() * 1e4) / 100
            },
            boolean(i) {
                return this.percentage() < i
            },
            integer(i = Fl) {
                return Math.floor(Math.random() * i)
            }
        },
        Hl = i => i instanceof HTMLFormElement ? "form" : I(i, W),
        It = !$r && document.createElement("a"),
        ql = /(:443|:80)$/;

    function Gl(i, e, t = {}) {
        const {
            allowWildcard: s = !0
        } = t;
        return e.some(n => s && n === "" || n !== "" && (Wr(i, `.${n}`) || i === n))
    }

    function Bl(i) {
        return i[0] === "/" ? i : `/${i}`
    }

    function Xr(i) {
        return I(i, Le(ql, ""))
    }

    function jr(i) {
        return !It || !Ut(i, "http://") && !Ut(i, "https://") ? null : (It.href = i, {
            hash: It.hash,
            host: Xr(It.host),
            hostname: It.hostname,
            href: It.href,
            origin: It.origin ? It.origin : Xr(`${It.protocol}//${It.host}`),
            pathname: Bl(It.pathname),
            port: It.port,
            protocol: It.protocol,
            search: It.search
        })
    }

    function At(i, e = 0) {
        const t = Math.pow(10, e);
        return Math.round(i * t) / t
    }
    const pe = (ko = (Mo = globalThis.Element) == null ? void 0 : Mo.prototype) != null ? ko : {},
        Yl = I(pe, Vc) || I(pe, vc) || I(pe, bc) || I(pe, yc) || I(pe, wc) || I(pe, Nc);
    pe.closest;
    let an;

    function on(i) {
        if (an || (an = document.createElement("div")), !(!!i && rt(i))) return ft.warn(`isValidSelector: invalid selector provided '${i}'`), !1;
        try {
            return Yl.call(an, i), !0
        } catch {
            return ft.warn(`isValidSelector: invalid selector provided '${i}'`), !1
        }
    }
    const Zr = (() => {
            let i;
            return function(e) {
                e.ELLIPSIS = "…";

                function t(o) {
                    return I(o, Le(/[.*+?^${}()|[\]\\]/g, "\\$&"))
                }

                function s(o) {
                    return I(o, Le(/([#;&,.+*~':"!^$[\]()<=>|/%?@`{}\\ ])/g, "\\$1"))
                }
                e.escapeInvalidCharacters = s;

                function n(o, c, h) {
                    if ("replaceAll" in String.prototype) return o.replaceAll(c, h);
                    const d = new Ee(t(c), "g");
                    return I(o, Le(d, h))
                }
                e.stringReplaceAll = n;

                function a(o, c, h = "") {
                    return o.length <= c ? o : I(o, Gs(0, c - h.length)) + h
                }
                e.truncate = a
            }(i || (i = {})), i
        })(),
        Kr = new Map,
        cn = !$r && document.implementation.createHTMLDocument("");

    function Wl(i) {
        if (!Ks(i)) return null;
        const e = Qr(i);
        if (e === null || e.length === 0) return null;
        let t = "";
        if (Ar(i.textContent)) Q(e, s => t += s.cssText);
        else {
            const s = Xl(i);
            if (s === e.length || s > e.length) return null;
            const n = new Array(e.length - s);
            for (let a = s, o = 0; a < e.length; a += 1, o += 1) n[o] = e[a];
            Q(n, a => t += a.cssText)
        }
        return t
    }

    function Xl(i) {
        if (!cn) return 0;
        let e = Kr.get(i.textContent);
        if (e) return e;
        const t = i.cloneNode(!0);
        t.textContent = i.textContent, cn.head.appendChild(t);
        const s = Qr(t);
        return e = s ? s.length : 0, Kr.set(i.textContent, e), cn.head.removeChild(t), e
    }

    function Qr(i) {
        try {
            if (i.disabled) return null;
            const e = i.sheet;
            return e ? e.cssRules || e.rules : null
        } catch (e) {
            const t = e;
            if (t.name !== "SecurityError" && t.name !== "InvalidAccessError") throw t;
            return null
        }
    }

    function jl(i) {
        var e = parseInt(i, 16),
            t = 55296 <= e && e <= 57343;
        return t || e === 0 || e > 1114111 ? "�" : String.fromCodePoint(e)
    }

    function Zl(i) {
        return i.replace(/\\(?:([a-fA-F0-9]{1,6})|(\\+|.))[\n\t\x20]?/g, function(e, t, s) {
            return s || jl(t)
        })
    }

    function Kl(i) {
        return i.replace(/([\\]+|")|([\n])/g, function(e, t, s) {
            return t ? "\\".concat(t, " ") : "\\".concat(s.codePointAt(0).toString(16), " ")
        })
    }
    var me = function(i, e) {
            return Object.defineProperty ? Object.defineProperty(i, "raw", {
                value: e
            }) : i.raw = e, i
        },
        ln = String.raw(ta || (ta = me([`\\(?:[a-fA-F0-9]{1,6}|\\+|.)[
	 ]?`], ["\\\\(?:[a-fA-F0-9]{1,6}|\\\\+|.)[\\n\\t\\x20]?"]))),
        Ql = String.raw(ea || (ea = me(["((?:", '|[^"])+)'], ["((?:", '|[^"])+)'])), ln),
        Jl = String.raw(ia || (ia = me(["((?:", "|[^'])+)"], ["((?:", "|[^'])+)"])), ln),
        tu = String.raw(sa || (sa = me(["((?:", `|[^)"'])+)`], ["((?:", `|[^)"'])+)`])), ln),
        Jr = String.raw(na || (na = me(['(?:"', `"|'`, "')"], ['(?:"', `"|'`, "')"])), Ql, Jl),
        eu = String.raw(ra || (ra = me(["urls*(s*(?:", "|", ")s*)"], ["url\\s*\\(\\s*(?:", "|", ")\\s*\\)"])), Jr, tu),
        iu = String.raw(aa || (aa = me(["@imports*", ""], ["@import\\s*", ""])), Jr),
        su = new RegExp("".concat(eu, "|").concat(iu), "g");

    function nu(i, e) {
        return i.replace(su, function(t) {
            for (var s = [], n = 1; n < arguments.length; n++) s[n - 1] = arguments[n];
            var a = s.find(function(d) {
                    return d !== void 0
                }),
                o = Zl(a),
                c = e(o);
            if (!c || c === o) return t;
            var h = /^@import/.test(t) ? "@import " : "";
            return "".concat(h, 'url("').concat(Kl(c), '")')
        })
    }
    var ta, ea, ia, sa, na, ra, aa;
    const oa = (() => {
        class i {
            constructor() {
                this.set = new Set
            }
            add(t) {
                this.set.add(t), this.set.size === 1 && setTimeout(() => {
                    this.set.clear()
                })
            }
            has(t) {
                return this.set.has(t)
            }
            del(t) {
                this.set.delete(t)
            }
            clear() {
                this.set.clear()
            }
            values() {
                return Wi(this.set)
            }
            get count() {
                return this.set.size
            }
        }
        return i
    })();

    function ru(i, e = !1) {
        const t = new oa;
        return {
            push(s) {
                t.count === 0 && (e ? Qi : setTimeout)(() => {
                    i(t.values()), t.clear()
                }), t.add(s)
            }
        }
    }

    function au(i) {
        return Ut(i, "data:")
    }
    const Bt = (() => {
            let i;
            return function(e) {
                e.REGEX = "regex", e.START = "start", e.NOT_START = "not-start", e.END = "end", e.NOT_END = "not-end", e.CONTAIN = "contain", e.NOT_CONTAIN = "not-contain", e.EXACT = "exact", e.NOT_EXACT = "not-exact"
            }(i || (i = {})), i
        })(),
        zt = (() => {
            let i;
            return function(e) {
                e.START = "start", e.NOT_START = "not-start", e.END = "end", e.NOT_END = "not-end", e.CONTAIN = "contain", e.NOT_CONTAIN = "not-contain", e.EXACT = "exact", e.NOT_EXACT = "not-exact", e.REGEX_TO_RULE = "regex-to-rule"
            }(i || (i = {})), i
        })(),
        $t = (() => {
            let i;
            return function(e) {
                e.replayRecordingUnmaskedUrlRegex = "replayRecordingUnmaskedUrlRegex", e.replayRecordingMaskedUrlRegex = "replayRecordingMaskedUrlRegex", e.replayRecordingUnmaskedUrlRegexRules = "replayRecordingUnmaskedUrlRegexRules", e.replayRecordingMaskedUrlRegexRules = "replayRecordingMaskedUrlRegexRules"
            }(i || (i = {})), i
        })(),
        fi = (() => {
            class i {
                constructor() {
                    this._PRIVATE_rules = []
                }
                setRegexRules(t) {
                    this._PRIVATE_rules = I(t, Jt(s => this._PRIVATE_compileRegexRuleSafely(s)), xe(s => s !== null))
                }
                _PRIVATE_compileRegexRuleSafely(t) {
                    try {
                        return this._PRIVATE_compileRegexRule(t)
                    } catch (s) {
                        return ft.warn(`compileRegexRule, failed to compile rule (operator: ${t.operator}, value: ${t.value}): ${String(s)}`), null
                    }
                }
                evaluateUrl(t) {
                    return this._PRIVATE_rules.some(s => this._PRIVATE_evaluateUrlForRule(t, s))
                }
                getMatchingRules(t) {
                    return I(this._PRIVATE_rules.filter(s => this._PRIVATE_evaluateUrlForRule(t, s)), Jt(s => s.ruleInput))
                }
                _PRIVATE_evaluateUrlForRule(t, s) {
                    var a, o;
                    const n = this._PRIVATE_getUrlForEvaluation(t, s);
                    return !this._PRIVATE_isRuleActive(s) || !this._PRIVATE_isRuleDrawn(s) ? !1 : (s.regex.lastIndex = 0, !!(s != null && s.notOperator ? !((a = s.regex) != null && a.test(n)) : (o = s.regex) != null && o.test(n)))
                }
                _PRIVATE_isRuleActive(t) {
                    const s = new Date,
                        n = t.startDate && t.startDate > s,
                        a = t.endDate && t.endDate < s;
                    return !n && !a
                }
                _PRIVATE_isRuleDrawn(t) {
                    const s = t.samplingRate !== 100,
                        n = s && Ue.boolean(t.samplingRate);
                    return !s || n
                }
                _PRIVATE_normalizeUrl(t) {
                    return !Ut(t, "http://") && !Ut(t, "https://") ? `https://${t}` : t
                }
                _PRIVATE_getUrlForEvaluation(t, s) {
                    const n = jr(this._PRIVATE_normalizeUrl(t));
                    return n ? s.ignoreQueryParams && s.ignoreURIFragments ? `${n.origin}${n.pathname}` : s.ignoreQueryParams ? `${n.origin}${n.pathname}${n.hash}` : s.ignoreURIFragments ? `${n.origin}${n.pathname}${n.search}` : t : t
                }
                _PRIVATE_getRegexFlags(t) {
                    return t != null && t.ignoreCaseSensitivity ? "i" : ""
                }
                _PRIVATE_compileRegexRule(t) {
                    let s = null,
                        n = !1;
                    switch (t.operator) {
                        case zt.NOT_START:
                        case Bt.NOT_START:
                            n = !0;
                        case zt.START:
                        case Bt.START:
                            s = new Ee(`^${t.value}`, this._PRIVATE_getRegexFlags(t));
                            break;
                        case zt.NOT_END:
                        case Bt.NOT_END:
                            n = !0;
                        case zt.END:
                        case Bt.END:
                            s = new Ee(`${t.value}$`, this._PRIVATE_getRegexFlags(t));
                            break;
                        case zt.NOT_CONTAIN:
                        case Bt.NOT_CONTAIN:
                            n = !0;
                        case zt.CONTAIN:
                        case Bt.CONTAIN:
                        case Bt.REGEX:
                            s = new Ee(`${t.value}`, this._PRIVATE_getRegexFlags(t));
                            break;
                        case zt.NOT_EXACT:
                        case Bt.NOT_EXACT:
                            n = !0;
                        case zt.EXACT:
                        case Bt.EXACT:
                            s = new Ee(`^${t.value}$`, this._PRIVATE_getRegexFlags(t));
                            break;
                        case zt.REGEX_TO_RULE:
                            s = this._PRIVATE_buildRegexFromRule(t.value);
                            break;
                        default:
                            ft.warn(`compileRegexRule, unknown operator: ${t.operator}`)
                    }
                    if (s === null) return null;
                    const a = t.startDate ? this._PRIVATE_getValidDate(t.startDate) : void 0,
                        o = t.endDate ? this._PRIVATE_getValidDate(t.endDate) : void 0;
                    return {
                        regex: s,
                        ignoreQueryParams: t.ignoreQueryParams,
                        ignoreURIFragments: t.ignoreURIFragments,
                        notOperator: n,
                        samplingRate: t.samplingRate !== void 0 ? t.samplingRate : 100,
                        startDate: a,
                        endDate: o,
                        ruleInput: t
                    }
                }
                _PRIVATE_getValidDate(t) {
                    const s = new Date(t);
                    return isNaN(s.getTime()) ? void 0 : s
                }
                _PRIVATE_buildRegexFromRule(t) {
                    try {
                        const s = /^\/(.*)\/([gim]*)$/.exec(t);
                        if (s) {
                            const [, n, a] = s;
                            return new Ee(`^${n}$`, a)
                        }
                        return new Ee(`^${t}$`)
                    } catch (s) {
                        return ft.warn(`compileRegexRule, ${zt.REGEX_TO_RULE}, Invalid regex rule value "${t}" could not be compiled: ${s instanceof Error?s.message:String(s)}`), null
                    }
                }
            }
            return i
        })(),
        Ti = (() => {
            class i {
                constructor(t, s, n, a) {
                    this._PRIVATE_anonymizationConfig = t, this._PRIVATE_urlProvider = s, this._PRIVATE_urlRegexRulesEvaluator = n, this._PRIVATE_userConsentService = a
                }
                init() {
                    this._PRIVATE_initializeAnonymizationRules()
                }
                shouldMaskNonTextElements() {
                    const {
                        anonymisationMethod: t
                    } = this._PRIVATE_anonymizationConfig;
                    return t === $t.replayRecordingMaskedUrlRegexRules ? this._PRIVATE_anonymizationConfig.isSMB ? this.shouldUseAnonymization() : this._PRIVATE_anonymizationConfig.maskMedia ? !0 : this._PRIVATE_urlRegexRulesEvaluator.getMatchingRules(this._PRIVATE_urlProvider.getAnonymizedUrl()).some(n => n.maskMedia) : t === $t.replayRecordingUnmaskedUrlRegexRules ? this._PRIVATE_anonymizationConfig.maskMedia ? !this._PRIVATE_urlRegexRulesEvaluator.getMatchingRules(this._PRIVATE_urlProvider.getAnonymizedUrl()).some(n => n.maskMedia === !1 || n.maskMedia === 0) : !1 : !!this._PRIVATE_anonymizationConfig.maskMedia
                }
                shouldMaskNumbers() {
                    var s, n;
                    const {
                        anonymisationMethod: t
                    } = this._PRIVATE_anonymizationConfig;
                    return t === $t.replayRecordingMaskedUrlRegexRules ? !!(this._PRIVATE_anonymizationConfig.anonymizeDigits || this._PRIVATE_urlRegexRulesEvaluator.getMatchingRules(this._PRIVATE_urlProvider.getAnonymizedUrl()).some(c => c.maskNumbers || c.maskNumbers == null)) : t === $t.replayRecordingUnmaskedUrlRegexRules ? this._PRIVATE_anonymizationConfig.anonymizeDigits === !1 || this._PRIVATE_urlRegexRulesEvaluator.getMatchingRules(this._PRIVATE_urlProvider.getAnonymizedUrl()).some(c => c.maskNumbers !== !0 && c.maskNumbers !== 1) ? !1 : (s = this._PRIVATE_anonymizationConfig.anonymizeDigits) != null ? s : !0 : (n = this._PRIVATE_anonymizationConfig.anonymizeDigits) != null ? n : !1
                }
                shouldUseAnonymization() {
                    if (this._PRIVATE_userConsentService && !this._PRIVATE_userConsentService.isReplayUnanonymizedAllowedByConsent()) {
                        switch (this._PRIVATE_anonymizationConfig.anonymisationMethod) {
                            case null:
                            case $t.replayRecordingUnmaskedUrlRegex:
                                return !(this._PRIVATE_anonymizationConfig.replayRecordingUnmaskedUrlRegex && this._PRIVATE_anonymizationConfig.replayRecordingUnmaskedUrlRegex.test(this._PRIVATE_urlProvider.getAnonymizedUrl()));
                            case $t.replayRecordingUnmaskedUrlRegexRules:
                                const t = this._PRIVATE_urlRegexRulesEvaluator.getMatchingRules(this._PRIVATE_urlProvider.getAnonymizedUrl());
                                return !(t != null && t.some(s => s.maskText === !1 || s.maskText === 0 || s.maskText == null))
                        }
                        return !0
                    } else {
                        switch (this._PRIVATE_anonymizationConfig.anonymisationMethod) {
                            case null:
                            case $t.replayRecordingMaskedUrlRegex:
                                return !!(this._PRIVATE_anonymizationConfig.replayRecordingMaskedUrlRegex && this._PRIVATE_anonymizationConfig.replayRecordingMaskedUrlRegex.test(this._PRIVATE_urlProvider.getAnonymizedUrl()));
                            case $t.replayRecordingMaskedUrlRegexRules:
                                const t = this._PRIVATE_urlRegexRulesEvaluator.getMatchingRules(this._PRIVATE_urlProvider.getAnonymizedUrl());
                                return t == null ? void 0 : t.some(s => s.maskText === !0 || s.maskText === 1 || s.maskText == null)
                        }
                        return !1
                    }
                }
                _PRIVATE_initializeAnonymizationRules() {
                    this._PRIVATE_anonymizationConfig.anonymisationMethod === $t.replayRecordingMaskedUrlRegexRules && this._PRIVATE_anonymizationConfig.replayRecordingMaskedUrlRegexRules ? this._PRIVATE_urlRegexRulesEvaluator.setRegexRules(this._PRIVATE_anonymizationConfig.replayRecordingMaskedUrlRegexRules) : this._PRIVATE_anonymizationConfig.anonymisationMethod === $t.replayRecordingUnmaskedUrlRegexRules && this._PRIVATE_anonymizationConfig.replayRecordingUnmaskedUrlRegexRules && this._PRIVATE_urlRegexRulesEvaluator.setRegexRules(this._PRIVATE_anonymizationConfig.replayRecordingUnmaskedUrlRegexRules)
                }
            }
            return i
        })(),
        ou = (() => {
            class i extends Error {
                constructor(t, s) {
                    const n = s ? `Command misuse: ${t} - ${s}` : `Command misuse: ${t}`;
                    super(n), this.name = "MisusedCommandError"
                }
            }
            return i
        })();

    function x(i, e, t, s) {
        var n = arguments.length,
            a = n < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s,
            o;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(i, e, t, s);
        else
            for (var c = i.length - 1; c >= 0; c--)(o = i[c]) && (a = (n < 3 ? o(a) : n > 3 ? o(e, t, a) : o(e, t)) || a);
        return n > 3 && a && Object.defineProperty(e, t, a), a
    }
    typeof SuppressedError == "function" && SuppressedError;
    const cu = (() => {
            const e = class e {
                static _PRIVATE_sendInitialShadowRoots(s) {
                    this._PRIVATE_shadowRoots.forEach(n => {
                        s(n, "initial")
                    })
                }
                static _PRIVATE_observe(s) {
                    if (this._PRIVATE_mutationObserver || (this._PRIVATE_mutationObserver = new MutationObserver(n => {
                            for (const a of n) a.target.isConnected && Q(a.addedNodes, this._PRIVATE_findShadowRoots), Q(a.removedNodes, this._PRIVATE_removeShadowRoots)
                        })), this._PRIVATE_callbacks.push(s), !this._PRIVATE_started) {
                        this._PRIVATE_started = !0, this._PRIVATE_mutationObserver.observe(document, this._PRIVATE_mutationObserverOptions);
                        for (const n of ge.getAllShadowHosts(document)) {
                            const a = I(n, ke);
                            this._PRIVATE_shadowRoots.add(a), this._PRIVATE_mutationObserver.observe(a, this._PRIVATE_mutationObserverOptions)
                        }
                        this._PRIVATE_unsubscribeIntercept || (this._PRIVATE_unsubscribeIntercept = F(Element, "attachShadow", (n, {
                            result: a
                        }) => this._PRIVATE_isConnected(a) && this._PRIVATE_onShadowRootFound(a)))
                    }
                    this._PRIVATE_sendInitialShadowRoots(s)
                }
                static _PRIVATE_isConnected(s) {
                    return s.isConnected && s.ownerDocument === document
                }
                static _PRIVATE_disconnect(s) {
                    var n, a;
                    this._PRIVATE_callbacks = this._PRIVATE_callbacks.filter(o => o !== s), this._PRIVATE_callbacks.length === 0 && (this._PRIVATE_callbacks = [], this._PRIVATE_started = !1, (n = this._PRIVATE_mutationObserver) == null || n.disconnect(), (a = this._PRIVATE_unsubscribeIntercept) == null || a.call(this), this._PRIVATE_unsubscribeIntercept = null, this._PRIVATE_shadowRoots.clear())
                }
                constructor(s) {
                    this._PRIVATE_callback = s, this._PRIVATE_callback = Te("DocumentShadowRootObserver:callback", (n, a) => s(n, a))
                }
                get shadowRoots() {
                    return Wi(e._PRIVATE_shadowRoots)
                }
                static get shadowRootsCount() {
                    if (e._PRIVATE_started) return Wi(e._PRIVATE_shadowRoots).length
                }
                takeRecords() {
                    var s, n;
                    return (n = (s = e._PRIVATE_mutationObserver) == null ? void 0 : s.takeRecords()) != null ? n : []
                }
                observe() {
                    ge.isSupported() && e._PRIVATE_observe(this._PRIVATE_callback)
                }
                disconnect() {
                    ge.isSupported() && e._PRIVATE_disconnect(this._PRIVATE_callback)
                }
            };
            e._PRIVATE_callbacks = [], e._PRIVATE_shadowRoots = new Set, e._PRIVATE_started = !1, e._PRIVATE_unsubscribeIntercept = null, e._PRIVATE_mutationObserverOptions = {
                childList: !0,
                subtree: !0
            }, e._PRIVATE_onShadowRootFound = s => {
                e._PRIVATE_shadowRoots.has(s) || (e._PRIVATE_mutationObserver.observe(s, e._PRIVATE_mutationObserverOptions), e._PRIVATE_shadowRoots.add(s), Q(e._PRIVATE_callbacks, n => n(s, "added")))
            }, e._PRIVATE_findShadowRoots = s => {
                hi(s, NodeFilter.SHOW_DOCUMENT_FRAGMENT).visitAll(e._PRIVATE_onShadowRootFound)
            }, e._PRIVATE_removeShadowRoots = s => {
                s.isConnected || hi(s, NodeFilter.SHOW_DOCUMENT_FRAGMENT).visitAll(n => {
                    e._PRIVATE_shadowRoots.has(n) && (e._PRIVATE_shadowRoots.delete(n), Q(e._PRIVATE_callbacks, a => a(n, "removed")))
                })
            };
            let i = e;
            return x([pt()], i.prototype, "observe", null), x([pt()], i.prototype, "disconnect", null), i
        })(),
        ca = {
            childList: !0,
            subtree: !0,
            attributes: !0,
            characterData: !0,
            characterDataOldValue: !0,
            attributeOldValue: !0
        },
        la = (() => {
            const e = class e {
                static setShadowRootFilter(s) {
                    I(e.shadowRootFilters, it(s))
                }
                static _PRIVATE_observeNode(s) {
                    if (e.shadowRootFilters.length > 0 && Xi(s))
                        for (let n = 0; n < e.shadowRootFilters.length; n++) {
                            const a = e.shadowRootFilters[n];
                            if (a(s)) return
                        }
                    this.observedTargets.add(s), this.mutationObserver.observe(s, ca)
                }
                static disconnectShadowRoot(s) {
                    this.observedTargets.has(s) && (this.observedTargets.delete(s), this.isRefreshing || (this.isRefreshing = !0, Qi(() => {
                        this.isRefreshing = !1;
                        const n = this.mutationObserver.takeRecords();
                        n.length && e.mutationCallback(n), this.mutationObserver.disconnect(), this.observedTargets.forEach(a => {
                            this.mutationObserver.observe(a, ca)
                        })
                    })))
                }
                static observe(s, n) {
                    I(this.callbacks, it(s)), n && I(this.shadowRootCallbacks, it(n)), this.started ? n && ge.getAllShadowHosts(document).forEach(a => n(I(a, ke), "initial")) : (this.mutationObserver = new MutationObserver(this.mutationCallback), this._PRIVATE_observeNode(document), this.shadowRootObserver = new cu(this.onShadowRoot), this.shadowRootObserver.observe(), this.started = !0, Q(this.shadowRootObserver.shadowRoots, a => {
                        this._PRIVATE_observeNode(a)
                    }))
                }
                static disconnect(s, n) {
                    var a, o;
                    this.callbacks = I(this.callbacks, xe(c => c !== s)), n && (this.shadowRootCallbacks = I(this.shadowRootCallbacks, xe(c => c !== n))), this.callbacks.length === 0 && (this.callbacks = [], this.shadowRootCallbacks = [], e.shadowRootFilters = [], (a = this.shadowRootObserver) == null || a.disconnect(), (o = this.mutationObserver) == null || o.disconnect(), this.observedTargets.clear(), this.started = !1)
                }
                constructor(s, n) {
                    this._PRIVATE_callback = s, this._PRIVATE_shadowRootCallback = n;
                    const a = ru(o => s(o, this), !0);
                    this._PRIVATE_callback = Te("DocumentMutationObserver:callback", o => {
                        Q(o, c => a.push(c))
                    })
                }
                get shadowRoots() {
                    var s, n;
                    return (n = (s = e.shadowRootObserver) == null ? void 0 : s.shadowRoots) != null ? n : []
                }
                takeRecords() {
                    var a;
                    const s = (a = e.mutationObserver) == null ? void 0 : a.takeRecords(),
                        n = e.shadowRootObserver.takeRecords();
                    return s != null && s.length && n.length ? hl(s, n) : s != null ? s : n
                }
                observe() {
                    e.observe(this._PRIVATE_callback, this._PRIVATE_shadowRootCallback)
                }
                disconnect() {
                    e.disconnect(this._PRIVATE_callback, this._PRIVATE_shadowRootCallback)
                }
            };
            e.callbacks = [], e.shadowRootCallbacks = [], e.started = !1, e.observedTargets = new Set, e.shadowRootFilters = [], e.mutationCallback = s => {
                nt.counters.mutations.push(s.length), e.callbacks.forEach(n => n(s, e.mutationObserver))
            }, e.onShadowRoot = (s, n) => {
                Q(e.shadowRootCallbacks, a => a(s, n)), n !== "removed" ? e._PRIVATE_observeNode(s) : e.disconnectShadowRoot(s)
            }, e.isRefreshing = !1;
            let i = e;
            return x([pt()], i.prototype, "observe", null), x([pt()], i.prototype, "disconnect", null), i
        })(),
        lu = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_callback = t, this._PRIVATE_observerTargets = new Map, this._PRIVATE_isBeingObserved = s => {
                        const n = s.target;
                        if (this._PRIVATE_observerTargets.has(n)) return !0;
                        let a = !1;
                        return this._PRIVATE_observerTargets.forEach((o, c) => {
                            a || !this._PRIVATE_observerTargets.get(c).subtree || (a = c.contains(n))
                        }), a
                    }, this._PRIVATE_mutationObserver = new MutationObserver(s => {
                        tn.isScheduled(this, this.garbageCollect) && (s = vr(s, this._PRIVATE_isBeingObserved)), s.length && Qi(() => t(s, this))
                    })
                }
                disconnect() {
                    this._PRIVATE_mutationObserver.disconnect(), this._PRIVATE_observerTargets = new Map
                }
                takeRecords() {
                    return this._PRIVATE_mutationObserver.takeRecords()
                }
                observe(t, s) {
                    return this._PRIVATE_observerTargets.set(t, s), this._PRIVATE_mutationObserver.observe(t, s)
                }
                unobserve(t) {
                    this._PRIVATE_observerTargets.has(t) && (this._PRIVATE_observerTargets.delete(t), this.garbageCollect())
                }
                garbageCollect() {
                    const t = vr(this.takeRecords(), this._PRIVATE_isBeingObserved);
                    t.length && this._PRIVATE_callback(t, this), this._PRIVATE_mutationObserver.disconnect(), this._PRIVATE_observerTargets.forEach((s, n) => this._PRIVATE_mutationObserver.observe(n, s))
                }
            }
            return x([tn()], i.prototype, "garbageCollect", null), i
        })(),
        uu = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_callback = t, this._PRIVATE_tickSet = new oa, this._PRIVATE_findAllTexts = s => {
                        Qi(() => {
                            for (const n of s) n.type === "childList" && Q(n.addedNodes, a => {
                                hi(a, NodeFilter.SHOW_TEXT).visitAll(c => {
                                    this._PRIVATE_tickSet.has(c) || (this._PRIVATE_tickSet.add(c), this._PRIVATE_callback(c))
                                })
                            })
                        })
                    }, this._PRIVATE_documentMutationObserver = new la(this._PRIVATE_findAllTexts)
                }
                observe() {
                    this._PRIVATE_documentMutationObserver.observe(), hi(document, NodeFilter.SHOW_TEXT).visitAll(s => {
                        this._PRIVATE_tickSet.add(s), this._PRIVATE_callback(s)
                    })
                }
                disconnect() {
                    this._PRIVATE_tickSet.clear(), this._PRIVATE_documentMutationObserver.disconnect()
                }
            }
            return i
        })(),
        ua = (() => {
            class i {
                static create(t, s) {
                    if (!i.isSupported()) throw new Error("IntersectionObserver is not supported");
                    if (s && s.delay && s.delay < 100) throw new Error("Visibility delay should be > 100ms");
                    return s != null && s.trackVisibility && (t = i._PRIVATE_patchCallback(t)), new IntersectionObserver(t, s)
                }
                static isSupported() {
                    return !!window.IntersectionObserver && !!window.IntersectionObserverEntry
                }
                static _PRIVATE_patchCallback(t) {
                    return (s, n) => t(ll(s, hu), n)
                }
            }
            return i
        })();

    function hu(i) {
        return i.isVisible || !Re.isVisibleInViewportInForeground(i.target) ? i : {
            boundingClientRect: i.boundingClientRect,
            intersectionRatio: i.intersectionRatio,
            intersectionRect: i.intersectionRect,
            isIntersecting: i.isIntersecting,
            rootBounds: i.rootBounds,
            target: i.target,
            time: i.time,
            isVisible: !0
        }
    }
    const _u = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_callback = t, this._PRIVATE_observedNodes = new Set
                }
                onMutations(t) {
                    if (Zs(t, s => {
                            var n;
                            return !!((n = s.removedNodes) != null && n.length)
                        }))
                        for (const s of this._PRIVATE_observedNodes.values()) Re.isConnected(s) || (this._PRIVATE_observedNodes.delete(s), this._PRIVATE_callback(s))
                }
                observe(t) {
                    this._PRIVATE_observer || (this._PRIVATE_observer = new la(s => setTimeout(() => this.onMutations(s))), this._PRIVATE_observer.observe()), this._PRIVATE_observedNodes.add(t)
                }
                disconnect() {
                    var t;
                    (t = this._PRIVATE_observer) == null || t.disconnect(), this._PRIVATE_observedNodes.clear(), this._PRIVATE_observer = void 0
                }
            }
            return x([pt("NodeDisconnectedObserver.onMutations")], i.prototype, "onMutations", null), i
        })(),
        du = 300,
        un = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_elementsToRecheck = new Set, this._PRIVATE_nodeDisconnectedObserver = new _u(s => this._PRIVATE_recheckCssVisibility(s)), this._PRIVATE_started = !1, this._PRIVATE_generation = 0, this._PRIVATE_options = t ? { ...ha,
                        ...t
                    } : ha
                }
                stop() {
                    var t, s;
                    this._PRIVATE_started = !1, this._PRIVATE_generation++, (t = this._PRIVATE_intersectionObserver) == null || t.disconnect(), (s = this._PRIVATE_mutationObserver) == null || s.disconnect()
                }
                start(t) {
                    if (this._PRIVATE_started) throw new Error("VisibilityObserver is already started");
                    this._PRIVATE_callback = Te("VisibilityObserver:callback", (a, o) => t(a, o));
                    const s = {
                            root: null,
                            rootMargin: "0px",
                            threshold: .5,
                            trackVisibility: !0,
                            delay: du
                        },
                        n = this._PRIVATE_generation;
                    this._PRIVATE_intersectionObserver = ua.create(a => this.handleIntersection(a, n), s), this._PRIVATE_mutationObserver = new lu(a => setTimeout(() => {
                        Q(a, o => this._PRIVATE_recheckCssVisibility(o.target))
                    })), this._PRIVATE_init(), this._PRIVATE_started = !0
                }
                observe(t) {
                    if (!this._PRIVATE_started) throw new Error("Observer is stopped.");
                    this._PRIVATE_options.reobserve === !1 && t[this._PRIVATE_OBSERVED_ELEMENT] || (t[this._PRIVATE_OBSERVED_ELEMENT] = !0, this.watchIntersection(t))
                }
                _PRIVATE_init() {
                    this._PRIVATE_IS_VISIBLE = Symbol("isVisible"), this._PRIVATE_OBSERVED_ELEMENT = Symbol("ObservedElement"), this._PRIVATE_LINKED_ELEMENT = Symbol("LinkedElement"), this._PRIVATE_TRACKED = Symbol("Tracked")
                }
                _PRIVATE_recheckCssVisibility(t) {
                    this._PRIVATE_elementsToRecheck.add(t);
                    for (const s of this._PRIVATE_getLinkedElements(t)) this._PRIVATE_elementsToRecheck.add(s);
                    this.recheckCssVisibilityAll()
                }
                recheckCssVisibilityAll() {
                    Q(this._PRIVATE_elementsToRecheck.keys(), t => {
                        !t.isConnected || Re.areAncestorsHiddenByCSS(t) || t[this._PRIVATE_OBSERVED_ELEMENT] && this.watchIntersection(t)
                    }), this._PRIVATE_elementsToRecheck.clear()
                }
                watchIntersection(t) {
                    this._PRIVATE_mutationObserver.unobserve(t), this._PRIVATE_intersectionObserver.unobserve(t);
                    const s = Re.getTopAncestorHiddenByCSS(t);
                    s ? (s !== t && (this._PRIVATE_linkElements(s, t), this.watchMutation(s)), this.watchMutation(t)) : this._PRIVATE_intersectionObserver.observe(t)
                }
                watchMutation(t, s = !0) {
                    s && delete t[this._PRIVATE_IS_VISIBLE], this._PRIVATE_intersectionObserver.unobserve(t);
                    const n = {
                        attributeFilter: ["style", "class", "hidden"]
                    };
                    this._PRIVATE_mutationObserver.observe(t, n)
                }
                handleIntersection(t, s) {
                    if (this._PRIVATE_generation === s) {
                        for (const n of t) {
                            const a = n.target;
                            if (!n.isVisible) {
                                Re.isVisibleInDocument(a) || this._PRIVATE_watchHiddenElement(a);
                                continue
                            }
                            const o = this._PRIVATE_options.allowSameMatch || !n.target[this._PRIVATE_IS_VISIBLE];
                            n.target[this._PRIVATE_IS_VISIBLE] = !0, o && !this._PRIVATE_options.delay && this.onVisibilityChanged(n.target, ts.VisibleInViewPort)
                        }
                        this._PRIVATE_options.delay && setTimeout(() => {
                            if (this._PRIVATE_generation === s)
                                for (const n of t) {
                                    const a = n.isIntersecting && n.isVisible;
                                    n.target[this._PRIVATE_IS_VISIBLE] && a && this.onVisibilityChanged(n.target, ts.VisibleInViewPort)
                                }
                        }, this._PRIVATE_options.delay)
                    }
                }
                _PRIVATE_watchHiddenElement(t) {
                    const s = Re.getTopElement(t);
                    this.watchMutation(t), s && (this._PRIVATE_nodeDisconnectedObserver.observe(s), this._PRIVATE_linkElements(s, t), this.watchMutation(s, !1))
                }
                _PRIVATE_linkElements(t, s) {
                    var a;
                    (t[this._PRIVATE_LINKED_ELEMENT] = (a = t[this._PRIVATE_LINKED_ELEMENT]) != null ? a : new Set).add(s)
                }
                _PRIVATE_getLinkedElements(t) {
                    var a, o;
                    const s = [],
                        n = (o = (a = t[this._PRIVATE_LINKED_ELEMENT]) == null ? void 0 : a.values()) != null ? o : [];
                    return Q(n, c => s.push(c)), s
                }
                onVisibilityChanged(t, s) {
                    if (s === ts.VisibleInViewPort && this._PRIVATE_options.trackOnce) {
                        if (this._PRIVATE_intersectionObserver.unobserve(t), this._PRIVATE_mutationObserver.unobserve(t), t[this._PRIVATE_TRACKED]) return;
                        t[this._PRIVATE_TRACKED] = !0
                    }
                    this._PRIVATE_callback(t, s)
                }
                static isSupported() {
                    return ua.isSupported()
                }
            }
            return x([pt()], i.prototype, "observe", null), x([en({
                wait: 50
            }), pt(), ji()], i.prototype, "recheckCssVisibilityAll", null), x([pt()], i.prototype, "watchIntersection", null), x([pt()], i.prototype, "watchMutation", null), x([pt(), ji()], i.prototype, "handleIntersection", null), x([pt()], i.prototype, "onVisibilityChanged", null), i
        })(),
        ts = (() => {
            let i;
            return function(e) {
                e.VisibleInViewPort = "VisibleInViewPort", e.HiddenByAnother = "HiddenByAnother", e.Hidden = "Hidden"
            }(i || (i = {})), i
        })(),
        ha = {
            delay: 1e3,
            trackOnce: !0,
            reobserve: !1
        },
        _a = (() => {
            class i {
                constructor() {
                    this._PRIVATE__length = 0
                }
                get length() {
                    return this._PRIVATE__length
                }
                get isEmpty() {
                    return !this._PRIVATE_head
                }
                peek() {
                    var t;
                    return (t = this._PRIVATE_head) == null ? void 0 : t[0]
                }
                pushAll(t) {
                    for (let s = 0; s < t.length; s++) this.push(t[s])
                }
                push(t) {
                    this._PRIVATE__length++, this._PRIVATE_tail ? this._PRIVATE_tail = this._PRIVATE_tail[1] = [t, void 0] : this._PRIVATE_tail = this._PRIVATE_head = [t, void 0]
                }
                pop() {
                    if (!this._PRIVATE_head) return null;
                    this._PRIVATE__length--;
                    const t = this._PRIVATE_head[0];
                    return this._PRIVATE_head = this._PRIVATE_head[1], this._PRIVATE_head || (this._PRIVATE_tail = void 0), t
                }
                forEach(t) {
                    let s = this._PRIVATE_head;
                    for (; s != null && s.length;) t(s[0]), s = s[1]
                }
                clear() {
                    this._PRIVATE__length = 0, this._PRIVATE_head = this._PRIVATE_tail = void 0
                }
            }
            return i
        })(),
        Eu = 5,
        fu = "uxa",
        Tu = "No stacktrace",
        gu = "https://t.contentsquare.net";
    let hn = !1,
        _n = !1;
    const Ru = i => {
            if (!hn) {
                hn = !0;
                try {
                    const e = i.filename || "";
                    if (e.startsWith(gu) || e.includes("blob:") || !e) {
                        const s = i.error instanceof Error ? i.error : new Error(i.message || "Unknown error");
                        G.critical(s)
                    }
                } finally {
                    hn = !1
                }
            }
        },
        pu = i => {
            if (!_n) {
                _n = !0;
                try {
                    if (i.reason instanceof Error) {
                        G.critical(i.reason);
                        return
                    }
                    let e;
                    try {
                        e = typeof i.reason == "object" && i.reason !== null ? Lt.stringify(i.reason) : String(i.reason)
                    } catch {
                        e = String(i.reason)
                    }
                    G.critical(new Error(e))
                } finally {
                    _n = !1
                }
            }
        };
    self.addEventListener("error", Ru), self.addEventListener("unhandledrejection", pu);
    const G = (() => {
        class i {
            static setRequest(t) {
                this._PRIVATE_request = t
            }
            static setVisitorService(t) {
                this._PRIVATE_visitorService = t
            }
            static setSessionService(t) {
                this._PRIVATE_sessionService = t
            }
            static computeIsActive(t) {
                i._PRIVATE_isActive = Ue.boolean(t)
            }
            static isLoggingActive() {
                return i._PRIVATE_isActive
            }
            static async debug(t, s = "") {
                i._PRIVATE_isActive && await this._PRIVATE_send(t, s, _t.debug)
            }
            static async warn(t, s = !0, n = "") {
                nt.counters.errors.count("warning"), i._PRIVATE_isActive && s && await this._PRIVATE_send(t, n, _t.warn)
            }
            static async error(t, s = "") {
                nt.counters.errors.count("error"), i._PRIVATE_isActive && await this._PRIVATE_send(t, s, _t.error)
            }
            static critical(t, s = "") {
                nt.counters.errors.count("critical"), this._PRIVATE_send(t, s, _t.critical)
            }
            static implementation() {}
            static isPerfLoggingActive() {
                return !1
            }
            static async _PRIVATE_send(t, s = "", n = _t.warn) {
                if (!this._PRIVATE_isLoggingAllowed(n, s)) return;
                this._PRIVATE_logTrack[n].push(s || "");
                const a = {
                    message: this._PRIVATE_getMessage(t, s),
                    stacktrace: await this._PRIVATE_getStacktrace(t),
                    app: fu,
                    level: n
                };
                this._PRIVATE_request.send(a)
            }
            static _PRIVATE_isLoggingAllowed(t, s) {
                if (Pr[t] < this._PRIVATE_minLogLevelValue) return !1;
                const n = this._PRIVATE_logTrack[t];
                return n.length >= Eu ? !1 : !(s && n.some(a => a === s))
            }
            static _PRIVATE_getMessage(t, s) {
                let n = Yi(t) ? this._PRIVATE_pii.anonymizePII(t.message || t.toString()) : t;
                return s && (n += ` ErrorCode: ${s}`), n
            }
            static async _PRIVATE_getStacktrace(t) {
                return Yi(t) ? `${t.stack||Tu} ${await this._PRIVATE_getContext()}` : this._PRIVATE_getContext()
            }
            static async _PRIVATE_getContext() {
                const t = this._PRIVATE_getVisitorService(),
                    s = await (t == null ? void 0 : t.getVisitor());
                if (!s) return "No context";
                const n = this._PRIVATE_getSessionService(),
                    a = n && await n.getSession(),
                    o = {
                        userId: s.id,
                        sessionNumber: s.visitsCount,
                        pageNumber: a && a.pageNumber
                    };
                return Lt.stringify(o)
            }
            static _PRIVATE_getVisitorService() {
                return this._PRIVATE_visitorService
            }
            static _PRIVATE_getSessionService() {
                return this._PRIVATE_sessionService
            }
        }
        return i._PRIVATE_minLogLevelValue = Pr[_t.warn], i._PRIVATE_pii = new Ct, i._PRIVATE_isActive = !1, i._PRIVATE_logTrack = {
            [_t.debug]: [],
            [_t.warn]: [],
            [_t.implementation]: [],
            [_t.error]: [],
            [_t.critical]: []
        }, i._PRIVATE_visitorService = null, i._PRIVATE_sessionService = null, i
    })();
    var es;
    (function(i) {
        i.replayRecordingUnmaskedUrlRegex = "replayRecordingUnmaskedUrlRegex", i.replayRecordingMaskedUrlRegex = "replayRecordingMaskedUrlRegex", i.replayRecordingUnmaskedUrlRegexRules = "replayRecordingUnmaskedUrlRegexRules", i.replayRecordingMaskedUrlRegexRules = "replayRecordingMaskedUrlRegexRules"
    })(es || (es = {}));
    var da;
    (function(i) {
        i.START = "start", i.NOT_START = "not-start", i.END = "end", i.NOT_END = "not-end", i.CONTAIN = "contain", i.NOT_CONTAIN = "not-contain", i.EXACT = "exact", i.NOT_EXACT = "not-exact"
    })(da || (da = {}));
    const {
        logger: dn
    } = ai("scheduler");
    class is {
        constructor(e) {
            if (this._length = 0, e)
                for (const t of e) this.push(t)
        }
        get length() {
            return this._length
        }
        push(e) {
            this._length++, this.tail ? this.tail = this.tail[1] = [e, void 0] : this.tail = this.head = [e, void 0]
        }
        shift() {
            if (!this.head) return;
            this._length--;
            const e = this.head[0];
            return this.head = this.head[1], this.head || (this.tail = void 0), e
        }
        isEmpty() {
            return !this.head
        }
    }
    var gi = (i => (i[i.High = 0] = "High", i[i.Low = 1] = "Low", i))(gi || {});
    class ss {
        constructor() {
            this.highPriorityQueue = new is, this.lowPriorityQueue = new is
        }
        get length() {
            return this.highPriorityQueue.length + this.lowPriorityQueue.length
        }
        push(e, t = 1) {
            return t === 0 ? this.highPriorityQueue.push(e) : this.lowPriorityQueue.push(e), this.length
        }
        shift() {
            var e;
            return (e = this.highPriorityQueue.shift()) != null ? e : this.lowPriorityQueue.shift()
        }
        isEmpty() {
            return this.length === 0
        }
    }

    function mu() {
        if (typeof performance != "undefined" && typeof performance.now == "function") try {
            const i = performance.now();
            if (Number.isFinite(i)) return () => performance.now()
        } catch {}
        return () => Date.now()
    }
    const Ri = mu();
    var Pt = (i => (i[i.Continue = 1] = "Continue", i[i.Stop = 0] = "Stop", i[i.Reschedule = 2] = "Reschedule", i))(Pt || {});
    const Ea = 40,
        Iu = 10;
    class Au {
        constructor() {
            this.mainTaskQueue = new ss, this.processTaskQueue = () => {
                setTimeout(() => {
                    const e = this.createDeadline();
                    if (this.processOnce(e), !e.hasTimeLeft) {
                        const t = e.elapsedTime;
                        t > Ea * 3 && dn.warn(`Task largely exceeded maximum duration: ${t.toFixed(2)}ms`)
                    }(this.currentTask || !this.mainTaskQueue.isEmpty()) && this.processTaskQueue()
                }, 0)
            }
        }
        createDeadline() {
            const e = Ri();
            let t = 0,
                s = !0;
            return {
                get hasTimeLeft() {
                    return s && t++ % Iu === 0 && (s = Ri() - e < Ea), s
                },
                get elapsedTime() {
                    return Ri() - e
                }
            }
        }
        createUnlimitedDeadline() {
            const e = Ri();
            return {
                get hasTimeLeft() {
                    return !0
                },
                get elapsedTime() {
                    return Ri() - e
                }
            }
        }
        dequeueNextTask() {
            var t, s, n;
            const e = (s = (t = this.currentTask) == null ? void 0 : t.subTasks) == null ? void 0 : s.shift();
            return e ? (e.subTasks = (n = this.currentTask) == null ? void 0 : n.subTasks, e) : this.mainTaskQueue.shift()
        }
        enqueueAsSubtask(e, t) {
            this.currentTask && (this.currentTask.subTasks = this.currentTask.subTasks || new ss, this.currentTask.subTasks.push(e, t))
        }
        enqueueAsMainTask(e, t) {
            return this.mainTaskQueue.push(e, t) === 1 && !this.currentTask
        }
        runScheduledTask(e, t) {
            e.isRunning = !0;
            let s = 0;
            try {
                const n = e.run(t);
                s = n === 1 || n === 2 ? n : 0, e.isEnded = s === 0
            } catch (n) {
                n instanceof Error ? dn.error("Error occurred while running task (schedulerTaskError)", n) : dn.error(`Error occurred while running task (schedulerTaskError): ${String(n)}`), e.isEnded = !0
            }
            return e.isRunning = !1, s
        }
        isTaskComplete(e) {
            return e.isEnded || e.isAborted
        }
        processOnce(e) {
            var t;
            for (this.currentTask = (t = this.currentTask) != null ? t : this.dequeueNextTask(); e.hasTimeLeft && this.currentTask;) {
                if (this.currentTask.isAborted) {
                    this.currentTask = this.dequeueNextTask();
                    continue
                }
                this.runScheduledTask(this.currentTask, e) === 2 ? (this.mainTaskQueue.push(this.currentTask, this.currentTask.priority), this.currentTask = this.dequeueNextTask()) : this.isTaskComplete(this.currentTask) && (this.currentTask = this.dequeueNextTask())
            }
        }
        task(e, t = gi.Low) {
            var n;
            const s = {
                run: e,
                isAborted: !1,
                isEnded: !1,
                priority: t,
                abort() {
                    this.isAborted = !0
                }
            };
            return (n = this.currentTask) != null && n.isRunning ? this.enqueueAsSubtask(s, t) : this.enqueueAsMainTask(s, t) && this.processTaskQueue(), s
        }
        flush() {
            this.processOnce(this.createUnlimitedDeadline())
        }
        clear() {
            this.mainTaskQueue = new ss, this.currentTask = void 0
        }
        isWorking() {
            return this.currentTask !== void 0 || !this.mainTaskQueue.isEmpty()
        }
    }

    function Pu(i, e) {
        if (i === e) return !0;
        if (i == null || e == null || typeof i != typeof e || typeof i != "object" || Array.isArray(i) !== Array.isArray(e)) return !1;
        if (Array.isArray(i)) return i.length !== e.length ? !1 : i.every((n, a) => n === e[a]);
        const t = Object.keys(i),
            s = Object.keys(e);
        return t.length !== s.length ? !1 : t.every(n => i[n] === e[n])
    }

    function Ie(i, e = 15) {
        if (!i || typeof i != "object") return i;
        const t = [],
            s = a => {
                if (Array.isArray(a)) return Array.from(a);
                const o = {},
                    c = Object.keys(a);
                if (c.length > 0 && t.push({
                        source: a,
                        target: o,
                        keys: c,
                        index: 0
                    }) > e) {
                    const d = t.map(f => f.keys[f.index - 1]).join(".");
                    throw new Error(`Too deep object to clone probably due to circular reference at "${d.length>100?d.slice(0,100)+"...":d}"`)
                }
                return o
            },
            n = s(i);
        for (; t.length > 0;) {
            const a = t[t.length - 1];
            if (a.index >= a.keys.length) {
                t.pop();
                continue
            }
            const o = a.keys[a.index++],
                c = a.source[o];
            if (!c || typeof c != "object") {
                a.target[o] = c;
                continue
            }
            const h = s(c);
            a.target[o] = h
        }
        return n
    }

    function fa(i) {
        for (const e in i)
            if (i[e] !== void 0) return !0;
        return !1
    }

    function Ta(i, e) {
        if (Array.isArray(i) && Array.isArray(e)) return i.length !== e.length || i.some((n, a) => n !== e[a]) ? Ie(e) : void 0;
        const t = {},
            s = new Set([...Object.keys(i || {}), ...Object.keys(e || {})]);
        for (const n of s) {
            const a = i[n],
                o = e[n];
            if (a === o) continue;
            const c = typeof a;
            if (c !== typeof o) a === void 0 && o !== void 0 ? t[n] = o : a !== void 0 && o === void 0 && (t[n] = null);
            else if (c === "object" && a && o) {
                const d = Ta(a, o);
                d !== void 0 && (t[n] = d)
            } else t[n] = Ie(o)
        }
        return fa(t) ? t : void 0
    }

    function ga(i, e) {
        const t = e,
            s = i;
        let n;
        for (const a in t) {
            const o = t[a];
            if (o === null) a in s && (n || (n = { ...s
            }), delete n[a]);
            else if (o !== void 0) {
                const c = s[a];
                if (c && typeof c == "object" && o && typeof o == "object" && !Array.isArray(c) && !Array.isArray(o)) {
                    const h = ga(c, o);
                    h !== c && (n || (n = { ...s
                    }), n[a] = h)
                } else c !== o && (n || (n = { ...s
                }), n[a] = o)
            }
        }
        return n != null ? n : s
    }

    function Ra(i) {
        let e = null;
        return t => t ? e = t : e || (e = i())
    }
    const Su = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);

    function pa(i) {
        return i.indexOf("-") > 0 && i.indexOf(":") === -1 && i.indexOf('"') === -1 && i.indexOf(",") === -1 && !Su.has(i)
    }
    const ze = Ra(() => new WeakMap),
        En = Ra(() => new Set);
    var Yt;
    (i => {
        function e(d) {
            return ze().get(d)
        }
        i.getAll = e;

        function t(d, f) {
            var T;
            return (T = ze().get(d)) == null ? void 0 : T[f]
        }
        i.get = t;

        function s(d, f, T) {
            let g = ze().get(d);
            g || ze().set(d, g = {}), !Pu(g[f], T) && (g[f] = T, o(d))
        }
        i.set = s;

        function n(d, f) {
            const T = ze().get(d);
            T && (delete T[f], o(d))
        }
        i.remove = n;

        function a() {
            ze(new WeakMap)
        }
        i.reset = a;

        function o(d) {
            for (const f of En()) f(d)
        }

        function c(d) {
            En().add(d)
        }
        i.subscribe = c;

        function h(d) {
            En().delete(d)
        }
        i.unsubscribe = h
    })(Yt || (Yt = {}));
    let Vu = 1,
        ma = Symbol("nodeIdentifier");

    function J(i) {
        const e = i[ma];
        return e != null ? e : i[ma] = Vu++
    }
    var M = (i => (i[i.ELEMENT_NODE = 1] = "ELEMENT_NODE", i[i.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", i[i.TEXT_NODE = 3] = "TEXT_NODE", i[i.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", i[i.COMMENT_NODE = 8] = "COMMENT_NODE", i[i.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", i[i.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", i[i.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", i[i.CSS_STYLESHEET_NODE = 50] = "CSS_STYLESHEET_NODE", i))(M || {}),
        pi = (i => (i[i.Closed = 0] = "Closed", i[i.Open = 1] = "Open", i[i.OpenModal = 2] = "OpenModal", i))(pi || {});
    const {
        logger: Ae
    } = ai("fastDom");
    class vu {
        constructor(e) {
            this.emit = e, this.isSubscribed = !1, this.observedNodes = new WeakSet, this.pushMetadataChanged = t => {
                const s = t.ownerDocument || t;
                s && this.observedNodes.has(s) && this.emit(t)
            }
        }
        observe(e) {
            this.observedNodes.has(e) || (this.observedNodes.add(e), this.isSubscribed || (Yt.subscribe(this.pushMetadataChanged), this.isSubscribed = !0))
        }
        disconnect() {
            this.isSubscribed && (Yt.unsubscribe(this.pushMetadataChanged), this.isSubscribed = !1), this.observedNodes = new WeakSet
        }
    }
    class bu {
        constructor(e) {
            this.emit = e, this.subscriptions = new WeakMap, this.internalsToHost = new WeakMap, this.pushStateChange = t => {
                this.emit({
                    type: "state",
                    target: t
                }), this.pushRadioGroupSiblingsState(t)
            }, this.pushSetAdoptedStyleSheets = t => this.emit({
                type: "setAdoptedStyleSheets",
                target: t
            }), this.pushCSSStyleSheetUpdated = t => this.emit({
                type: "styleSheetUpdated",
                target: t
            }), this.pushElementAnimationUpdated = t => this.emit({
                type: "animationUpdated",
                target: t
            }), this.pushAnimationUpdated = async (t, {
                name: s
            }) => {
                const n = t.effect,
                    a = n == null ? void 0 : n.target;
                a && ((s === "updatePlaybackRate" || s === "reverse") && await t.ready, this.emit({
                    type: "animationUpdated",
                    target: a
                }))
            }, this.pushStyleSheetUpdateRule = t => {
                var n;
                const s = (n = this.getParentRule(t)) == null ? void 0 : n.parentStyleSheet;
                s && this.pushCSSStyleSheetUpdated(s)
            }, this.pushDisabledStylesheetChanged = t => this.emit({
                type: "styleSheetDisabledChanged",
                target: t
            }), this.pushActiveElement = t => {
                const s = t.ownerDocument;
                s && this.emit({
                    type: "activeElementChanged",
                    target: s
                })
            }, this.pushMetadataChanged = t => this.emit({
                type: "metadataChanged",
                target: t
            })
        }
        pushRadioGroupSiblingsState(e) {
            if (e.localName !== "input" || e.type !== "radio" || e.checked !== !0) return;
            const t = e,
                {
                    name: s,
                    form: n
                } = t;
            if (!s) return;
            const o = t.getRootNode().querySelectorAll(`input[type="radio"][name="${CSS.escape(s)}"]`);
            for (let c = 0; c < o.length; c++) {
                const h = o[c];
                h !== t && h.form === n && this.emit({
                    type: "state",
                    target: h
                })
            }
        }
        isRootDocument(e) {
            return e.nodeType === M.DOCUMENT_NODE
        }
        initCommonListeners(e) {
            const t = [gt(e, "input", s => this.pushStateChange(s.target)), gt(e, "change", s => this.pushStateChange(s.target)), gt(e, "checked", s => this.pushStateChange(s.target)), gt(e, "scroll", s => this.pushStateChange(s.target)), gt(e, "toggle", s => this.pushStateChange(s.target)), gt(e, "focusin", s => this.pushActiveElement(s.target)), gt(e, "focusout", s => this.pushActiveElement(s.target)), gt(e, "pointerover", s => {
                const n = s.target,
                    a = n.ownerDocument;
                a && this.emit({
                    type: "pointerOverElement",
                    target: a,
                    element: n
                })
            }), gt(e, "pointerout", s => {
                const a = s.target.ownerDocument;
                a && this.emit({
                    type: "pointerOverElement",
                    target: a,
                    element: null
                })
            }), gt(e, "load", s => {
                const n = s.target;
                switch (n.localName) {
                    case "iframe":
                    case "link":
                        this.emit({
                            type: "loaded",
                            target: n
                        });
                        break
                }
            })];
            this.onDisconnect(e, () => {
                t.forEach(s => s())
            })
        }
        initRootListeners(e) {
            const t = e.defaultView;
            if (!t) return;
            const s = [gt(t, "resize", () => this.pushStateChange(e)), ...t.visualViewport ? [gt(t.visualViewport, "resize", () => this.pushStateChange(e)), gt(t.visualViewport, "scroll", () => this.pushStateChange(e))] : [], gt(e, "visibilitychange", () => this.pushStateChange(e)), gt(e, "fullscreenchange", () => this.pushStateChange(e)), F(t.Document, "adoptedStyleSheets", this.pushSetAdoptedStyleSheets, {
                mode: Ei.Methods
            }), F(t.ShadowRoot, "adoptedStyleSheets", this.pushSetAdoptedStyleSheets, {
                mode: Ei.Methods
            }), F(t.Element, "attachShadow", (n, {
                result: a
            }) => {
                this.emit({
                    type: "attachShadow",
                    target: n,
                    shadowRoot: a
                })
            }), F(t.HTMLElement, "attachInternals", (n, {
                result: a
            }) => {
                this.internalsToHost.set(a, n)
            }), F(t.ElementInternals, "setValidity", n => {
                const a = this.internalsToHost.get(n);
                a && this.pushStateChange(a)
            }), F(t.HTMLInputElement, "value", this.pushStateChange), F(t.HTMLInputElement, "checked", this.pushStateChange), F(t.HTMLSelectElement, "selectedIndex", this.pushStateChange), F(t.CSSStyleSheet, "insertRule", this.pushCSSStyleSheetUpdated), F(t.CSSStyleSheet, "deleteRule", this.pushCSSStyleSheetUpdated), F(t.CSSStyleSheet, "replace", this.pushCSSStyleSheetUpdated), F(t.CSSStyleSheet, "replaceSync", this.pushCSSStyleSheetUpdated), F(t.CSSStyleSheet, "addRule", this.pushCSSStyleSheetUpdated), F(t.CSSStyleRule, "style", this.pushStyleSheetUpdateRule, {
                mode: Ei.Properties
            }), F(t.CSSGroupingRule, "insertRule", this.pushStyleSheetUpdateRule), F(t.CSSGroupingRule, "deleteRule", this.pushStyleSheetUpdateRule), F(t.CSSStyleDeclaration, "setProperty", this.pushStyleSheetUpdateRule), F(t.CSSStyleDeclaration, "removeProperty", this.pushStyleSheetUpdateRule), F(t.StyleSheet, "disabled", this.pushDisabledStylesheetChanged), F(t.HTMLDialogElement, "show", this.pushStateChange), F(t.HTMLDialogElement, "showModal", this.pushStateChange), F(t.HTMLDialogElement, "close", this.pushStateChange), F(t.CustomElementRegistry, "define", (n, {
                args: a
            }) => {
                this.emit({
                    type: "customElementRegistration",
                    target: e,
                    name: a[0]
                })
            }), F(t.Element, "animate", this.pushElementAnimationUpdated), F(t.Animation, "play", this.pushAnimationUpdated), F(t.Animation, "pause", this.pushAnimationUpdated), F(t.Animation, "finish", this.pushAnimationUpdated), F(t.Animation, "cancel", this.pushAnimationUpdated), F(t.Animation, "reverse", this.pushAnimationUpdated), F(t.Animation, "updatePlaybackRate", this.pushAnimationUpdated), F(t.Animation, "currentTime", this.pushAnimationUpdated, {
                mode: Ei.Properties
            })];
            this.onDisconnect(e, () => {
                s.forEach(n => n())
            })
        }
        getParentRule(e) {
            for (; e.parentRule !== null;) e = e.parentRule;
            return e
        }
        initMutationObserver(e) {
            const t = new MutationObserver(s => {
                this.emit(s)
            });
            t.observe(e, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                characterData: !0
            }), this.onDisconnect(e, () => {
                t.disconnect()
            })
        }
        initMetadataObserver(e) {
            const t = new vu(this.pushMetadataChanged);
            t.observe(e), this.onDisconnect(e, () => {
                t.disconnect()
            })
        }
        onDisconnect(e, t) {
            var s;
            (s = this.subscriptions.get(e)) == null || s.push(t)
        }
        observe(e) {
            this.subscriptions.has(e) || (this.subscriptions.set(e, []), this.initCommonListeners(e), this.isRootDocument(e) && (this.initRootListeners(e), this.initMetadataObserver(e)), this.initMutationObserver(e))
        }
        disconnect(e) {
            const t = this.subscriptions.get(e) || [];
            for (const s of t) try {
                s()
            } catch (n) {
                Ae.warn(n)
            }
            this.subscriptions.delete(e)
        }
    }
    class Ia {
        constructor() {
            this.preQueue = [], this.queue = new ss, this.indexes = new Set
        }
        get length() {
            return this.queue.length
        }
        getExtendedMutationKey(e) {
            switch (e.type) {
                case "attributes":
                    return `-${e.attributeNamespace}-${e.attributeName}`;
                default:
                    return ""
            }
        }
        getMutationKey(e) {
            switch (e.type) {
                case "pointerOverElement":
                case "customElementRegistration":
                    return
            }
            return `${J(e.target)}-${e.type}${this.getExtendedMutationKey(e)}`
        }
        getMutationPriority(e) {
            switch (e.type) {
                case "state":
                    return gi.High;
                default:
                    return gi.Low
            }
        }
        pushOne(e) {
            const t = this.getMutationKey(e);
            if (t) {
                if (this.indexes.has(t)) return;
                this.indexes.add(t)
            }
            return this.queue.push({
                mutation: e,
                key: t
            }, this.getMutationPriority(e))
        }
        prepareQueue() {
            this.preQueue.length !== 0 && (this.preQueue.flat().forEach(e => this.pushOne(e)), this.preQueue = [])
        }
        push(e) {
            this.preQueue.push(e)
        }
        shift() {
            this.prepareQueue();
            const e = this.queue.shift();
            if (e) return e.key && this.indexes.delete(e.key), e.mutation
        }
        isEmpty() {
            return this.queue.isEmpty() && this.preQueue.length === 0
        }
    }
    const yu = new Au;

    function $e(i, e = gi.Low) {
        return yu.task(i, e)
    }

    function Aa(i) {
        return i.replace(/[:\\]/g, "\\$&")
    }

    function fn(i) {
        return i.replace(/\\([:\\\\])/g, "$1")
    }

    function Tn(i, e) {
        const t = Aa(e);
        return i ? `${Aa(i)}:${t}` : t
    }

    function wu(i) {
        let e = !1,
            t = -1;
        for (let a = 0; a < i.length; a++) {
            const o = i[a];
            if (e) e = !1;
            else if (o === "\\") e = !0;
            else if (o === ":") {
                t = a;
                break
            }
        }
        if (t === -1) return {
            namespaceURI: null,
            name: fn(i)
        };
        const s = i.slice(0, t),
            n = i.slice(t + 1);
        return {
            namespaceURI: fn(s),
            name: fn(n)
        }
    }

    function Nu(i) {
        return {
            get node() {
                return i.nextSibling
            }
        }
    }

    function Cu(i) {
        return {
            get node() {
                return i.firstChild
            }
        }
    }

    function Ou(i) {
        return {
            get node() {
                return i.contentDocument
            }
        }
    }

    function Du(i) {
        return {
            get node() {
                return i.shadowRoot
            }
        }
    }

    function Mu(i) {
        return typeof i == "boolean"
    }

    function ee(i) {
        return typeof i == "number" && !Number.isNaN(i)
    }

    function gn(i) {
        return typeof i == "string"
    }

    function ns(i, e) {
        try {
            return i.matches(e)
        } catch {
            return !1
        }
    }

    function ku(i) {
        var t;
        const e = new Map;
        if (!i.getAnimations) return e;
        for (const s of i.getAnimations()) {
            const n = (t = s.effect) == null ? void 0 : t.target;
            if (n) {
                const a = e.get(n);
                a ? a.push(s) : e.set(n, [s])
            }
        }
        return e
    }

    function* xu(i, e) {
        for (const t of Object.values(i)) e(t) && (yield t)
    }
    const Lu = 40,
        Pa = 1e3,
        rs = ["nextSibling", "firstChild", "contentDocument", "shadowRoot", "sheetId"];

    function as(i, e) {
        return !!i && e in i && !!i[e]
    }
    const Sa = {
        "http://www.w3.org/1999/xhtml": void 0,
        "http://www.w3.org/2000/svg": "svg"
    };

    function Uu(i) {
        return !!i && "axis" in i
    }
    const jt = class jt {
        constructor(e) {
            this.callback = e, this.observer = new bu(t => {
                this.mutations.push(t), this.scheduleProcessing()
            }), this.dirty = !1, this.nodes = {}, this.changes = new Map, this.mutations = new Ia, this.trackedDocuments = new Map, this.animationsSnapshot = null, this.processedMutationsCount = 0, this.serializedNodeCount = 0, this.lastFrameDate = 0, this.frameIntervalMs = Lu
        }
        disconnect() {
            var e;
            for (const t of this.trackedDocuments.values()) this.observer.disconnect(t);
            this.trackedDocuments.clear(), this.nodes = {}, this.changes.clear(), this.mutations = new Ia, (e = this.processingTask) == null || e.abort(), this.processingTask = void 0
        }
        observe(e) {
            return this.disconnect(), this.scheduleNodeVisit(e), this
        }
        getState(e = !0) {
            return this.dirty = !1, e && this.clearChanges(), this.nodes
        }
        getChanges() {
            const e = {};
            for (const [s, n] of this.changes) {
                const a = this.nodes[s];
                if (!(n && !a))
                    if (a && !n) e[s] = Ie(a);
                    else {
                        const o = Ta(n, a);
                        o !== void 0 && (e[s] = o)
                    }
            }
            return this.clearChanges(), fa(e) ? e : void 0
        }
        setFrameRate(e) {
            return this.frameIntervalMs = e / 1e3, this
        }
        onChange(e) {
            return this.callback = e, () => {
                this.callback === e && (this.callback = void 0, this.nextFrameTick && (clearTimeout(this.nextFrameTick), this.nextFrameTick = void 0))
            }
        }
        async getStateAsync(e = !0) {
            return await this.waitPendingProcessing(), this.getState(e)
        }
        async getChangesAsync() {
            return await this.waitPendingProcessing(), this.getChanges()
        }
        async waitPendingProcessing() {
            return new Promise(e => {
                $e(() => e())
            })
        }
        clearChanges() {
            this.changes.clear()
        }
        static apply(e, t, s) {
            const n = { ...e
                },
                a = new Set,
                o = new Set,
                c = T => {
                    o.has(T) ? o.delete(T) : a.add(T)
                },
                h = T => {
                    a.has(T) ? a.delete(T) : o.add(T)
                };

            function d(T, g) {
                for (const p of rs) p in g && (as(T, p) && c(T[p]), as(g, p) && h(g[p]))
            }
            for (const T in t) {
                const g = t[T];
                if (g == null) continue;
                const p = T,
                    A = n[p],
                    S = g,
                    v = A === void 0 ? S : ga(A, S);
                d(A, S), n[p] = v
            }
            const f = Array.from(a);
            for (; f.length > 0;) {
                const T = f.pop();
                if (o.has(T)) continue;
                const g = n[T];
                if (g) {
                    delete n[T], s == null || s(T);
                    for (const p of rs) as(g, p) && f.push(g[p])
                }
            }
            return n
        }
        static nodeRelationsEntries(e, t = !1) {
            const s = t ? rs.filter(a => a !== "nextSibling") : rs,
                n = [];
            for (const a of s) as(e, a) && n.push({
                key: a,
                nodeId: e[a]
            });
            return n
        }
        ensureDirty() {
            this.dirty || (this.nodes = { ...this.nodes
            }, this.dirty = !0)
        }
        getNode(e) {
            if (this.ensureDirty(), e in this.nodes && !this.changes.has(e)) {
                const t = this.nodes[e];
                this.changes.set(e, Ie(t)), this.nodes[e] = Ie(t)
            }
            return this.nodes[e]
        }
        getMirror(e) {
            return this.nodes[e]
        }
        serializeAnimation(e) {
            var a;
            const t = e.effect,
                s = {
                    keyframes: this.mapKeyframes((a = t == null ? void 0 : t.getKeyframes()) != null ? a : []),
                    options: this.createKeyframeAnimationOptions(e, t),
                    time: this.serializeAnimationTime(e.currentTime),
                    state: e.playState,
                    rate: e.playbackRate
                },
                n = this.getTimelineProgress(e);
            if (n !== void 0) {
                const o = this.serializeAnimationTimeline(e, s.options);
                this.freezeAtProgress(s, n), o && (s.timeline = o)
            }
            return s
        }
        serializeAnimationTimeline(e, t) {
            const s = e.timeline;
            if (!s) return;
            const n = t.duration,
                a = {
                    axis: s.axis,
                    rangeStart: this.serializeTimelineRange(e.rangeStart),
                    rangeEnd: this.serializeTimelineRange(e.rangeEnd),
                    timing: {
                        duration: ee(n) || gn(n) ? n : "auto",
                        delay: t.delay,
                        endDelay: t.endDelay
                    }
                },
                o = s.subject;
            if (o) return this.isVirtualized(o) ? { ...a,
                type: "view",
                subject: J(o)
            } : void 0;
            const c = s.source;
            return c && this.isVirtualized(c) ? { ...a,
                type: "scroll",
                source: J(c)
            } : void 0
        }
        serializeTimelineRange(e) {
            if (e == null || e === "normal") return;
            if (gn(e)) return e;
            const {
                rangeName: t,
                offset: s
            } = e;
            return `${t&&t!=="none"?t:""} ${s!=null?s:""}`.trim() || void 0
        }
        freezeAtProgress(e, t) {
            const {
                iterations: s
            } = e.options, n = ee(s) && s < 1 / 0 ? s : 1;
            e.options.duration = Pa, e.options.delay = 0, e.options.endDelay = 0, e.time = Math.trunc(t * Pa * n), e.state = "paused", e.rate = 1
        }
        getTimelineProgress(e) {
            const t = e.currentTime;
            if (ee(t)) return;
            if (t == null) return Uu(e.timeline) ? 0 : void 0;
            const s = t.value;
            return ee(s) ? Math.min(Math.max(s / 100, 0), 1) : 0
        }
        serializeAnimationTime(e) {
            if (!(e === null || !ee(e))) return Math.trunc(e)
        }
        mapKeyframes(e) {
            return e.reduce((t, s, n) => (t[n] = s, t), {})
        }
        createKeyframeAnimationOptions(e, t) {
            var a;
            const s = { ...(a = t == null ? void 0 : t.getTiming()) != null ? a : {},
                    composite: t == null ? void 0 : t.composite,
                    pseudoElement: t == null ? void 0 : t.pseudoElement,
                    iterationComposite: t == null ? void 0 : t.iterationComposite
                },
                n = e.id;
            return n && (s.id = n), s
        }
        serializeStyleSheet(e) {
            try {
                const t = e.cssRules.length,
                    s = {};
                for (let n = 0; n < t; n++) {
                    const a = e.cssRules[n];
                    s[n] = a.cssText
                }
                return {
                    type: M.CSS_STYLESHEET_NODE,
                    cssRules: s,
                    disabled: e.disabled
                }
            } catch {
                return {
                    type: M.CSS_STYLESHEET_NODE,
                    cssRules: {}
                }
            }
        }
        getHoveredElement(e) {
            return Array.from(e.querySelectorAll(":hover")).pop() || void 0
        }
        serializeNode(e) {
            const t = this.serializeNodeMetadata(e);
            switch (e.nodeType) {
                case M.DOCUMENT_NODE:
                    {
                        const s = e,
                            n = s.activeElement || void 0,
                            a = this.getHoveredElement(s),
                            o = {
                                type: M.DOCUMENT_NODE,
                                baseURI: s.baseURI,
                                activeId: n && J(n),
                                hoveredId: a && J(a),
                                ...this.serializeDocumentState(e),
                                metadata: t
                            };
                        return s.compatMode === "BackCompat" && (o.quirksMode = !0),
                        o
                    }
                case M.DOCUMENT_FRAGMENT_NODE:
                    return {
                        type: M.DOCUMENT_FRAGMENT_NODE,
                        mode: e.mode,
                        metadata: t
                    };
                case M.COMMENT_NODE:
                    return {
                        type: M.COMMENT_NODE,
                        data: void 0,
                        metadata: t
                    };
                case M.ELEMENT_NODE:
                    {
                        const s = e,
                            n = s.namespaceURI || "";
                        return {
                            type: M.ELEMENT_NODE,
                            namespaceURI: n in Sa ? Sa[n] : n,
                            localName: s.localName,
                            attributes: this.serializeAttributes(s),
                            state: this.serializeElementState(s),
                            metadata: t
                        }
                    }
                case M.TEXT_NODE:
                    return {
                        type: M.TEXT_NODE,
                        data: e.data || "",
                        metadata: t
                    };
                case M.CDATA_SECTION_NODE:
                    return {
                        type: M.CDATA_SECTION_NODE,
                        data: e.data,
                        metadata: t
                    };
                case M.DOCUMENT_TYPE_NODE:
                    return {
                        type: M.DOCUMENT_TYPE_NODE,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        metadata: t
                    };
                default:
                    return null
            }
        }
        serializeAttributes(e) {
            return Array.from(e.attributes).reduce((t, s) => {
                const n = t || {};
                return n[Tn(s.namespaceURI, s.name)] = s.value, n
            }, void 0)
        }
        serializeDocumentState(e) {
            const t = e.defaultView,
                s = t == null ? void 0 : t.visualViewport;
            return {
                state: {
                    scrollX: t == null ? void 0 : t.scrollX,
                    scrollY: t == null ? void 0 : t.scrollY,
                    visibility: e.visibilityState
                },
                viewport: {
                    width: s == null ? void 0 : s.width,
                    height: s == null ? void 0 : s.height,
                    scale: s == null ? void 0 : s.scale,
                    offsetLeft: s == null ? void 0 : s.offsetLeft,
                    offsetTop: s == null ? void 0 : s.offsetTop
                },
                screen: {
                    width: t == null ? void 0 : t.screen.width,
                    height: t == null ? void 0 : t.screen.height
                }
            }
        }
        serializeDialogState(e) {
            return e.open ? ns(e, ":modal") ? pi.OpenModal : pi.Open : pi.Closed
        }
        serializeValidityState(e) {
            if (!pa(e.localName)) {
                const t = e.validity;
                return typeof(t == null ? void 0 : t.valid) == "boolean" ? t.valid : void 0
            }
            if (ns(e, ":valid")) return !0;
            if (ns(e, ":invalid")) return !1
        }
        serializeElementState(e) {
            const t = {};
            let s = !1;
            if ("value" in e && gn(e.value) && (t.value = e.value, s = !0), "selectedIndex" in e && ee(e.selectedIndex) && e.selectedIndex >= 0 && (t.selectedIndex = e.selectedIndex, s = !0), "checked" in e && Mu(e.checked) && (t.checked = e.checked, s = !0), e.popover && ns(e, ":popover-open")) t.popover = !0, s = !0;
            else if (e.localName === "dialog") {
                const c = this.serializeDialogState(e);
                t.dialog = c, t.open = c !== pi.Closed, s = !0
            }
            const n = this.serializeValidityState(e);
            n !== void 0 && (t.valid = n, s = !0);
            const {
                scrollLeft: a,
                scrollTop: o
            } = e;
            return ee(a) && a !== 0 && (t.scrollX = a, s = !0), ee(o) && o !== 0 && (t.scrollY = o, s = !0), s ? t : void 0
        }
        scheduleProcessing() {
            var e;
            ((e = this.processingTask) == null ? void 0 : e.isEnded) !== !1 && (this.processingTask = $e(t => (this.processMutations(t), this.scheduleNextFrame(), this.mutations.isEmpty() ? Pt.Stop : Pt.Reschedule)))
        }
        scheduleNextFrame() {
            if (!this.callback || this.nextFrameTick) return;
            const e = performance.now() - this.lastFrameDate,
                t = Math.max(0, this.frameIntervalMs - e);
            this.nextFrameTick = setTimeout(() => {
                this.nextFrameTick = void 0;
                const s = this.getChanges();
                this.lastFrameDate = performance.now(), s && this.callback(s, this.getState())
            }, t)
        }
        getPrevNodeId(e) {
            for (let t = e == null ? void 0 : e.previousSibling; t; t = t.previousSibling)
                if (this.isVirtualized(t)) return J(t)
        }
        getParentNodeId(e) {
            var s;
            const t = e.parentNode || e.host || ((s = e.defaultView) == null ? void 0 : s.frameElement);
            if (this.isVirtualized(t)) return J(t)
        }
        isStyleElement(e) {
            const t = e ? this.getMirror(e) : void 0;
            return (t == null ? void 0 : t.type) === M.ELEMENT_NODE && t.localName === "style"
        }
        scheduleStyleSheetVisitFromStyle(e) {
            const t = e == null ? void 0 : e.sheet;
            t && !this.isVirtualized(t) && this.scheduleStyleSheetVisit(t)
        }
        scheduleNodeVisit(e) {
            if (this.isVirtualized(e)) {
                this.isStyleElement(J(e)) && this.scheduleStyleSheetVisitFromStyle(e);
                return
            }
            const t = new is;
            this.visitNode(e, t), !t.isEmpty() && $e(s => {
                let n;
                for (; s.hasTimeLeft && (n = t.shift());) {
                    const a = n.node;
                    if (!a || !this.isConnected(a)) continue;
                    const o = this.getParentNodeId(a);
                    o && (this.isVirtualized(a) || this.visitNode(a, t), this.attachToParent(a, o), a.nextSibling && t.push(Nu(a)))
                }
                return t.isEmpty() ? Pt.Stop : Pt.Continue
            })
        }
        getParentProp(e) {
            switch (e) {
                case M.DOCUMENT_NODE:
                    return "contentDocument";
                case M.DOCUMENT_FRAGMENT_NODE:
                    return "shadowRoot";
                default:
                    return "childList"
            }
        }
        scheduleStyleSheetVisit(e) {
            $e(() => {
                const t = e.ownerNode;
                if (t && (!this.isConnected(t) || !this.isVirtualized(t))) return Pt.Stop;
                if (this.isVirtualized(e) || !t || t.localName === "style" ? this.virtualizeCSSStyleSheet(e) : this.setVirtualization(J(e), {
                        type: M.CSS_STYLESHEET_NODE,
                        cssRules: {},
                        disabled: e.disabled
                    }), t && this.isVirtualized(t)) {
                    const s = J(t),
                        n = this.getNode(s),
                        a = n.sheetId,
                        o = J(e);
                    n.sheetId = o, a && a !== o && this.deleteNodeId(a)
                }
                return Pt.Stop
            })
        }
        getElementAnimations(e) {
            var n;
            this.animationsSnapshot || (this.animationsSnapshot = new Map, queueMicrotask(() => {
                this.animationsSnapshot = null
            }));
            const t = e.ownerDocument;
            if (!t) return [];
            let s = this.animationsSnapshot.get(t);
            return s || (s = ku(t), this.animationsSnapshot.set(t, s)), (n = s.get(e)) != null ? n : []
        }
        scheduleElementAnimationsVisit(e, t = (n => (n = (s => (s = e.getAnimations) == null ? void 0 : s.call(e))()) != null ? n : [])()) {
            let a = {},
                o = 0;
            const c = t.length;
            $e(h => {
                if (!this.isVirtualized(e) || !this.isConnected(e)) return Pt.Stop;
                const d = this.getNode(J(e));
                if (!d) return Pt.Stop;
                for (; h.hasTimeLeft && o < c;) {
                    const f = t[o],
                        T = J(f);
                    a[T] = this.serializeAnimation(f), o++
                }
                return o < c ? Pt.Continue : (d.animations = t.length > 0 ? a : void 0, Pt.Stop)
            })
        }
        scheduleAdoptedStyleSheetsVisit(e) {
            let t = 0;
            const s = J(e),
                n = e.adoptedStyleSheets || [],
                a = n.length,
                o = {};
            $e(c => {
                if (!this.isVirtualized(e) || !this.isConnected(e) || n !== e.adoptedStyleSheets) return Pt.Stop;
                for (; c.hasTimeLeft && t < a;) {
                    const d = n[t];
                    o[t] = this.isVirtualized(d) ? J(d) : this.virtualizeCSSStyleSheet(d), t += 1
                }
                if (t < a) return Pt.Continue;
                const h = this.getNode(s);
                return h && (h.adoptedStyleSheets = o), Pt.Stop
            })
        }
        virtualizeCSSStyleSheet(e) {
            const t = J(e);
            return this.setVirtualization(t, this.serializeStyleSheet(e)), t
        }
        setVirtualization(e, t) {
            this.serializedNodeCount++, this.ensureDirty(), this.nodes[e] = t, this.scheduleNextFrame(), this.changes.has(e) || this.changes.set(e, null)
        }
        isVirtualized(e) {
            return J(e) in this.nodes
        }
        isSameOriginIframe(e) {
            var s;
            if (!jt.trackIframeContent || e.localName !== "iframe") return !1;
            const t = e;
            try {
                return !!t.contentDocument && !!((s = t.contentWindow) != null && s.document)
            } catch {
                return !1
            }
        }
        attachToParent(e, t) {
            const s = J(e),
                n = this.getNode(s);
            if (!n) {
                Ae.warn(`No serialized node id ${s}`);
                return
            }
            if (!t) {
                Ae.warn(`No parent id for node id ${s}`);
                return
            }
            const a = this.getParentProp(n.type);
            if (a === "childList") {
                const o = this.getPrevNodeId(e);
                this.insertAfter(s, o, t, !0)
            } else {
                const o = this.getNode(t);
                o[a] = s, n.parent = t
            }
        }
        visitNode(e, t) {
            var a, o, c, h;
            const s = J(e),
                n = this.serializeNode(e);
            if (!n) {
                Ae.warn(`Node was not serialized ${e.nodeType}`);
                return
            }
            switch (this.setVirtualization(s, n), n.type) {
                case M.DOCUMENT_NODE:
                case M.DOCUMENT_FRAGMENT_NODE:
                    {
                        const d = e;this.trackedDocuments.set(s, d),
                        this.observer.observe(d),
                        (a = d.adoptedStyleSheets) != null && a.length && this.scheduleAdoptedStyleSheetsVisit(d);
                        break
                    }
                case M.TEXT_NODE:
                    {
                        ((o = e.parentElement) == null ? void 0 : o.localName) === "style" && (n.data = "");
                        break
                    }
                case M.ELEMENT_NODE:
                    {
                        const d = e;
                        switch (n.localName) {
                            case "iframe":
                                this.isSameOriginIframe(d) && t.push(Ou(d));
                                break;
                            case "link":
                                d.rel === "stylesheet" && d.sheet && this.scheduleStyleSheetVisit(d.sheet);
                                break;
                            case "style":
                                {
                                    const T = d.sheet;T && this.scheduleStyleSheetVisit(T);
                                    break
                                }
                            default:
                                pa(n.localName) && ((h = (c = e.ownerDocument) == null ? void 0 : c.defaultView) != null && h.customElements.get(n.localName)) && this.registerCustomElement(J(e.ownerDocument), n.localName);
                                const f = this.getElementAnimations(d);
                                f.length > 0 && this.scheduleElementAnimationsVisit(d, f), d.shadowRoot && t.push(Du(d));
                                break
                        }
                        break
                    }
            }
            e.firstChild && t.push(Cu(e))
        }
        registerCustomElement(e, t) {
            const s = this.getNode(e),
                n = s.customElements || (s.customElements = {});
            n[t] = 1
        }
        deleteNodeId(e) {
            const t = new is([e]),
                s = new Set;
            this.detachNodeId(e);
            let n;
            for (; n = t.shift();) {
                if (s.has(n)) {
                    Ae.warn(`Node id ${n} already visited during deletion process`);
                    continue
                }
                s.add(n);
                const a = this.getNode(n);
                if (a) {
                    switch (a.type) {
                        case M.DOCUMENT_NODE:
                        case M.DOCUMENT_FRAGMENT_NODE:
                            this.observer.disconnect(this.trackedDocuments.get(n)), this.trackedDocuments.delete(n)
                    }
                    this.ensureDirty(), delete this.nodes[n];
                    for (const {
                            nodeId: o
                        } of jt.nodeRelationsEntries(a)) t.push(o)
                }
            }
        }
        insertAfter(e, t, s, n) {
            e && this.detachNodeId(e);
            let a;
            if (t) {
                const o = this.getNode(t);
                a = o.nextSibling, o.nextSibling = e
            } else {
                const o = this.getNode(s);
                a = o.firstChild, o.firstChild = e
            }
            if (n && e && a !== e) {
                const o = this.getNode(e);
                if (o.nextSibling = a, a) {
                    const c = this.getNode(a);
                    c.previousSibling = e
                }
            }
            if (e) {
                const o = this.getNode(e);
                o.parent = s, o.previousSibling = t
            }
        }
        getChildrenIds(e) {
            var n;
            const t = this.getNode(e),
                s = new Set;
            for (let a = t == null ? void 0 : t.firstChild; a; a = (n = this.getNode(a)) == null ? void 0 : n.nextSibling) {
                if (s.has(a)) {
                    Ae.warn(`Cycle detected in children of node id ${e}, breaking traversal.`);
                    break
                }
                s.add(a)
            }
            return s
        }
        isConnected(e) {
            const t = "isConnected" in e ? e : "ownerNode" in e ? e.ownerNode : null;
            return t ? t.isConnected : !0
        }
        detachNodeId(e) {
            const t = this.getNode(e);
            if (t) {
                if (t.previousSibling !== void 0) {
                    const s = this.getNode(t.previousSibling);
                    s && (s.nextSibling = t.nextSibling)
                } else if (t.parent !== void 0) {
                    const s = this.getNode(t.parent);
                    s && s.firstChild === e && (s.firstChild = t.nextSibling)
                }
                if (t.nextSibling !== void 0) {
                    const s = this.getNode(t.nextSibling);
                    s && (s.previousSibling = t.previousSibling)
                }
                t.parent = void 0, t.nextSibling = void 0, t.previousSibling = void 0
            }
        }
        serializeNodeMetadata(e) {
            try {
                const t = Yt.getAll(e);
                if (t) return Ie(t)
            } catch (t) {
                Ae.error("FastDOM.serializeNodeMetadata", t)
            }
        }
        processMutations(e) {
            let t;
            for (; e.hasTimeLeft && (t = this.mutations.shift());) {
                if (this.processedMutationsCount++, !this.isConnected(t.target)) continue;
                if (!this.isVirtualized(t.target)) {
                    switch (t.type) {
                        case "styleSheetUpdated":
                        case "styleSheetDisabledChanged":
                            {
                                const n = t.target.ownerNode;n && this.isVirtualized(n) && this.scheduleStyleSheetVisitFromStyle(n);
                                break
                            }
                    }
                    continue
                }
                const s = J(t.target);
                switch (t.type) {
                    case "attachShadow":
                        {
                            this.scheduleNodeVisit(t.shadowRoot),
                            this.attachToParent(t.shadowRoot, s);
                            break
                        }
                    case "childList":
                        {
                            let n;
                            const a = this.getChildrenIds(s);
                            for (let o = t.target.firstChild; o; o = o.nextSibling) {
                                this.scheduleNodeVisit(o);
                                const c = J(o);
                                a.delete(c), this.insertAfter(c, n, s), n = c
                            }
                            this.insertAfter(void 0, n, s);
                            for (const o of a) this.deleteNodeId(o);this.isStyleElement(s) && this.scheduleStyleSheetVisitFromStyle(t.target);
                            break
                        }
                    case "characterData":
                        {
                            const n = this.getNode(s);n.type === M.TEXT_NODE && (this.isStyleElement(n.parent) ? (n.data = "", this.scheduleStyleSheetVisitFromStyle(t.target.parentElement)) : n.data = t.target.data);
                            break
                        }
                    case "attributes":
                        {
                            const n = Tn(t.attributeNamespace, t.attributeName),
                                a = t.target,
                                o = this.getNode(s),
                                c = a.getAttributeNS(t.attributeNamespace, t.attributeName);o.attributes = o.attributes || {},
                            c === null ? delete o.attributes[n] : o.attributes[n] = c;
                            break
                        }
                    case "state":
                        {
                            const n = this.getNode(s);n.type === M.DOCUMENT_NODE ? Object.assign(n, this.serializeDocumentState(t.target)) : n.state = this.serializeElementState(t.target);
                            break
                        }
                    case "setAdoptedStyleSheets":
                        {
                            this.scheduleAdoptedStyleSheetsVisit(t.target);
                            break
                        }
                    case "styleSheetUpdated":
                        {
                            this.scheduleStyleSheetVisit(t.target);
                            break
                        }
                    case "styleSheetDisabledChanged":
                        {
                            const n = this.getNode(s);n.disabled = t.target.disabled;
                            break
                        }
                    case "animationUpdated":
                        {
                            this.scheduleElementAnimationsVisit(t.target);
                            break
                        }
                    case "loaded":
                        {
                            switch (t.target.localName) {
                                case "link":
                                    {
                                        const n = t.target;n.rel === "stylesheet" && n.sheet && this.scheduleStyleSheetVisit(n.sheet);
                                        break
                                    }
                                case "iframe":
                                    {
                                        const n = t.target,
                                            a = this.getNode(s),
                                            o = n.contentDocument,
                                            c = o && J(o);a.contentDocument && a.contentDocument !== c && (this.deleteNodeId(a.contentDocument), delete a.contentDocument),
                                        this.isSameOriginIframe(n) && this.scheduleNodeVisit(o);
                                        break
                                    }
                            }
                            break
                        }
                    case "activeElementChanged":
                        {
                            const n = this.getNode(s),
                                a = t.target.activeElement || void 0;n.activeId = a && J(a);
                            break
                        }
                    case "pointerOverElement":
                        {
                            const n = this.getNode(s),
                                a = t.element || void 0;n.hoveredId = a && J(a);
                            break
                        }
                    case "customElementRegistration":
                        {
                            this.registerCustomElement(s, t.name);
                            break
                        }
                    case "metadataChanged":
                        {
                            const n = this.getNode(s);n.metadata = this.serializeNodeMetadata(t.target);
                            break
                        }
                }
            }
        }
    };
    jt.trackIframeContent = !1, jt.cloneDeep = Ie, jt.findNodes = xu, jt.stringifyAttrKey = Tn, jt.parseAttrKey = wu;
    let Fe = jt,
        Va = class {
            constructor(e) {
                this.csId = J(e), this.props = Yt.getAll(e)
            }
        };
    const Pe = {
        ELEMENT_NODE: 1,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        COMMENT_NODE: 8
    };
    let zu = class extends Va {
            constructor(e) {
                super(e), this.nodeType = Node.TEXT_NODE, this.data = e.data
            }
        },
        $u = class extends Va {
            constructor(e) {
                var s, n, a;
                super(e), this.attributes = [], this.nodeType = Pe.ELEMENT_NODE, this.localName = Hl(e), this.namespaceURI = (s = e.namespaceURI) != null ? s : void 0, this.children = [];
                const t = Wl(e);
                if (t) {
                    this.children = new Array(e.childNodes.length);
                    const o = document.createTextNode(t),
                        c = new zu(o);
                    this.children.push(c)
                }(Ks(e) || fl(e)) && (this.disabledSheet = (a = (n = e.sheet) == null ? void 0 : n.disabled) != null ? a : !1)
            }
            static isElement(e) {
                return e.nodeType === Pe.ELEMENT_NODE
            }
            static getAttribute(e, t) {
                return Vr(e.attributes, s => s.name === t)
            }
            static getAttributeValue(e, t) {
                var s;
                return (s = this.getAttribute(e, t)) == null ? void 0 : s.value
            }
        };
    var at;
    (i => {
        function e(c, h, d) {
            var f;
            if (js(c)) Yt.set(c, h, d);
            else {
                const T = c;
                (f = T.props) != null || (T.props = {}), T.props[h] = d
            }
        }
        i.setProperty = e;

        function t(c, h) {
            var d;
            return js(c) ? Yt.get(c, h) : (d = c.props) == null ? void 0 : d[h]
        }
        i.getProperty = t;

        function s(c) {
            return js(c) ? Yt.getAll(c) : c.props
        }
        i.getProperties = s;

        function n(c, h) {
            let d = null;
            return a(c, (f, T, g) => h(f) && (d = f) && !!g()), d
        }
        i.findDescendant = n;

        function a(c, h) {
            o(c, void 0, h)
        }
        i.traverse = a;

        function o(c, h, d) {
            let f = !1;
            if (d(c, h, () => f = !0), f) return;
            const g = c.shadowRoot;
            g && o(g, c, d);
            const p = c.children;
            if (p != null && p.length) {
                for (const A of p)
                    if (A && (o(A, c, d), f)) break
            }
        }
    })(at || (at = {}));
    var Rn;
    (i => {
        i.EDITABLE_NODE_PROP = "editableNode";

        function e(n) {
            var a;
            return "nodeType" in n ? at.getProperty(n, i.EDITABLE_NODE_PROP) === !0 : ((a = n.metadata) == null ? void 0 : a[i.EDITABLE_NODE_PROP]) === !0
        }
        i.isEditableNode = e;

        function t(n) {
            at.setProperty(n, i.EDITABLE_NODE_PROP, !0)
        }
        i.markEditableNode = t;

        function s(n) {
            at.setProperty(n, i.EDITABLE_NODE_PROP, void 0)
        }
        i.unmarkEditableNode = s
    })(Rn || (Rn = {}));
    class Fu {
        constructor() {
            this.subscriptions = []
        }
        restart() {
            this.stop(), this.start()
        }
        start() {}
        stop() {
            this.subscriptions.length = 0, this.subscriptions = []
        }
        pushEvent(e, t) {
            const s = t != null ? t : c => {
                    this.subscriptions.forEach(h => h(c))
                },
                n = this.processingContext,
                a = {
                    sourceEvent: e,
                    emittedEvents: []
                };
            this.processingContext = a;
            let o;
            try {
                this.isListening(e) ? o = Te("Processor:processEvent", h => this.processEvent(h))(e) : o = e
            } finally {
                this.processingContext = n
            }
            if (a.error) throw a.error;
            o != null && s(o), a.emittedEvents.forEach(s)
        }
        subscribe(e) {
            return this.subscriptions.push(e), () => {
                this.subscriptions = this.subscriptions.filter(t => t !== e)
            }
        }
        emitEvent(e) {
            const t = this.processingContext;
            if (!t) throw new Error("Cannot emit an event outside processor execution.");
            if (e.timestamp !== t.sourceEvent.timestamp) {
                t.error = new Error("A processor-emitted event must use its source event timestamp.");
                return
            }
            t.emittedEvents.push(e)
        }
    }
    const va = /[\u4E00-\u9FFF]|[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]/g,
        ba = "ａ",
        Hu = /[^0-9ａ\s]/g,
        qu = /[^ａ\s]/g,
        ya = "a";

    function wa(i) {
        return i.replace(va, ba).replace(Hu, ya)
    }

    function Gu(i) {
        return i.replace(va, ba).replace(qu, ya)
    }

    function Bu(i, e) {
        const t = e === "number" ? "0" : "•";
        return i.replace(/\S/g, t)
    }
    var O = (i => (i.QUOTA_REACHED = "X", i.RECORDING_RULES_TARGETING = "8", i.ANALYTICS_ONLY_RULES_TARGETING = "9", i.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING = "P", i.ANALYTICS_ONLY = "0", i.RECORDING_GLOBAL_SAMPLING = "5", i.RECORDING_URL_SAMPLING = "6", i.RECORDING_ETR_SAMPLING = "7", i))(O || {}),
        Wt = (i => (i.ETR_OFF = "0", i.ETR_ON = "1", i))(Wt || {}),
        os = (i => (i.ETR_DISABLED = "0", i.ETR_PENDING = "1", i.ETR_SAVED_PAGE = "2", i.ETR_SAVED_SESSION = "3", i.ETR_NOT_SAVED_SESSION = "9", i))(os || {}),
        mi = (i => (i.UNNECESSARY = "U", i.NOT_EXPRESSED = "N", i.WITHDRAWN = "W", i.GRANTED = "G", i))(mi || {});
    const Yu = 512,
        Wu = 255;
    class pn {
        constructor(e, t) {
            this.key = e.slice(0, Yu), this.value = rt(t) ? t.slice(0, Wu) : t
        }
        static isKeyValid(e) {
            return rt(e)
        }
        static isValueValid(e) {
            return rt(e) || ui(e)
        }
    }
    const Xu = 100;
    class cs {
        constructor(e, t) {
            this.id = e, this.revenue = t
        }
        static from(e) {
            const t = new cs(e.id, parseFloat(e.revenue));
            return isNaN(parseFloat(e.tax)) || (t.tax = parseFloat(e.tax)), isNaN(parseFloat(e.shipping)) || (t.shipping = parseFloat(e.shipping)), rt(e.currency) && e.currency.length <= 10 && (t.currency = e.currency), t
        }
        hasValidRevenue() {
            return !isNaN(this.revenue) && this.revenue >= 0
        }
        static isValid(e) {
            return fe(e) && te(e.revenue) && rt(e.currency) && e.currency.length <= 10 && (!fe(e.id) || rt(e.id))
        }
    }
    class ls {
        constructor(e, t, s, n) {
            this.id = e, this.name = t, this.price = s, this.quantity = n
        }
        static from(e) {
            if (!ls.isValid(e)) return null;
            const t = new ls(e.id, e.name, parseFloat(e.price), parseInt(e.quantity, 10));
            return q(e.sku) && (t.sku = e.sku), q(e.category) && (t.category = e.category), q(e.merchant) && e.merchant.length > 0 && (t.merchant = e.merchant.slice(0, Xu)), t
        }
        static isValid(e) {
            return fe(e) && rt(e.id) && rt(e.name) && te(parseFloat(e.price)) && ui(parseInt(e.quantity, 10)) && (!q(e.sku) || rt(e.sku)) && (!q(e.category) || rt(e.category)) && (!q(e.merchant) || rt(e.merchant))
        }
    }
    const Na = /^(\d+\.[01356789BWXP](\.[01UNWG])?(\.[39])?)(\.\d+)?$/,
        mn = ".";

    function ju(i) {
        return [i.pageNumber, i.collectState, i.replayConsent, i.etrStatus].join(mn)
    }

    function Ca(i) {
        if (!Oa(i)) return null;
        const e = Ku(i);
        return e !== null ? Zu(e) : null
    }

    function Zu(i) {
        const [e, t, s, n] = i.split(mn);
        return t === "B" || t === "W" ? {
            collectState: O.ANALYTICS_ONLY,
            replayConsent: t === "B" ? mi.NOT_EXPRESSED : mi.WITHDRAWN,
            etrStatus: n != null ? n : os.ETR_NOT_SAVED_SESSION,
            pageNumber: parseInt(e, 10)
        } : {
            collectState: t,
            replayConsent: s != null ? s : mi.UNNECESSARY,
            etrStatus: n != null ? n : os.ETR_NOT_SAVED_SESSION,
            pageNumber: parseInt(e, 10)
        }
    }

    function Oa(i) {
        return Na.test(i)
    }

    function Ku(i) {
        var t;
        if (!i) return null;
        const e = (t = i.match(Na)) == null ? void 0 : t[1];
        return e != null ? e : null
    }
    var Ii;
    (i => {
        let e;

        function t(g) {
            e = g
        }
        i.setLogger = t;

        function s(g, p) {
            for (const A of g)
                if (a(A, p)) return !0;
            return !1
        }
        i.isUrlMatching = s;

        function n(g, p) {
            if (rt(p)) {
                for (const A of g)
                    if (a(A, p)) return !0
            } else if (mr(p)) {
                for (const A of g)
                    if (a(A, String(p))) return !0
            }
            return !1
        }
        i.isMatching = n;

        function a(g, p) {
            const A = o(g, p);
            return g.negate ? !A : A
        }

        function o(g, p) {
            switch (g.rule_type === "date" && (g.match_operation === "less_than" || g.match_operation === "greater_than") && (p = (new Date(p).valueOf() / 1e3).toFixed(0)), g.match_operation) {
                case "exact":
                    switch (g.rule_type) {
                        case "string":
                            return rt(g.pattern) ? p.toLowerCase() === g.pattern.toLowerCase() : !1;
                        case "boolean":
                            return p === g.pattern || p === String(g.pattern);
                        case "number":
                            return fe(p) ? Number(p) === Number(g.pattern) : !1;
                        default:
                            return p === g.pattern
                    }
                case "starts_with":
                    return rt(g.pattern) ? p.indexOf(g.pattern) === 0 : !1;
                case "ends_with":
                    return rt(g.pattern) ? Wr(p, g.pattern) : !1;
                case "contains":
                    return rt(g.pattern) ? p.indexOf(g.pattern) !== -1 : !1;
                case "regex":
                    if (!rt(g.pattern)) return !1;
                    try {
                        return new RegExp(g.pattern).test(p)
                    } catch (A) {
                        return e == null || e.warn(`targeting.matchOperation.regex invalid ${A==null?void 0:A.message}`), !1
                    }
                case "simple":
                    return rt(g.pattern) ? T(p) === T(g.pattern) : !1;
                case "greater_than":
                    return Number(p) > Number(g.pattern);
                case "less_than":
                    return Number(p) < Number(g.pattern);
                case "exact_date":
                    {
                        const A = Number(g.pattern);
                        if (!te(A)) return !1;
                        const S = new Date(A * 1e3);
                        return new Date(p).toDateString() === S.toDateString()
                    }
                case "exact_days_ago":
                    return c(g, p);
                case "more_than_days_ago":
                    return h(g, p);
                case "less_than_days_ago":
                    return d(g, p);
                case "unknown":
                    return f(p);
                default:
                    return e == null || e.warn(`targeting.matchOperation.regex not managed operation ${g.match_operation}`), !1
            }
        }

        function c(g, p) {
            const A = new Date,
                S = A.setDate(A.getDate() - Number(g.pattern)),
                v = new Date(S);
            return new Date(p).toDateString() === v.toDateString()
        }

        function h(g, p) {
            const A = Number(g.pattern);
            if (!te(A)) return !1;
            const S = Number(A) + 1,
                v = new Date,
                N = new Date(v);
            return N.setDate(v.getDate() - S), new Date(p).getTime() <= N.getTime()
        }

        function d(g, p) {
            const A = Number(g.pattern);
            if (!te(A)) return !1;
            if (A === 0) return c(g, p);
            const S = new Date,
                v = new Date(S);
            return v.setDate(S.getDate() - A), new Date(p).getTime() >= v.getTime()
        }

        function f(g) {
            return fe(g) ? rt(g) ? g.trim() === "" : mr(g) ? g === !0 : te(g) ? g !== 0 : !1 : !0
        }

        function T(g) {
            const p = Ut(g, "http://") || Ut(g, "https://") ? g : `https://${g}`,
                A = jr(p);
            return A !== null ? A.host.replace(/^www./, "") : g
        }
    })(Ii || (Ii = {}));
    const Qu = {
        MATCHED: {
            [O.ANALYTICS_ONLY]: O.ANALYTICS_ONLY_RULES_TARGETING,
            [O.RECORDING_GLOBAL_SAMPLING]: O.RECORDING_RULES_TARGETING,
            [O.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING]: O.RECORDING_RULES_TARGETING
        },
        MISSED: {
            [O.ANALYTICS_ONLY]: O.ANALYTICS_ONLY_RULES_TARGETING,
            [O.RECORDING_GLOBAL_SAMPLING]: O.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING
        }
    };
    var Da = (i => (i.URL = "url", i))(Da || {});
    const In = {
        isLegacyURL: i => i.component === "url",
        isLegacyTrigger: i => i.component === "trigger",
        isURL: i => i.type === Da.URL
    };
    class Ju {
        constructor(e) {
            this.regexEvaluator = new fi, this.legacyURLrules = [], this.legacyTriggerRules = [], Ii.setLogger(e)
        }
        setTargetingRules(e) {
            this.regexEvaluator.setRegexRules(e.filter(In.isURL));
            for (const t of e) In.isLegacyURL(t) ? this.legacyURLrules.push(t) : In.isLegacyTrigger(t) && this.legacyTriggerRules.push(t)
        }
        matchUrl(e) {
            return Ii.isUrlMatching(this.legacyURLrules, e) || this.regexEvaluator.evaluateUrl(e)
        }
        matchTrigger(e) {
            return Ii.isMatching(this.legacyTriggerRules, e)
        }
    }
    const th = ":",
        eh = /\b((?:profile|user|last|first|primary|primary(?:[/_+-]|%20)?last)(?:[/_+-]|%20)?(?:name)[/=])[^#;?&/]+/gi,
        ih = "$1CS_ANONYMIZED_NAME";
    class us {
        constructor(e) {
            this.pii = e
        }
        anonymizeUrl(e, t = {}) {
            const s = t.maskingPatterns || [],
                n = t.partialMaskingPatterns || [];
            let a = this.pii.anonymizePII(e);
            if (a = this.pii.anonymizeJwt(a), a = this.pii.anonymizeTokens(a), t.maskNames) {
                const h = a;
                a = this.anonymizeNames(a), a !== h && (nt.counters.redactedPII.count("name"), nt.counters.redactedPII.count("name-in-url"))
            }
            const o = this.applyFullMaskingPatterns(a, s);
            if (o !== a) return nt.counters.redactedPII.count("url"), o;
            const c = this.applyPartialMaskingPatterns(a, n);
            return c !== a && nt.counters.redactedPII.count("url"), c
        }
        removeQueryString(e) {
            const {
                path: t,
                queryString: s
            } = this.getPathAndQueryString(e);
            return s !== "" ? `${t}?` : t
        }
        getPathAndQueryString(e) {
            const t = e.indexOf("?");
            let s, n = "";
            return t !== -1 ? (s = e.slice(0, t), n = e.slice(t, e.length)) : s = e, {
                path: s,
                queryString: n
            }
        }
        applyFullMaskingPatterns(e, t) {
            if (t.length === 0) return e;
            const {
                path: s,
                queryString: n
            } = this.getPathAndQueryString(e), a = s.split("/");
            for (const o of t) {
                const c = this.applyFullMaskingPattern(a, o);
                if (c !== null) return `${c}${n}`
            }
            return e
        }
        applyFullMaskingPattern(e, t) {
            if (e.length < t.length) return null;
            const s = [];
            for (let n = 0; n < e.length; n++) {
                const a = e[n];
                if (n >= t.length) {
                    s.push(a);
                    continue
                }
                const o = t[n].key;
                if (this.isMaskingPlaceholder(o)) {
                    const c = t[n].value;
                    s.push(c);
                    continue
                }
                if (a === o) {
                    s.push(a);
                    continue
                }
                return null
            }
            return s.join("/")
        }
        applyPartialMaskingPatterns(e, t) {
            if (t.length === 0) return e;
            const {
                path: s,
                queryString: n
            } = this.getPathAndQueryString(e);
            let a = s.split("/");
            for (const o of t) a = this.applyPartialMaskingPattern(a, o);
            return `${a.join("/")}${n}`
        }
        applyPartialMaskingPattern(e, t) {
            const s = [];
            let n = 0;
            const o = e[0] === "http:" || e[0] === "https:" ? 2 : 0;
            for (let c = 0; c < e.length; c++) {
                const h = e[c],
                    d = t[n].key;
                if (this.isMaskingPlaceholder(d) && c >= o) {
                    const f = t[n].value;
                    s.push(h.length > 0 ? f : ""), n++, n === t.length && (n = 0);
                    continue
                }
                if (h === d) {
                    s.push(h), n++, n === t.length && (n = 0);
                    continue
                }
                for (let f = 0; f < n; f++) {
                    const T = c - n + f;
                    s[T] = e[T]
                }
                n = 0, s.push(h)
            }
            for (let c = 0; c < n; c++) {
                const h = e.length - n + c;
                s[h] = e[h]
            }
            return s
        }
        isMaskingPlaceholder(e) {
            return Ut(e, th)
        }
        anonymizeNames(e) {
            return e.replace(eh, ih)
        }
    }
    const hs = ".",
        An = "__DOT__",
        Ma = "x";

    function sh(i) {
        const [e, t, s, n, a, o, c, h, d] = oh(i);
        return {
            id: e,
            creationTimestamp: Number(t),
            visitsCount: Number(s),
            hitTimestamp: Number(n),
            lastVisitTimestamp: Number(a),
            appliedTrackingDraw: Number(o),
            expires: Number(c),
            allowSubdomains: h === void 0 ? void 0 : !!Number(h),
            identityPrint: d === void 0 || d === Ma ? null : d
        }
    }

    function nh(i) {
        var e;
        return [i.id, i.creationTimestamp, i.visitsCount, i.hitTimestamp, i.lastVisitTimestamp, i.appliedTrackingDraw, i.expires, i.allowSubdomains ? 1 : 0, (e = i.identityPrint) != null ? e : Ma].map(String).map(rh).join(hs)
    }

    function rh(i) {
        return i.replace(/\./g, An)
    }

    function ah(i) {
        return i.replace(new RegExp(An, "g"), hs)
    }

    function oh(i) {
        return i.indexOf(An) !== -1 ? i.split(hs).map(ah) : i.split(hs)
    }
    var Pn;
    (i => {
        function e() {
            const s = navigator.userAgent + navigator.language + navigator.platform,
                n = t(s).toString(16).slice(-4);
            let a = new Date().getTime();
            return "xxxxxxxx-hhhh-axxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
                const h = (a + Math.random() * 16) % 16 | 0;
                return a = Math.floor(a / 16), (c === "x" ? h : h & 7 | 8).toString(16)
            }).replace("hhhh", n)
        }
        i.generate = e;

        function t(s) {
            let n = 0;
            for (let a = 0; a < s.length; a += 1) n = s.charCodeAt(a) + (n << 6) + (n << 16) - n;
            return Math.abs(n)
        }
    })(Pn || (Pn = {}));

    function ch(i, e, t) {
        if (!q(e) && !q(t)) return i.href;
        const s = q(e) ? lh(e) : i.pathname,
            n = q(t) ? uh(t) : i.search;
        return `${i.protocol}//${i.host}${s}${n}`
    }

    function lh(i) {
        return Ut(i, "/") ? i : `/${i}`
    }

    function uh(i) {
        return Ut(i, "?") || i === "" ? i : `?${i}`
    }
    class _s {
        constructor(e) {
            this.timestamp = e, this.type = "asyncEvent", this.resolved = !1
        }
        resolve(e) {
            if (this.resolved) throw new Error("AsyncEvent already resolve.");
            this.value = { ...e,
                timestamp: this.timestamp
            }, this.resolved = !0, this.callback && this.callback(this.value)
        }
        reject(e) {
            return this.resolve(e)
        }
        complete(e) {
            this.resolved && e(this.value), this.callback = e
        }
        wait() {
            return new Promise(e => this.complete(e))
        }
    }
    class ka {
        constructor() {
            this.subscriptions = [], this.isStarted = !1
        }
        get name() {
            var e;
            return ((e = this.constructor) == null ? void 0 : e.name) || "Producer"
        }
        async produceEvent(e) {
            var t;
            this.isStarted && (e instanceof _s || (e.timestamp = (t = e.timestamp) != null ? t : mt.now()), this.subscriptions.forEach(s => s(e)))
        }
        onStop() {}
        restart() {
            this.stop(), this.start()
        }
        start() {
            this.isStarted || (this.isStarted = !0, Te(`${this.name}.start`, () => this.onStart())())
        }
        stop() {
            this.isStarted && (this.isStarted = !1, Te(`${this.name}.stop`, () => this.onStop())())
        }
        subscribe(e) {
            return this.subscriptions.push(e), () => {
                const t = this.subscriptions.indexOf(e);
                this.subscriptions.splice(t, 1)
            }
        }
    }
    var ds;
    (i => {
        (S => {
            S[S.NotMasked = 0] = "NotMasked", S[S.Parent = 1] = "Parent", S[S.Child = 2] = "Child"
        })(i.MaskedElementState || (i.MaskedElementState = {})), i.maskedProp = "masked", i.maskedAttributeProp = "maskedAttribute";

        function e(S) {
            return Ir(S) && "Attributes" in S && "PIISelectors" in S ? S.Attributes instanceof Array && S.PIISelectors instanceof Array : !1
        }
        i.isSelectorUserInput = e;

        function t(S) {
            if (!Ir(S) || S === null) throw new ou("setPIISelectors");
            return "Attributes" in S || (S.Attributes = []), "PIISelectors" in S || (S.PIISelectors = []), S
        }
        i.sanitizeSelectorUserInput = t;

        function s(S) {
            var v, N, B;
            return "nodeType" in S ? (v = at.getProperty(S, i.maskedProp)) != null ? v : {
                state: 0
            } : (B = (N = S.metadata) == null ? void 0 : N[i.maskedProp]) != null ? B : {
                state: 0
            }
        }
        i.getMaskedElementDetails = s;

        function n(S) {
            var v, N, B;
            return "nodeType" in S ? (v = at.getProperty(S, i.maskedAttributeProp)) != null ? v : {
                attributes: []
            } : (B = (N = S.metadata) == null ? void 0 : N[i.maskedAttributeProp]) != null ? B : {
                attributes: []
            }
        }
        i.getMaskedAttributeDetails = n;

        function a(S) {
            const v = at.getProperty(S, i.maskedProp);
            return (v == null ? void 0 : v.state) === 1
        }
        i.isMaskedElement = a;

        function o(S) {
            const v = at.getProperty(S, i.maskedProp);
            return (v == null ? void 0 : v.state) === 2
        }
        i.isMaskedElementChild = o;

        function c(S, v) {
            var B;
            const N = at.getProperty(S, i.maskedAttributeProp);
            return ((B = N == null ? void 0 : N.attributes) == null ? void 0 : B.indexOf(v)) > -1
        }
        i.isMaskedAttribute = c;

        function h(S, v) {
            at.setProperty(S, i.maskedProp, v)
        }
        i.setMaskedElementProperty = h;

        function d(S) {
            at.setProperty(S, i.maskedProp, void 0)
        }
        i.unsetMaskedElementProperty = d;

        function f(S, v) {
            at.setProperty(S, i.maskedAttributeProp, v)
        }
        i.setMaskedAttributeProperty = f;

        function T(S, v) {
            const N = S.PIISelectors.filter(j => on(j));
            v.elementSelector.length > 0 && N.push(...v.elementSelector.split(","));
            const $ = {
                elementSelector: A([...N]).join(","),
                attrSelector: v.attrSelector,
                attrSelectors: v.attrSelectors
            };
            return S.Attributes.forEach(j => {
                j != null && j.attrName && (j != null && j.selector) && on(j.selector) && !g($.attrSelectors, j) && $.attrSelectors.push(j)
            }), $.attrSelector = p($.attrSelectors), $
        }
        i.getComputedSelectorSettings = T;

        function g(S, v) {
            return S.some(N => N.selector === v.selector && N.attrName === v.attrName)
        }

        function p(S) {
            let v = "";
            return S.forEach(N => {
                N.selector.split(",").forEach($ => {
                    on($) && (v && (v += ","), v += $)
                })
            }), v
        }

        function A(S) {
            if (S.length <= 1) return S;
            const v = [];
            for (const N of S) {
                const B = N.split(",");
                for (const $ of B) v.indexOf($) === -1 && v.push($)
            }
            return v
        }
    })(ds || (ds = {}));
    var Sn;
    (i => {
        i.ENCRYPTED_NODE_PROP = "encrypted";

        function e(n) {
            return at.getProperty(n, i.ENCRYPTED_NODE_PROP) === !0
        }
        i.shouldEncrypt = e;

        function t(n) {
            at.setProperty(n, i.ENCRYPTED_NODE_PROP, !0)
        }
        i.markEncryptedNode = t;

        function s(n) {
            at.setProperty(n, i.ENCRYPTED_NODE_PROP, void 0)
        }
        i.unmarkEncryptedNode = s
    })(Sn || (Sn = {}));
    var hh = Object.defineProperty,
        _h = Object.getOwnPropertyDescriptor,
        xa = (i, e, t, s) => {
            for (var n = _h(e, t), a = i.length - 1, o; a >= 0; a--)(o = i[a]) && (n = o(e, t, n) || n);
            return n && hh(e, t, n), n
        };
    class La extends ka {
        constructor() {
            super(), this.elements = new Set, this.watchedElements = new WeakSet, this.textsSeen = new Set, this.useAnonymization = !1, this.visibilityObserver = new un, this.textObserver = new uu(e => {
                const t = Re.getParentElement(e);
                !t || !t.isConnected || !this.isEligible(t) || Ar(e.data) || (this.elements.add(t), this.watchElements())
            })
        }
        onStart() {
            un.isSupported() && (this.visibilityObserver.start((e, t) => this.onVisibilityChanged(e, t)), this.textObserver.observe())
        }
        onStop() {
            un.isSupported() && (this.visibilityObserver.stop(), this.textObserver.disconnect(), this.elements.clear(), this.watchedElements = new WeakSet, this.textsSeen.clear())
        }
        setAnonymization(e) {
            this.useAnonymization = e
        }
        watchElements() {
            if (!this.isStarted) return;
            const e = this.elements;
            this.elements = new Set;
            for (const t of Wi(e)) !t.isConnected || this.watchedElements.has(t) || (this.watchedElements.add(t), Zs(t.childNodes, s => s.nodeType === Node.TEXT_NODE) && this.visibilityObserver.observe(t))
        }
        onVisibilityChanged(e, t) {
            t !== ts.VisibleInViewPort || this.useAnonymization && !Ai.isWhitelistedElement(e) || this.isEligible(e) && Q(e.childNodes, s => {
                if (s.nodeType !== Node.TEXT_NODE) return;
                const n = s.data;
                this.textsSeen.has(n) || (this.textsSeen.add(n), this.produceEvent({
                    type: "TextVisibility",
                    text: n,
                    state: t
                }))
            })
        }
        isEligible(e) {
            return e.isConnected && !ds.isMaskedElement(e) && !ds.isMaskedElementChild(e) && !Sn.shouldEncrypt(e) && !Rn.isEditableNode(e) && !Ks(e) && !gl(e) && !yr(e)
        }
    }
    xa([pt(), en({
        wait: 50,
        mode: "trailing"
    })], La.prototype, "watchElements"), xa([pt()], La.prototype, "onVisibilityChanged");
    var Es;
    (i => {
        function e(t) {
            return t.type === "TextVisibility"
        }
        i.isTextVisibilityEvent = e
    })(Es || (Es = {}));
    var dh = Object.defineProperty,
        Eh = Object.getOwnPropertyDescriptor,
        fh = (i, e, t, s) => {
            for (var n = Eh(e, t), a = i.length - 1, o; a >= 0; a--)(o = i[a]) && (n = o(e, t, n) || n);
            return n && dh(e, t, n), n
        };

    function Ua(i) {
        var t;
        const e = (t = i.attributes) == null ? void 0 : t.type;
        if (e != null) return e.toLowerCase().trim()
    }
    class He extends Fu {
        constructor(e, t, s = new Ct, n = null, a = !1) {
            super(), this.pii = s, this.anonymizeDigits = n, this.captureAnonymizedPlaceholders = a, this.anonymizedTextSanitizer = new Sh(e, t, s, n, a)
        }
        setAnonymization(e) {
            this.anonymizedTextSanitizer.setAnonymization(e)
        }
        setAnonymizeDigits(e) {
            this.anonymizeDigits = e, this.anonymizedTextSanitizer.setAnonymizeDigits(e)
        }
        isListening(e) {
            return e.type === "DOM_PATCH" || e.type === "DOM_INITIAL_STATE" || Es.isTextVisibilityEvent(e)
        }
        processEvent(e) {
            var n, a;
            if (Es.isTextVisibilityEvent(e)) return e.text = this.pii.checkAndAnonymizePII(e.text, this.anonymizeDigits), e;
            const t = e.type === "DOM_PATCH" ? e.diff : e.state,
                s = e.state;
            for (const o in t) {
                const c = s[o];
                if (!c) {
                    ft.warn(`AnonymizedTextProcessor: Missing node ${o} in state (event: ${e.type})`, !0, "AnonymizedTextProcessor.handleFastDom");
                    continue
                }
                const h = c.parent,
                    d = h ? s[h] : void 0;
                switch (c.type) {
                    case Pe.TEXT_NODE:
                    case Pe.COMMENT_NODE:
                        {
                            const f = t[o];
                            if (f.data == null) continue;
                            if (d || ft.warn(`AnonymizedTextProcessor: Missing parent "${h}" from node ${o} (${c.type}) (event: ${e.type})`, !0, "AnonymizedTextProcessor.handleFastDom"), (d == null ? void 0 : d.localName) === "script") {
                                f.data = "";
                                continue
                            }
                            const {
                                anonymizedValue: T,
                                withAnonymization: g
                            } = this.anonymizedTextSanitizer.getAnonymizedValue((n = f.data) != null ? n : "", d == null ? void 0 : d.localName, d == null ? void 0 : d.metadata);f.anonymized = g,
                            f.data = T;
                            break
                        }
                    case Pe.ELEMENT_NODE:
                        {
                            const f = t[o];
                            if (f.attributes)
                                for (const T in f.attributes) {
                                    const g = f.attributes[T];
                                    if (g == null) continue;
                                    const p = Ua(c);
                                    f.attributes[T] = this.anonymizedTextSanitizer.getAnonymizedAttributeValue(c.namespaceURI, c.localName, T, g, p)
                                }(a = f.state) != null && a.value && (f.state.value = Bu(f.state.value, Ua(c)));
                            break
                        }
                }
            }
            return e
        }
    }
    fh([ji()], He.prototype, "processEvent");
    const Th = ["id", "class", "style", "srcset", "sizes", "rel", "type", "width", "height", "media", "align", "dir", "bgcolor", "color", "border", "colspan", "rowspan", "cols", "rows", "size", "start", "slot", "data-cs-override-id"],
        gh = i => {
            const e = new Set(Th);
            return i.forEach(t => {
                e.add(t)
            }), e
        },
        Rh = ["svg", "slot"],
        ph = (i, e, t) => t === "radio" && i === "input" && e === "name" || Rh.indexOf(i) > -1,
        za = {
            href: new Set(["a"]),
            src: new Set(["iframe"])
        },
        mh = i => za.hasOwnProperty(i),
        Ih = (i, e, t) => {
            var s;
            return ((s = za[e]) == null ? void 0 : s.has(i)) && !au(t)
        },
        Ah = (i, e, t) => (t === "submit" || t === "button") && i === "input" && e === "value";

    function $a(i) {
        return i ? Ph(i) : null
    }

    function Ph(i) {
        try {
            const e = /^\/(.*)\/([gim]*)$/.exec(i);
            if (e) {
                const [, t, s] = e;
                return new RegExp(`^${t}$`, s)
            }
            return new RegExp(`^${i}$`)
        } catch {
            return null
        }
    }
    class Sh {
        constructor(e, t, s, n = null, a = !1) {
            this.useAnonymization = e, this.whitelistedAttributes = t, this.pii = s, this.anonymizeDigits = n, this.captureAnonymizedPlaceholders = a, this.allWhitelistedAttributes = gh(this.whitelistedAttributes)
        }
        sanitize(e) {
            return at.traverse(e, (t, s) => {
                if (t.anonymized = this.useAnonymization, t.nodeType === Pe.TEXT_NODE) {
                    const n = t,
                        {
                            anonymizedValue: a,
                            withAnonymization: o
                        } = this.getAnonymizedValue(n.data, s == null ? void 0 : s.localName, s ? at.getProperties(s) : void 0);
                    t.anonymized = o, n.data = a;
                    return
                }
                if ($u.isElement(t)) return this.handleElementAttributes(t);
                if (t.nodeType === Pe.CDATA_SECTION_NODE) {
                    const n = t;
                    n.data = this.pii.checkAndAnonymizePII(n.data, this.anonymizeDigits), this.useAnonymization && (n.data = wa(n.data));
                    return
                }
            }), e
        }
        setAnonymization(e) {
            this.useAnonymization = e
        }
        setAnonymizeDigits(e) {
            this.anonymizeDigits = e
        }
        getAnonymizedValue(e, t, s) {
            let n;
            if (t === "style") return {
                anonymizedValue: e,
                withAnonymization: !1
            };
            const a = (s == null ? void 0 : s[Ai.ANONYMIZED_TEXT_STATUS_PROP]) === Ai.WHITELISTED_STATUS;
            return n = this.pii.checkAndAnonymizePII(e, this.anonymizeDigits), this.useAnonymization && !a ? {
                anonymizedValue: wa(n),
                withAnonymization: !0
            } : {
                anonymizedValue: n,
                withAnonymization: !1
            }
        }
        handleElementAttributes(e) {
            const t = Vr(e.attributes, n => n.name === "type"),
                s = t == null ? void 0 : t.value;
            e.attributes = e.attributes.map(n => (n.anonymized = this.useAnonymization, n.value = this.getAnonymizedAttributeValue(e.namespaceURI, e.localName, n.name, n.value, s), n))
        }
        getAnonymizedAttributeValue(e, t, s, n, a) {
            if (e === "http://www.w3.org/2000/svg" || e === "svg" || this.shouldWhitelistAttribute(t, s, a)) return n;
            if (mh(s)) return Ih(t, s, n) ? this.pii.anonymizePII(n) : n;
            const o = this.captureAnonymizedPlaceholders && s === "placeholder";
            return this.useAnonymization && (Ah(t, s, a) || o) ? Gu(n) : this.useAnonymization ? "" : this.pii.checkAndAnonymizePII(n, null)
        }
        shouldWhitelistAttribute(e, t, s) {
            return ph(e, t, s) || this.allWhitelistedAttributes.has(t)
        }
    }
    var Ai;
    (i => {
        i.ANONYMIZED_TEXT_STATUS_PROP = "anonymizationStatus", i.WHITELISTED_STATUS = "whitelisted";

        function e(n) {
            return at.getProperty(n, i.ANONYMIZED_TEXT_STATUS_PROP) === i.WHITELISTED_STATUS
        }
        i.isWhitelistedElement = e;

        function t(n) {
            at.setProperty(n, i.ANONYMIZED_TEXT_STATUS_PROP, i.WHITELISTED_STATUS)
        }
        i.whitelistElement = t;

        function s(n) {
            at.setProperty(n, i.ANONYMIZED_TEXT_STATUS_PROP, void 0)
        }
        i.removeWhitelistElement = s
    })(Ai || (Ai = {}));

    function Fa(i, e) {
        const t = new Ga;
        return i.subscribe(s => e.transform(s, n => t.push(n))), t
    }

    function Ha(i, e) {
        return i.subscribe(t => e.write(t))
    }

    function qa(i, e = 2) {
        const t = [];
        for (let s = 0; s < e; s += 1) t.push(new Ga);
        return i.subscribe(s => {
            for (let n = 0; n < t.length; n += 1) t[n].push(s)
        }), t
    }
    class Ga {
        constructor() {
            this.subscribers = []
        }
        subscribe(e) {
            return this.subscribers.push(e), () => {
                const t = this.subscribers.indexOf(e);
                t !== -1 && this.subscribers.splice(t, 1)
            }
        }
        push(e) {
            const t = this.subscribers;
            for (let s = 0; s < t.length; s += 1) t[s](e)
        }
        pipeThrough(e) {
            return Fa(this, e)
        }
        pipeTo(e) {
            return Ha(this, e)
        }
        tee(e = 2) {
            return qa(this, e)
        }
    }
    class fs {
        constructor() {
            this.queue = new _a, this.callback = null, this.flushing = !1, this.generation = 0
        }
        get queueLength() {
            return this.queue.length
        }
        start(e) {
            if (this.callback) throw new Error("callback already set");
            this.callback = e, this.drain()
        }
        push(e) {
            if (!this.callback) return;
            const t = {
                resolved: !(e instanceof _s),
                value: e instanceof _s ? void 0 : e
            };
            if (this.queue.push(t), e instanceof _s) {
                const s = this.generation;
                e.complete(n => {
                    !this.callback || s !== this.generation || (t.value = n, t.resolved = !0, this.drain())
                })
            }
            this.drain()
        }
        stop() {
            this.callback = null, this.generation++, this.queue = new _a
        }
        drain(e) {
            if (this.callback === null || this.flushing) return;
            const t = (e == null ? void 0 : e.dropPendingAsync) === !0;
            t && this.generation++, this.flushing = !0;
            try {
                for (; this.queue.length > 0 && (t || this.queue.peek().resolved) && this.callback !== null;) {
                    const s = this.queue.pop();
                    s.resolved && this.callback(s.value)
                }
            } finally {
                this.flushing = !1
            }
        }
        static pipe(e) {
            const t = e.map(() => new fs),
                s = new Vh(t);
            let n = s;
            for (let a = e.length - 1; a >= 0; a--) {
                const o = t[a],
                    c = n;
                o.start(h => e[a].pushEvent(h, d => c.push(d))), n = o
            }
            return {
                input: n,
                output: s
            }
        }
    }
    class Vh extends fs {
        constructor(e) {
            super(), this.stages = e
        }
        get queueLength() {
            return super.queueLength + this.stages.reduce((e, t) => e + t.queueLength, 0)
        }
        stop() {
            super.stop(), Q(this.stages, e => e.stop())
        }
        drain(e) {
            e != null && e.dropPendingAsync && Q(this.stages, t => t.drain(e)), super.drain(e)
        }
    }
    const Ba = "__csRecorderDrain__";
    class qe {
        constructor(e = [], t = []) {
            this.producers = e, this.processors = t, this.active = !1, this.subscribers = [], this.producerUnsubscribes = []
        }
        get pendingEvents() {
            var e, t;
            return (t = (e = this.queue) == null ? void 0 : e.queueLength) != null ? t : 0
        }
        addProducer(e) {
            this.producers.push(e), this.active && (this.connectProducer(e), e.start())
        }
        restartProducers(e) {
            this.active && Q(e, t => t.restart())
        }
        addProcessor(e) {
            if (this.active) throw new Error("Cannot add a processor while active.");
            this.processors.push(e)
        }
        activate() {
            this.active || this.startPipeline()
        }
        deactivate() {
            this.active && (Q(this.producers, e => e.stop()), Q(this.producerUnsubscribes, e => e()), this.producerUnsubscribes = [], this.queue.stop(), Q(this.processors, e => e.stop()), this.active = !1)
        }
        start() {
            if (this.active) throw new Error("Recording is already started.");
            this.startPipeline()
        }
        stop() {
            this.deactivate()
        }
        startPipeline() {
            const {
                input: e,
                output: t
            } = fs.pipe(this.processors);
            this.entryQueue = e, this.queue = t, this.queue.start(s => this.handleOutput(s)), Q(this.processors, s => s.start()), this.active = !0, Q(this.producers, s => this.connectProducer(s)), Q(this.producers, s => s.start())
        }
        connectProducer(e) {
            this.producerUnsubscribes.push(e.subscribe(t => this.entryQueue.push(t)))
        }
        handleOutput(e) {
            if (e.type === Ba) {
                e.resolve();
                return
            }
            this.subscribers.forEach(t => t(e))
        }
        drain(e) {
            return this.active ? e != null && e.dropPendingAsync ? (this.queue.drain({
                dropPendingAsync: !0
            }), Promise.resolve()) : new Promise(t => {
                this.entryQueue.push({
                    type: Ba,
                    timestamp: 0,
                    resolve: t
                })
            }) : Promise.resolve()
        }
        subscribe(e) {
            if (this.active) throw new Error("Recording is already active.");
            return this.subscribers.push(e), () => this.subscribers = this.subscribers.filter(t => t !== e)
        }
        tee(e = 2) {
            return qa(this, e)
        }
        pipeThrough(e) {
            return Fa(this, e)
        }
        pipeTo(e) {
            return Ha(this, e)
        }
    }
    const Ge = Zt("ExtensionApi"),
        Pi = Zt("ShopifyBrowser"),
        Ts = Zt("ShopifyAnalytics"),
        Vn = Zt("ShopifyInit"),
        vn = Zt("ShopifySettings"),
        Ya = Zt("CS_CONF"),
        vh = 1,
        X = (() => {
            class i {
                constructor(t) {
                    var s, n, a, o;
                    this.useHttps = !0, this.trackerDomain = t.trackerDomain, this.dynamicConfDomain = t.dynamicConfDomain, this.settingsFileUri = t.settingsFileUri, this.tagDomain = t.tagDomain, this.loggerDomain = t.ed, this.projectId = t.projectId, this.status = t.status, this.hostnames = t.hostnames, this.secureCookiesEnabled = !!t.secureCookiesEnabled, this.whitelistedAttributes = t.whitelistedAttributes || [], this.sampleRate = t.sampleRate, this.replayRecordingRate = t.replayRecordingRate, this.visitorCookieTimeout = t.visitorCookieTimeout || Br, this.validationRate = t.validationRate || 10, this.lastTrackingDraw = t.lastTrackingDraw || 1, this.recordTargetingRules = (n = t.recordTargetingRules) !== null && n !== void 0 ? n : [], this.quotas = (a = t.quotas) !== null && a !== void 0 ? a : null, this.consentRequired = t.anonymisationMethod === es.replayRecordingUnmaskedUrlRegexRules || t.anonymisationMethod === es.replayRecordingUnmaskedUrlRegex || t.anonymisationMethod === null && !!t.consentRequired, this.malkaEtrEnabled = !!t.malkaEtrEnabled, this.malkaUrlEnabled = !!t.malkaUrlEnabled, this.recordingUrlRules = (o = t.recordingUrlRules) !== null && o !== void 0 ? o : [], this.malkaQuotaServiceDomain = t.malkaQuotaServiceDomain || null, this.malkaRecordingDomain = t.malkaRecordingDomain || null, this.allowSubdomains = !!t.allowSubdomains, this.environment = ((s = t.uxaDomain) === null || s === void 0 ? void 0 : s.indexOf("staging")) > -1 ? "staging" : "production", this.replayRecordingUnmaskedUrlRegex = $a(t.replayRecordingUnmaskedUrlRegex), this.replayRecordingMaskedUrlRegex = $a(t.replayRecordingMaskedUrlRegex), this.replayRecordingMaskedUrlRegexRules = t.replayRecordingMaskedUrlRegexRules || null, this.replayRecordingUnmaskedUrlRegexRules = t.replayRecordingUnmaskedUrlRegexRules || null, this.maskMedia = t.maskMedia, this.anonymisationMethod = t.anonymisationMethod || null
                }
                getTrackerUri() {
                    return `${this._PRIVATE_protocol()}://${this.trackerDomain}`
                }
                getRecordingUri() {
                    return `${this._PRIVATE_protocol()}://${this.malkaRecordingDomain}`
                }
                getLegacyQuotaUri() {
                    return `${this._PRIVATE_protocol()}://${this.malkaQuotaServiceDomain}`
                }
                getLoggerUri() {
                    return `${this._PRIVATE_protocol()}://${this.loggerDomain}`
                }
                getMetricsUri() {
                    return `${this._PRIVATE_protocol()}://${this.loggerDomain}/metrics`
                }
                getSettingsFileUri() {
                    return this.settingsFileUri ? this.settingsFileUri : `${this._PRIVATE_protocol()}://${this.dynamicConfDomain}/${this.projectId}.json`
                }
                _PRIVATE_protocol() {
                    return this.useHttps ? "https" : "http"
                }
                isProjectActive() {
                    return this.status === vh
                }
                getRequestParameters() {
                    return {
                        pid: `${this.projectId}`
                    }
                }
                hasTargetingRules() {
                    var t;
                    return !!(!((t = this.recordTargetingRules) === null || t === void 0) && t.length)
                }
                isQuotaEnabled() {
                    return this.quotas !== null
                }
                hasRecordingUrlRules() {
                    var t;
                    return !!(!((t = this.recordingUrlRules) === null || t === void 0) && t.length)
                }
            }
            return i.$deps = [Ya], i
        })(),
        bh = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_configuration = t
                }
                canTrack() {
                    return this._PRIVATE_configuration.isProjectActive() && this._PRIVATE_canTrackProjectDomain()
                }
                _PRIVATE_canTrackProjectDomain() {
                    return Gl(k.location.hostname, this._PRIVATE_configuration.hostnames)
                }
            }
            return i.$deps = [X], i
        })(),
        ie = (() => {
            class i {
                constructor(t) {
                    this.configuration = t
                }
            }
            return i
        })(),
        Be = (() => {
            let i;
            return function(e) {
                e.CURRENT_DOMAIN = "CURRENT_DOMAIN";
                async function t(o, c) {
                    return o.cookie.get(c)
                }
                e.get = t;
                async function s(o, c) {
                    await o.cookie.set(c)
                }
                e.set = s;
                async function n(o, c, h, d) {
                    if (await t(o, c)) {
                        const g = h === e.CURRENT_DOMAIN ? void 0 : h,
                            p = g ? `;domain=${g}` : "",
                            A = `;expires=${new Date(0).toUTCString()}`,
                            N = `${c}=${A};path=/${p}${d?";Secure":""}`;
                        await o.cookie.set(N)
                    }
                    if (await t(o, c)) {
                        const g = h === e.CURRENT_DOMAIN ? void 0 : h,
                            p = g ? `;domain=${g}` : "",
                            A = `;expires=${new Date(0).toUTCString()}`,
                            v = `${c}=${A};path=/${p};SameSite=None;Secure`;
                        await o.cookie.set(v)
                    }
                }
                e.remove = n;
                async function a(o, c) {
                    const h = "_cs_root-domain";
                    let d = await t(o, h);
                    if (d !== "" && d !== "1") return d;
                    const f = I(k.location, Bi, "hostname", Bi, Bs(".")) || [""];
                    let T = f.pop();
                    for (; f.length && (d === "" || d === "1");) {
                        T = [I(f, ur()), T].join(".");
                        const g = "",
                            p = ";path=/",
                            A = `;domain=${T}`,
                            v = `${h}=${T}${g}${p}${A}${c?";Secure":""}`;
                        await s(o, v), d = await t(o, h)
                    }
                    return await n(o, h, T, c), T
                }
                e.getRootDomain = a
            }(i || (i = {})), i
        })(),
        Se = (() => {
            class i {
                constructor(t, s) {
                    this.browser = t, this._PRIVATE_configuration = s, this._PRIVATE_domain = null, this._PRIVATE_rootDomain = null, this._PRIVATE_secureCookiesEnabled = !1, this._PRIVATE_secureCookiesEnabled = this._PRIVATE_configuration.secureCookiesEnabled
                }
                async init() {
                    this._PRIVATE_rootDomain = await this._PRIVATE_computeRootDomain(), this._PRIVATE_domain = this._PRIVATE_computeDomain(this._PRIVATE_rootDomain)
                }
                async get(t) {
                    return Be.get(this.browser, t)
                }
                async set(t, s, n) {
                    const a = encodeURIComponent(`${s}`),
                        o = yh(n),
                        c = o ? `;expires=${o.toUTCString()}` : "",
                        h = ";path=/",
                        d = this._PRIVATE_domain !== Be.CURRENT_DOMAIN ? `;domain=${this._PRIVATE_domain}` : "",
                        f = this._PRIVATE_secureCookiesEnabled ? ";Secure" : "",
                        T = `${t}=${a}${c}${h}${d}${f}`;
                    await Be.set(this.browser, T)
                }
                async delete(t, s) {
                    const n = s || this._PRIVATE_domain;
                    await Be.remove(this.browser, t, n, this._PRIVATE_secureCookiesEnabled)
                }
                async _PRIVATE_computeRootDomain() {
                    return Be.getRootDomain(this.browser, this._PRIVATE_secureCookiesEnabled)
                }
                _PRIVATE_computeDomain(t) {
                    return this._PRIVATE_configuration.allowSubdomains ? t : Be.CURRENT_DOMAIN
                }
            }
            return i.$deps = [Pi, X], i.CURRENT_DOMAIN = "CURRENT_DOMAIN", i
        })();

    function yh(i) {
        return typeof i == "number" ? new Date(Date.now() + i) : i
    }
    const gs = "_cs_s",
        wh = 18e5,
        bn = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_cookieService = t
                }
                async get() {
                    const t = await this._PRIVATE_getRawValueFromStorage();
                    return t ? Ca(t) : null
                }
                async set(t, s = wh) {
                    const n = mt.now() + s,
                        a = ju(t) + `${mn}${n}`;
                    await this._PRIVATE_cookieService.set(gs, a, s)
                }
                async remove() {
                    await this._PRIVATE_cookieService.delete(gs)
                }
                async _PRIVATE_getRawValueFromStorage() {
                    return this._PRIVATE_cookieService.get(gs)
                }
            }
            return i.$deps = [Se], i
        })(),
        Mt = (() => {
            class i {
                constructor(t, s) {
                    this._PRIVATE_sessionStorage = t, this._PRIVATE_collectState = s
                }
                async createOrUpdateSession() {
                    let t = await this.getSession();
                    t === null ? t = {
                        pageNumber: 1,
                        collectState: await this._PRIVATE_collectState.computeInitialCollectState(),
                        replayConsent: mi.UNNECESSARY,
                        etrStatus: os.ETR_NOT_SAVED_SESSION
                    } : (t.pageNumber += 1, t.collectState = await this._PRIVATE_collectState.getEligibleCollectState(t)), await this.setSession(t)
                }
                async getRequestParameters() {
                    const t = {},
                        s = await this.getSession();
                    return s !== null && (t.pn = String(s.pageNumber)), t
                }
                async getCollectState() {
                    const t = await this.getSession();
                    return t ? t.collectState : null
                }
                async updateCollectState(t) {
                    const s = await this.getSession();
                    s !== null && (s.collectState = t, await this.setSession(s))
                }
                getSession() {
                    return this._PRIVATE_sessionStorage.get()
                }
                setSession(t) {
                    return this._PRIVATE_sessionStorage.set(t)
                }
                async shouldStartAnalytics() {
                    return !!await this.getSession() && this._PRIVATE_collectState.canTrack()
                }
                async shouldStartSessionReplay() {
                    const t = await this.getSession();
                    return !!t && this._PRIVATE_collectState.isReplayRecorded(t)
                }
                async refreshSession() {
                    const t = await this.getSession();
                    t && await this.setSession(t)
                }
                removeSession() {
                    this._PRIVATE_sessionStorage.remove()
                }
                async hasValidSession() {
                    return await this.getSession() !== null
                }
            }
            return i.$deps = [bn, ie], i
        })(),
        yn = "_cs_id",
        wn = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_cookieService = t
                }
                async get() {
                    const t = await this._PRIVATE_cookieService.get(yn);
                    return t ? sh(t) : null
                }
                async set(t) {
                    const s = nh(t),
                        n = new Date(t.expires);
                    await this._PRIVATE_cookieService.set(yn, s, n)
                }
                async remove() {
                    await this._PRIVATE_cookieService.delete(yn)
                }
            }
            return i.$deps = [Se], i
        })(),
        Nh = "_cs_shopify_customer_id",
        Rs = (() => {
            class i {
                constructor(t, s, n, a) {
                    this._PRIVATE_endpoint = t, this._PRIVATE_customerId = s, this._PRIVATE_lastCustomerIdStorage = n, this._PRIVATE_dynamicVariablesService = a, this._PRIVATE_encoder = new TextEncoder
                }
                async sendCustomerMappingIfChanged(t) {
                    if (await this._PRIVATE_lastCustomerIdStorage.getLastCustomerId() === this._PRIVATE_customerId) {
                        G.debug("CustomerMappingService shopify customer id did not change");
                        return
                    }
                    try {
                        const s = await this.hashCustomerId(this._PRIVATE_customerId);
                        s && this._PRIVATE_dynamicVariablesService.trackDynamicVariable(Nh, s);
                        const n = await fetch(this._PRIVATE_endpoint, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: Lt.stringify({
                                customerId: this._PRIVATE_customerId,
                                csUserId: t
                            })
                        });
                        n.ok ? await this._PRIVATE_lastCustomerIdStorage.storeLastCustomerId(this._PRIVATE_customerId) : G.error(`CustomerMappingService HTTP error: ${n.status}`)
                    } catch (s) {
                        G.error("CustomerMappingService", s)
                    }
                }
                async clearLastCustomerId() {
                    await this._PRIVATE_lastCustomerIdStorage.storeLastCustomerId("")
                }
                async hashCustomerId(t) {
                    if (typeof crypto == "undefined" || !crypto.subtle) return G.error("CustomerMappingService: crypto.subtle not available. Ensure site is running over HTTPS."), null;
                    try {
                        const s = this._PRIVATE_encoder.encode(t),
                            n = await crypto.subtle.digest("SHA-256", s);
                        return zl(n)
                    } catch (s) {
                        return G.error("CustomerMappingService: Failed to hash customer ID", s), null
                    }
                }
            }
            return i
        })(),
        Ve = (() => {
            class i {
                constructor(t, s, n, a) {
                    this._PRIVATE_configuration = t, this._PRIVATE_sessionService = s, this._PRIVATE_storage = n, this._PRIVATE_customerMappingService = a
                }
                async onBeforePageView() {
                    var t;
                    await this.createOrUpdateVisitor(), await this._PRIVATE_sessionService.createOrUpdateSession();
                    const s = await this.getVisitor();
                    s && await ((t = this._PRIVATE_customerMappingService) === null || t === void 0 ? void 0 : t.sendCustomerMappingIfChanged(s.id))
                }
                async onCollectStateChange(t) {
                    await this._PRIVATE_sessionService.updateCollectState(t)
                }
                async getRequestParameters() {
                    const t = await this.getVisitor();
                    return t ? {
                        uu: t.id,
                        sn: `${t.visitsCount}`,
                        hd: `${t.hitTimestamp}`
                    } : {}
                }
                async createOrUpdateVisitor() {
                    var t, s;
                    let n = await this.getVisitor();
                    n === null && (n = this._PRIVATE_createVisitor(), (t = this._PRIVATE_sessionService) === null || t === void 0 || t.removeSession(), await ((s = this._PRIVATE_customerMappingService) === null || s === void 0 ? void 0 : s.clearLastCustomerId())), await this._PRIVATE_updateVisitorData(n), await this._PRIVATE_storeVisitor(n)
                }
                _PRIVATE_createVisitor() {
                    return {
                        id: Pn.generate(),
                        visitsCount: 0,
                        appliedTrackingDraw: this._PRIVATE_configuration.lastTrackingDraw,
                        creationTimestamp: Yr(),
                        lastVisitTimestamp: 0,
                        hitTimestamp: 0,
                        expires: mt.now() + this._PRIVATE_configuration.visitorCookieTimeout,
                        allowSubdomains: this._PRIVATE_configuration.allowSubdomains,
                        identityPrint: null
                    }
                }
                async _PRIVATE_updateVisitorData(t) {
                    const s = Yr();
                    await this._PRIVATE_sessionService.hasValidSession() || (t.visitsCount += 1, t.lastVisitTimestamp = s), this._PRIVATE_currentVisitsCount = t.visitsCount, t.hitTimestamp = s
                }
                async isSessionRenewed() {
                    const t = await this.getVisitor();
                    return !t || !this._PRIVATE_currentVisitsCount ? !1 : t.visitsCount !== this._PRIVATE_currentVisitsCount
                }
                getVisitor() {
                    return this._PRIVATE_storage.get()
                }
                async doesVisitorExist() {
                    return await this._PRIVATE_storage.get() !== null
                }
                async _PRIVATE_storeVisitor(t) {
                    await this._PRIVATE_storage.set(t)
                }
            }
            return i.$deps = [X, Mt, wn, {
                __optional: Rs
            }], i
        })(),
        Wa = (() => {
            class i {
                constructor(t, s) {
                    this._PRIVATE_configuration = t, this._PRIVATE_visitorService = s
                }
                compute(t) {
                    this._PRIVATE_computeState(t)
                }
                async _PRIVATE_computeState(t) {
                    await this._PRIVATE_isIncluded() ? t(!0) : t(!1)
                }
                async _PRIVATE_isIncluded() {
                    const t = Ue.boolean(this._PRIVATE_configuration.sampleRate);
                    return await this._PRIVATE_visitorService.doesVisitorExist() || t
                }
            }
            return i.$deps = [X, Ve], i
        })(),
        Ch = (() => {
            class i {
                constructor() {
                    this.listeners = []
                }
                addListener(t) {
                    this.listeners.includes(t) || I(this.listeners, it(t))
                }
            }
            return i
        })(),
        yt = (() => {
            class i extends Ch {
                async emitPageviewEnd() {
                    const t = [];
                    for (const s of this.listeners) s.onPageviewEnd && I(t, it(s.onPageviewEnd()));
                    await Promise.all(t)
                }
                async emitBeforePageView() {
                    const t = [];
                    for (const s of this.listeners) s.onBeforePageView && I(t, it(s.onBeforePageView()));
                    await Promise.all(t)
                }
                async emitAfterPageView() {
                    const t = [];
                    for (const s of this.listeners) s.onAfterPageView && I(t, it(s.onAfterPageView()));
                    await Promise.all(t)
                }
                async emitPageviewReady() {
                    const t = [];
                    for (const s of this.listeners) s.onPageviewReady && I(t, it(s.onPageviewReady()));
                    await Promise.all(t)
                }
                async emitCollectStateChange(t, s) {
                    const n = [];
                    for (const a of this.listeners) a.onCollectStateChange && I(n, it(a.onCollectStateChange(t, s)));
                    await Promise.all(n)
                }
                async emitTargetingRulesMatched() {
                    const t = [];
                    for (const s of this.listeners) s.onTargetingRulesMatched && I(t, it(s.onTargetingRulesMatched()));
                    await Promise.all(t)
                }
                async emitExternalEvent(t) {
                    const s = [];
                    for (const n of this.listeners) n.onExternalEvent && I(s, it(n.onExternalEvent(t)));
                    await Promise.all(s)
                }
            }
            return i.$deps = [], i
        })(),
        ve = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_urlAnonymizer = t
                }
                getAnonymizedUrl() {
                    const t = ch(k.location, k.location.pathname, k.location.search);
                    return this._PRIVATE_urlAnonymizer.anonymizeUrl(t)
                }
                getRequestParameters() {
                    return {
                        url: this.getAnonymizedUrl()
                    }
                }
            }
            return i.$deps = [us], i
        })(),
        Xa = "_cs_c",
        Si = (() => {
            class i {
                constructor(t, s) {
                    this._PRIVATE_configuration = t, this._PRIVATE_cookieService = s, this._PRIVATE_consentValue = null
                }
                async init() {
                    const t = await this._PRIVATE_readStoredConsent();
                    t === null || this._PRIVATE_hasConsentRequiredChanged(t) ? await this._PRIVATE_setDefaultConsent() : this._PRIVATE_consentValue = t
                }
                isReplayUnanonymizedAllowedByConsent() {
                    return !this._PRIVATE_configuration.consentRequired || this._PRIVATE_consentValue === 2
                }
                getRequestParameters() {
                    return {
                        uc: `${this._PRIVATE_consentValue}`
                    }
                }
                async _PRIVATE_readStoredConsent() {
                    const t = await this._PRIVATE_cookieService.get(Xa);
                    if (!t) return null;
                    const s = Number(t);
                    return Number.isInteger(s) && s >= 0 && s <= 3 ? s : null
                }
                _PRIVATE_hasConsentRequiredChanged(t) {
                    return this._PRIVATE_configuration.consentRequired && t === 0 || !this._PRIVATE_configuration.consentRequired && t !== 0
                }
                async _PRIVATE_setDefaultConsent() {
                    const t = this._PRIVATE_configuration.consentRequired ? 1 : 0;
                    await this._PRIVATE_cookieService.set(Xa, String(t), Br), this._PRIVATE_consentValue = t
                }
            }
            return i.$deps = [X, Se], i
        })(),
        ps = (() => {
            let i;
            return function(e) {
                e.UNCOMPRESSED = "0", e.GZIP = "2"
            }(i || (i = {})), i
        })(),
        Ye = (() => {
            class i {
                constructor(t) {
                    this.onError = t
                }
            }
            return i
        })(),
        Oh = (() => {
            let i;
            return function(e) {
                e.COMPRESSION_DISABLED = "compressionDisabled"
            }(i || (i = {})), i
        })(),
        Nn = (() => {
            class i {
                constructor(t) {
                    this.browser = t
                }
                async setDebugFlag(t) {
                    return this.browser.cookie.set("_cs_debug", t)
                }
                async isDebugFlagEnabled(t) {
                    return await this.browser.cookie.get("_cs_debug") === t
                }
            }
            return i.$deps = [Pi], i
        })();

    function ja() {
        function n(r) {
            let u = r.length;
            for (; --u >= 0;) r[u] = 0
        }
        const a = 0,
            o = 1,
            c = 2,
            h = 3,
            d = 258,
            f = 29,
            T = 256,
            g = T + 1 + f,
            p = 30,
            A = 19,
            S = 2 * g + 1,
            v = 15,
            N = 16,
            B = 7,
            $ = 256,
            j = 16,
            b = 17,
            st = 18,
            Y = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
            et = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
            Di = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
            Mi = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
            Xn = 512,
            R = new Array((g + 2) * 2);
        n(R);
        const y = new Array(p * 2);
        n(y);
        const w = new Array(Xn);
        n(w);
        const D = new Array(d - h + 1);
        n(D);
        const lt = new Array(f);
        n(lt);
        const Ft = new Array(p);
        n(Ft);

        function ki(r, u, _, E, l) {
            this.static_tree = r, this.extra_bits = u, this.extra_base = _, this.elems = E, this.max_length = l, this.has_stree = r && r.length
        }
        let xo, Lo, Uo;

        function jn(r, u) {
            this.dyn_tree = r, this.max_code = 0, this.stat_desc = u
        }
        const zo = r => r < 256 ? w[r] : w[256 + (r >>> 7)],
            xi = (r, u) => {
                r.pending_buf[r.pending++] = u & 255, r.pending_buf[r.pending++] = u >>> 8 & 255
            },
            St = (r, u, _) => {
                r.bi_valid > N - _ ? (r.bi_buf |= u << r.bi_valid & 65535, xi(r, r.bi_buf), r.bi_buf = u >> N - r.bi_valid, r.bi_valid += _ - N) : (r.bi_buf |= u << r.bi_valid & 65535, r.bi_valid += _)
            },
            Ht = (r, u, _) => {
                St(r, _[u * 2], _[u * 2 + 1])
            },
            $o = (r, u) => {
                let _ = 0;
                do _ |= r & 1, r >>>= 1, _ <<= 1; while (--u > 0);
                return _ >>> 1
            },
            q_ = r => {
                r.bi_valid === 16 ? (xi(r, r.bi_buf), r.bi_buf = 0, r.bi_valid = 0) : r.bi_valid >= 8 && (r.pending_buf[r.pending++] = r.bi_buf & 255, r.bi_buf >>= 8, r.bi_valid -= 8)
            },
            G_ = (r, u) => {
                const _ = u.dyn_tree,
                    E = u.max_code,
                    l = u.stat_desc.static_tree,
                    P = u.stat_desc.has_stree,
                    m = u.stat_desc.extra_bits,
                    V = u.stat_desc.extra_base,
                    U = u.stat_desc.max_length;
                let C, Vt, _e, tt, Me, ti, Fs = 0;
                for (tt = 0; tt <= v; tt++) r.bl_count[tt] = 0;
                for (_[r.heap[r.heap_max] * 2 + 1] = 0, C = r.heap_max + 1; C < S; C++) Vt = r.heap[C], tt = _[_[Vt * 2 + 1] * 2 + 1] + 1, tt > U && (tt = U, Fs++), _[Vt * 2 + 1] = tt, !(Vt > E) && (r.bl_count[tt]++, Me = 0, Vt >= V && (Me = m[Vt - V]), ti = _[Vt * 2], r.opt_len += ti * (tt + Me), P && (r.static_len += ti * (l[Vt * 2 + 1] + Me)));
                if (Fs !== 0) {
                    do {
                        for (tt = U - 1; r.bl_count[tt] === 0;) tt--;
                        r.bl_count[tt]--, r.bl_count[tt + 1] += 2, r.bl_count[U]--, Fs -= 2
                    } while (Fs > 0);
                    for (tt = U; tt !== 0; tt--)
                        for (Vt = r.bl_count[tt]; Vt !== 0;) _e = r.heap[--C], !(_e > E) && (_[_e * 2 + 1] !== tt && (r.opt_len += (tt - _[_e * 2 + 1]) * _[_e * 2], _[_e * 2 + 1] = tt), Vt--)
                }
            },
            Fo = (r, u, _) => {
                const E = new Array(v + 1);
                let l = 0,
                    P, m;
                for (P = 1; P <= v; P++) E[P] = l = l + _[P - 1] << 1;
                for (m = 0; m <= u; m++) {
                    let V = r[m * 2 + 1];
                    V !== 0 && (r[m * 2] = $o(E[V]++, V))
                }
            },
            B_ = () => {
                let r, u, _, E, l;
                const P = new Array(v + 1);
                for (_ = 0, E = 0; E < f - 1; E++)
                    for (lt[E] = _, r = 0; r < 1 << Y[E]; r++) D[_++] = E;
                for (D[_ - 1] = E, l = 0, E = 0; E < 16; E++)
                    for (Ft[E] = l, r = 0; r < 1 << et[E]; r++) w[l++] = E;
                for (l >>= 7; E < p; E++)
                    for (Ft[E] = l << 7, r = 0; r < 1 << et[E] - 7; r++) w[256 + l++] = E;
                for (u = 0; u <= v; u++) P[u] = 0;
                for (r = 0; r <= 143;) R[r * 2 + 1] = 8, r++, P[8]++;
                for (; r <= 255;) R[r * 2 + 1] = 9, r++, P[9]++;
                for (; r <= 279;) R[r * 2 + 1] = 7, r++, P[7]++;
                for (; r <= 287;) R[r * 2 + 1] = 8, r++, P[8]++;
                for (Fo(R, g + 1, P), r = 0; r < p; r++) y[r * 2 + 1] = 5, y[r * 2] = $o(r, 5);
                xo = new ki(R, Y, T + 1, g, v), Lo = new ki(y, et, 0, p, v), Uo = new ki(new Array(0), Di, 0, A, B)
            },
            Ho = r => {
                let u;
                for (u = 0; u < g; u++) r.dyn_ltree[u * 2] = 0;
                for (u = 0; u < p; u++) r.dyn_dtree[u * 2] = 0;
                for (u = 0; u < A; u++) r.bl_tree[u * 2] = 0;
                r.dyn_ltree[$ * 2] = 1, r.opt_len = r.static_len = 0, r.last_lit = r.matches = 0
            },
            qo = r => {
                r.bi_valid > 8 ? xi(r, r.bi_buf) : r.bi_valid > 0 && (r.pending_buf[r.pending++] = r.bi_buf), r.bi_buf = 0, r.bi_valid = 0
            },
            Y_ = (r, u, _, E) => {
                qo(r), xi(r, _), xi(r, ~_), r.pending_buf.set(r.window.subarray(u, u + _), r.pending), r.pending += _
            },
            Go = (r, u, _, E) => {
                const l = u * 2,
                    P = _ * 2;
                return r[l] < r[P] || r[l] === r[P] && E[u] <= E[_]
            },
            Zn = (r, u, _) => {
                const E = r.heap[_];
                let l = _ << 1;
                for (; l <= r.heap_len && (l < r.heap_len && Go(u, r.heap[l + 1], r.heap[l], r.depth) && l++, !Go(u, E, r.heap[l], r.depth));) r.heap[_] = r.heap[l], _ = l, l <<= 1;
                r.heap[_] = E
            },
            Bo = (r, u, _) => {
                let E, l, P = 0,
                    m, V;
                if (r.last_lit !== 0)
                    do E = r.pending_buf[r.d_buf + P * 2] << 8 | r.pending_buf[r.d_buf + P * 2 + 1], l = r.pending_buf[r.l_buf + P], P++, E === 0 ? Ht(r, l, u) : (m = D[l], Ht(r, m + T + 1, u), V = Y[m], V !== 0 && (l -= lt[m], St(r, l, V)), E--, m = zo(E), Ht(r, m, _), V = et[m], V !== 0 && (E -= Ft[m], St(r, E, V))); while (P < r.last_lit);
                Ht(r, $, u)
            },
            Kn = (r, u) => {
                const _ = u.dyn_tree,
                    E = u.stat_desc.static_tree,
                    l = u.stat_desc.has_stree,
                    P = u.stat_desc.elems;
                let m, V, U = -1,
                    C;
                for (r.heap_len = 0, r.heap_max = S, m = 0; m < P; m++) _[m * 2] !== 0 ? (r.heap[++r.heap_len] = U = m, r.depth[m] = 0) : _[m * 2 + 1] = 0;
                for (; r.heap_len < 2;) C = r.heap[++r.heap_len] = U < 2 ? ++U : 0, _[C * 2] = 1, r.depth[C] = 0, r.opt_len--, l && (r.static_len -= E[C * 2 + 1]);
                for (u.max_code = U, m = r.heap_len >> 1; m >= 1; m--) Zn(r, _, m);
                C = P;
                do m = r.heap[1], r.heap[1] = r.heap[r.heap_len--], Zn(r, _, 1), V = r.heap[1], r.heap[--r.heap_max] = m, r.heap[--r.heap_max] = V, _[C * 2] = _[m * 2] + _[V * 2], r.depth[C] = (r.depth[m] >= r.depth[V] ? r.depth[m] : r.depth[V]) + 1, _[m * 2 + 1] = _[V * 2 + 1] = C, r.heap[1] = C++, Zn(r, _, 1); while (r.heap_len >= 2);
                r.heap[--r.heap_max] = r.heap[1], G_(r, u), Fo(_, U, r.bl_count)
            },
            Yo = (r, u, _) => {
                let E, l = -1,
                    P, m = u[0 * 2 + 1],
                    V = 0,
                    U = 7,
                    C = 4;
                for (m === 0 && (U = 138, C = 3), u[(_ + 1) * 2 + 1] = 65535, E = 0; E <= _; E++) P = m, m = u[(E + 1) * 2 + 1], !(++V < U && P === m) && (V < C ? r.bl_tree[P * 2] += V : P !== 0 ? (P !== l && r.bl_tree[P * 2]++, r.bl_tree[j * 2]++) : V <= 10 ? r.bl_tree[b * 2]++ : r.bl_tree[st * 2]++, V = 0, l = P, m === 0 ? (U = 138, C = 3) : P === m ? (U = 6, C = 3) : (U = 7, C = 4))
            },
            Wo = (r, u, _) => {
                let E, l = -1,
                    P, m = u[0 * 2 + 1],
                    V = 0,
                    U = 7,
                    C = 4;
                for (m === 0 && (U = 138, C = 3), E = 0; E <= _; E++)
                    if (P = m, m = u[(E + 1) * 2 + 1], !(++V < U && P === m)) {
                        if (V < C)
                            do Ht(r, P, r.bl_tree); while (--V !== 0);
                        else P !== 0 ? (P !== l && (Ht(r, P, r.bl_tree), V--), Ht(r, j, r.bl_tree), St(r, V - 3, 2)) : V <= 10 ? (Ht(r, b, r.bl_tree), St(r, V - 3, 3)) : (Ht(r, st, r.bl_tree), St(r, V - 11, 7));
                        V = 0, l = P, m === 0 ? (U = 138, C = 3) : P === m ? (U = 6, C = 3) : (U = 7, C = 4)
                    }
            },
            W_ = r => {
                let u;
                for (Yo(r, r.dyn_ltree, r.l_desc.max_code), Yo(r, r.dyn_dtree, r.d_desc.max_code), Kn(r, r.bl_desc), u = A - 1; u >= 3 && r.bl_tree[Mi[u] * 2 + 1] === 0; u--);
                return r.opt_len += 3 * (u + 1) + 5 + 5 + 4, u
            },
            X_ = (r, u, _, E) => {
                let l;
                for (St(r, u - 257, 5), St(r, _ - 1, 5), St(r, E - 4, 4), l = 0; l < E; l++) St(r, r.bl_tree[Mi[l] * 2 + 1], 3);
                Wo(r, r.dyn_ltree, u - 1), Wo(r, r.dyn_dtree, _ - 1)
            },
            j_ = r => {
                let u = 4093624447,
                    _;
                for (_ = 0; _ <= 31; _++, u >>>= 1)
                    if (u & 1 && r.dyn_ltree[_ * 2] !== 0) return 0;
                if (r.dyn_ltree[9 * 2] !== 0 || r.dyn_ltree[10 * 2] !== 0 || r.dyn_ltree[13 * 2] !== 0) return 1;
                for (_ = 32; _ < T; _++)
                    if (r.dyn_ltree[_ * 2] !== 0) return 1;
                return 0
            };
        let Xo = !1;
        const Z_ = r => {
                Xo || (B_(), Xo = !0), r.l_desc = new jn(r.dyn_ltree, xo), r.d_desc = new jn(r.dyn_dtree, Lo), r.bl_desc = new jn(r.bl_tree, Uo), r.bi_buf = 0, r.bi_valid = 0, Ho(r)
            },
            jo = (r, u, _, E) => {
                St(r, (a << 1) + (E ? 1 : 0), 3), Y_(r, u, _)
            },
            K_ = r => {
                St(r, o << 1, 3), Ht(r, $, R), q_(r)
            },
            Q_ = (r, u, _, E) => {
                let l, P, m = 0;
                r.level > 0 ? (r.strm.data_type === 2 && (r.strm.data_type = j_(r)), Kn(r, r.l_desc), Kn(r, r.d_desc), m = W_(r), l = r.opt_len + 3 + 7 >>> 3, P = r.static_len + 3 + 7 >>> 3, P <= l && (l = P)) : l = P = _ + 5, _ + 4 <= l && u !== -1 ? jo(r, u, _, E) : r.strategy === 4 || P === l ? (St(r, (o << 1) + (E ? 1 : 0), 3), Bo(r, R, y)) : (St(r, (c << 1) + (E ? 1 : 0), 3), X_(r, r.l_desc.max_code + 1, r.d_desc.max_code + 1, m + 1), Bo(r, r.dyn_ltree, r.dyn_dtree)), Ho(r), E && qo(r)
            },
            J_ = (r, u, _) => (r.pending_buf[r.d_buf + r.last_lit * 2] = u >>> 8 & 255, r.pending_buf[r.d_buf + r.last_lit * 2 + 1] = u & 255, r.pending_buf[r.l_buf + r.last_lit] = _ & 255, r.last_lit++, u === 0 ? r.dyn_ltree[_ * 2]++ : (r.matches++, u--, r.dyn_ltree[(D[_] + T + 1) * 2]++, r.dyn_dtree[zo(u) * 2]++), r.last_lit === r.lit_bufsize - 1);
        var td = Z_,
            ed = jo,
            id = Q_,
            sd = J_,
            nd = K_,
            rd = {
                _tr_init: td,
                _tr_stored_block: ed,
                _tr_flush_block: id,
                _tr_tally: sd,
                _tr_align: nd
            },
            Zo = (r, u, _, E) => {
                let l = r & 65535 | 0,
                    P = r >>> 16 & 65535 | 0,
                    m = 0;
                for (; _ !== 0;) {
                    m = _ > 2e3 ? 2e3 : _, _ -= m;
                    do l = l + u[E++] | 0, P = P + l | 0; while (--m);
                    l %= 65521, P %= 65521
                }
                return l | P << 16 | 0
            };
        const ad = () => {
                let r, u = [];
                for (var _ = 0; _ < 256; _++) {
                    r = _;
                    for (var E = 0; E < 8; E++) r = r & 1 ? 3988292384 ^ r >>> 1 : r >>> 1;
                    u[_] = r
                }
                return u
            },
            od = new Uint32Array(ad());
        var ne = (r, u, _, E) => {
                const l = od,
                    P = E + _;
                r ^= -1;
                for (let m = E; m < P; m++) r = r >>> 8 ^ l[(r ^ u[m]) & 255];
                return r ^ -1
            },
            Os = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            },
            Ko = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            };
        const {
            _tr_init: cd,
            _tr_stored_block: ld,
            _tr_flush_block: ud,
            _tr_tally: re,
            _tr_align: hd
        } = rd, {
            Z_NO_FLUSH: Ne,
            Z_PARTIAL_FLUSH: _d,
            Z_FULL_FLUSH: dd,
            Z_FINISH: ae,
            Z_BLOCK: Qo,
            Z_OK: qt,
            Z_STREAM_END: Jo,
            Z_STREAM_ERROR: Nt,
            Z_DATA_ERROR: Ed,
            Z_BUF_ERROR: Qn,
            Z_DEFAULT_COMPRESSION: fd,
            Z_FILTERED: Td,
            Z_HUFFMAN_ONLY: Ds,
            Z_RLE: gd,
            Z_FIXED: Rd,
            Z_DEFAULT_STRATEGY: pd,
            Z_UNKNOWN: md,
            Z_DEFLATED: Ms
        } = Ko, Id = 9, Ad = 15, Pd = 8, Jn = 256 + 1 + 29, Sd = 30, Vd = 19, vd = 2 * Jn + 1, bd = 15, L = 3, oe = 258, xt = oe + L + 1, yd = 32, ks = 42, tr = 69, xs = 73, Ls = 91, Us = 103, Ce = 113, Li = 666, ct = 1, Ui = 2, Oe = 3, Qe = 4, wd = 3, ce = (r, u) => (r.msg = Os[u], u), tc = r => (r << 1) - (r > 4 ? 9 : 0), le = r => {
            let u = r.length;
            for (; --u >= 0;) r[u] = 0
        };
        let ue = (r, u, _) => (u << r.hash_shift ^ _) & r.hash_mask;
        const he = r => {
                const u = r.state;
                let _ = u.pending;
                _ > r.avail_out && (_ = r.avail_out), _ !== 0 && (r.output.set(u.pending_buf.subarray(u.pending_out, u.pending_out + _), r.next_out), r.next_out += _, u.pending_out += _, r.total_out += _, r.avail_out -= _, u.pending -= _, u.pending === 0 && (u.pending_out = 0))
            },
            ut = (r, u) => {
                ud(r, r.block_start >= 0 ? r.block_start : -1, r.strstart - r.block_start, u), r.block_start = r.strstart, he(r.strm)
            },
            H = (r, u) => {
                r.pending_buf[r.pending++] = u
            },
            zi = (r, u) => {
                r.pending_buf[r.pending++] = u >>> 8 & 255, r.pending_buf[r.pending++] = u & 255
            },
            Nd = (r, u, _, E) => {
                let l = r.avail_in;
                return l > E && (l = E), l === 0 ? 0 : (r.avail_in -= l, u.set(r.input.subarray(r.next_in, r.next_in + l), _), r.state.wrap === 1 ? r.adler = Zo(r.adler, u, l, _) : r.state.wrap === 2 && (r.adler = ne(r.adler, u, l, _)), r.next_in += l, r.total_in += l, l)
            },
            ec = (r, u) => {
                let _ = r.max_chain_length,
                    E = r.strstart,
                    l, P, m = r.prev_length,
                    V = r.nice_match;
                const U = r.strstart > r.w_size - xt ? r.strstart - (r.w_size - xt) : 0,
                    C = r.window,
                    Vt = r.w_mask,
                    _e = r.prev,
                    tt = r.strstart + oe;
                let Me = C[E + m - 1],
                    ti = C[E + m];
                r.prev_length >= r.good_match && (_ >>= 2), V > r.lookahead && (V = r.lookahead);
                do
                    if (l = u, !(C[l + m] !== ti || C[l + m - 1] !== Me || C[l] !== C[E] || C[++l] !== C[E + 1])) {
                        E += 2, l++;
                        do; while (C[++E] === C[++l] && C[++E] === C[++l] && C[++E] === C[++l] && C[++E] === C[++l] && C[++E] === C[++l] && C[++E] === C[++l] && C[++E] === C[++l] && C[++E] === C[++l] && E < tt);
                        if (P = oe - (tt - E), E = tt - oe, P > m) {
                            if (r.match_start = u, m = P, P >= V) break;
                            Me = C[E + m - 1], ti = C[E + m]
                        }
                    }
                while ((u = _e[u & Vt]) > U && --_ !== 0);
                return m <= r.lookahead ? m : r.lookahead
            },
            De = r => {
                const u = r.w_size;
                let _, E, l, P, m;
                do {
                    if (P = r.window_size - r.lookahead - r.strstart, r.strstart >= u + (u - xt)) {
                        r.window.set(r.window.subarray(u, u + u), 0), r.match_start -= u, r.strstart -= u, r.block_start -= u, E = r.hash_size, _ = E;
                        do l = r.head[--_], r.head[_] = l >= u ? l - u : 0; while (--E);
                        E = u, _ = E;
                        do l = r.prev[--_], r.prev[_] = l >= u ? l - u : 0; while (--E);
                        P += u
                    }
                    if (r.strm.avail_in === 0) break;
                    if (E = Nd(r.strm, r.window, r.strstart + r.lookahead, P), r.lookahead += E, r.lookahead + r.insert >= L)
                        for (m = r.strstart - r.insert, r.ins_h = r.window[m], r.ins_h = ue(r, r.ins_h, r.window[m + 1]); r.insert && (r.ins_h = ue(r, r.ins_h, r.window[m + L - 1]), r.prev[m & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = m, m++, r.insert--, !(r.lookahead + r.insert < L)););
                } while (r.lookahead < xt && r.strm.avail_in !== 0)
            },
            Cd = (r, u) => {
                let _ = 65535;
                for (_ > r.pending_buf_size - 5 && (_ = r.pending_buf_size - 5);;) {
                    if (r.lookahead <= 1) {
                        if (De(r), r.lookahead === 0 && u === Ne) return ct;
                        if (r.lookahead === 0) break
                    }
                    r.strstart += r.lookahead, r.lookahead = 0;
                    const E = r.block_start + _;
                    if ((r.strstart === 0 || r.strstart >= E) && (r.lookahead = r.strstart - E, r.strstart = E, ut(r, !1), r.strm.avail_out === 0) || r.strstart - r.block_start >= r.w_size - xt && (ut(r, !1), r.strm.avail_out === 0)) return ct
                }
                return r.insert = 0, u === ae ? (ut(r, !0), r.strm.avail_out === 0 ? Oe : Qe) : (r.strstart > r.block_start && (ut(r, !1), r.strm.avail_out === 0), ct)
            },
            er = (r, u) => {
                let _, E;
                for (;;) {
                    if (r.lookahead < xt) {
                        if (De(r), r.lookahead < xt && u === Ne) return ct;
                        if (r.lookahead === 0) break
                    }
                    if (_ = 0, r.lookahead >= L && (r.ins_h = ue(r, r.ins_h, r.window[r.strstart + L - 1]), _ = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), _ !== 0 && r.strstart - _ <= r.w_size - xt && (r.match_length = ec(r, _)), r.match_length >= L)
                        if (E = re(r, r.strstart - r.match_start, r.match_length - L), r.lookahead -= r.match_length, r.match_length <= r.max_lazy_match && r.lookahead >= L) {
                            r.match_length--;
                            do r.strstart++, r.ins_h = ue(r, r.ins_h, r.window[r.strstart + L - 1]), _ = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart; while (--r.match_length !== 0);
                            r.strstart++
                        } else r.strstart += r.match_length, r.match_length = 0, r.ins_h = r.window[r.strstart], r.ins_h = ue(r, r.ins_h, r.window[r.strstart + 1]);
                    else E = re(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++;
                    if (E && (ut(r, !1), r.strm.avail_out === 0)) return ct
                }
                return r.insert = r.strstart < L - 1 ? r.strstart : L - 1, u === ae ? (ut(r, !0), r.strm.avail_out === 0 ? Oe : Qe) : r.last_lit && (ut(r, !1), r.strm.avail_out === 0) ? ct : Ui
            },
            Je = (r, u) => {
                let _, E, l;
                for (;;) {
                    if (r.lookahead < xt) {
                        if (De(r), r.lookahead < xt && u === Ne) return ct;
                        if (r.lookahead === 0) break
                    }
                    if (_ = 0, r.lookahead >= L && (r.ins_h = ue(r, r.ins_h, r.window[r.strstart + L - 1]), _ = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart), r.prev_length = r.match_length, r.prev_match = r.match_start, r.match_length = L - 1, _ !== 0 && r.prev_length < r.max_lazy_match && r.strstart - _ <= r.w_size - xt && (r.match_length = ec(r, _), r.match_length <= 5 && (r.strategy === Td || r.match_length === L && r.strstart - r.match_start > 4096) && (r.match_length = L - 1)), r.prev_length >= L && r.match_length <= r.prev_length) {
                        l = r.strstart + r.lookahead - L, E = re(r, r.strstart - 1 - r.prev_match, r.prev_length - L), r.lookahead -= r.prev_length - 1, r.prev_length -= 2;
                        do ++r.strstart <= l && (r.ins_h = ue(r, r.ins_h, r.window[r.strstart + L - 1]), _ = r.prev[r.strstart & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = r.strstart); while (--r.prev_length !== 0);
                        if (r.match_available = 0, r.match_length = L - 1, r.strstart++, E && (ut(r, !1), r.strm.avail_out === 0)) return ct
                    } else if (r.match_available) {
                        if (E = re(r, 0, r.window[r.strstart - 1]), E && ut(r, !1), r.strstart++, r.lookahead--, r.strm.avail_out === 0) return ct
                    } else r.match_available = 1, r.strstart++, r.lookahead--
                }
                return r.match_available && (E = re(r, 0, r.window[r.strstart - 1]), r.match_available = 0), r.insert = r.strstart < L - 1 ? r.strstart : L - 1, u === ae ? (ut(r, !0), r.strm.avail_out === 0 ? Oe : Qe) : r.last_lit && (ut(r, !1), r.strm.avail_out === 0) ? ct : Ui
            },
            Od = (r, u) => {
                let _, E, l, P;
                const m = r.window;
                for (;;) {
                    if (r.lookahead <= oe) {
                        if (De(r), r.lookahead <= oe && u === Ne) return ct;
                        if (r.lookahead === 0) break
                    }
                    if (r.match_length = 0, r.lookahead >= L && r.strstart > 0 && (l = r.strstart - 1, E = m[l], E === m[++l] && E === m[++l] && E === m[++l])) {
                        P = r.strstart + oe;
                        do; while (E === m[++l] && E === m[++l] && E === m[++l] && E === m[++l] && E === m[++l] && E === m[++l] && E === m[++l] && E === m[++l] && l < P);
                        r.match_length = oe - (P - l), r.match_length > r.lookahead && (r.match_length = r.lookahead)
                    }
                    if (r.match_length >= L ? (_ = re(r, 1, r.match_length - L), r.lookahead -= r.match_length, r.strstart += r.match_length, r.match_length = 0) : (_ = re(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++), _ && (ut(r, !1), r.strm.avail_out === 0)) return ct
                }
                return r.insert = 0, u === ae ? (ut(r, !0), r.strm.avail_out === 0 ? Oe : Qe) : r.last_lit && (ut(r, !1), r.strm.avail_out === 0) ? ct : Ui
            },
            Dd = (r, u) => {
                let _;
                for (;;) {
                    if (r.lookahead === 0 && (De(r), r.lookahead === 0)) {
                        if (u === Ne) return ct;
                        break
                    }
                    if (r.match_length = 0, _ = re(r, 0, r.window[r.strstart]), r.lookahead--, r.strstart++, _ && (ut(r, !1), r.strm.avail_out === 0)) return ct
                }
                return r.insert = 0, u === ae ? (ut(r, !0), r.strm.avail_out === 0 ? Oe : Qe) : r.last_lit && (ut(r, !1), r.strm.avail_out === 0) ? ct : Ui
            };

        function Gt(r, u, _, E, l) {
            this.good_length = r, this.max_lazy = u, this.nice_length = _, this.max_chain = E, this.func = l
        }
        const $i = [new Gt(0, 0, 0, 0, Cd), new Gt(4, 4, 8, 4, er), new Gt(4, 5, 16, 8, er), new Gt(4, 6, 32, 32, er), new Gt(4, 4, 16, 16, Je), new Gt(8, 16, 32, 32, Je), new Gt(8, 16, 128, 128, Je), new Gt(8, 32, 128, 256, Je), new Gt(32, 128, 258, 1024, Je), new Gt(32, 258, 258, 4096, Je)],
            Md = r => {
                r.window_size = 2 * r.w_size, le(r.head), r.max_lazy_match = $i[r.level].max_lazy, r.good_match = $i[r.level].good_length, r.nice_match = $i[r.level].nice_length, r.max_chain_length = $i[r.level].max_chain, r.strstart = 0, r.block_start = 0, r.lookahead = 0, r.insert = 0, r.match_length = r.prev_length = L - 1, r.match_available = 0, r.ins_h = 0
            };

        function kd() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Ms, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(vd * 2), this.dyn_dtree = new Uint16Array((2 * Sd + 1) * 2), this.bl_tree = new Uint16Array((2 * Vd + 1) * 2), le(this.dyn_ltree), le(this.dyn_dtree), le(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(bd + 1), this.heap = new Uint16Array(2 * Jn + 1), le(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * Jn + 1), le(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
        }
        const ic = r => {
                if (!r || !r.state) return ce(r, Nt);
                r.total_in = r.total_out = 0, r.data_type = md;
                const u = r.state;
                return u.pending = 0, u.pending_out = 0, u.wrap < 0 && (u.wrap = -u.wrap), u.status = u.wrap ? ks : Ce, r.adler = u.wrap === 2 ? 0 : 1, u.last_flush = Ne, cd(u), qt
            },
            sc = r => {
                const u = ic(r);
                return u === qt && Md(r.state), u
            },
            xd = (r, u) => !r || !r.state || r.state.wrap !== 2 ? Nt : (r.state.gzhead = u, qt),
            nc = (r, u, _, E, l, P) => {
                if (!r) return Nt;
                let m = 1;
                if (u === fd && (u = 6), E < 0 ? (m = 0, E = -E) : E > 15 && (m = 2, E -= 16), l < 1 || l > Id || _ !== Ms || E < 8 || E > 15 || u < 0 || u > 9 || P < 0 || P > Rd) return ce(r, Nt);
                E === 8 && (E = 9);
                const V = new kd;
                return r.state = V, V.strm = r, V.wrap = m, V.gzhead = null, V.w_bits = E, V.w_size = 1 << V.w_bits, V.w_mask = V.w_size - 1, V.hash_bits = l + 7, V.hash_size = 1 << V.hash_bits, V.hash_mask = V.hash_size - 1, V.hash_shift = ~~((V.hash_bits + L - 1) / L), V.window = new Uint8Array(V.w_size * 2), V.head = new Uint16Array(V.hash_size), V.prev = new Uint16Array(V.w_size), V.lit_bufsize = 1 << l + 6, V.pending_buf_size = V.lit_bufsize * 4, V.pending_buf = new Uint8Array(V.pending_buf_size), V.d_buf = 1 * V.lit_bufsize, V.l_buf = 3 * V.lit_bufsize, V.level = u, V.strategy = P, V.method = _, sc(r)
            },
            Ld = (r, u) => nc(r, u, Ms, Ad, Pd, pd),
            Ud = (r, u) => {
                let _, E;
                if (!r || !r.state || u > Qo || u < 0) return r ? ce(r, Nt) : Nt;
                const l = r.state;
                if (!r.output || !r.input && r.avail_in !== 0 || l.status === Li && u !== ae) return ce(r, r.avail_out === 0 ? Qn : Nt);
                l.strm = r;
                const P = l.last_flush;
                if (l.last_flush = u, l.status === ks)
                    if (l.wrap === 2) r.adler = 0, H(l, 31), H(l, 139), H(l, 8), l.gzhead ? (H(l, (l.gzhead.text ? 1 : 0) + (l.gzhead.hcrc ? 2 : 0) + (l.gzhead.extra ? 4 : 0) + (l.gzhead.name ? 8 : 0) + (l.gzhead.comment ? 16 : 0)), H(l, l.gzhead.time & 255), H(l, l.gzhead.time >> 8 & 255), H(l, l.gzhead.time >> 16 & 255), H(l, l.gzhead.time >> 24 & 255), H(l, l.level === 9 ? 2 : l.strategy >= Ds || l.level < 2 ? 4 : 0), H(l, l.gzhead.os & 255), l.gzhead.extra && l.gzhead.extra.length && (H(l, l.gzhead.extra.length & 255), H(l, l.gzhead.extra.length >> 8 & 255)), l.gzhead.hcrc && (r.adler = ne(r.adler, l.pending_buf, l.pending, 0)), l.gzindex = 0, l.status = tr) : (H(l, 0), H(l, 0), H(l, 0), H(l, 0), H(l, 0), H(l, l.level === 9 ? 2 : l.strategy >= Ds || l.level < 2 ? 4 : 0), H(l, wd), l.status = Ce);
                    else {
                        let m = Ms + (l.w_bits - 8 << 4) << 8,
                            V = -1;
                        l.strategy >= Ds || l.level < 2 ? V = 0 : l.level < 6 ? V = 1 : l.level === 6 ? V = 2 : V = 3, m |= V << 6, l.strstart !== 0 && (m |= yd), m += 31 - m % 31, l.status = Ce, zi(l, m), l.strstart !== 0 && (zi(l, r.adler >>> 16), zi(l, r.adler & 65535)), r.adler = 1
                    }
                if (l.status === tr)
                    if (l.gzhead.extra) {
                        for (_ = l.pending; l.gzindex < (l.gzhead.extra.length & 65535) && !(l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > _ && (r.adler = ne(r.adler, l.pending_buf, l.pending - _, _)), he(r), _ = l.pending, l.pending === l.pending_buf_size));) H(l, l.gzhead.extra[l.gzindex] & 255), l.gzindex++;
                        l.gzhead.hcrc && l.pending > _ && (r.adler = ne(r.adler, l.pending_buf, l.pending - _, _)), l.gzindex === l.gzhead.extra.length && (l.gzindex = 0, l.status = xs)
                    } else l.status = xs;
                if (l.status === xs)
                    if (l.gzhead.name) {
                        _ = l.pending;
                        do {
                            if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > _ && (r.adler = ne(r.adler, l.pending_buf, l.pending - _, _)), he(r), _ = l.pending, l.pending === l.pending_buf_size)) {
                                E = 1;
                                break
                            }
                            l.gzindex < l.gzhead.name.length ? E = l.gzhead.name.charCodeAt(l.gzindex++) & 255 : E = 0, H(l, E)
                        } while (E !== 0);
                        l.gzhead.hcrc && l.pending > _ && (r.adler = ne(r.adler, l.pending_buf, l.pending - _, _)), E === 0 && (l.gzindex = 0, l.status = Ls)
                    } else l.status = Ls;
                if (l.status === Ls)
                    if (l.gzhead.comment) {
                        _ = l.pending;
                        do {
                            if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > _ && (r.adler = ne(r.adler, l.pending_buf, l.pending - _, _)), he(r), _ = l.pending, l.pending === l.pending_buf_size)) {
                                E = 1;
                                break
                            }
                            l.gzindex < l.gzhead.comment.length ? E = l.gzhead.comment.charCodeAt(l.gzindex++) & 255 : E = 0, H(l, E)
                        } while (E !== 0);
                        l.gzhead.hcrc && l.pending > _ && (r.adler = ne(r.adler, l.pending_buf, l.pending - _, _)), E === 0 && (l.status = Us)
                    } else l.status = Us;
                if (l.status === Us && (l.gzhead.hcrc ? (l.pending + 2 > l.pending_buf_size && he(r), l.pending + 2 <= l.pending_buf_size && (H(l, r.adler & 255), H(l, r.adler >> 8 & 255), r.adler = 0, l.status = Ce)) : l.status = Ce), l.pending !== 0) {
                    if (he(r), r.avail_out === 0) return l.last_flush = -1, qt
                } else if (r.avail_in === 0 && tc(u) <= tc(P) && u !== ae) return ce(r, Qn);
                if (l.status === Li && r.avail_in !== 0) return ce(r, Qn);
                if (r.avail_in !== 0 || l.lookahead !== 0 || u !== Ne && l.status !== Li) {
                    let m = l.strategy === Ds ? Dd(l, u) : l.strategy === gd ? Od(l, u) : $i[l.level].func(l, u);
                    if ((m === Oe || m === Qe) && (l.status = Li), m === ct || m === Oe) return r.avail_out === 0 && (l.last_flush = -1), qt;
                    if (m === Ui && (u === _d ? hd(l) : u !== Qo && (ld(l, 0, 0, !1), u === dd && (le(l.head), l.lookahead === 0 && (l.strstart = 0, l.block_start = 0, l.insert = 0))), he(r), r.avail_out === 0)) return l.last_flush = -1, qt
                }
                return u !== ae ? qt : l.wrap <= 0 ? Jo : (l.wrap === 2 ? (H(l, r.adler & 255), H(l, r.adler >> 8 & 255), H(l, r.adler >> 16 & 255), H(l, r.adler >> 24 & 255), H(l, r.total_in & 255), H(l, r.total_in >> 8 & 255), H(l, r.total_in >> 16 & 255), H(l, r.total_in >> 24 & 255)) : (zi(l, r.adler >>> 16), zi(l, r.adler & 65535)), he(r), l.wrap > 0 && (l.wrap = -l.wrap), l.pending !== 0 ? qt : Jo)
            },
            zd = r => {
                if (!r || !r.state) return Nt;
                const u = r.state.status;
                return u !== ks && u !== tr && u !== xs && u !== Ls && u !== Us && u !== Ce && u !== Li ? ce(r, Nt) : (r.state = null, u === Ce ? ce(r, Ed) : qt)
            },
            $d = (r, u) => {
                let _ = u.length;
                if (!r || !r.state) return Nt;
                const E = r.state,
                    l = E.wrap;
                if (l === 2 || l === 1 && E.status !== ks || E.lookahead) return Nt;
                if (l === 1 && (r.adler = Zo(r.adler, u, _, 0)), E.wrap = 0, _ >= E.w_size) {
                    l === 0 && (le(E.head), E.strstart = 0, E.block_start = 0, E.insert = 0);
                    let U = new Uint8Array(E.w_size);
                    U.set(u.subarray(_ - E.w_size, _), 0), u = U, _ = E.w_size
                }
                const P = r.avail_in,
                    m = r.next_in,
                    V = r.input;
                for (r.avail_in = _, r.next_in = 0, r.input = u, De(E); E.lookahead >= L;) {
                    let U = E.strstart,
                        C = E.lookahead - (L - 1);
                    do E.ins_h = ue(E, E.ins_h, E.window[U + L - 1]), E.prev[U & E.w_mask] = E.head[E.ins_h], E.head[E.ins_h] = U, U++; while (--C);
                    E.strstart = U, E.lookahead = L - 1, De(E)
                }
                return E.strstart += E.lookahead, E.block_start = E.strstart, E.insert = E.lookahead, E.lookahead = 0, E.match_length = E.prev_length = L - 1, E.match_available = 0, r.next_in = m, r.input = V, r.avail_in = P, E.wrap = l, qt
            };
        var Fd = Ld,
            Hd = nc,
            qd = sc,
            Gd = ic,
            Bd = xd,
            Yd = Ud,
            Wd = zd,
            Xd = $d,
            jd = "pako deflate (from Nodeca project)",
            Fi = {
                deflateInit: Fd,
                deflateInit2: Hd,
                deflateReset: qd,
                deflateResetKeep: Gd,
                deflateSetHeader: Bd,
                deflate: Yd,
                deflateEnd: Wd,
                deflateSetDictionary: Xd,
                deflateInfo: jd
            };
        const Zd = (r, u) => Object.prototype.hasOwnProperty.call(r, u);
        var Kd = function(r) {
                const u = Array.prototype.slice.call(arguments, 1);
                for (; u.length;) {
                    const _ = u.shift();
                    if (_) {
                        if (typeof _ != "object") throw new TypeError(_ + "must be non-object");
                        for (const E in _) Zd(_, E) && (r[E] = _[E])
                    }
                }
                return r
            },
            Qd = r => {
                let u = 0;
                for (let E = 0, l = r.length; E < l; E++) u += r[E].length;
                const _ = new Uint8Array(u);
                for (let E = 0, l = 0, P = r.length; E < P; E++) {
                    let m = r[E];
                    _.set(m, l), l += m.length
                }
                return _
            },
            rc = {
                assign: Kd,
                flattenChunks: Qd
            };
        let ac = !0;
        try {
            String.fromCharCode.apply(null, new Uint8Array(1))
        } catch {
            ac = !1
        }
        const Hi = new Uint8Array(256);
        for (let r = 0; r < 256; r++) Hi[r] = r >= 252 ? 6 : r >= 248 ? 5 : r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
        Hi[254] = Hi[254] = 1;
        var Jd = r => {
            if (typeof TextEncoder == "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(r);
            let u, _, E, l, P, m = r.length,
                V = 0;
            for (l = 0; l < m; l++) _ = r.charCodeAt(l), (_ & 64512) === 55296 && l + 1 < m && (E = r.charCodeAt(l + 1), (E & 64512) === 56320 && (_ = 65536 + (_ - 55296 << 10) + (E - 56320), l++)), V += _ < 128 ? 1 : _ < 2048 ? 2 : _ < 65536 ? 3 : 4;
            for (u = new Uint8Array(V), P = 0, l = 0; P < V; l++) _ = r.charCodeAt(l), (_ & 64512) === 55296 && l + 1 < m && (E = r.charCodeAt(l + 1), (E & 64512) === 56320 && (_ = 65536 + (_ - 55296 << 10) + (E - 56320), l++)), _ < 128 ? u[P++] = _ : _ < 2048 ? (u[P++] = 192 | _ >>> 6, u[P++] = 128 | _ & 63) : _ < 65536 ? (u[P++] = 224 | _ >>> 12, u[P++] = 128 | _ >>> 6 & 63, u[P++] = 128 | _ & 63) : (u[P++] = 240 | _ >>> 18, u[P++] = 128 | _ >>> 12 & 63, u[P++] = 128 | _ >>> 6 & 63, u[P++] = 128 | _ & 63);
            return u
        };
        const oc = (r, u = r.length) => {
            if (u < 65534 && r.subarray && ac) return String.fromCharCode.apply(null, r.length === u ? r : r.subarray(0, u));
            let _ = "";
            for (let E = 0; E < u; E++) _ += String.fromCharCode(r[E]);
            return _
        };
        var tE = (r, u) => {
                const _ = u || r.length;
                if (typeof TextDecoder == "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(r.subarray(0, u));
                let E, l;
                const P = new Array(_ * 2);
                for (l = 0, E = 0; E < _;) {
                    let m = r[E++];
                    if (m < 128) {
                        P[l++] = m;
                        continue
                    }
                    let V = Hi[m];
                    if (V > 4) {
                        P[l++] = 65533, E += V - 1;
                        continue
                    }
                    for (m &= V === 2 ? 31 : V === 3 ? 15 : 7; V > 1 && E < _;) m = m << 6 | r[E++] & 63, V--;
                    if (V > 1) {
                        P[l++] = 65533;
                        continue
                    }
                    m < 65536 ? P[l++] = m : (m -= 65536, P[l++] = 55296 | m >> 10 & 1023, P[l++] = 56320 | m & 1023)
                }
                return oc(P, l)
            },
            eE = (r, u) => {
                u = u || r.length, u > r.length && (u = r.length);
                let _ = u - 1;
                for (; _ >= 0 && (r[_] & 192) === 128;) _--;
                return _ < 0 || _ === 0 ? u : _ + Hi[r[_]] > u ? _ : u
            },
            cc = {
                string2buf: Jd,
                buf2string: tE,
                utf8border: eE
            };

        function iE() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
        }
        var sE = iE;
        const lc = Object.prototype.toString,
            {
                Z_NO_FLUSH: nE,
                Z_SYNC_FLUSH: rE,
                Z_FULL_FLUSH: aE,
                Z_FINISH: oE,
                Z_OK: zs,
                Z_STREAM_END: cE,
                Z_DEFAULT_COMPRESSION: lE,
                Z_DEFAULT_STRATEGY: uE,
                Z_DEFLATED: hE
            } = Ko;

        function $s(r) {
            this.options = rc.assign({
                level: lE,
                method: hE,
                chunkSize: 16384,
                windowBits: 15,
                memLevel: 8,
                strategy: uE
            }, r || {});
            let u = this.options;
            u.raw && u.windowBits > 0 ? u.windowBits = -u.windowBits : u.gzip && u.windowBits > 0 && u.windowBits < 16 && (u.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new sE, this.strm.avail_out = 0;
            let _ = Fi.deflateInit2(this.strm, u.level, u.method, u.windowBits, u.memLevel, u.strategy);
            if (_ !== zs) throw new Error(Os[_]);
            if (u.header && Fi.deflateSetHeader(this.strm, u.header), u.dictionary) {
                let E;
                if (typeof u.dictionary == "string" ? E = cc.string2buf(u.dictionary) : lc.call(u.dictionary) === "[object ArrayBuffer]" ? E = new Uint8Array(u.dictionary) : E = u.dictionary, _ = Fi.deflateSetDictionary(this.strm, E), _ !== zs) throw new Error(Os[_]);
                this._dict_set = !0
            }
        }
        $s.prototype.push = function(r, u) {
            const _ = this.strm,
                E = this.options.chunkSize;
            let l, P;
            if (this.ended) return !1;
            for (u === ~~u ? P = u : P = u === !0 ? oE : nE, typeof r == "string" ? _.input = cc.string2buf(r) : lc.call(r) === "[object ArrayBuffer]" ? _.input = new Uint8Array(r) : _.input = r, _.next_in = 0, _.avail_in = _.input.length;;) {
                if (_.avail_out === 0 && (_.output = new Uint8Array(E), _.next_out = 0, _.avail_out = E), (P === rE || P === aE) && _.avail_out <= 6) {
                    this.onData(_.output.subarray(0, _.next_out)), _.avail_out = 0;
                    continue
                }
                if (l = Fi.deflate(_, P), l === cE) return _.next_out > 0 && this.onData(_.output.subarray(0, _.next_out)), l = Fi.deflateEnd(this.strm), this.onEnd(l), this.ended = !0, l === zs;
                if (_.avail_out === 0) {
                    this.onData(_.output);
                    continue
                }
                if (P > 0 && _.next_out > 0) {
                    this.onData(_.output.subarray(0, _.next_out)), _.avail_out = 0;
                    continue
                }
                if (_.avail_in === 0) break
            }
            return !0
        }, $s.prototype.onData = function(r) {
            this.chunks.push(r)
        }, $s.prototype.onEnd = function(r) {
            r === zs && (this.result = rc.flattenChunks(this.chunks)), this.chunks = [], this.err = r, this.msg = this.strm.msg
        };

        function _E(r, u) {
            u = u || {};
            const _ = new $s(u);
            if (_.push(r, !0), _.err) throw _.msg || Os[_.err];
            return _.result
        }

        function dE(r, u) {
            return u = u || {}, u.gzip = !0, _E(r, u)
        }
        return (r, u, _) => {
            let E = dE(r);
            return u === "base64" ? E = btoa(oc(E)) : E = E.buffer, _ && _(E), E
        }
    }
    const Dh = (() => {
        class i extends Ye {
            constructor(t) {
                super(t), this.algorithm = ps.GZIP, this._PRIVATE_pakoCompressor = ja(), this._PRIVATE_compressPako = (n, a, o) => {
                    const c = this._PRIVATE_pakoCompressor(n, a);
                    o(c)
                }, this.compress = Za(), typeof CompressionStream != "undefined" || (this.compress = this._PRIVATE_compressPako, this.getCompressorSourceCode = () => ja.toString())
            }
            compressSync(t, s) {
                return this._PRIVATE_pakoCompressor(t, s)
            }
            getCompressorSourceCode() {
                return Za.toString()
            }
        }
        return i
    })();

    function Za() {
        const i = e => new Promise(t => {
            const s = new FileReader;
            s.onload = n => t(n.target.result.split(",")[1]), s.readAsDataURL(new Blob([e]))
        });
        return (e, t, s) => {
            const n = new Response(e).body.pipeThrough(new CompressionStream("gzip")),
                a = new Response(n).arrayBuffer();
            if (t === "base64") {
                a.then(o => i(o)).then(o => s(o));
                return
            }
            a.then(o => s(o))
        }
    }
    const Mh = (() => {
            class i extends Ye {
                constructor() {
                    super(...arguments), this.algorithm = ps.UNCOMPRESSED, this.compress = (t, s, n) => {
                        n(this.compressSync(t, s))
                    }
                }
                compressSync(t, s) {
                    return t
                }
                getCompressorSourceCode() {
                    return function() {
                        return (t, s, n) => n(t)
                    }.toString()
                }
            }
            return i
        })(),
        kh = (() => {
            class i {
                static async create(t, s) {
                    return await s.isDebugFlagEnabled(Oh.COMPRESSION_DISABLED) ? new Mh(t) : new Dh(t)
                }
            }
            return i
        })(),
        xh = 2e4,
        Lh = (() => {
            class i {
                constructor(t) {
                    var s, n;
                    this._PRIVATE_queryParams = {}, this._PRIVATE_headers = {}, this._PRIVATE_handleRecoveredRequests = a => {
                        for (const o of a) {
                            const {
                                metadata: c,
                                events: h
                            } = o;
                            this.send(h, c)
                        }
                    }, this._PRIVATE_endpoint = t.endpoint, this._PRIVATE_compressionOpts = t.compressionOpts, this._PRIVATE_recoveryStorage = t.recoveryStorage, this.mandatoryParameters = (s = t.mandatoryParameters) !== null && s !== void 0 ? s : [], this.worker = !!t.worker, this._PRIVATE_disableRequestCounting = (n = t.disableRequestCounting) !== null && n !== void 0 ? n : !1, this._PRIVATE_recoveryStorage && this._PRIVATE_recoveryStorage.recover(this._PRIVATE_handleRecoveredRequests)
                }
                setQueryParams(t) {
                    Object.keys(t).forEach(s => {
                        this._PRIVATE_queryParams[s] = t[s]
                    })
                }
                removeQueryParams(t) {
                    t ? t.forEach(s => {
                        delete this._PRIVATE_queryParams[s]
                    }) : this._PRIVATE_queryParams = {}
                }
                send(t, s) {
                    const n = s || { ...this._PRIVATE_queryParams
                        },
                        a = !("ct" in n),
                        o = typeof t != "string" && !this._PRIVATE_isArrayBuffer(t);
                    "ct" in n || (!this._PRIVATE_compressionOpts || !a ? n.ct = ps.UNCOMPRESSED : n.ct = this._PRIVATE_compressionOpts.compressionType);
                    const c = o ? Lt.stringify(t) : t,
                        h = I(Object.keys(n), Jt(f => `${encodeURIComponent(f)}=${encodeURIComponent(n[f])}`)).join("&"),
                        d = `${this._PRIVATE_endpoint}?${h}`;
                    if (Zs(this.mandatoryParameters, f => n[f] == null)) {
                        ft.warn(`[${this.worker?"WORKER":"MAIN"}] All mandatory parameters are not present on ${d}`);
                        return
                    }
                    this._PRIVATE_compressionOpts && a && typeof c == "string" ? this._PRIVATE_compressionOpts.compressor(c, this._PRIVATE_compressionOpts.compressionOutputType, f => this._PRIVATE_doSend(d, n, f)) : this._PRIVATE_doSend(d, n, c)
                }
                onLoad(t) {
                    this._PRIVATE_onLoadCallback = t
                }
                onError(t) {
                    this._PRIVATE_onErrorCallback = t
                }
                onTimeout(t, s) {
                    this._PRIVATE_onTimeoutCallback = t, this._PRIVATE_timeout = s
                }
                abort() {
                    this._PRIVATE_abortCurrentXhrCall && this._PRIVATE_abortCurrentXhrCall()
                }
                setRequestHeader(t, s) {
                    this._PRIVATE_headers[t] = s
                }
                getQueryParams() {
                    return this._PRIVATE_queryParams
                }
                _PRIVATE_isArrayBuffer(t) {
                    return t && t.byteLength !== void 0
                }
                _PRIVATE_doSend(t, s, n) {
                    const a = new XMLHttpRequest,
                        o = I(Object.keys(s), Jt(c => `${encodeURIComponent(c)}=${encodeURIComponent(s[c])}`)).join("&");
                    a.open("POST", t), a.onload = () => {
                        if (this._PRIVATE_recoveryStorage && this._PRIVATE_recoveryStorage.recover(this._PRIVATE_handleRecoveredRequests), this._PRIVATE_onLoadCallback) {
                            const c = {
                                params: s,
                                responseText: a.responseText,
                                status: a.status
                            };
                            this._PRIVATE_onLoadCallback(c)
                        }
                        this._PRIVATE_disableRequestCounting || nt.counters.requestCounts.count(this._PRIVATE_endpoint)
                    }, a.onerror = () => {
                        this._PRIVATE_recoveryStorage && this._PRIVATE_recoveryStorage.save({
                            key: o,
                            metadata: s,
                            events: n
                        }), this._PRIVATE_disableRequestCounting || nt.counters.requestErrors.count(this._PRIVATE_endpoint), this._PRIVATE_onErrorCallback && this._PRIVATE_onErrorCallback({
                            params: s
                        })
                    }, a.timeout = this._PRIVATE_timeout || xh, a.ontimeout = () => {
                        this._PRIVATE_disableRequestCounting || nt.counters.requestTimeouts.count(this._PRIVATE_endpoint), this._PRIVATE_onTimeoutCallback && this._PRIVATE_onTimeoutCallback()
                    }, this._PRIVATE_abortCurrentXhrCall = () => a.abort(), Object.keys(this._PRIVATE_headers).forEach(c => {
                        a.setRequestHeader(c, this._PRIVATE_headers[c])
                    }), a.send(n)
                }
            }
            return i
        })(),
        We = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_stringCompressor = t
                }
                create(t, s, n, a) {
                    const o = s ? {
                        compressor: this._PRIVATE_stringCompressor.compress,
                        compressionOutputType: s,
                        compressionType: this._PRIVATE_stringCompressor.algorithm
                    } : void 0;
                    return new Lh({
                        endpoint: t,
                        compressionOpts: o,
                        recoveryStorage: n,
                        disableRequestCounting: a
                    })
                }
            }
            return i.$deps = [Ye], i
        })(),
        Xe = (() => {
            class i {
                constructor(...t) {
                    this._PRIVATE_requestParametersProviders = t
                }
                addProvider(t) {
                    this._PRIVATE_requestParametersProviders.push(t)
                }
                getRequestParameters() {
                    return Ka(this._PRIVATE_requestParametersProviders)
                }
            }
            return i
        })();
    async function Ka(i) {
        let e = {};
        for (const t of i) {
            const s = await t.getRequestParameters();
            e = { ...e,
                ...s
            }
        }
        return e
    }
    const Vi = (() => {
        let i;
        return function(e) {
            e.Artificial = "a", e.Renewal = "r", e.Natural = "n"
        }(i || (i = {})), i
    })();
    var Uh = {
        VERSION: "1.41.12"
    };
    const zh = "pageview",
        ms = (() => {
            class i {
                constructor(t, s, n, a, o, c, h, d) {
                    this._PRIVATE_lifeCycleEventsEmitter = t, this._PRIVATE_configuration = s, this._PRIVATE_visitorService = n, this._PRIVATE_sessionService = a, this._PRIVATE_urlService = o, this._PRIVATE_userConsentService = c, this.shopifyAnalyticsApi = h, this._PRIVATE_postRequestFactory = d, this._PRIVATE_shopifyPageViewedCallback = () => Promise.resolve(), this._PRIVATE_pageviewType = Vi.Natural, this._PRIVATE_isShopifyAnalyticsBound = !1
                }
                onInit() {
                    this._PRIVATE_parameterProviders = new Xe(this._PRIVATE_configuration, this._PRIVATE_visitorService, this._PRIVATE_sessionService, this._PRIVATE_urlService, this._PRIVATE_userConsentService), this._PRIVATE_postRequest = this._PRIVATE_postRequestFactory.create(`${this._PRIVATE_configuration.getTrackerUri()}/${zh}`, "base64")
                }
                onShopifyPageViewed(t) {
                    this._PRIVATE_shopifyPageViewedCallback = t, !this._PRIVATE_isShopifyAnalyticsBound && (this._PRIVATE_isShopifyAnalyticsBound = !0, this.shopifyAnalyticsApi.subscribe("page_viewed", async s => {
                        k.updateFromContext(s.context);
                        const n = k.isCurrentPageCheckout(),
                            a = s.seq > 1;
                        await this._PRIVATE_shopifyPageViewedCallback(n, a)
                    }))
                }
                async sendNaturalPageview() {
                    await this._PRIVATE_sendPageview(Vi.Natural)
                }
                async sendArtificialPageview() {
                    await this._PRIVATE_sendPageview(Vi.Artificial)
                }
                async sendPageviewRenewal() {
                    await this._PRIVATE_sendPageview(Vi.Renewal)
                }
                async _PRIVATE_sendPageview(t) {
                    this._PRIVATE_pageviewType = t, t !== Vi.Natural && await this._PRIVATE_lifeCycleEventsEmitter.emitPageviewEnd(), await this._PRIVATE_lifeCycleEventsEmitter.emitBeforePageView(), await this._PRIVATE_sendPageviewRequest(), await this._PRIVATE_lifeCycleEventsEmitter.emitAfterPageView(), await this._PRIVATE_lifeCycleEventsEmitter.emitPageviewReady()
                }
                async _PRIVATE_sendPageviewRequest() {
                    this._PRIVATE_postRequest.setQueryParams({ ...await this._PRIVATE_parameterProviders.getRequestParameters(),
                        pvt: this._PRIVATE_pageviewType,
                        ex: "",
                        la: k.language,
                        dr: k.documentReferrer,
                        dw: k.documentWidth.toString(),
                        dh: k.getDocumentHeight().toString(),
                        ww: k.windowWidth.toString(),
                        wh: k.windowHeight.toString(),
                        sw: k.screenWidth.toString(),
                        sh: k.screenHeight.toString(),
                        v: Uh.VERSION,
                        r: I(`${Math.random()}`, Gs(2, 8)),
                        ct: ps.UNCOMPRESSED
                    }), this._PRIVATE_postRequest.send("")
                }
            }
            return i.$deps = [yt, X, Ve, Mt, ve, Si, Ts, We], i
        })(),
        Is = (() => {
            class i {}
            return i
        })(),
        vi = (() => {
            class i {
                constructor() {
                    this._PRIVATE_listeners = []
                }
                addListener(t) {
                    this._PRIVATE_listeners.push(t)
                }
                emitPageviewStart() {
                    for (const t of this._PRIVATE_listeners) t.onPageviewStart()
                }
            }
            return i.$deps = [], i
        })(),
        $h = 60 * 1e3,
        Fh = 30 * 1e3,
        je = (() => {
            class i {
                constructor(t, s) {
                    this._PRIVATE_sessionService = t, this._PRIVATE_visitorService = s, this._PRIVATE_isRenewalOngoing = !1, this._PRIVATE_throttledRefreshSession = _i(() => this._PRIVATE_sessionService.refreshSession(), Fh)
                }
                onSessionExpired(t) {
                    this._PRIVATE_onSessionExpiredCallback = t
                }
                async isSessionValid() {
                    return this._PRIVATE_isRenewalOngoing ? !0 : !await this._PRIVATE_visitorService.isSessionRenewed() && this._PRIVATE_sessionService.hasValidSession()
                }
                async refreshSession() {
                    await this.isSessionValid() ? await this._PRIVATE_throttledRefreshSession() : this._PRIVATE_canRenewSession() && (this._PRIVATE_lastSessionRenewalTime = mt.now(), await this._PRIVATE_renewSession())
                }
                _PRIVATE_canRenewSession() {
                    return !q(this._PRIVATE_lastSessionRenewalTime) || mt.now() - this._PRIVATE_lastSessionRenewalTime > $h
                }
                async _PRIVATE_renewSession() {
                    const t = typeof this._PRIVATE_onSessionExpiredCallback;
                    if (t !== "function") {
                        const s = new Error().stack || "No stack trace available";
                        ft.warn(`[SessionRenewer] Cannot renew session: onSessionExpiredCallback is not a function | callbackType=${t} | lastSessionRenewalTime=${this._PRIVATE_lastSessionRenewalTime} | isRenewalOngoing=${this._PRIVATE_isRenewalOngoing} | callStack=${s}`);
                        return
                    }
                    this._PRIVATE_isRenewalOngoing = !0, await this._PRIVATE_onSessionExpiredCallback(), this._PRIVATE_isRenewalOngoing = !1
                }
            }
            return i.$deps = [Mt, Ve], i
        })(),
        dt = (() => {
            let i;
            return function(e) {
                e[e.ELEMENT_NODE = 1] = "ELEMENT_NODE", e[e.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", e[e.TEXT_NODE = 3] = "TEXT_NODE", e[e.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", e[e.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", e[e.ENTITY_NODE = 6] = "ENTITY_NODE", e[e.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", e[e.COMMENT_NODE = 8] = "COMMENT_NODE", e[e.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", e[e.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", e[e.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", e[e.NOTATION_NODE = 12] = "NOTATION_NODE"
            }(i || (i = {})), i
        })();

    function Hh(i) {
        return i.children !== void 0
    }

    function qh(i) {
        return i.nodeType !== void 0
    }

    function Qa(i) {
        return typeof structuredClone == "function" ? structuredClone(i) : Lt.parse(Lt.stringify(i))
    }
    const bi = (() => {
            class i {
                constructor(t) {
                    this.csId = t, this.props = {}, this.artificial = !1, this.anonymized = !1
                }
            }
            return i
        })(),
        Gh = (() => {
            class i extends bi {
                constructor(t) {
                    super(t.serializationId), this.nodeType = dt.COMMENT_NODE, this.data = t.textContent
                }
            }
            return i
        })(),
        As = (() => {
            class i extends bi {
                constructor(t, s) {
                    super(t.serializationId), this.nodeType = dt.DOCUMENT_NODE, this.children = s
                }
            }
            return i
        })(),
        Ja = (() => {
            class i extends bi {
                constructor(t) {
                    var s, n, a, o, c, h;
                    super(t.serializationId), this.nodeType = dt.DOCUMENT_TYPE_NODE, this.name = ((n = (s = t.attributes) === null || s === void 0 ? void 0 : s.name) === null || n === void 0 ? void 0 : n.toString()) || "", this.publicId = ((o = (a = t.attributes) === null || a === void 0 ? void 0 : a.publicId) === null || o === void 0 ? void 0 : o.toString()) || "", this.systemId = ((h = (c = t.attributes) === null || c === void 0 ? void 0 : c.systemId) === null || h === void 0 ? void 0 : h.toString()) || ""
                }
            }
            return i
        })(),
        to = (() => {
            class i {
                static shouldTrackInputValue(t, s) {
                    return t === "select" || t === "textarea" || t === "input" && (s === void 0 || s === "text" || s === "email" || s === "search" || s === "tel" || s === "url" || s === "password" || s === "number" || s === "checkbox" || s === "radio")
                }
            }
            return i
        })(),
        eo = (() => {
            class i {
                static anonymizeInputValue(t, s) {
                    const {
                        value: n,
                        type: a
                    } = s;
                    if ((t === "input" || t === "textarea") && q(n)) {
                        const o = a === "number" ? "0" : "•";
                        return I(String(n), Le(/\S/g, o))
                    }
                    return fe(n) ? String(n) : ""
                }
                static safeAnonymizeInputValue(t, s) {
                    const n = q(s.type) ? String(s.type) : void 0,
                        a = q(s.value) ? String(s.value) : "";
                    return to.shouldTrackInputValue(t, n) ? this.anonymizeInputValue(t, s) : a
                }
            }
            return i
        })(),
        Bh = (() => {
            class i {
                constructor(t, s, n) {
                    var a;
                    typeof t == "string" ? (this.name = t, this.value = s, this.namespaceURI = n != null ? n : "") : (this.name = t.name, this.value = t.value, this.namespaceURI = (a = t.namespaceURI) !== null && a !== void 0 ? a : ""), this.name === "srcset" && (this.value = I(this.value, Bs(","), Jt(o => {
                        const [c, h] = I(o, kc(), Bs(/\s+/)), d = c.startsWith("//") ? `${k.location.protocol}${c}` : new Pc(c, k.location.href).href;
                        return h ? `${d} ${h}` : d
                    })).join(", "))
                }
            }
            return i
        })(),
        io = (() => {
            class i extends bi {
                constructor(t) {
                    super(t.serializationId), this.nodeType = dt.TEXT_NODE, this.data = t.textContent
                }
            }
            return i
        })(),
        so = (() => {
            class i extends bi {
                constructor(t, s) {
                    var n, a;
                    super(t.serializationId), this.namespaceURI = "http://www.w3.org/1999/xhtml", this.children = [], this.attributes = [], this.nodeType = dt.ELEMENT_NODE, this.localName = ((n = t.tagName) === null || n === void 0 ? void 0 : n.toLowerCase()) || "", q((a = t.attributes) === null || a === void 0 ? void 0 : a.value) && (t.attributes.value = eo.safeAnonymizeInputValue(this.localName, t.attributes)), this.attributes = I(Object.entries(t.attributes || []), Jt(([o, c]) => new Bh(o, q(c) ? String(c) : ""))), (this.localName === "svg" || this.localName === "path" || this.localName === "use" || this.localName === "defs" || this.localName === "g" || this.localName === "circle" || this.localName === "rect" || this.localName === "line" || this.localName === "ellipse" || this.localName === "polygon" || this.localName === "symbol") && (this.namespaceURI = "http://www.w3.org/2000/svg"), this.localName === "style" && s.forEach(o => {
                        if (o.node.textContent && (o.node.textContent = nu(o.node.textContent, c => I(c, Le(/^\/\//, k.location.protocol + "//")))), o.node.nodeType === dt.TEXT_NODE) {
                            const c = new io(o.node);
                            I(this.children, it(c))
                        }
                    })
                }
            }
            return i
        })();

    function no(i) {
        return i instanceof so || i instanceof As
    }

    function ro(i) {
        let e = null;
        if (Hh(i)) {
            const t = i.node,
                s = i.children;
            switch (t.nodeType) {
                case dt.ELEMENT_NODE:
                    e = new so(t, s);
                    break;
                case dt.TEXT_NODE:
                    e = new io(t);
                    break;
                case dt.COMMENT_NODE:
                    e = new Gh(t);
                    break;
                case dt.DOCUMENT_NODE:
                    e = new As(t, s);
                    break;
                case dt.DOCUMENT_TYPE_NODE:
                    e = new Ja(t);
                    break;
                default:
                    console.log("Node type not supported: " + i.node.nodeType, i.node)
            }
        } else if (qh(i)) switch (i.nodeType) {
            case dt.DOCUMENT_TYPE_NODE:
                e = new Ja(i);
                break;
            default:
                console.log("Node type not supported: " + i.nodeType)
        }
        return e
    }
    const Cn = (() => {
        class i {
            constructor() {
                this._PRIVATE_domFragmentCountById = new Map, this._PRIVATE_domFragmentMap = new Map
            }
            getState() {
                return this._PRIVATE_domFragmentMap
            }
            addFragment(t) {
                return this._PRIVATE_updateDomNodeUniqueId(t.node, 1), this._PRIVATE_domFragmentMap.set(t.node.serializationId, t)
            }
            addFragmentRecursively(t) {
                this.addFragment(t), t.children.forEach(s => this.addFragmentRecursively(s))
            }
            _PRIVATE_removeFragment(t) {
                return this._PRIVATE_updateDomNodeUniqueId(t.node, -1), this._PRIVATE_domFragmentMap.delete(t.node.serializationId)
            }
            _PRIVATE_removeFragmentRecursively(t) {
                t.children.forEach(s => this._PRIVATE_removeFragmentRecursively(s)), this._PRIVATE_removeFragment(t)
            }
            getFragmentById(t) {
                return this._PRIVATE_domFragmentMap.get(t) || null
            }
            _PRIVATE_getParentFragment(t) {
                var s;
                const n = (s = this._PRIVATE_domFragmentMap.get(t.serializationId)) === null || s === void 0 ? void 0 : s.parentSerializationId;
                return n === void 0 ? null : this._PRIVATE_domFragmentMap.get(n) || null
            }
            getChildrenByTagName(t, s) {
                return I(this._PRIVATE_domFragmentMap.get(t), Bi, "children", xe(n => {
                    var a, o;
                    return ((o = (a = n.node) === null || a === void 0 ? void 0 : a.tagName) === null || o === void 0 ? void 0 : o.toLowerCase()) === s
                })) || []
            }
            hasDomNodeUniqueId(t) {
                var s;
                return q((s = t.attributes) === null || s === void 0 ? void 0 : s.id) && this._PRIVATE_domFragmentCountById.get(String(t.attributes.id)) === 1
            }
            _PRIVATE_updateDomNodeUniqueId(t, s) {
                var n;
                if (!q((n = t == null ? void 0 : t.attributes) === null || n === void 0 ? void 0 : n.id)) return;
                const a = String(t.attributes.id),
                    o = this._PRIVATE_domFragmentCountById.get(a) || 0;
                if (o <= 1 && s === -1) {
                    this._PRIVATE_domFragmentCountById.delete(a);
                    return
                }
                this._PRIVATE_domFragmentCountById.set(a, o + s)
            }
            processAddedFragments(t) {
                Q(t, s => {
                    const n = this.getFragmentById(s.parentSerializationId);
                    if (!n) return;
                    const a = this.getFragmentById(s.node.serializationId);
                    if (a) {
                        const c = this.getFragmentById(a.parentSerializationId);
                        c && (c.children = I(c.children, xe(h => h.node.serializationId !== s.node.serializationId))), this._PRIVATE_removeFragmentRecursively(a)
                    }
                    let o = n.children.length;
                    if (s.prevSiblingSerializationId !== -1) {
                        const c = _l(n.children, h => h.node.serializationId === s.prevSiblingSerializationId);
                        c >= 0 && (o = c + 1)
                    }
                    I(n.children, Dc(o, 0, s)), this.addFragmentRecursively(s)
                })
            }
            processRemovedNodes(t) {
                Q(t, s => {
                    const n = this.getFragmentById(s.serializationId);
                    if (!n) return;
                    const a = this.getFragmentById(n.parentSerializationId);
                    a && (a.children = I(a.children, xe(o => o.node.serializationId !== s.serializationId)), this._PRIVATE_removeFragmentRecursively(n))
                })
            }
            processModifiedNodes(t) {
                Q(t, s => {
                    const n = this.getFragmentById(s.serializationId);
                    n && (n.node = s)
                })
            }
            getAncestors(t) {
                const s = [];
                for (const n of this._PRIVATE_walkUp(t)) I(s, it(n));
                return s
            }* _PRIVATE_walkUp(t) {
                let s = t;
                for (; s;) {
                    yield s;
                    const n = this._PRIVATE_getParentFragment(s);
                    if (n != null && n.node && n.node !== s) s = n.node;
                    else break
                }
            }
            _PRIVATE_serializeFragment(t) {
                const s = this.getFragmentById(t);
                if (!s) return null;
                const n = ro(Qa(s));
                return n ? (no(n) && s.children.forEach((a, o) => {
                    const c = this._PRIVATE_serializeFragment(a.node.serializationId);
                    c && (n.children[o] = c)
                }), n) : null
            }
            createSerializedDocument() {
                let t = null;
                for (const n of this._PRIVATE_domFragmentMap.values())
                    if (n.parentSerializationId === -1) {
                        t = n;
                        break
                    }
                if (!t) return null;
                const s = this._PRIVATE_serializeFragment(t.node.serializationId);
                return s instanceof As ? s : null
            }
            populateAndSerializeFragment(t) {
                const s = this._PRIVATE_populateAndSerializeRecursively(t);
                return s instanceof As ? s : null
            }
            _PRIVATE_populateAndSerializeRecursively(t) {
                this.addFragment(t);
                const s = ro(Qa(t));
                return s ? (no(s) && t.children.forEach((n, a) => {
                    const o = this._PRIVATE_populateAndSerializeRecursively(n);
                    o && (s.children[a] = o)
                }), s) : null
            }
        }
        return i.$deps = [], i
    })();
    var Ze = (i => (i[i.ELEMENT_NODE = 1] = "ELEMENT_NODE", i[i.TEXT_NODE = 3] = "TEXT_NODE", i[i.COMMENT_NODE = 8] = "COMMENT_NODE", i[i.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", i[i.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", i))(Ze || {});
    const On = new Set(["input", "textarea"]),
        Yh = new Set(["svg", "path", "use", "defs", "g", "circle", "rect", "line", "ellipse", "polygon", "symbol", "polyline", "text", "tspan", "clippath", "mask", "image", "lineargradient", "radialgradient", "stop", "filter", "fegaussianblur", "feoffset", "femerge", "femergenode"]);

    function Wh(i, e, t) {
        switch (i.nodeType) {
            case Ze.DOCUMENT_NODE:
                return Xh(e, t);
            case Ze.ELEMENT_NODE:
                return jh(i, e);
            case Ze.TEXT_NODE:
                return Zh(i, e);
            case Ze.COMMENT_NODE:
                return Kh(e);
            case Ze.DOCUMENT_TYPE_NODE:
                return Qh(i, e);
            default:
                return null
        }
    }

    function Xh(i, e) {
        const t = {
            type: M.DOCUMENT_NODE,
            baseURI: e
        };
        return i !== void 0 && (t.parent = i), t
    }

    function jh(i, e) {
        var c, h;
        const t = (h = (c = i.tagName) == null ? void 0 : c.toLowerCase()) != null ? h : "",
            s = Jh(t),
            n = t_(i.attributes);
        n && On.has(t) && "value" in n && delete n.value;
        const a = ao(i),
            o = {
                type: M.ELEMENT_NODE,
                localName: t
            };
        return s && (o.namespaceURI = s), n && (o.attributes = n), a && (o.state = a), e !== void 0 && (o.parent = e), o
    }

    function Zh(i, e) {
        var s;
        const t = {
            type: M.TEXT_NODE,
            data: (s = i.textContent) != null ? s : ""
        };
        return e !== void 0 && (t.parent = e), t
    }

    function Kh(i) {
        const e = {
            type: M.COMMENT_NODE
        };
        return i !== void 0 && (e.parent = i), e
    }

    function Qh(i, e) {
        var s, n, a;
        const t = {
            type: M.DOCUMENT_TYPE_NODE,
            name: ((s = i.attributes) == null ? void 0 : s.name) !== void 0 ? String(i.attributes.name) : "",
            publicId: ((n = i.attributes) == null ? void 0 : n.publicId) !== void 0 ? String(i.attributes.publicId) : "",
            systemId: ((a = i.attributes) == null ? void 0 : a.systemId) !== void 0 ? String(i.attributes.systemId) : ""
        };
        return e !== void 0 && (t.parent = e), t
    }

    function Jh(i) {
        return Yh.has(i) ? "svg" : void 0
    }

    function t_(i) {
        if (!i) return;
        let e;
        for (const [t, s] of Object.entries(i)) s !== void 0 && (e || (e = {}), e[t] = String(s));
        return e
    }

    function ao(i, e) {
        var o, c;
        const t = {};
        let s = !1;
        i.scroll && (t.scrollX = i.scroll.x, t.scrollY = i.scroll.y, s = !0), i.checked !== void 0 && (t.checked = i.checked, s = !0);
        const n = (o = i.tagName) == null ? void 0 : o.toLowerCase();
        return (e != null ? e : n ? On.has(n) : !1) && ((c = i.attributes) == null ? void 0 : c.value) !== void 0 && (t.value = String(i.attributes.value), s = !0), s ? t : void 0
    }

    function e_(i, e, t) {
        var c, h, d;
        const s = e[i];
        if (s === void 0) return;
        const n = s.parent,
            a = s.previousSibling,
            o = s.nextSibling;
        if (n !== void 0 && yi(n, "firstChild", t, e) === i) {
            const T = (c = t[n]) != null ? c : {};
            T.firstChild = o !== void 0 ? o : null, t[n] = T
        }
        if (a !== void 0) {
            const f = (h = t[a]) != null ? h : {};
            f.nextSibling = o !== void 0 ? o : null, t[a] = f
        }
        if (o !== void 0) {
            const f = (d = t[o]) != null ? d : {};
            f.previousSibling = a !== void 0 ? a : null, t[o] = f
        }
    }

    function Dn(i, e, t) {
        var c, h, d;
        const s = i.node.serializationId,
            n = i.parentSerializationId !== -1 ? i.parentSerializationId : void 0,
            a = Wh(i.node, n, t);
        if (!a) return;
        e[s] = a;
        for (const f of i.children) Dn(f, e, t);
        const o = i.children.filter(f => f.node.serializationId in e);
        o.length > 0 && (a.firstChild = o[0].node.serializationId);
        for (let f = 0; f < o.length; f++) {
            const T = e[o[f].node.serializationId];
            T && (f > 0 && (T.previousSibling = o[f - 1].node.serializationId), f < o.length - 1 && (T.nextSibling = o[f + 1].node.serializationId))
        }
        if (((c = i.node.tagName) == null ? void 0 : c.toLowerCase()) === "select" && ((h = i.node.attributes) == null ? void 0 : h.value) !== void 0) {
            const f = String(i.node.attributes.value),
                g = o.filter(p => {
                    var A;
                    return ((A = p.node.tagName) == null ? void 0 : A.toLowerCase()) === "option"
                }).findIndex(p => {
                    var A;
                    return ((A = p.node.attributes) == null ? void 0 : A.value) !== void 0 && String(p.node.attributes.value) === f
                });
            if (g !== -1) {
                const p = e[s];
                p.state = { ...(d = p.state) != null ? d : {},
                    selectedIndex: g
                }
            }
        }
    }

    function yi(i, e, t, s) {
        var a;
        const n = t[i];
        return n != null && e in n ? n[e] : (a = s[i]) == null ? void 0 : a[e]
    }

    function i_(i, e, t) {
        const s = yi(i, "firstChild", t, e);
        if (s == null) return;
        let n = s;
        for (;;) {
            const a = yi(n, "nextSibling", t, e);
            if (a == null) return n;
            n = a
        }
    }

    function s_(i, e, t, s, n) {
        var d, f, T, g, p;
        const a = i.node.serializationId,
            o = i.prevSiblingSerializationId;
        if (o === -1) {
            const A = yi(e, "firstChild", s, t),
                S = (d = s[e]) != null ? d : {};
            if (S.firstChild = a, s[e] = S, A != null) {
                const v = s[a];
                v && (v.nextSibling = A);
                const N = (f = s[A]) != null ? f : {};
                N.previousSibling = a, s[A] = N
            }
            return
        }
        const h = !(o in t || o in s) ? n.has(e) ? n.get(e) : i_(e, t, s) : o;
        if (h === void 0) {
            const A = (T = s[e]) != null ? T : {};
            A.firstChild = a, s[e] = A, n.set(e, a)
        } else {
            const A = yi(h, "nextSibling", s, t),
                S = (g = s[h]) != null ? g : {};
            S.nextSibling = a, s[h] = S;
            const v = s[a];
            if (v && (v.previousSibling = h, A != null && (v.nextSibling = A)), A != null) {
                const N = (p = s[A]) != null ? p : {};
                N.previousSibling = a, s[A] = N
            }
            A == null && n.set(e, a)
        }
    }

    function oo(i, e, t, s) {
        var o;
        const n = s === "next" ? "nextSibling" : "previousSibling";
        let a = i;
        for (; a !== void 0;) {
            if (!e.has(a)) return a;
            a = (o = t[a]) == null ? void 0 : o[n]
        }
        return null
    }

    function co(i, e, t) {
        return oo(i, e, t, "next")
    }

    function n_(i, e, t) {
        return oo(i, e, t, "prev")
    }

    function r_(i, e) {
        const t = {};
        return Dn(i, t, e), t
    }

    function a_(i, e, t = "") {
        const s = {},
            n = new Map;
        for (const a of i) {
            const o = a.parentSerializationId;
            if (o === -1 || !(o in e)) continue;
            const c = a.node.serializationId,
                h = c in e;
            if (h && e_(c, e, s), Dn(a, s, t), c in s) {
                if (h) {
                    const d = s[c];
                    "previousSibling" in d || (d.previousSibling = null), "nextSibling" in d || (d.nextSibling = null)
                }
                s_(a, o, e, s, n)
            }
        }
        return s
    }

    function o_(i, e) {
        var n, a, o;
        const t = {},
            s = new Set(i);
        for (const c of i) {
            const h = e[c];
            if (h === void 0) continue;
            const d = h.parent,
                f = h.previousSibling,
                T = h.nextSibling;
            if (d !== void 0) {
                const g = e[d];
                if ((g == null ? void 0 : g.firstChild) === c) {
                    const p = (n = t[d]) != null ? n : {};
                    p.firstChild = co(T, s, e), t[d] = p
                }
            }
            if (f !== void 0 && !s.has(f)) {
                const g = (a = t[f]) != null ? a : {};
                g.nextSibling = co(T, s, e), t[f] = g
            }
            if (T !== void 0 && !s.has(T)) {
                const g = (o = t[T]) != null ? o : {};
                g.previousSibling = n_(f, s, e), t[T] = g
            }
        }
        return t
    }

    function c_(i, e) {
        var s, n, a, o;
        const t = {};
        for (const c of i) {
            const h = c.serializationId,
                d = e[h];
            if (d) {
                if (d.type === M.TEXT_NODE) {
                    const f = (s = c.textContent) != null ? s : "";
                    f !== d.data && (t[h] = {
                        data: f
                    });
                    continue
                }
                if (d.type !== M.COMMENT_NODE && d.type === M.ELEMENT_NODE) {
                    const f = {},
                        T = On.has((n = d.localName) != null ? n : ""),
                        g = (a = d.attributes) != null ? a : {},
                        p = (o = c.attributes) != null ? o : {};
                    let A;
                    for (const $ of Object.keys(g)) T && $ === "value" || p[$] === void 0 && (A || (A = {}), A[$] = null);
                    for (const [$, j] of Object.entries(p)) {
                        if (j === void 0 || T && $ === "value") continue;
                        const b = String(j);
                        g[$] !== b && (A || (A = {}), A[$] = b)
                    }
                    A && (f.attributes = A);
                    const S = ao(c, T),
                        v = d.state,
                        N = ["scrollX", "scrollY", "checked", "value"];
                    let B;
                    for (const $ of N) {
                        const j = v == null ? void 0 : v[$],
                            b = S == null ? void 0 : S[$];
                        j !== b && (B || (B = {}), B[$] = b !== void 0 ? b : null)
                    }
                    B !== void 0 && (f.state = B), Object.keys(f).length > 0 && (t[h] = f)
                }
            }
        }
        return t
    }

    function l_(i, e, t) {
        var c, h, d;
        const s = {},
            n = t[i];
        if (!n || n.type !== M.ELEMENT_NODE) return s;
        const a = {};
        let o = !1;
        return e.value !== void 0 && e.value !== ((c = n.state) == null ? void 0 : c.value) && (a.value = e.value, o = !0), e.checked !== void 0 && e.checked !== ((h = n.state) == null ? void 0 : h.checked) && (a.checked = e.checked, o = !0), e.selectedIndex !== void 0 && e.selectedIndex !== ((d = n.state) == null ? void 0 : d.selectedIndex) && (a.selectedIndex = e.selectedIndex, o = !0), o && (s[i] = {
            state: a
        }), s
    }

    function Mn(i, e) {
        for (const [t, s] of Object.entries(e)) {
            const n = t;
            if (!(n in i)) {
                i[n] = s;
                continue
            }
            const a = i[n];
            for (const [o, c] of Object.entries(s)) {
                const h = a[o];
                c !== null && typeof c == "object" && !Array.isArray(c) && h !== null && typeof h == "object" && !Array.isArray(h) ? Object.assign(h, c) : a[o] = c
            }
        }
    }
    class u_ {
        constructor() {
            this.state = {}, this.baseURI = ""
        }
        applyDomAvailable(e, t) {
            return this.baseURI = t, this.state = r_(e, t), { ...this.state
            }
        }
        applyDomChanged(e) {
            const t = {};
            if (e.addedFragments.length > 0) {
                const s = a_(e.addedFragments, this.state, this.baseURI);
                Object.keys(s).length > 0 && (this.state = Fe.apply(this.state, s), Mn(t, s))
            }
            if (e.removedNodes.length > 0) {
                const s = e.removedNodes.map(a => a.serializationId),
                    n = o_(s, this.state);
                Object.keys(n).length > 0 && (this.state = Fe.apply(this.state, n), Mn(t, n))
            }
            if (e.modifiedNodes.length > 0) {
                const s = c_(e.modifiedNodes, this.state);
                Object.keys(s).length > 0 && (this.state = Fe.apply(this.state, s), Mn(t, s))
            }
            return t
        }
        applyDomInputChanged(e) {
            const {
                nodeId: t,
                ...s
            } = e, n = l_(t, s, this.state);
            return Object.keys(n).length > 0 && (this.state = Fe.apply(this.state, n)), n
        }
        getState() {
            return { ...this.state
            }
        }
        reset() {
            this.state = {}, this.baseURI = ""
        }
    }
    const h_ = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_domState = t, this._PRIVATE_INVALID_ELEMENT = "INVALID_ELEMENT"
                }
                getDomNodePath(t) {
                    const s = this._PRIVATE_domState.getAncestors(t);
                    return this._PRIVATE_computePath(s)
                }
                _PRIVATE_sanitizeId(t) {
                    var s;
                    return q((s = t.attributes) === null || s === void 0 ? void 0 : s.id) ? Zr.escapeInvalidCharacters(String(t.attributes.id)) : null
                }
                _PRIVATE_sanitizeTagName(t) {
                    return Zr.escapeInvalidCharacters(t.tagName.toLowerCase())
                }
                _PRIVATE_computeDomNodeSelector(t, s) {
                    const n = this._PRIVATE_sanitizeTagName(t),
                        a = this._PRIVATE_sanitizeId(t);
                    if (a && this._PRIVATE_domState.hasDomNodeUniqueId(t)) return {
                        nodeSelector: `${n}#${a}`,
                        hasUniqueIdentifier: !0
                    };
                    const o = this._PRIVATE_getIndexInParent(s, t);
                    return {
                        nodeSelector: `${n}:eq(${o})`,
                        hasUniqueIdentifier: !1
                    }
                }
                _PRIVATE_computePath(t) {
                    const s = I(t, Oc());
                    if (t.length === 0) return s.nodeType === dt.DOCUMENT_FRAGMENT_NODE ? "|fragment|" : "";
                    const n = s,
                        a = t[0],
                        o = this._PRIVATE_domState.getFragmentById(a.serializationId);
                    if (!o) return "";
                    if (!this._PRIVATE_isValidDomNode(n)) return this._PRIVATE_INVALID_ELEMENT;
                    const {
                        nodeSelector: c,
                        hasUniqueIdentifier: h
                    } = this._PRIVATE_computeDomNodeSelector(n, o);
                    if (h) return c;
                    const d = this._PRIVATE_computePath(t);
                    return `${d?`${d}>`:""}${c}`
                }
                _PRIVATE_isValidDomNode(t) {
                    return t && t.nodeType === dt.ELEMENT_NODE && t.tagName !== ""
                }
                _PRIVATE_getIndexInParent(t, s) {
                    var n;
                    let a = 0;
                    if (t === null || s.nodeType === dt.DOCUMENT_NODE) return a;
                    const o = (n = s.tagName) === null || n === void 0 ? void 0 : n.toLowerCase();
                    if (t.children && o)
                        for (const c of t.children) {
                            const h = c.node;
                            if (h) {
                                if (h.serializationId === s.serializationId) break;
                                h.tagName && h.tagName.toLowerCase() === o && (a += 1)
                            }
                        }
                    return a
                }
            }
            return i
        })(),
        lo = 65535;

    function uo(i) {
        const e = i.node,
            t = i.pageX,
            s = i.pageY;
        if (!e || !e.clientRect || !te(t) || !te(s)) return {
            xRel: -1,
            yRel: -1,
            valid: !1
        };
        const n = e.clientRect,
            a = e.scroll;
        let o = t - n.x,
            c = s - n.y;
        a && (o += a.x, c += a.y);
        const h = a ? Math.max(n.width, a.width) : n.width,
            d = a ? Math.max(n.height, a.height) : n.height,
            f = Math.max(h, 1),
            T = Math.max(d, 1);
        o = Math.max(0, Math.min(o, f)), c = Math.max(0, Math.min(c, T));
        const g = Math.round(o / f * lo),
            p = Math.round(c / T * lo);
        return {
            xRel: g,
            yRel: p,
            valid: !0
        }
    }
    const __ = 33,
        Ps = (() => {
            class i extends ka {
                constructor(t, s) {
                    super(), this._PRIVATE_domState = s, this._PRIVATE_converter = new u_, this._PRIVATE_unsubscribeCallbackPromises = [], this._PRIVATE_lastSeqNumberMap = new Map, this._PRIVATE_apvInitialDomEmitted = !1, this._PRIVATE_produceThrottledMouseMove = _i(n => {
                        this.produceEvent(n)
                    }, __), this._PRIVATE_listenDomAvailableEvent = n => {
                        var a;
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        if (this._PRIVATE_isAPVInitialDom(n)) {
                            this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq), this._PRIVATE_apvInitialDomEmitted || (this._PRIVATE_emitInitialDomState(), this._PRIVATE_apvInitialDomEmitted = !0);
                            return
                        }
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const o = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            c = (a = n.data.root.children.find(d => d.node.tagName === "HTML")) === null || a === void 0 ? void 0 : a.node;
                        c && k.updateDimensionsFromHtmlNode(c), this._PRIVATE_domState.addFragmentRecursively(n.data.root), this._PRIVATE_converter.applyDomAvailable(n.data.root, "");
                        const h = this._PRIVATE_cloneStateWithDimensions(this._PRIVATE_converter.getState());
                        this.produceEvent({
                            type: "DOM_INITIAL_STATE",
                            state: h,
                            timestamp: o
                        }), this.produceEvent({
                            type: "viewportResize",
                            width: k.windowWidth,
                            height: k.windowHeight,
                            timestamp: o
                        }), this.produceEvent({
                            type: "screenResize",
                            width: k.screenWidth,
                            height: k.screenHeight,
                            timestamp: o
                        })
                    }, this._PRIVATE_listenDomChangedEvent = n => {
                        if (this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const {
                            addedFragments: a,
                            removedNodes: o,
                            modifiedNodes: c
                        } = n.data;
                        this._PRIVATE_domState.processAddedFragments(a), this._PRIVATE_domState.processRemovedNodes(o), this._PRIVATE_domState.processModifiedNodes(c);
                        const h = this._PRIVATE_converter.applyDomChanged(n.data);
                        if (this.isStarted && Object.keys(h).length > 0) {
                            const d = n.timestamp ? new Date(n.timestamp).getTime() : Date.now();
                            this.produceEvent({
                                type: "DOM_PATCH",
                                diff: h,
                                state: this._PRIVATE_converter.getState(),
                                timestamp: d
                            })
                        }
                    }, this._PRIVATE_listenDomScrolledEvent = n => {
                        var a, o;
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const c = n.timestamp ? new Date(n.timestamp).getTime() : Date.now();
                        "context" in n && n.data.node.tagName === "HTML" && k.updateDimensionsFromHtmlNode(n.data.node);
                        const h = n.data.node.scroll;
                        if (h) {
                            const d = {
                                [n.data.node.serializationId]: {
                                    state: {
                                        scrollX: h.x,
                                        scrollY: h.y
                                    }
                                }
                            };
                            this.produceEvent({
                                type: "DOM_PATCH",
                                diff: d,
                                state: this._PRIVATE_converter.getState(),
                                timestamp: c
                            })
                        }
                        this.produceEvent({
                            type: "scroll",
                            nodeId: n.data.node.serializationId,
                            scrollTop: (a = n.data.node.scroll) === null || a === void 0 ? void 0 : a.y,
                            scrollLeft: (o = n.data.node.scroll) === null || o === void 0 ? void 0 : o.x,
                            timestamp: c
                        })
                    }, this._PRIVATE_listenDomClickedEvent = n => {
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const a = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            o = {
                                type: "mouseDown",
                                nodeId: n.data.node.serializationId,
                                clientX: At(n.data.clientX, 1),
                                clientY: At(n.data.clientY, 1),
                                pageX: At(n.data.pageX, 1),
                                pageY: At(n.data.pageY, 1),
                                tgt: this._PRIVATE_pathComputation.getDomNodePath(n.data.node),
                                timestamp: a
                            },
                            c = {
                                type: "click",
                                nodeId: n.data.node.serializationId,
                                pageX: n.data.pageX,
                                pageY: n.data.pageY,
                                timestamp: a,
                                tgt: this._PRIVATE_pathComputation.getDomNodePath(n.data.node)
                            },
                            h = uo(n.data);
                        c.xRel = h.xRel, c.yRel = h.yRel;
                        const d = {
                            type: "mouseUp",
                            nodeId: n.data.node.serializationId,
                            clientX: At(n.data.clientX, 1),
                            clientY: At(n.data.clientY, 1),
                            pageX: At(n.data.pageX, 1),
                            pageY: At(n.data.pageY, 1),
                            tgt: this._PRIVATE_pathComputation.getDomNodePath(n.data.node),
                            timestamp: a
                        };
                        this.produceEvent(o), this.produceEvent(c), this.produceEvent(d)
                    }, this._PRIVATE_listenDomMouseMovedEvent = n => {
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const a = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            o = {
                                type: "mouseMove",
                                pageX: At(n.data.pageX, 1),
                                pageY: At(n.data.pageY, 1),
                                clientX: At(n.data.clientX, 1),
                                clientY: At(n.data.clientY, 1),
                                nodeId: n.data.node.serializationId,
                                timestamp: a
                            },
                            c = uo(n.data);
                        o.tgtHM = this._PRIVATE_pathComputation.getDomNodePath(n.data.node), o.xRel = c.xRel, o.yRel = c.yRel;
                        const h = {
                            type: "mouseOver",
                            nodeId: n.data.node.serializationId,
                            pageX: At(n.data.pageX, 1),
                            pageY: At(n.data.pageY, 1),
                            tgt: this._PRIVATE_pathComputation.getDomNodePath(n.data.node),
                            timestamp: a
                        };
                        this.produceEvent(h), this._PRIVATE_produceThrottledMouseMove(o)
                    }, this._PRIVATE_listenDomWindowResizedEvent = n => {
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const a = n.timestamp ? new Date(n.timestamp).getTime() : Date.now();
                        "context" in n && (k.windowWidth = n.context.window.innerWidth, k.windowHeight = n.context.window.innerHeight);
                        const o = {
                            type: "viewportResize",
                            width: k.windowWidth,
                            height: k.windowHeight,
                            timestamp: a
                        };
                        this.produceEvent(o)
                    }, this._PRIVATE_listenDomClipboardEvent = n => {
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const a = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            o = {
                                type: "clipboard",
                                nodeId: n.data.node.serializationId,
                                tgt: this._PRIVATE_pathComputation.getDomNodePath(n.data.node),
                                action: n.data.action,
                                timestamp: a
                            };
                        this.produceEvent(o)
                    }, this._PRIVATE_listenDomInputChangedEvent = n => {
                        var a, o, c, h, d;
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const f = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            T = n.data.node,
                            g = T.serializationId,
                            p = this._PRIVATE_pathComputation.getDomNodePath(T),
                            A = ((a = T.tagName) === null || a === void 0 ? void 0 : a.toLowerCase()) || "",
                            S = (o = T.attributes) === null || o === void 0 ? void 0 : o.type;
                        if (!to.shouldTrackInputValue(A, S)) return;
                        let v;
                        if (A === "select") {
                            const N = this._PRIVATE_computeSelectedIndex(g, String((d = (c = T.attributes) === null || c === void 0 ? void 0 : c.value) !== null && d !== void 0 ? d : ""));
                            v = this._PRIVATE_converter.applyDomInputChanged({
                                nodeId: g,
                                selectedIndex: N
                            }), this.produceEvent({
                                type: "select",
                                timestamp: f,
                                nodeId: g,
                                tgt: p,
                                selectedIndex: N
                            })
                        } else if (A === "input" || A === "textarea") switch (S) {
                            case "radio":
                            case "checkbox":
                                v = this._PRIVATE_converter.applyDomInputChanged({
                                    nodeId: g,
                                    checked: T.checked
                                }), this.produceEvent({
                                    type: "checkable",
                                    timestamp: f,
                                    nodeId: g,
                                    tgt: p,
                                    checked: T.checked
                                });
                                break;
                            default:
                                {
                                    let N = (h = T.attributes) === null || h === void 0 ? void 0 : h.value;q(N) && T.attributes && (N = eo.anonymizeInputValue(A, T.attributes)),
                                    v = this._PRIVATE_converter.applyDomInputChanged({
                                        nodeId: g,
                                        value: q(N) ? String(N) : void 0
                                    }),
                                    this.produceEvent({
                                        type: "input",
                                        timestamp: f,
                                        nodeId: g,
                                        tgt: p,
                                        inputValue: q(N) ? String(N) : ""
                                    })
                                }
                        } else return;
                        Object.keys(v).length > 0 && this.produceEvent({
                            type: "DOM_PATCH",
                            diff: v,
                            state: this._PRIVATE_converter.getState(),
                            timestamp: f
                        })
                    }, this._PRIVATE_listenDomInputBlurredEvent = n => {
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const a = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            o = {
                                type: "inputBlurred",
                                tgt: this._PRIVATE_pathComputation.getDomNodePath(n.data.node),
                                timestamp: a
                            };
                        this.produceEvent(o)
                    }, this._PRIVATE_listenDomInputFocusedEvent = n => {
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const a = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            o = {
                                type: "inputFocused",
                                tgt: this._PRIVATE_pathComputation.getDomNodePath(n.data.node),
                                timestamp: a
                            };
                        this.produceEvent(o)
                    }, this._PRIVATE_listenDomSelectionChangedEvent = n => {
                        var a, o;
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const c = n.timestamp ? new Date(n.timestamp).getTime() : Date.now(),
                            h = n.data.node;
                        if ((h == null ? void 0 : h.nodeType) !== dt.ELEMENT_NODE) return;
                        const d = {
                            type: "textSelectionChanged",
                            len: ((o = (a = h.attributes) === null || a === void 0 ? void 0 : a.value) === null || o === void 0 ? void 0 : o.length) || 0,
                            timestamp: c
                        };
                        this.produceEvent(d)
                    }, this._PRIVATE_listenCheckoutCompletedEvent = n => {
                        if (!this.isStarted || this._PRIVATE_isPastEvent(n.name, n.seq)) return;
                        this._PRIVATE_lastSeqNumberMap.set(n.name, n.seq);
                        const o = n.data.checkout,
                            c = o.order,
                            h = c == null ? void 0 : c.id,
                            d = o.totalPrice,
                            f = d == null ? void 0 : d.amount,
                            T = d == null ? void 0 : d.currencyCode;
                        if (fe(h) && q(f) && q(T)) {
                            const g = {
                                type: "ecommerceTransaction",
                                id: h,
                                currency: T,
                                revenue: f,
                                timestamp: n.timestamp ? new Date(n.timestamp).getTime() : Date.now()
                            };
                            this.produceEvent(g)
                        }
                    }, this._PRIVATE_pathComputation = new h_(s), this._PRIVATE_shopifyAnalyticsApi = t
                }
                onStart() {
                    this._PRIVATE_bindAllListeners()
                }
                onStop() {
                    this._PRIVATE_unbindAllListeners(), this._PRIVATE_apvInitialDomEmitted = !1
                }
                produceInitialDomFromCurrentDomState() {
                    this._PRIVATE_apvInitialDomEmitted || (this._PRIVATE_emitInitialDomState(), this._PRIVATE_apvInitialDomEmitted = !0)
                }
                _PRIVATE_bindAllListeners() {
                    this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_input_changed", this._PRIVATE_listenDomInputChangedEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_mouse_moved", this._PRIVATE_listenDomMouseMovedEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_available", this._PRIVATE_listenDomAvailableEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_changed", this._PRIVATE_listenDomChangedEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_scrolled", this._PRIVATE_listenDomScrolledEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_clicked", this._PRIVATE_listenDomClickedEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_window_resized", this._PRIVATE_listenDomWindowResizedEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_clipboard", this._PRIVATE_listenDomClipboardEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_input_blurred", this._PRIVATE_listenDomInputBlurredEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_input_focused", this._PRIVATE_listenDomInputFocusedEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("advanced_dom_selection_changed", this._PRIVATE_listenDomSelectionChangedEvent)), this._PRIVATE_unsubscribeCallbackPromises.push(this._PRIVATE_shopifyAnalyticsApi.subscribe("checkout_completed", this._PRIVATE_listenCheckoutCompletedEvent))
                }
                _PRIVATE_unbindAllListeners() {
                    this._PRIVATE_unsubscribeCallbackPromises.forEach(t => {
                        t.then(s => s())
                    }), this._PRIVATE_unsubscribeCallbackPromises = []
                }
                _PRIVATE_emitInitialDomState() {
                    const t = Date.now(),
                        s = this._PRIVATE_converter.getState();
                    if (Object.keys(s).length === 0) return;
                    const n = this._PRIVATE_cloneStateWithDimensions(s);
                    this.produceEvent({
                        type: "DOM_INITIAL_STATE",
                        state: n,
                        timestamp: t
                    }), this.produceEvent({
                        type: "viewportResize",
                        width: k.windowWidth,
                        height: k.windowHeight,
                        timestamp: t
                    }), this.produceEvent({
                        type: "screenResize",
                        width: k.screenWidth,
                        height: k.screenHeight,
                        timestamp: t
                    })
                }
                _PRIVATE_computeSelectedIndex(t, s) {
                    var n, a;
                    const o = this._PRIVATE_converter.getState(),
                        c = o[t];
                    if (!c || c.type !== M.ELEMENT_NODE) return -1;
                    let h = 0,
                        d = c.firstChild;
                    for (; d != null;) {
                        const f = o[d];
                        if (!f) break;
                        if (f.type === M.ELEMENT_NODE && f.localName === "option") {
                            if (String((a = (n = f.attributes) === null || n === void 0 ? void 0 : n.value) !== null && a !== void 0 ? a : "") === s) return h;
                            h += 1
                        }
                        if (f.firstChild != null) {
                            d = f.firstChild;
                            continue
                        }
                        for (; d != null;) {
                            const T = o[d];
                            if (!T) {
                                d = void 0;
                                break
                            }
                            if (T.nextSibling != null) {
                                d = T.nextSibling;
                                break
                            }
                            const g = T.parent;
                            if (g == null || g === t) {
                                d = void 0;
                                break
                            }
                            d = g
                        }
                    }
                    return -1
                }
                _PRIVATE_cloneStateWithDimensions(t) {
                    const s = this._PRIVATE_findDocumentNodeId(t);
                    if (s == null) return t;
                    const n = { ...t
                        },
                        a = t[s];
                    return n[s] = { ...a,
                        viewport: {
                            width: k.windowWidth,
                            height: k.windowHeight
                        },
                        screen: {
                            width: k.screenWidth,
                            height: k.screenHeight
                        }
                    }, n
                }
                _PRIVATE_findDocumentNodeId(t) {
                    for (const s of Object.keys(t))
                        if (t[s].type === M.DOCUMENT_NODE) return Number(s);
                    return null
                }
                _PRIVATE_isPastEvent(t, s) {
                    const n = this._PRIVATE_lastSeqNumberMap.get(t) || 0;
                    return s <= n
                }
                _PRIVATE_isAPVInitialDom(t) {
                    return t.seq > 1 && this._PRIVATE_lastSeqNumberMap.get("advanced_dom_available") === 1
                }
            }
            return i.$deps = [Ts, Cn], i
        })(),
        ho = (() => {
            class i {
                constructor(t, s, n, a, o, c, h) {
                    this._PRIVATE_trackingState = t, this._PRIVATE_pageViewService = s, this._PRIVATE_dataCollectionStarter = n, this._PRIVATE_pageviewLifecycleEmitter = a, this._PRIVATE_sessionRenewer = o, this._PRIVATE_collectState = c, this._PRIVATE_shopifyProducer = h
                }
                start() {
                    this._PRIVATE_pageViewService.onShopifyPageViewed((t, s) => this._PRIVATE_onShopifyPageViewed(t, s))
                }
                async _PRIVATE_onShopifyPageViewed(t, s) {
                    if (t) {
                        if (s) {
                            await this._PRIVATE_pageViewService.sendArtificialPageview(), this._PRIVATE_shopifyProducer.produceInitialDomFromCurrentDomState();
                            return
                        }
                        this._PRIVATE_trackingState.compute(async n => {
                            n && (this._PRIVATE_pageviewLifecycleEmitter.emitPageviewStart(), this._PRIVATE_sessionRenewer.onSessionExpired(() => this._PRIVATE_refreshCollectStateAfterSessionRenewal().catch(G.error)), await this._PRIVATE_doStart())
                        })
                    }
                }
                async _PRIVATE_doStart(t = !1) {
                    try {
                        await this._PRIVATE_dataCollectionStarter.startDataCollection(t)
                    } catch (s) {
                        G.error(s, "ShopifyTrackingPipelineStartError")
                    }
                }
                async _PRIVATE_refreshCollectStateAfterSessionRenewal() {
                    await this._PRIVATE_collectState.refresh(), this._PRIVATE_collectState.canTrack() && await this._PRIVATE_doStart(!0)
                }
            }
            return i.$deps = [Wa, ms, Is, vi, je, ie, Ps], i
        })(),
        Ss = (() => {
            class i {
                constructor() {
                    this._PRIVATE_MAX_SCROLL_RATE_THRESHOLD = 100, this._PRIVATE_maxScrollRate = 0, this._PRIVATE_maxDocumentHeight = 0
                }
                updateMaxScrollRate(t, s, n) {
                    const a = this._PRIVATE_currentScrollRate(t, s, n);
                    a > this._PRIVATE_maxScrollRate && (this._PRIVATE_maxScrollRate = a), t > this._PRIVATE_maxDocumentHeight && (this._PRIVATE_maxDocumentHeight = t)
                }
                _PRIVATE_currentScrollRate(t, s, n) {
                    if (t <= 0) return 0;
                    const a = s + n,
                        o = Math.round(a / t * 100);
                    return Math.min(o, this._PRIVATE_MAX_SCROLL_RATE_THRESHOLD)
                }
                getRequestParameters() {
                    return {
                        sr: `${this._PRIVATE_maxScrollRate}`,
                        mdh: `${this._PRIVATE_maxDocumentHeight}`
                    }
                }
            }
            return i.$deps = [], i
        })(),
        kn = (() => {
            class i {
                constructor() {
                    this._PRIVATE_events = []
                }
                addEvent(t) {
                    this._PRIVATE_events.push(t)
                }
                eventsCount() {
                    return this._PRIVATE_events.length
                }
                clearEvents() {
                    this._PRIVATE_events = []
                }
                getEvents() {
                    return this._PRIVATE_events
                }
            }
            return i.$deps = [], i
        })();
    var Rt = (i => (i[i.RESIZE = 0] = "RESIZE", i[i.SCROLL = 1] = "SCROLL", i[i.MOUSEMOVE = 2] = "MOUSEMOVE", i[i.MOUSEDOWN = 3] = "MOUSEDOWN", i[i.MOUSEUP = 4] = "MOUSEUP", i[i.CLICK = 5] = "CLICK", i[i.MOUSEOVER = 6] = "MOUSEOVER", i[i.MOUSEOUT = 7] = "MOUSEOUT", i[i.CHANGE = 10] = "CHANGE", i[i.FOCUSIN = 11] = "FOCUSIN", i[i.FOCUSOUT = 12] = "FOCUSOUT", i[i.TAP = 14] = "TAP", i[i.KEYDOWN = 15] = "KEYDOWN", i[i.KEYUP = 16] = "KEYUP", i[i.COMMAND = 17] = "COMMAND", i[i.PERFORMANCE = 19] = "PERFORMANCE", i[i.DRAG = 20] = "DRAG", i[i.FLICK = 21] = "FLICK", i[i.KEYBOARD_NAVIGATION = 22] = "KEYBOARD_NAVIGATION", i[i.ZOOM = 23] = "ZOOM", i[i.VIEWPORT_SCALE = 24] = "VIEWPORT_SCALE", i[i.TEXT_HIGHLIGHT = 25] = "TEXT_HIGHLIGHT", i[i.DEAD_CLICK = 30] = "DEAD_CLICK", i[i.DEAD_ZOOM = 31] = "DEAD_ZOOM", i[i.PAGE_RELOAD = 32] = "PAGE_RELOAD", i[i.THRASHED_CURSOR = 33] = "THRASHED_CURSOR", i[i.BLANK_PAGE = 34] = "BLANK_PAGE", i[i.EXTERNAL_EVENT = 35] = "EXTERNAL_EVENT", i[i.SUBMIT = 36] = "SUBMIT", i[i.CUSTOM_EVENT = 37] = "CUSTOM_EVENT", i))(Rt || {}),
        Vs = (i => (i[i.COPY = 0] = "COPY", i[i.CUT = 1] = "CUT", i[i.PASTE = 2] = "PASTE", i))(Vs || {}),
        kt = (i => (i[i.MUTATION_INSERT = 1] = "MUTATION_INSERT", i[i.MUTATION_REMOVE = 2] = "MUTATION_REMOVE", i[i.MUTATION_ATTRIBUTE = 3] = "MUTATION_ATTRIBUTE", i[i.MUTATION_CHARACTER_DATA = 4] = "MUTATION_CHARACTER_DATA", i[i.INITIAL_DOM = 5] = "INITIAL_DOM", i[i.SCROLL = 6] = "SCROLL", i[i.CLICK = 8] = "CLICK", i[i.RESIZE = 9] = "RESIZE", i[i.INPUT_CHECKABLE = 10] = "INPUT_CHECKABLE", i[i.INPUT_SELECT = 11] = "INPUT_SELECT", i[i.INPUT_TEXT = 12] = "INPUT_TEXT", i[i.HASH_CHANGE = 13] = "HASH_CHANGE", i[i.UNANONYMIZED_CONSENT_GRANTED = 14] = "UNANONYMIZED_CONSENT_GRANTED", i[i.UNANONYMIZED_CONSENT_WITHDRAWN = 15] = "UNANONYMIZED_CONSENT_WITHDRAWN", i[i.MOUSE_OVER = 16] = "MOUSE_OVER", i[i.VISIBILITY_CHANGE = 17] = "VISIBILITY_CHANGE", i[i.STYLESHEET_RULE_INSERT = 18] = "STYLESHEET_RULE_INSERT", i[i.STATIC_RESOURCE_URL = 19] = "STATIC_RESOURCE_URL", i[i.PERFORMANCE_TIMINGS = 20] = "PERFORMANCE_TIMINGS", i[i.ATTACH_SHADOW = 22] = "ATTACH_SHADOW", i[i.STYLESHEET_CSS_TEXT_UPDATE = 23] = "STYLESHEET_CSS_TEXT_UPDATE", i[i.JAVASCRIPT_ERROR = 26] = "JAVASCRIPT_ERROR", i[i.PAGE_EVENT = 27] = "PAGE_EVENT", i[i.API_ERROR = 28] = "API_ERROR", i[i.TEXT_VISIBILITY = 29] = "TEXT_VISIBILITY", i[i.MUTATION_ENCRYPTED_CHARACTER_DATA = 30] = "MUTATION_ENCRYPTED_CHARACTER_DATA", i[i.INPUT_ENCRYPTED_TEXT = 31] = "INPUT_ENCRYPTED_TEXT", i[i.KEY_DOWN = 32] = "KEY_DOWN", i[i.KEY_UP = 33] = "KEY_UP", i[i.CLIPBOARD_COMMAND = 34] = "CLIPBOARD_COMMAND", i[i.STYLESHEET_RULE_DELETE = 37] = "STYLESHEET_RULE_DELETE", i[i.USER_IDENTIFIER = 38] = "USER_IDENTIFIER", i[i.TOUCH_START = 41] = "TOUCH_START", i[i.TOUCH_MOVE = 42] = "TOUCH_MOVE", i[i.TOUCH_END = 43] = "TOUCH_END", i[i.GESTURE_RECOGNITION = 44] = "GESTURE_RECOGNITION", i[i.POINTER_DOWN = 47] = "POINTER_DOWN", i[i.POINTER_MOVE = 48] = "POINTER_MOVE", i[i.POINTER_UP = 49] = "POINTER_UP", i[i.CUSTOM_ERROR = 50] = "CUSTOM_ERROR", i[i.CUSTOM_ELEMENT_REGISTRATION = 54] = "CUSTOM_ELEMENT_REGISTRATION", i[i.REGISTER_ADOPTED_STYLE_SHEET = 60] = "REGISTER_ADOPTED_STYLE_SHEET", i[i.SET_ADOPTED_STYLE_SHEETS = 61] = "SET_ADOPTED_STYLE_SHEETS", i[i.ADOPTED_STYLESHEET_RULE_INSERT = 62] = "ADOPTED_STYLESHEET_RULE_INSERT", i[i.ADOPTED_STYLESHEET_RULE_DELETE = 63] = "ADOPTED_STYLESHEET_RULE_DELETE", i[i.SCREEN_RESIZE = 65] = "SCREEN_RESIZE", i[i.RESOURCE_HASHES = 66] = "RESOURCE_HASHES", i[i.PERFORMANCE_NAVIGATION_TIMING = 67] = "PERFORMANCE_NAVIGATION_TIMING", i[i.PERFORMANCE_RESOURCE_TIMING = 68] = "PERFORMANCE_RESOURCE_TIMING", i[i.RECORDING_INFO_EVENT = 72] = "RECORDING_INFO_EVENT", i[i.TEXT_REF = 73] = "TEXT_REF", i[i.TOUCH_CANCEL = 74] = "TOUCH_CANCEL", i[i.MUTATION_MOVE = 75] = "MUTATION_MOVE", i[i.STYLESHEET_RULE_UPDATE = 76] = "STYLESHEET_RULE_UPDATE", i[i.ADOPTED_STYLESHEET_RULE_UPDATE = 77] = "ADOPTED_STYLESHEET_RULE_UPDATE", i[i.VIDEO_PLAY = 78] = "VIDEO_PLAY", i[i.VIDEO_PAUSE = 79] = "VIDEO_PAUSE", i[i.VIDEO_SEEK = 80] = "VIDEO_SEEK", i[i.ADOPTED_STYLESHEET_DISABLED = 98] = "ADOPTED_STYLESHEET_DISABLED", i[i.STYLESHEET_DISABLED = 99] = "STYLESHEET_DISABLED", i[i.DOM_INITIAL_STATE = 102] = "DOM_INITIAL_STATE", i[i.DOM_PATCH_STATE = 103] = "DOM_PATCH_STATE", i[i.DEBUG = 999] = "DEBUG", i))(kt || {});

    function _o(i) {
        const e = { ...i
        };
        if (i.type === "DOM_INITIAL_STATE") {
            const t = i.state,
                s = {};
            for (const n of Object.keys(t)) {
                const a = t[n],
                    {
                        parent: o,
                        previousSibling: c,
                        metadata: h,
                        ...d
                    } = a;
                s[n] = d
            }
            e.state = s
        } else {
            const t = i.diff,
                s = {};
            for (const n of Object.keys(t)) {
                const a = t[n],
                    {
                        parent: o,
                        previousSibling: c,
                        metadata: h,
                        ...d
                    } = a;
                let f = !1;
                for (const T in d) {
                    f = !0;
                    break
                }
                f && (s[n] = d)
            }
            e.diff = s
        }
        return e
    }
    const d_ = 33,
        E_ = 400,
        Eo = 150,
        vs = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_webRecorder = t, this._PRIVATE_browserEventCallback = () => {}, this._PRIVATE_userEventCallback = () => {}, this._PRIVATE_analysisBrowserEventCallback = () => {}, this._PRIVATE_analysisUserEventCallback = () => {}, this._PRIVATE_throttleRecordingPointerMove = _i(s => {
                        this._PRIVATE_userEventCallback && this._PRIVATE_userEventCallback(s)
                    }, d_), this._PRIVATE_throttleAnalyticsMouseMove = _i(s => {
                        this._PRIVATE_analysisUserEventCallback && this._PRIVATE_analysisUserEventCallback(s)
                    }, E_), this._PRIVATE_debounceAnalysisUserEvent = Cr((s, n) => {
                        if (this._PRIVATE_analysisUserEventCallback) return this._PRIVATE_analysisUserEventCallback(n)
                    }, Eo), this._PRIVATE_debounceAnalysisBrowserEvent = Cr((s, n) => {
                        if (this._PRIVATE_analysisBrowserEventCallback) return this._PRIVATE_analysisBrowserEventCallback(n)
                    }, Eo)
                }
                onInit() {
                    this._PRIVATE_webRecorder.subscribe(t => {
                        var s, n, a, o, c, h, d, f, T, g, p, A, S, v, N, B, $, j;
                        const b = t,
                            {
                                timestamp: st
                            } = b;
                        switch (b.type) {
                            case "DOM_INITIAL_STATE":
                                {
                                    const Y = _o(b),
                                        et = {
                                            type: kt.DOM_INITIAL_STATE,
                                            date: st,
                                            args: [Y.state]
                                        };this._PRIVATE_browserEventCallback(et);
                                    break
                                }
                            case "DOM_PATCH":
                                {
                                    const Y = _o(b),
                                        et = {
                                            type: kt.DOM_PATCH_STATE,
                                            date: st,
                                            args: [Y.diff]
                                        };this._PRIVATE_browserEventCallback(et);
                                    break
                                }
                            case "viewportResize":
                                {
                                    const Y = {
                                            type: kt.RESIZE,
                                            date: st,
                                            args: [b.width, b.height]
                                        },
                                        et = {
                                            type: Rt.RESIZE,
                                            x: b.width,
                                            y: b.height,
                                            d: 188,
                                            ts: st
                                        };this._PRIVATE_debounceAnalysisBrowserEvent(et),
                                    (s = this._PRIVATE_userEventCallback) === null || s === void 0 || s.call(this, Y)
                                }
                                break;
                            case "screenResize":
                                {
                                    const Y = {
                                        type: kt.SCREEN_RESIZE,
                                        date: st,
                                        args: [b.width, b.height]
                                    };
                                    (n = this._PRIVATE_userEventCallback) === null || n === void 0 || n.call(this, Y)
                                }
                                break;
                            case "click":
                                {
                                    const Y = {
                                            type: kt.CLICK,
                                            args: [b.nodeId],
                                            date: st
                                        },
                                        et = {
                                            type: Rt.CLICK,
                                            x: b.pageX,
                                            y: b.pageY,
                                            ts: st,
                                            tgt: b.tgt
                                        };et.xRel = b.xRel,
                                    et.yRel = b.yRel,
                                    (a = this._PRIVATE_userEventCallback) === null || a === void 0 || a.call(this, Y),
                                    (o = this._PRIVATE_analysisUserEventCallback) === null || o === void 0 || o.call(this, et)
                                }
                                break;
                            case "mouseDown":
                                {
                                    const Y = {
                                        type: kt.POINTER_DOWN,
                                        args: [1, "mouse", b.clientX, b.clientY, b.nodeId, 0, {
                                            pageX: b.pageX,
                                            pageY: b.pageY
                                        }],
                                        date: st
                                    };
                                    (c = this._PRIVATE_userEventCallback) === null || c === void 0 || c.call(this, Y),
                                    (h = this._PRIVATE_analysisUserEventCallback) === null || h === void 0 || h.call(this, {
                                        type: Rt.MOUSEDOWN,
                                        x: b.pageX,
                                        y: b.pageY,
                                        ts: st,
                                        tgt: b.tgt
                                    })
                                }
                                break;
                            case "mouseUp":
                                {
                                    const Y = {
                                        type: kt.POINTER_UP,
                                        args: [1, "mouse", b.clientX, b.clientY, b.nodeId, 0],
                                        date: st
                                    };
                                    (d = this._PRIVATE_userEventCallback) === null || d === void 0 || d.call(this, Y),
                                    (f = this._PRIVATE_analysisUserEventCallback) === null || f === void 0 || f.call(this, {
                                        type: Rt.MOUSEUP,
                                        x: b.pageX,
                                        y: b.pageY,
                                        ts: st,
                                        tgt: b.tgt
                                    })
                                }
                                break;
                            case "scroll":
                                this._PRIVATE_debounceAnalysisUserEvent({
                                    type: Rt.SCROLL,
                                    x: b.scrollLeft,
                                    y: b.scrollTop,
                                    d: 188,
                                    ts: st
                                });
                                break;
                            case "mouseMove":
                                {
                                    const Y = {
                                            type: kt.POINTER_MOVE,
                                            args: [1, "mouse", b.clientX, b.clientY],
                                            date: st
                                        },
                                        et = {
                                            type: Rt.MOUSEMOVE,
                                            x: b.pageX,
                                            y: b.pageY,
                                            ts: st
                                        };et.tgtHM = b.tgtHM,
                                    et.xRel = b.xRel,
                                    et.yRel = b.yRel,
                                    this._PRIVATE_throttleRecordingPointerMove(Y),
                                    this._PRIVATE_throttleAnalyticsMouseMove(et)
                                }
                                break;
                            case "mouseOver":
                                {
                                    const Y = {
                                            type: kt.MOUSE_OVER,
                                            args: [b.nodeId],
                                            date: st
                                        },
                                        et = {
                                            ts: st,
                                            type: Rt.MOUSEOVER,
                                            x: b.pageX,
                                            y: b.pageY,
                                            tgt: b.tgt
                                        };
                                    (T = this._PRIVATE_userEventCallback) === null || T === void 0 || T.call(this, Y),
                                    (g = this._PRIVATE_analysisUserEventCallback) === null || g === void 0 || g.call(this, et)
                                }
                                break;
                            case "input":
                                {
                                    (p = this._PRIVATE_analysisUserEventCallback) === null || p === void 0 || p.call(this, {
                                        type: Rt.CHANGE,
                                        tgt: b.tgt,
                                        ts: b.timestamp
                                    });
                                    break
                                }
                            case "inputBlurred":
                                {
                                    const Y = {
                                        type: Rt.FOCUSOUT,
                                        tgt: b.tgt,
                                        ts: b.timestamp
                                    };
                                    (A = this._PRIVATE_analysisUserEventCallback) === null || A === void 0 || A.call(this, Y);
                                    break
                                }
                            case "checkable":
                                {
                                    (S = this._PRIVATE_analysisUserEventCallback) === null || S === void 0 || S.call(this, {
                                        type: Rt.CHANGE,
                                        tgt: b.tgt,
                                        ts: b.timestamp
                                    });
                                    break
                                }
                            case "select":
                                {
                                    (v = this._PRIVATE_analysisUserEventCallback) === null || v === void 0 || v.call(this, {
                                        type: Rt.CHANGE,
                                        tgt: b.tgt,
                                        ts: b.timestamp
                                    });
                                    break
                                }
                            case "inputFocused":
                                {
                                    (N = this._PRIVATE_analysisUserEventCallback) === null || N === void 0 || N.call(this, {
                                        type: Rt.FOCUSIN,
                                        tgt: b.tgt,
                                        ts: b.timestamp
                                    });
                                    break
                                }
                            case "clipboard":
                                {
                                    const Y = Di => {
                                            switch (Di) {
                                                case "copy":
                                                    return Vs.COPY;
                                                case "cut":
                                                    return Vs.CUT;
                                                case "paste":
                                                    return Vs.PASTE;
                                                default:
                                                    return -1
                                            }
                                        },
                                        et = {
                                            type: kt.CLIPBOARD_COMMAND,
                                            date: st,
                                            args: [b.nodeId, Y(b.action)]
                                        };
                                    (B = this._PRIVATE_userEventCallback) === null || B === void 0 || B.call(this, et),
                                    ($ = this._PRIVATE_analysisUserEventCallback) === null || $ === void 0 || $.call(this, {
                                        type: Rt.COMMAND,
                                        tgt: b.tgt,
                                        key: Y(b.action),
                                        ts: b.timestamp
                                    });
                                    break
                                }
                            case "textSelectionChanged":
                                {
                                    const Y = {
                                        type: Rt.TEXT_HIGHLIGHT,
                                        len: b.len,
                                        ts: st
                                    };
                                    (j = this._PRIVATE_analysisUserEventCallback) === null || j === void 0 || j.call(this, Y);
                                    break
                                }
                            case "ecommerceTransaction":
                                break;
                            default:
                                ft.warn(`WebRecorderEventTranslator: Unknown event type ${b.type}`)
                        }
                    })
                }
                onEvent(t, s) {
                    this._PRIVATE_browserEventCallback = t, this._PRIVATE_userEventCallback = s
                }
                onAnalyticsEvent(t, s) {
                    this._PRIVATE_analysisBrowserEventCallback = t, this._PRIVATE_analysisUserEventCallback = s
                }
            }
            return i.$deps = [qe], i
        })(),
        bs = (() => {
            class i {
                constructor() {
                    this._isStarted = !1
                }
                get isStarted() {
                    return this._isStarted
                }
                start(...t) {
                    this._isStarted || (this._isStarted = !0, this.onStart(...t))
                }
                stop() {
                    this._isStarted && (this._isStarted = !1, this.onStop())
                }
                restart() {
                    this.stop(), this.start()
                }
            }
            return i
        })(),
        ot = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                providers: [Et(Pi, e => e.browser, [Ge]), Et(Ts, e => e.analytics, [Ge]), Et(Vn, e => e.init, [Ge]), Et(vn, e => e.settings, [Ge]), X],
                exports: [Pi, Ts, Vn, vn, X]
            })], i), i
        })(),
        fo = (() => {
            class i extends ie {
                constructor(t, s, n, a) {
                    super(t), this.configuration = t, this._PRIVATE_lifeCycleEventsEmitter = s, this._PRIVATE_urlService = n, this._PRIVATE_regexRulesEvaluator = a, this._PRIVATE_recordingUrlRulesUsed = !1
                }
                async refresh() {}
                onInit() {
                    this.configuration.malkaUrlEnabled && this.configuration.hasRecordingUrlRules() && (this._PRIVATE_recordingUrlRulesUsed = !0, this._PRIVATE_regexRulesEvaluator.setRegexRules(this.configuration.recordingUrlRules))
                }
                canTrack() {
                    return !0
                }
                async computeInitialCollectState() {
                    let t = O.ANALYTICS_ONLY,
                        s = Wt.ETR_OFF;
                    return Ue.percentage() < this.configuration.replayRecordingRate ? t = O.RECORDING_GLOBAL_SAMPLING : this._PRIVATE_recordingUrlRulesUsed && this._PRIVATE_regexRulesEvaluator.evaluateUrl(this._PRIVATE_urlService.getAnonymizedUrl()) && (t = O.RECORDING_URL_SAMPLING), this.configuration.malkaEtrEnabled && (s = Wt.ETR_ON), await this._PRIVATE_lifeCycleEventsEmitter.emitCollectStateChange(t, s), t
                }
                async getEligibleCollectState(t) {
                    if (t.collectState === O.RECORDING_GLOBAL_SAMPLING) return O.RECORDING_GLOBAL_SAMPLING;
                    const s = this.configuration.malkaEtrEnabled ? Wt.ETR_ON : Wt.ETR_OFF;
                    return this._PRIVATE_recordingUrlRulesUsed && this._PRIVATE_regexRulesEvaluator.evaluateUrl(this._PRIVATE_urlService.getAnonymizedUrl()) ? (await this._PRIVATE_lifeCycleEventsEmitter.emitCollectStateChange(O.RECORDING_URL_SAMPLING, s), O.RECORDING_URL_SAMPLING) : (await this._PRIVATE_lifeCycleEventsEmitter.emitCollectStateChange(O.ANALYTICS_ONLY, s), O.ANALYTICS_ONLY)
                }
                isReplayRecorded(t) {
                    return t.collectState === O.RECORDING_GLOBAL_SAMPLING || t.collectState === O.RECORDING_URL_SAMPLING || this.configuration.malkaEtrEnabled
                }
                getInitialCollectState() {
                    return O.ANALYTICS_ONLY
                }
            }
            return i.$deps = [X, yt, ve, fi], i
        })(),
        f_ = (() => {
            class i {
                constructor(t, s) {
                    this.domainUri = t, this.path = s, this.beforeRequestCallbacks = [], this.afterRequestCallbacks = []
                }
                setRequestParametersProviders(...t) {
                    this.requestParametersProviders = t
                }
                before(t) {
                    I(this.beforeRequestCallbacks, it(t))
                }
                after(t) {
                    I(this.afterRequestCallbacks, it(t))
                }
                retrieveParameters() {
                    return this.requestParametersProviders ? Ka(this.requestParametersProviders) : Promise.resolve({})
                }
            }
            return i
        })(),
        T_ = (() => {
            let i;
            return function(e) {
                function t(s) {
                    return I(Object.keys(s), Jt(n => `${encodeURIComponent(n)}=${encodeURIComponent(s[n])}`)).join("&")
                }
                e.toQuery = t
            }(i || (i = {})), i
        })(),
        g_ = i => {
            const e = i * 60 * 1e3;
            return `${Math.floor(Date.now()/e)}`
        },
        R_ = 5e3,
        ys = (() => {
            class i extends f_ {
                constructor(t, s, n) {
                    super(t, s), this._PRIVATE_xhrInProgress = null, this._PRIVATE_requestType = (n == null ? void 0 : n.type) || "json", this._PRIVATE_cacheMinutes = n == null ? void 0 : n.cacheMinutes, this._PRIVATE_timeout = n == null ? void 0 : n.timeout
                }
                onLoad(t) {
                    this._PRIVATE_onLoadCallback = t
                }
                onError(t) {
                    this._PRIVATE_onErrorCallback = t
                }
                onTimeout(t, s) {
                    this._PRIVATE_onTimeoutCallback = t, this._PRIVATE_timeout = s
                }
                async send() {
                    this.beforeRequestCallbacks.forEach(a => a());
                    const t = await this.retrieveParameters();
                    this._PRIVATE_addCacheBusting(t);
                    const s = T_.toQuery(t),
                        n = `${this.domainUri}${this.path?`/${this.path}`:""}?${s}`;
                    this._PRIVATE_get(n, this._PRIVATE_requestType)
                }
                abort() {
                    this._PRIVATE_xhrInProgress && (this._PRIVATE_xhrInProgress.abort(), this._PRIVATE_xhrInProgress = null)
                }
                isInProgress() {
                    return this._PRIVATE_xhrInProgress !== null
                }
                _PRIVATE_get(t, s) {
                    var n;
                    const a = new XMLHttpRequest;
                    a.open("GET", t, !0), a.responseType = s, a.onerror = async () => {
                        var o;
                        return await ((o = this._PRIVATE_onErrorCallback) === null || o === void 0 ? void 0 : o.call(this, a))
                    }, a.ontimeout = async () => {
                        var o;
                        return await ((o = this._PRIVATE_onTimeoutCallback) === null || o === void 0 ? void 0 : o.call(this, a))
                    }, a.onload = async () => {
                        var o, c;
                        a.status >= 200 && a.status < 400 ? (await ((o = this._PRIVATE_onLoadCallback) === null || o === void 0 ? void 0 : o.call(this, this._PRIVATE_isAnswerJSON(a, s) ? a.response : a.responseText)), this.afterRequestCallbacks.forEach(h => h())) : await ((c = this._PRIVATE_onErrorCallback) === null || c === void 0 ? void 0 : c.call(this, a))
                    }, a.onloadend = () => {
                        this._PRIVATE_xhrInProgress = null
                    }, a.timeout = (n = this._PRIVATE_timeout) !== null && n !== void 0 ? n : R_, this._PRIVATE_xhrInProgress = a, a.send()
                }
                _PRIVATE_isAnswerJSON(t, s) {
                    const n = t.getResponseHeader("Content-Type");
                    return n === null ? s === "json" : I(n.toLowerCase(), ni("json")) > 0
                }
                _PRIVATE_addCacheBusting(t) {
                    let s;
                    this._PRIVATE_cacheMinutes ? s = `${g_(this._PRIVATE_cacheMinutes)}` : s = I(`${Math.random()}`, Gs(2, 8)), t.r = s
                }
            }
            return i
        })(),
        To = (() => {
            class i extends ie {
                constructor(t, s, n) {
                    super(t), this.configuration = t, this._PRIVATE_lifeCycleEventsEmitter = s, this.browser = n, this._PRIVATE_collectStateOnError = O.RECORDING_GLOBAL_SAMPLING, this._PRIVATE_collectStateOnFatalError = O.QUOTA_REACHED
                }
                async onInit() {
                    const t = await this._PRIVATE_readSessionCookie();
                    if (t !== null && Oa(t)) {
                        const s = Ca(t);
                        this._PRIVATE_initialCollectState = s == null ? void 0 : s.collectState;
                        return
                    }
                    this._PRIVATE_initialCollectState = await this._PRIVATE_fetchCollectStateSafely()
                }
                canTrack() {
                    return this._PRIVATE_initialCollectState !== void 0 && this._PRIVATE_initialCollectState !== O.QUOTA_REACHED
                }
                async refresh() {
                    this._PRIVATE_initialCollectState = await this._PRIVATE_fetchCollectStateSafely(), await this._PRIVATE_emitCollectStateChange()
                }
                async _PRIVATE_readSessionCookie() {
                    try {
                        return await this.browser.cookie.get(gs)
                    } catch (t) {
                        return G.warn(`Quota error - failed to read session cookie: ${t}`), null
                    }
                }
                async computeInitialCollectState() {
                    return this._PRIVATE_initialCollectState ? (await this._PRIVATE_emitCollectStateChange(), this._PRIVATE_initialCollectState) : (G.warn("Quota file error computeInitialCollectState() called before quota answered"), O.QUOTA_REACHED)
                }
                async getEligibleCollectState(t) {
                    switch (t.collectState) {
                        case O.QUOTA_REACHED:
                        case O.RECORDING_RULES_TARGETING:
                        case O.ANALYTICS_ONLY_RULES_TARGETING:
                        case O.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING:
                        case O.RECORDING_GLOBAL_SAMPLING:
                            return t.collectState;
                        default:
                            return O.ANALYTICS_ONLY
                    }
                }
                isReplayRecorded(t) {
                    return t.collectState === O.RECORDING_GLOBAL_SAMPLING || t.collectState === O.RECORDING_RULES_TARGETING
                }
                getInitialCollectState() {
                    return this._PRIVATE_initialCollectState || O.QUOTA_REACHED
                }
                async _PRIVATE_emitCollectStateChange() {
                    await this._PRIVATE_lifeCycleEventsEmitter.emitCollectStateChange(this.getInitialCollectState(), this.configuration.malkaEtrEnabled ? Wt.ETR_ON : Wt.ETR_OFF)
                }
                _PRIVATE_createQuotaRequest() {
                    return new ys(this.configuration.getSettingsFileUri(), "", {
                        type: "json",
                        cacheMinutes: 15
                    })
                }
                async _PRIVATE_fetchCollectStateSafely() {
                    try {
                        return await this._PRIVATE_fetchCollectState()
                    } catch (t) {
                        return G.warn(`Quota error - unexpected: ${t}`), this._PRIVATE_collectStateOnFatalError
                    }
                }
                _PRIVATE_fetchCollectState() {
                    const t = this._PRIVATE_createQuotaRequest();
                    return new Promise((s, n) => {
                        t.onError(a => s(this._PRIVATE_collectStateOnErrorFor(`HTTP:${a.status} - fetching quota file for pid: ${this.configuration.projectId}`))), t.onTimeout(() => s(this._PRIVATE_collectStateOnErrorFor("timeout"))), t.onLoad(a => {
                            try {
                                s(this._PRIVATE_collectStateFromResponse(a))
                            } catch (o) {
                                n(o)
                            }
                        }), t.send().catch(n)
                    })
                }
                _PRIVATE_collectStateFromResponse(t) {
                    var s;
                    return !((s = t == null ? void 0 : t.quotas) === null || s === void 0) && s.length ? this._PRIVATE_processCollectState(t) : this._PRIVATE_collectStateOnErrorFor("Quota types missing from config file")
                }
                _PRIVATE_collectStateOnErrorFor(t) {
                    const s = `Quota error - ${t}`;
                    return G.warn(s), this._PRIVATE_collectStateOnError
                }
                _PRIVATE_processCollectState(t) {
                    let s = !1,
                        n = !1;
                    for (const a of t.quotas) a.quotaType === "ANALYTICS" && a.value ? s = !0 : a.quotaType === "RECORDING" && a.value && Ue.boolean(Math.round(a.value * 100)) && (n = !0);
                    return !s && n ? this._PRIVATE_collectStateOnErrorFor(`Quota types impossible: replay without analytics - ${Lt.stringify(t)}`) : s && n ? O.RECORDING_GLOBAL_SAMPLING : s && !n ? O.ANALYTICS_ONLY : O.QUOTA_REACHED
                }
            }
            return i.$deps = [X, yt, Pi], i
        })(),
        be = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                providers: [Et(Ct, () => new Ct), Et(us, e => new us(e), [Ct])],
                exports: [Ct, us]
            })], i), i
        })(),
        ye = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_maxScrollRateService = t, this.extensionApi = s
                }
                onInit() {
                    k.updateFromContext(this.extensionApi.init.context), k.init(this._PRIVATE_maxScrollRateService)
                }
            };
            return i.$deps = [Ss, Ge], i = x([Z({
                imports: [ot, be],
                providers: [ve, Ss],
                exports: [ve, Ss]
            })], i), i
        })(),
        Xt = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                providers: [yt],
                exports: [yt]
            })], i), i
        })(),
        xn = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                imports: [ot, Xt, ye],
                providers: [fo, To, Et(fi, () => new fi), Et(ie, async (e, t) => e.resolve(t.isQuotaEnabled() ? To : fo), [ii, X])],
                exports: [ie]
            })], i), i
        })(),
        ws = (() => {
            let i = class {
                constructor(t) {
                    this._PRIVATE_cookieService = t
                }
                async onInit() {
                    await this._PRIVATE_cookieService.init()
                }
            };
            return i.$deps = [Se], i = x([Z({
                imports: [ot],
                providers: [Se],
                exports: [Se]
            })], i), i
        })(),
        se = (() => {
            let i = class {
                constructor(t) {
                    this._PRIVATE_sessionService = t
                }
                onInit() {
                    G.setSessionService(this._PRIVATE_sessionService)
                }
            };
            return i.$deps = [Mt], i = x([Z({
                imports: [ot, ws, xn],
                providers: [bn, Mt],
                exports: [bn, Mt]
            })], i), i
        })(),
        Ke = Zt("DefaultRequestParametersGroup"),
        wi = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                imports: [ot, se],
                providers: [Et(Ke, (e, t) => new Xe(e, t), [X, Mt])],
                exports: [Ke]
            })], i), i
        })();
    var p_ = {
        ENV: "production",
        VERSION: "1.41.12",
        COMPRESSION_ALGORITHM: "gzip",
        RECORDING_PLAYER: !1
    };
    const m_ = 500,
        I_ = "v2/events",
        Ln = (() => {
            class i extends bs {
                constructor(t, s, n, a, o, c, h, d) {
                    super(), this.defaultParams = t, this._PRIVATE_maxScrollRateService = s, this._PRIVATE_configuration = n, this._PRIVATE_postRequestFactory = a, this._PRIVATE_sessionService = o, this._PRIVATE_sessionRenewer = c, this._PRIVATE_analysisEventsBatch = h, this._PRIVATE_eventTranslator = d, this._PRIVATE_flushIntervalId = null, this._PRIVATE_currentFlush = null, this._PRIVATE_onBrowserEvent = f => {
                        if (this.isStarted) return this._PRIVATE_processBrowserEvent(f)
                    }, this._PRIVATE_onUserEvent = f => {
                        if (this.isStarted) return this._PRIVATE_processUserEvent(f)
                    }
                }
                onInit() {
                    this._PRIVATE_parameterProviders = new Xe(this.defaultParams, this._PRIVATE_maxScrollRateService), this._PRIVATE_analyticsRequest = this._PRIVATE_postRequestFactory.create(`${this._PRIVATE_configuration.getTrackerUri()}/${I_}`, "base64"), this._PRIVATE_bindTrackers()
                }
                onPageviewEnd() {
                    this.stop()
                }
                async onAfterPageView() {
                    await this._PRIVATE_sessionService.shouldStartAnalytics() && this.start()
                }
                onStart() {
                    this._PRIVATE_resetStartTime(), this._PRIVATE_flushIntervalId = setInterval(() => {
                        this.pushEvents()
                    }, m_)
                }
                onStop() {
                    this._PRIVATE_flushIntervalId !== null && (clearInterval(this._PRIVATE_flushIntervalId), this._PRIVATE_flushIntervalId = null), this._PRIVATE_drainEventsBatch().catch(t => {
                        G.error(t, "AnalyticsServiceDrainEventsBatchError")
                    })
                }
                _PRIVATE_resetStartTime() {
                    this._PRIVATE_startTime = performance.now()
                }
                _PRIVATE_bindTrackers() {
                    this._PRIVATE_eventTranslator.onAnalyticsEvent(this._PRIVATE_onBrowserEvent, this._PRIVATE_onUserEvent)
                }
                async _PRIVATE_processBrowserEvent(t) {
                    await this._PRIVATE_sessionRenewer.isSessionValid() && this._PRIVATE_analysisEventsBatch.addEvent(this._PRIVATE_addTimestamp(t))
                }
                async _PRIVATE_processUserEvent(t) {
                    await this._PRIVATE_sessionRenewer.refreshSession(), await this._PRIVATE_sessionRenewer.isSessionValid() && this._PRIVATE_analysisEventsBatch.addEvent(this._PRIVATE_addTimestamp(t))
                }
                async pushEvents() {
                    if (this._PRIVATE_currentFlush) return this._PRIVATE_currentFlush;
                    if (this._PRIVATE_analysisEventsBatch.eventsCount() > 0) try {
                        this._PRIVATE_currentFlush = this._PRIVATE_doSendEvents(), await this._PRIVATE_currentFlush
                    } catch (t) {
                        G.error(t, "AnalyticsServicePushEventsError")
                    } finally {
                        this._PRIVATE_currentFlush = null
                    }
                }
                async _PRIVATE_doSendEvents() {
                    const t = this._PRIVATE_analysisEventsBatch.getEvents();
                    this._PRIVATE_analysisEventsBatch.clearEvents();
                    try {
                        const s = await this._PRIVATE_parameterProviders.getRequestParameters();
                        this._PRIVATE_analyticsRequest.setQueryParams({ ...s,
                            v: p_.VERSION,
                            str: "0",
                            di: "1",
                            dc: "1",
                            fl: "1"
                        }), this._PRIVATE_analyticsRequest.send(t)
                    } catch (s) {
                        const n = this._PRIVATE_analysisEventsBatch.getEvents();
                        this._PRIVATE_analysisEventsBatch.clearEvents();
                        for (const a of t) this._PRIVATE_analysisEventsBatch.addEvent(a);
                        for (const a of n) this._PRIVATE_analysisEventsBatch.addEvent(a);
                        this._PRIVATE_analyticsRequest.removeQueryParams(), G.error(s, "AnalyticsServiceDoSendEventsError");
                        return
                    }
                    this._PRIVATE_analyticsRequest.removeQueryParams()
                }
                async _PRIVATE_drainEventsBatch() {
                    for (this._PRIVATE_currentFlush && await this._PRIVATE_currentFlush; this._PRIVATE_analysisEventsBatch.eventsCount() > 0;) await this.pushEvents(), this._PRIVATE_currentFlush && await this._PRIVATE_currentFlush
                }
                _PRIVATE_getRelativeTime() {
                    return Math.round(performance.now() - this._PRIVATE_startTime)
                }
                _PRIVATE_addTimestamp(t) {
                    return t.ts = this._PRIVATE_getRelativeTime(), t
                }
            }
            return i.$deps = [Ke, Ss, X, We, Mt, je, kn, vs], i
        })(),
        Un = (() => {
            let i = class {
                constructor(t) {
                    this._PRIVATE_userConsentService = t
                }
                async onInit() {
                    await this._PRIVATE_userConsentService.init()
                }
            };
            return i.$deps = [Si], i = x([Z({
                imports: [ot, ws],
                providers: [Si],
                exports: [Si]
            })], i), i
        })(),
        A_ = Lt.stringify,
        zn = (() => {
            class i {
                constructor() {
                    this._PRIVATE_events = []
                }
                addEvent(t) {
                    this._PRIVATE_events.push(t)
                }
                addEventByTimestamp(t) {
                    let s = 0;
                    for (; s < this._PRIVATE_events.length && !(this._PRIVATE_events[s].date >= t.date); s += 1);
                    this._PRIVATE_events.splice(s, 0, t)
                }
                eventsCount() {
                    return this._PRIVATE_events.length
                }
                clearEvents() {
                    this._PRIVATE_events = []
                }
                getEvents() {
                    return this._PRIVATE_events
                }
                extractEvents(...t) {
                    const s = [],
                        n = [];
                    return this._PRIVATE_events.forEach(a => {
                        I(t, Mc(a.type)) !== -1 ? I(s, it(a)) : I(n, it(a))
                    }), this._PRIVATE_events = n, s
                }
                stringifyEvents() {
                    return A_(this._PRIVATE_events)
                }
            }
            return i.$deps = [], x([ji()], i.prototype, "addEvent", null), i
        })(),
        go = Zt("UrlRegexRulesEvaluator"),
        Ni = (() => {
            let i = class {
                constructor(t) {
                    this._PRIVATE_anonymizedTextStateService = t
                }
                onInit() {
                    this._PRIVATE_anonymizedTextStateService.init()
                }
            };
            return i.$deps = [Ti], i = x([Z({
                imports: [ot, ye, be, Un],
                providers: [Cn, zn, Ps, Et(He, (e, t) => new He(!1, t.whitelistedAttributes, e, null, !0), [Ct, X]), Et(qe, (e, t) => new qe([e], [t]), [Ps, He]), vs, Et(go, () => new fi), Et(Ti, (e, t, s, n) => new Ti(e, t, s, n), [X, ve, go, Si])],
                exports: [Cn, zn, Ps, He, qe, vs, Ti]
            })], i), i
        })(),
        P_ = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                imports: [ot],
                providers: [Nn],
                exports: [Nn]
            })], i), i
        })();
    var S_ = {
        VERSION: "1.41.12"
    };
    const $n = (() => {
            class i {
                constructor(t, s) {
                    this._PRIVATE_configuration = t, this._PRIVATE_pii = s
                }
                getRequestParameters() {
                    var t;
                    return {
                        d: `${mt.now()}`,
                        p: this._PRIVATE_pii.anonymizePII(((t = k.location) === null || t === void 0 ? void 0 : t.href) || ""),
                        v: S_.VERSION,
                        ...this._PRIVATE_configuration.getRequestParameters()
                    }
                }
            }
            return i.$deps = [X, Ct], i
        })(),
        we = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                imports: [ot, be, P_],
                providers: [Et(Ye, e => kh.create(G.warn, e), [Nn]), $n, We],
                exports: [Ye, $n, We]
            })], i), i
        })(),
        Ro = "_cs_last_customer_id",
        V_ = (() => {
            class i {
                constructor(t, s) {
                    this._PRIVATE_cookieService = t, this._PRIVATE_visitorCookieTimeout = s
                }
                async getLastCustomerId() {
                    return await this._PRIVATE_cookieService.get(Ro) || null
                }
                async storeLastCustomerId(t) {
                    const s = new Date(mt.now() + this._PRIVATE_visitorCookieTimeout);
                    await this._PRIVATE_cookieService.set(Ro, t, s)
                }
            }
            return i
        })(),
        Fn = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_compressor = t, this._PRIVATE_batch = []
                }
                add(t) {
                    this._PRIVATE_batch.push(t), this.setBatchReadyCall()
                }
                clear() {
                    this._PRIVATE_batch = []
                }
                onBatchReady(t) {
                    this._PRIVATE_batchReadyCallback = t
                }
                getRequestParameters() {
                    const t = {};
                    for (const s of this._PRIVATE_batch) t[s.key] = s.value;
                    return {
                        dv: this._PRIVATE_compressor.compressSync(Lt.stringify(t), "base64"),
                        ct: this._PRIVATE_compressor.algorithm
                    }
                }
                setBatchReadyCall() {
                    var t;
                    (t = this._PRIVATE_batchReadyCallback) === null || t === void 0 || t.call(this)
                }
            }
            return i.$deps = [Ye], x([en({
                wait: 0,
                mode: "trailing"
            }), pt("dynamicVariablesBatchReady")], i.prototype, "setBatchReadyCall", null), i
        })();
    var v_ = {
        VERSION: "1.41.12"
    };
    const b_ = "dvar",
        Ns = (() => {
            class i extends bs {
                constructor(t, s, n, a) {
                    super(), this._PRIVATE_batch = t, this._PRIVATE_pii = s, this._PRIVATE_configuration = n, this.basicParameters = a, this._PRIVATE_dynamicVariablesQueue = []
                }
                onInit() {
                    this._PRIVATE_request = new ys(this._PRIVATE_configuration.getTrackerUri(), b_), this._PRIVATE_request.setRequestParametersProviders(this.basicParameters, this._PRIVATE_batch, {
                        getRequestParameters: () => ({
                            v: v_.VERSION
                        })
                    }), this._PRIVATE_batch.onBatchReady(() => this._PRIVATE_request.send()), this._PRIVATE_request.after(() => this._PRIVATE_batch.clear())
                }
                onAfterPageView() {
                    this.start()
                }
                onStart() {
                    this._PRIVATE_dynamicVariablesQueue.forEach(t => this._PRIVATE_trackValidDynamicVariable(t.key, t.value)), this._PRIVATE_dynamicVariablesQueue = []
                }
                onStop() {}
                _PRIVATE_trackValidDynamicVariable(t, s) {
                    const n = this._PRIVATE_pii.anonymizePII(t),
                        a = ui(s) ? s : this._PRIVATE_pii.anonymizePII(s);
                    this._PRIVATE_batch.add(new pn(n, a))
                }
                trackDynamicVariable(t, s) {
                    if (pn.isKeyValid(t) && pn.isValueValid(s)) {
                        if (!this.isStarted) {
                            this._PRIVATE_dynamicVariablesQueue.push({
                                key: t,
                                value: s
                            });
                            return
                        }
                        this._PRIVATE_trackValidDynamicVariable(t, s)
                    }
                }
            }
            return i.$deps = [Fn, Ct, X, Ke], i
        })(),
        po = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_service = t, this._PRIVATE_lifeCycleEventsEmitter = s
                }
                onInit() {
                    this._PRIVATE_lifeCycleEventsEmitter.addListener(this._PRIVATE_service)
                }
            };
            return i.$deps = [Ns, yt], i = x([Z({
                imports: [ot, Xt, be, we, wi],
                providers: [Fn, Ns],
                exports: [Ns, Fn]
            })], i), i
        })(),
        Ci = (() => {
            let i = class {
                constructor(t, s, n) {
                    this._PRIVATE_visitorService = t, this._PRIVATE_lifeCycleEventsEmitter = s, this.defaultRequestParameters = n
                }
                onInit() {
                    G.setVisitorService(this._PRIVATE_visitorService), this._PRIVATE_lifeCycleEventsEmitter.addListener(this._PRIVATE_visitorService), this.defaultRequestParameters.addProvider(this._PRIVATE_visitorService)
                }
            };
            return i.$deps = [Ve, yt, Ke], i = x([Z({
                imports: [ot, Xt, ws, se, po, wi],
                providers: [wn, Et(Rs, (e, t, s, n, a) => {
                    var o, c;
                    const h = (c = (o = n == null ? void 0 : n.data) === null || o === void 0 ? void 0 : o.customer) === null || c === void 0 ? void 0 : c.id;
                    return h ? new Rs(a.shopifyCustomerMappingEndpoint, h, new V_(t, e.visitorCookieTimeout), s) : null
                }, [X, Se, Ns, Vn, vn]), Ve, je],
                exports: [Ve, wn, Rs, je]
            })], i), i
        })(),
        y_ = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_analyticsService = t, this._PRIVATE_lifeCycleEventsEmitter = s
                }
                onInit() {
                    this._PRIVATE_lifeCycleEventsEmitter.addListener(this._PRIVATE_analyticsService)
                }
            };
            return i.$deps = [Ln, yt], i = x([Z({
                imports: [ot, Xt, ye, we, se, Ci, wi, Ni],
                providers: [kn, Ln],
                exports: [Ln, kn]
            })], i), i
        })(),
        Oi = (() => {
            class i extends Is {
                constructor(t) {
                    super(), this._PRIVATE_pageViewService = t, this._PRIVATE_trackingEmitted = !1, this._PRIVATE_interceptors = []
                }
                addInterceptor(t) {
                    this._PRIVATE_interceptors.push(t)
                }
                onPageviewStart() {
                    this._PRIVATE_trackingEmitted = !1
                }
                async startDataCollection(t = !1) {
                    await this._PRIVATE_interceptors.reduceRight((n, a) => o => a.intercept(n, o), n => this._PRIVATE_doStart(n))(t)
                }
                async _PRIVATE_doStart(t) {
                    (t || !this._PRIVATE_trackingEmitted) && (this._PRIVATE_trackingEmitted = !0, t ? await this._PRIVATE_pageViewService.sendPageviewRenewal() : await this._PRIVATE_pageViewService.sendNaturalPageview())
                }
            }
            return i.$deps = [ms], i
        })(),
        Hn = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                providers: [vi],
                exports: [vi]
            })], i), i
        })(),
        mo = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                imports: [ot, Xt, ye, we, se, Ci, Un],
                providers: [ms],
                exports: [ms]
            })], i), i
        })(),
        Io = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_bootstrapService = t, this._PRIVATE_pageviewLifecycleEmitter = s
                }
                onInit() {
                    this._PRIVATE_pageviewLifecycleEmitter.addListener(this._PRIVATE_bootstrapService)
                }
            };
            return i.$deps = [Oi, vi], i = x([Z({
                imports: [ot, mo, Hn],
                providers: [Oi, gc(Is, Oi)],
                exports: [Oi, Is]
            })], i), i
        })(),
        qn = (() => {
            class i {
                constructor(t, s) {
                    this._PRIVATE_configuration = t, this._PRIVATE_basicLogRequestParameter = s
                }
                init() {
                    this._PRIVATE_request = new ys(this._PRIVATE_configuration.getLoggerUri()), this._PRIVATE_request.setRequestParametersProviders(this, this._PRIVATE_basicLogRequestParameter)
                }
                send(t) {
                    this._PRIVATE_log = t, this._PRIVATE_request.send()
                }
                getRequestParameters() {
                    return {
                        a: this._PRIVATE_log.app,
                        l: this._PRIVATE_log.level,
                        m: this._PRIVATE_log.message,
                        s: this._PRIVATE_log.stacktrace
                    }
                }
            }
            return i.$deps = [X, $n], i
        })(),
        Ao = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_loggerRequest = t, this._PRIVATE_configuration = s
                }
                onInit() {
                    this._PRIVATE_loggerRequest.init(), G.setRequest(this._PRIVATE_loggerRequest), G.computeIsActive(this._PRIVATE_configuration.validationRate), xc(G), cl(G)
                }
            };
            return i.$deps = [qn, X], i = x([Z({
                imports: [ot, we],
                providers: [qn],
                exports: [qn]
            })], i), i
        })();
    var w_ = {
        VERSION: "1.41.12"
    };
    const Gn = (() => {
            class i extends bs {
                constructor(t, s, n, a, o, c, h) {
                    super(), this._PRIVATE_pii = t, this._PRIVATE_sessionRenewer = s, this._PRIVATE_configuration = n, this._PRIVATE_visitorService = a, this._PRIVATE_sessionService = o, this._PRIVATE_urlService = c, this._PRIVATE_webRecorder = h, this._PRIVATE_transactionsQueue = [], this._PRIVATE_restoredRequestParameters = null, this.clear()
                }
                onInit() {
                    this._PRIVATE_transactionRequest = new ys(`${this._PRIVATE_configuration.getTrackerUri()}/transaction`), this._PRIVATE_othersRequestParameters = new Xe(this._PRIVATE_configuration, this._PRIVATE_visitorService, this._PRIVATE_sessionService, this._PRIVATE_urlService), this._PRIVATE_transactionRequest.setRequestParametersProviders(new Xe(this)), this._PRIVATE_transactionRequest.after(() => this.clear()), this._PRIVATE_webRecorder.subscribe(t => {
                        t.type === "ecommerceTransaction" && this._PRIVATE_handleEcommerceTransaction(t)
                    })
                }
                async _PRIVATE_handleEcommerceTransaction(t) {
                    try {
                        this.addTransaction(t), await this.sendTransaction()
                    } catch (s) {
                        G.error(s, "shopify_transaction_send_error")
                    }
                }
                onStart() {
                    const t = [...this._PRIVATE_transactionsQueue];
                    this._PRIVATE_transactionsQueue = [], t.forEach(s => {
                        this._PRIVATE_transaction = s.transaction, this._PRIVATE_transactionItems = s.transactionItems, this._PRIVATE_restoredRequestParameters = s.requestParameters || null, this.sendTransaction()
                    })
                }
                onStop() {}
                addTransaction(t) {
                    const s = this._PRIVATE_pii.anonymizeFields(t, ["id"]);
                    this._PRIVATE_transaction = cs.from(s)
                }
                getTransaction() {
                    return this._PRIVATE_transaction
                }
                async sendTransaction() {
                    if (!this.isStarted) {
                        const t = await this._PRIVATE_othersRequestParameters.getRequestParameters();
                        this._PRIVATE_transactionsQueue.push({
                            transaction: this._PRIVATE_transaction,
                            transactionItems: [...this._PRIVATE_transactionItems],
                            requestParameters: t
                        }), this.clear();
                        return
                    }
                    if (await this._PRIVATE_sessionRenewer.refreshSession(), !!await this._PRIVATE_sessionRenewer.isSessionValid()) {
                        if (!this._PRIVATE_transaction.hasValidRevenue()) {
                            G.warn("Transaction Service: unable to send transaction with invalid parameters");
                            return
                        }
                        await this._PRIVATE_transactionRequest.send(), nt.counters.transactions.count("sent")
                    }
                }
                addItem(t) {
                    const s = this._PRIVATE_pii.anonymizeFields(t, ["id", "name", "sku", "category"]),
                        n = ls.from(s);
                    n !== null && this._PRIVATE_transactionItems.push(n)
                }
                getItems() {
                    return this._PRIVATE_transactionItems
                }
                clear() {
                    this._PRIVATE_transaction = cs.from({
                        revenue: NaN
                    }), this._PRIVATE_transactionItems = [], this._PRIVATE_restoredRequestParameters = null
                }
                async getRequestParameters() {
                    var t;
                    const s = (t = this._PRIVATE_restoredRequestParameters) !== null && t !== void 0 ? t : await this._PRIVATE_othersRequestParameters.getRequestParameters(),
                        n = {
                            id: this._PRIVATE_transaction.id || "",
                            revenue: `${this._PRIVATE_transaction.revenue}`,
                            v: w_.VERSION,
                            ...s || {}
                        };
                    return q(this._PRIVATE_transaction.tax) && (n.tax = `${this._PRIVATE_transaction.tax}`), q(this._PRIVATE_transaction.shipping) && (n.shipping = `${this._PRIVATE_transaction.shipping}`), q(this._PRIVATE_transaction.currency) && (n.cu = `${this._PRIVATE_transaction.currency}`), n.items = Lt.stringify(this._PRIVATE_transactionItems), n
                }
            }
            return i.$deps = [Ct, je, X, Ve, Mt, ve, qe], i
        })(),
        N_ = (() => {
            let i = class {
                constructor(t) {
                    this._PRIVATE_transactionService = t
                }
                onInit() {
                    this._PRIVATE_transactionService.start()
                }
            };
            return i.$deps = [Gn], i = x([Z({
                imports: [ot, ye, be, se, Ci, Ni],
                providers: [Gn],
                exports: [Gn]
            })], i), i
        })();
    var C_ = {
        VERSION: "1.41.12"
    };
    const Po = (() => {
            class i extends Ws {
                constructor(t, s, n) {
                    const a = t.create(n.getMetricsUri(), void 0, void 0, !0),
                        o = () => ({
                            p: s.anonymizePII(k.location.pathname),
                            pid: n.projectId,
                            v: C_.VERSION
                        });
                    super(a.send.bind(a), o)
                }
            }
            return i.$deps = [We, Ct, X], i
        })(),
        O_ = 65536,
        D_ = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_configuration = t, this._PRIVATE_metricsService = s
                }
                onInit() {
                    const t = this._PRIVATE_configuration.validationRate / 10,
                        s = this._PRIVATE_configuration.environment === "staging";
                    !Ue.boolean(t) && !s || (nt.setService(this._PRIVATE_metricsService), nt.counters.tagSegments.set(O_))
                }
            };
            return i.$deps = [X, Po], i = x([Z({
                imports: [ot, be, we, Ao],
                providers: [Po]
            })], i), i
        })(),
        M_ = (() => {
            class i {
                constructor() {
                    this._PRIVATE_index = 1
                }
                getCurrentIndex() {
                    return this._PRIVATE_index
                }
                increment() {
                    this._PRIVATE_index += 1
                }
                reset() {
                    this._PRIVATE_index = 1
                }
                getRequestParameters() {
                    return {
                        ri: `${this._PRIVATE_index}`
                    }
                }
            }
            return i
        })();
    var k_ = {
        ENV: "production",
        VERSION: "1.41.12",
        COMPRESSION_ALGORITHM: "gzip",
        RECORDING_PLAYER: !1
    };
    const x_ = 500,
        L_ = "v2/recording",
        Bn = (() => {
            class i extends bs {
                constructor(t, s, n, a, o, c, h, d, f) {
                    super(), this.defaultParams = t, this._PRIVATE_configuration = s, this._PRIVATE_postRequestFactory = n, this._PRIVATE_sessionService = a, this._PRIVATE_sessionRenewer = o, this._PRIVATE_recordingBatch = c, this._PRIVATE_eventTranslator = h, this._PRIVATE_anonymizedTextStateService = d, this._PRIVATE_anonymizedTextProcessor = f, this._PRIVATE_requestIndex = new M_, this._PRIVATE_recordingStartTimestamp = 0, this._PRIVATE_flushIntervalId = null, this._PRIVATE_currentFlush = null
                }
                onInit() {
                    this._PRIVATE_parameterProviders = new Xe(this.defaultParams, {
                        getRequestParameters: async () => {
                            const t = await this._PRIVATE_sessionService.getCollectState(),
                                s = {};
                            return t && (s.rt = t), s
                        }
                    }), this._PRIVATE_recordingRequest = this._PRIVATE_postRequestFactory.create(`${this._PRIVATE_configuration.getRecordingUri()}/${L_}`, "byteArray"), this._PRIVATE_bindTrackers()
                }
                async onPageviewEnd() {
                    await this.pushEvents(), this.stop()
                }
                async onAfterPageView() {
                    await this._PRIVATE_sessionService.shouldStartSessionReplay() && this.start()
                }
                async onTargetingRulesMatched() {
                    await this._PRIVATE_sessionService.shouldStartSessionReplay() && this.start()
                }
                onStart() {
                    this._PRIVATE_recordingStartTimestamp = mt.now();
                    const t = this._PRIVATE_anonymizedTextStateService.shouldUseAnonymization();
                    this._PRIVATE_anonymizedTextProcessor.setAnonymization(t), t && nt.counters.pageAnonymisation.count("shopify-anonymized-on-pageview"), this._PRIVATE_flushIntervalId = setInterval(() => {
                        this.pushEvents()
                    }, x_)
                }
                onStop() {
                    this._PRIVATE_flushIntervalId !== null && (clearInterval(this._PRIVATE_flushIntervalId), this._PRIVATE_flushIntervalId = null), this._PRIVATE_requestIndex.reset()
                }
                async onCollectStateChange(t, s) {
                    t === O.QUOTA_REACHED || t === O.ANALYTICS_ONLY && s === Wt.ETR_OFF ? (this._PRIVATE_recordingBatch.clearEvents(), this.stop()) : await this.pushEvents()
                }
                _PRIVATE_bindTrackers() {
                    this._PRIVATE_eventTranslator.onEvent(t => {
                        this.isStarted && this._PRIVATE_processBrowserEvent(t)
                    }, t => {
                        this.isStarted && this._PRIVATE_processUserEvent(t)
                    })
                }
                _PRIVATE_safeEmitDebugEvent(t) {}
                async pushEvents() {
                    if (this._PRIVATE_currentFlush) return this._PRIVATE_currentFlush;
                    if (this._PRIVATE_recordingBatch.eventsCount() > 0)
                        if (this.isStarted) try {
                            this._PRIVATE_currentFlush = this._PRIVATE_doSendEvents(), await this._PRIVATE_currentFlush
                        } catch (t) {
                            G.error(t, "RecordingServicePushEventsError")
                        } finally {
                            this._PRIVATE_currentFlush = null
                        } else this._PRIVATE_recordingBatch.clearEvents()
                }
                async _PRIVATE_doSendEvents() {
                    const t = this._PRIVATE_recordingBatch.getEvents();
                    this._PRIVATE_recordingBatch.clearEvents();
                    const s = this._PRIVATE_requestIndex.getCurrentIndex();
                    try {
                        const n = await this._PRIVATE_parameterProviders.getRequestParameters();
                        if (!this.isStarted) return;
                        this._PRIVATE_recordingRequest.setQueryParams({ ...n,
                            v: k_.VERSION,
                            rst: this._PRIVATE_recordingStartTimestamp.toString(),
                            let: t[t.length - 1].date.toString(),
                            ri: s.toString()
                        }), this._PRIVATE_recordingRequest.send(t)
                    } catch (n) {
                        for (const a of t) this._PRIVATE_recordingBatch.addEventByTimestamp(a);
                        this._PRIVATE_recordingRequest.removeQueryParams(), G.error(n, "RecordingServiceDoSendEventsError");
                        return
                    }
                    this._PRIVATE_requestIndex.increment(), this._PRIVATE_recordingRequest.removeQueryParams()
                }
                async _PRIVATE_processBrowserEvent(t) {
                    await this._PRIVATE_sessionRenewer.isSessionValid() && this._PRIVATE_recordingBatch.addEvent(t)
                }
                async _PRIVATE_processUserEvent(t) {
                    await this._PRIVATE_sessionRenewer.refreshSession(), await this._PRIVATE_sessionRenewer.isSessionValid() && this._PRIVATE_recordingBatch.addEvent(t)
                }
            }
            return i.$deps = [Ke, X, We, Mt, je, zn, vs, Ti, He], i
        })(),
        U_ = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_recordingService = t, this._PRIVATE_lifeCycleEventsEmitter = s
                }
                onInit() {
                    this._PRIVATE_lifeCycleEventsEmitter.addListener(this._PRIVATE_recordingService)
                }
            };
            return i.$deps = [Bn, yt], i = x([Z({
                imports: [ot, Xt, we, se, Ci, wi, Ni],
                providers: [Bn],
                exports: [Bn]
            })], i), i
        })(),
        Yn = (() => {
            class i {
                constructor(t) {
                    this._PRIVATE_webRecorder = t
                }
                onPageviewReady() {
                    this._PRIVATE_webRecorder.activate()
                }
                onPageviewEnd() {
                    this._PRIVATE_webRecorder.deactivate()
                }
            }
            return i.$deps = [qe], i
        })(),
        z_ = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_webRecorderLifecycleService = t, this._PRIVATE_lifeCycleEventsEmitter = s
                }
                onInit() {
                    this._PRIVATE_lifeCycleEventsEmitter.addListener(this._PRIVATE_webRecorderLifecycleService)
                }
            };
            return i.$deps = [Yn, yt], i = x([Z({
                imports: [Xt, Ni],
                providers: [Yn],
                exports: [Yn]
            })], i), i
        })(),
        Wn = (() => {
            class i {
                constructor(t, s, n, a, o) {
                    this._PRIVATE_configuration = t, this._PRIVATE_lifeCycleEventsEmitter = s, this._PRIVATE_collectState = n, this._PRIVATE_urlService = a, this._PRIVATE_sessionService = o, this._PRIVATE_hasMatched = !1, this._PRIVATE_armed = !1, this._PRIVATE_pageviewGeneration = 0, this._PRIVATE_onMatched = async (c, h) => {
                        if (h !== this._PRIVATE_pageviewGeneration || this._PRIVATE_hasMatched || (this._PRIVATE_hasMatched = c, !this._PRIVATE_hasMatched) || (await this._PRIVATE_updateState(), h !== this._PRIVATE_pageviewGeneration)) return;
                        const d = this._PRIVATE_pendingNext;
                        this._PRIVATE_pendingNext = void 0, d && await d(!1)
                    }
                }
                onInit() {
                    this._PRIVATE_targetingRulesEvaluator = new Ju(G), this._PRIVATE_configuration.recordTargetingRules && this._PRIVATE_targetingRulesEvaluator.setTargetingRules(this._PRIVATE_configuration.recordTargetingRules)
                }
                onPageviewStart() {
                    this._PRIVATE_hasMatched = !1, this._PRIVATE_armed = !0, this._PRIVATE_pendingNext = void 0, this._PRIVATE_pageviewGeneration++
                }
                async intercept(t, s) {
                    const n = this._PRIVATE_pageviewGeneration;
                    if (s) {
                        this._PRIVATE_hasMatched && await t(!0);
                        return
                    }
                    if (this._PRIVATE_hasMatched) {
                        await t(!1);
                        return
                    }
                    if (await this._PRIVATE_isSessionInFinalTargetingState()) {
                        this._PRIVATE_hasMatched = !0, await t(!1), this._PRIVATE_armed = !1;
                        return
                    }
                    this._PRIVATE_pendingNext = t, await this.checkTargetingRules(n)
                }
                async onAfterPageView() {
                    this._PRIVATE_armed && await this.checkTargetingRules()
                }
                async checkTargetingRules(t = this._PRIVATE_pageviewGeneration) {
                    const s = this._PRIVATE_urlService.getAnonymizedUrl();
                    await this._PRIVATE_onMatched(this._PRIVATE_isTargetingRulesMatched(s, "url"), t)
                }
                async onExternalEvent(t) {
                    this._PRIVATE_armed && await this._PRIVATE_onMatched(this._PRIVATE_isTargetingRulesMatched(t.name, "trigger"), this._PRIVATE_pageviewGeneration)
                }
                onCollectStateChange(t) {
                    if (this._PRIVATE_isFinalTargetingState(t)) {
                        this._PRIVATE_armed = !1;
                        return
                    }
                    const s = t === O.ANALYTICS_ONLY_RECORDING_PENDING_RULES_TARGETING;
                    !this._PRIVATE_hasMatched && s || setTimeout(() => this._PRIVATE_emitNextTargetingCollectState(t), 0)
                }
                async _PRIVATE_isSessionInFinalTargetingState() {
                    const t = await this._PRIVATE_sessionService.getSession();
                    return !!(t && this._PRIVATE_isFinalTargetingState(t.collectState))
                }
                _PRIVATE_isFinalTargetingState(t) {
                    return t === O.RECORDING_RULES_TARGETING || t === O.ANALYTICS_ONLY_RULES_TARGETING
                }
                async _PRIVATE_updateState() {
                    var t;
                    if (this._PRIVATE_hasMatched) {
                        const s = await this._PRIVATE_sessionService.getSession(),
                            n = this._PRIVATE_collectState.getInitialCollectState();
                        await this._PRIVATE_emitNextTargetingCollectState((t = s == null ? void 0 : s.collectState) !== null && t !== void 0 ? t : n), await this._PRIVATE_lifeCycleEventsEmitter.emitTargetingRulesMatched()
                    }
                }
                async _PRIVATE_emitNextTargetingCollectState(t) {
                    const s = Qu[this._PRIVATE_hasMatched ? "MATCHED" : "MISSED"][t];
                    s && await this._PRIVATE_lifeCycleEventsEmitter.emitCollectStateChange(s, Wt.ETR_OFF)
                }
                _PRIVATE_isTargetingRulesMatched(t, s) {
                    var n, a;
                    return s === "url" && rt(t) ? !!(!((n = this._PRIVATE_targetingRulesEvaluator) === null || n === void 0) && n.matchUrl(t)) : s === "trigger" ? !!(!((a = this._PRIVATE_targetingRulesEvaluator) === null || a === void 0) && a.matchTrigger(t)) : !1
                }
            }
            return i.$deps = [X, yt, ie, ve, Mt], i
        })(),
        $_ = (() => {
            let i = class {
                constructor(t, s, n, a, o) {
                    this._PRIVATE_configuration = t, this._PRIVATE_bootstrapService = s, this._PRIVATE_lifeCycleEventsEmitter = n, this._PRIVATE_pageviewLifecycleEmitter = a, this._PRIVATE_targetingRulesService = o
                }
                onInit() {
                    this._PRIVATE_configuration.hasTargetingRules() && (this._PRIVATE_bootstrapService.addInterceptor(this._PRIVATE_targetingRulesService), this._PRIVATE_lifeCycleEventsEmitter.addListener(this._PRIVATE_targetingRulesService), this._PRIVATE_pageviewLifecycleEmitter.addListener(this._PRIVATE_targetingRulesService))
                }
            };
            return i.$deps = [X, Oi, yt, vi, Wn], i = x([Z({
                imports: [ot, Io, Xt, ye, se, xn, Hn],
                providers: [Wn],
                exports: [Wn]
            })], i), i
        })(),
        F_ = (() => {
            let i = class {
                constructor(t, s) {
                    this._PRIVATE_collectState = t, this._PRIVATE_trackingPipeline = s
                }
                async onInit() {
                    try {
                        this._PRIVATE_collectState.canTrack() && this._PRIVATE_trackingPipeline.start()
                    } catch (t) {
                        G.error(t, "shopify_boot_error")
                    }
                }
            };
            return i.$deps = [ie, ho], i = x([Z({
                imports: [ot, Xt, be, ye, we, Ao, ws, D_, se, Un, wi, xn, po, Ci, Ni, mo, U_, y_, z_, N_, Hn, Io, $_],
                providers: [Wa, ho]
            })], i), i
        })(),
        So = (() => {
            let i = class {};
            return i.$deps = [], i = x([Z({
                imports: [F_]
            })], i), i
        })();

    function H_(i) {
        k.updateFromContext(i.init.context);
        const e = new X(self.CS_CONF);
        return new bh(e).canTrack()
    }
    self.init = async i => {
        try {
            if (!H_(i)) return;
            const e = new ii;
            e.register(() => i, Ge), e.register(() => self.CS_CONF, Ya), e.registerModule(So), await e.resolve(So), await e.bootModules()
        } catch (e) {
            G.error(e, "shopify_init_error")
        }
    }
})();