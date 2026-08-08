window.Shopify.loadFeatures(
    [{
        name: 'consent-tracking-api',
        version: '0.1',
    }, ],
    function(error) {
        if (error) {
            console.error("Shopify consent-tracking-api failed to load:", error);
            throw error;
        }
        iubLog("Shopify consent-tracking-api loaded successfully.");
    }
);

// Function to log messages if logging is enabled
function iubLog(message, data = null) {
    if (
        (sessionStorage.getItem('iubLog') === 'true') ||
        (localStorage.getItem('iubLog') === 'true')
    ) {
        console.log("[IUB LOG] " + message, data ? data : '');
    }
}

const onPreferenceExpressedOrNotNeededCallback = function(preferences) {
    iubLog("onPreferenceExpressedOrNotNeededCallback triggered", preferences);

    let isPrefEmpty = !preferences || Object.keys(preferences).length === 0;
    let consent = isPrefEmpty ? _iub.cs.api.getPreferences() : preferences;


    const shopifyPurposes = {
        "analytics": [4, 's'],
        "marketing": [5, 'adv'],
        "preferences": [2, 3],
        "sale_of_data": ['s', 'sh'],
    };

    let expressedConsent = {};

    Object.keys(shopifyPurposes).forEach(function(purposeItem) {
        let purposeExpressed = null;

        shopifyPurposes[purposeItem].forEach(item => {
            if (consent.purposes && typeof consent.purposes[item] === 'boolean') {
                purposeExpressed = consent.purposes[item];
            }
            if (consent.uspr && typeof consent.uspr[item] === 'boolean' && purposeExpressed !== false) {
                purposeExpressed = consent.uspr[item];
            }
        });

        if (typeof purposeExpressed === 'boolean') {
            expressedConsent[purposeItem] = purposeExpressed;
        }
    });

    window.Shopify.customerPrivacy.setTrackingConsent(expressedConsent, function() {
        iubLog("Shopify tracking consent updated successfully", expressedConsent);
    });
};


if (typeof _iub.csConfiguration.callback === 'object') {
    _iub.csConfiguration.callback.onPreferenceExpressedOrNotNeeded = onPreferenceExpressedOrNotNeededCallback;
} else {
    _iub.csConfiguration.callback = {
        onPreferenceExpressedOrNotNeeded: onPreferenceExpressedOrNotNeededCallback
    };
}