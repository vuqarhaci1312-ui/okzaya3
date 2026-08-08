(() => {
    var a = "WebPixel::Render";
    var r = o => shopify.extend(a, o);

    function c(o) {
        r(({
            analytics: d,
            init: e
        }) => {
            d.subscribe("product_viewed", i => {
                let {
                    productVariant: t
                } = i.data, s = {
                    product: {
                        id: t.product.id,
                        title: t.product.title
                    },
                    variant: {
                        id: t.id,
                        title: t.title,
                        sku: t.sku
                    },
                    interactionTimestamp: i.timestamp,
                    clientId: i.clientId,
                    hostName: i.context.document.location.host,
                    shopifyDomain: e.data.shop.myshopifyDomain
                };
                e.data.customer && (s.customer = {
                    id: e.data.customer.id,
                    email: e.data.customer.email
                }), fetch(`${o}/shopify-integration/v1/website-interactive/product-view`, {
                    method: "POST",
                    body: JSON.stringify(s),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    keepalive: !0
                }).catch(p => {
                    console.error("Failed to send product view event:", p)
                })
            })
        })
    }
    c("https://hs-website-interactive-analytics.net");
})();