const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'shop.vitrumgroup.org', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Undo catastrophic "of" -> " / " replacement
html = html.split(' / ').join('of');

// Restore local server domain
html = html.split('shop.ozkayasteel.az').join('shop.vitrumgroup.org');

// Fix JS variable corrupted by Close -> Bağla
html = html.replace(/vitrumDrawerExternalBağlaBound/g, 'vitrumDrawerExternalCloseBound');

// Fix partial Sale price translation
html = html.split('Endirim price').join('Endirim qiyməti');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Repair complete');
