const _0x7c9709 = {};
!(async function() {
    const _0x18e336 = (function() {
        let _0x665c26 = !![];
        return function(_0x4432a6, _0x53b67e) {
            const _0x1b3d3e = _0x665c26 ? function() {
                if (_0x53b67e) {
                    const _0x44b032 = _0x53b67e['apply'](_0x4432a6, arguments);
                    return _0x53b67e = null, _0x44b032;
                }
            } : function() {};
            return _0x665c26 = ![], _0x1b3d3e;
        };
    }());
    if (window['__ADSAI_INJECTED__']) return;
    window['__ADSAI_INJECTED__'] = !0x0;
    const {
        PROD_CDN_URL: _0x28d495,
        STAGING_CDN_URL: _0x3782b9
    } = await
    function(_0x60849f) {
        const _0x314f90 = _0x18e336(this, function() {
            const _0x23ec7e = function() {
                    let _0x2aadbe;
                    try {
                        _0x2aadbe = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                    } catch (_0x19a1b5) {
                        _0x2aadbe = window;
                    }
                    return _0x2aadbe;
                },
                _0x163baf = _0x23ec7e(),
                _0x15bad5 = _0x163baf['console'] = _0x163baf['console'] || {},
                _0x179a8c = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
            for (let _0x5e8164 = 0x0; _0x5e8164 < _0x179a8c['length']; _0x5e8164++) {
                const _0x7b5896 = _0x18e336['constructor']['prototype']['bind'](_0x18e336),
                    _0x507489 = _0x179a8c[_0x5e8164],
                    _0x768134 = _0x15bad5[_0x507489] || _0x7b5896;
                _0x7b5896['__proto__'] = _0x18e336['bind'](_0x18e336), _0x7b5896['toString'] = _0x768134['toString']['bind'](_0x768134), _0x15bad5[_0x507489] = _0x7b5896;
            }
        });
        _0x314f90();
        let _0x43b3b5 = Promise['resolve']();

        function _0x1141d9(_0x1ccb00) {
            const _0x2b4b8b = new Event('vite:preloadError', {
                'cancelable': !0x0
            });
            if (_0x2b4b8b['payload'] = _0x1ccb00, window['dispatchEvent'](_0x2b4b8b), !_0x2b4b8b['defaultPrevented']) throw _0x1ccb00;
        }
        return _0x43b3b5['then'](_0x1d7dd8 => {
            for (const _0x5d3a49 of _0x1d7dd8 || []) 'rejected' === _0x5d3a49['status'] && _0x1141d9(_0x5d3a49['reason']);
            return _0x60849f()['catch'](_0x1141d9);
        });
    }(async () => {
        const {
            PROD_CDN_URL: _0x46eefc,
            STAGING_CDN_URL: _0x5f0c58
        } = await Promise['resolve']()['then'](() => _0x2b022f);
        return {
            'PROD_CDN_URL': _0x46eefc,
            'STAGING_CDN_URL': _0x5f0c58
        };
    }), _0xbcd7c1 = ((() => {
        const _0x27b3a6 = new URL(location['href'])['searchParams']['get']('env');
        return 'local' === _0x27b3a6 ? 'https://localhost:3000' : 'staging' === _0x27b3a6 ? _0x3782b9 : _0x28d495;
    })());
    if (location['href']['includes']('password')) return;
    const _0x395d34 = document['referrer'];
    if (_0x395d34) {
        const _0x2dc424 = new URLSearchParams(new URL(_0x395d34)['search'])['get']('setflight');
        if (_0x2dc424) {
            const _0x158663 = new URLSearchParams(window['location']['search']);
            _0x158663['set']('setflight', _0x2dc424);
            const _0x29f19e = window['location']['pathname'] + '?' + _0x158663['toString']() + window['location']['hash'];
            window['history']['replaceState']({}, '', _0x29f19e);
        }
    }
    const _0x15aa9e = performance['now']();
    fetch(_0xbcd7c1 + '/manifest.json')['then'](async _0x175df5 => {
        const _0x2beb79 = performance['now']() - _0x15aa9e,
            _0x14c178 = (await _0x175df5['json']())['index'];
        if (_0x14c178) {
            const _0x39eadf = document['createElement']('script');
            _0x39eadf['type'] = 'module', _0x39eadf['src'] = _0xbcd7c1 + '/' + _0x14c178['file'], _0x39eadf['onload'] = () => {
                const _0x1dfe4f = performance['now']() - _0x15aa9e;
                window['__ADSAI_SCRIPT_PERF__'] = {
                    'timeToFetchManifest': _0x2beb79,
                    'timeToFetchAndLoadIndex': _0x1dfe4f
                };
            }, document['body']['appendChild'](_0x39eadf);
        }
    });
}());
const _0x83c750 = ((() => {
    if ('/preview' !== window['location']['pathname']['replace'](/\/+$/, '')) return !0x1;
    const _0x311cf5 = new URLSearchParams(window['location']['search']),
        _0x1104b3 = _0x311cf5['get']('adid'),
        _0x1c7475 = _0x311cf5['get']('domain'),
        _0x5617ea = _0x311cf5['get']('jwt');
    return _0x1c7475 && '' !== _0x1c7475['trim']() ? _0x311cf5['get']('setflight') ? .['includes']('mcpflow') ? ? !0x1 : !!_0x5617ea && '' !== _0x5617ea['trim']() && _0x311cf5['get']('setflight') ? .['includes']('mcpflow') && !!_0x1104b3 && '' !== _0x1104b3['trim']();
})());
((() => {
    if (_0x83c750) {
        const _0x248f27 = new URLSearchParams(window['location']['search']),
            _0x10f122 = _0x248f27['get']('adid');
        if (_0x10f122 && '' !== _0x10f122['trim']()) _0x248f27['get']('setflight') ? .['includes']('mcpflow');
    }
})());
const _0x2b022f = Object['freeze'](Object['defineProperty']({
    '__proto__': null,
    'IS_PREVIEW': _0x83c750,
    'PROD_CDN_URL': 'https://adsagentclientafd-b7hqhjdrf3fpeqh2.b01.azurefd.net',
    'STAGING_CDN_URL': 'https://adsagent-staging-h6dkaeghazhegee0.b01.azurefd.net'
}, Symbol['toStringTag'], {
    'value': 'Module'
}));