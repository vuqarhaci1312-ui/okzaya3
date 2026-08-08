'use es6';

// fbclid - Facebook
// li_fat_id - LinkedIn
// gclid - Google
// ttclid - TikTok
const AD_NETWORK_CLICK_ID_PARAMS = ['fbclid', 'li_fat_id', 'gclid', 'ttclid'];
// Regex to detect javascript: protocol (case-insensitive) to prevent XSS attacks
// This protects against cookie poisoning attacks where malicious javascript: URLs
// are injected into click ID parameters (e.g., example.com?li_fat_id=javascript:%00)
const DANGEROUS_JAVASCRIPT_PROTOCOL = /javascript\s*:/i;
export function sanitizeUrlClickIds() {
    const url = new URL(window.location.href);
    let hasInvalidParams = false;
    AD_NETWORK_CLICK_ID_PARAMS.forEach(param => {
        const value = url.searchParams.get(param);
        if (value !== null && DANGEROUS_JAVASCRIPT_PROTOCOL.test(value)) {
            url.searchParams.delete(param);
            console.warn(`HubSpot removed the malicious ${param} parameter`);
            hasInvalidParams = true;
        }
    });
    if (hasInvalidParams && window.history && window.history.replaceState) {
        window.history.replaceState(null, '', url.toString());
    }
}