const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'shop.vitrumgroup.org', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Fix corrupted element IDs from over-eager Search/Subscribe replacements
html = html.replace(/id="Axtar-Inline"/g, 'id="Search-Inline"');
html = html.replace(/for="Axtar-Inline"/g, 'for="Search-Inline"');
html = html.replace(/id="Axtar-In-Modal"/g, 'id="Search-In-Modal"');
html = html.replace(/for="Axtar-In-Modal"/g, 'for="Search-In-Modal"');
html = html.replace(/id="Abunə ol"/g, 'id="Subscribe"');

const fixes = [
  // Benefits bar
  ['30 years HoReCa expertise', 'Uzun illərin HoReCa təcrübəsi'],
  ['Industry professionals team', 'Peşəkar komanda'],
  ['Expert setup consultation', 'Peşəkar quraşdırma məsləhəti'],
  ['Beyond catalog solutions', 'Kataloqdan kənar həllər'],
  ['EU-wide delivery support', 'Azərbaycan üzrə çatdırılma dəstəyi'],

  // Broken partial translations
  ['Abunə ol to our emails', 'E-poçtumuza abunə olun'],
  ['>Daxil ol</a> to check out faster.', '>Daxil ol</a> — daha sürətli sifariş üçün.'],

  // Menu leftovers
  ['Table accessories', 'Masa aksesuarları'],
  ['Wine coolers', 'Şərab soyuducuları'],
  ['Cleavers', 'Zaxmalar'],
  ['Wine Coolers', 'Şərab soyuducuları'],

  // Contact form
  ['placeholder="Full name"', 'placeholder="Ad soyad"'],
  ['>Full name<span', '>Ad soyad<span'],
  ['name="contact[Full name]"', 'name="contact[Ad soyad]"'],
  ['placeholder="Company name"', 'placeholder="Şirkət adı"'],
  ['>Company name<span', '>Şirkət adı<span'],
  ['name="contact[Company name]"', 'name="contact[Şirkət adı]"'],
  ['placeholder="Email"', 'placeholder="E-poçt"'],
  ['placeholder="Comment"', 'placeholder="Şərh"'],
  ['>Comment<', '>Şərh<'],

  // Reviews
  ['The partnership with Özkaya Steel is characterized by strict adherence to agreements, attention to detail, and readiness for effective solutions. These qualities ensure our collaboration is predictable and productive. We value\n                                    their professionalism and appreciate our long-term partnership.', 'Özkaya Steel ilə tərəfdaşlıq razılaşmalara sadiqlik, detallara diqqət və effektiv həllərə hazır olmaqla xarakterizə olunur. Bu keyfiyyətlər əməkdaşlığımızı proqnozlaşdırılan və məhsuldar edir. Peşəkarlıqlarını qiymətləndiririk və uzunmüddətli tərəfdaşlığımızı yüksək qiymətləndiririk.'],
  ['In more than 10 years working with Özkaya Steel, I\'ve come to see them not just as a supplier but as a trusted partner', 'Özkaya Steel ilə 10 ildən artiq işləyərkən onları yalnız təchizatçı deyil, etibarlı tərəfdaş kimi görürəm'],
  ['In more than 10 years working with Özkaya Steel, I\u2019ve come to see them not just as a supplier but as a trusted partner', 'Özkaya Steel ilə 10 ildən artiq işləyərkən onları yalnız təchizatçı deyil, etibarlı tərəfdaş kimi görürəm'],
  ['They consistently provide us with modern, high-quality solutions that fully meet the demands of next-generation supermarkets. We greatly value their professionalism, punctuality, and meticulous approach at every stage — from selecting equipment to installation and after-sales support.', 'Bizə müasir, yüksək keyfiyyətli həllər təqdim edirlər ki, bu da yeni nəsil supermarketlərin tələblərini tam ödəyir. Peşəkarlıqlarını, vaxtında çatdırılmanı və hər mərhələdə diqqətli yanaşmanı — avadanlıq seçimindən quraşdırmaya və satış sonrası dəstəyə qədər — yüksək qiymətləndiririk.'],

  // Carousel pagination
  ['aria-label="1 of 3"', 'aria-label="1-dən 3"'],
  ['aria-label="2 of 3"', 'aria-label="2-dən 3"'],
  ['aria-label="3 of 3"', 'aria-label="3-dən 3"'],

  // Footer logo srcset cleanup
  ['srcset="//shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=50 50w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=100 100w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=150 150w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=200 200w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=300 300w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=400 400w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=550 550w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=800 800w, //shop.vitrumgroup.org/cdn/shop/files/ozkaya-logo-white.png 1100w', 'srcset="//shop.vitrumgroup.org/cdn/shop/files/ozkaya-logo-white.png 225w"'],

  // Copyright if still English
  ['All rights reserved.', 'Bütün hüquqlar qorunur.'],

  // CTA link
  ['href="https://www.#/#contact"', 'href="#contact"'],
  ['href="https://#/#contact"', 'href="#contact"'],

  // Bar systems menu text if still English
  ['>Bar sistemləri<', '>Bar sistemləri<'],
];

for (const [from, to] of fixes) {
  html = html.split(from).join(to);
}

// Footer contact email domain consistency
html = html.replace(/shop@ozkayasteel\.az/g, 'info@ozkayasteel.az');

fs.writeFileSync(indexPath, html, 'utf8');
console.log('Remaining fixes applied');
