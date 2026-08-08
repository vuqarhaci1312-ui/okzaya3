const fs = require('fs');
const path = require('path');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const DEMO_SCRIPT = '<script src="/demo-mode.js" defer></script>';

const DEMO_WIDGET_HIDE = `<style id="demo-widget-hide">
#iubenda-cs-banner,#iubenda-iframe,.iubenda-cs-preferences-link,.iubenda-cs-default-floating,
.iubenda-cs-bottom,.iubenda-cs-left,.iubenda-cs-right,[class*="iubenda-cs"],
#whatsapp-widget-root,#chat-bubble,.whatsapp-widget,#whatsapp-link,.chat-window,
shopify-privacy-banner,#shopify-privacy-banner-embed,#shopify-privacy-banner
{display:none!important;visibility:hidden!important;pointer-events:none!important;opacity:0!important}
html,body{overflow-x:hidden!important;max-width:100%!important;width:100%!important;overscroll-behavior-x:none}
body{position:relative}
.header-wrapper,.header-wrapper .header-redesign,header-drawer,.menu-drawer-container,.menu-drawer{overflow:visible!important;overflow-x:visible!important}
.js header-drawer>details[open].menu-opening>summary.header__icon--menu:before{display:none!important}
header-drawer details[open].menu-opening>.menu-drawer{visibility:visible!important;transform:translate(0)!important;z-index:5!important}
@media screen and (max-width:749.98px){.header-redesign header-drawer details[open].menu-opening>.menu-drawer{left:calc(-1.2rem + 9px)!important}}
@media screen and (min-width:750px) and (max-width:1279.98px){.header-redesign header-drawer details[open].menu-opening>.menu-drawer{left:calc(-5rem + 9px)!important}}
#MainContent,.shopify-section:not(.header-wrapper),.footer,.page-width,main{max-width:100%;overflow-x:clip}
</style>`;

const DEMO_PAGES = [
  'index.html',
  'collections/fridges-and-freezers/index.html',
  'collections/restaurant/index.html',
  'products/ur90g-sub-zero/index.html',
  'products/scandomestic-sf-115/index.html',
  'products/termofrost-eco-clear-x/index.html',
  'products/oscartielle-nettuno/index.html',
  'products/aifo-weld-in-sink-bowl/index.html',
];

function stripDemoWidgets(html) {
  return html
    .replace(/<script type="text\/javascript">\s*var _iub = _iub[\s\S]*?<\/script>\s*/gi, '')
    .replace(/<script[^>]*src="[^"]*cs\.iubenda\.com\/autoblocking\/[^"]*"[^>]*><\/script>\s*/gi, '')
    .replace(/<script[^>]*src="[^"]*cdn\.iubenda\.com\/cs\/iubenda_cs\.js"[^>]*><\/script>\s*/gi, '')
    .replace(/<script[^>]*src="[^"]*consent-tracking\.js"[^>]*><\/script>\s*/gi, '')
    .replace(/<script[^>]*id=['"]scb4127['"][^>]*><\/script>\s*/gi, '')
    .replace(/<script[^>]*src="[^"]*privacy-banner\/storefront-banner\.js"[^>]*><\/script>\s*/gi, '')
    .replace(/<script[^>]*src="[^"]*dondy-whatsapp-chat-widget[^"]*ChatBubble\.js"[^>]*><\/script>\s*/gi, '');
}

function rewriteHostsForDeploy(html) {
  return html
    .replace(/https:\\\/\\\/shop\.vitrumgroup\.org/g, '')
    .replace(/\/\/shop\.vitrumgroup\.org/g, '')
    .replace(/https:\/\/shop\.vitrumgroup\.org/g, '');
}

function applyDemoMode(relativePath) {
  const filePath = path.join(SITE_ROOT, relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn('SKIP - file not found:', relativePath);
    return false;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  if (!html.includes('data-demo-mode="true"')) {
    html = html.replace(
      /<html class="([^"]*)" lang="([^"]*)">/,
      '<html class="$1" lang="$2" data-demo-mode="true">'
    );
  }

  html = stripDemoWidgets(html);
  html = rewriteHostsForDeploy(html);

  if (html.includes('id="demo-widget-hide"')) {
    html = html.replace(/<style id="demo-widget-hide">[\s\S]*?<\/style>\s*/i, `${DEMO_WIDGET_HIDE}\n`);
  } else {
    html = html.replace('</head>', `${DEMO_WIDGET_HIDE}\n</head>`);
  }

  if (!html.includes('/demo-mode.js')) {
    html = html.replace('</body>', `${DEMO_SCRIPT}\n</body>`);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Demo mode applied to', relativePath);
  return true;
}

let applied = 0;
for (const page of DEMO_PAGES) {
  if (applyDemoMode(page)) {
    applied += 1;
  }
}

console.log(`Done. Applied demo mode to ${applied}/${DEMO_PAGES.length} pages.`);
