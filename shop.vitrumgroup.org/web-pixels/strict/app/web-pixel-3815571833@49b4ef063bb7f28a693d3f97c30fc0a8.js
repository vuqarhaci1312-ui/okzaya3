(() => {
    var p = (t, o, e) => new Promise((i, n) => {
        var s = a => {
                try {
                    c(e.next(a))
                } catch (l) {
                    n(l)
                }
            },
            r = a => {
                try {
                    c(e.throw(a))
                } catch (l) {
                    n(l)
                }
            },
            c = a => a.done ? i(a.value) : Promise.resolve(a.value).then(s, r);
        c((e = e.apply(t, o)).next())
    });
    var f = "WebPixel::Render";
    var g = t => shopify.extend(f, t);

    function h(t, o, e) {
        let i = null,
            n = "";
        try {
            let s = JSON.parse(t);
            if (s && typeof s == "object") {
                if (s[o]) return s[o];
                for (let r in s) s.hasOwnProperty(r) && o.endsWith("." + r) && r.length > n.length && (n = r, i = s[r]);
                return i
            } else return e
        } catch (s) {
            return console.error("Failed to parse domain mappings"), e
        }
    }

    function m(t) {
        return p(this, null, function*() {
            let o = yield fetch(`//t.contentsquare.net/settings/${t}.json`).then(n => n.text()), e = yield fetch("//t.contentsquare.net/uxa/shopify/tag.js").then(n => n.text()), i = `self.CS_CONF=${o};${e}`;
            new Function(i).call(self)
        })
    }
    g(t => {
        let o = t.init.context.window.location.hostname,
            e = t.settings.hash,
            i = t.settings.domainMappings,
            n = h(i, o, e);
        n && m(n).then(() => {
            self.init(t)
        }).catch()
    });
})();