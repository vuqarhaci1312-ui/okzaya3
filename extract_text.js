const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'shop.vitrumgroup.org', 'index.html');
const html = fs.readFileSync(filePath, 'utf8');
const lines = html.split('\n');

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripTags(s) {
  return decodeEntities(s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function lineNumAt(pos) {
  let n = 1;
  for (let i = 0; i < pos && i < html.length; i++) {
    if (html[i] === '\n') n++;
  }
  return n;
}

// Extract body only (skip head scripts mostly)
const bodyStart = html.indexOf('<body');
const bodyEnd = html.lastIndexOf('</body>');
const body = html.slice(bodyStart, bodyEnd);

const results = {
  menuDrawer: [],
  megaNav: [],
  header: [],
  hero: [],
  collections: [],
  products: [],
  sections: [],
  footer: [],
  cart: [],
  buttons: [],
  vitrum: [],
};

// Menu drawer items
const menuRe = /class="menu-drawer__menu-item[^"]*"[^>]*>([\s\S]*?)<\/(?:a|summary)>/g;
let m;
while ((m = menuRe.exec(body)) !== null) {
  const text = stripTags(m[1]);
  if (text && text.length < 200) {
    results.menuDrawer.push({ line: lineNumAt(bodyStart + m.index), text });
  }
}

// Mega nav
const megaRe = /class="mega-nav__group-(?:title|item)[^"]*"[^>]*>([^<]+)</g;
while ((m = megaRe.exec(body)) !== null) {
  const text = decodeEntities(m[1].trim());
  if (text) results.megaNav.push({ line: lineNumAt(bodyStart + m.index), text });
}

// Card captions
const capRe = /<p class="card__caption">([^<]+)/g;
while ((m = capRe.exec(body)) !== null) {
  results.collections.push({ line: lineNumAt(bodyStart + m.index), text: decodeEntities(m[1].trim()) });
}

// Collection titles in cards
const collTitleRe = /<h3[^>]*class="[^"]*card__heading[^"]*"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/g;
while ((m = collTitleRe.exec(body)) !== null) {
  const text = stripTags(m[1]);
  if (text && !text.includes('€') && text.length < 300) {
    results.collections.push({ line: lineNumAt(bodyStart + m.index), text, type: 'title' });
  }
}

// Section headings h2
const h2Re = /<h2[^>]*class="[^"]*"[^>]*>\s*([\s\S]*?)\s*<\/h2>/g;
while ((m = h2Re.exec(body)) !== null) {
  const text = stripTags(m[1]);
  if (text) results.sections.push({ line: lineNumAt(bodyStart + m.index), text });
}

// Product names (card heading links in product grid)
const prodRe = /<span class="line-clamp"[^>]*>([^<]+)<\/span>/g;
while ((m = prodRe.exec(body)) !== null) {
  results.products.push({ line: lineNumAt(bodyStart + m.index), text: decodeEntities(m[1].trim()) });
}

// Product descriptions (caption-with-letter-spacing light)
const descRe = /<div class="caption-with-letter-spacing light">([^<]+)<\/div>/g;
while ((m = descRe.exec(body)) !== null) {
  const text = decodeEntities(m[1].trim());
  if (!text.match(/^\d/)) results.products.push({ line: lineNumAt(bodyStart + m.index), text, type: 'desc' });
}

// aria-label
const ariaRe2 = /aria-label="([^"]+)"/g;
while ((m = ariaRe2.exec(html)) !== null) {
  results.buttons.push({ line: lineNumAt(m.index), text: decodeEntities(m[1]), type: 'aria-label' });
}

// placeholder
const phRe = /placeholder="([^"]+)"/g;
while ((m = phRe.exec(html)) !== null) {
  results.buttons.push({ line: lineNumAt(m.index), text: decodeEntities(m[1]), type: 'placeholder' });
}

// visually-hidden text
const vhRe = /<span class="visually-hidden[^"]*">([^<]+)/g;
while ((m = vhRe.exec(body)) !== null) {
  const text = decodeEntities(m[1].trim());
  if (text) results.buttons.push({ line: lineNumAt(bodyStart + m.index), text, type: 'visually-hidden' });
}

// Vitrum references
const vitrumRe = /Vitrum[^<"']{0,80}/gi;
while ((m = vitrumRe.exec(html)) !== null) {
  const text = m[0].trim();
  if (!text.includes('vitrumgroup.org') && !text.includes('.svg') && !text.includes('.png') && !text.includes('.woff')) {
    results.vitrum.push({ line: lineNumAt(m.index), text });
  }
}

// Head meta
const head = html.slice(0, bodyStart);
const titleMatch = head.match(/<title>\s*([\s\S]*?)<\/title>/);
if (titleMatch) results.header.push({ line: lines.findIndex(l => l.includes('<title>')) + 1, text: stripTags(titleMatch[1]), type: 'title' });
const metaDesc = head.match(/name="description" content="([^"]+)"/);
if (metaDesc) results.header.push({ line: 38, text: decodeEntities(metaDesc[1]), type: 'meta description' });
const ogTags = [...head.matchAll(/property="og:([^"]+)" content="([^"]+)"/g)];
ogTags.forEach(t => results.header.push({ line: 43, text: `og:${t[1]}: ${decodeEntities(t[2])}`, type: 'og' }));
const twTags = [...head.matchAll(/name="twitter:([^"]+)" content="([^"]+)"/g)];
twTags.forEach(t => results.header.push({ line: 49, text: `twitter:${t[1]}: ${decodeEntities(t[2])}`, type: 'twitter' }));

// Dedupe helper
function dedupe(arr) {
  const seen = new Set();
  return arr.filter(item => {
    const key = item.text + '|' + (item.type || '');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

Object.keys(results).forEach(k => {
  results[k] = dedupe(results[k]).sort((a, b) => a.line - b.line);
});

console.log(JSON.stringify(results, null, 2));
