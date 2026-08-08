const fs = require('fs');
const path = require('path');
const https = require('https');
const {
  applyReplacements,
  applyFooterLegal,
  extractSection,
  injectSection,
  disableExtraProductLinks,
  restoreTechnicalIds,
  restoreAssetHosts,
  collectionReplacements,
  productReplacements,
} = require('./translate-common');

const REMOTE_ORIGIN = 'https://shop.vitrumgroup.org';
const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const INDEX_PATH = path.join(SITE_ROOT, 'index.html');

const COLLECTIONS = [
  { slug: 'fridges-and-freezers', allowedCount: 4 },
  {
    slug: 'restaurant',
    allowedCount: 1,
    allowedHandles: ['aifo-weld-in-sink-bowl'],
    lockProductGrid: true,
  },
];

const PRODUCTS = [
  'ur90g-sub-zero',
  'scandomestic-sf-115',
  'termofrost-eco-clear-x',
  'oscartielle-nettuno',
  'aifo-weld-in-sink-bowl',
  'miskastes-luka-dl1252',
  'sirman-plutone-7',
  '50x60x30',
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LocalMirror/1.0)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location.startsWith('http') ? res.headers.location : `${REMOTE_ORIGIN}${res.headers.location}`).then(resolve, reject);
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function processPage(html, {
  header,
  footer,
  extra = [],
  disableProducts = false,
  allowedCount = 4,
  allowedHandles = null,
  lockProductGrid = false,
  lockRelatedProducts = false,
  productPage = false,
}) {
  html = applyReplacements(html, extra, { productPage });
  html = restoreTechnicalIds(html);
  html = applyFooterLegal(html);
  html = injectSection(html, 'header-group', header);
  html = injectSection(html, 'footer-group', footer);
  if (disableProducts) {
    html = disableExtraProductLinks(html, allowedCount, {
      allowedHandles,
      lockProductGrid,
      lockRelatedProducts,
    });
  }
  html = restoreTechnicalIds(html);
  html = restoreAssetHosts(html);
  html = html.replace(/height="38\.47533632286996"/g, 'height="48"');
  html = html.replace(/height="78\.69955156950672"/g, 'height="70"');
  return html;
}

async function buildCollection(slug, header, footer, { allowedCount, allowedHandles, lockProductGrid }) {
  const url = `${REMOTE_ORIGIN}/collections/${slug}`;
  console.log(`Downloading collection: ${url}`);
  let html = await fetchUrl(url);
  html = processPage(html, {
    header,
    footer,
    extra: collectionReplacements[slug] || [],
    disableProducts: Boolean(allowedHandles || allowedCount),
    allowedCount,
    allowedHandles,
    lockProductGrid,
  });
  const out = path.join(SITE_ROOT, 'collections', slug, 'index.html');
  ensureDir(out);
  fs.writeFileSync(out, html, 'utf8');
  console.log(`  Saved ${out} (${(html.length / 1024).toFixed(0)} KB)`);
}

async function buildProduct(handle, header, footer) {
  const url = `${REMOTE_ORIGIN}/products/${handle}`;
  console.log(`Downloading product: ${url}`);
  let html = await fetchUrl(url);
  const disableRelated = handle === 'aifo-weld-in-sink-bowl';
  html = processPage(html, {
    header,
    footer,
    extra: productReplacements[handle] || [],
    productPage: true,
    disableProducts: disableRelated,
    allowedCount: 1,
    allowedHandles: disableRelated ? ['aifo-weld-in-sink-bowl'] : null,
    lockRelatedProducts: disableRelated,
  });
  const out = path.join(SITE_ROOT, 'products', handle, 'index.html');
  ensureDir(out);
  fs.writeFileSync(out, html, 'utf8');
  console.log(`  Saved ${out} (${(html.length / 1024).toFixed(0)} KB)`);
}

async function main() {
  const indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');
  const header = extractSection(indexHtml, 'header-group');
  const footer = extractSection(indexHtml, 'footer-group');

  for (const collection of COLLECTIONS) {
    await buildCollection(collection.slug, header, footer, collection);
  }

  for (const handle of PRODUCTS) {
    await buildProduct(handle, header, footer);
  }

  console.log('\nDone. Built 2 collections + 8 product pages.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
