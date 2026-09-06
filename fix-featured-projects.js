const fs = require('fs');
const path = require('path');

const projects = [
  {
    title: 'Qızıl Quşlar',
    href: '/projects/golden-birds',
    image:
      'https://cdn.prod.website-files.com/678aa8b9d4557bd2b4c0adb3/6a50b99c610ecfdba220c922_golden_birds_hero_image.png',
    tags: ['Restaurants'],
    location: 'Astana, Kazakhstan',
    year: '2025',
    desc:
      'We partnered with RestoInvest Group to deliver a complete kitchen and bar solution for Golden Birds, a new fine dining Pan-Asian venue in Astana. The space features a seamless open kitchen and a striking 9-meter bar designed for high-end hospitality.',
  },
  {
    title: 'Maksimum Kopenhagen',
    href: '/projects/maximum-kobenhavn',
    image:
      'https://cdn.prod.website-files.com/678aa8b9d4557bd2b4c0adb3/6a2b41e2367024b36b29bb8d_maximum_hero_image_01.png',
    tags: ['Bars', 'Restaurants', 'Retail'],
    location: 'Copenhagen, Denmark',
    year: '2026',
    desc:
      'This modern, state-of-the-art amusement complex in Denmark demanded high-volume efficiency without sacrificing a premium guest experience. We delivered custom bar stations and specialized self-service food units to ensure the venue was perfectly equipped for massive weekend crowds.',
  },
  {
    title: 'Madam Mey',
    href: '/projects/madame-mei',
    image:
      'https://cdn.prod.website-files.com/678aa8b9d4557bd2b4c0adb3/6a5f735f5c7ffd1ddc6b3f4e_madame_mei_hero_image_01.png',
    tags: ['Restaurants', 'Bars'],
    location: 'Riga, Latvia',
    year: '2025',
    desc:
      'This premium Vietnamese fine dining venue is engineered to provide a seamless guest experience, blending intricate flavors with rapid, flawless service.',
  },
  {
    title: 'Noyabr Restoran',
    href: '/projects/november',
    image:
      'https://cdn.prod.website-files.com/678aa8b9d4557bd2b4c0adb3/678e13e601de99c66904b275_Berlin-restaurant-November_interieur20.avif',
    tags: ['Restaurants', 'Bars'],
    location: 'Berlin',
    year: '2020',
    desc:
      'November is a neighbourhood gem in West Berlin housed within a listed monument, meaning our work had to adhere to numerous architectural requirements. The Catch restaurant family group are long-standing clients, and for this project we were tasked with creating a bar that would provide the centrepiece for the main dining room.',
  },
  {
    title: 'Daha İki Pivə',
    href: '/projects/two-more-beers',
    image:
      'https://cdn.prod.website-files.com/678aa8b9d4557bd2b4c0adb3/68113e96174d0952b0daa8e9_94dfcb5d-858f-4860-89ab-d36dab31db25.avif',
    tags: ['Bars', 'Restaurants'],
    location: 'UK, London',
    year: '2024',
    desc:
      'This vibrant beer spot is crafted to provide a warm and welcoming atmosphere, paired with excellent food and a perfect setting for meaningful conversations.',
  },
  {
    title: 'Negroni Restoran',
    href: '/projects/negroni-2',
    image:
      'https://cdn.prod.website-files.com/678aa8b9d4557bd2b4c0adb3/6881e68f79258ed492b7629d_Negroni.avif',
    tags: ['Restaurants'],
    location: 'Kazakhstan, Astana',
    year: '2024',
    desc:
      "The restaurant, Negroni Astana has opened this summer. The Vitrum team has been responsible for providing kitchen equipment in accordance with the client's design project and specifications.",
  },
];

function slide(p) {
  const tagHtml = p.tags.map((t) => `<span class="project-card__tag">${t}</span>`).join('');
  return `
            <li class="splide__slide">
              <article class="project-card project-card--static">
                <div class="project-card__image-wrap">
                  <img class="project-card__image" src="${p.image}" alt="${p.title}" loading="lazy" />
                </div>
                <div class="project-card__tags">
                  <div class="project-card__tags-left">${tagHtml}<span class="project-card__tag">${p.location}</span></div>
                  <span class="project-card__tag">${p.year}</span>
                </div>
                <p class="project-card__title">${p.title}</p>
                <p class="project-card__desc">${p.desc}</p>
              </article>
            </li>`;
}

const section = `
        <section id="shopify-section-template--29323675173241__collection_list_hQgTA6" class="shopify-section section ozkaya-featured-projects">
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/css/splide-core.min.css" rel="stylesheet" type="text/css" />
            <link href="/featured-projects.css?v=2" rel="stylesheet" type="text/css" media="all" />
            <div class="ozkaya-featured-projects__inner">
                <div class="ozkaya-featured-projects__header">
                    <h2 class="ozkaya-featured-projects__title">Görülmiş işlər</h2>
                    <a href="/collections/proyektler" class="ozkaya-featured-projects__all">
                        Hamısına bax
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.5"/></svg>
                    </a>
                </div>
                <div class="splide ozkaya-projects-slider" id="ozkaya-projects-slider">
                    <div class="splide__track">
                        <ul class="splide__list">
${projects.map(slide).join('')}
                        </ul>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/js/splide.min.js" defer></script>
            <script src="/vitrum-featured-projects-init.js?v=2" defer></script>
        </section>`;

const indexPath = path.join(__dirname, 'shop.vitrumgroup.org', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const start = html.indexOf(
  '<section id="shopify-section-template--29323675173241__collection_list_hQgTA6"'
);
const end = html.indexOf(
  '<section id="shopify-section-template--29323675173241__rich_text_with_images_Tgwnyq"'
);

if (start === -1 || end === -1) {
  console.error('Section not found');
  process.exit(1);
}

html = html.slice(0, start) + section + '\n        ' + html.slice(end);
fs.writeFileSync(indexPath, html, 'utf8');
console.log('Fixed featured projects section');
