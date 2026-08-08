const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'shop.vitrumgroup.org', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const idFixes = [
  ['predictiveAxtar', 'predictiveSearch'],
  ['initShopSəbətSync', 'initShopCartSync'],
  ['URLAxtarParams', 'URLSearchParams'],
  ['SəbətDrawer-SəbətItems', 'CartDrawer-CartItems'],
  ['SəbətDrawer-SəbətErrors', 'CartDrawer-CartErrors'],
  ['SəbətDrawer', 'CartDrawer'],
  ['SəbətConsent', 'CartConsent'],
  ['AnnouncementDilLabel', 'AnnouncementLanguageLabel'],
  ['AnnouncementDilList', 'AnnouncementLanguageList'],
  ['addToSəbət', 'addToCart'],
  ['viewSəbət', 'viewCart'],
  ['countrySelectorAxtarCount', 'countrySelectorSearchCount'],
  ['Səbətiniz is empty', 'Səbətiniz boşdur'],
  ['srcset="//shop.vitrumgroup.org/cdn/shop/files/ozkaya-logo-white.png 225w""', 'srcset="//shop.vitrumgroup.org/cdn/shop/files/ozkaya-logo-white.png 225w"'],
  ['This item has a minimum of [min]', 'Minimum [min] ədəd'],
  ['This item has a maximum of [max]', 'Maksimum [max] ədəd'],
  ['You can only add this item in increments of [step]', 'Yalnız [step] ədəd artımla əlavə edə bilərsiniz'],
];

for (const [from, to] of idFixes) {
  html = html.split(from).join(to);
}

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Technical IDs restored');
