const fs = require('fs');
const path = require('path');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const DEMO_SCRIPT = '<script src="/demo-mode.js" defer></script>';

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
