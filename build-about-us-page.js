const fs = require('fs');
const path = require('path');
const {
  VITRUM_ORIGIN,
  fetchUrl,
  getShellParts,
  buildVitrumNativePage,
  loadTranslationMap,
} = require('./vitrum-page-build-utils');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const INDEX_PATH = path.join(SITE_ROOT, 'index.html');
const CACHE_PATH = path.join(__dirname, 'vitrum-about-us-cache.html');
const OUTPUT_PATH = path.join(SITE_ROOT, 'about-us', 'index.html');
const TRANSLATION_PATH = path.join(__dirname, 'translations', 'az', 'about-us.json');

async function main() {
  const rawHtml = await fetchUrl(`${VITRUM_ORIGIN}/about-us`);
  fs.writeFileSync(CACHE_PATH, rawHtml, 'utf8');

  const indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');
  const shell = getShellParts(indexHtml);
  const translations = loadTranslationMap(TRANSLATION_PATH);

  let page = buildVitrumNativePage({
    rawHtml,
    shell,
    title: 'Haqqımızda',
    canonical: '/about-us',
    htmlClass: 'vitrum-project-page vitrum-about-page',
    translations,
  });

  page = page
    .replace(/<header[^>]*class="section_header111[\s\S]*?<\/header>/g, '')
    .replace(/href="\/distributors-hospitality"/g, 'href="/#contact"')
    .replace(/href="\/#solutions"/g, 'href="/#contact"')
    .replace(/https:\/\/www\.linkedin\.com\/jobs\/view\/[^"]+/g, '/#contact')
    .replace(
      /<h1 class="heading-style-h2">Peşəkar mətbəxi birlikdə qururuq<\/h1>/,
      '<p class="ozkaya-about-years"><span class="ozkaya-about-years__num">20</span> illik təcrübə</p><h1 class="heading-style-h2">Peşəkar mətbəxi birlikdə qururuq</h1>'
    );

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, page, 'utf8');
  console.log('Wrote', OUTPUT_PATH);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
