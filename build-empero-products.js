const fs = require('fs');
const path = require('path');
const { getShellParts, assemblePage } = require('./vitrum-page-build-utils');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const INDEX_PATH = path.join(SITE_ROOT, 'index.html');
const CATALOG_PATH = path.join(__dirname, 'empero-catalog', 'catalog.json');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function collectionForProduct(catalog, slug) {
  return catalog.collections.find((c) => c.products.includes(slug));
}

function buildProductHtml(product, collection) {
  const images = product.localImages || [];
  const hero = images[0] || '';
  const thumbs = images
    .map(
      (src) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(product.titleAz)}" />`
    )
    .join('');
  const features = (product.features || [])
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
  const backHref = collection ? `/collections/${collection.slug}` : '/';
  const backLabel = collection ? collection.title : 'Kataloq';

  return `
      <section class="empero-product page-width">
        <div class="empero-product__gallery">
          <img src="${escapeHtml(hero)}" alt="${escapeHtml(product.titleAz)}" />
          <div class="empero-product__thumbs">${thumbs}</div>
        </div>
        <div class="empero-product__info">
          <a class="empero-product__back" href="${backHref}">← Kataloqa qayıt · ${escapeHtml(backLabel)}</a>
          <h1>${escapeHtml(product.titleAz)}</h1>
          <p class="empero-product__desc">${escapeHtml(product.descriptionAz)}</p>
          <ul class="empero-product__features">${features}</ul>
          <div class="empero-product__specs">${product.specsHtml || ''}</div>
        </div>
      </section>`;
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
  const indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');
  const shell = getShellParts(indexHtml);

  for (const product of Object.values(catalog.products)) {
    const collection = collectionForProduct(catalog, product.slug);
    const pageMain = `
    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      <link href="/empero-shop.css?v=2" rel="stylesheet" type="text/css" media="all" />
      ${buildProductHtml(product, collection)}
    </main>
`;
    const page = assemblePage({
      headerPart: shell.headerPart,
      footerPart: shell.footerPart,
      tailPart: shell.tailPart,
      pageMain,
      title: product.titleAz,
      canonical: `/products/${product.slug}`,
      htmlClass: 'empero-catalog-page',
    });

    const outputPath = path.join(SITE_ROOT, 'products', product.slug, 'index.html');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, page, 'utf8');
    console.log('Wrote', outputPath);
  }
}

main();
