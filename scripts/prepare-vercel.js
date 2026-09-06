const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

const root = path.join(__dirname, '..');
const dest = path.join(root, 'public');
fs.rmSync(dest, { recursive: true, force: true });
copyDir(path.join(root, 'shop.vitrumgroup.org'), dest);
console.log('Prepared public/ from shop.vitrumgroup.org');
