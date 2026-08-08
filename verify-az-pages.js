const fs = require('fs');
const path = require('path');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');

const PAGES = [
  'collections/fridges-and-freezers/index.html',
  'collections/restaurant/index.html',
  'products/ur90g-sub-zero/index.html',
  'products/scandomestic-sf-115/index.html',
  'products/termofrost-eco-clear-x/index.html',
  'products/oscartielle-nettuno/index.html',
  'products/aifo-weld-in-sink-bowl/index.html',
  'products/miskastes-luka-dl1252/index.html',
  'products/sirman-plutone-7/index.html',
  'products/50x60x30/index.html',
];

const FORBIDDEN = [
  { label: 'Back button', re: /<span>Back<\/span>/ },
  { label: 'Remove all', re: /Remove all/ },
  { label: 'Submit enquiry', re: /Submit enquiry/ },
  { label: 'Every service stands', re: /Every service stands/ },
  { label: 'Restoran kitchens earn', re: /Restoran kitchens earn|Restaurant kitchens earn/ },
  { label: 'Purpose-built', re: /Purpose-built/ },
  { label: 'Physical dimensions', re: />Physical dimensions</ },
  { label: 'View full details', re: /View full details/ },
  { label: 'HoReCa sector', re: /HoReCa sector/ },
  { label: 'Stainless steel (visible)', re: /Stainless steel/ },
  { label: 'planetary mixer', re: /planetary mixer/i },
  { label: 'Request a quote', re: /Request a quote/ },
  { label: 'in cart', re: / in cart/ },
  { label: 'Qiyméts corruption', re: /Qiym.t shown/ },
  { label: 'Facet Brand label', re: /facets__summary-label">Brand/ },
  { label: 'Load image gallery', re: /Load image \d+ in gallery view/ },
  { label: 'Commercial catering EN', re: /Commercial catering equipment available/ },
  { label: 'Built-in countertop waste', re: /Built-in countertop waste bin flap for professional/ },
  { label: 'Weld-in AISI EN subtitle', re: /Weld-in AISI 304 sink bowl for commercial/ },
  { label: 'Single-bowl drop-in EN', re: /Single-bowl drop-in stainless steel sink for professional/ },
  { label: 'Bench-Top Planetary', re: /Bench-Top Planetary Mixer/ },
  { label: 'Floor-Standing Planetary', re: /Floor-Standing Planetary Mixer/ },
  { label: 'cooking equipment link', re: />cooking equipment<\/a>/ },
  { label: 'See full specs EN', re: /See full specs/ },
];

let failed = false;

for (const rel of PAGES) {
  const file = path.join(SITE_ROOT, rel);
  const html = fs.readFileSync(file, 'utf8');
  for (const { label, re } of FORBIDDEN) {
    if (re.test(html)) {
      console.error(`FAIL ${rel}: ${label}`);
      failed = true;
    }
  }
}

if (failed) {
  console.error('\nAZ verification failed.');
  process.exit(1);
}

console.log(`OK — all ${PAGES.length} pages passed AZ verification.`);
