const fs = require('fs');
const path = require('path');
const https = require('https');

const VITRUM_ORIGIN = 'https://www.vitrumgroup.org';
const KICE_DETAIL_URL = '/projects/kice-restaurant';
const VITRUM_SHARED_CSS =
  'https://cdn.prod.website-files.com/678a5dce92e76b8ef57ebc9d/css/vitrum-9d3a41.shared.43014f6d7.min.css';
const SPLIDE_CSS =
  'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/css/splide-core.min.css';
const JQUERY_JS =
  'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=678a5dce92e76b8ef57ebc9d';
const SPLIDE_JS = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@3.2.2/dist/js/splide.min.js';
const VITRUM_JS = [
  'https://cdn.prod.website-files.com/678a5dce92e76b8ef57ebc9d/js/vitrum-9d3a41.schunk.36b8fb49256177c8.js',
  'https://cdn.prod.website-files.com/678a5dce92e76b8ef57ebc9d/js/vitrum-9d3a41.schunk.121bb3d323be6f49.js',
  'https://cdn.prod.website-files.com/678a5dce92e76b8ef57ebc9d/js/vitrum-9d3a41.schunk.bdf58efcee47c042.js',
  'https://cdn.prod.website-files.com/678a5dce92e76b8ef57ebc9d/js/vitrum-9d3a41.5b7b6324.74b2b48bc2cc68c9.js',
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchUrl(res.headers.location).then(resolve).catch(reject);
          return;
        }
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

function parseProjects(rawHtml) {
  const mainStart = rawHtml.indexOf('<main');
  const footerStart = rawHtml.indexOf('<footer', mainStart);
  const main = rawHtml.slice(mainStart, footerStart);
  const gridStart = main.indexOf('class="blog11_list w-dyn-items"');
  if (gridStart === -1) {
    return [];
  }

  const gridHtml = main.slice(gridStart);
  const projects = [];
  const cardRe =
    /class="slider-square"[\s\S]*?href="(\/projects\/[^"]+)"[^>]*class="slider-square_img[\s\S]*?alt="([^"]*)"[^>]*src="([^"]+)"[\s\S]*?class="heading-style-h4 pointer">([^<]+)</g;

  let match;
  while ((match = cardRe.exec(gridHtml)) !== null) {
    const title = match[4].trim();
    const slug = match[1].replace(/^\/projects\//, '');
    projects.push({
      slug,
      path: match[1],
      href: match[1],
      image: match[3],
      alt: match[2].trim() || title,
      title,
    });
  }

  return projects;
}

function rewriteVitrumLinks(html) {
  return html
    .replace(/https:\/\/www\.vitrumgroup\.org\/projects\//g, '/projects/')
    .replace(/https:\/\/www\.vitrumgroup\.org\/all-projects/g, '/collections/proyektler')
    .replace(/https:\/\/www\.vitrumgroup\.org\/projects-category\/[^"]*/g, '/collections/proyektler')
    .replace(/href="\/all-projects"/g, 'href="/collections/proyektler"')
    .replace(/href="\/projects-category\/[^"]*"/g, 'href="/collections/proyektler"');
}

function rewriteAllProjectLinksToKice(html) {
  return rewriteVitrumLinks(html)
    .replace(/href="\/projects\/[^"#?]*"/g, `href="${KICE_DETAIL_URL}"`)
    .replace(/href="https:\/\/www\.vitrumgroup\.org\/projects\/[^"#?]*"/gi, `href="${KICE_DETAIL_URL}"`);
}

function stripUnwantedAllProjectsSections(html) {
  let content = html;

  const filterStart = content.indexOf('<div class="category-filter-menu');
  const listStart = content.indexOf('<div class="blog11_list-wrapper">');
  if (filterStart !== -1 && listStart !== -1 && listStart > filterStart) {
    content = content.slice(0, filterStart) + content.slice(listStart);
  }

  content = content.replace(/<header class="section_header111[\s\S]*?<\/header>/g, '');
  content = content.replace(/<div class="tag-list">[\s\S]*?<\/div>/g, '');
  content = content.replace(/<a href="[^"]*" class="slider-desc-wrap[\s\S]*?<\/a>/g, '');
  content = content.replace(/<p class="text-size-medium-3 hide"[^>]*>[\s\S]*?<\/p>/g, '');

  return content;
}

function extractAllProjectsMainBlock(rawHtml) {
  const mainStart = rawHtml.indexOf('<main');
  const footerStart = rawHtml.indexOf('<footer', mainStart);
  if (mainStart === -1 || footerStart === -1) {
    throw new Error('Could not extract all-projects main block');
  }

  let content = rawHtml.slice(mainStart, footerStart);
  content = content.replace(/^<main[^>]*>/, '<div class="main-wrapper position-static">');
  content = content.replace(/<\/main>\s*$/, '</div>');
  return content;
}

function prepareAllProjectsEmbedFragment(rawHtml) {
  let content = extractAllProjectsMainBlock(rawHtml);
  content = stripUnwantedAllProjectsSections(content);
  content = content.replace(
    'class="blog11_list w-dyn-items"',
    'class="blog11_list w-dyn-items is-product-lines ozkaya-projects-grid"'
  );
  return rewriteAllProjectLinksToKice(content.trim());
}

function extractEmbedBlock(rawHtml, className) {
  const marker = `<div class="${className} w-embed">`;
  const start = rawHtml.indexOf(marker);
  if (start === -1) {
    return '';
  }

  const styleStart = rawHtml.indexOf('<style', start);
  if (styleStart === -1) {
    return '';
  }

  const styleEnd = rawHtml.indexOf('</style>', styleStart) + '</style>'.length;
  const divEnd = rawHtml.indexOf('</div>', styleEnd) + '</div>'.length;
  return rawHtml.slice(start, divEnd);
}

function scopeVitrumGlobalStyles(block) {
  if (!block) {
    return '';
  }

  return block.replace(/body \*/g, '.page-wrapper *');
}

function stripVitrumNavbar(html) {
  const navMarker = 'class="navbar16_component';
  const navStart = html.indexOf(navMarker);
  if (navStart === -1) {
    return html;
  }

  const divStart = html.lastIndexOf('<div', navStart);
  const mainStart = html.indexOf('<main class="main-wrapper">');
  if (divStart === -1 || mainStart === -1) {
    return html;
  }

  return html.slice(0, divStart) + html.slice(mainStart);
}

function stripVitrumTail(html) {
  const mainEnd = html.indexOf('</main>');
  if (mainEnd === -1) {
    return html;
  }

  const afterMain = mainEnd + '</main>'.length;
  const closeWrapper = html.lastIndexOf('</div>');
  if (closeWrapper <= afterMain) {
    return html;
  }

  return html.slice(0, afterMain) + html.slice(closeWrapper);
}

function extractVitrumHead(rawHtml) {
  const headStart = rawHtml.indexOf('<head');
  const headOpenEnd = rawHtml.indexOf('>', headStart) + 1;
  const headEnd = rawHtml.indexOf('</head>');
  if (headStart === -1 || headEnd === -1) {
    return '';
  }

  let head = rawHtml.slice(headOpenEnd, headEnd);
  head = head.replace(/<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/g, '');
  head = head.replace(/<script[^>]*recaptcha[^>]*><\/script>/gi, '');
  head = head.replace(/<script async type="module"[\s\S]*?attributes\.js[\s\S]*?<\/script>/gi, '');
  head = head.replace(/<link[^>]*select2[^>]*>/gi, '');
  head = head.replace(/<title>[\s\S]*?<\/title>/gi, '');
  head = head.replace(/<link rel="canonical" href="[^"]*">/gi, '');
  head = head.replace(/<meta charset="[^"]*"\/?>/gi, '');
  head = head.replace(/<meta content="width=device-width, initial-scale=1" name="viewport"\/?>/gi, '');
  return head.trim();
}

function extractMinimalShopHead(headerPart) {
  const headStart = headerPart.indexOf('<head');
  const headEnd = headerPart.indexOf('</head>');
  if (headStart === -1 || headEnd === -1) {
    return '';
  }

  const head = headerPart.slice(headStart, headEnd + '</head>'.length);
  const themeStyles = [...head.matchAll(/<style[\s\S]*?<\/style>/gi)]
    .filter((match) => match[0].includes('--font') || match[0].includes(':root'))
    .map((match) => match[0]);

  const keepLinkPatterns = [
    'base.css',
    'homepage-header.css',
    'component-cart-drawer.css',
    'component-cart.css',
    'component-totals.css',
    'component-price.css',
    'section-footer.css',
    'component-list-menu.css',
    'component-list-payment.css',
    'component-list-social.css',
    'component-newsletter.css',
    'component-localization-form.css',
    'component-slideshow.css',
    'component-slider.css',
  ];

  const links = [...head.matchAll(/<link[^>]+>/gi)]
    .map((match) => match[0])
    .filter((link) => link.includes('stylesheet') && keepLinkPatterns.some((pattern) => link.includes(pattern)));

  const extras = [];
  if (!head.includes('homepage-header.css')) {
    extras.push(
      '<link href="/homepage-header.css?v=proyektler" rel="stylesheet" type="text/css" media="all" />'
    );
  }
  if (!head.includes('homepage-header.js')) {
    extras.push('<script src="/homepage-header.js?v=proyektler" defer></script>');
  }

  return [...themeStyles, ...links, ...extras].join('\n');
}

function extractShopChrome(headerPart) {
  const bodyStart = headerPart.indexOf('<body');
  const bodyOpenEnd = headerPart.indexOf('>', bodyStart) + 1;
  const headerEndMarker = '<!-- END sections: header-group -->';
  const headerEnd = headerPart.indexOf(headerEndMarker);
  if (bodyStart === -1 || headerEnd === -1) {
    throw new Error('Could not extract shop header chrome');
  }

  return headerPart.slice(bodyOpenEnd, headerEnd + headerEndMarker.length);
}

function extractVitrumPageWrapper(rawHtml) {
  const wrapperStart = rawHtml.indexOf('<div class="page-wrapper">');
  if (wrapperStart === -1) {
    throw new Error('No <div class="page-wrapper"> found');
  }

  const scriptMarker =
    '<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js';
  const scriptStart = rawHtml.indexOf(scriptMarker, wrapperStart);
  if (scriptStart === -1) {
    throw new Error('No Vitrum script block found after page-wrapper');
  }

  const wrapperEnd = rawHtml.lastIndexOf('</div>', scriptStart);
  let content = rawHtml.slice(wrapperStart, wrapperEnd + '</div>'.length);
  content = stripVitrumNavbar(content);
  content = stripVitrumChromeFromMain(content);
  content = stripVitrumTail(content);
  return rewriteVitrumLinks(content);
}

function extractVitrumTailScripts(rawHtml) {
  const scriptMarker =
    '<script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js';
  const start = rawHtml.indexOf(scriptMarker);
  const bodyEnd = rawHtml.indexOf('</body>', start);
  if (start === -1 || bodyEnd === -1) {
    return '';
  }

  let scripts = rawHtml.slice(start, bodyEnd);
  scripts = scripts.replace(/<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g, '');
  scripts = scripts.replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/select2[^<]*<\/script>/g, '');
  scripts = scripts.replace(/<script>[\s\S]*?\$\(document\)\.ready\(function\(\) \{[\s\S]*?select2[\s\S]*?<\/script>/g, '');
  return scripts;
}

function buildHtmlOpenTag({ webflowAttrs, htmlClass }) {
  const attrs = {
    lang: 'az',
    class: htmlClass,
    'data-home-header': 'true',
    'data-demo-mode': 'true',
    ...webflowAttrs,
  };

  const attrString = Object.entries(attrs)
    .map(([name, value]) => `${name}="${value}"`)
    .join(' ');

  return `<html ${attrString}>`;
}

function applyTranslations(html, translationMap) {
  if (!translationMap || typeof translationMap !== 'object') {
    return html;
  }

  const entries = Object.entries(translationMap).sort((a, b) => b[0].length - a[0].length);
  let result = html;
  for (const [from, to] of entries) {
    if (!from || from === to) {
      continue;
    }
    result = result.split(from).join(to);
    const entityFrom = from.replace(/'/g, '&#x27;');
    if (entityFrom !== from) {
      result = result.split(entityFrom).join(to);
    }
  }
  return result;
}

function loadTranslationMap(filePath) {
  if (!fs.existsSync(filePath)) {
    return {};
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function buildVitrumNativePage({ rawHtml, shell, title, canonical, htmlClass = 'vitrum-project-page', translations }) {
  const webflowAttrs = extractWebflowHtmlAttrs(rawHtml);
  let vitrumHead = extractVitrumHead(rawHtml);
  const shopHead = extractMinimalShopHead(shell.headerPart);
  let pageWrapper = extractVitrumPageWrapper(rawHtml);
  const tailScripts = extractVitrumTailScripts(rawHtml);
  const shopHeader = extractShopChrome(shell.headerPart);

  if (translations) {
    pageWrapper = applyTranslations(pageWrapper, translations);
    vitrumHead = applyTranslations(vitrumHead, translations);
  }

  const page = `<!doctype html>
${buildHtmlOpenTag({ webflowAttrs, htmlClass })}
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} – Özkaya Steel</title>
<link rel="canonical" href="${canonical}">
${shopHead}
${vitrumHead}
<link href="/vitrum-project-shell.css?v=6" rel="stylesheet" type="text/css" media="all" />
</head>
<body>
<div class="ozkaya-shop-chrome ozkaya-shop-chrome--header">
${shopHeader}
</div>
${pageWrapper}
<div class="ozkaya-shop-chrome ozkaya-shop-chrome--footer">
${shell.footerPart}
</div>
${tailScripts}
<script src="/demo-mode.js" defer></script>
</body>
</html>`;

  return page;
}

function buildVitrumNativeProjectPage(options) {
  return buildVitrumNativePage(options);
}

function extractProjectHeadStyles(rawHtml) {
  const headEnd = rawHtml.indexOf('</head>');
  const head = rawHtml.slice(0, headEnd);
  return [...head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[0])
    .join('\n');
}

function stripVitrumChromeFromMain(mainHtml) {
  let html = mainHtml;

  const footerStart = html.indexOf('<footer class="footer15_component">');
  if (footerStart !== -1) {
    const footerEnd = html.indexOf('</footer>', footerStart);
    if (footerEnd !== -1) {
      html = html.slice(0, footerStart) + html.slice(footerEnd + '</footer>'.length);
    }
  }

  return html;
}

function extractProjectMainBlock(rawHtml) {
  const mainStart = rawHtml.indexOf('<main class="main-wrapper">');
  if (mainStart === -1) {
    throw new Error('No <main class="main-wrapper"> found');
  }

  const mainEnd = rawHtml.indexOf('</main>', mainStart);
  if (mainEnd === -1) {
    throw new Error('No closing </main> found');
  }

  const mainBlock = rawHtml
    .slice(mainStart, mainEnd + '</main>'.length)
    .replace('<main class="main-wrapper">', '<div class="main-wrapper position-static">')
    .replace('</main>', '</div>');

  return stripVitrumChromeFromMain(mainBlock);
}

function extractProjectEmbedContent(rawHtml) {
  const sliderCss = extractEmbedBlock(rawHtml, 'slider-css');
  const globalStyles = extractEmbedBlock(rawHtml, 'global-styles');
  const headStyles = extractProjectHeadStyles(rawHtml);
  const mainBlock = extractProjectMainBlock(rawHtml);

  return rewriteVitrumLinks([sliderCss, globalStyles, headStyles, mainBlock].filter(Boolean).join('\n'));
}

function extractPageTitle(rawHtml, fallback) {
  const match = rawHtml.match(/<title>([^<]+)<\/title>/i);
  return match ? match[1].trim() : fallback;
}

function getShellParts(indexHtml) {
  const headerMarker = '<!-- END sections: header-group -->';
  const footerStartMarker = '<!-- BEGIN sections: footer-group -->';
  const footerEndMarker = '<!-- END sections: footer-group -->';
  const tailMarker = '<ul hidden>';

  const headerEnd = indexHtml.indexOf(headerMarker);
  const footerBegin = indexHtml.indexOf(footerStartMarker);
  const footerEnd = indexHtml.indexOf(footerEndMarker);
  const tailStart = indexHtml.indexOf(tailMarker);

  if (headerEnd === -1 || footerBegin === -1 || footerEnd === -1 || tailStart === -1) {
    throw new Error('Could not find page markers in index.html');
  }

  return {
    headerPart: indexHtml.slice(0, headerEnd + headerMarker.length),
    footerPart: indexHtml.slice(footerBegin, footerEnd + footerEndMarker.length),
    tailPart: indexHtml.slice(tailStart),
  };
}

function extractWebflowHtmlAttrs(rawHtml) {
  const match = rawHtml.match(/<html([^>]+)>/i);
  if (!match) {
    return {};
  }

  const attrs = {};
  const attrNames = ['data-wf-page', 'data-wf-site', 'data-wf-domain'];
  for (const name of attrNames) {
    const attrMatch = match[1].match(new RegExp(`${name}="([^"]+)"`));
    if (attrMatch) {
      attrs[name] = attrMatch[1];
    }
  }

  return attrs;
}

function applyHtmlAttributes(headerPart, attrs) {
  let page = headerPart;
  for (const [name, value] of Object.entries(attrs)) {
    if (page.includes(`${name}=`)) {
      continue;
    }
    page = page.replace(/<html([^>]*)>/, `<html$1 ${name}="${value}">`);
  }
  return page;
}

function applyHtmlClass(headerPart, className) {
  return headerPart.replace(/<html([^>]*)>/, (_match, attrs) => {
    if (/class="/i.test(attrs)) {
      if (attrs.includes(className)) {
        return `<html${attrs}>`;
      }
      return `<html${attrs.replace(/class="([^"]*)"/i, `class="$1 ${className}"`)}>`;
    }
    return `<html${attrs} class="${className}">`;
  });
}

function buildVitrumProjectEmbed(mainHtml) {
  const scriptTags = [JQUERY_JS, ...VITRUM_JS, SPLIDE_JS, '/vitrum-project-slider-init.js?v=1']
    .map((src) => `<script src="${src}" defer></script>`)
    .join('\n      ');

  const webflowInit = `<script>!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>`;

  return `
      <div class="ozkaya-vitrum-project">
        ${webflowInit}
        <link href="${VITRUM_SHARED_CSS}" rel="stylesheet" type="text/css" crossorigin="anonymous" />
        <link href="${SPLIDE_CSS}" rel="stylesheet" type="text/css" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        ${mainHtml}
        <link href="/vitrum-project-guard.css?v=3" rel="stylesheet" type="text/css" media="all" />
      </div>
      ${scriptTags}`;
}

function assemblePage({
  headerPart,
  footerPart,
  tailPart,
  pageMain,
  title,
  canonical,
  htmlClass,
  htmlAttrs = {},
}) {
  let page = applyHtmlClass(headerPart, htmlClass);
  page = applyHtmlAttributes(page, htmlAttrs);
  page = page
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title} – Özkaya Steel</title>`)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`);

  page += pageMain;
  page += '\n    ' + footerPart + '\n';
  page += tailPart;
  return page;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  VITRUM_ORIGIN,
  VITRUM_SHARED_CSS,
  KICE_DETAIL_URL,
  fetchUrl,
  parseProjects,
  rewriteVitrumLinks,
  rewriteAllProjectLinksToKice,
  extractAllProjectsMainBlock,
  stripUnwantedAllProjectsSections,
  prepareAllProjectsEmbedFragment,
  extractProjectEmbedContent,
  stripVitrumChromeFromMain,
  extractProjectMainBlock,
  extractProjectHeadStyles,
  extractPageTitle,
  extractWebflowHtmlAttrs,
  getShellParts,
  applyHtmlClass,
  applyHtmlAttributes,
  buildVitrumProjectEmbed,
  buildVitrumNativeProjectPage,
  buildVitrumNativePage,
  applyTranslations,
  loadTranslationMap,
  assemblePage,
  delay,
};
