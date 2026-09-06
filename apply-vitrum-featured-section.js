const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'shop.vitrumgroup.org', 'index.html');
const sectionPath = path.join(__dirname, 'vitrum-featured-section.html');
const sliderCssPath = path.join(__dirname, 'vitrum-slider-css.html');

let section = fs.readFileSync(sectionPath, 'utf8');
const sliderCss = fs.readFileSync(sliderCssPath, 'utf8');

section = section
  .replace(/ style="opacity:0;[^"]*"/g, '')
  .replace('>Featured projects<', '>Görülmiş işlər<');

const block = `
        <section id="shopify-section-template--29323675173241__collection_list_hQgTA6" class="shopify-section section ozkaya-vitrum-featured">
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://cdn.prod.website-files.com/678a5dce92e76b8ef57ebc9d/css/vitrum-9d3a41.shared.43014f6d7.min.css" rel="stylesheet" type="text/css" crossorigin="anonymous" />
            <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/css/splide-core.min.css" rel="stylesheet" type="text/css" />
            <style>
              .ozkaya-vitrum-featured {
                font-family: Barlow, sans-serif;
                color: #141313;
                background: #fff;
              }
              .ozkaya-vitrum-featured .splide__track {
                overflow: visible;
              }
            </style>
            ${sliderCss}
            <div id="ozkaya-vitrum-featured-root">
${section}
            </div>
            <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/js/splide.min.js" defer></script>
            <script src="/vitrum-featured-projects-init.js" defer></script>
        </section>`;

let html = fs.readFileSync(indexPath, 'utf8');
const start = html.indexOf(
  '<section id="shopify-section-template--29323675173241__collection_list_hQgTA6"'
);
const end = html.indexOf(
  '<section id="shopify-section-template--29323675173241__rich_text_with_images_Tgwnyq"'
);

if (start === -1 || end === -1) {
  console.error('Section boundaries not found');
  process.exit(1);
}

html = html.slice(0, start) + block + '\n        ' + html.slice(end);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Replaced Görülmiş işlər section with Vitrum Featured projects design');
