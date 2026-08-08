const fs = require('fs');
const path = require('path');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const demoPath = path.join(SITE_ROOT, 'demo-mode.js');
const js = fs.readFileSync(demoPath, 'utf8');

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

const jsChecks = [
  ["getMode() === 'home'", js.includes("return 'home'"), 'home mode detection'],
  ["getMode() === 'locked'", js.includes("return 'locked'"), 'locked mode detection'],
  ['ALLOWED_PRODUCTS', js.includes('ALLOWED_PRODUCTS'), 'product allowlist'],
  ['collection-menu', js.includes('.collection-menu'), 'sidebar block selector'],
  ['main-collection-filters', js.includes('#main-collection-filters'), 'facet block selector'],
  ['capture click', js.includes("addEventListener('click'"), 'click listener'],
  ['block submit', js.includes("addEventListener('submit'"), 'submit listener'],
  ['widget hide CSS', js.includes('demo-widget-hide'), 'widget hide styles'],
  ['widget lockdown', js.includes('initWidgetLockdown'), 'widget lockdown init'],
  ['whatsapp block', js.includes('whatsapp-widget'), 'whatsapp widget block'],
  ['iubenda block', js.includes('iubenda-cs'), 'iubenda cookie block'],
  ['header-drawer support', js.includes('header-drawer'), 'mobile burger drawer support'],
  ['menu drawer control', js.includes('isMenuDrawerControl'), 'menu drawer control helper'],
  ['mobile overflow fix', js.includes('demo-mobile-fix'), 'mobile horizontal scroll lock'],
  ['mobile menu toggle', js.includes('bindMobileMenuToggle'), 'mobile menu toggle fallback'],
];

let failed = 0;

for (const [, ok, desc] of jsChecks) {
  console.log(ok ? 'OK' : 'FAIL', '-', desc);
  if (!ok) failed += 1;
}

for (const relativePath of DEMO_PAGES) {
  const filePath = path.join(SITE_ROOT, relativePath);
  if (!fs.existsSync(filePath)) {
    console.log('FAIL - missing page:', relativePath);
    failed += 1;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const hasMarker = html.includes('data-demo-mode="true"');
  const hasScript = html.includes('/demo-mode.js');
  const hasWidgetHide = html.includes('id="demo-widget-hide"');
  const hasMobileOverflowFix = html.includes('overflow-x:hidden');
  const hasIubenda = html.includes('iubenda_cs.js');
  const hasWhatsapp = html.includes('ChatBubble.js');
  const hasExternalLogoHost = html.includes('//shop.vitrumgroup.org/cdn/shop/files/ozkaya-logo-white.png');
  const hasRelativeLogo = html.includes('src="/cdn/shop/files/ozkaya-logo-white.png"');

  const ok = hasMarker && hasScript && hasWidgetHide && hasMobileOverflowFix && !hasIubenda && !hasWhatsapp && !hasExternalLogoHost && hasRelativeLogo;
  console.log(ok ? 'OK' : 'FAIL', '-', relativePath, 'demo + widgets stripped');
  if (!ok) {
    failed += 1;
  }
}

const indexPath = path.join(SITE_ROOT, 'index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');
const allowedLinks = [
  '/collections/fridges-and-freezers',
  '/collections/restaurant',
];
for (const href of allowedLinks) {
  const count = (indexHtml.match(new RegExp(`href="${href.replace(/\//g, '\\/')}"`, 'g')) || []).length;
  console.log(`INFO - index contains ${count} link(s) to ${href}`);
}

for (const page of ['fridges-and-freezers', 'restaurant']) {
  const p = path.join(SITE_ROOT, 'collections', page, 'index.html');
  const pageHtml = fs.readFileSync(p, 'utf8');
  const hasSidebar = pageHtml.includes('collection-menu__link');
  const hasLogoHome = pageHtml.includes('href="/" class="header-redesign__logo') ||
    pageHtml.includes('href="/" class="header__heading-link');
  console.log(`INFO - ${page}: sidebar-links=${hasSidebar}, logo-home=${hasLogoHome}`);
}

process.exit(failed ? 1 : 0);
