const fs = require('fs');
const path = require('path');

const SITE_ROOT = path.join(__dirname, 'shop.vitrumgroup.org');
const FROM = 'href="https://#/all-projects"';
const TO = 'href="/collections/proyektler"';

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (name === 'cdn') continue;
      walk(full, files);
    } else if (name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

let updated = 0;
for (const file of walk(SITE_ROOT)) {
  let html = fs.readFileSync(file, 'utf8');
  if (!html.includes(FROM)) continue;
  html = html.replaceAll(FROM, TO);
  fs.writeFileSync(file, html, 'utf8');
  updated += 1;
  console.log('Fixed footer:', path.relative(SITE_ROOT, file));
}

console.log(`Done. Updated ${updated} files.`);
