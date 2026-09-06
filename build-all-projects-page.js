const fs = require('fs');
const path = require('path');
const {
  fetchUrl,
  parseProjects,
  getShellParts,
  assemblePage,
  prepareAllProjectsEmbedFragment,
  KICE_DETAIL_URL,
} = require('./vitrum-page-build-utils');
const { buildProjectPages } = require('./build-project-pages');
const { toAzProjectTitle } = require('./project-names-az');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const INDEX_PATH = path.join(SITE_ROOT, 'index.html');
const OUTPUT_PATHS = [
  path.join(SITE_ROOT, 'collections', 'proyektler', 'index.html'),
  path.join(SITE_ROOT, 'all-projects', 'index.html'),
];
const MAIN_FRAGMENT_PATH = path.join(SITE_ROOT, 'vitrum-all-projects-main.html');
const RAW_CACHE = path.join(__dirname, 'vitrum-all-projects-raw.html');
const VITRUM_URL = 'https://www.vitrumgroup.org/all-projects';

function buildProjectsHtml(projects) {
  const cards = projects
    .map(
      (p) => `
          <article class="ozkaya-all-projects__card">
            <a href="${KICE_DETAIL_URL}" class="ozkaya-all-projects__image-wrap">
              <img src="${p.image}" alt="${toAzProjectTitle(p.alt)}" loading="lazy" />
            </a>
            <a href="${KICE_DETAIL_URL}" class="ozkaya-all-projects__title">${toAzProjectTitle(p.title)}</a>
          </article>`
    )
    .join('');

  return `
      <section class="ozkaya-all-projects">
        <div class="ozkaya-all-projects__hero">
          <h1>Layihələrimiz</h1>
        </div>
        <div class="ozkaya-all-projects__grid">
${cards}
        </div>
      </section>`;
}

async function main() {
  const rawHtml = await fetchUrl(VITRUM_URL);
  fs.writeFileSync(RAW_CACHE, rawHtml, 'utf8');

  const projects = parseProjects(rawHtml);
  if (!projects.length) {
    throw new Error('No projects parsed from Vitrum page');
  }

  const embedFragment = prepareAllProjectsEmbedFragment(rawHtml);
  fs.writeFileSync(MAIN_FRAGMENT_PATH, embedFragment, 'utf8');
  console.log('Wrote', MAIN_FRAGMENT_PATH);

  const projectsHtml = buildProjectsHtml(projects);
  const indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');
  const shell = getShellParts(indexHtml);

  const pageMain = `
    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&display=swap" rel="stylesheet" />
      <link href="/all-projects.css?v=5" rel="stylesheet" type="text/css" media="all" />
      ${projectsHtml}
    </main>
`;

  for (const outputPath of OUTPUT_PATHS) {
    const canonical = outputPath.includes('all-projects')
      ? '/all-projects'
      : '/collections/proyektler';

    const page = assemblePage({
      headerPart: shell.headerPart,
      footerPart: shell.footerPart,
      tailPart: shell.tailPart,
      pageMain,
      title: 'Bütün proyektlər',
      canonical,
      htmlClass: 'vitrum-all-projects-page',
    });

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, page, 'utf8');
    console.log('Wrote', outputPath);
  }

  console.log('Projects:', projects.length);
  await buildProjectPages(projects, shell, { onlySlug: 'kice-restaurant', refresh: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
