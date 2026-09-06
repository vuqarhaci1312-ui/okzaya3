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

function buildCollectionHtml(collection, products) {
  const cards = collection.products
    .map((slug) => products[slug])
    .filter(Boolean)
    .map((product) => {
      const image = product.localImages[0] || '';
      return `
        <article class="empero-card">
          <a class="empero-card__media" href="/products/${product.slug}">
            <img src="${escapeHtml(image)}" alt="${escapeHtml(product.titleAz)}" loading="lazy" />
          </a>
          <a class="empero-card__title" href="/products/${product.slug}">${escapeHtml(product.titleAz)}</a>
        </article>`;
    })
    .join('');

  return `
      <section class="empero-collection page-width">
        <div class="empero-collection__hero">
          <h1>${escapeHtml(collection.title)}</h1>
        </div>
        <div class="empero-collection__grid">
          ${cards}
        </div>
      </section>`;
}

function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
  const indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');
  const shell = getShellParts(indexHtml);

  for (const collection of catalog.collections) {
    const pageMain = `
    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      <link href="/empero-shop.css?v=2" rel="stylesheet" type="text/css" media="all" />
      ${buildCollectionHtml(collection, catalog.products)}
    </main>
`;
    const page = assemblePage({
      headerPart: shell.headerPart,
      footerPart: shell.footerPart,
      tailPart: shell.tailPart,
      pageMain,
      title: collection.title,
      canonical: `/collections/${collection.slug}`,
      htmlClass: 'empero-catalog-page',
    });

    const outputPath = path.join(SITE_ROOT, 'collections', collection.slug, 'index.html');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, page, 'utf8');
    console.log('Wrote', outputPath);
  }
}

main();
