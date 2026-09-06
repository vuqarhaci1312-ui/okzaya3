const fs = require('fs');
const path = require('path');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const INDEX_PATH = path.join(SITE_ROOT, 'index.html');
const CSS_LINK =
  '<link href="/homepage-header.css" rel="stylesheet" type="text/css" media="all" />';

function removeBusinessTypeMegaTab(html) {
  return html.replace(
    /<span class="mega-nav__separator" aria-hidden="true"><\/span><button type="button" id="MegaTab-sections--29323674845561__header-business-type-2"[\s\S]*?<\/button>\s*/i,
    ''
  );
}

function removeBusinessTypeMobileMenu(html) {
  return html.replace(
    /<li>\s*<details id="Details-menu-drawer-menu-item-2">[\s\S]*?<\/details>\s*<\/li>\s*/i,
    ''
  );
}

function removeBusinessTypeMegaPanel(html) {
  return html.replace(
    /\s*<div id="MegaPanel-sections--29323674845561__header-business-type-2" class="mega-nav__panel"[\s\S]*?\n    <\/div>\n/i,
    '\n'
  );
}

function removeHeaderBenefits(html) {
  return html.replace(
    /<div id="shopify-section-sections--29323674845561__header-benefits"[\s\S]*?<\/div>\s*<!-- END sections: header-group -->/i,
    '<!-- END sections: header-group -->'
  );
}

function applyHomepageHeader() {
  if (!fs.existsSync(INDEX_PATH)) {
    console.error('index.html tapılmadı');
    process.exit(1);
  }

  let html = fs.readFileSync(INDEX_PATH, 'utf8');

  if (!html.includes('data-home-header="true"')) {
    html = html.replace(
      /<html class="([^"]*)" lang="([^"]*)"( data-demo-mode="true")?>/,
      '<html class="$1" lang="$2" data-home-header="true"$3>'
    );
  }

  if (!html.includes('/homepage-header.css')) {
    html = html.replace('</head>', `${CSS_LINK}\n</head>`);
  }

  html = removeBusinessTypeMegaTab(html);
  html = removeBusinessTypeMegaPanel(html);
  html = removeBusinessTypeMobileMenu(html);
  html = removeHeaderBenefits(html);

  fs.writeFileSync(INDEX_PATH, html, 'utf8');
  console.log('Ana səhifə header dəyişiklikləri tətbiq olundu.');
}

applyHomepageHeader();
