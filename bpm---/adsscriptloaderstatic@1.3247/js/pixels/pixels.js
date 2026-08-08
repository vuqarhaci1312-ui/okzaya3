/* hs-eslint ignored failing-rules */
/* eslint-disable */

'use es6';

import * as utils from '../utils';

// https://developers.facebook.com/docs/meta-pixel/get-started
function addFacebookPixelScript(pixels, utk) {
    ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    for (var index = 0; index < pixels.length; index++) {
        if (pixels[index].limitedDataUseEnabled) {
            fbq('dataProcessingOptions', ['LDU'], 0, 0);
        }
        fbq('init', `${pixels[index].pixelId}`, {
            external_id: utk
        });
        fbq('set', 'agent', 'hubspot', `${pixels[index].pixelId}`);
    }
    fbq('track', 'PageView');
}

function appendAdWordsTagManagerScript(pixelId) {
    const wrapper = document.createElement('script');
    wrapper.async = true;
    wrapper.src = `https://www.googletagmanager.com/gtag/js?id=AW-${pixelId}`;
    document.head.appendChild(wrapper);
}

function addAdWordsPixelScript(conversionIds) {
    window.dataLayer = window.dataLayer || [];
    var developerId = utils.getEnv() === 'qa' ? 'dZWU5Zm' : 'dZTQ1Zm';

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('set', 'developer_id.' + developerId, true);
    for (var index = 0; index < conversionIds.length; index++) {
        gtag('config', `AW-${conversionIds[index].pixelId}`);
    }
}

function addLinkedInPixelScript(pixels) {
    for (var index = 0; index < pixels.length; index++) {
        const _linkedin_partner_id = pixels[index].pixelId;
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    }
    (function() {
        var s = document.getElementsByTagName('script')[0];
        var b = document.createElement('script');
        b.type = 'text/javascript';
        b.async = true;
        b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
        s.parentNode.insertBefore(b, s);
    })();
}

function addTikTokPixelScript(pixels) {
    //https://ads.tiktok.com/i18n/events_manager/home
    ! function(w, d, t) {
        w.TiktokAnalyticsObject = t;
        var ttq = w[t] = w[t] || [];
        ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie', 'holdConsent', 'revokeConsent', 'grantConsent'], ttq.setAndDefer = function(t, e) {
            t[e] = function() {
                t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
            };
        };
        for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
        ttq.instance = function(t) {
            for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
            return e;
        }, ttq.load = function(e, n) {
            var r = 'https://analytics.tiktok.com/i18n/pixel/events.js',
                o = n && n.partner;
            ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = r, ttq._t = ttq._t || {}, ttq._t[e] = +new Date(), ttq._o = ttq._o || {}, ttq._o[e] = n || {};
            n = document.createElement('script');
            n.type = 'text/javascript', n.async = !0, n.src = r + '?sdkid=' + e + '&lib=' + t;
            e = document.getElementsByTagName('script')[0];
            e.parentNode.insertBefore(n, e);
        };

        // Load each pixel
        for (var index = 0; index < pixels.length; index++) {
            ttq.load(pixels[index].pixelInitializer);
        }

        // Track initial page view
        ttq.page();

        // Make ttq globally available
        window.ttq = ttq;
    }(window, document, 'ttq');
}

function getBingUetState(config) {
    config.bingUetState = config.bingUetState || {
        queueNames: [],
        queueNamesByPixelInitializer: {}
    };
    return config.bingUetState;
}

function pushBingCommand(config, command) {
    const bingUetState = getBingUetState(config);
    bingUetState.queueNames.forEach(queueName => {
        const queue = window[queueName];
        if (queue && typeof queue.push === 'function') {
            queue.push.apply(queue, command);
        }
    });
}

function getBingUetQueueName(pixel, index) {
    return index === 0 ? 'uetq' : `uetq_${pixel.pixelInitializer}`;
}

function configureBingUetQueues(pixels, config) {
    const bingUetState = getBingUetState(config);
    const initializedPixels = [];
    const pixelInitializers = {};
    pixels.forEach(pixel => {
        if (!pixelInitializers[pixel.pixelInitializer]) {
            pixelInitializers[pixel.pixelInitializer] = true;
            initializedPixels.push(pixel);
        }
    });
    bingUetState.queueNames = initializedPixels.map(getBingUetQueueName);
    bingUetState.queueNamesByPixelInitializer = initializedPixels.reduce((queueNamesByPixelInitializer, pixel, index) => {
        queueNamesByPixelInitializer[pixel.pixelInitializer] = bingUetState.queueNames[index];
        return queueNamesByPixelInitializer;
    }, {});
    bingUetState.queueNames.forEach(queueName => {
        window[queueName] = window[queueName] || [];
    });
    return initializedPixels;
}

function updateBingVisitorId(config, utk) {
    if (!utk) {
        return;
    }
    const bingUetState = getBingUetState(config);
    bingUetState.visitorId = utk;
    if (bingUetState.ready) {
        pushBingCommand(config, ['set', {
            vid: utk
        }]);
    }
}

function addBingUetPixelScript(pixels, config, utk) {
    updateBingVisitorId(config, utk);
    const initializedPixels = configureBingUetQueues(pixels, config);
    const bingUetState = getBingUetState(config);
    (function(w, d, t, u, o) {
        o.ts = new Date().getTime();
        var n = d.createElement(t);
        n.src = 'https://bat.bing.net/bat.js?ti=' + o.ti + ('uetq' != u ? '&q=' + u : '');
        n.async = 1;
        n.onload = n.onreadystatechange = function() {
            var s = this.readyState;
            if (s && 'loaded' !== s && 'complete' !== s) {
                return;
            }
            initializedPixels.forEach((pixel, index) => {
                const queueName = bingUetState.queueNames[index];
                const pixelOptions = {
                    ti: pixel.pixelInitializer,
                    enableAutoSpaTracking: true
                };
                if (typeof w.UET_init === 'function') {
                    w.UET_init(queueName, pixelOptions);
                } else {
                    pixelOptions.q = w[queueName];
                    w[queueName] = new w.UET(pixelOptions);
                }
                if (bingUetState.adStorageConsent) {
                    w[queueName].push('consent', 'update', {
                        ad_storage: bingUetState.adStorageConsent
                    });
                }
                if (bingUetState.visitorId) {
                    w[queueName].push('set', {
                        vid: bingUetState.visitorId
                    });
                }
                w[queueName].push('pageLoad');
            });
            bingUetState.ready = true;
            n.onload = n.onreadystatechange = null;
        };
        var i = d.getElementsByTagName(t)[0];
        i.parentNode.insertBefore(n, i);
    })(window, document, 'script', 'uetq', {
        ti: initializedPixels[0].pixelInitializer,
        enableAutoSpaTracking: true
    });
}
export function sendBingEvent(config, pixelInitializer, eventName, eventData) {
    const bingUetState = config && config.bingUetState;
    const queueName = bingUetState ? bingUetState.queueNamesByPixelInitializer[pixelInitializer] : 'uetq';
    const queue = window[queueName];
    if (!queue || typeof queue.push !== 'function') {
        return;
    }
    queue.push('event', eventName, eventData);
}

function addChatGptPixelScript(pixels) {
    ! function(w, d, s, u) {
        if (w.oaiq) return;
        var q = function q() {
            q.q.push(arguments);
        };
        q.q = [];
        w.oaiq = q;
        var j = d.createElement(s);
        j.async = 1;
        j.src = u;
        var f = d.getElementsByTagName(s)[0];
        f.parentNode.insertBefore(j, f);
    }(window, document, 'script', 'https://bzrcdn.openai.com/sdk/oaiq.min.js');
    window.oaiq('init', {
        pixelId: pixels[0].pixelInitializer
    });
}
export function addPixels(config, utk) {
    for (var adNetwork in config) {
        if (config.hasOwnProperty(adNetwork) && Array.isArray(config[adNetwork]) && config[adNetwork].length > 0) {
            var pixels = config[adNetwork];
            switch (adNetwork) {
                case 'FACEBOOK':
                    {
                        if (utk && !config.loadedFbPixel) {
                            addFacebookPixelScript(pixels, utk);
                            config.loadedFbPixel = true;
                        }
                        break;
                    }
                case 'ADWORDS':
                    {
                        appendAdWordsTagManagerScript(pixels[0].pixelId);
                        addAdWordsPixelScript(pixels);
                        break;
                    }
                case 'LINKEDIN':
                    {
                        addLinkedInPixelScript(pixels);
                        break;
                    }
                case 'TIKTOK':
                    {
                        addTikTokPixelScript(pixels);
                        break;
                    }
                case 'BING':
                    {
                        if (!config.loadedBingPixel) {
                            addBingUetPixelScript(pixels, config, utk);
                            config.loadedBingPixel = true;
                        }
                        break;
                    }
                case 'CHATGPT':
                    {
                        if (!config.loadedChatGptPixel) {
                            addChatGptPixelScript(pixels);
                            config.loadedChatGptPixel = true;
                        }
                        break;
                    }
            }
        }
    }
}
export function onUtkReady(config, utk) {
    for (var adNetwork in config) {
        if (config.hasOwnProperty(adNetwork) && Array.isArray(config[adNetwork]) && config[adNetwork].length > 0) {
            switch (adNetwork) {
                case 'FACEBOOK':
                    {
                        if (!config.loadedFbPixel) {
                            addFacebookPixelScript(config[adNetwork], utk);
                            config.loadedFbPixel = true;
                        }
                        break;
                    }
                case 'BING':
                    {
                        updateBingVisitorId(config, utk);
                        break;
                    }
            }
        }
    }
}
export function reinstallPixels(config, utk) {
    for (var adNetwork in config) {
        if (config.hasOwnProperty(adNetwork) && Array.isArray(config[adNetwork]) && config[adNetwork].length > 0) {
            switch (adNetwork) {
                case 'FACEBOOK':
                    {
                        fbq('consent', 'grant');
                        break;
                    }
                case 'ADWORDS':
                    {
                        dataLayer.push('consent', 'update', {
                            ad_storage: 'granted',
                            analytics_storage: 'granted'
                        });
                        break;
                    }
                case 'TIKTOK':
                    {
                        if (window.ttq) {
                            ttq.grantConsent();
                        }
                        break;
                    }
                case 'BING':
                    {
                        if (config.loadedBingPixel) {
                            const bingUetState = getBingUetState(config);
                            bingUetState.adStorageConsent = 'granted';
                            if (bingUetState.ready) {
                                pushBingCommand(config, ['consent', 'update', {
                                    ad_storage: 'granted'
                                }]);
                            }
                        } else {
                            getBingUetState(config).adStorageConsent = 'granted';
                            addBingUetPixelScript(config['BING'], config, utk);
                            config.loadedBingPixel = true;
                        }
                        break;
                    }
            }
        }
    }
}
export function disablePixels(config, reload = () => window.location.reload()) {
    if (config.hasOwnProperty('LINKEDIN') || config.hasOwnProperty('CHATGPT') && config.CHATGPT.length > 0) {
        reload();
        return;
    }
    for (var adNetwork in config) {
        if (config.hasOwnProperty(adNetwork) && Array.isArray(config[adNetwork]) && config[adNetwork].length > 0) {
            switch (adNetwork) {
                case 'FACEBOOK':
                    {
                        fbq('consent', 'revoke');
                        break;
                    }
                case 'ADWORDS':
                    {
                        dataLayer.push('consent', 'update', {
                            ad_storage: 'denied',
                            analytics_storage: 'denied'
                        });
                        break;
                    }
                case 'TIKTOK':
                    {
                        if (window.ttq) {
                            ttq.revokeConsent();
                        }
                        break;
                    }
                case 'BING':
                    {
                        if (config.loadedBingPixel) {
                            const bingUetState = getBingUetState(config);
                            bingUetState.adStorageConsent = 'denied';
                            if (bingUetState.ready) {
                                pushBingCommand(config, ['consent', 'update', {
                                    ad_storage: 'denied'
                                }]);
                            }
                        }
                        break;
                    }
            }
        }
    }
}