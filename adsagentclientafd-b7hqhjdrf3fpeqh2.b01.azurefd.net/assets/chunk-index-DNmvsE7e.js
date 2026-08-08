const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/chunk-index-Dqp3MvIT.js", "assets/chunk-i18n-BNyI1hjo.js", "assets/chunk-use-api-Ds4Oi468.js", "assets/chunk-cart-service-BE3B96r7.js"]))) => i.map(i => d[i]);
import {
    r as e,
    a9 as t,
    aa as n,
    a as s,
    ab as r,
    m as i,
    j as o,
    S as a,
    ac as c,
    ad as l,
    ae as u,
    q as d,
    af as h,
    Q as f,
    ag as p,
    ah as m,
    ai as g,
    aj as b,
    ak as y,
    al as v,
    am as w,
    s as x,
    an as k,
    H as C,
    ao as T,
    ap as S,
    aq as E,
    ar as _,
    as as R,
    at as I,
    au as P,
    h as j,
    av as M,
    u as A,
    aw as N,
    ax as O,
    ay as D,
    V as L,
    J as F,
    P as z,
    az as B,
    aA as q,
    aB as V,
    aC as U,
    aD as H,
    x as $,
    aE as K,
    C as Y,
    E as Q,
    U as W,
    y as X,
    aF as G,
    aG as J,
    aH as Z,
    aI as ee,
    aJ as te,
    aK as ne,
    aL as se,
    D as re,
    aM as ie,
    aN as oe,
    aO as ae,
    aP as ce,
    aQ as le,
    aR as ue,
    aS as de,
    B as he,
    aT as fe,
    aU as pe,
    aV as me,
    aW as ge,
    aX as be,
    aY as ye,
    aZ as ve,
    a_ as we,
    a$ as xe,
    t as ke,
    b0 as Ce,
    v as Te,
    b1 as Se,
    b2 as Ee,
    b3 as _e,
    z as Re,
    b4 as Ie,
    b5 as Pe,
    _ as je,
    b6 as Me,
    b7 as Ae,
    b8 as Ne,
    b9 as Oe,
    ba as De
} from "./chunk-i18n-BNyI1hjo.js";
import {
    h as Le,
    i as Fe,
    p as ze,
    u as Be,
    f as qe,
    a as Ve,
    g as Ue,
    S as He,
    j as $e,
    k as Ke,
    l as Ye,
    P as Qe,
    m as We,
    M as Xe,
    n as Ge,
    o as Je,
    D as Ze,
    q as et,
    C as tt,
    L as nt,
    E as st,
    t as rt,
    v as it,
    w as ot,
    x as at,
    I as ct,
    y as lt,
    z as ut,
    B as dt,
    F as ht,
    G as ft,
    H as pt,
    J as mt,
    K as gt,
    N as bt,
    O as yt,
    Q as vt,
    R as wt,
    T as xt,
    A as kt,
    b as Ct,
    U as Tt,
    V as St,
    d as Et,
    W as _t,
    X as Rt,
    s as It,
    r as Pt,
    e as jt,
    Y as Mt,
    Z as At,
    _ as Nt
} from "./chunk-use-api-Ds4Oi468.js";
import {
    u as Ot,
    b as Dt,
    c as Lt,
    g as Ft,
    d as zt,
    e as Bt,
    f as qt,
    h as Vt,
    i as Ut
} from "./chunk-cart-service-BE3B96r7.js";

function Ht() {
    !Le.current && Fe();
    const [t] = e.useState(ze.current);
    return t
}
var $t = cn(),
    Kt = e => sn(e, $t),
    Yt = cn();
Kt.write = e => sn(e, Yt);
var Qt = cn();
Kt.onStart = e => sn(e, Qt);
var Wt = cn();
Kt.onFrame = e => sn(e, Wt);
var Xt = cn();
Kt.onFinish = e => sn(e, Xt);
var Gt = [];
Kt.setTimeout = (e, t) => {
    const n = Kt.now() + t,
        s = () => {
            const e = Gt.findIndex(e => e.cancel == s);
            ~e && Gt.splice(e, 1), tn -= ~e ? 1 : 0
        },
        r = {
            time: n,
            handler: e,
            cancel: s
        };
    return Gt.splice(Jt(n), 0, r), tn += 1, rn(), r
};
var Jt = e => ~(~Gt.findIndex(t => t.time > e) || ~Gt.length);
Kt.cancel = e => {
    Qt.delete(e), Wt.delete(e), Xt.delete(e), $t.delete(e), Yt.delete(e)
}, Kt.sync = e => {
    nn = !0, Kt.batchedUpdates(e), nn = !1
}, Kt.throttle = e => {
    let t;

    function n() {
        try {
            e(...t)
        } finally {
            t = null
        }
    }

    function s(...e) {
        t = e, Kt.onStart(n)
    }
    return s.handler = e, s.cancel = () => {
        Qt.delete(n), t = null
    }, s
};
var Zt = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
Kt.use = e => Zt = e, Kt.now = "undefined" != typeof performance ? () => performance.now() : Date.now, Kt.batchedUpdates = e => e(), Kt.catch = console.error, Kt.frameLoop = "always", Kt.advance = () => {
    "demand" !== Kt.frameLoop || an()
};
var en = -1,
    tn = 0,
    nn = !1;

function sn(e, t) {
    nn ? (t.delete(e), e(0)) : (t.add(e), rn())
}

function rn() {
    en < 0 && (en = 0, "demand" !== Kt.frameLoop && Zt(on))
}

function on() {
    ~en && (Zt(on), Kt.batchedUpdates(an))
}

function an() {
    const e = en;
    en = Kt.now();
    const t = Jt(en);
    t && (ln(Gt.splice(0, t), e => e.handler()), tn -= t), tn ? (Qt.flush(), $t.flush(e ? Math.min(64, en - e) : 16.667), Wt.flush(), Yt.flush(), Xt.flush()) : en = -1
}

function cn() {
    let e = new Set,
        t = e;
    return {
        add(n) {
            tn += t != e || e.has(n) ? 0 : 1, e.add(n)
        },
        delete: n => (tn -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
        flush(n) {
            t.size && (e = new Set, tn -= t.size, ln(t, t => t(n) && e.add(t)), tn += e.size, t = e)
        }
    }
}

function ln(e, t) {
    e.forEach(e => {
        try {
            t(e)
        } catch (n) {
            Kt.catch(n)
        }
    })
}
var un = Object.defineProperty,
    dn = {};

function hn() {}((e, t) => {
    for (var n in t) un(e, n, {
        get: t[n],
        enumerable: !0
    })
})(dn, {
    assign: () => En,
    colors: () => Cn,
    createStringInterpolator: () => vn,
    skipAnimation: () => Tn,
    to: () => wn,
    willAdvance: () => Sn
});
var fn = {
    arr: Array.isArray,
    obj: e => !!e && "Object" === e.constructor.name,
    fun: e => "function" == typeof e,
    str: e => "string" == typeof e,
    num: e => "number" == typeof e,
    und: e => void 0 === e
};

function pn(e, t) {
    if (fn.arr(e)) {
        if (!fn.arr(t) || e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }
    return e === t
}
var mn = (e, t) => e.forEach(t);

function gn(e, t, n) {
    if (fn.arr(e))
        for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
    else
        for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s)
}
var bn = e => fn.und(e) ? [] : fn.arr(e) ? e : [e];

function yn(e, t) {
    if (e.size) {
        const n = Array.from(e);
        e.clear(), mn(n, t)
    }
}
var vn, wn, xn = (e, ...t) => yn(e, e => e(...t)),
    kn = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
    Cn = null,
    Tn = !1,
    Sn = hn,
    En = e => {
        e.to && (wn = e.to), e.now && (Kt.now = e.now), void 0 !== e.colors && (Cn = e.colors), null != e.skipAnimation && (Tn = e.skipAnimation), e.createStringInterpolator && (vn = e.createStringInterpolator), e.requestAnimationFrame && Kt.use(e.requestAnimationFrame), e.batchedUpdates && (Kt.batchedUpdates = e.batchedUpdates), e.willAdvance && (Sn = e.willAdvance), e.frameLoop && (Kt.frameLoop = e.frameLoop)
    },
    _n = new Set,
    Rn = [],
    In = [],
    Pn = 0,
    jn = {
        get idle() {
            return !_n.size && !Rn.length
        },
        start(e) {
            Pn > e.priority ? (_n.add(e), Kt.onStart(Mn)) : (An(e), Kt(On))
        },
        advance: On,
        sort(e) {
            if (Pn) Kt.onFrame(() => jn.sort(e));
            else {
                const t = Rn.indexOf(e);
                ~t && (Rn.splice(t, 1), Nn(e))
            }
        },
        clear() {
            Rn = [], _n.clear()
        }
    };

function Mn() {
    _n.forEach(An), _n.clear(), Kt(On)
}

function An(e) {
    Rn.includes(e) || Nn(e)
}

function Nn(e) {
    Rn.splice(function(e, t) {
        const n = e.findIndex(t);
        return n < 0 ? e.length : n
    }(Rn, t => t.priority > e.priority), 0, e)
}

function On(e) {
    const t = In;
    for (let n = 0; n < Rn.length; n++) {
        const s = Rn[n];
        Pn = s.priority, s.idle || (Sn(s), s.advance(e), s.idle || t.push(s))
    }
    return Pn = 0, (In = Rn).length = 0, (Rn = t).length > 0
}
var Dn = "[-+]?\\d*\\.?\\d+",
    Ln = Dn + "%";

function Fn(...e) {
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
}
var zn = new RegExp("rgb" + Fn(Dn, Dn, Dn)),
    Bn = new RegExp("rgba" + Fn(Dn, Dn, Dn, Dn)),
    qn = new RegExp("hsl" + Fn(Dn, Ln, Ln)),
    Vn = new RegExp("hsla" + Fn(Dn, Ln, Ln, Dn)),
    Un = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    Hn = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    $n = /^#([0-9a-fA-F]{6})$/,
    Kn = /^#([0-9a-fA-F]{8})$/;

function Yn(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Qn(e, t, n) {
    const s = n < .5 ? n * (1 + t) : n + t - n * t,
        r = 2 * n - s,
        i = Yn(r, s, e + 1 / 3),
        o = Yn(r, s, e),
        a = Yn(r, s, e - 1 / 3);
    return Math.round(255 * i) << 24 | Math.round(255 * o) << 16 | Math.round(255 * a) << 8
}

function Wn(e) {
    const t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t
}

function Xn(e) {
    return (parseFloat(e) % 360 + 360) % 360 / 360
}

function Gn(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
}

function Jn(e) {
    const t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100
}

function Zn(e) {
    let t = function(e) {
        let t;
        return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = $n.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Cn && void 0 !== Cn[e] ? Cn[e] : (t = zn.exec(e)) ? (Wn(t[1]) << 24 | Wn(t[2]) << 16 | Wn(t[3]) << 8 | 255) >>> 0 : (t = Bn.exec(e)) ? (Wn(t[1]) << 24 | Wn(t[2]) << 16 | Wn(t[3]) << 8 | Gn(t[4])) >>> 0 : (t = Un.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Kn.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Hn.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = qn.exec(e)) ? (255 | Qn(Xn(t[1]), Jn(t[2]), Jn(t[3]))) >>> 0 : (t = Vn.exec(e)) ? (Qn(Xn(t[1]), Jn(t[2]), Jn(t[3])) | Gn(t[4])) >>> 0 : null
    }(e);
    if (null === t) return e;
    t = t || 0;
    return `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`
}
var es = (e, t, n) => {
    if (fn.fun(e)) return e;
    if (fn.arr(e)) return es({
        range: e,
        output: t,
        extrapolate: n
    });
    if (fn.str(e.output[0])) return vn(e);
    const s = e,
        r = s.output,
        i = s.range || [0, 1],
        o = s.extrapolateLeft || s.extrapolate || "extend",
        a = s.extrapolateRight || s.extrapolate || "extend",
        c = s.easing || (e => e);
    return e => {
        const t = function(e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1
        }(e, i);
        return function(e, t, n, s, r, i, o, a, c) {
            let l = c ? c(e) : e;
            if (l < t) {
                if ("identity" === o) return l;
                "clamp" === o && (l = t)
            }
            if (l > n) {
                if ("identity" === a) return l;
                "clamp" === a && (l = n)
            }
            if (s === r) return s;
            if (t === n) return e <= t ? s : r;
            t === -1 / 0 ? l = -l : n === 1 / 0 ? l -= t : l = (l - t) / (n - t);
            l = i(l), s === -1 / 0 ? l = -l : r === 1 / 0 ? l += s : l = l * (r - s) + s;
            return l
        }(e, i[t], i[t + 1], r[t], r[t + 1], c, o, a, s.map)
    }
};
var ts = Symbol.for("FluidValue.get"),
    ns = Symbol.for("FluidValue.observers"),
    ss = e => Boolean(e && e[ts]),
    rs = e => e && e[ts] ? e[ts]() : e,
    is = e => e[ns] || null;

function os(e, t) {
    const n = e[ns];
    n && n.forEach(e => {
        ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
        }(e, t)
    })
}
var as = class {
        constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            cs(this, e)
        }
    },
    cs = (e, t) => hs(e, ts, t);

function ls(e, t) {
    if (e[ts]) {
        let n = e[ns];
        n || hs(e, ns, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
    }
    return t
}

function us(e, t) {
    const n = e[ns];
    if (n && n.has(t)) {
        const s = n.size - 1;
        s ? n.delete(t) : e[ns] = null, e.observerRemoved && e.observerRemoved(s, t)
    }
}
var ds, hs = (e, t, n) => Object.defineProperty(e, t, {
        value: n,
        writable: !0,
        configurable: !0
    }),
    fs = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    ps = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    ms = new RegExp(`(${fs.source})(%|[a-z]+)`, "i"),
    gs = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    bs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
    ys = e => {
        const [t, n] = vs(e);
        if (!t || kn()) return e;
        const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
        if (s) return s.trim();
        if (n && n.startsWith("--")) {
            const t = window.getComputedStyle(document.documentElement).getPropertyValue(n);
            return t || e
        }
        return n && bs.test(n) ? ys(n) : n || e
    },
    vs = e => {
        const t = bs.exec(e);
        if (!t) return [, ];
        const [, n, s] = t;
        return [n, s]
    },
    ws = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
    xs = e => {
        ds || (ds = Cn ? new RegExp(`(${Object.keys(Cn).join("|")})(?!\\w)`, "g") : /^\b$/);
        const t = e.output.map(e => rs(e).replace(bs, ys).replace(ps, Zn).replace(ds, Zn)),
            n = t.map(e => e.match(fs).map(Number)),
            s = n[0].map((e, t) => n.map(e => {
                if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                return e[t]
            })).map(t => es({ ...e,
                output: t
            }));
        return e => {
            const n = !ms.test(t[0]) && t.find(e => ms.test(e)) ? .replace(fs, "");
            let r = 0;
            return t[0].replace(fs, () => `${s[r++](e)}${n||""}`).replace(gs, ws)
        }
    },
    ks = "react-spring: ",
    Cs = e => {
        const t = e;
        let n = !1;
        if ("function" != typeof t) throw new TypeError(`${ks}once requires a function parameter`);
        return (...e) => {
            n || (t(...e), n = !0)
        }
    },
    Ts = Cs(console.warn);
var Ss = Cs(console.warn);

function Es(e) {
    return fn.str(e) && ("#" == e[0] || /\d/.test(e) || !kn() && bs.test(e) || e in (Cn || {}))
}
var _s = kn() ? e.useEffect : e.useLayoutEffect;

function Rs() {
    const t = e.useState()[1],
        n = (() => {
            const t = e.useRef(!1);
            return _s(() => (t.current = !0, () => {
                t.current = !1
            }), []), t
        })();
    return () => {
        n.current && t(Math.random())
    }
}
var Is = t => e.useEffect(t, Ps),
    Ps = [];

function js(t) {
    const n = e.useRef(void 0);
    return e.useEffect(() => {
        n.current = t
    }), n.current
}
var Ms = Symbol.for("Animated:node"),
    As = e => e && e[Ms],
    Ns = (e, t) => {
        return n = e, s = Ms, r = t, Object.defineProperty(n, s, {
            value: r,
            writable: !0,
            configurable: !0
        });
        var n, s, r
    },
    Os = e => e && e[Ms] && e[Ms].getPayload(),
    Ds = class {
        constructor() {
            Ns(this, this)
        }
        getPayload() {
            return this.payload || []
        }
    },
    Ls = class e extends Ds {
        constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, fn.num(this._value) && (this.lastPosition = this._value)
        }
        static create(t) {
            return new e(t)
        }
        getPayload() {
            return [this]
        }
        getValue() {
            return this._value
        }
        setValue(e, t) {
            return fn.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
        }
        reset() {
            const {
                done: e
            } = this;
            this.done = !1, fn.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
        }
    },
    Fs = class e extends Ls {
        constructor(e) {
            super(0), this._string = null, this._toString = es({
                output: [e, e]
            })
        }
        static create(t) {
            return new e(t)
        }
        getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
        }
        setValue(e) {
            if (fn.str(e)) {
                if (e == this._string) return !1;
                this._string = e, this._value = 1
            } else {
                if (!super.setValue(e)) return !1;
                this._string = null
            }
            return !0
        }
        reset(e) {
            e && (this._toString = es({
                output: [this.getValue(), e]
            })), this._value = 0, super.reset()
        }
    },
    zs = {
        dependencies: null
    },
    Bs = class extends Ds {
        constructor(e) {
            super(), this.source = e, this.setValue(e)
        }
        getValue(e) {
            const t = {};
            return gn(this.source, (n, s) => {
                var r;
                (r = n) && r[Ms] === r ? t[s] = n.getValue(e) : ss(n) ? t[s] = rs(n) : e || (t[s] = n)
            }), t
        }
        setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
        }
        reset() {
            this.payload && mn(this.payload, e => e.reset())
        }
        _makePayload(e) {
            if (e) {
                const t = new Set;
                return gn(e, this._addToPayload, t), Array.from(t)
            }
        }
        _addToPayload(e) {
            zs.dependencies && ss(e) && zs.dependencies.add(e);
            const t = Os(e);
            t && mn(t, e => this.add(e))
        }
    },
    qs = class e extends Bs {
        constructor(e) {
            super(e)
        }
        static create(t) {
            return new e(t)
        }
        getValue() {
            return this.source.map(e => e.getValue())
        }
        setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(Vs)), !0)
        }
    };

function Vs(e) {
    return (Es(e) ? Fs : Ls).create(e)
}

function Us(e) {
    const t = As(e);
    return t ? t.constructor : fn.arr(e) ? qs : Es(e) ? Fs : Ls
}
var Hs = (t, n) => {
        const s = !fn.fun(t) || t.prototype && t.prototype.isReactComponent;
        return e.forwardRef((r, i) => {
            const o = e.useRef(null),
                a = s && e.useCallback(e => {
                    o.current = function(e, t) {
                        e && (fn.fun(e) ? e(t) : e.current = t);
                        return t
                    }(i, e)
                }, [i]),
                [c, l] = function(e, t) {
                    const n = new Set;
                    zs.dependencies = n, e.style && (e = { ...e,
                        style: t.createAnimatedStyle(e.style)
                    });
                    return e = new Bs(e), zs.dependencies = null, [e, n]
                }(r, n),
                u = Rs(),
                d = () => {
                    const e = o.current;
                    if (s && !e) return;
                    !1 === (!!e && n.applyAnimatedValues(e, c.getValue(!0))) && u()
                },
                h = new $s(d, l),
                f = e.useRef(void 0);
            _s(() => (f.current = h, mn(l, e => ls(e, h)), () => {
                f.current && (mn(f.current.deps, e => us(e, f.current)), Kt.cancel(f.current.update))
            })), e.useEffect(d, []), Is(() => () => {
                const e = f.current;
                mn(e.deps, t => us(t, e))
            });
            const p = n.getComponentProps(c.getValue());
            return e.createElement(t, { ...p,
                ref: a
            })
        })
    },
    $s = class {
        constructor(e, t) {
            this.update = e, this.deps = t
        }
        eventObserved(e) {
            "change" == e.type && Kt.write(this.update)
        }
    };
var Ks = Symbol.for("AnimatedComponent"),
    Ys = e => fn.str(e) ? e : e && fn.str(e.displayName) ? e.displayName : fn.fun(e) && e.name || null;

function Qs(e, ...t) {
    return fn.fun(e) ? e(...t) : e
}
var Ws = (e, t) => !0 === e || !!(t && e && (fn.fun(e) ? e(t) : bn(e).includes(t))),
    Xs = (e, t) => fn.obj(e) ? t && e[t] : e,
    Gs = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
    Js = e => e,
    Zs = (e, t = Js) => {
        let n = er;
        e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
        const s = {};
        for (const r of n) {
            const n = t(e[r], r);
            fn.und(n) || (s[r] = n)
        }
        return s
    },
    er = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
    tr = {
        config: 1,
        from: 1,
        to: 1,
        ref: 1,
        loop: 1,
        reset: 1,
        pause: 1,
        cancel: 1,
        reverse: 1,
        immediate: 1,
        default: 1,
        delay: 1,
        onProps: 1,
        onStart: 1,
        onChange: 1,
        onPause: 1,
        onResume: 1,
        onRest: 1,
        onResolve: 1,
        items: 1,
        trail: 1,
        sort: 1,
        expires: 1,
        initial: 1,
        enter: 1,
        update: 1,
        leave: 1,
        children: 1,
        onDestroyed: 1,
        keys: 1,
        callId: 1,
        parentId: 1
    };

function nr(e) {
    const t = function(e) {
        const t = {};
        let n = 0;
        if (gn(e, (e, s) => {
                tr[s] || (t[s] = e, n++)
            }), n) return t
    }(e);
    if (t) {
        const n = {
            to: t
        };
        return gn(e, (e, s) => s in t || (n[s] = e)), n
    }
    return { ...e
    }
}

function sr(e) {
    return e = rs(e), fn.arr(e) ? e.map(sr) : Es(e) ? dn.createStringInterpolator({
        range: [0, 1],
        output: [e, e]
    })(1) : e
}

function rr(e) {
    return fn.fun(e) || fn.arr(e) && fn.obj(e[0])
}
var ir = {
        tension: 170,
        friction: 26,
        mass: 1,
        damping: 1,
        easing: e => e,
        clamp: !1
    },
    or = class {
        constructor() {
            this.velocity = 0, Object.assign(this, ir)
        }
    };

function ar(e, t) {
    if (fn.und(t.decay)) {
        const n = !fn.und(t.tension) || !fn.und(t.friction);
        !n && fn.und(t.frequency) && fn.und(t.damping) && fn.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
    } else e.duration = void 0
}
var cr = [],
    lr = class {
        constructor() {
            this.changed = !1, this.values = cr, this.toValues = null, this.fromValues = cr, this.config = new or, this.immediate = !1
        }
    };

function ur(e, {
    key: t,
    props: n,
    defaultProps: s,
    state: r,
    actions: i
}) {
    return new Promise((o, a) => {
        let c, l, u = Ws(n.cancel ? ? s ? .cancel, t);
        if (u) f();
        else {
            fn.und(n.pause) || (r.paused = Ws(n.pause, t));
            let e = s ? .pause;
            !0 !== e && (e = r.paused || Ws(e, t)), c = Qs(n.delay || 0, t), e ? (r.resumeQueue.add(h), i.pause()) : (i.resume(), h())
        }

        function d() {
            r.resumeQueue.add(h), r.timeouts.delete(l), l.cancel(), c = l.time - Kt.now()
        }

        function h() {
            c > 0 && !dn.skipAnimation ? (r.delayed = !0, l = Kt.setTimeout(f, c), r.pauseQueue.add(d), r.timeouts.add(l)) : f()
        }

        function f() {
            r.delayed && (r.delayed = !1), r.pauseQueue.delete(d), r.timeouts.delete(l), e <= (r.cancelId || 0) && (u = !0);
            try {
                i.start({ ...n,
                    callId: e,
                    cancel: u
                }, o)
            } catch (t) {
                a(t)
            }
        }
    })
}
var dr = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? pr(e.get()) : t.every(e => e.noop) ? hr(e.get()) : fr(e.get(), t.every(e => e.finished)),
    hr = e => ({
        value: e,
        noop: !0,
        finished: !0,
        cancelled: !1
    }),
    fr = (e, t, n = !1) => ({
        value: e,
        finished: t,
        cancelled: n
    }),
    pr = e => ({
        value: e,
        cancelled: !0,
        finished: !1
    });

function mr(e, t, n, s) {
    const {
        callId: r,
        parentId: i,
        onRest: o
    } = t, {
        asyncTo: a,
        promise: c
    } = n;
    return i || e !== a || t.reset ? n.promise = (async () => {
        n.asyncId = r, n.asyncTo = e;
        const l = Zs(t, (e, t) => "onRest" === t ? void 0 : e);
        let u, d;
        const h = new Promise((e, t) => (u = e, d = t)),
            f = e => {
                const t = r <= (n.cancelId || 0) && pr(s) || r !== n.asyncId && fr(s, !1);
                if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
                const i = new br,
                    o = new yr;
                return (async () => {
                    if (dn.skipAnimation) throw gr(n), o.result = fr(s, !1), d(o), o;
                    f(i);
                    const a = fn.obj(e) ? { ...e
                    } : { ...t,
                        to: e
                    };
                    a.parentId = r, gn(l, (e, t) => {
                        fn.und(a[t]) && (a[t] = e)
                    });
                    const c = await s.start(a);
                    return f(i), n.paused && await new Promise(e => {
                        n.resumeQueue.add(e)
                    }), c
                })()
            };
        let m;
        if (dn.skipAnimation) return gr(n), fr(s, !1);
        try {
            let t;
            t = fn.arr(e) ? (async e => {
                for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, s.stop.bind(s))), await Promise.all([t.then(u), h]), m = fr(s.get(), !0, !1)
        } catch (g) {
            if (g instanceof br) m = g.result;
            else {
                if (!(g instanceof yr)) throw g;
                m = g.result
            }
        } finally {
            r == n.asyncId && (n.asyncId = i, n.asyncTo = i ? a : void 0, n.promise = i ? c : void 0)
        }
        return fn.fun(o) && Kt.batchedUpdates(() => {
            o(m, s, s.item)
        }), m
    })() : c
}

function gr(e, t) {
    yn(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
}
var br = class extends Error {
        constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
        }
    },
    yr = class extends Error {
        constructor() {
            super("SkipAnimationSignal")
        }
    },
    vr = e => e instanceof xr,
    wr = 1,
    xr = class extends as {
        constructor() {
            super(...arguments), this.id = wr++, this._priority = 0
        }
        get priority() {
            return this._priority
        }
        set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
        }
        get() {
            const e = As(this);
            return e && e.getValue()
        }
        to(...e) {
            return dn.to(this, e)
        }
        interpolate(...e) {
            return Ts(`${ks}The "interpolate" function is deprecated in v9 (use "to" instead)`), dn.to(this, e)
        }
        toJSON() {
            return this.get()
        }
        observerAdded(e) {
            1 == e && this._attach()
        }
        observerRemoved(e) {
            0 == e && this._detach()
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
            os(this, {
                type: "change",
                parent: this,
                value: e,
                idle: t
            })
        }
        _onPriorityChange(e) {
            this.idle || jn.sort(this), os(this, {
                type: "priority",
                parent: this,
                priority: e
            })
        }
    },
    kr = Symbol.for("SpringPhase"),
    Cr = e => (1 & e[kr]) > 0,
    Tr = e => (2 & e[kr]) > 0,
    Sr = e => (4 & e[kr]) > 0,
    Er = (e, t) => t ? e[kr] |= 3 : e[kr] &= -3,
    _r = (e, t) => t ? e[kr] |= 4 : e[kr] &= -5,
    Rr = class extends xr {
        constructor(e, t) {
            if (super(), this.animation = new lr, this.defaultProps = {}, this._state = {
                    paused: !1,
                    delayed: !1,
                    pauseQueue: new Set,
                    resumeQueue: new Set,
                    timeouts: new Set
                }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !fn.und(e) || !fn.und(t)) {
                const n = fn.obj(e) ? { ...e
                } : { ...t,
                    from: e
                };
                fn.und(n.default) && (n.default = !0), this.start(n)
            }
        }
        get idle() {
            return !(Tr(this) || this._state.asyncTo) || Sr(this)
        }
        get goal() {
            return rs(this.animation.to)
        }
        get velocity() {
            const e = As(this);
            return e instanceof Ls ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
        }
        get hasAnimated() {
            return Cr(this)
        }
        get isAnimating() {
            return Tr(this)
        }
        get isPaused() {
            return Sr(this)
        }
        get isDelayed() {
            return this._state.delayed
        }
        advance(e) {
            let t = !0,
                n = !1;
            const s = this.animation;
            let {
                toValues: r
            } = s;
            const {
                config: i
            } = s, o = Os(s.to);
            !o && ss(s.to) && (r = bn(rs(s.to))), s.values.forEach((a, c) => {
                if (a.done) return;
                const l = a.constructor == Fs ? 1 : o ? o[c].lastPosition : r[c];
                let u = s.immediate,
                    d = l;
                if (!u) {
                    if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                    let t = a.elapsedTime += e;
                    const n = s.fromValues[c],
                        r = null != a.v0 ? a.v0 : a.v0 = fn.arr(i.velocity) ? i.velocity[c] : i.velocity;
                    let o;
                    const h = i.precision || (n == l ? .005 : Math.min(1, .001 * Math.abs(l - n)));
                    if (fn.und(i.duration))
                        if (i.decay) {
                            const e = !0 === i.decay ? .998 : i.decay,
                                s = Math.exp(-(1 - e) * t);
                            d = n + r / (1 - e) * (1 - s), u = Math.abs(a.lastPosition - d) <= h, o = r * s
                        } else {
                            o = null == a.lastVelocity ? r : a.lastVelocity;
                            const t = i.restVelocity || h / 10,
                                s = i.clamp ? 0 : i.bounce,
                                c = !fn.und(s),
                                f = n == l ? a.v0 > 0 : n < l;
                            let p, m = !1;
                            const g = 1,
                                b = Math.ceil(e / g);
                            for (let e = 0; e < b && (p = Math.abs(o) > t, p || (u = Math.abs(l - d) <= h, !u)); ++e) {
                                c && (m = d == l || d > l == f, m && (o = -o * s, d = l));
                                o += (1e-6 * -i.tension * (d - l) + .001 * -i.friction * o) / i.mass * g, d += o * g
                            }
                        }
                    else {
                        let s = 1;
                        i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), s = (i.progress || 0) + t / this._memoizedDuration, s = s > 1 ? 1 : s < 0 ? 0 : s, a.durationProgress = s), d = n + i.easing(s) * (l - n), o = (d - a.lastPosition) / e, u = 1 == s
                    }
                    a.lastVelocity = o, Number.isNaN(d) && (u = !0)
                }
                o && !o[c].done && (u = !1), u ? a.done = !0 : t = !1, a.setValue(d, i.round) && (n = !0)
            });
            const a = As(this),
                c = a.getValue();
            if (t) {
                const e = rs(s.to);
                c === e && !n || i.decay ? n && i.decay && this._onChange(c) : (a.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(c)
        }
        set(e) {
            return Kt.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e)
            }), this
        }
        pause() {
            this._update({
                pause: !0
            })
        }
        resume() {
            this._update({
                pause: !1
            })
        }
        finish() {
            if (Tr(this)) {
                const {
                    to: e,
                    config: t
                } = this.animation;
                Kt.batchedUpdates(() => {
                    this._onStart(), t.decay || this._set(e, !1), this._stop()
                })
            }
            return this
        }
        update(e) {
            return (this.queue || (this.queue = [])).push(e), this
        }
        start(e, t) {
            let n;
            return fn.und(e) ? (n = this.queue || [], this.queue = []) : n = [fn.obj(e) ? e : { ...t,
                to: e
            }], Promise.all(n.map(e => this._update(e))).then(e => dr(this, e))
        }
        stop(e) {
            const {
                to: t
            } = this.animation;
            return this._focus(this.get()), gr(this._state, e && this._lastCallId), Kt.batchedUpdates(() => this._stop(t, e)), this
        }
        reset() {
            this._update({
                reset: !0
            })
        }
        eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
        }
        _prepareNode(e) {
            const t = this.key || "";
            let {
                to: n,
                from: s
            } = e;
            n = fn.obj(n) ? n[t] : n, (null == n || rr(n)) && (n = void 0), s = fn.obj(s) ? s[t] : s, null == s && (s = void 0);
            const r = {
                to: n,
                from: s
            };
            return Cr(this) || (e.reverse && ([n, s] = [s, n]), s = rs(s), fn.und(s) ? As(this) || this._set(n) : this._set(s)), r
        }
        _update({ ...e
        }, t) {
            const {
                key: n,
                defaultProps: s
            } = this;
            e.default && Object.assign(s, Zs(e, (e, t) => /^on/.test(t) ? Xs(e, n) : e)), Or(this, e, "onProps"), Dr(this, "onProps", e, this);
            const r = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return ur(++this._lastCallId, {
                key: n,
                props: e,
                defaultProps: s,
                state: i,
                actions: {
                    pause: () => {
                        Sr(this) || (_r(this, !0), xn(i.pauseQueue), Dr(this, "onPause", fr(this, Ir(this, this.animation.to)), this))
                    },
                    resume: () => {
                        Sr(this) && (_r(this, !1), Tr(this) && this._resume(), xn(i.resumeQueue), Dr(this, "onResume", fr(this, Ir(this, this.animation.to)), this))
                    },
                    start: this._merge.bind(this, r)
                }
            }).then(n => {
                if (e.loop && n.finished && (!t || !n.noop)) {
                    const t = Pr(e);
                    if (t) return this._update(t, !0)
                }
                return n
            })
        }
        _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(pr(this));
            const s = !fn.und(e.to),
                r = !fn.und(e.from);
            if (s || r) {
                if (!(t.callId > this._lastToId)) return n(pr(this));
                this._lastToId = t.callId
            }
            const {
                key: i,
                defaultProps: o,
                animation: a
            } = this, {
                to: c,
                from: l
            } = a;
            let {
                to: u = c,
                from: d = l
            } = e;
            !r || s || t.default && !fn.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const h = !pn(d, l);
            h && (a.from = d), d = rs(d);
            const f = !pn(u, c);
            f && this._focus(u);
            const p = rr(t.to),
                {
                    config: m
                } = a,
                {
                    decay: g,
                    velocity: b
                } = m;
            (s || r) && (m.velocity = 0), t.config && !p && function(e, t, n) {
                n && (ar(n = { ...n
                }, t), t = { ...n,
                    ...t
                }), ar(e, t), Object.assign(e, t);
                for (const o in ir) null == e[o] && (e[o] = ir[o]);
                let {
                    frequency: s,
                    damping: r
                } = e;
                const {
                    mass: i
                } = e;
                fn.und(s) || (s < .01 && (s = .01), r < 0 && (r = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * i, e.friction = 4 * Math.PI * r * i / s)
            }(m, Qs(t.config, i), t.config !== o.config ? Qs(o.config, i) : void 0);
            let y = As(this);
            if (!y || fn.und(u)) return n(fr(this, !0));
            const v = fn.und(t.reset) ? r && !t.default : !fn.und(d) && Ws(t.reset, i),
                w = v ? d : this.get(),
                x = sr(u),
                k = fn.num(x) || fn.arr(x) || Es(x),
                C = !p && (!k || Ws(o.immediate || t.immediate, i));
            if (f) {
                const e = Us(u);
                if (e !== y.constructor) {
                    if (!C) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                    y = this._set(x)
                }
            }
            const T = y.constructor;
            let S = ss(u),
                E = !1;
            if (!S) {
                const e = v || !Cr(this) && h;
                (f || e) && (E = pn(sr(w), x), S = !E), (pn(a.immediate, C) || C) && pn(m.decay, g) && pn(m.velocity, b) || (S = !0)
            }
            if (E && Tr(this) && (a.changed && !v ? S = !0 : S || this._stop(c)), !p && ((S || ss(c)) && (a.values = y.getPayload(), a.toValues = ss(u) ? null : T == Fs ? [1] : bn(x)), a.immediate != C && (a.immediate = C, C || v || this._set(c)), S)) {
                const {
                    onRest: e
                } = a;
                mn(Nr, e => Or(this, t, e));
                const s = fr(this, Ir(this, c));
                xn(this._pendingCalls, s), this._pendingCalls.add(n), a.changed && Kt.batchedUpdates(() => {
                    a.changed = !v, e ? .(s, this), v ? Qs(o.onRest, s) : a.onStart ? .(s, this)
                })
            }
            v && this._set(w), p ? n(mr(t.to, t, this._state, this)) : S ? this._start() : Tr(this) && !f ? this._pendingCalls.add(n) : n(hr(w))
        }
        _focus(e) {
            const t = this.animation;
            e !== t.to && (is(this) && this._detach(), t.to = e, is(this) && this._attach())
        }
        _attach() {
            let e = 0;
            const {
                to: t
            } = this.animation;
            ss(t) && (ls(t, this), vr(t) && (e = t.priority + 1)), this.priority = e
        }
        _detach() {
            const {
                to: e
            } = this.animation;
            ss(e) && us(e, this)
        }
        _set(e, t = !0) {
            const n = rs(e);
            if (!fn.und(n)) {
                const e = As(this);
                if (!e || !pn(n, e.getValue())) {
                    const s = Us(n);
                    e && e.constructor == s ? e.setValue(n) : Ns(this, s.create(n)), e && Kt.batchedUpdates(() => {
                        this._onChange(n, t)
                    })
                }
            }
            return As(this)
        }
        _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, Dr(this, "onStart", fr(this, Ir(this, e.to)), this))
        }
        _onChange(e, t) {
            t || (this._onStart(), Qs(this.animation.onChange, e, this)), Qs(this.defaultProps.onChange, e, this), super._onChange(e, t)
        }
        _start() {
            const e = this.animation;
            As(this).reset(rs(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), Tr(this) || (Er(this, !0), Sr(this) || this._resume())
        }
        _resume() {
            dn.skipAnimation ? this.finish() : jn.start(this)
        }
        _stop(e, t) {
            if (Tr(this)) {
                Er(this, !1);
                const n = this.animation;
                mn(n.values, e => {
                    e.done = !0
                }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), os(this, {
                    type: "idle",
                    parent: this
                });
                const s = t ? pr(this.get()) : fr(this.get(), Ir(this, e ? ? n.to));
                xn(this._pendingCalls, s), n.changed && (n.changed = !1, Dr(this, "onRest", s, this))
            }
        }
    };

function Ir(e, t) {
    const n = sr(t);
    return pn(sr(e.get()), n)
}

function Pr(e, t = e.loop, n = e.to) {
    const s = Qs(t);
    if (s) {
        const r = !0 !== s && nr(s),
            i = (r || e).reverse,
            o = !r || r.reset;
        return jr({ ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || rr(n) ? n : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...r
        })
    }
}

function jr(e) {
    const {
        to: t,
        from: n
    } = e = nr(e), s = new Set;
    return fn.obj(t) && Ar(t, s), fn.obj(n) && Ar(n, s), e.keys = s.size ? Array.from(s) : null, e
}

function Mr(e) {
    const t = jr(e);
    return fn.und(t.default) && (t.default = Zs(t)), t
}

function Ar(e, t) {
    gn(e, (e, n) => null != e && t.add(n))
}
var Nr = ["onStart", "onRest", "onChange", "onPause", "onResume"];

function Or(e, t, n) {
    e.animation[n] = t[n] !== Gs(t, n) ? Xs(t[n], e.key) : void 0
}

function Dr(e, t, ...n) {
    e.animation[t] ? .(...n), e.defaultProps[t] ? .(...n)
}
var Lr = ["onStart", "onChange", "onRest"],
    Fr = 1,
    zr = class {
        constructor(e, t) {
            this.id = Fr++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
                paused: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
            }, this._events = {
                onStart: new Map,
                onChange: new Map,
                onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
                default: !0,
                ...e
            })
        }
        get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
        }
        get item() {
            return this._item
        }
        set item(e) {
            this._item = e
        }
        get() {
            const e = {};
            return this.each((t, n) => e[n] = t.get()), e
        }
        set(e) {
            for (const t in e) {
                const n = e[t];
                fn.und(n) || this.springs[t].set(n)
            }
        }
        update(e) {
            return e && this.queue.push(jr(e)), this
        }
        start(e) {
            let {
                queue: t
            } = this;
            return e ? t = bn(e).map(jr) : this.queue = [], this._flush ? this._flush(this, t) : (Kr(this, t), Br(this, t))
        }
        stop(e, t) {
            if (e !== !!e && (t = e), t) {
                const n = this.springs;
                mn(bn(t), t => n[t].stop(!!e))
            } else gr(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
        }
        pause(e) {
            if (fn.und(e)) this.start({
                pause: !0
            });
            else {
                const t = this.springs;
                mn(bn(e), e => t[e].pause())
            }
            return this
        }
        resume(e) {
            if (fn.und(e)) this.start({
                pause: !1
            });
            else {
                const t = this.springs;
                mn(bn(e), e => t[e].resume())
            }
            return this
        }
        each(e) {
            gn(this.springs, e)
        }
        _onFrame() {
            const {
                onStart: e,
                onChange: t,
                onRest: n
            } = this._events, s = this._active.size > 0, r = this._changed.size > 0;
            (s && !this._started || r && !this._started) && (this._started = !0, yn(e, ([e, t]) => {
                t.value = this.get(), e(t, this, this._item)
            }));
            const i = !s && this._started,
                o = r || i && n.size ? this.get() : null;
            r && t.size && yn(t, ([e, t]) => {
                t.value = o, e(t, this, this._item)
            }), i && (this._started = !1, yn(n, ([e, t]) => {
                t.value = o, e(t, this, this._item)
            }))
        }
        eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
                if ("idle" != e.type) return;
                this._active.delete(e.parent)
            }
            Kt.onFrame(this._onFrame)
        }
    };

function Br(e, t) {
    return Promise.all(t.map(t => qr(e, t))).then(t => dr(e, t))
}
async function qr(e, t, n) {
    const {
        keys: s,
        to: r,
        from: i,
        loop: o,
        onRest: a,
        onResolve: c
    } = t, l = fn.obj(t.default) && t.default;
    o && (t.loop = !1), !1 === r && (t.to = null), !1 === i && (t.from = null);
    const u = fn.arr(r) || fn.fun(r) ? r : void 0;
    u ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : mn(Lr, n => {
        const s = t[n];
        if (fn.fun(s)) {
            const r = e._events[n];
            t[n] = ({
                finished: e,
                cancelled: t
            }) => {
                const n = r.get(s);
                n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : r.set(s, {
                    value: null,
                    finished: e || !1,
                    cancelled: t || !1
                })
            }, l && (l[n] = t[n])
        }
    });
    const d = e._state;
    t.pause === !d.paused ? (d.paused = t.pause, xn(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
    const h = (s || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
        f = !0 === t.cancel || !0 === Gs(t, "cancel");
    (u || f && d.asyncId) && h.push(ur(++e._lastAsyncId, {
        props: t,
        state: d,
        actions: {
            pause: hn,
            resume: hn,
            start(t, n) {
                f ? (gr(d, e._lastAsyncId), n(pr(e))) : (t.onRest = a, n(mr(u, t, d, e)))
            }
        }
    })), d.paused && await new Promise(e => {
        d.resumeQueue.add(e)
    });
    const p = dr(e, await Promise.all(h));
    if (o && p.finished && (!n || !p.noop)) {
        const n = Pr(t, o, r);
        if (n) return Kr(e, [n]), qr(e, n, !0)
    }
    return c && Kt.batchedUpdates(() => c(p, e, e.item)), p
}

function Vr(e, t) {
    const n = { ...e.springs
    };
    return t && mn(bn(t), e => {
        fn.und(e.keys) && (e = jr(e)), fn.obj(e.to) || (e = { ...e,
            to: void 0
        }), $r(n, e, e => Hr(e))
    }), Ur(e, n), n
}

function Ur(e, t) {
    gn(t, (t, n) => {
        e.springs[n] || (e.springs[n] = t, ls(t, e))
    })
}

function Hr(e, t) {
    const n = new Rr;
    return n.key = e, t && ls(n, t), n
}

function $r(e, t, n) {
    t.keys && mn(t.keys, s => {
        (e[s] || (e[s] = n(s)))._prepareNode(t)
    })
}

function Kr(e, t) {
    mn(t, t => {
        $r(e.springs, t, t => Hr(t, e))
    })
}
var Yr = e.createContext({
        pause: !1,
        immediate: !1
    }),
    Qr = () => {
        const e = [],
            t = function(t) {
                Ss(`${ks}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
                const s = [];
                return mn(e, (e, r) => {
                    if (fn.und(t)) s.push(e.start());
                    else {
                        const i = n(t, e, r);
                        i && s.push(e.start(i))
                    }
                }), s
            };
        t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
        }, t.delete = function(t) {
            const n = e.indexOf(t);
            ~n && e.splice(n, 1)
        }, t.pause = function() {
            return mn(e, e => e.pause(...arguments)), this
        }, t.resume = function() {
            return mn(e, e => e.resume(...arguments)), this
        }, t.set = function(t) {
            mn(e, (e, n) => {
                const s = fn.fun(t) ? t(n, e) : t;
                s && e.set(s)
            })
        }, t.start = function(t) {
            const n = [];
            return mn(e, (e, s) => {
                if (fn.und(t)) n.push(e.start());
                else {
                    const r = this._getProps(t, e, s);
                    r && n.push(e.start(r))
                }
            }), n
        }, t.stop = function() {
            return mn(e, e => e.stop(...arguments)), this
        }, t.update = function(t) {
            return mn(e, (e, n) => e.update(this._getProps(t, e, n))), this
        };
        const n = function(e, t, n) {
            return fn.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
    };

function Wr(t, n) {
    const s = fn.fun(t),
        [
            [r], i
        ] = function(t, n, s) {
            const r = fn.fun(n) && n;
            r && !s && (s = []);
            const i = e.useMemo(() => r || 3 == arguments.length ? Qr() : void 0, []),
                o = e.useRef(0),
                a = Rs(),
                c = e.useMemo(() => ({
                    ctrls: [],
                    queue: [],
                    flush(e, t) {
                        const n = Vr(e, t);
                        return o.current > 0 && !c.queue.length && !Object.keys(n).some(t => !e.springs[t]) ? Br(e, t) : new Promise(s => {
                            Ur(e, n), c.queue.push(() => {
                                s(Br(e, t))
                            }), a()
                        })
                    }
                }), []),
                l = e.useRef([...c.ctrls]),
                u = e.useRef([]),
                d = js(t) || 0;

            function h(e, t) {
                for (let s = e; s < t; s++) {
                    const e = l.current[s] || (l.current[s] = new zr(null, c.flush)),
                        t = r ? r(s, e) : n[s];
                    t && (u.current[s] = Mr(t))
                }
            }
            e.useMemo(() => {
                mn(l.current.slice(t, d), e => {
                    ! function(e, t) {
                        e.ref ? .delete(e), t ? .delete(e)
                    }(e, i), e.stop(!0)
                }), l.current.length = t, h(d, t)
            }, [t]), e.useMemo(() => {
                h(0, Math.min(d, t))
            }, s);
            const f = l.current.map((e, t) => Vr(e, u.current[t])),
                p = e.useContext(Yr),
                m = js(p),
                g = p !== m && function(e) {
                    for (const t in e) return !0;
                    return !1
                }(p);
            _s(() => {
                o.current++, c.ctrls = l.current;
                const {
                    queue: e
                } = c;
                e.length && (c.queue = [], mn(e, e => e())), mn(l.current, (e, t) => {
                    i ? .add(e), g && e.start({
                        default: p
                    });
                    const n = u.current[t];
                    n && (function(e, t) {
                        t && e.ref !== t && (e.ref ? .delete(e), t.add(e), e.ref = t)
                    }(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
                })
            }), Is(() => () => {
                mn(c.ctrls, e => e.stop(!0))
            });
            const b = f.map(e => ({ ...e
            }));
            return i ? [b, i] : b
        }(1, s ? t : [t], s ? [] : n);
    return s || 2 == arguments.length ? [r, i] : r
}
var Xr = class extends xr {
    constructor(e, t) {
        super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = es(...t);
        const n = this._get(),
            s = Us(n);
        Ns(this, s.create(n))
    }
    advance(e) {
        const t = this._get();
        pn(t, this.get()) || (As(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Jr(this._active) && Zr(this)
    }
    _get() {
        const e = fn.arr(this.source) ? this.source.map(rs) : bn(rs(this.source));
        return this.calc(...e)
    }
    _start() {
        this.idle && !Jr(this._active) && (this.idle = !1, mn(Os(this), e => {
            e.done = !1
        }), dn.skipAnimation ? (Kt.batchedUpdates(() => this.advance()), Zr(this)) : jn.start(this))
    }
    _attach() {
        let e = 1;
        mn(bn(this.source), t => {
            ss(t) && ls(t, this), vr(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
        }), this.priority = e, this._start()
    }
    _detach() {
        mn(bn(this.source), e => {
            ss(e) && us(e, this)
        }), this._active.clear(), Zr(this)
    }
    eventObserved(e) {
        "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = bn(this.source).reduce((e, t) => Math.max(e, (vr(t) ? t.priority : 0) + 1), 0))
    }
};

function Gr(e) {
    return !1 !== e.idle
}

function Jr(e) {
    return !e.size || Array.from(e).every(Gr)
}

function Zr(e) {
    e.idle || (e.idle = !0, mn(Os(e), e => {
        e.done = !0
    }), os(e, {
        type: "idle",
        parent: e
    }))
}
dn.assign({
    createStringInterpolator: xs,
    to: (e, t) => new Xr(e, t)
});
var ei = t(),
    ti = /^--/;

function ni(e, t) {
    return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || ti.test(e) || ri.hasOwnProperty(e) && ri[e] ? ("" + t).trim() : t + "px"
}
var si = {};
var ri = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    ii = ["Webkit", "Ms", "Moz", "O"];
ri = Object.keys(ri).reduce((e, t) => (ii.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), ri);
var oi = /^(matrix|translate|scale|rotate|skew)/,
    ai = /^(translate)/,
    ci = /^(rotate|skew)/,
    li = (e, t) => fn.num(e) && 0 !== e ? e + t : e,
    ui = (e, t) => fn.arr(e) ? e.every(e => ui(e, t)) : fn.num(e) ? e === t : parseFloat(e) === t,
    di = class extends Bs {
        constructor({
            x: e,
            y: t,
            z: n,
            ...s
        }) {
            const r = [],
                i = [];
            (e || t || n) && (r.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>li(e,"px")).join(",")})`, ui(e, 0)])), gn(s, (e, t) => {
                if ("transform" === t) r.push([e || ""]), i.push(e => [e, "" === e]);
                else if (oi.test(t)) {
                    if (delete s[t], fn.und(e)) return;
                    const n = ai.test(t) ? "px" : ci.test(t) ? "deg" : "";
                    r.push(bn(e)), i.push("rotate3d" === t ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${li(r,n)})`, ui(r, 0)] : e => [`${t}(${e.map(e=>li(e,n)).join(",")})`, ui(e, t.startsWith("scale") ? 1 : 0)])
                }
            }), r.length && (s.transform = new hi(r, i)), super(s)
        }
    },
    hi = class extends as {
        constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
        }
        get() {
            return this._value || (this._value = this._get())
        }
        _get() {
            let e = "",
                t = !0;
            return mn(this.inputs, (n, s) => {
                const r = rs(n[0]),
                    [i, o] = this.transforms[s](fn.arr(r) ? r : n.map(rs));
                e += " " + i, t = t && o
            }), t ? "none" : e
        }
        observerAdded(e) {
            1 == e && mn(this.inputs, e => mn(e, e => ss(e) && ls(e, this)))
        }
        observerRemoved(e) {
            0 == e && mn(this.inputs, e => mn(e, e => ss(e) && us(e, this)))
        }
        eventObserved(e) {
            "change" == e.type && (this._value = null), os(this, e)
        }
    };
dn.assign({
    batchedUpdates: ei.unstable_batchedUpdates,
    createStringInterpolator: xs,
    colors: {
        transparent: 0,
        aliceblue: 4042850303,
        antiquewhite: 4209760255,
        aqua: 16777215,
        aquamarine: 2147472639,
        azure: 4043309055,
        beige: 4126530815,
        bisque: 4293182719,
        black: 255,
        blanchedalmond: 4293643775,
        blue: 65535,
        blueviolet: 2318131967,
        brown: 2771004159,
        burlywood: 3736635391,
        burntsienna: 3934150143,
        cadetblue: 1604231423,
        chartreuse: 2147418367,
        chocolate: 3530104575,
        coral: 4286533887,
        cornflowerblue: 1687547391,
        cornsilk: 4294499583,
        crimson: 3692313855,
        cyan: 16777215,
        darkblue: 35839,
        darkcyan: 9145343,
        darkgoldenrod: 3095792639,
        darkgray: 2846468607,
        darkgreen: 6553855,
        darkgrey: 2846468607,
        darkkhaki: 3182914559,
        darkmagenta: 2332068863,
        darkolivegreen: 1433087999,
        darkorange: 4287365375,
        darkorchid: 2570243327,
        darkred: 2332033279,
        darksalmon: 3918953215,
        darkseagreen: 2411499519,
        darkslateblue: 1211993087,
        darkslategray: 793726975,
        darkslategrey: 793726975,
        darkturquoise: 13554175,
        darkviolet: 2483082239,
        deeppink: 4279538687,
        deepskyblue: 12582911,
        dimgray: 1768516095,
        dimgrey: 1768516095,
        dodgerblue: 512819199,
        firebrick: 2988581631,
        floralwhite: 4294635775,
        forestgreen: 579543807,
        fuchsia: 4278255615,
        gainsboro: 3705462015,
        ghostwhite: 4177068031,
        gold: 4292280575,
        goldenrod: 3668254975,
        gray: 2155905279,
        green: 8388863,
        greenyellow: 2919182335,
        grey: 2155905279,
        honeydew: 4043305215,
        hotpink: 4285117695,
        indianred: 3445382399,
        indigo: 1258324735,
        ivory: 4294963455,
        khaki: 4041641215,
        lavender: 3873897215,
        lavenderblush: 4293981695,
        lawngreen: 2096890111,
        lemonchiffon: 4294626815,
        lightblue: 2916673279,
        lightcoral: 4034953471,
        lightcyan: 3774873599,
        lightgoldenrodyellow: 4210742015,
        lightgray: 3553874943,
        lightgreen: 2431553791,
        lightgrey: 3553874943,
        lightpink: 4290167295,
        lightsalmon: 4288707327,
        lightseagreen: 548580095,
        lightskyblue: 2278488831,
        lightslategray: 2005441023,
        lightslategrey: 2005441023,
        lightsteelblue: 2965692159,
        lightyellow: 4294959359,
        lime: 16711935,
        limegreen: 852308735,
        linen: 4210091775,
        magenta: 4278255615,
        maroon: 2147483903,
        mediumaquamarine: 1724754687,
        mediumblue: 52735,
        mediumorchid: 3126187007,
        mediumpurple: 2473647103,
        mediumseagreen: 1018393087,
        mediumslateblue: 2070474495,
        mediumspringgreen: 16423679,
        mediumturquoise: 1221709055,
        mediumvioletred: 3340076543,
        midnightblue: 421097727,
        mintcream: 4127193855,
        mistyrose: 4293190143,
        moccasin: 4293178879,
        navajowhite: 4292783615,
        navy: 33023,
        oldlace: 4260751103,
        olive: 2155872511,
        olivedrab: 1804477439,
        orange: 4289003775,
        orangered: 4282712319,
        orchid: 3664828159,
        palegoldenrod: 4008225535,
        palegreen: 2566625535,
        paleturquoise: 2951671551,
        palevioletred: 3681588223,
        papayawhip: 4293907967,
        peachpuff: 4292524543,
        peru: 3448061951,
        pink: 4290825215,
        plum: 3718307327,
        powderblue: 2967529215,
        purple: 2147516671,
        rebeccapurple: 1714657791,
        red: 4278190335,
        rosybrown: 3163525119,
        royalblue: 1097458175,
        saddlebrown: 2336560127,
        salmon: 4202722047,
        sandybrown: 4104413439,
        seagreen: 780883967,
        seashell: 4294307583,
        sienna: 2689740287,
        silver: 3233857791,
        skyblue: 2278484991,
        slateblue: 1784335871,
        slategray: 1887473919,
        slategrey: 1887473919,
        snow: 4294638335,
        springgreen: 16744447,
        steelblue: 1182971135,
        tan: 3535047935,
        teal: 8421631,
        thistle: 3636451583,
        tomato: 4284696575,
        turquoise: 1088475391,
        violet: 4001558271,
        wheat: 4125012991,
        white: 4294967295,
        whitesmoke: 4126537215,
        yellow: 4294902015,
        yellowgreen: 2597139199
    }
});
var fi = ((e, {
    applyAnimatedValues: t = () => !1,
    createAnimatedStyle: n = e => new Bs(e),
    getComponentProps: s = e => e
} = {}) => {
    const r = {
            applyAnimatedValues: t,
            createAnimatedStyle: n,
            getComponentProps: s
        },
        i = e => {
            const t = Ys(e) || "Anonymous";
            return (e = fn.str(e) ? i[e] || (i[e] = Hs(e, r)) : e[Ks] || (e[Ks] = Hs(e, r))).displayName = `Animated(${t})`, e
        };
    return gn(e, (t, n) => {
        fn.arr(e) && (n = Ys(t)), i[n] = i(t)
    }), {
        animated: i
    }
})(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
    applyAnimatedValues: function(e, t) {
        if (!e.nodeType || !e.setAttribute) return !1;
        const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
            {
                className: s,
                style: r,
                children: i,
                scrollTop: o,
                scrollLeft: a,
                viewBox: c,
                ...l
            } = t,
            u = Object.values(l),
            d = Object.keys(l).map(t => n || e.hasAttribute(t) ? t : si[t] || (si[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
        void 0 !== i && (e.textContent = i);
        for (const h in r)
            if (r.hasOwnProperty(h)) {
                const t = ni(h, r[h]);
                ti.test(h) ? e.style.setProperty(h, t) : e.style[h] = t
            }
        d.forEach((t, n) => {
            e.setAttribute(t, u[n])
        }), void 0 !== s && (e.className = s), void 0 !== o && (e.scrollTop = o), void 0 !== a && (e.scrollLeft = a), void 0 !== c && e.setAttribute("viewBox", c)
    },
    createAnimatedStyle: e => new di(e),
    getComponentProps: ({
        scrollTop: e,
        scrollLeft: t,
        ...n
    }) => n
}).animated;
const pi = {
    toVector: (e, t) => (void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]),
    add: (e, t) => [e[0] + t[0], e[1] + t[1]],
    sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
    addTo(e, t) {
        e[0] += t[0], e[1] += t[1]
    },
    subTo(e, t) {
        e[0] -= t[0], e[1] -= t[1]
    }
};

function mi(e, t, n) {
    return 0 === t || Math.abs(t) === 1 / 0 ? Math.pow(e, 5 * n) : e * t * n / (t + n * e)
}

function gi(e, t, n, s = .15) {
    return 0 === s ? function(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }(e, t, n) : e < t ? -mi(t - e, n - t, s) + t : e > n ? +mi(e - n, n - t, s) + n : e
}

function bi(e) {
    var t = function(e, t) {
        if ("object" != typeof e || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var s = n.call(e, t);
            if ("object" != typeof s) return s;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }(e, "string");
    return "symbol" == typeof t ? t : String(t)
}

function yi(e, t, n) {
    return (t = bi(t)) in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function vi(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, s)
    }
    return n
}

function wi(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? vi(Object(n), !0).forEach(function(t) {
            yi(e, t, n[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vi(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
    }
    return e
}
const xi = {
    pointer: {
        start: "down",
        change: "move",
        end: "up"
    },
    mouse: {
        start: "down",
        change: "move",
        end: "up"
    },
    touch: {
        start: "start",
        change: "move",
        end: "end"
    },
    gesture: {
        start: "start",
        change: "change",
        end: "end"
    }
};

function ki(e) {
    return e ? e[0].toUpperCase() + e.slice(1) : ""
}
const Ci = ["enter", "leave"];

function Ti(e, t = "", n = !1) {
    const s = xi[e],
        r = s && s[t] || t;
    return "on" + ki(e) + ki(r) + (function(e = !1, t) {
        return e && !Ci.includes(t)
    }(n, r) ? "Capture" : "")
}
const Si = ["gotpointercapture", "lostpointercapture"];

function Ei(e) {
    let t = e.substring(2).toLowerCase();
    const n = !!~t.indexOf("passive");
    n && (t = t.replace("passive", ""));
    const s = Si.includes(t) ? "capturecapture" : "capture",
        r = !!~t.indexOf(s);
    return r && (t = t.replace("capture", "")), {
        device: t,
        capture: r,
        passive: n
    }
}

function _i(e) {
    return "touches" in e
}

function Ri(e) {
    return _i(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse"
}

function Ii(e) {
    return _i(e) ? function(e) {
        return "touchend" === e.type || "touchcancel" === e.type ? e.changedTouches : e.targetTouches
    }(e)[0] : e
}

function Pi(e) {
    return function(e) {
        return Array.from(e.touches).filter(t => {
            var n, s;
            return t.target === e.currentTarget || (null === (n = e.currentTarget) || void 0 === n || null === (s = n.contains) || void 0 === s ? void 0 : s.call(n, t.target))
        })
    }(e).map(e => e.identifier)
}

function ji(e) {
    const t = Ii(e);
    return _i(e) ? t.identifier : t.pointerId
}

function Mi(e) {
    const t = Ii(e);
    return [t.clientX, t.clientY]
}

function Ai(e, ...t) {
    return "function" == typeof e ? e(...t) : e
}

function Ni() {}

function Oi(...e) {
    return 0 === e.length ? Ni : 1 === e.length ? e[0] : function() {
        let t;
        for (const n of e) t = n.apply(this, arguments) || t;
        return t
    }
}

function Di(e, t) {
    return Object.assign({}, t, e || {})
}
class Li {
    constructor(e, t, n) {
        this.ctrl = e, this.args = t, this.key = n, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset())
    }
    get state() {
        return this.ctrl.state[this.key]
    }
    set state(e) {
        this.ctrl.state[this.key] = e
    }
    get shared() {
        return this.ctrl.state.shared
    }
    get eventStore() {
        return this.ctrl.gestureEventStores[this.key]
    }
    get timeoutStore() {
        return this.ctrl.gestureTimeoutStores[this.key]
    }
    get config() {
        return this.ctrl.config[this.key]
    }
    get sharedConfig() {
        return this.ctrl.config.shared
    }
    get handler() {
        return this.ctrl.handlers[this.key]
    }
    reset() {
        const {
            state: e,
            shared: t,
            ingKey: n,
            args: s
        } = this;
        t[n] = e._active = e.active = e._blocked = e._force = !1, e._step = [!1, !1], e.intentional = !1, e._movement = [0, 0], e._distance = [0, 0], e._direction = [0, 0], e._delta = [0, 0], e._bounds = [
            [-1 / 0, 1 / 0],
            [-1 / 0, 1 / 0]
        ], e.args = s, e.axis = void 0, e.memo = void 0, e.elapsedTime = e.timeDelta = 0, e.direction = [0, 0], e.distance = [0, 0], e.overflow = [0, 0], e._movementBound = [!1, !1], e.velocity = [0, 0], e.movement = [0, 0], e.delta = [0, 0], e.timeStamp = 0
    }
    start(e) {
        const t = this.state,
            n = this.config;
        t._active || (this.reset(), this.computeInitial(), t._active = !0, t.target = e.target, t.currentTarget = e.currentTarget, t.lastOffset = n.from ? Ai(n.from, t) : t.offset, t.offset = t.lastOffset, t.startTime = t.timeStamp = e.timeStamp)
    }
    computeValues(e) {
        const t = this.state;
        t._values = e, t.values = this.config.transform(e)
    }
    computeInitial() {
        const e = this.state;
        e._initial = e._values, e.initial = e.values
    }
    compute(e) {
        const {
            state: t,
            config: n,
            shared: s
        } = this;
        t.args = this.args;
        let r = 0;
        if (e && (t.event = e, n.preventDefault && e.cancelable && t.event.preventDefault(), t.type = e.type, s.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, s.locked = !!document.pointerLockElement, Object.assign(s, function(e) {
                const t = {};
                if ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e) {
                    const {
                        shiftKey: n,
                        altKey: s,
                        metaKey: r,
                        ctrlKey: i
                    } = e;
                    Object.assign(t, {
                        shiftKey: n,
                        altKey: s,
                        metaKey: r,
                        ctrlKey: i
                    })
                }
                return t
            }(e)), s.down = s.pressed = s.buttons % 2 == 1 || s.touches > 0, r = e.timeStamp - t.timeStamp, t.timeStamp = e.timeStamp, t.elapsedTime = t.timeStamp - t.startTime), t._active) {
            const e = t._delta.map(Math.abs);
            pi.addTo(t._distance, e)
        }
        this.axisIntent && this.axisIntent(e);
        const [i, o] = t._movement, [a, c] = n.threshold, {
            _step: l,
            values: u
        } = t;
        if (n.hasCustomTransform ? (!1 === l[0] && (l[0] = Math.abs(i) >= a && u[0]), !1 === l[1] && (l[1] = Math.abs(o) >= c && u[1])) : (!1 === l[0] && (l[0] = Math.abs(i) >= a && Math.sign(i) * a), !1 === l[1] && (l[1] = Math.abs(o) >= c && Math.sign(o) * c)), t.intentional = !1 !== l[0] || !1 !== l[1], !t.intentional) return;
        const d = [0, 0];
        if (n.hasCustomTransform) {
            const [e, t] = u;
            d[0] = !1 !== l[0] ? e - l[0] : 0, d[1] = !1 !== l[1] ? t - l[1] : 0
        } else d[0] = !1 !== l[0] ? i - l[0] : 0, d[1] = !1 !== l[1] ? o - l[1] : 0;
        this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
        const h = t.offset,
            f = t._active && !t._blocked || t.active;
        f && (t.first = t._active && !t.active, t.last = !t._active && t.active, t.active = s[this.ingKey] = t._active, e && (t.first && ("bounds" in n && (t._bounds = Ai(n.bounds, t)), this.setup && this.setup()), t.movement = d, this.computeOffset()));
        const [p, m] = t.offset, [
            [g, b],
            [y, v]
        ] = t._bounds;
        t.overflow = [p < g ? -1 : p > b ? 1 : 0, m < y ? -1 : m > v ? 1 : 0], t._movementBound[0] = !!t.overflow[0] && (!1 === t._movementBound[0] ? t._movement[0] : t._movementBound[0]), t._movementBound[1] = !!t.overflow[1] && (!1 === t._movementBound[1] ? t._movement[1] : t._movementBound[1]);
        const w = t._active && n.rubberband || [0, 0];
        if (t.offset = function(e, [t, n], [s, r]) {
                const [
                    [i, o],
                    [a, c]
                ] = e;
                return [gi(t, i, o, s), gi(n, a, c, r)]
            }(t._bounds, t.offset, w), t.delta = pi.sub(t.offset, h), this.computeMovement(), f && (!t.last || r > 32)) {
            t.delta = pi.sub(t.offset, h);
            const e = t.delta.map(Math.abs);
            pi.addTo(t.distance, e), t.direction = t.delta.map(Math.sign), t._direction = t._delta.map(Math.sign), !t.first && r > 0 && (t.velocity = [e[0] / r, e[1] / r], t.timeDelta = r)
        }
    }
    emit() {
        const e = this.state,
            t = this.shared,
            n = this.config;
        if (e._active || this.clean(), (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents) return;
        const s = this.handler(wi(wi(wi({}, t), e), {}, {
            [this.aliasKey]: e.values
        }));
        void 0 !== s && (e.memo = s)
    }
    clean() {
        this.eventStore.clean(), this.timeoutStore.clean()
    }
}
class Fi extends Li {
    constructor(...e) {
        super(...e), yi(this, "aliasKey", "xy")
    }
    reset() {
        super.reset(), this.state.axis = void 0
    }
    init() {
        this.state.offset = [0, 0], this.state.lastOffset = [0, 0]
    }
    computeOffset() {
        this.state.offset = pi.add(this.state.lastOffset, this.state.movement)
    }
    computeMovement() {
        this.state.movement = pi.sub(this.state.offset, this.state.lastOffset)
    }
    axisIntent(e) {
        const t = this.state,
            n = this.config;
        if (!t.axis && e) {
            const s = "object" == typeof n.axisThreshold ? n.axisThreshold[Ri(e)] : n.axisThreshold;
            t.axis = function([e, t], n) {
                const s = Math.abs(e),
                    r = Math.abs(t);
                return s > r && s > n ? "x" : r > s && r > n ? "y" : void 0
            }(t._movement, s)
        }
        t._blocked = (n.lockDirection || !!n.axis) && !t.axis || !!n.axis && n.axis !== t.axis
    }
    restrictToAxis(e) {
        if (this.config.axis || this.config.lockDirection) switch (this.state.axis) {
            case "x":
                e[1] = 0;
                break;
            case "y":
                e[0] = 0
        }
    }
}
const zi = e => e,
    Bi = {
        enabled: (e = !0) => e,
        eventOptions: (e, t, n) => wi(wi({}, n.shared.eventOptions), e),
        preventDefault: (e = !1) => e,
        triggerAllEvents: (e = !1) => e,
        rubberband(e = 0) {
            switch (e) {
                case !0:
                    return [.15, .15];
                case !1:
                    return [0, 0];
                default:
                    return pi.toVector(e)
            }
        },
        from: e => "function" == typeof e ? e : null != e ? pi.toVector(e) : void 0,
        transform(e, t, n) {
            const s = e || n.shared.transform;
            return this.hasCustomTransform = !!s, s || zi
        },
        threshold: e => pi.toVector(e, 0)
    },
    qi = wi(wi({}, Bi), {}, {
        axis(e, t, {
            axis: n
        }) {
            if (this.lockDirection = "lock" === n, !this.lockDirection) return n
        },
        axisThreshold: (e = 0) => e,
        bounds(e = {}) {
            if ("function" == typeof e) return t => qi.bounds(e(t));
            if ("current" in e) return () => e.current;
            if ("function" == typeof HTMLElement && e instanceof HTMLElement) return e;
            const {
                left: t = -1 / 0,
                right: n = 1 / 0,
                top: s = -1 / 0,
                bottom: r = 1 / 0
            } = e;
            return [
                [t, n],
                [s, r]
            ]
        }
    }),
    Vi = {
        ArrowRight: (e, t = 1) => [e * t, 0],
        ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
        ArrowUp: (e, t = 1) => [0, -1 * e * t],
        ArrowDown: (e, t = 1) => [0, e * t]
    };
const Ui = "undefined" != typeof window && window.document && window.document.createElement;

function Hi() {
    return Ui && "ontouchstart" in window
}
const $i = {
        isBrowser: Ui,
        gesture: function() {
            try {
                return "constructor" in GestureEvent
            } catch (e) {
                return !1
            }
        }(),
        touch: Hi(),
        touchscreen: Hi() || Ui && window.navigator.maxTouchPoints > 1,
        pointer: Ui && "onpointerdown" in window,
        pointerLock: Ui && "exitPointerLock" in window.document
    },
    Ki = {
        mouse: 0,
        touch: 0,
        pen: 8
    },
    Yi = wi(wi({}, qi), {}, {
        device(e, t, {
            pointer: {
                touch: n = !1,
                lock: s = !1,
                mouse: r = !1
            } = {}
        }) {
            return this.pointerLock = s && $i.pointerLock, $i.touch && n ? "touch" : this.pointerLock ? "mouse" : $i.pointer && !r ? "pointer" : $i.touch ? "touch" : "mouse"
        },
        preventScrollAxis(e, t, {
            preventScroll: n
        }) {
            if (this.preventScrollDelay = "number" == typeof n ? n : n || void 0 === n && e ? 250 : void 0, $i.touchscreen && !1 !== n) return e || (void 0 !== n ? "y" : void 0)
        },
        pointerCapture(e, t, {
            pointer: {
                capture: n = !0,
                buttons: s = 1,
                keys: r = !0
            } = {}
        }) {
            return this.pointerButtons = s, this.keys = r, !this.pointerLock && "pointer" === this.device && n
        },
        threshold(e, t, {
            filterTaps: n = !1,
            tapsThreshold: s = 3,
            axis: r
        }) {
            const i = pi.toVector(e, n ? s : r ? 1 : 0);
            return this.filterTaps = n, this.tapsThreshold = s, i
        },
        swipe({
            velocity: e = .5,
            distance: t = 50,
            duration: n = 250
        } = {}) {
            return {
                velocity: this.transform(pi.toVector(e)),
                distance: this.transform(pi.toVector(t)),
                duration: n
            }
        },
        delay(e = 0) {
            switch (e) {
                case !0:
                    return 180;
                case !1:
                    return 0;
                default:
                    return e
            }
        },
        axisThreshold: e => e ? wi(wi({}, Ki), e) : Ki,
        keyboardDisplacement: (e = 10) => e
    });
wi(wi({}, Bi), {}, {
    device(e, t, {
        shared: n,
        pointer: {
            touch: s = !1
        } = {}
    }) {
        if (n.target && !$i.touch && $i.gesture) return "gesture";
        if ($i.touch && s) return "touch";
        if ($i.touchscreen) {
            if ($i.pointer) return "pointer";
            if ($i.touch) return "touch"
        }
    },
    bounds(e, t, {
        scaleBounds: n = {},
        angleBounds: s = {}
    }) {
        const r = e => {
                const t = Di(Ai(n, e), {
                    min: -1 / 0,
                    max: 1 / 0
                });
                return [t.min, t.max]
            },
            i = e => {
                const t = Di(Ai(s, e), {
                    min: -1 / 0,
                    max: 1 / 0
                });
                return [t.min, t.max]
            };
        return "function" != typeof n && "function" != typeof s ? [r(), i()] : e => [r(e), i(e)]
    },
    threshold(e, t, n) {
        this.lockDirection = "lock" === n.axis;
        return pi.toVector(e, this.lockDirection ? [.1, 3] : 0)
    },
    modifierKey: e => void 0 === e ? "ctrlKey" : e,
    pinchOnWheel: (e = !0) => e
}), wi(wi({}, qi), {}, {
    mouseOnly: (e = !0) => e
}), wi(wi({}, qi), {}, {
    mouseOnly: (e = !0) => e
});
const Qi = new Map,
    Wi = new Map;
const Xi = {
    key: "drag",
    engine: class extends Fi {
        constructor(...e) {
            super(...e), yi(this, "ingKey", "dragging")
        }
        reset() {
            super.reset();
            const e = this.state;
            e._pointerId = void 0, e._pointerActive = !1, e._keyboardActive = !1, e._preventScroll = !1, e._delayed = !1, e.swipe = [0, 0], e.tap = !1, e.canceled = !1, e.cancel = this.cancel.bind(this)
        }
        setup() {
            const e = this.state;
            if (e._bounds instanceof HTMLElement) {
                const t = e._bounds.getBoundingClientRect(),
                    n = e.currentTarget.getBoundingClientRect(),
                    s = {
                        left: t.left - n.left + e.offset[0],
                        right: t.right - n.right + e.offset[0],
                        top: t.top - n.top + e.offset[1],
                        bottom: t.bottom - n.bottom + e.offset[1]
                    };
                e._bounds = qi.bounds(s)
            }
        }
        cancel() {
            const e = this.state;
            e.canceled || (e.canceled = !0, e._active = !1, setTimeout(() => {
                this.compute(), this.emit()
            }, 0))
        }
        setActive() {
            this.state._active = this.state._pointerActive || this.state._keyboardActive
        }
        clean() {
            this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean()
        }
        pointerDown(e) {
            const t = this.config,
                n = this.state;
            if (null != e.buttons && (Array.isArray(t.pointerButtons) ? !t.pointerButtons.includes(e.buttons) : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)) return;
            const s = this.ctrl.setEventIds(e);
            t.pointerCapture && e.target.setPointerCapture(e.pointerId), s && s.size > 1 && n._pointerActive || (this.start(e), this.setupPointer(e), n._pointerId = ji(e), n._pointerActive = !0, this.computeValues(Mi(e)), this.computeInitial(), t.preventScrollAxis && "mouse" !== Ri(e) ? (n._active = !1, this.setupScrollPrevention(e)) : t.delay > 0 ? (this.setupDelayTrigger(e), t.triggerAllEvents && (this.compute(e), this.emit())) : this.startPointerDrag(e))
        }
        startPointerDrag(e) {
            const t = this.state;
            t._active = !0, t._preventScroll = !0, t._delayed = !1, this.compute(e), this.emit()
        }
        pointerMove(e) {
            const t = this.state,
                n = this.config;
            if (!t._pointerActive) return;
            const s = ji(e);
            if (void 0 !== t._pointerId && s !== t._pointerId) return;
            const r = Mi(e);
            return document.pointerLockElement === e.target ? t._delta = [e.movementX, e.movementY] : (t._delta = pi.sub(r, t._values), this.computeValues(r)), pi.addTo(t._movement, t._delta), this.compute(e), t._delayed && t.intentional ? (this.timeoutStore.remove("dragDelay"), t.active = !1, void this.startPointerDrag(e)) : n.preventScrollAxis && !t._preventScroll ? t.axis ? t.axis === n.preventScrollAxis || "xy" === n.preventScrollAxis ? (t._active = !1, void this.clean()) : (this.timeoutStore.remove("startPointerDrag"), void this.startPointerDrag(e)) : void 0 : void this.emit()
        }
        pointerUp(e) {
            this.ctrl.setEventIds(e);
            try {
                this.config.pointerCapture && e.target.hasPointerCapture(e.pointerId) && e.target.releasePointerCapture(e.pointerId)
            } catch (o) {}
            const t = this.state,
                n = this.config;
            if (!t._active || !t._pointerActive) return;
            const s = ji(e);
            if (void 0 !== t._pointerId && s !== t._pointerId) return;
            this.state._pointerActive = !1, this.setActive(), this.compute(e);
            const [r, i] = t._distance;
            if (t.tap = r <= n.tapsThreshold && i <= n.tapsThreshold, t.tap && n.filterTaps) t._force = !0;
            else {
                const [e, s] = t._delta, [r, i] = t._movement, [o, a] = n.swipe.velocity, [c, l] = n.swipe.distance, u = n.swipe.duration;
                if (t.elapsedTime < u) {
                    const n = Math.abs(e / t.timeDelta),
                        u = Math.abs(s / t.timeDelta);
                    n > o && Math.abs(r) > c && (t.swipe[0] = Math.sign(e)), u > a && Math.abs(i) > l && (t.swipe[1] = Math.sign(s))
                }
            }
            this.emit()
        }
        pointerClick(e) {
            !this.state.tap && e.detail > 0 && (e.preventDefault(), e.stopPropagation())
        }
        setupPointer(e) {
            const t = this.config,
                n = t.device;
            t.pointerLock && e.currentTarget.requestPointerLock(), t.pointerCapture || (this.eventStore.add(this.sharedConfig.window, n, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, n, "cancel", this.pointerUp.bind(this)))
        }
        pointerClean() {
            this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock()
        }
        preventScroll(e) {
            this.state._preventScroll && e.cancelable && e.preventDefault()
        }
        setupScrollPrevention(e) {
            this.state._preventScroll = !1,
                function(e) {
                    "persist" in e && "function" == typeof e.persist && e.persist()
                }(e);
            const t = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
                passive: !1
            });
            this.eventStore.add(this.sharedConfig.window, "touch", "end", t), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, e)
        }
        setupDelayTrigger(e) {
            this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
                this.state._step = [0, 0], this.startPointerDrag(e)
            }, this.config.delay)
        }
        keyDown(e) {
            const t = Vi[e.key];
            if (t) {
                const n = this.state,
                    s = e.shiftKey ? 10 : e.altKey ? .1 : 1;
                this.start(e), n._delta = t(this.config.keyboardDisplacement, s), n._keyboardActive = !0, pi.addTo(n._movement, n._delta), this.compute(e), this.emit()
            }
        }
        keyUp(e) {
            e.key in Vi && (this.state._keyboardActive = !1, this.setActive(), this.compute(e), this.emit())
        }
        bind(e) {
            const t = this.config.device;
            e(t, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (e(t, "change", this.pointerMove.bind(this)), e(t, "end", this.pointerUp.bind(this)), e(t, "cancel", this.pointerUp.bind(this)), e("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (e("key", "down", this.keyDown.bind(this)), e("key", "up", this.keyUp.bind(this))), this.config.filterTaps && e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1
            })
        }
    },
    resolver: Yi
};

function Gi(e, t) {
    if (null == e) return {};
    var n, s, r = function(e, t) {
        if (null == e) return {};
        var n, s, r = {},
            i = Object.keys(e);
        for (s = 0; s < i.length; s++) n = i[s], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (s = 0; s < i.length; s++) n = i[s], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
}
const Ji = {
        target(e) {
            if (e) return () => "current" in e ? e.current : e
        },
        enabled: (e = !0) => e,
        window: (e = ($i.isBrowser ? window : void 0)) => e,
        eventOptions: ({
            passive: e = !0,
            capture: t = !1
        } = {}) => ({
            passive: e,
            capture: t
        }),
        transform: e => e
    },
    Zi = ["target", "eventOptions", "window", "enabled", "transform"];

function eo(e = {}, t) {
    const n = {};
    for (const [s, r] of Object.entries(t)) switch (typeof r) {
        case "function":
            n[s] = r.call(n, e[s], s, e);
            break;
        case "object":
            n[s] = eo(e[s], r);
            break;
        case "boolean":
            r && (n[s] = e[s])
    }
    return n
}
class to {
    constructor(e, t) {
        yi(this, "_listeners", new Set), this._ctrl = e, this._gestureKey = t
    }
    add(e, t, n, s, r) {
        const i = this._listeners,
            o = function(e, t = "") {
                const n = xi[e];
                return e + (n && n[t] || t)
            }(t, n),
            a = wi(wi({}, this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}), r);
        e.addEventListener(o, s, a);
        const c = () => {
            e.removeEventListener(o, s, a), i.delete(c)
        };
        return i.add(c), c
    }
    clean() {
        this._listeners.forEach(e => e()), this._listeners.clear()
    }
}
class no {
    constructor() {
        yi(this, "_timeouts", new Map)
    }
    add(e, t, n = 140, ...s) {
        this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...s))
    }
    remove(e) {
        const t = this._timeouts.get(e);
        t && window.clearTimeout(t)
    }
    clean() {
        this._timeouts.forEach(e => {
            window.clearTimeout(e)
        }), this._timeouts.clear()
    }
}
class so {
    constructor(e) {
        yi(this, "gestures", new Set), yi(this, "_targetEventStore", new to(this)), yi(this, "gestureEventStores", {}), yi(this, "gestureTimeoutStores", {}), yi(this, "handlers", {}), yi(this, "config", {}), yi(this, "pointerIds", new Set), yi(this, "touchIds", new Set), yi(this, "state", {
                shared: {
                    shiftKey: !1,
                    metaKey: !1,
                    ctrlKey: !1,
                    altKey: !1
                }
            }),
            function(e, t) {
                t.drag && ro(e, "drag");
                t.wheel && ro(e, "wheel");
                t.scroll && ro(e, "scroll");
                t.move && ro(e, "move");
                t.pinch && ro(e, "pinch");
                t.hover && ro(e, "hover")
            }(this, e)
    }
    setEventIds(e) {
        return _i(e) ? (this.touchIds = new Set(Pi(e)), this.touchIds) : "pointerId" in e ? ("pointerup" === e.type || "pointercancel" === e.type ? this.pointerIds.delete(e.pointerId) : "pointerdown" === e.type && this.pointerIds.add(e.pointerId), this.pointerIds) : void 0
    }
    applyHandlers(e, t) {
        this.handlers = e, this.nativeHandlers = t
    }
    applyConfig(e, t) {
        this.config = function(e, t, n = {}) {
            const s = e,
                {
                    target: r,
                    eventOptions: i,
                    window: o,
                    enabled: a,
                    transform: c
                } = s,
                l = Gi(s, Zi);
            if (n.shared = eo({
                    target: r,
                    eventOptions: i,
                    window: o,
                    enabled: a,
                    transform: c
                }, Ji), t) {
                const e = Wi.get(t);
                n[t] = eo(wi({
                    shared: n.shared
                }, l), e)
            } else
                for (const u in l) {
                    const e = Wi.get(u);
                    e && (n[u] = eo(wi({
                        shared: n.shared
                    }, l[u]), e))
                }
            return n
        }(e, t, this.config)
    }
    clean() {
        this._targetEventStore.clean();
        for (const e of this.gestures) this.gestureEventStores[e].clean(), this.gestureTimeoutStores[e].clean()
    }
    effect() {
        return this.config.shared.target && this.bind(), () => this._targetEventStore.clean()
    }
    bind(...e) {
        const t = this.config.shared,
            n = {};
        let s;
        if (!t.target || (s = t.target(), s)) {
            if (t.enabled) {
                for (const t of this.gestures) {
                    const r = this.config[t],
                        i = io(n, r.eventOptions, !!s);
                    if (r.enabled) {
                        new(Qi.get(t))(this, e, t).bind(i)
                    }
                }
                const r = io(n, t.eventOptions, !!s);
                for (const t in this.nativeHandlers) r(t, "", n => this.nativeHandlers[t](wi(wi({}, this.state.shared), {}, {
                    event: n,
                    args: e
                })), void 0, !0)
            }
            for (const e in n) n[e] = Oi(...n[e]);
            if (!s) return n;
            for (const e in n) {
                const {
                    device: t,
                    capture: r,
                    passive: i
                } = Ei(e);
                this._targetEventStore.add(s, t, "", n[e], {
                    capture: r,
                    passive: i
                })
            }
        }
    }
}

function ro(e, t) {
    e.gestures.add(t), e.gestureEventStores[t] = new to(e, t), e.gestureTimeoutStores[t] = new no
}
const io = (e, t, n) => (s, r, i, o = {}, a = !1) => {
    var c, l;
    const u = null !== (c = o.capture) && void 0 !== c ? c : t.capture,
        d = null !== (l = o.passive) && void 0 !== l ? l : t.passive;
    let h = a ? s : Ti(s, r, u);
    n && d && (h += "Passive"), e[h] = e[h] || [], e[h].push(i)
};

function oo(e, t) {
    var s;
    return s = Xi, Qi.set(s.key, s.engine), Wi.set(s.key, s.resolver),
        function(e, t = {}, s, r) {
            const i = n.useMemo(() => new so(e), []);
            if (i.applyHandlers(e, r), i.applyConfig(t, s), n.useEffect(i.effect.bind(i)), n.useEffect(() => i.clean.bind(i), []), void 0 === t.target) return i.bind.bind(i)
        }({
            drag: e
        }, t || {}, "drag")
}
const ao = {
        delta: 10,
        preventScrollOnSwipe: !1,
        rotationAngle: 0,
        trackMouse: !1,
        trackTouch: !0,
        swipeDuration: 1 / 0,
        touchEventOptions: {
            passive: !0
        }
    },
    co = {
        first: !0,
        initial: [0, 0],
        start: 0,
        swiping: !1,
        xy: [0, 0]
    },
    lo = "mousemove",
    uo = "mouseup";

function ho(e, t) {
    if (0 === t) return e;
    const n = Math.PI / 180 * t;
    return [e[0] * Math.cos(n) + e[1] * Math.sin(n), e[1] * Math.cos(n) - e[0] * Math.sin(n)]
}

function fo(e, t) {
    const n = t => {
            const n = "touches" in t;
            n && t.touches.length > 1 || e((e, r) => {
                r.trackMouse && !n && (document.addEventListener(lo, s), document.addEventListener(uo, i));
                const {
                    clientX: o,
                    clientY: a
                } = n ? t.touches[0] : t, c = ho([o, a], r.rotationAngle);
                return r.onTouchStartOrOnMouseDown && r.onTouchStartOrOnMouseDown({
                    event: t
                }), Object.assign(Object.assign(Object.assign({}, e), co), {
                    initial: c.slice(),
                    xy: c,
                    start: t.timeStamp || 0
                })
            })
        },
        s = t => {
            e((e, n) => {
                const s = "touches" in t;
                if (s && t.touches.length > 1) return e;
                if (t.timeStamp - e.start > n.swipeDuration) return e.swiping ? Object.assign(Object.assign({}, e), {
                    swiping: !1
                }) : e;
                const {
                    clientX: r,
                    clientY: i
                } = s ? t.touches[0] : t, [o, a] = ho([r, i], n.rotationAngle), c = o - e.xy[0], l = a - e.xy[1], u = Math.abs(c), d = Math.abs(l), h = (t.timeStamp || 0) - e.start, f = Math.sqrt(u * u + d * d) / (h || 1), p = [c / (h || 1), l / (h || 1)], m = function(e, t, n, s) {
                    return e > t ? n > 0 ? "Right" : "Left" : s > 0 ? "Down" : "Up"
                }(u, d, c, l), g = "number" == typeof n.delta ? n.delta : n.delta[m.toLowerCase()] || ao.delta;
                if (u < g && d < g && !e.swiping) return e;
                const b = {
                    absX: u,
                    absY: d,
                    deltaX: c,
                    deltaY: l,
                    dir: m,
                    event: t,
                    first: e.first,
                    initial: e.initial,
                    velocity: f,
                    vxvy: p
                };
                b.first && n.onSwipeStart && n.onSwipeStart(b), n.onSwiping && n.onSwiping(b);
                let y = !1;
                return (n.onSwiping || n.onSwiped || n[`onSwiped${m}`]) && (y = !0), y && n.preventScrollOnSwipe && n.trackTouch && t.cancelable && t.preventDefault(), Object.assign(Object.assign({}, e), {
                    first: !1,
                    eventData: b,
                    swiping: !0
                })
            })
        },
        r = t => {
            e((e, n) => {
                let s;
                if (e.swiping && e.eventData) {
                    if (t.timeStamp - e.start < n.swipeDuration) {
                        s = Object.assign(Object.assign({}, e.eventData), {
                            event: t
                        }), n.onSwiped && n.onSwiped(s);
                        const r = n[`onSwiped${s.dir}`];
                        r && r(s)
                    }
                } else n.onTap && n.onTap({
                    event: t
                });
                return n.onTouchEndOrOnMouseUp && n.onTouchEndOrOnMouseUp({
                    event: t
                }), Object.assign(Object.assign(Object.assign({}, e), co), {
                    eventData: s
                })
            })
        },
        i = e => {
            document.removeEventListener(lo, s), document.removeEventListener(uo, i), r(e)
        },
        o = (e, t) => {
            let i = () => {};
            if (e && e.addEventListener) {
                const o = Object.assign(Object.assign({}, ao.touchEventOptions), t.touchEventOptions),
                    a = [
                        ["touchstart", n, o],
                        ["touchmove", s, Object.assign(Object.assign({}, o), t.preventScrollOnSwipe ? {
                            passive: !1
                        } : {})],
                        ["touchend", r, o]
                    ];
                a.forEach(([t, n, s]) => e.addEventListener(t, n, s)), i = () => a.forEach(([t, n]) => e.removeEventListener(t, n))
            }
            return i
        },
        a = {
            ref: t => {
                null !== t && e((e, n) => {
                    if (e.el === t) return e;
                    const s = {};
                    return e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), s.cleanUpTouch = void 0), n.trackTouch && t && (s.cleanUpTouch = o(t, n)), Object.assign(Object.assign(Object.assign({}, e), {
                        el: t
                    }), s)
                })
            }
        };
    return t.trackMouse && (a.onMouseDown = n), [a, o]
}

function po(t) {
    const {
        trackMouse: n
    } = t, s = e.useRef(Object.assign({}, co)), r = e.useRef(Object.assign({}, ao)), i = e.useRef(Object.assign({}, r.current));
    let o;
    for (o in i.current = Object.assign({}, r.current), r.current = Object.assign(Object.assign({}, ao), t), ao) void 0 === r.current[o] && (r.current[o] = ao[o]);
    const [a, c] = e.useMemo(() => fo(e => s.current = e(s.current, r.current), {
        trackMouse: n
    }), [n]);
    return s.current = function(e, t, n, s) {
        return t.trackTouch && e.el ? e.cleanUpTouch ? t.preventScrollOnSwipe !== n.preventScrollOnSwipe || t.touchEventOptions.passive !== n.touchEventOptions.passive ? (e.cleanUpTouch(), Object.assign(Object.assign({}, e), {
            cleanUpTouch: s(e.el, t)
        })) : e : Object.assign(Object.assign({}, e), {
            cleanUpTouch: s(e.el, t)
        }) : (e.cleanUpTouch && e.cleanUpTouch(), Object.assign(Object.assign({}, e), {
            cleanUpTouch: void 0
        }))
    }(s.current, r.current, i.current, c), a
}

function mo() {
    const t = s(r),
        n = i(r),
        [u, d] = e.useState(0),
        h = e.useRef(new Set),
        f = e.useRef(null),
        {
            t: p
        } = Be(),
        {
            sendTelemetry: m,
            baseTelemetryFields: g
        } = Ot();
    e.useLayoutEffect(() => {
        if (t) {
            const e = Math.max(0, Math.min(t.initialIndex, t.images.length - 1));
            d(e), h.current = new Set([e])
        }
    }, [t]);
    const b = e.useCallback(() => {
            n(null)
        }, [n]),
        y = e.useCallback(e => {
            if (!t || 0 === t.images.length) return;
            const n = (e % t.images.length + t.images.length) % t.images.length;
            d(n), h.current.add(n)
        }, [t]);
    e.useEffect(() => {
        if (!t) return;
        const e = e => {
            switch (e.key) {
                case "Escape":
                    e.stopPropagation(), b();
                    break;
                case "ArrowLeft":
                    e.stopPropagation(), y(u - 1);
                    break;
                case "ArrowRight":
                    e.stopPropagation(), y(u + 1)
            }
        };
        return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
    }, [t, u, b, y]), e.useEffect(() => {
        t && f.current && f.current.focus()
    }, [t]);
    const v = po({
        onSwipedLeft: () => y(u + 1),
        onSwipedRight: () => y(u - 1),
        swipeDuration: 500
    });
    if (!t) return null;
    const {
        images: w,
        backLabel: x
    } = t, k = w[u], C = w.length > 1;
    return o.jsxs("div", {
        ref: f,
        className: "absolute inset-0 z-modal flex flex-col gap-xl overflow-hidden bg-black/65 backdrop-blur-sm",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": x,
        tabIndex: -1,
        "data-testid": "image-carousel",
        children: [o.jsx("div", {
            className: "flex shrink-0 items-center gap-s px-l pt-10",
            children: o.jsxs("button", {
                onClick: () => {
                    m(c({
                        baseFields: g,
                        chatClickType: l.ImageCarouselBack,
                        metadata: {
                            imagesViewed: h.current.size,
                            totalImages: w.length
                        }
                    })), b()
                },
                className: "flex cursor-pointer items-center gap-s text-base-body font-bold text-white",
                "aria-label": x,
                "data-testid": "image-carousel-back",
                children: [o.jsx(qe, {
                    className: "icon"
                }), o.jsx("span", {
                    children: x
                })]
            })
        }), o.jsx("div", { ...v,
            className: "flex min-h-0 flex-1 items-center justify-center",
            children: k && o.jsx("img", {
                src: k.ImageUrl,
                alt: k.Description,
                className: "size-full object-contain",
                "data-testid": "image-carousel-image"
            })
        }), C && o.jsx("div", {
            className: "flex shrink-0 items-center justify-center gap-s pb-xxxl",
            role: "tablist",
            children: w.map((e, t) => o.jsxs("button", {
                onClick: () => y(t),
                className: Ve("relative size-15 shrink-0 cursor-pointer overflow-hidden rounded-sm", t === u && "border border-white"),
                role: "tab",
                "aria-selected": t === u,
                "aria-label": p(a.CAROUSEL.IMAGE_CAROUSEL_LABEL, {
                    index: t + 1,
                    total: w.length,
                    description: e.Description
                }),
                "data-testid": `image-carousel-thumb-${t}`,
                children: [o.jsx("img", {
                    src: e.ImageUrl,
                    alt: e.Description,
                    className: "size-full object-cover"
                }), t === u && o.jsx("div", {
                    className: "pointer-events-none absolute inset-0 bg-black/50"
                })]
            }, t))
        })]
    })
}

function go(e) {
    return Math.min(1, Math.max(0, e))
}

function bo(t) {
    const n = u(),
        r = s(d);
    return e.useMemo(() => {
        const e = "light" === n ? r ? .accent : r ? .accentDark;
        if (!e) return "white";
        const t = function(e) {
            const t = document.createElement("canvas").getContext("2d");
            if (!t) return null;
            t.fillStyle = e;
            const n = t.fillStyle;
            if (n.startsWith("#")) {
                const e = n.slice(1);
                if (3 === e.length || 4 === e.length) return [parseInt(`${e[0]}${e[0]}`, 16), parseInt(`${e[1]}${e[1]}`, 16), parseInt(`${e[2]}${e[2]}`, 16), 4 === e.length ? parseInt(`${e[3]}${e[3]}`, 16) / 255 : 1];
                if (6 === e.length || 8 === e.length) return [parseInt(e.slice(0, 2), 16), parseInt(e.slice(2, 4), 16), parseInt(e.slice(4, 6), 16), 8 === e.length ? parseInt(e.slice(6, 8), 16) / 255 : 1]
            } else if (n.startsWith("rgb")) {
                const e = n.match(/rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)(?:\s*,\s*(\d*\.?\d+))?\s*\)/);
                if (e) return [Number(e[1]), Number(e[2]), Number(e[3]), go(e[4] ? Number(e[4]) : 1)]
            }
            return null
        }(e);
        if (!t) return "white";
        const [s, i, o, a] = t, c = go(1 * a), l = "light" === n ? 255 : 0, u = function(e, t, n) {
            const s = e => {
                const t = e / 255;
                return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4
            };
            return .2126 * s(e) + .7152 * s(t) + .0722 * s(n)
        }(Math.round(s * c + l * (1 - c)), Math.round(i * c + l * (1 - c)), Math.round(o * c + l * (1 - c)));
        return u > .179 ? "black" : "white"
    }, [n, r ? .accent, r ? .accentDark, t])
}
const yo = e.forwardRef(function({
    className: e,
    onClick: t,
    sparkleSize: n
}, s) {
    const r = Ht() || h,
        i = bo(),
        {
            isBubbleEntrypoint: a
        } = Ue();
    return o.jsx("div", {
        ref: s,
        className: Ve("relative overflow-hidden rounded-full", a && "entrypoint-shadow", e),
        children: o.jsx("div", {
            className: Ve("flex-center size-full shrink-0 rounded-full", r ? "bg-(--accent) dark:bg-(--accent-dark)" : "agent-avatar-bg"),
            onClick: t,
            role: t ? "button" : void 0,
            tabIndex: t ? 0 : void 0,
            "aria-label": t ? "AI assistant" : void 0,
            onKeyDown: t ? e => {
                "Enter" !== e.key && " " !== e.key || (e.preventDefault(), t())
            } : void 0,
            children: o.jsx(He, {
                style: {
                    color: i
                },
                className: Ve(!r && "agent-avatar-sparkle"),
                fontSize: n
            })
        })
    })
});

function vo({
    agentName: t,
    className: n,
    showDragHandle: r = !1,
    onClose: u,
    isPanelMode: d,
    onPanelToggle: h,
    isRTL: g
}) {
    const b = i(f),
        y = s(p),
        {
            sendTelemetry: v,
            baseTelemetryFields: w
        } = Ot(),
        {
            handleCartClick: x
        } = $e(),
        {
            t: k
        } = Be(),
        C = s(m),
        T = C ? .itemsCount ? ? C ? .items.length ? ? 0,
        S = T > 0,
        E = e.useRef(null);
    return o.jsxs("div", {
        className: Ve("@container relative z-overlay flex shrink-0 flex-col transition-shadow duration-100", y && "shadow-medium", n),
        children: [r && o.jsx("div", {
            className: "flex-center w-full pt-m pb-xs",
            onContextMenu: e => {
                e.preventDefault()
            },
            children: o.jsx("div", {
                "data-testid": "drag-handle",
                className: "h-[3px] w-8 rounded-full bg-stroke-1"
            })
        }), o.jsxs("div", {
            className: Ve("flex items-center justify-between px-xl pb-xl", r ? "pt-m" : "pt-xl"),
            children: [o.jsxs("div", {
                className: "flex items-center gap-m",
                children: [o.jsx(yo, {
                    className: "size-11",
                    sparkleSize: 24
                }), o.jsx("span", {
                    className: "text-base-body font-bold text-foreground-1",
                    children: t
                })]
            }), o.jsxs("div", {
                className: "flex items-center gap-xs",
                children: [o.jsxs("button", {
                    type: "button",
                    onClick: x,
                    className: "flex-center relative cursor-pointer rounded-lg p-s text-foreground-1 hover:bg-background-1-hover hover:text-foreground-2 active:bg-background-1-selected",
                    "aria-label": S ? k(a.CART.LABEL, {
                        count: T
                    }) : k(a.CART.CART),
                    children: [S && o.jsx("span", {
                        "aria-hidden": "true",
                        className: "absolute top-[10px] right-[9px] size-2 rounded-full bg-(--accent) dark:bg-(--accent-dark)"
                    }), o.jsx(Ke, {})]
                }), h && o.jsx("button", {
                    type: "button",
                    onClick: h,
                    className: "flex-center cursor-pointer rounded-lg p-s text-foreground-1 hover:bg-background-1-hover hover:text-foreground-2 active:bg-background-1-selected",
                    "aria-label": k(d ? a.ACTIONS.MINIMIZE : a.ACTIONS.EXPAND),
                    children: d ? o.jsx(Ye, {}) : g ? o.jsx(Qe, {}) : o.jsx(We, {})
                }), o.jsx(Xe, {
                    ref: E,
                    anchor: o.jsx("button", {
                        type: "button",
                        className: "flex-center cursor-pointer rounded-lg p-s text-foreground-1 hover:bg-background-1-hover hover:text-foreground-2 active:bg-background-1-selected",
                        "aria-label": k(a.MENU.MENU),
                        children: o.jsx(Je, {})
                    }),
                    className: "end-0 mt-5 items-center justify-between overflow-x-hidden overflow-y-auto rounded-3xl bg-white/80 p-l shadow-medium backdrop-blur-lg @md:w-100 @md:gap-xl @md:p-xxl dark:bg-black/80",
                    style: {
                        maxHeight: "calc(100vh - 150px)"
                    },
                    v2: !0,
                    children: o.jsx(Ge, {
                        onSessionRestart: () => E.current ? .close()
                    })
                }), o.jsx("button", {
                    type: "button",
                    onClick: () => {
                        u ? u() : b(!0), v(c({
                            baseFields: w,
                            chatClickType: l.BackButton
                        }))
                    },
                    className: "flex-center cursor-pointer rounded-lg p-s text-foreground-1 hover:bg-background-1-hover hover:text-foreground-2 active:bg-background-1-selected",
                    "aria-label": k(a.ACTIONS.CLOSE),
                    children: o.jsx(Ze, {})
                })]
            })]
        })]
    })
}
const wo = 30,
    xo = 100;

function ko({
    children: t,
    sendMessage: n,
    entrypointRef: r,
    isComposerDisabled: a
}) {
    const c = s(d),
        l = i(f),
        u = s(g),
        h = e.useRef(null),
        p = e.useRef(null);
    p.current = u;
    const m = e.useRef("mid"),
        [{
            y: b
        }, y] = Wr(() => ({
            from: {
                y: xo
            },
            config: {
                tension: 300,
                friction: 30
            },
            onRest: e => {
                e.finished && Math.abs(e.value.y - xo) < .5 && l(!0)
            }
        }));
    e.useEffect(() => {
        y.start({
            y: wo,
            immediate: !1
        })
    }, []);
    const v = e.useCallback(e => {
            0 === e ? m.current = "full" : e === wo && (m.current = "mid"), y.start({
                y: e,
                immediate: !1
            })
        }, [y]),
        w = e.useCallback(() => {
            y.start({
                y: xo,
                immediate: !1,
                config: {
                    tension: 300,
                    friction: 30
                }
            })
        }, [y]);
    et({
        isActive: !0,
        containerRef: h,
        returnFocusRef: r,
        initialFocusRef: p,
        onEscape: () => w()
    });
    const x = oo(({
        last: e,
        velocity: [, t],
        direction: [, n],
        movement: [s, r],
        cancel: i,
        target: o,
        memo: a
    }) => {
        if (!(o instanceof Element)) return a;
        const c = Math.abs(s) > Math.abs(r);
        if (!a && c) return i(), a;
        const l = o.closest("main");
        if (!a && (l ? .scrollTop ? ? 0) > 5 && n > 0) return i(), a;
        const u = a ? ? !0,
            d = "full" === m.current ? 0 : wo,
            h = r / window.innerHeight * 100,
            f = Math.max(0, d + h);
        if (e) {
            const e = t > .5 && n > 0,
                s = t > .5 && n < 0,
                i = Math.abs(r) > 50;
            if (e) "full" === m.current ? v(wo) : w();
            else if (s) v(0);
            else if (i) {
                const e = Math.abs(f - 0),
                    t = Math.abs(f - wo),
                    n = Math.abs(f - xo);
                n < t && n < e ? w() : v(e < t ? 0 : wo)
            } else v(d)
        } else y.start({
            y: f,
            immediate: !0
        });
        return u
    }, {
        filterTaps: !0,
        rubberband: !0,
        threshold: 10
    });
    return o.jsxs(o.Fragment, {
        children: [o.jsx(fi.div, {
            className: "fixed inset-0 z-modal bg-black",
            style: {
                opacity: b.to([0, wo, xo], [.5, .5, 0]),
                pointerEvents: b.to(e => e >= xo ? "none" : "auto")
            },
            onClick: w
        }), o.jsxs(fi.div, {
            ref: h,
            ...x(),
            role: "dialog",
            "aria-modal": "true",
            "data-testid": "bottom-sheet-view",
            style: {
                transform: b.to(e => `translate3d(0, ${e}vh, 0)`),
                paddingBottom: "env(safe-area-inset-bottom)"
            },
            className: "fixed right-0 bottom-0 left-0 z-modal flex h-full touch-none flex-col overflow-hidden rounded-t-3xl bg-background-1 shadow-large",
            children: [o.jsx(vo, {
                agentName: c ? .agentName ? ? "",
                className: "touch-none",
                showDragHandle: !0,
                onClose: w
            }), o.jsx(fi.div, {
                className: "flex min-h-0 flex-1 flex-col",
                style: {
                    paddingBottom: b.to(e => `${e}vh`)
                },
                children: t
            }), o.jsx(fi.div, {
                className: "absolute right-0 bottom-0 left-0",
                style: {
                    transform: b.to(e => `translate3d(0, ${-e}vh, 0)`)
                },
                children: o.jsx(tt, {
                    sendMessage: n,
                    isDisabled: a
                })
            }), o.jsx(nt, {}), o.jsx(mo, {})]
        })]
    })
}

function Co(t = !0) {
    const [n, s] = e.useState(0), r = e.useRef(0);
    return e.useEffect(() => {
        if (!t) return;
        let e = null,
            n = null,
            i = null,
            o = null,
            a = null;
        const c = t => {
                const n = () => {
                    const e = t.getBoundingClientRect();
                    (e => {
                        const t = Math.round(e);
                        t !== r.current && (r.current = t, s(t))
                    })(Math.max(0, e.bottom))
                };
                n(), e = new ResizeObserver(n), e.observe(t), o = () => {
                    null === i && (i = requestAnimationFrame(() => {
                        n(), i = null
                    }))
                }, a = n, window.addEventListener("scroll", o, {
                    passive: !0
                }), window.addEventListener("resize", a)
            },
            l = document.querySelector("header");
        return l ? c(l) : (n = new MutationObserver((e, t) => {
            const s = document.querySelector("header");
            s && (t.disconnect(), n = null, c(s))
        }), n.observe(document.body, {
            childList: !0,
            subtree: !0
        })), () => {
            e ? .disconnect(), n ? .disconnect(), o && window.removeEventListener("scroll", o), a && window.removeEventListener("resize", a), null !== i && cancelAnimationFrame(i)
        }
    }, [t]), n
}

function To(e, t = !1) {
    return {
        isTop: e === st.TopRight || e === st.TopLeft,
        isBottom: e === st.BottomRight || e === st.BottomLeft || e === st.BottomCenter,
        isLeft: e === st.TopLeft || e === st.BottomLeft,
        isRight: e === st.TopRight || e === st.BottomRight || t && e === st.BottomCenter,
        isCenter: e === st.BottomCenter && !t
    }
}

function So(e) {
    return Ve(e.isCenter && "left-1/2 -translate-x-1/2", e.isLeft && "left-0 ml-xxl", e.isRight && "right-0 mr-xxl", e.isBottom && "bottom-0 mb-xxl", e.isTop && "mt-xxl")
}
const Eo = {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: .3,
            ease: "easeOut"
        }
    },
    _o = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 20
        },
        transition: {
            duration: .3,
            ease: "easeOut"
        }
    },
    Ro = {
        type: "spring",
        stiffness: 300,
        damping: 28,
        mass: 1
    },
    Io = 720,
    Po = 24;

function jo({
    children: t,
    sendMessage: n,
    entrypointRef: r,
    isComposerDisabled: i
}) {
    const a = s(f),
        u = s(d),
        p = s(b),
        m = s(g),
        [v, w] = e.useState(!1),
        x = Ht() || h,
        k = e.useRef(null),
        C = e.useRef(null);
    C.current = m;
    const [T, S] = e.useState(() => "rtl" === document.documentElement.dir), [E, _] = e.useState(x || !p), R = y ? u ? .mobileEntrypointPlacement : u ? .entrypointPlacement, I = R || st.BottomRight, P = To(I === st.BottomCenter ? st.BottomRight : I), j = e.useMemo(() => v ? { ...P,
        isLeft: T,
        isRight: !T,
        isCenter: !1
    } : P, [v, P, T]), M = Co(!0), {
        sendTelemetry: A,
        baseTelemetryFields: N
    } = Ot(), [O, D] = e.useState("undefined" != typeof window ? window.innerHeight : Io);
    e.useEffect(() => {
        const e = () => {
            D(window.innerHeight)
        };
        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, []);
    const L = O - M < 700 ? 0 : M;
    e.useEffect(() => {
        if (k.current) {
            const e = "rtl" === getComputedStyle(k.current).direction;
            S(t => t !== e ? e : t)
        }
    }, []), e.useEffect(() => {
        a && w(!1)
    }, [a]);
    const F = e.useRef(Io);
    e.useEffect(() => {
        const e = k.current;
        if (!e) return;
        const t = new ResizeObserver(([e]) => {
            e && (F.current = e.contentRect.height)
        });
        return t.observe(e), () => t.disconnect()
    }, []), et({
        isActive: !a,
        containerRef: k,
        returnFocusRef: r,
        initialFocusRef: C
    });
    const z = e.useCallback(() => {
            const e = v ? "minimize" : "expand";
            w(e => !e), A(c({
                baseFields: N,
                chatClickType: l.PanelToggle,
                metadata: {
                    action: e
                }
            }))
        }, [v, w, A, N]),
        B = v ? 0 : Po,
        q = v ? 0 : j.isTop ? L + Po : O - Po - Math.min(Io, O - L - 48),
        {
            initial: V,
            exitTarget: U
        } = e.useMemo(() => {
            if (!p || x) return {
                initial: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1
                },
                exitTarget: {
                    opacity: 0,
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1
                }
            };
            const e = "undefined" != typeof window ? window.innerWidth : 0,
                t = "undefined" != typeof window ? window.innerHeight : 0,
                n = F.current,
                s = v ? 0 : Po,
                r = v ? 0 : L;
            let i, o;
            i = j.isRight || !j.isLeft ? e - s - 480 : s, o = j.isTop ? s + r : t - s - n;
            const a = {
                x: p.left + p.width / 2 - (i + 240),
                y: p.top + p.height / 2 - (o + n / 2),
                scaleX: Math.max(p.width / 480, .05),
                scaleY: Math.max(p.height / n, .05)
            };
            return {
                initial: {
                    opacity: .5,
                    ...a
                },
                exitTarget: {
                    opacity: 0,
                    ...a
                }
            }
        }, [p, x, j, L, v]),
        H = e.useCallback(() => {
            _(!0)
        }, []),
        $ = x ? {
            duration: 0
        } : Ro,
        K = x ? {
            duration: 0
        } : {
            duration: .2,
            delay: .15
        };
    return o.jsxs(rt.div, {
        ref: k,
        className: Ve("fixed flex w-120 flex-col overflow-clip border border-stroke-2 bg-background-1 shadow-large will-change-transform", j.isCenter && "left-1/2 -translate-x-1/2", j.isLeft && "left-0", j.isRight && "right-0"),
        role: "dialog",
        "aria-modal": "true",
        "data-testid": "floating-view",
        onContextMenu: e => {
            e.preventDefault()
        },
        initial: V,
        animate: {
            opacity: 1,
            x: 0,
            y: 0,
            scaleX: 1,
            scaleY: 1,
            height: v ? O : Io,
            top: q,
            borderRadius: v ? 0 : 24,
            marginLeft: j.isLeft ? B : void 0,
            marginRight: j.isRight || !j.isLeft ? B : void 0
        },
        exit: U,
        transition: $,
        onAnimationComplete: H,
        style: {
            transformOrigin: "center center",
            ...!v && {
                maxHeight: `calc(100dvh - ${L+48}px)`
            }
        },
        children: [o.jsx(vo, {
            agentName: u ? .agentName ? ? "",
            isPanelMode: v,
            onPanelToggle: z,
            isRTL: T
        }), o.jsx(rt.div, {
            className: "flex min-h-0 flex-1 flex-col",
            initial: x ? {
                opacity: 1
            } : {
                opacity: 0
            },
            animate: {
                opacity: E ? 1 : 0
            },
            transition: K,
            children: t
        }), o.jsx(rt.div, {
            initial: x ? {
                opacity: 1
            } : {
                opacity: 0
            },
            animate: {
                opacity: E ? 1 : 0
            },
            transition: K,
            children: o.jsx(tt, {
                sendMessage: n,
                isDisabled: i
            })
        }), o.jsx(mo, {})]
    })
}
const Mo = '[data-id="zsalesiq"]',
    Ao = "data-clarity-zoho-hidden";

function No() {
    const e = document.querySelector(Mo);
    e && (e.hasAttribute(Ao) || e.setAttribute(Ao, e.style.display), "none" !== e.style.display && e.style.setProperty("display", "none", "important"))
}

function Oo(t) {
    e.useEffect(() => {
        if (!t) return;
        let e = null;
        const n = () => {
            if (e) return;
            const t = document.querySelector(Mo);
            t && (e = new MutationObserver(() => No()), e.observe(t, {
                attributes: !0,
                attributeFilter: ["style"]
            }))
        };
        No(), n();
        const s = new MutationObserver(() => {
            No(), n()
        });
        return s.observe(document.body, {
            childList: !0
        }), () => {
            s.disconnect(), e ? .disconnect(),
                function() {
                    const e = document.querySelector(Mo);
                    if (!e) return;
                    if (!e.hasAttribute(Ao)) return;
                    const t = e.getAttribute(Ao) ? ? "";
                    t ? e.style.display = t : e.style.removeProperty("display"), e.removeAttribute(Ao)
                }()
        }
    }, [t])
}

function Do() {
    const t = u(),
        n = s(f),
        r = s(x),
        i = Dt();
    Oo("www-thejewelhut-co-uk" === r.advertiserId && !n);
    const o = e.useCallback(() => {
            const e = t => {
                t.querySelectorAll("[data-original-zindex]").forEach(t => {
                    const n = t.getAttribute("data-original-zindex");
                    n && (t.style.zIndex = n), t.removeAttribute("data-original-zindex"), t.shadowRoot && e(t.shadowRoot)
                })
            };
            e(document)
        }, []),
        a = e.useCallback(() => {
            if (n) return !1;
            const e = y ? null : i ? .shadowRoot ? .querySelector('[data-testid="floating-view"]'),
                t = e ? .getBoundingClientRect(),
                s = document.querySelectorAll("*");
            let r = !1;
            const o = n => {
                if (n === i || n.id === C || n === e) return;
                const s = window.getComputedStyle(n).zIndex;
                if (s && "auto" !== s && parseInt(s, 10) > 90100) {
                    const e = n,
                        i = y || !!t && (e => {
                            if (!t) return !1;
                            const n = e.getBoundingClientRect();
                            return !(n.width <= 0 || n.height <= 0 || n.right <= t.left || n.left >= t.right || n.bottom <= t.top || n.top >= t.bottom)
                        })(e);
                    if (i && !e.hasAttribute("data-original-zindex")) e.setAttribute("data-original-zindex", s), e.style.zIndex = "0", r = !0;
                    else if (!i && e.hasAttribute("data-original-zindex")) {
                        const t = e.getAttribute("data-original-zindex");
                        t && (e.style.zIndex = t), e.removeAttribute("data-original-zindex")
                    }
                }
                n.shadowRoot && n.shadowRoot.querySelectorAll("*").forEach(o)
            };
            return s.forEach(o), r
        }, [n, i]);
    e.useEffect(() => {
        if (!i) return;
        const e = new MutationObserver(() => {
            a()
        });
        let s = null;
        if (n) "fixed" === document.body.style.position && y && (document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", document.body.style.overflow = ""), e.disconnect(), o();
        else {
            y && (document.body.style.position = "fixed", document.body.style.left = "0", document.body.style.right = "0", document.body.style.overflow = "hidden", "dark" === t && k && (document.body.style.backgroundColor = "#1f1f1f")), a(), e.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["style"]
            });
            const n = 10;
            let r = 0;
            s = setInterval(() => {
                a() || r++, r >= n && s && clearInterval(s)
            }, 500)
        }
        return () => {
            "fixed" === document.body.style.position && y && (document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", document.body.style.overflow = ""), o(), e.disconnect(), s && clearInterval(s)
        }
    }, [a, n, t, o, i])
}

function Lo({
    entrypointData: t,
    pageContext: n,
    sendMessage: s,
    sessionInfo: r,
    setCurrentStreamingMessage: i,
    setChatLayoutData: o,
    setIsNudgeMessage: a,
    setIsMinimized: c
}) {
    const {
        sendTelemetry: l,
        baseTelemetryFields: u
    } = Ot();
    return e.useCallback((e, d) => {
        const h = e.trim();
        if (!h) return;
        const f = function(e) {
                switch (e) {
                    case P.Question:
                        return I.OfflineQuestion;
                    case P.Highlight:
                        return I.OfflineHighlight;
                    case P.Comparison:
                        return I.OfflineComparison;
                    default:
                        return I.OfflineQuestion
                }
            }(d),
            p = (t ? .PageType === T.Product ? t.ProductId : void 0) ? ? (n.PageType === T.Product ? n.Handle : void 0),
            m = n.PageType === T.Product ? n.VariantId : void 0,
            g = t ? .ActionToTake ? ? S.CallActionEndpoint;
        i(null), o([]), a(!0), c(!1), l(E({
            baseFields: u,
            uiEventType: _.EntrypointNudgeClick,
            metadata: {
                nudgeType: f,
                metadata: {
                    agent_message: h,
                    chat_message: h,
                    message: h
                }
            }
        })), s({
            type: "action",
            sessionInfo: r,
            action: R.ENTRYPOINT_CLICK,
            request: {
                PageType: p ? T.Product : n.PageType,
                AgentMessage: h,
                ChatMessage: h,
                ActionToTake: g,
                NudgeType: f,
                ...p ? {
                    ProductId: p
                } : {},
                ...m ? {
                    VariantId: m
                } : {}
            }
        })
    }, [t, n, s, r, i, o, c, a, u, l])
}

function Fo(e, t, n) {
    let s = "/" === window.location.pathname ? {
        PageType: T.Home
    } : {
        PageType: T.Unknown
    };
    if (e && s.PageType === T.Unknown) {
        s = function(e, t, n, s) {
            const r = [];
            for (const [o, a] of Object.entries(e)) {
                const e = "category" === o ? T.Collection : at(o);
                let c = null;
                try {
                    const e = new RegExp(a);
                    c = t.match(e)
                } catch (i) {
                    const e = `Invalid regex pattern for type "${o}": ${a}`;
                    n(Y({
                        baseFields: s,
                        errorEventType: Q.ServerError,
                        errorMessage: e,
                        errorCode: "INVALID_ADVERTISER_REGEX",
                        metadata: {
                            patternType: o,
                            pattern: a
                        }
                    }));
                    continue
                }
                try {
                    if (c) {
                        const t = c[1] ? decodeURIComponent(c[1]) : void 0,
                            n = c[2] ? decodeURIComponent(c[2]) : void 0;
                        switch (e) {
                            case T.Product:
                                if (n) r.push({
                                    PageType: e,
                                    VariantId: n
                                });
                                else if (t) {
                                    const n = window.ShopifyAnalytics ? .meta,
                                        s = n ? .product ? .id,
                                        i = n ? .selectedVariantId,
                                        o = null != i && (n ? .product ? .variants ? ? []).some(e => String(e.id) === String(i)) ? String(i) : void 0;
                                    r.push({
                                        PageType: e,
                                        Handle: t,
                                        VariantId: o,
                                        ProductId: null != s ? String(s) : void 0
                                    })
                                }
                                break;
                            case T.Collection:
                                t && r.push({
                                    PageType: e,
                                    Handle: t
                                });
                                break;
                            case T.Query:
                                t && r.push({
                                    PageType: e,
                                    Query: t
                                });
                                break;
                            default:
                                r.push({
                                    PageType: e
                                })
                        }
                    }
                } catch (i) {}
            }
            return function(e) {
                const t = e.find(e => e.PageType === T.Product && (e.Handle && "" !== e.Handle || e.VariantId && "" !== e.VariantId));
                if (t) return t;
                const n = e.find(e => e.PageType === T.Collection && "" !== e.Handle);
                if (n) return n;
                const s = e.find(e => e.PageType === T.Query && "" !== e.Query);
                return s || {
                    PageType: T.Unknown
                }
            }(r)
        }(e, window.location.pathname + window.location.search, t, n)
    }
    return s
}

function zo({
    sendMessage: t
}) {
    const n = s(x),
        r = s(j),
        o = i(J),
        a = s(Z),
        c = e.useRef(null),
        {
            sendTelemetry: l,
            baseTelemetryFields: u
        } = Ot();
    e.useEffect(() => {
        c.current = ee()
    }, []);
    const d = e.useCallback(e => {
        const t = Fo(e, l, u);
        return o(t), t
    }, [o, l, u]);

    function h(e, t) {
        if (e.cartId !== t.cartId || e.currency !== t.currency || e.country !== t.country) return !1;
        if (e.itemsCount !== t.itemsCount || e.items.length !== t.items.length) return !0;
        const n = [...e.items].sort((e, t) => ("number" == typeof e.variant_id ? e.variant_id : parseInt(String(e.variant_id), 10)) - ("number" == typeof t.variant_id ? t.variant_id : parseInt(String(t.variant_id), 10))),
            s = [...t.items].sort((e, t) => ("number" == typeof e.variant_id ? e.variant_id : parseInt(String(e.variant_id), 10)) - ("number" == typeof t.variant_id ? t.variant_id : parseInt(String(t.variant_id), 10)));
        for (let r = 0; r < n.length; r++) {
            const e = n[r],
                t = s[r];
            if (!e || !t || e.variant_id !== t.variant_id || e.product_id !== t.product_id || e.price !== t.price || e.title !== t.title || e.quantity !== t.quantity) return !0;
            const i = [...e.discounts].sort((e, t) => e.title.localeCompare(t.title)),
                o = [...t.discounts].sort((e, t) => e.title.localeCompare(t.title));
            if (i.length !== o.length) return !0;
            for (let n = 0; n < i.length; n++) {
                const e = i[n],
                    t = o[n];
                if (!e || !t || e.amount !== t.amount || e.title !== t.title) return !0
            }
        }
        return !1
    }
    const f = e.useCallback(() => {
            const e = te(),
                t = Fo(e, l, u);
            if (t.PageType !== T.Home && t.PageType !== T.Unknown) return [];
            if (!e.category) return [];
            const n = e.category.replace(/\\\//g, "/").replace(/^\^/, ""),
                s = n.search(/[([\]^$*+?.{|]/),
                r = (s >= 0 ? n.slice(0, s) : n).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
            if (!r) return [];
            const i = `a[href*="${r}"]:not(.nav-link)`,
                o = document.querySelectorAll(i),
                a = new Map;
            o.forEach((t, n) => {
                const s = t instanceof HTMLAnchorElement ? `${t.pathname}${t.search}` : t.getAttribute("href") || "";
                let r = null;
                try {
                    r = s.match(new RegExp(e.category))
                } catch {
                    r = s.match(e.category)
                }
                if (r && r[1]) {
                    const e = r[1],
                        s = ((e, t) => {
                            if (e.closest("footer, [class*='footer'], [id*='footer']")) return -100;
                            let n = 0;
                            const s = (e.textContent || "").toLowerCase(),
                                r = (e instanceof HTMLAnchorElement ? e.getAttribute("href") : "") ? .toLowerCase() || "";
                            e.closest("header, nav, [role='navigation']") && (n -= 3), e.querySelector("img") && (n += 8);
                            const i = e.parentElement;
                            if (i ? .querySelector("img")) n += 6;
                            else {
                                const e = i ? .parentElement;
                                e && e.childElementCount <= 8 && e.querySelector("img") && (n += 4)
                            }
                            const o = /sale|clearance|deal|new arrivals?|new collection|featured|bestseller|best seller|trending|bundle|duo/i;
                            (o.test(s) || o.test(r)) && (n += 5), /shop|discover|explore|view|see more|learn more/i.test(s) && (n += 3), (e.matches(".button, .btn, [role='button']") || e.closest(".button, .btn, [role='button']")) && (n += 2);
                            const a = /hero|banner|feature|promo|carousel|slider|swiper|glide|splide|highlight|trending|spotlight|showcase|campaign|collection[-_]?grid/i;
                            let c = e.parentElement;
                            for (let l = 0; l < 6 && c; l++, c = c.parentElement)
                                if (a.test(c.className || "") || a.test(c.id || "") || null !== c.getAttribute("data-section-type")) {
                                    n += 3;
                                    break
                                }
                            if (e instanceof HTMLElement) {
                                const t = e.getBoundingClientRect();
                                t.top >= 0 && t.top < 1.2 * window.innerHeight && (n += 2), t.width * t.height > 12e3 && (n += 2)
                            }
                            return n -= .01 * t, n
                        })(t, n),
                        i = a.get(e);
                    (void 0 === i || s > i) && a.set(e, s)
                }
            });
            const c = Array.from(a.entries()).filter(([, e]) => e > -50).sort(([, e], [, t]) => t - e).slice(0, 10).map(([e]) => e);
            return c.length > 0 ? c : []
        }, [l, u]),
        p = e.useCallback((e, t, n) => ({
            shouldSendForDiscounts: e.items.some(e => e.discounts.length > 0) && ct(I.DiscountedItem, t.PageType),
            shouldSendForFreeShipping: r ? .IsFreeShippingNudgeEnabled && ct(I.FreeShipping, t.PageType) && e.items.length > 0 || ct(I.FreeShippingMet, t.PageType) && e.items.length > 0,
            shouldSendPwilo: e.items.length > 0 && ct(I.PWILO, t.PageType),
            shouldSendCartPriceDrop: !!(n && h(n, e) && ct(I.CartPriceDrop, t.PageType))
        }), [r ? .IsFreeShippingNudgeEnabled]),
        m = e.useCallback((e, t) => {
            if (!e) return !1;
            const {
                shouldSendForDiscounts: n,
                shouldSendForFreeShipping: s,
                shouldSendPwilo: r,
                shouldSendCartPriceDrop: i
            } = p(e, t, c.current);
            return !!(r || n || s || i)
        }, [p]),
        g = e.useCallback((e, t) => {
            if (!e) return null;
            const n = e.items.map(e => ({
                    product_id: e.product_id,
                    variant_id: e.variant_id,
                    title: e.title,
                    price: e.price,
                    discounts: e.discounts,
                    quantity: e.quantity
                })),
                s = { ...e,
                    items: n
                },
                r = c.current,
                {
                    shouldSendForDiscounts: i,
                    shouldSendForFreeShipping: o,
                    shouldSendPwilo: a,
                    shouldSendCartPriceDrop: l
                } = p(s, t, r),
                u = a || i || o ? {
                    OldCart: null,
                    CurrentCart: s
                } : l ? {
                    OldCart: r,
                    CurrentCart: s
                } : null;
            return ne(s), u
        }, [p]),
        b = e.useCallback((e, t) => {
            const n = d(e);
            return {
                freshPageContext: n,
                carts: g(t, n)
            }
        }, [d, g]),
        y = e.useCallback((e, t) => {
            const n = Fo(e, l, u);
            return !(r ? .IsMcpFlowEnabled || !m(t, n) && n.PageType === T.Unknown)
        }, [r ? .IsMcpFlowEnabled, m, l, u]);
    return {
        sendNudgeRequest: e.useCallback((e, s) => {
            const {
                freshPageContext: i,
                carts: o
            } = b(e, s);
            lt(n, t, i, o, a, r ? .DisableTopSellerEnabled ? ? !1, r ? .DisableTopViewedEnabled ? ? !1)
        }, [t, n, b, a, r ? .DisableTopSellerEnabled, r ? .DisableTopViewedEnabled]),
        getContext: d,
        canMakeNudgeRequest: y,
        fetchCollections: f
    }
}

function Bo() {
    const [t, n] = e.useState("");
    return e.useEffect(() => {
        n(he(a.LOADING.TEXT1));
        const e = setTimeout(() => {
                n(he(a.LOADING.TEXT2))
            }, 5e3),
            t = setTimeout(() => {
                n(he(a.LOADING.TEXT3))
            }, 12e3);
        return () => {
            clearTimeout(e), clearTimeout(t)
        }
    }, []), o.jsx("div", {
        className: "relative flex w-full flex-1 flex-col items-center justify-start bg-transparent",
        children: o.jsx("div", {
            className: "flex w-full flex-col items-center justify-start overflow-y-auto",
            children: o.jsx("main", {
                className: Ve("flex w-full flex-col items-end gap-xxxl px-6"),
                "aria-live": "polite",
                children: o.jsxs(rt.div, {
                    initial: fe.hidden,
                    animate: fe.visible,
                    className: Ve("flex w-full flex-row items-center gap-m self-start"),
                    role: "status",
                    "aria-live": "polite",
                    "aria-label": he(a.CHAT.AGENT_TYPING),
                    children: [o.jsx(dt, {
                        testId: "loading-dot"
                    }), t && o.jsx("p", {
                        className: Ve("text-base-body text-foreground-3", "text-base-body"),
                        children: t
                    })]
                })
            })
        })
    })
}

function qo({
    positions: e
}) {
    return o.jsx(o.Fragment, {
        children: e.map((e, t) => o.jsx("div", {
            style: {
                position: "fixed",
                left: e.x,
                top: e.y,
                width: e.w,
                height: e.h,
                border: "2px dashed " + (e.blocked ? "red" : "lime"),
                backgroundColor: e.blocked ? "rgba(255,0,0,0.15)" : "rgba(0,255,0,0.15)",
                pointerEvents: "none",
                zIndex: 99999,
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                color: e.blocked ? "red" : "lime",
                fontWeight: "bold"
            },
            children: t + 1
        }, t))
    })
}

function Vo(e, t) {
    const n = Math.max(e.left, t.left);
    if (Math.min(e.right, t.right) <= n) return !1;
    const s = Math.max(e.top, t.top);
    return Math.min(e.bottom, t.bottom) > s
}

function Uo(e, t) {
    const n = Math.max(e.left, t.left),
        s = Math.min(e.right, t.right);
    if (s <= n) return 0;
    const r = Math.max(e.top, t.top),
        i = Math.min(e.bottom, t.bottom);
    return i <= r ? 0 : (s - n) * (i - r)
}

function Ho(e) {
    return !!e.isConnected && (e.offsetWidth > 0 && e.offsetHeight > 0)
}

function $o(e, t) {
    for (const n of e) {
        if (!n) continue;
        const e = document.querySelectorAll(n);
        for (const n of e) {
            if (Ho(n)) {
                if (Vo(t, n.getBoundingClientRect())) return n
            }
            if (n.shadowRoot) {
                const e = n.shadowRoot.querySelectorAll("*");
                for (const n of e) {
                    if (!Ho(n)) continue;
                    if (Vo(t, n.getBoundingClientRect())) return n
                }
            }
        }
    }
    return null
}

function Ko(e, t, n = {}, s = .4, r) {
    const {
        minArea: i = 1200,
        nonRenderableSurfaces: o,
        blockingElements: a
    } = n;
    if (e.width <= 0 || e.height <= 0 || e.right < 0 || e.bottom < 0 || e.left > window.innerWidth || e.top > window.innerHeight) return null;
    if (o ? .length) {
        const t = $o(o, e);
        if (t) return t.getBoundingClientRect()
    }
    if (a ? .length) {
        const t = $o(a, e);
        if (t) return t.getBoundingClientRect()
    }
    const c = function(e, t) {
        const n = [],
            s = Array.from(document.querySelectorAll('button, [role=button], inbox-online-store-chat, [style*="pointer-events"], a, [class*="button"], [class*="btn"], [class*="whatsapp"], shopify-forms-embed, gty-whatsapp-chat-button')),
            r = Array.from(document.querySelectorAll('[style*="position"], [style*="bottom"], csm-cookie-consent')),
            i = Array.from(document.querySelectorAll('.fixed, .absolute, .sticky, [class*="fixed"], [class*="absolute"], [class*="sticky"], [class*="bottom"], [class*=toolbar], .mobile-dock')),
            o = new Set([...s, ...r, ...i]),
            a = document.getElementById(e),
            c = s => {
                if (s.id === e || a ? .contains(s) || t ? .contains(s) || t && s.contains(t)) return;
                const r = s.style;
                if ("none" === r.pointerEvents || "hidden" === r.visibility || "none" === r.display) return;
                const i = window.getComputedStyle(s);
                if ("hidden" === i.visibility || 0 === parseFloat(i.opacity)) return;
                const o = s.nodeName.toLowerCase(),
                    l = s.getAttribute("class") ? ? "",
                    u = s.getAttribute("id") ? ? "";
                if ("button" === o || "inbox-online-store-chat" === o || l.includes("whatsapp") || u.includes("whatsapp")) n.push(s);
                else {
                    if (r.position) {
                        const e = r.position,
                            t = r.bottom;
                        "fixed" !== e && "sticky" !== e && "absolute" !== e || "unset" === t || "auto" === t || "" === t || n.push(s)
                    } else {
                        if ("none" === i.pointerEvents || "none" === i.display) return;
                        const e = i.position,
                            t = i.bottom;
                        "fixed" !== e && "sticky" !== e && "absolute" !== e || "unset" === t || "auto" === t || n.push(s)
                    }
                    s.shadowRoot && s.shadowRoot.querySelectorAll("*").forEach(c)
                }
            };
        return o.forEach(c), n
    }(t, r);
    for (const l of c) {
        if (!l.isConnected) continue;
        const t = l.getBoundingClientRect(),
            n = l.offsetWidth * l.offsetHeight;
        if (n < i) continue;
        const r = Uo(e, t);
        if (0 === r) continue;
        if (r / n >= s) return t
    }
    return null
}
const Yo = [".drawer__footer", "cart-drawer__footer", "csm-cookie-consent"];

function Qo(t, n, r = !0, {
    minArea: i = 1200,
    minCoverageRatio: o = .4
} = {}) {
    const a = s(d),
        {
            nonRenderableSurfaces: c,
            blockingElements: l,
            skipEntryCoverCheck: u
        } = a ? ? {},
        h = e.useRef(!1),
        f = e.useRef(null),
        p = e.useRef(null),
        m = e.useRef(null),
        {
            isBubbleEntrypoint: g
        } = Ue(),
        b = !u,
        y = !0 !== b || !r || h.current;
    e.useEffect(() => {
        const e = () => {
            f.current && (clearInterval(f.current), f.current = null), p.current && (clearTimeout(p.current), p.current = null), m.current && (clearTimeout(m.current), m.current = null), n()
        };
        let s = t.current,
            r = !0;
        if (y) return void n();
        const a = () => {
                if (h.current) return;
                const r = s ? ? t.current;
                if (!r) return;
                const a = Ko(r.getBoundingClientRect(), C, {
                    minArea: i,
                    nonRenderableSurfaces: c,
                    blockingElements: [...l ? ? [], ...Yo]
                }, o, r);
                a && (n(a), h.current = !0, e()), n()
            },
            u = () => {
                h.current || (f.current && (clearInterval(f.current), f.current = null), p.current && (clearTimeout(p.current), p.current = null), (s || t.current) && (f.current = setInterval(a, 500), p.current = setTimeout(() => {
                    e()
                }, 1e4), requestAnimationFrame(() => {
                    !h.current && r && a()
                })))
            },
            d = () => {
                m.current && clearTimeout(m.current), m.current = setTimeout(() => {
                    !h.current && r && u()
                }, 2e3)
            };
        if (!s) {
            const n = () => {
                r && (s = t.current, s ? (u(), g || window.addEventListener("scroll", d, {
                    passive: !0
                })) : requestAnimationFrame(n))
            };
            return requestAnimationFrame(n), () => {
                r = !1, e(), window.removeEventListener("scroll", d)
            }
        }
        return u(), g || window.addEventListener("scroll", d, {
            passive: !0
        }), () => {
            r = !1, e(), window.removeEventListener("scroll", d)
        }
    }, [b, r, t, i, o, c, l, g, y, n])
}

function Wo({
    elementRef: t,
    isTopPlacement: n,
    debugPositioning: r = !1,
    applyYOffset: i,
    getCurrentYOffset: o
}) {
    const [a, c] = e.useState(!1), [l, u] = e.useState(!1), [h, f] = e.useState(!1), [p, m] = e.useState([]), g = s(d), {
        nonRenderableSurfaces: b,
        blockingElements: y
    } = g ? ? {}, v = window.innerHeight, w = e.useMemo(() => v / 2 - (t.current ? .offsetHeight ? ? 0) / 2, [v, t]), x = e.useCallback(e => {
        if (!t.current) return 0;
        let s;
        return s = e ? n ? e.bottom + 2 : e.top - 2 - t.current.offsetHeight : w, n ? s > w && (s = w) : s < w && (s = w), s
    }, [w, n, t]), k = e.useCallback(e => {
        if (!t.current) return;
        const n = t.current.getBoundingClientRect();
        let s = x(e);
        const a = [];
        let c = NaN;
        for (; s !== w && s !== c;) {
            c = s;
            const e = new DOMRect(n.left, s, t.current.offsetWidth, t.current.offsetHeight),
                i = Ko(e, C, {
                    nonRenderableSurfaces: b,
                    blockingElements: y
                }, .05, t.current);
            if (r && a.push({
                    x: e.x,
                    y: e.y,
                    w: e.width,
                    h: e.height,
                    blocked: !!i
                }), !i) break;
            s = x(i), r && s === w && a.push({
                x: n.left,
                y: s,
                w: t.current.offsetWidth,
                h: t.current.offsetHeight,
                blocked: !1
            })
        }
        r && m(a);
        if (Ko(new DOMRect(n.left, s, n.width, n.height), C, {
                nonRenderableSurfaces: b,
                blockingElements: y
            }, .05, t.current)) return;
        const l = t.current.getBoundingClientRect().top - o();
        i(s - l)
    }, [y, r, x, w, b, t, i, o]), T = e.useCallback(e => {
        e ? l || t.current && (u(!0), k(e), c(!0)) : c(!0)
    }, [l, k, t]);
    Qo(t, T, !l);
    const S = e.useCallback(e => {
        t.current && (u(!0), k(e))
    }, [k, t]);
    ! function(t, n, r = !0, {
        minCoverageRatio: i = .05
    } = {}) {
        const o = s(d),
            {
                nonRenderableSurfaces: a,
                blockingElements: c
            } = o ? ? {};
        e.useEffect(() => {
            if (!r) return;
            const e = [...c ? ? [], ...a ? ? [], ...Yo].filter(Boolean);
            if (0 === e.length) return;
            let s = null,
                o = null,
                l = !0,
                u = new Set;
            const d = () => {
                    const e = t.current;
                    if (!e) return;
                    const s = Ko(e.getBoundingClientRect(), C, {
                        nonRenderableSurfaces: a,
                        blockingElements: [...c ? ? [], ...Yo]
                    }, i, e);
                    s && n(s)
                },
                h = new ResizeObserver(() => {
                    s && clearTimeout(s), s = setTimeout(() => {
                        o = requestAnimationFrame(() => {
                            l && d()
                        })
                    }, 500)
                }),
                f = () => {
                    const t = new Set;
                    for (const n of e) try {
                        document.querySelectorAll(n).forEach(e => t.add(e))
                    } catch {}
                    for (const e of u) t.has(e) || h.unobserve(e);
                    for (const e of t) u.has(e) || h.observe(e);
                    u = t
                };
            f();
            const p = new MutationObserver(() => {
                s && clearTimeout(s), s = setTimeout(() => {
                    requestAnimationFrame(() => {
                        f(), d()
                    })
                }, 500)
            });
            return p.observe(document.body, {
                childList: !0,
                subtree: !0,
                attributes: !0,
                attributeFilter: ["style", "class"]
            }), () => {
                l = !1, p.disconnect(), h.disconnect(), s && clearTimeout(s), null !== o && cancelAnimationFrame(o)
            }
        }, [r, t, n, c, a, i])
    }(t, S, !h);
    const E = e.useCallback(() => {
        u(!0), f(!0)
    }, []);
    return {
        isReadyToShow: a,
        hasRepositioned: l,
        debugPositions: p,
        markRepositioned: E
    }
}

function Xo({
    message: t,
    onClick: n,
    className: s,
    isOfflineNudge: r = !1
}) {
    const i = e.useRef(null),
        [a, c] = e.useState(!1),
        l = bo();
    return e.useEffect(() => {
        const e = i.current;
        e && c(e.scrollHeight > e.clientHeight || e.offsetHeight > parseFloat(getComputedStyle(e).lineHeight))
    }, [t]), o.jsxs("button", {
        type: "button",
        className: Ve("inline-flex max-w-[calc(var(--viewport-w,100vw)-2rem)] min-w-0 cursor-pointer items-center gap-xs px-m py-2.5 text-xs-caption shadow-[0px_2px_20px_0px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-colors select-none", r ? Ve("justify-start bg-(--accent) text-left dark:bg-(--accent-dark)", "black" === l ? "text-black hover:bg-(--accent) dark:hover:bg-(--accent-dark)" : "text-white hover:bg-(--accent) dark:hover:bg-(--accent-dark)") : "justify-start bg-white/95 text-foreground-1 outline outline-(--accent)/40 hover:bg-white dark:border-(--accent-dark)/40 dark:bg-black/95 dark:hover:bg-black", pe && "max-w-80", r || !a ? "rounded-full" : "rounded-3xl", s),
        onClick: n,
        children: [o.jsx("span", {
            ref: i,
            className: Ve("min-w-0 leading-xl", r ? "line-clamp-1" : "line-clamp-2"),
            children: t
        }), !r && o.jsx(pt, {})]
    })
}
const Go = e.forwardRef(function({
        onLogoClick: t,
        onRedirectNudgeClick: n,
        onHover: s,
        onHoverEnd: r,
        onDismissNudge: i,
        inlineNudgeData: c,
        redirectNudgeData: l,
        isOfflineNudge: u = !1,
        placeholder: d,
        className: f,
        debugPositioning: p = !1,
        isDragEnabled: m = !1,
        entrypointPlacement: g,
        headerBottom: b
    }, v) {
        const w = Ht() || h,
            x = e.useRef(!1),
            k = e.useRef(null),
            C = e.useRef(null),
            T = e.useRef(null),
            [S, E] = e.useState(0),
            [_, R] = e.useState(!1),
            [I, P] = e.useState(!1),
            j = !!c || !!l,
            M = !!g,
            A = To(g ? ? st.BottomRight, !0),
            N = A.isLeft,
            O = A.isTop,
            [D, L] = e.useState(O),
            F = I || j,
            z = e.useCallback(() => {
                if (!T.current) return {
                    minX: 0,
                    maxX: 0,
                    minY: 0,
                    maxY: 0
                };
                const e = T.current.offsetWidth,
                    t = T.current.offsetHeight;
                return {
                    minX: -window.innerWidth + e + 40,
                    maxX: 0,
                    minY: -window.innerHeight + t + 40,
                    maxY: 0
                }
            }, []),
            B = e.useRef(() => {}),
            {
                offset: q,
                setOffset: V,
                offsetRef: U,
                isDragging: H,
                didDrag: $,
                handlers: K
            } = function({
                axis: t,
                enabled: n = !0,
                dragThreshold: s = 5,
                onDragStart: r,
                onDragEnd: i,
                onDragMove: o,
                getConstraints: a
            }) {
                const [c, l] = e.useState({
                    x: 0,
                    y: 0
                }), u = e.useRef({
                    x: 0,
                    y: 0
                }), d = e.useRef(!1), h = e.useRef(!1), [f, p] = e.useState(!1), [m, g] = e.useState(!1), b = e.useRef({
                    x: 0,
                    y: 0
                }), y = e.useRef({
                    x: 0,
                    y: 0
                }), v = e.useRef(!1), w = e.useRef(0), x = e.useCallback(e => {
                    u.current = e, l(e)
                }, []), k = e.useCallback(e => {
                    n && (d.current = !0, h.current = !1, v.current = !1, b.current = {
                        x: e.clientX,
                        y: e.clientY
                    }, y.current = { ...u.current
                    }, g(!1))
                }, [n]), C = e.useCallback(e => {
                    if (!d.current || !n) return;
                    const t = e.clientX - b.current.x,
                        i = e.clientY - b.current.y,
                        c = Math.abs(i);
                    if (!h.current && c < s) return;
                    h.current || (h.current = !0, g(!0), p(!0), e.currentTarget.setPointerCapture(e.pointerId)), v.current || (v.current = !0, r ? .());
                    const f = a();
                    let m = y.current.x,
                        x = y.current.y + i;
                    x = Math.max(f.minY, Math.min(f.maxY, x));
                    const k = {
                        x: m,
                        y: x
                    };
                    u.current = k, cancelAnimationFrame(w.current), w.current = requestAnimationFrame(() => {
                        l({ ...u.current
                        })
                    }), o ? .({
                        dx: t,
                        dy: i
                    }, e)
                }, [n, t, s, r, o, a]), T = e.useCallback(e => {
                    d.current && (cancelAnimationFrame(w.current), h.current && (e.currentTarget.releasePointerCapture(e.pointerId), l({ ...u.current
                    }), i ? .(u.current, {
                        x: e.clientX,
                        y: e.clientY
                    })), d.current = !1, p(!1))
                }, [i]);
                return e.useEffect(() => () => cancelAnimationFrame(w.current), []), {
                    offset: c,
                    setOffset: x,
                    offsetRef: u,
                    isDragging: f,
                    didDrag: m,
                    handlers: {
                        onPointerDown: k,
                        onPointerMove: C,
                        onPointerUp: T,
                        onPointerCancel: T
                    }
                }
            }({
                axis: "vertical",
                enabled: m,
                getConstraints: z,
                onDragEnd: (e, t) => {
                    B.current();
                    const n = window.innerHeight / 2;
                    L(t.y < n), V({
                        x: 0,
                        y: e.y
                    })
                }
            }),
            {
                isReadyToShow: Y,
                debugPositions: Q,
                markRepositioned: W
            } = Wo({
                applyYOffset: e => V({
                    x: U.current.x,
                    y: e
                }),
                getCurrentYOffset: () => U.current.y,
                elementRef: C,
                isTopPlacement: O,
                debugPositioning: p
            });
        B.current = W, e.useImperativeHandle(v, () => k.current);
        const {
            t: X
        } = Be();
        e.useEffect(() => {
            if (!Y || w) return void(x.current = !1);
            const e = setTimeout(() => {
                x.current = !0
            }, 4e3);
            return () => clearTimeout(e)
        }, [Y, w]), e.useEffect(() => {
            if (!_) return;
            const e = setTimeout(() => {
                R(!1)
            }, 12e3);
            return () => clearTimeout(e)
        }, [_]);
        const G = e.useCallback(() => {
            !x.current || _ || w || (E(e => e + 1), R(!0))
        }, [_, w]);
        return o.jsxs(o.Fragment, {
            children: [o.jsxs(rt.div, {
                ref: k,
                "data-testid": "entrypoint",
                "data-collapsed": "true",
                "aria-label": X(a.ENTRYPOINT.SUBTITLE),
                className: Ve("flex flex-shrink-0 cursor-pointer touch-none flex-col gap-m", l ? Ve(D ? "flex-col-reverse" : "flex-col", N ? "items-start" : "items-end") : "rounded-full", M && "m-xxl", Y && !H && "transition-all duration-300 ease-out", H && "scale-105 cursor-grabbing", f, M && So(A)),
                style: {
                    x: q.x,
                    y: q.y,
                    ...O && {
                        top: b ? ? 0
                    },
                    ...H && {
                        willChange: "transform"
                    }
                },
                initial: {
                    opacity: 0,
                    scale: .625
                },
                animate: {
                    opacity: Y ? 1 : 0,
                    scale: Y ? 1 : .625
                },
                exit: {
                    opacity: 0,
                    scale: .8
                },
                tabIndex: -1,
                ...K,
                onMouseEnter: () => {
                    G(), y || (P(!0), s ? .())
                },
                onMouseLeave: () => {
                    y || (P(!1), r ? .())
                },
                children: [l && F && n && o.jsx(Xo, {
                    message: l,
                    isOfflineNudge: u,
                    onClick: () => {
                        n()
                    }
                }), o.jsxs("div", {
                    ref: C,
                    role: "button",
                    tabIndex: 0,
                    className: Ve("relative max-w-[calc(var(--viewport-w,100vw)-2rem)] cursor-pointer rounded-full", F ? "entrypoint-shadow border-2 border-(--accent)/20 dark:border-(--accent-dark)/20" : "p-xs"),
                    onKeyDown: e => {
                        "Enter" !== e.key && " " !== e.key || (e.preventDefault(), t())
                    },
                    onClick: e => {
                        $ || (e.stopPropagation(), t())
                    },
                    children: [o.jsxs("div", {
                        className: Ve("relative isolate z-10 flex items-center rounded-full", F ? "gap-l bg-white p-s dark:bg-black" : "dark:focus-visible:!ring-black"),
                        children: [o.jsx(yo, {
                            className: Ve("shrink-0", y ? "size-12" : "size-16"),
                            sparkleSize: y ? 24 : 32,
                            ref: T
                        }, `bubble-entrypoint-avatar-${S}`), o.jsx(mt, {
                            children: F && o.jsxs(rt.div, {
                                initial: {
                                    width: 0,
                                    opacity: 0
                                },
                                animate: {
                                    width: "auto",
                                    opacity: 1
                                },
                                exit: {
                                    width: 0,
                                    opacity: 0
                                },
                                transition: {
                                    duration: .3,
                                    ease: "easeOut"
                                },
                                className: "flex items-center overflow-hidden",
                                children: [o.jsx("div", {
                                    className: Ve("min-w-0 truncate text-base-body text-foreground-1 select-none", !w && "entrypoint-shimmer-text", !j && "pr-m"),
                                    children: c ? ? d
                                }), j && i && o.jsx("button", {
                                    type: "button",
                                    "aria-label": "Dismiss",
                                    className: "ml-s flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full text-foreground-3 transition-colors hover:bg-background-2 hover:text-foreground-1",
                                    onClick: e => {
                                        e.stopPropagation(), P(!1), i()
                                    },
                                    children: o.jsx(gt, {})
                                })]
                            }, "inline-nudge")
                        })]
                    }), !w && F && o.jsx("div", {
                        className: "pointer-events-none absolute inset-[-3px] overflow-hidden rounded-full",
                        children: o.jsx("div", {
                            className: "entrypoint-beam-dot absolute inset-0 size-20"
                        }, `beam-${S}`)
                    })]
                })]
            }, "bubble-entrypoint"), p && Q.map((e, t) => o.jsx("div", {
                style: {
                    position: "fixed",
                    left: e.x,
                    top: e.y,
                    width: e.w,
                    height: e.h,
                    border: "2px dashed " + (e.blocked ? "red" : "lime"),
                    backgroundColor: e.blocked ? "rgba(255,0,0,0.15)" : "rgba(0,255,0,0.15)",
                    pointerEvents: "none",
                    zIndex: 99999,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    color: e.blocked ? "red" : "lime",
                    fontWeight: "bold"
                },
                children: t + 1
            }, t))]
        })
    }),
    Jo = e.forwardRef(function({
        placeholder: t,
        onClick: n,
        isCTACoverCheckComplete: r,
        onDismiss: i,
        reversed: c,
        onInteractionChange: l,
        useScreenReaderDescription: u = !1,
        canNavigateNudges: d,
        nudgePosition: f = 1,
        nudgeCount: p = 1,
        onNextNudge: m,
        onPreviousNudge: g
    }, b) {
        const {
            t: y
        } = Be(), v = s(j), w = Ht() || h, x = !!v ? .IsKalkiCustomEnabled, [k, C] = e.useState(!1), [T, S] = e.useState(!1), [E, _] = e.useState(0), [R, I] = e.useState(!1), [P, M] = e.useState(!1), [A, N] = e.useState(!1), O = e.useRef(!1), D = e.useRef(null), L = e.useId(), F = u && t.length > 0, z = e.useRef(t);
        e.useEffect(() => {
            t !== z.current && (z.current = t, w || (_(e => e + 1), S(!0), C(!0), O.current = !0))
        }, [t, w]), e.useEffect(() => {
            if (r && !k) {
                const e = setTimeout(() => {
                    C(!0), O.current = !0
                }, 4e3);
                return () => clearTimeout(e)
            }
            C(!1)
        }, [r, k]);
        const B = e.useCallback(() => {
                S(!1)
            }, []),
            q = e.useCallback(() => {
                x || !O.current || T || w || (_(e => e + 1), S(!0))
            }, [x, T, w]),
            V = e.useRef(null),
            [U, H] = e.useState(!1),
            $ = e.useMemo(() => e => {
                V.current = e, "function" == typeof b ? b(e) : b && (b.current = e)
            }, [b]);
        e.useEffect(() => {
            H(!!V.current && "rtl" === getComputedStyle(V.current).direction)
        }, []);
        const K = e.useCallback(() => {
            const e = D.current;
            I(!!e && e.scrollWidth > e.clientWidth + 1)
        }, []);
        e.useLayoutEffect(() => {
            if (!x) return void I(!1);
            if (K(), "undefined" == typeof ResizeObserver) return window.addEventListener("resize", K), () => window.removeEventListener("resize", K);
            const e = new ResizeObserver(K);
            return D.current && e.observe(D.current), window.addEventListener("resize", K), () => {
                e.disconnect(), window.removeEventListener("resize", K)
            }
        }, [K, x, t]);
        const Y = x && R && !w,
            Q = e.useMemo(() => w ? {
                duration: 0
            } : {
                type: "spring",
                stiffness: 220,
                damping: 28,
                mass: .9
            }, [w]);
        return e.useEffect(() => {
            l ? .(P || A)
        }, [A, P, l]), o.jsxs(rt.div, {
            layout: "size",
            transition: Q,
            className: "entrypoint-shadow relative max-w-[calc(var(--viewport-w,100vw)-2rem)] cursor-pointer rounded-full border-2 border-(--accent)/20 dark:border-(--accent-dark)/20",
            ref: $,
            onClick: n,
            onMouseEnter: () => {
                M(!0), q()
            },
            onMouseLeave: () => M(!1),
            onFocusCapture: () => N(!0),
            onBlurCapture: e => {
                e.currentTarget.contains(e.relatedTarget) || N(!1)
            },
            role: "button",
            tabIndex: 0,
            "aria-label": y(a.ENTRYPOINT.SUBTITLE),
            "aria-describedby": F ? L : void 0,
            "aria-keyshortcuts": d ? "ArrowLeft ArrowRight" : void 0,
            onKeyDown: e => "Enter" === e.key ? (e.preventDefault(), void n()) : d && "ArrowRight" === e.key ? (e.preventDefault(), void m ? .()) : d && "ArrowLeft" === e.key ? (e.preventDefault(), void g ? .()) : void(" " === e.key && e.preventDefault()),
            onKeyUp: e => {
                " " === e.key && (e.preventDefault(), n())
            },
            children: [F ? o.jsxs("span", {
                id: L,
                className: "sr-only",
                children: [t, d ? ` (${f} of ${p})` : ""]
            }) : null, o.jsxs("div", {
                className: Ve("relative isolate z-10 flex items-center gap-l rounded-full p-s", U !== !!c && "flex-row-reverse", x ? "bg-transparent" : "bg-white", x ? "dark:bg-transparent" : "dark:bg-black"),
                children: [o.jsx(yo, {
                    className: "size-11 shrink-0",
                    sparkleSize: 24
                }, `icon-${E}`), o.jsxs("div", {
                    className: Ve("flex items-center gap-2.5 overflow-hidden", U !== !!c && "flex-row-reverse"),
                    children: [o.jsx("div", {
                        ref: D,
                        className: Ve(!x && !w && (k || T) && "entrypoint-shimmer-text", "min-w-0 pb-0.5 text-base-body text-foreground-1 select-none", i ? "" : "pr-s", Y ? "overflow-hidden" : "truncate"),
                        children: Y ? o.jsxs("div", {
                            className: "entrypoint-marquee-track flex w-max items-center gap-8 whitespace-nowrap",
                            children: [o.jsx("span", {
                                children: t
                            }), o.jsx("span", {
                                "aria-hidden": "true",
                                children: t
                            })]
                        }) : t
                    }, `text-${E}`), i && o.jsx("button", {
                        type: "button",
                        "aria-label": y(a.ACTIONS.DISMISS),
                        className: Ve("relative flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full text-foreground-3 transition-colors before:absolute before:-inset-y-4 before:content-[''] hover:bg-background-2 hover:text-foreground-1", U !== !!c ? "before:-right-3 before:-left-4" : "before:-right-4 before:-left-3"),
                        onClick: e => {
                            e.stopPropagation(), i()
                        },
                        children: o.jsx(bt, {})
                    })]
                })]
            }), !x && !w && o.jsx("div", {
                className: "pointer-events-none absolute inset-[-3px] overflow-hidden rounded-full",
                children: o.jsx("div", {
                    className: "entrypoint-beam-dot absolute inset-0 size-20",
                    onAnimationEnd: B
                }, `beam-${E}`)
            })]
        })
    });

function Zo(e) {
    if (e) return e.MobileNudgeMessage ? e.MobileNudgeMessage : e.NudgeMessage
}

function ea(e) {
    switch (e) {
        case P.Highlight:
            return I.OfflineHighlight;
        case P.Comparison:
            return I.OfflineComparison;
        case P.Question:
        default:
            return I.OfflineQuestion
    }
}

function ta(e) {
    return JSON.stringify([e.type, e.text, e.chatRequestText, e.priority])
}
const na = e.forwardRef(({
    openChat: t,
    onOfflineNudgeClick: n,
    debugPositioning: r = !1
}, c) => {
    const l = s(j),
        u = s(d),
        h = s(x),
        p = s(me),
        g = i(me),
        b = s(ge),
        y = s(be),
        v = s(ye),
        w = i(ve),
        k = s(we),
        C = s(m) ? .cartId,
        [T, R] = e.useState(!1),
        [I, P] = e.useState(!1),
        [M, A] = e.useState(null),
        [N, O] = e.useState(new Set),
        L = e.useRef(null),
        F = e.useRef(null),
        z = e.useRef(null),
        B = e.useRef({
            key: "",
            selectedNudge: null
        }),
        [q, V] = e.useState([]),
        U = e.useRef(null),
        H = s(f),
        $ = i(f),
        K = e.useRef(!1),
        {
            sendTelemetry: Y,
            baseTelemetryFields: Q
        } = Ot(),
        {
            t: W
        } = Be(),
        {
            isBubbleEntrypoint: X,
            entrypointPlacement: G,
            setEntrypointMinimized: J
        } = Ue(),
        Z = !!l ? .IsKalkiCustomEnabled,
        ee = !!l ? .IsDualNudgeDisplayEnabled,
        te = !!l ? .IsRotatingNudgesEnabled,
        [ne, se] = e.useState(!1),
        re = Co(G === st.TopRight || G === st.TopLeft);
    e.useLayoutEffect(() => {
        const e = X ? F.current : z.current;
        e && (L.current = e, yt(c, e))
    });
    const ie = e.useMemo(() => function({
            openChat: e,
            sendTelemetry: t,
            baseTelemetryFields: n
        }) {
            return (s, r) => {
                e(), t(E({
                    baseFields: n,
                    uiEventType: s,
                    metadata: r
                }))
            }
        }({
            openChat: t,
            sendTelemetry: Y,
            baseTelemetryFields: Q
        }), [t, Y, Q]),
        oe = e.useCallback((e, t) => (R(!0), ie(e, t)), [ie]),
        ae = e.useCallback(e => p ? _.ClarityNudgeClick : e && e.ActionToTake !== S.OpenCheckoutPage ? _.EntrypointNudgeClick : _.EntrypointClick, [p]),
        ce = e.useMemo(() => b ? .ActionToTake !== S.OpenCheckoutPage ? b : null, [b]),
        {
            displayedInlineEntrypointData: le,
            temporaryInlineEntrypointData: ue,
            redirectEntrypointNudgeData: de,
            temporaryRedirectEntrypointData: he,
            canNavigateNudges: fe,
            nudgePosition: pe,
            nudgeCount: xe,
            registerClickedEntrypointData: ke,
            showNextNudge: Ce,
            showPreviousNudge: Te,
            handleBubbleHover: Se,
            handleBubbleHoverEnd: Ee,
            dismissBubbleNudges: _e,
            handlePillHover: Re,
            dismissRedirectNudge: Ie
        } = function({
            isBubbleEntrypoint: t,
            clarityMetadata: n,
            entrypointData: s,
            redirectEntrypointData: r,
            isDualNudgeDisplayEnabled: i,
            inlineEntrypointData: o,
            rotatingNudgesPool: a,
            isRotatingNudgesEnabled: c,
            isMinimized: l,
            isInteractionPaused: u = !1
        }) {
            const [d, h] = e.useState([]), [f, p] = e.useState(!1), [m, g] = e.useState(0), [b, y] = e.useState(!0), [v, w] = e.useState(!1), [x, k] = e.useState(null), [C, T] = e.useState(null), E = e.useMemo(() => c ? a.filter(e => e.ActionToTake !== S.OpenCheckoutPage) : [], [c, a]), _ = e.useCallback(e => [e.NudgeType, e.AgentMessage, e.ChatMessage ? ? "", e.NudgeMessage].join("|"), []);
            e.useEffect(() => n ? (p(!1), h([]), g(0), y(!0), void w(!1)) : c && E.length > 0 ? (p(!0), h(E), g(0), y(!0), void w(!1)) : (p(!1), h(o ? [o] : []), g(0), y(!0), void w(!1)), [n, o, c, E]), e.useEffect(() => {
                if (!f || !l || n || u || t && v) return;
                const e = t ? d.length : d.length + 1;
                if (e <= 1) return;
                if (t) {
                    const t = setTimeout(() => {
                        y(t => !t && (g(t => (t + 1) % e), !0))
                    }, 6e3);
                    return () => clearTimeout(t)
                }
                const s = setInterval(() => {
                    g(t => (t + 1) % e)
                }, 6e3);
                return () => clearInterval(s)
            }, [n, t, b, u, v, l, f, d.length]);
            const R = e.useMemo(() => {
                    if (n) return o;
                    if (!f) return o;
                    const e = t ? [...d] : [...d, null];
                    return 0 === e.length ? null : e[m % e.length] ? ? null
                }, [n, o, f, t, d, m]),
                I = e.useMemo(() => f ? t ? d.length : d.length + 1 : 1, [f, t, d.length]),
                P = I > 1,
                j = e.useCallback(e => {
                    P && g(t => {
                        const n = (t + e) % I;
                        return n < 0 ? n + I : n
                    })
                }, [P, I]),
                M = e.useCallback(() => {
                    j(1)
                }, [j]),
                A = e.useCallback(() => {
                    j(-1)
                }, [j]),
                N = P ? m % I + 1 : 1,
                O = e.useMemo(() => i ? r : s ? .ActionToTake === S.OpenCheckoutPage ? s : null, [s, i, r]);
            e.useEffect(() => {
                if (t && f) return v ? void k(null) : b && R ? void k(R) : void k(null);
                if (!R) return void k(null);
                k(R);
                const e = setTimeout(() => {
                    k(null)
                }, 1e4);
                return () => clearTimeout(e)
            }, [R, t, b, v, f]), e.useEffect(() => {
                if (!O) return void T(null);
                T(O);
                const e = setTimeout(() => {
                    T(null)
                }, 1e4);
                return () => clearTimeout(e)
            }, [O]);
            const D = e.useCallback(e => {
                    if (!e || !f) return;
                    const t = _(e);
                    h(e => e.filter(e => _(e) !== t)), g(0)
                }, [_, f]),
                L = !!O,
                F = e.useCallback(() => {
                    v || (R && !x && k(R), O && !C && T(O))
                }, [R, O, v, x, C]),
                z = e.useCallback(() => {
                    x && k(null), C && T(null)
                }, [x, C]),
                B = e.useCallback(() => {
                    w(!0), y(!1), k(null), T(null)
                }, []),
                q = e.useCallback(() => {
                    L && !C && T(O)
                }, [L, O, C]),
                V = e.useCallback(() => {
                    T(null)
                }, []);
            return {
                displayedInlineEntrypointData: R,
                temporaryInlineEntrypointData: x,
                redirectEntrypointNudgeData: O,
                temporaryRedirectEntrypointData: C,
                hasRedirectNudge: L,
                canNavigateNudges: P,
                nudgePosition: N,
                nudgeCount: I,
                registerClickedEntrypointData: D,
                showNextNudge: M,
                showPreviousNudge: A,
                handleBubbleHover: F,
                handleBubbleHoverEnd: z,
                dismissBubbleNudges: B,
                handlePillHover: q,
                dismissRedirectNudge: V
            }
        }({
            isBubbleEntrypoint: X,
            clarityMetadata: p,
            entrypointData: b,
            redirectEntrypointData: y,
            isDualNudgeDisplayEnabled: ee,
            inlineEntrypointData: ce,
            rotatingNudgesPool: k,
            isRotatingNudgesEnabled: te,
            isMinimized: H,
            isInteractionPaused: I
        });
    e.useEffect(() => {
        p ? H ? K.current && (g(null), K.current = !1) : K.current = !0 : K.current = !1
    }, [p, H, g]);
    const Pe = e.useCallback(e => {
            w(e), ke(e)
        }, [ke, w]),
        je = e.useCallback(() => {
            const e = he ? ? de;
            Y(E({
                baseFields: Q,
                uiEventType: _.EntrypointNudgeToCheckoutRedirect,
                metadata: {
                    nudgeType: e ? .NudgeType,
                    entrypointType: X ? D.Bubble : D.Pill,
                    entrypointPlacement: G,
                    metadata: {
                        agent_message: e ? .AgentMessage,
                        chat_message: e ? .ChatMessage,
                        message: Zo(e)
                    }
                }
            }));
            const t = Ft(C),
                n = zt(u ? .cart);
            U.current && clearTimeout(U.current), U.current = setTimeout(() => {
                vt(n, () => $(!0)) || (window.location.href = t)
            }, 150)
        }, [he, de, Y, Q, X, G, C, u, $]),
        Me = e.useCallback(e => {
            if (e) {
                if (J(!0), r) {
                    const e = X ? F.current : z.current;
                    if (e) {
                        const t = e.getBoundingClientRect();
                        V(e => [...e, {
                            x: t.x,
                            y: t.y,
                            w: t.width,
                            h: t.height,
                            blocked: !0
                        }])
                    }
                }
            } else se(!0)
        }, [r, X, J]);
    Qo(z, Me, !Z && !X);
    const Ae = e.useMemo(() => "www-thejewelhut-co-uk" === h.advertiserId ? W(a.ENTRYPOINT.INPUT_PLACEHOLDER_JEWELHUT) : l ? .IsBrandedPlaceholderEnabled ? W(a.ENTRYPOINT.BRANDED_INPUT_PLACEHOLDER, {
            brand: u ? .name || ""
        }) : u ? .strings ? .entrypointLabel ? ? W(a.ENTRYPOINT.INPUT_PLACEHOLDER_SHORT), [u ? .name, u ? .strings ? .entrypointLabel, l ? .IsBrandedPlaceholderEnabled, h.advertiserId, W]),
        Ne = e.useMemo(() => Zo(le) ? ? "", [le]),
        Oe = e.useMemo(() => Zo(ue), [ue]),
        De = e.useMemo(() => Zo(he), [he]),
        Le = e.useMemo(() => Array.isArray(v) ? v.map(ta).join("||") : "", [v]);
    if (B.current.key !== Le) {
        const e = Array.isArray(v) ? v : [];
        B.current = {
            key: Le,
            selectedNudge: e.length > 0 ? e[Math.floor(Math.random() * e.length)] ? ? null : null
        }
    }
    const Fe = B.current.selectedNudge,
        ze = e.useMemo(() => Fe ? {
            key: ["offline", ta(Fe)].join("|"),
            message: Fe.text,
            isOffline: !0,
            nudgeType: ea(Fe.type)
        } : de && De ? {
            key: ["redirect", de.NudgeType, de.AgentMessage, de.ChatMessage, de.NudgeMessage].join("|"),
            message: De,
            isOffline: !1,
            nudgeType: de.NudgeType
        } : null, [Fe, de, De]),
        qe = ze && ze.key !== M ? ze : null,
        He = e.useCallback(() => {
            Fe ? n ? .(Fe.chatRequestText, Fe.type) : je()
        }, [Fe, je, n]),
        $e = e.useCallback(() => {
            ze && (A(ze.key), Y(E({
                baseFields: Q,
                uiEventType: _.EntrypointDismiss,
                metadata: {
                    nudgeType: ze.nudgeType,
                    entrypointType: X ? D.Bubble : D.Pill,
                    entrypointPlacement: G
                }
            }))), X ? _e() : Fe || Ie()
        }, [Fe, Q, ze, _e, Ie, G, X, Y]),
        Ke = e.useCallback(() => {
            Pe(le), oe(ae(le), {
                nudgeType: le ? .NudgeType,
                entrypointType: D.Pill,
                entrypointPlacement: G,
                metadata: {
                    agent_message: le ? .AgentMessage,
                    chat_message: le ? .ChatMessage,
                    message: le ? Ne : Ae
                }
            })
        }, [Ae, le, G, ae, Ne, oe, Pe]),
        Ye = e.useCallback(() => {
            Pe(le), oe(ae(le), {
                nudgeType: le ? .NudgeType,
                entrypointType: D.Bubble,
                entrypointPlacement: G,
                metadata: {
                    agent_message: le ? .AgentMessage,
                    chat_message: le ? .ChatMessage,
                    message: le ? Ne : Ae
                }
            })
        }, [Ae, le, G, ae, Ne, oe, Pe]);
    if (e.useEffect(() => {
            const e = X ? D.Bubble : D.Pill,
                t = [];
            if (Fe) {
                const n = ea(Fe.type),
                    s = ["offline", ta(Fe), e, G ? ? ""].join("|");
                N.has(s) || (wt(n, e, Q, {
                    message: Fe.text
                }, Y, G), t.push(s))
            }
            const n = [];
            le && n.push({
                source: "inline",
                data: le
            }), de && n.push({
                source: "redirect",
                data: de
            });
            for (const {
                    source: s,
                    data: r
                } of n) {
                const n = Zo(r) ? ? "",
                    i = [s, r.NudgeType, r.ActionToTake, r.NudgeMessage, r.AgentMessage, r.ChatMessage, e, G ? ? ""].join("|");
                N.has(i) || (wt(r.NudgeType, e, Q, {
                    agent_message: r.AgentMessage,
                    chat_message: r.ChatMessage,
                    message: n
                }, Y, G), t.push(i))
            }
            t.length > 0 && O(e => {
                const n = new Set(e);
                for (const s of t) n.add(s);
                return n
            })
        }, [Fe, Q, le, G, X, de, Y, N]), e.useEffect(() => {
            Fe && xt(ea(Fe.type))
        }, [Fe]), e.useEffect(() => () => {
            U.current && clearTimeout(U.current)
        }, []), e.useEffect(() => {
            T && (L.current ? .focus(), R(!1))
        }, [T]), X) {
        const e = l ? .IsBubbleDragEnabled ? ? !1;
        return o.jsx(mt, {
            children: H && o.jsx(Go, {
                ref: F,
                debugPositioning: r,
                isDragEnabled: e,
                onLogoClick: Ye,
                onRedirectNudgeClick: qe ? He : void 0,
                onHover: Se,
                onHoverEnd: Ee,
                onDismissNudge: Oe || qe ? $e : void 0,
                inlineNudgeData: Oe,
                redirectNudgeData: qe ? .message,
                isOfflineNudge: qe ? .isOffline,
                placeholder: Ae,
                entrypointPlacement: G,
                headerBottom: re,
                className: G ? "fixed" : "fixed right-4 bottom-5"
            })
        })
    }
    const Qe = To(G ? ? st.BottomCenter),
        We = Qe.isTop ? _o : Eo,
        Xe = Ve("fixed flex max-w-[calc(100vw-var(--spacing-xxl)*2)] flex-col items-end", Qe.isTop && "flex-col-reverse", So(Qe), ne ? "visible" : "invisible"),
        Ge = Qe.isTop ? {
            top: `${re}px`
        } : void 0,
        Je = o.jsxs(o.Fragment, {
            children: [r && o.jsx(qo, {
                positions: q
            }), qe && o.jsx(Xo, {
                message: qe.message,
                onClick: He,
                isOfflineNudge: qe.isOffline,
                className: Qe.isTop ? "mt-m" : "mb-m"
            }), o.jsx(Jo, {
                ref: z,
                placeholder: le ? Ne : Ae,
                onClick: Ke,
                isCTACoverCheckComplete: ne,
                onInteractionChange: P,
                useScreenReaderDescription: te,
                canNavigateNudges: fe,
                nudgePosition: pe,
                nudgeCount: xe,
                onNextNudge: Ce,
                onPreviousNudge: Te,
                onDismiss: qe ? $e : void 0
            })]
        });
    return o.jsx(o.Fragment, {
        children: o.jsx(mt, {
            mode: "wait",
            children: H && (Z ? o.jsx("div", {
                className: Xe,
                style: Ge,
                "data-testid": "entrypoint",
                "aria-label": W(a.ENTRYPOINT.SUBTITLE),
                onMouseEnter: Re,
                children: Je
            }, "entrypoint-pill") : o.jsx(rt.div, { ...We,
                className: Xe,
                style: Ge,
                "data-testid": "entrypoint",
                "aria-label": W(a.ENTRYPOINT.SUBTITLE),
                onMouseEnter: Re,
                children: Je
            }, "entrypoint-pill"))
        })
    })
});

function sa({
    showActionButton: t = !0,
    title: n,
    subtitle: r,
    actionButtonTitle: c,
    onActionButtonClick: l
}) {
    const {
        t: u
    } = Be(), d = s(xe), h = i(ke), {
        sendTelemetry: f,
        baseTelemetryFields: p
    } = Ot(), m = e.useCallback(() => {
        h(!0), f(E({
            baseFields: p,
            uiEventType: _.StartedNewSession
        }))
    }, [h, f, p]), g = e.useCallback(() => {
        l ? l() : m()
    }, [l, m]);
    return o.jsx("div", {
        className: "flex size-full flex-col overflow-auto",
        children: o.jsxs("div", {
            className: "flex-center m-auto w-64 flex-col gap-2",
            children: [o.jsx("div", {
                className: "text-9xl",
                children: "😿"
            }), o.jsx("div", {
                className: "text-center text-2xl text-foreground-4",
                children: n
            }), r && o.jsx("div", {
                className: "text-center text-sm-body text-foreground-4",
                children: r
            }), t && o.jsx("div", {
                className: "w-full pt-10 md:pt-20",
                children: o.jsx(kt, {
                    onClick: g,
                    Color: "primary",
                    Label: c || u(a.NEW_CHAT.CONFIRMATION),
                    fill: !0
                })
            }), o.jsx("div", {
                className: "w-full",
                style: {
                    height: `${d}px`
                }
            })]
        })
    })
}
na.displayName = "Entrypoint";
const ra = e.lazy(() => je(() =>
    import ("./chunk-index-Dqp3MvIT.js"), __vite__mapDeps([0, 1, 2, 3])).then(e => ({
    default: e.Chat
})));

function ia({
    timeScriptLoaded: t
}) {
    const [n, r] = A(f), [c, l] = A(Oe), [u, h] = A(ge), [p, g] = A(ve), [k, C] = A(x), [T, S] = A(re), [R, I] = A(De), [P] = A(j), [ee, te] = A(ke), ne = s(Ae), he = s(we), fe = s(d), pe = s(J), me = s(ie), [be, xe] = A(m), Le = e.useMemo(() => Ce(), []), Fe = i(ae), ze = i(Ne), qe = i(le), He = i(we), [$e, Ke] = e.useState(!1), [Ye, Qe] = e.useState(!1), [We, Xe] = e.useState(!1), [Ge, Je] = e.useState(!1), Ze = i(ce), et = i(ye), {
        isBubbleEntrypoint: tt
    } = Ue(), {
        t: nt
    } = Be(), st = e.useRef(null), rt = e.useRef(!1), at = e.useRef(!1), ct = e.useRef(!1), lt = e.useRef(!1), dt = s(Z), pt = s(le), [gt, bt] = e.useState(!1), yt = e.useMemo(() => Te(k), [k, n]), vt = e.useCallback(e => e.some(e => "user" === e.author), []), wt = e.useMemo(() => 0 === T.length, [T]), xt = e.useMemo(() => vt(T), [T, vt]), kt = e.useMemo(() => !0 === P ? .IsEntryPointEnabled && !P.IsExPEntryPointDisabled, [P]), Dt = e.useMemo(() => !!ee || !c && !yt && (!k.jwtToken || !fe), [ee, c, yt, k.jwtToken, fe]), {
        sendTelemetry: Ft,
        baseTelemetryFields: zt
    } = Ot(), Ht = Se(), {
        sendMessage: $t
    } = Ct(), {
        handleStatesForMessageLoading: Kt
    } = Tt(), {
        sendNudgeRequest: Yt,
        getContext: Qt,
        fetchCollections: Wt,
        canMakeNudgeRequest: Xt
    } = zo({
        sendMessage: $t
    }), [Gt, Jt] = e.useState(!1), [Zt, en] = e.useState(!1), [tn, nn] = e.useState(0), sn = e.useRef(!1), rn = e.useRef(null), on = e.useRef(null), an = e.useRef(Yt), {
        setTimeToShowBubbleSent: cn,
        sendFullPageCrashTelemetry: ln
    } = function({
        timeScriptLoaded: t,
        isVisible: n,
        isMinimized: r,
        pageContext: o
    }) {
        const a = s(d),
            c = s(x),
            l = s(j),
            u = i(M),
            [h, f] = A(G),
            [p, m] = e.useState(!1),
            [g, b] = e.useState(!1),
            [y, v] = e.useState(!1),
            {
                isBubbleEntrypoint: w,
                entrypointPlacement: k
            } = Ue(),
            C = l ? .IsEntryPointEnabled && !l.IsExPEntryPointDisabled,
            {
                sendTelemetry: T,
                baseTelemetryFields: S
            } = Ot();
        return e.useEffect(() => {
            if (!g && !W && S.sessionId) {
                const e = window.__ADSAI_SCRIPT_PERF__;
                e && (T(N({
                    baseFields: S,
                    performanceType: O.TimeToFetchManifest,
                    time: Number(e.timeToFetchManifest.toFixed(2))
                })), T(N({
                    baseFields: S,
                    performanceType: O.TimeToFetchAndLoadIndex,
                    time: Number(e.timeToFetchAndLoadIndex.toFixed(2))
                })), delete window.__ADSAI_SCRIPT_PERF__, b(!0))
            }
        }, [g, T, S]), e.useEffect(() => {
            if (n && !p && !W) {
                const e = performance.now() - t;
                T(N({
                    baseFields: S,
                    performanceType: O.TimeToShowBubble,
                    time: Number(e.toFixed(2))
                })), T(E({
                    baseFields: S,
                    uiEventType: _.BubbleShown,
                    metadata: {
                        entrypointType: w ? D.Bubble : D.Pill,
                        entrypointPlacement: k,
                        ...o
                    }
                })), m(!0)
            }
        }, [n, t, c, T, p, S, o, l, r, w, k]), e.useEffect(() => {
            h && c.sessionId && (f(!1), T(L({
                baseFields: S,
                debugType: F.ClientInit,
                metadata: {
                    isInitedOnNewChatClick: !r
                }
            })))
        }, [h, T, c, f, r, S]), e.useEffect(() => (it(T, S), ot(T, S)), [T]), e.useEffect(() => {
            if (y || !c.clientId) return;
            const e = z();
            B(c.clientId, `AGENTS_${e}`), v(!0)
        }, [c, y, v]), e.useEffect(() => {
            if (C)
                if (window.dispatchEvent(new CustomEvent(q)), V(U.Active), l.IsLivePreviewSearchEnabled) {
                    const e = new URLSearchParams(window.location.search).get("clarity_redirect");
                    e && (V(U.LivePreview), H(e), u(e), $(X.AgentTutorial, "true"))
                } else K()
        }, [l]), {
            setTimeToShowBubbleSent: m,
            sendFullPageCrashTelemetry: (e, t) => {
                T(Y({
                    baseFields: S,
                    errorEventType: Q.TotalCrash,
                    errorMessage: `${e.message} ${t.componentStack}`,
                    errorCode: "",
                    metadata: {
                        advertiserData: a
                    }
                }))
            }
        }
    }({
        timeScriptLoaded: t,
        isVisible: Ye,
        isMinimized: n,
        pageContext: pe
    }), {
        sendSessionData: un
    } = function({
        enabled: t
    }) {
        const n = s(m),
            r = s(x),
            i = s(d),
            {
                sendTelemetry: o,
                baseTelemetryFields: a
            } = Ot(),
            c = e.useRef(null),
            l = e.useRef(null),
            u = e.useRef(!1),
            h = e.useCallback((e, t) => {
                if (t) return !1;
                if (!l.current) return !1;
                const {
                    cartId: n,
                    timestamp: s
                } = l.current, r = Date.now() - s;
                return n === e && r < 5e3
            }, []),
            f = e.useCallback(async (e, t, n, s) => {
                if (!r.jwtToken ? .token || !i) return !1;
                l.current = {
                    cartId: e,
                    timestamp: Date.now()
                };
                const c = v();
                let u = !1;
                const d = async () => (o(L({
                    baseFields: a,
                    debugType: F.SessionDataSent,
                    metadata: {
                        isHydrated: ht(e),
                        cartIdLength: e.length,
                        currency: t,
                        triggerSource: s,
                        wasDeferred: c,
                        wasTimedOut: u
                    }
                })), ft({
                    cartId: e,
                    currency: t,
                    country: n,
                    jwtToken: r.jwtToken ? .token ? ? "",
                    advertiserData: i,
                    baseTelemetryFields: a,
                    sendTelemetry: o
                }));
                if (v()) {
                    let e = !1;
                    const t = () => {
                        e || (e = !0, d())
                    };
                    return w(t), setTimeout(() => {
                        u = !0, t()
                    }, 1e4), !0
                }
                return d()
            }, [r, i, o, a]),
            p = e.useCallback(async e => {
                const {
                    cart: t,
                    force: n = !1,
                    triggerSource: s = "manual"
                } = e, {
                    cartId: r,
                    currency: i,
                    country: o
                } = t;
                return !!h(r, n) || ("initialization" === s && (u.current = !0), f(r, i, o, s))
            }, [h, f]);
        return e.useEffect(() => {
            if (!t || !n) return;
            const {
                cartId: e,
                currency: s,
                country: r
            } = n, i = c.current;
            if (c.current = e, i === e) return;
            if (null === i && !u.current) return;
            const o = ht(e) ? "hydration" : "cartIdChange";
            h(e, !1) || f(e, s, r, o)
        }, [t, n, h, f]), {
            sendSessionData: p,
            lastSentCartId: l.current ? .cartId ? ? null
        }
    }({
        enabled: !!fe && yt
    }), dn = i(Z);
    St(),
        function() {
            const t = i(re),
                n = i(ie),
                s = i(oe),
                r = i(ae),
                o = i(x),
                a = i(d),
                c = i(ce),
                l = i(le);
            e.useEffect(() => {
                const e = ut();
                if (!e) return;
                const i = e => {
                    const i = e.data;
                    switch (i.type) {
                        case "append":
                            t(e => [...e, ...i.messages]);
                            break;
                        case "replace":
                            t(i.history);
                            break;
                        case "update-loading":
                            n(i.isLoading), de(i.isLoading);
                            break;
                        case "update-complete":
                            s(i.isComplete), i.isComplete && (n(!1), de(!1), c(null));
                            break;
                        case "update-safety":
                            ue(i.isViolation), i.isViolation && (r(null), n(!0), de(!0));
                            break;
                        case "update-session-info":
                            o(i.sessionInfo);
                            break;
                        case "update-advertiser-data":
                            a(i.advertiserData)
                    }
                };
                return e.addEventListener("message", i), () => e.removeEventListener("message", i)
            }, [t, n, s, r, l, o, a, c])
        }(), Bt(), qt(), Vt(),
        function() {
            const {
                sendTelemetry: t,
                baseTelemetryFields: n
            } = Ot(), r = e.useRef(!1);
            e.useEffect(() => {
                !r.current && window.Shopify ? .loadFeatures && (window.Shopify.loadFeatures([{
                    name: "consent-tracking-api",
                    version: "0.1"
                }], e => {
                    e && t(L({
                        debugType: F.ShopifyConsentTrackingError,
                        baseFields: n,
                        metadata: {
                            error: e
                        }
                    }))
                }, [t, n]), r.current = !0)
            }, [t, n]);
            const i = s(x),
                o = s(j),
                a = e.useMemo(() => ({
                    sessionId: i.sessionId,
                    clientId: i.clientId,
                    isTestingSession: i.isTestingSession,
                    features: i.features,
                    expAssignmentContext: i.expAssignmentContext
                }), [i]),
                c = e.useCallback(async e => {
                    o ? .IsEntryPointEnabled && (await Lt(a, t, n), t(E({
                        baseFields: n,
                        uiEventType: _.ConsentUpdate,
                        metadata: {
                            consent: e.detail,
                            platformSessionId: se()
                        }
                    })))
                }, [o, a, t, n]);
            e.useEffect(() => (window.document.addEventListener("visitorConsentCollected", c), () => {
                window.document.removeEventListener("visitorConsentCollected", c)
            }), [c, t, n])
        }(), Do(), Et(), e.useEffect(() => {
            je(() =>
                import ("./chunk-index-Dqp3MvIT.js"), __vite__mapDeps([0, 1, 2, 3])).catch(() => {})
        }, []);
    const hn = e.useCallback(() => {
            S([]), _t([]), Jt(!1), sn.current = !1;
            C({
                sessionId: "",
                advertiserId: "",
                clientId: "",
                jwtToken: null,
                createdAt: "",
                isTestingSession: !1,
                features: "",
                expAssignmentContext: ""
            }), te(!1), I(!1), l(!1), Xe(!1), cn(!1), Fe(null), Ze(null), et([]), He([]), en(!1), nn(e => e + 1)
        }, [S, C, te, I, l, Jt, cn, Fe, Ze, en, nn, et, He]),
        fn = e.useCallback(() => {
            Ee(), _e(), hn(), ee && Re()
        }, [hn, ee]),
        pn = (() => {
            const e = new URLSearchParams(window.location.search).get("omax");
            return "true" === e || "1" === e
        })(),
        mn = e.useCallback(() => {
            const e = new URL(window.location.href);
            e.searchParams.delete("omax");
            const t = e.searchParams.toString(),
                n = `${e.pathname}${t?`?${t}`:""}${e.hash}`;
            window.history.replaceState(null, "", n)
        }, []),
        gn = e.useMemo(() => c && !!fe && We && gt && Xt(fe.regexes, be) && !Gt && (n || pn), [fe, Xt, gt, be, We, c, n, pn, Gt]);
    e.useEffect(() => {
        pn && function(e) {
            if (!e) return !1;
            try {
                const t = new URL(e).hostname.toLowerCase();
                return "bing.com" === t || t.endsWith(".bing.com")
            } catch {
                return !1
            }
        }(document.referrer) && dn(!0)
    }, [pn, dn]), e.useEffect(() => {
        Rt(() => r(!0))
    }, [r]), e.useEffect(() => {
        if (Dt) {
            fn(); {
                const e = {
                    sessionId: "",
                    jwtToken: null,
                    clientId: "",
                    advertiserId: "",
                    createdAt: (new Date).toISOString(),
                    isTestingSession: !1,
                    features: "",
                    expAssignmentContext: ""
                };
                It(e, $t)
            }
        }
    }, [Dt, yt]), e.useEffect(() => {
        if (yt && !c && !We) {
            const t = "true" === new URLSearchParams(window.location.search).get("styleRefresh");
            if (Xe(!0), wt) {
                const t = Pt();
                if ("restore" === t.type) S(t.history), Kt(Ie());
                else if ("init" === t.type) {
                    var e = [];
                    P ? .IsHomePageCollectionChipsFromClientEnabled && (e = Wt()), jt(k, $t, e)
                }
            } else t && Mt(k, $t)
        }
    }, [c, yt, k, We, $t, wt, S, Qt, fe, Kt, P ? .IsHomePageCollectionChipsFromClientEnabled, Wt]);
    const bn = e.useCallback(async () => {
        let e = null;
        return e = await Ut(), e
    }, []);
    e.useEffect(() => {
        if (fe && !c && kt && yt) {
            l(!0);
            (async () => {
                let e = null;
                try {
                    e = await bn();
                    const t = e ? .cartId;
                    Ft(L({
                        baseFields: zt,
                        debugType: F.CartFetchResult,
                        metadata: {
                            success: null !== e,
                            hasCartId: !!t,
                            cartIdLength: t ? .length ? ? 0,
                            hasKeyParam: t ? .includes("?key=") ? ? !1,
                            itemsCount: e ? .itemsCount ? ? 0
                        }
                    })), e && (xe(e), un({
                        triggerSource: "initialization",
                        cart: {
                            cartId: e.cartId,
                            currency: e.currency,
                            country: e.country
                        }
                    })), bt(!0)
                } catch (t) {
                    bt(!0), Ft(Y({
                        baseFields: zt,
                        errorEventType: Q.SessionDataError,
                        errorMessage: t.message,
                        errorCode: "CART_FETCH_FAILED",
                        metadata: {
                            advertiserData: fe
                        }
                    }))
                }
                fe.links && Me()
            })()
        }
    }, [fe, zt, bn, kt, c, yt, un, Ft, xe, l]), e.useEffect(() => {
        if (an.current = Yt, rn.current = fe ? .regexes ? ? null, on.current = be, gn && fe ? .regexes) {
            if (sn.current) return;
            sn.current = !0;
            v() && !dt ? function(e, t = 1e4) {
                if (!v()) return void e();
                let n = !1;
                const s = () => {
                    n || (n = !0, e())
                };
                w(s), window.setTimeout(s, t)
            }(() => {
                rn.current && (Xt(fe.regexes, be) ? (an.current(rn.current, on.current), Jt(!0)) : Qe(!0))
            }) : Xt(fe.regexes, be) ? (Yt(fe.regexes, be), Jt(!0)) : Qe(!0)
        }
    }, [fe ? .regexes, Xt, gn, be, dt, Yt]);
    const yn = e.useCallback(() => rt.current ? p : u || (at.current ? he[0] ? ? null : null), [p, u, he]),
        vn = e.useCallback(() => !(!yn() || !rt.current && !at.current), [yn]),
        wn = e.useMemo(() => !!(fe && fe.agentName && yt && kt && (tt || u || he.length || !Xt(fe.regexes, be) || Gt && ne)), [fe, yt, kt, tt, u, he.length, Xt, be, Gt, ne]),
        xn = e.useCallback(() => new URLSearchParams(window.location.search).has("_cacheClear") ? "ChunkRefresh" : vn() ? dt ? "PdpHandoff" : "ProductRedirection" : "OMax", [vn, dt]),
        kn = e.useCallback(() => {
            if (ct.current) return;
            ct.current = !0;
            const e = xn();
            Ft(E({
                baseFields: zt,
                uiEventType: _.ChatOpenedWithParam,
                metadata: {
                    formCode: e
                }
            }))
        }, [Ft, zt, xn]);
    e.useEffect(() => {
        wn && (pn && (at.current = !0, r(!1), kn(), mn()), Qe(!0))
    }, [wn, pn, mn, kn, r]), e.useEffect(() => {
        if (!n)
            if (yt)
                if (vn()) {
                    const e = yn();
                    rt.current = !1, at.current = !1, Ke(!0), At(e, k, $t, be ? ? void 0), h(null), g(null), ze(!0)
                } else $e || xt || me || (Ke(!0), It(k, $t));
        else $e || (Ke(!0), xt ? I(!0) : It(k, $t));
        n && $e && Ke(!1), n && (ct.current = !1)
    }, [u, yt, $e, me, n, xt, yn, vn, pe, $t, k, p, g, h, I, ze, be]);
    const Cn = i(b),
        Tn = e.useCallback(() => {
            ! function() {
                const e = new URL(window.location.href);
                e.searchParams.set("_cacheClear", Date.now().toString()), e.searchParams.set("omax", "1"), window.location.href = e.toString()
            }()
        }, []),
        Sn = Lo({
            entrypointData: u,
            pageContext: pe,
            sendMessage: $t,
            sessionInfo: k,
            setCurrentStreamingMessage: Fe,
            setChatLayoutData: qe,
            setIsNudgeMessage: ze,
            setIsMinimized: r
        });
    e.useEffect(() => {
        if (Le && !Ge && !n && yt && c && !me && !u && pn && T.length > 0) {
            Je(!0);
            const e = Le.trim();
            if (e) {
                let t = 0;
                const n = 15,
                    s = () => {
                        v() ? w(() => {
                            $t({
                                type: "chat",
                                message: e,
                                displayMessage: e,
                                mode: "explicit",
                                sessionInfo: k,
                                author: "queryParamLaunch"
                            })
                        }) : t < n ? (t++, setTimeout(s, 10)) : $t({
                            type: "chat",
                            message: e,
                            displayMessage: e,
                            mode: "explicit",
                            sessionInfo: k,
                            author: "queryParamLaunch"
                        })
                    };
                s()
            }
        }
    }, [Le, Ge, n, yt, c, me, u, $t, k, T.length, pn]), e.useEffect(() => {
        const e = Boolean(Ht.get(ae));
        if (!n && !Ge && 0 === T.length && c && yt && !me && fe && !lt.current && !u && 0 === pt.length && !e) {
            const e = Pe();
            e.length > 0 && (lt.current = !0, S(e), Re())
        }
    }, [n, Ge, T.length, c, yt, me, S, fe, u, pt.length, Ht]);
    const En = (e, t) => y ? o.jsx(ko, {
        sendMessage: $t,
        entrypointRef: st,
        isComposerDisabled: t,
        children: e
    }) : o.jsx(jo, {
        sendMessage: $t,
        entrypointRef: st,
        isComposerDisabled: t,
        children: e
    });
    return kt ? o.jsxs("div", {
        className: Ve(!Ye && "opacity-0", "z-composer size-full transition-opacity ease-in"),
        children: [o.jsx(na, {
            openChat: () => {
                st.current && Cn(st.current.getBoundingClientRect()), rt.current = !0, r(!1)
            },
            onOfflineNudgeClick: Sn,
            ref: st
        }), o.jsx(mt, {
            children: !n && (R ? En(o.jsx(sa, {
                title: nt(a.SESSION.EXPIRED_TITLE),
                subtitle: nt(a.SESSION.EXPIRED_MESSAGE),
                showActionButton: !0
            }), !0) : o.jsx(Nt, {
                onError: (e, t) => {
                    {
                        const n = function(e) {
                            const t = e.message || "",
                                n = t.includes("Failed to fetch dynamically imported module") || t.includes("dynamically imported module") || t.includes("Failed to import") || t.includes("Error loading chunk") || t.includes("Failed") && t.includes("chunk") || e instanceof TypeError && t.includes("Failed to fetch"),
                                s = t.match(/https?:\/\/[^\s]+\.js/),
                                r = s ? .[0];
                            return {
                                isChunkError: n,
                                chunkUrl: r,
                                shouldReload: n
                            }
                        }(e);
                        ln(e, t), n.isChunkError && en(!0)
                    }
                },
                resetKeys: [k.clientId, tn],
                fallback: En(o.jsx(sa, {
                    title: nt(Zt ? a.ERROR.LOADING_TITLE : a.ERROR.TITLE),
                    subtitle: nt(Zt ? a.ERROR.LOADING_MESSAGE : a.ERROR.MESSAGE),
                    showActionButton: !0,
                    actionButtonTitle: Zt ? nt(a.ERROR.REFRESH_ACTION) : void 0,
                    onActionButtonClick: Zt ? Tn : void 0
                }), !0),
                children: En(o.jsx(e.Suspense, {
                    fallback: o.jsx(Bo, {}),
                    children: o.jsx(ra, {
                        sendMessage: $t
                    })
                }))
            }))
        })]
    }) : (document.body.style.overflow = "auto", n || !fe ? o.jsx(o.Fragment, {}) : En(o.jsx(sa, {
        title: nt(a.ERROR.TITLE),
        subtitle: nt(a.ERROR.MESSAGE),
        showActionButton: !1
    }), !0))
}
export {
    ia as
    default
};