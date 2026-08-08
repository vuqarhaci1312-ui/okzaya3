const fs = require('fs');
const src = fs.readFileSync('translate-index.js', 'utf8');
const start = src.indexOf('// === Menu - longest first ===');
const end = src.indexOf('\n];', start);
const block = src.slice(start, end);
const lines = block.split('\n').slice(1).filter((l) => l.trim().startsWith('['));
const filtered = lines.filter((l) => !l.includes("['of',"));
fs.writeFileSync('menu-replacements.js', `module.exports = [\n${filtered.join('\n')}\n];\n`);
console.log(`Extracted ${filtered.length} menu replacements`);
