const fs = require('fs');
const path = require('path');
const {
  VITRUM_ORIGIN,
  fetchUrl,
  parseProjects,
  extractPageTitle,
  getShellParts,
  buildVitrumNativeProjectPage,
  loadTranslationMap,
  delay,
} = require('./vitrum-page-build-utils');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const INDEX_PATH = path.join(SITE_ROOT, 'index.html');
const RAW_CACHE = path.join(__dirname, 'vitrum-all-projects-raw.html');
const PROJECTS_ROOT = path.join(SITE_ROOT, 'projects');
const CACHE_DIR = path.join(__dirname, 'vitrum-project-cache');

async function buildProjectPages(projects, shell, options = {}) {
  const { onlySlug, refresh = false } = options;
  const targetProjects = onlySlug ? projects.filter((p) => p.slug === onlySlug) : projects;

  if (onlySlug && !targetProjects.length) {
    throw new Error(`Project slug not found: ${onlySlug}`);
  }

  fs.mkdirSync(PROJECTS_ROOT, { recursive: true });
  fs.mkdirSync(CACHE_DIR, { recursive: true });

  for (const project of targetProjects) {
    const cachePath = path.join(CACHE_DIR, `${project.slug}.html`);
    let rawHtml;

    if (refresh || !fs.existsSync(cachePath)) {
      rawHtml = await fetchUrl(`${VITRUM_ORIGIN}${project.path}`);
      fs.writeFileSync(cachePath, rawHtml, 'utf8');
      await delay(200);
    } else {
      rawHtml = fs.readFileSync(cachePath, 'utf8');
    }

    const translations = loadTranslationMap(
      path.join(__dirname, 'translations', 'az', `${project.slug}.json`)
    );
    const title = translations[project.title] || extractPageTitle(rawHtml, project.title);
    const page = buildVitrumNativeProjectPage({
      rawHtml,
      shell,
      title,
      canonical: project.path,
      translations,
    });

    const outputPath = path.join(PROJECTS_ROOT, project.slug, 'index.html');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, page, 'utf8');
    console.log('Wrote', outputPath);
  }
}

async function main() {
  const rawHtml = fs.existsSync(RAW_CACHE)
    ? fs.readFileSync(RAW_CACHE, 'utf8')
    : await fetchUrl(`${VITRUM_ORIGIN}/all-projects`);

  const projects = parseProjects(rawHtml);
  if (!projects.length) {
    throw new Error('No projects found to build detail pages');
  }

  const indexHtml = fs.readFileSync(INDEX_PATH, 'utf8');
  const shell = getShellParts(indexHtml);
  await buildProjectPages(projects, shell);
  console.log('Project pages:', projects.length);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { buildProjectPages };
