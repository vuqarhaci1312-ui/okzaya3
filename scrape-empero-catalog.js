const fs = require('fs');
const path = require('path');
const https = require('https');
const { decodeEntities, translateTrToAz, translateHtmlToAz } = require('./empero-translate');

const CONFIG = JSON.parse(fs.readFileSync(path.join(__dirname, 'empero-scrape-config.json'), 'utf8'));
const CATALOG_DIR = path.join(__dirname, 'empero-catalog');
const IMAGE_DIR = path.join(__dirname, 'shop.vitrumgroup.org', 'cdn', 'empero');
const ORIGIN = CONFIG.origin;

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LocalMirror/1.0)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const next = res.headers.location.startsWith('http')
            ? res.headers.location
            : `${ORIGIN}${res.headers.location}`;
          fetchUrl(next).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => resolve(Buffer.concat(chunks)));
        res.on('error', reject);
      })
      .on('error', reject);
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/^detay-/, '')
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseGroupProducts(html) {
  const products = [];
  const re =
    /<div class='block2'>[\s\S]*?<a href='(detay-[^']+)'><img src='([^']+)' alt='([^']*)'>/g;
  let match;
  while ((match = re.exec(html))) {
    const href = match[1];
    const imagePath = match[2].replace(/^\.\.\//, '/');
    const title = decodeEntities(match[3]);
    products.push({
      href,
      sourceUrl: `${ORIGIN}/tr/${href}`,
      imageUrl: imagePath.startsWith('http') ? imagePath : `${ORIGIN}${imagePath}`,
      titleTr: title,
      titleAz: translateTrToAz(title),
      slug: `empero-${slugify(href)}`,
    });
  }
  return products;
}

function parseProductDetail(html, listing) {
  const titleMatch = html.match(/<h4 class="mtext-105[^"]*"[^>]*>\s*([^<]+)/i);
  const titleTr = decodeEntities(titleMatch ? titleMatch[1] : listing.titleTr);

  const featuresMatch = html.match(/id="genelozellik"[\s\S]*?<p class="stext-102[^"]*">([\s\S]*?)<\/p>/i);
  const featuresHtml = featuresMatch ? featuresMatch[1] : '';
  const features = featuresHtml
    .split(/<br\s*\/?>/i)
    .map((line) => decodeEntities(line).replace(/^[-–]\s*/, ''))
    .filter((line) => line.length > 2)
    .map((line) => translateTrToAz(line));

  const tableMatch = html.match(/<div[^>]*\bid="teknikozellik"[^>]*>[\s\S]*?(<table[\s\S]*?<\/table>)/i);
  const specsHtml = tableMatch ? translateHtmlToAz(tableMatch[1]) : '';

  const images = [];
  const seen = new Set();
  const imgRe = /admin\/pages\/upload\/([^'"\s]+)/g;
  let imgMatch;
  while ((imgMatch = imgRe.exec(html))) {
    const file = imgMatch[1];
    if (seen.has(file)) continue;
    seen.add(file);
    images.push(`${ORIGIN}/admin/pages/upload/${file}`);
  }
  if (!images.length && listing.imageUrl) {
    images.push(listing.imageUrl);
  }

  return {
    ...listing,
    titleTr,
    titleAz: translateTrToAz(titleTr),
    features,
    specsHtml,
    descriptionAz: `${translateTrToAz(titleTr)} — peşəkar mətbəx üçün paslanmayan polad avadanlıq. Modellər və ölçülər aşağıdakı cədvəldədir.`,
    images,
  };
}

function listingFromFamily(href) {
  return {
    href,
    sourceUrl: `${ORIGIN}/tr/${href}`,
    imageUrl: '',
    titleTr: href,
    titleAz: '',
    slug: `empero-${slugify(href)}`,
  };
}

function pickForCollection(products, collection) {
  const limit = CONFIG.maxPerCollection;
  const include = (collection.keywords || []).map((k) => k.toLowerCase());
  const exclude = (collection.exclude || []).map((k) => k.toLowerCase());
  const filtered = products.filter((p) => {
    const hay = `${p.titleTr} ${p.href}`.toLowerCase();
    if (exclude.some((k) => hay.includes(k))) {
      return false;
    }
    if (!include.length) {
      return true;
    }
    return include.some((k) => hay.includes(k));
  });
  return filtered.slice(0, limit);
}

async function downloadImage(url, destPath) {
  if (fs.existsSync(destPath)) {
    return;
  }
  const buf = await fetchUrl(url);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
}

async function main() {
  fs.mkdirSync(CATALOG_DIR, { recursive: true });
  fs.mkdirSync(IMAGE_DIR, { recursive: true });

  const groupCache = new Map();
  const detailCache = new Map();
  const catalog = { collections: [], products: {} };

  for (const collection of CONFIG.collections) {
    const listings = [];
    for (const href of collection.families || []) {
      listings.push(listingFromFamily(href));
    }
    for (const group of collection.groups || []) {
      if (!groupCache.has(group)) {
        const url = `${ORIGIN}/tr/${group}`;
        console.log('Fetching group', url);
        const html = (await fetchUrl(url)).toString('utf8');
        groupCache.set(group, parseGroupProducts(html));
        await delay(250);
      }
      listings.push(...groupCache.get(group));
    }

    const unique = [];
    const seen = new Set();
    for (const item of listings) {
      if (seen.has(item.slug)) continue;
      seen.add(item.slug);
      unique.push(item);
    }

    const selected = collection.families?.length
      ? unique.slice(0, CONFIG.maxPerCollection)
      : pickForCollection(unique, collection);
    const productSlugs = [];

    for (const item of selected) {
      if (!detailCache.has(item.slug)) {
        console.log('Fetching product', item.sourceUrl);
        let html;
        try {
          html = (await fetchUrl(item.sourceUrl)).toString('utf8');
        } catch (err) {
          console.warn('Skip', item.sourceUrl, err.message);
          continue;
        }
        const detail = parseProductDetail(html, item);
        const localImages = [];
        for (let i = 0; i < detail.images.length; i += 1) {
          const remote = detail.images[i];
          const ext = path.extname(new URL(remote).pathname) || '.jpg';
          const fileName = `${detail.slug}-${i}${ext}`;
          const dest = path.join(IMAGE_DIR, fileName);
          try {
            await downloadImage(remote, dest);
            localImages.push(`/cdn/empero/${fileName}`);
          } catch (err) {
            console.warn('Image failed', remote, err.message);
          }
          await delay(80);
        }
        if (!localImages.length) {
          localImages.push(detail.images[0] || item.imageUrl);
        }
        detail.localImages = localImages;
        detailCache.set(item.slug, detail);
        await delay(200);
      }
      productSlugs.push(item.slug);
      catalog.products[item.slug] = detailCache.get(item.slug);
    }

    catalog.collections.push({
      slug: collection.slug,
      title: collection.title,
      products: productSlugs,
    });
    console.log(collection.slug, productSlugs.length, 'products');
  }

  const translations = {};
  for (const product of Object.values(catalog.products)) {
    translations[product.slug] = {
      title: product.titleAz,
      description: product.descriptionAz,
      features: product.features,
    };
  }

  fs.writeFileSync(path.join(CATALOG_DIR, 'catalog.json'), JSON.stringify(catalog, null, 2), 'utf8');
  fs.writeFileSync(
    path.join(__dirname, 'translations', 'az', 'empero-products.json'),
    JSON.stringify(translations, null, 2),
    'utf8'
  );
  console.log('Catalog products:', Object.keys(catalog.products).length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
