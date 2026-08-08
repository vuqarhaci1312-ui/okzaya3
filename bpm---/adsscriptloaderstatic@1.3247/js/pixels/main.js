'use es6';

import * as utils from '../utils';
import {
    addPixels,
    disablePixels,
    reinstallPixels,
    onUtkReady,
    sendBingEvent
} from './pixels';
import {
    fetchConfig
} from '../configFetcher';
import {
    sanitizeUrlClickIds
} from '../urlSanitizer';
export const convertToUpperCamelCase = str => {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
};
const start = function start() {
    sanitizeUrlClickIds();
    const configDomain = utils.getConfigDomain();
    let config = null;
    let utk = null;
    let gtag;
    window.enabledEventSettings = {
        FACEBOOK: [],
        ADWORDS: [],
        BING: [],
        CHATGPT: []
    };
    if (window.disabledHsPopups && window.disabledHsPopups.indexOf('ADS') > -1) {
        return;
    }

    // For GDPR purposes, users must consent to privacy policy before pixel is added
    window._hsp = window._hsp || [];
    window._hsp.push(['addPrivacyConsentListener', function(consent) {
        if (consent.categories.advertisement) {
            if (!config) {
                fetchConfig({
                    jsonUrl: `${configDomain}/hs-script-loader-public/v2/config/pixels-and-events/json`,
                    jsonpUrl: `${configDomain}/hs-script-loader-public/v2/config/pixels-and-events/jsonp`
                }, response => {
                    config = response.pixels;
                    addPixels(response.pixels, utk);
                    window.enabledEventSettings = response.enhancedConversionEventSettings;
                }, 'addPixels');
            } else {
                reinstallPixels(config, utk);
            }
        } else if (config) {
            disablePixels(config);
        }
    }]);
    window._hsq = window._hsq || [];
    window._hsq.push(['addUserTokenListener', function(newUtk) {
        utk = newUtk;
        if (config) {
            onUtkReady(config, utk);
        }
    }]);

    function sendEventToFacebook(settings, event) {
        if (window.fbq === undefined) {
            return;
        }
        const {
            hubSpotFormId,
            eventCategory
        } = settings;
        const {
            conversionId: transaction_id,
            formGuid
        } = event;

        // https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/
        if (formGuid === hubSpotFormId) {
            const formattedEventCategory = convertToUpperCamelCase(eventCategory);
            window.fbq('track', formattedEventCategory, {}, {
                eventID: transaction_id
            });
        }
    }

    function sendEventToGoogle(setting, event) {
        const {
            hubSpotFormId,
            pixelId,
            conversionLabel
        } = setting;
        const {
            conversionId: transaction_id,
            formGuid
        } = event;
        gtag = function() {
            //eslint-disable-next-line prefer-rest-params
            window.dataLayer.push(arguments);
        };
        if (formGuid === hubSpotFormId && conversionLabel !== null) {
            gtag('event', 'conversion', {
                send_to: `AW-${pixelId}/${conversionLabel}`,
                transaction_id
            });
        }
    }

    function sendEventToBing(settings, event) {
        const {
            hubSpotFormId,
            pixelInitializer
        } = settings;
        const {
            conversionId: event_id,
            formGuid
        } = event;
        if (formGuid === hubSpotFormId) {
            sendBingEvent(config, pixelInitializer, `hs_form_${hubSpotFormId}`, {
                event_id
            });
        }
    }

    function sendEventToChatGpt(settings, event) {
        if (typeof window.oaiq !== 'function') {
            return;
        }
        const {
            hubSpotFormId,
            eventCategory,
            conversionLabel
        } = settings;
        const {
            conversionId,
            formGuid
        } = event;
        const eventDataTypes = {
            lead_created: 'customer_action',
            registration_completed: 'customer_action',
            appointment_scheduled: 'customer_action',
            checkout_started: 'contents',
            contents_viewed: 'contents',
            items_added: 'contents',
            order_created: 'contents',
            page_viewed: 'contents',
            subscription_created: 'plan_enrollment',
            trial_started: 'plan_enrollment',
            custom: 'custom'
        };
        const eventDataType = eventDataTypes[eventCategory];
        if (formGuid !== hubSpotFormId || !conversionId || !eventDataType || eventCategory === 'custom' && !conversionLabel) {
            return;
        }
        const options = {
            event_id: conversionId
        };
        if (eventCategory === 'custom') {
            options.custom_event_name = conversionLabel;
        }
        window.oaiq('measure', eventCategory, {
            type: eventDataType
        }, options);
    }

    function processFormSubmissionEvents(eventData) {
        if (window.enabledEventSettings.FACEBOOK) {
            window.enabledEventSettings.FACEBOOK.forEach(settings => {
                sendEventToFacebook(settings, eventData);
            });
        }
        if (window.enabledEventSettings.ADWORDS) {
            window.enabledEventSettings.ADWORDS.forEach(settings => {
                sendEventToGoogle(settings, eventData);
            });
        }
        if (window.enabledEventSettings.BING) {
            window.enabledEventSettings.BING.forEach(settings => {
                sendEventToBing(settings, eventData);
            });
        }
        if (window.enabledEventSettings.CHATGPT) {
            window.enabledEventSettings.CHATGPT.forEach(settings => {
                sendEventToChatGpt(settings, eventData);
            });
        }
    }

    // new event listener for form submission success.
    window.addEventListener('hs-form-event:on-submission:success', event => {
        //eslint-disable-next-line no-undef
        const form = HubSpotFormsV4.getFormFromEvent(event);
        const conversionId = form.getConversionId();
        const formGuid = form.getFormId();
        processFormSubmissionEvents({
            conversionId,
            formGuid
        });
    });

    // form submission event listener. Legacy event listener.
    window.addEventListener('message', event => {
        if (event.data && event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
            processFormSubmissionEvents(event.data.data);
        }
    }, false);

    // form in CTA submission event listener
    window.addEventListener('message', event => {
        if (event.data && event.data.type === 'hsCallsToActionCallback' && event.data.eventName === 'onCallToActionFormSubmitted') {
            const {
                formId,
                conversionId
            } = event.data.data || {};
            if (formId) {
                processFormSubmissionEvents({
                    conversionId,
                    formGuid: formId
                });
            }
        }
    }, false);
};
window.PIXELS_RAN = window.PIXELS_RAN || false;
if (!window.PIXELS_RAN) {
    window.PIXELS_RAN = true;
    // Code entry point
    start();
}