(function() {
    var preconnectOrigins = ["https://cdn.shopify.com"];
    var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.C7jITNoQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/app.m7disyLD.js", "/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.25PjUpIY.js", "/cdn/shopifycloud/checkout-web/assets/c1/context-browser.CjPjBehz.js", "/cdn/shopifycloud/checkout-web/assets/c1/getNormalizedPaymentMethodName.2fnRWc01.js", "/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.tyCV_2r8.js", "/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.D1YztHw3.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.rTHaX-QI.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-rpc.Cil_Fuhe.js", "/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.BBmTcsn_.js", "/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.DNoB_2j0.js", "/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.CBEOB1hy.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-pay-alternative-payment-flow.BJ9DSN31.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.bea8AsXl.js", "/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.DVRmNHbb.js", "/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.BQJ1AOXF.js", "/cdn/shopifycloud/checkout-web/assets/c1/hydrate.Ha4YQwWC.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.RlAh5BTV.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.4rbV07_8.js", "/cdn/shopifycloud/checkout-web/assets/c1/locale-en.B9rxbBh8.js", "/cdn/shopifycloud/checkout-web/assets/c1/OnePage.D4xi_D7m.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.DeTOq7JR.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.BH6XcxDu.js", "/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.ERp4qWub.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.CTa-eWtj.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.D7e6HEKp.js", "/cdn/shopifycloud/checkout-web/assets/c1/AddressPresenter.BqjGyNZm.js", "/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.CuJk8Daz.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.DIiK9N-4.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSandboxTelemetry.CVPcOl4i.js", "/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.L_eQIae4.js", "/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.BBC-Tyxl.js", "/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.OAqKwW6a.js", "/cdn/shopifycloud/checkout-web/assets/c1/EmptyState.CCRUYKl8.js", "/cdn/shopifycloud/checkout-web/assets/c1/Choice.BSlVyjir.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints.D-FmKVBB.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-bankPaymentMethodBrandKeys.BPxpL04E.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.BVx11SKz.js", "/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.5KcD1PDq.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.C5WtVzN8.js", "/cdn/shopifycloud/checkout-web/assets/c1/Monorail-monorailMetric-wallets.Qg9KsNNp.js", "/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks.D75aiSpn.js", "/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour.CkhwAFcM.js", "/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.3K30Jpn1.js", "/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.BnJP2F7U.js", "/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.DmExurV7.js", "/cdn/shopifycloud/checkout-web/assets/c1/StoreCreditRedemption-StoreCreditRedemptionErrorBanner.B7bRosrw.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.B9dIrXjV.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-context.Cn8FuHTS.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.BTxjzbMC.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine._3zJcclQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.B5_KL5hM.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.CUv0wABG.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.BQ3n0eiH.js", "/cdn/shopifycloud/checkout-web/assets/c1/Section.BPzW8l55.js", "/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.B-PcMkWA.js", "/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.D-knznsK.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.Cj5aCK5g.js", "/cdn/shopifycloud/checkout-web/assets/c1/captcha-hooks.Nqtupdar.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.z8a1JeDH.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-monorail.C_W7HB6G.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscount.F3p08dZc.js", "/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.BM5LNL-v.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.4xe8v9dD.js", "/cdn/shopifycloud/checkout-web/assets/c1/Switch.CuiO2XVw.js", "/cdn/shopifycloud/checkout-web/assets/c1/shipping-rates-progressiveShippingRatesLoading.CgktFyo4.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.NwIxWlPH.js", "/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.-owgcUMX.js", "/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.B_FfuyhL.js", "/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.BhpKwZA-.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.DIURR24e.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.B4CWVCdc.js", "/cdn/shopifycloud/checkout-web/assets/c1/TextArea.DCdJ30aI.js", "/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.NQBcKZI2.js", "/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects.DIeLoj_r.js", "/cdn/shopifycloud/checkout-web/assets/c1/Middot.ChGDdQ5c.js", "/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.DNZN9PaE.js", "/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.C_TohqQc.js"];
    var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BYT6yYGe.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/getNormalizedPaymentMethodName.DwqzaEQ_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.qvFhacbp.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.RWWzwUS2.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.CXbHQpsO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/StoreCreditRedemptionErrorBanner.DeLmJ-wS.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocationFullDetour.D14orovx.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.CqVkJv9Z.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CS-PIQ3P.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CIy8uDiZ.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.jvH8TQL4.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.CLVwzp6i.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/progressiveShippingRatesLoading.LcqrKXE1.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useUnauthenticatedErrorModal.CpHF4L7Q.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.CGkrPwWj.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/hooks.dFPtnh-r.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0989/6280/1017/files/vitrum_logo_black_x320.png?v=1781007662"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();