const fs = require('fs');
const path = require('path');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const INDEX_PATH = path.join(SITE_ROOT, 'index.html');

const PAGES = [
  ['calisma-dezgahlari', 'Çalışma dəzgahları'],
  ['yuma-vannasi', 'Yuma vannası'],
  ['tekli-yuma-vannasi', 'Təkli yuma vannası'],
  ['2-li-yuma-vannasi', '2-li yuma vannası'],
  ['3-lu-yuma-vannasi', '3-lü yuma vannası'],
  ['teravez-yuma-vannasi', 'Tərəvəz yuma vannası'],
  ['qazan-yuma-vannasi', 'Qazan yuma vannası'],
  ['elektrik-ve-qaz-pilteeleri', 'Elektrik və qaz piltələri'],
  ['2-gozlu', '2 gözlü'],
  ['4-gozlu', '4 gözlü'],
  ['6-gozlu', '6 gözlü'],
  ['firinlar', 'Fırınlar'],
  ['bar-dezgahlari', 'Bar dəzgahları'],
  ['camasirxana-avadanliqlari', 'Çamaşırxana'],
  ['proyektler', 'Proyektler'],
];

const html = fs.readFileSync(INDEX_PATH, 'utf8');
const headerMarker = '<!-- END sections: header-group -->';
const headerEnd = html.indexOf(headerMarker);
const tailStart = html.indexOf('<ul hidden>');

if (headerEnd === -1 || tailStart === -1) {
  console.error('Could not find header or script tail in index.html');
  process.exit(1);
}

const headerPart = html.slice(0, headerEnd + headerMarker.length);
const tail = html.slice(tailStart);

for (const [slug, title] of PAGES) {
  const pagePath = `/collections/${slug}`;
  const dir = path.join(SITE_ROOT, 'collections', slug);
  fs.mkdirSync(dir, { recursive: true });

  let page = headerPart
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title} – Özkaya Steel</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${pagePath}">`);

  page += `
    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      <section class="placeholder-collection">
        <h1>${title}</h1>
        <p>Bu kateqoriya səhifəsi hazırlanır.</p>
      </section>
    </main>
`;
  page += tail;

  fs.writeFileSync(path.join(dir, 'index.html'), page, 'utf8');
  console.log('Wrote', pagePath);
}

console.log(`Done. ${PAGES.length} placeholder pages.`);
