function applyPostReplacements(html) {
  html = html.replace(/Load image (\d+) in gallery view/g, 'Şəkil $1-i qalereyada göstər');
  html = html.replace(/\((\d+) products\)/g, '($1 məhsul)');
  html = html.replace(/Qiyməts shown exclude tax\. Your final total is confirmed at checkout\./g, 'Qiymətlər vergi xaric göstərilir. Yekun məbləğ sifariş zamanı təsdiqlənir.');
  html = html.replace(/Prices shown exclude tax\. Your final total is confirmed at checkout\./g, 'Qiymətlər vergi xaric göstərilir. Yekun məbləğ sifariş zamanı təsdiqlənir.');
  html = html.replace(/Weld-in AISI 304 paslanmayan polad sink bowl by AIFO — central drain, six sizes from 340×400×200 to 600×500×300 mm\. Commercial kitchen wash basin at Özkaya Steel\./g, 'AIFO qaynaqlı AISI 304 paslanmayan polad moyka qabı — mərkəzi drain, 340×400×200-dən 600×500×300 mm-ə qədər 6 ölçü. Özkaya Steel-də peşəkar mətbəx moykası.');
  return html;
}

function applyReplacements(html, extra = [], options = {}) {
  for (const [from, to] of extra) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
    }
  }
  for (const [from, to] of commonReplacements) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
    }
  }
  if (options.productPage) {
    for (const [from, to] of faqReplacements) {
      if (html.includes(from)) {
        html = html.split(from).join(to);
      }
    }
    for (const [from, to] of productSpecReplacements) {
      if (html.includes(from)) {
        html = html.split(from).join(to);
      }
    }
  }
  for (const [from, to] of menuReplacements) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
    }
  }
  for (const [from, to] of facetReplacements) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
    }
  }
  for (const [from, to] of facetValueReplacements) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
    }
  }
  for (const [from, to] of relatedProductReplacements) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
    }
  }
  return applyPostReplacements(html);
}

const menuReplacements = require('./menu-replacements');
const facetValueReplacements = require('./facet-value-replacements');
const relatedProductReplacements = require('./related-product-replacements');

const commonReplacements = [
  // Assets & brand
  ['vitrum-white-logo.svg?v=1775177123&amp;width=600', 'ozkaya-logo-white.png'],
  ['vitrum-white-logo.svg?v=1775177123&amp;width=110 110w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=165 165w, //shop.vitrumgroup.org/cdn/shop/files/vitrum-white-logo.svg?v=1775177123&amp;width=220 220w', 'ozkaya-logo-white.png 110w, //shop.vitrumgroup.org/cdn/shop/files/ozkaya-logo-white.png 165w, //shop.vitrumgroup.org/cdn/shop/files/ozkaya-logo-white.png 220w'],
  ['vitrum-white-logo.svg?v=1775177123&amp;width=1100', 'ozkaya-logo-white.png'],
  ['vitrum-white-logo.svg?v=1775177123\\u0026width=500', 'ozkaya-logo-white.png'],
  ['Vitrum_favicon_2025.svg?crop=center&height=32&v=1781006477&width=32', 'ozkaya-favicon-32.png'],
  ['Vitrum Shop', 'Özkaya Steel'],
  ['VITRUM', 'Özkaya Steel'],
  ['Vitrum', 'Özkaya Steel'],
  ['vitrum_group', 'ozkayasteel'],
  ['vitrumlv.myshopify.com', 'ozkayasteel.myshopify.com'],
  ['www.vitrumgroup.org', '#'],

  // Meta / lang
  ['<html class="js" lang="en">', '<html class="js" lang="az">'],
  ['<html class="no-js" lang="en">', '<html class="no-js" lang="az">'],

  // Favicon (homepage style)
  ['<link rel="icon" type="image/png" href="//shop.vitrumgroup.org/cdn/shop/files/ozkaya-favicon.png">',
    '<link rel="icon" type="image/png" sizes="32x32" href="//shop.vitrumgroup.org/cdn/shop/files/ozkaya-favicon-32.png">\n    <link rel="icon" type="image/png" sizes="192x192" href="//shop.vitrumgroup.org/cdn/shop/files/ozkaya-favicon-192.png">\n    <link rel="apple-touch-icon" sizes="180x180" href="//shop.vitrumgroup.org/cdn/shop/files/ozkaya-favicon-192.png">'],

  // Footer phone
  ['tel:+37167802384', 'tel:+994501234567'],
  ['+371 67 802 384', '+994 50 123 45 67'],
  ['info@vitrumgroup.org', 'info@ozkayasteel.az'],

  // Benefits bar
  ['30 years HoReCa expertise', 'Uzun illərin peşəkar iaşə təcrübəsi'],
  ['Industry professionals team', 'Peşəkar komanda'],
  ['Expert setup consultation', 'Peşəkar quraşdırma məsləhəti'],
  ['Beyond catalog solutions', 'Kataloqdan kənar həllər'],
  ['EU-wide delivery support', 'Azərbaycan və regionda çatdırılma'],

  // Cart / checkout UI
  ['Taxes, discounts and <a href="/policies/shipping-policy">shipping</a> calculated at checkout.', 'Vergilər, endirimlər və <a href="/policies/shipping-policy">çatdırılma</a> sifariş zamanı hesablanır.'],
  ['I agree to the <a href="/policies/terms-of-service" target="_blank" rel="noopener">Terms of service</a> and the <a href="/pages/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>', 'Razıyam: <a href="/policies/terms-of-service" target="_blank" rel="noopener">Xidmət şərtləri</a> və <a href="/pages/privacy-policy" target="_blank" rel="noopener">Məxfilik siyasəti</a>'],
  ['You must agree to continue to checkout.', 'Sifarişi rəsmiləşdirmək üçün razılıq verməlisiniz.'],
  ['Choosing a selection results in a full page refresh.', 'Seçim edildikdə səhifə yenilənir.'],
  ['Opens in a new window.', 'Yeni pəncərədə açılır.'],
  ['There was an error while updating your cart. Please try again.', 'Səbət yenilənərkən xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.'],
  ['You can only add [quantity] of this item to your cart.', 'Səbətə yalnız [quantity] ədəd əlavə edə bilərsiniz.'],
  ['Include your country code, e.g. +371 26 123 456', 'Ölkə kodunu daxil edin, məs: +994 50 123 45 67'],
  ['This shop sells to businesses, public bodies and institutions. Our offer is not aimed at consumers.', 'Bu mağaza müəssisələrə, dövlət qurumlarına və institusiyalara satış edir. Təklifimiz fərdi istehlakçılara yönəlməyib.'],

  // Collection / product UI
  ['Sort by:', 'Sırala:'],
  ['Sort by', 'Sırala'],
  ['Filter and sort', 'Filtr və sıralama'],
  ['Filter', 'Filtr'],
  ['Apply', 'Tətbiq et'],
  ['Clear all', 'Hamısını təmizlə'],
  ['Remove filter', 'Filtr sil'],
  ['Availability', 'Mövcudluq'],
  ['In stock', 'Anbarda var'],
  ['Out of stock', 'Anbarda yoxdur'],
  ['<span>Back</span>', '<span>Geri</span>'],
  ['Remove all', 'Hamısını sil'],
  ['Submit enquiry', 'Sorğu göndər'],
  ['Prices shown exclude tax. Your final total is confirmed at checkout.', 'Qiymətlər vergi xaric göstərilir. Yekun məbləğ sifariş zamanı təsdiqlənir.'],
  [' in cart', ' səbətdə'],
  ['Request a quote', 'Sorğu göndərin'],
  ['See full specs', 'Tam xüsusiyyətlərə bax'],
  ['Commercial catering equipment available at Özkaya Steel', 'Özkaya Steel-də peşəkar iaşə avadanlığı'],
  ['<legend class="form__label">Size</legend>', '<legend class="form__label">Ölçü</legend>'],
  ['Variant sold out or unavailable', 'Variant satılıb və ya mövcud deyil'],
  ['Download (PDF)', 'Yüklə (PDF)'],
  ['Kataloque', 'Kataloq'],
  ['Catalogue', 'Kataloq'],
  ['SINK STATION', 'Moyka stansiyası'],
  ['Kitchen & Utility Sinks', 'Mətbəx və xidməti moykalar'],
  ['Kitchen \\u0026 Utility Sinks', 'Mətbəx və xidməti moykalar'],
  ['"options_text": "Size:', '"options_text": "Ölçü:'],
  ['\\u003cdt\\u003eSize:\\u003c\\/dt\\u003e', '\\u003cdt\\u003eÖlçü:\\u003c\\/dt\\u003e'],
  [' by Schott. Özkaya Steel-də peşəkar iaşə avadanlığı', ' — Schott. Özkaya Steel-də peşəkar iaşə avadanlığı'],
  [' by Scandomestic. Özkaya Steel-də peşəkar iaşə avadanlığı', ' — Scandomestic. Özkaya Steel-də peşəkar iaşə avadanlığı'],
  [' by Oscartielle. Özkaya Steel-də peşəkar iaşə avadanlığı', ' — Oscartielle. Özkaya Steel-də peşəkar iaşə avadanlığı'],
  ['cold storage', 'soyuducu saxlama'],
  ['>cooking equipment</a>', '>Bişirmə avadanlığı</a>'],
  ['>ventilation</a>', '>Havalandırma</a>'],
  ['Product type', 'Məhsul tipi'],
  ['Vendor', 'İstehsalçı'],
  ['>Products<', '>Məhsullar<'],
  ['Showing', 'Göstərilir'],
  ['results', 'nəticə'],
  ['No products found', 'Məhsul tapılmadı'],
  ['Use fewer filters or', 'Daha az filtr istifadə edin və ya'],
  ['remove all', 'hamısını silin'],
  ['Load more', 'Daha çox yüklə'],
  ['Choose options', 'Seçim edin'],
  ['Description', 'Təsvir'],
  ['Specifications', 'Xüsusiyyətlər'],
  ['Related products', 'Oxşar məhsullar'],
  ['You may also like', 'Bunlar da maraqlı ola bilər'],
  ['Share', 'Paylaş'],
  ['Copy link', 'Linki kopyala'],
  ['Home', 'Ana səhifə'],
  ['Breadcrumb', 'Navigasiya'],
  ['Quantity', 'Miqdar'],
  ['Decrease quantity for', 'Miqdarı azalt'],
  ['Increase quantity for', 'Miqdarı artır'],
  ['Adding...', 'Əlavə edilir...'],
  ['Added', 'Əlavə edildi'],
  ['Request a project-specific consultation', 'Layihəyə xüsusi məsləhət tələb edin'],
  ['Leave your contact details and we will call you back.', 'Əlaqə məlumatlarınızı buraxın, sizinlə əlaqə saxlayacağıq.'],
  ['Related collections', 'Əlaqəli kolleksiyalar'],
  ['What our clients say', 'Müştərilərimiz nə deyir'],
  ['Users also often search for', 'İstifadəçilər tez-tez bunları da axtarır'],
  ['Mego has been collaborating with Özkaya Steel for many years. Our cooperation is based on key principles: efficiency, professionalism, and reliability.', 'Mego illərdir Özkaya Steel ilə əməkdaşlıq edir. Əməkdaşlığımız əsas prinsiplərə əsaslanır: səmərəlilik, peşəkarlıq və etibarlılıq.'],
  ['Director of Growth, Mego Supermarkets', 'İnkişaf direktoru, Mego Supermarketlər'],
  ['Commercial refrigeration', 'Peşəkar soyuducu avadanlığı'],
  ['Food prep machines', 'Qida hazırlama maşınları'],
  ['Combi &amp; Convection', 'Kombi və konveksiya'],
  ['Combi & Convection', 'Kombi və konveksiya'],
  ['Ranges &amp; Cookers', 'Plitələr və sobalar'],
  ['Ranges & Cookers', 'Plitələr və sobalar'],
  ['Dining furniture', 'Yemək otağı mebeli'],
  ['Dishwashers', 'Qabyuyan maşınlar'],
  ['Wall-mount hoods', 'Divar montajlı havalandırma'],
  ['Plates &amp; bowls', 'Boşqab və kaseler'],
  ['Plates & bowls', 'Boşqab və kaseler'],

  // Navigation (subset — header injected from index covers most)
  ['Categories', 'Kateqoriyalar'],
  ['Business type', 'Biznes növü'],
  ['Search products', 'Məhsul axtar'],
  ['Search 5,000+ products', '5000+ məhsul axtar'],
  ['Clear search term', 'Axtarışı təmizlə'],
  ['Skip to content', 'Məzmuna keç'],
  ['Enquiry list', 'Sorğu siyahısı'],
  ['Log in', 'Daxil ol'],
  ['Log in to check out faster.', 'Daha sürətli sifariş üçün daxil olun.'],
  ['Have an account?', 'Hesabınız var?'],
  ['Language', 'Dil'],
  ['English', 'Azərbaycan'],
  ['View all', 'Hamısına bax'],
  ['Add to enquiry list', 'Sorğu siyahısına əlavə et'],
  ['Add to cart', 'Səbətə əlavə et'],
  ['Saved!', 'Saxlanıldı!'],
  ['Sold out', 'Satılıb'],
  ['Unavailable', 'Mövcud deyil'],
  ['Vendor:', 'İstehsalçı:'],
  ['Regular price', 'Adi qiymət'],
  ['Sale price', 'Endirim qiyməti'],
  ['Your cart', 'Səbətiniz'],
  ['Your cart is empty', 'Səbətiniz boşdur'],
  ['Continue shopping', 'Alış-verişə davam et'],
  ['Loading...', 'Yüklənir...'],
  ['Subtotal', 'Ara cəmi'],
  ['Proceed to checkout', 'Sifarişi rəsmiləşdir'],
  ['Close', 'Bağla'],
  ['Menu', 'Menyu'],
  ['Search', 'Axtar'],
  ['Subscribe', 'Abunə ol'],
  ['Quick links', 'Sürətli keçidlər'],
  ['Catalogue', 'Kataloq'],
  ['Catalog', 'Kataloq'],
  ['About us', 'Haqqımızda'],
  ['Portfolio', 'Portfolio'],
  ['Privacy Policy', 'Məxfilik siyasəti'],
  ['Terms &amp; Conditions', 'Şərtlər və qaydalar'],
  ['Terms & Conditions', 'Şərtlər və qaydalar'],
  ['Cookies Policy', 'Kukilər siyasəti'],
  ['Delivery &amp; Payment', 'Çatdırılma və ödəniş'],
  ['Delivery & Payment', 'Çatdırılma və ödəniş'],
  ['Returns &amp; Withdrawals', 'Qaytarma və imtina'],
  ['Returns & Withdrawals', 'Qaytarma və imtina'],
  ['Legal notice', 'Hüquqi bildiriş'],
  ['Contact us', 'Bizimlə əlaqə'],
  ['Subscribe to our emails', 'E-poçtumuza abunə olun'],
  ['Payment methods', 'Ödəniş üsulları'],
  ['Copyright &copy; 2026 Özkaya Steel. All rights reserved.', 'Copyright &copy; 2026 Özkaya Steel. Bütün hüquqlar qorunur.'],
  ['{{ count }} item', '{{ count }} məhsul'],
  ['{{ count }} items', '{{ count }} məhsul'],
  ['0 items', '0 məhsul'],
  ['Restaurant', 'Restoran'],
  ['Fridges &amp; freezers', 'Soyuducular və dondurucular'],
  ['Fridges & freezers', 'Soyuducular və dondurucular'],
];

const facetReplacements = [
  ['Brand (0 selected)', 'Brend (0 seçilmiş)'],
  ['Type (0 selected)', 'Tip (0 seçilmiş)'],
  ['Material (0 selected)', 'Material (0 seçilmiş)'],
  ['Capacity (0 selected)', 'Tutum (0 seçilmiş)'],
  ['>Brand<', '>Brend<'],
  ['>Type<', '>Tip<'],
  ['>Material<', '>Material<'],
  ['>Capacity<', '>Tutum<'],
  ['aria-label="Brand', 'aria-label="Brend'],
  ['aria-label="Type', 'aria-label="Tip'],
  ['aria-label="Material', 'aria-label="Material'],
  ['aria-label="Capacity', 'aria-label="Tutum'],
  ['0 selected', '0 seçilmiş'],
  ['>Reset<', '>Sıfırla<'],
  ['>Clear filter<', '>Filtr təmizlə<'],
  ['The highest price is', 'Ən yüksək qiymət'],
  ['Collection menu', 'Kolleksiya menyusu'],
  ['Featured', 'Seçilmiş'],
  ['Best selling', 'Ən çox satılan'],
  ['Alphabetically, A-Z', 'Əlifba sırası, A-Z'],
  ['Alphabetically, Z-A', 'Əlifba sırası, Z-A'],
  ['Price, low to high', 'Qiymət, aşağıdan yuxarı'],
  ['Price, high to low', 'Qiymət, yuxarıdan aşağı'],
  ['Date, old to new', 'Tarix, köhnədən yeniə'],
  ['Date, new to old', 'Tarix, yeniədən köhnəyə'],
  ['Filtr:', 'Filtr:'],
  ['>Brand</', '>Brend</'],
  ['>Type</', '>Tip</'],
  ['>Material</', '>Material</'],
  ['>Capacity</', '>Tutum</'],
  ['facets__summary-label">Brand', 'facets__summary-label">Brend'],
  ['facets__summary-label">Type', 'facets__summary-label">Tip'],
  ['facets__summary-label">Material', 'facets__summary-label">Material'],
  ['facets__summary-label">Capacity', 'facets__summary-label">Tutum'],
  ['<legend class="visually-hidden">Brand</legend>', '<legend class="visually-hidden">Brend</legend>'],
  ['<legend class="visually-hidden">Type</legend>', '<legend class="visually-hidden">Tip</legend>'],
  ['class="facets__reset link underlined-link">\n                              Reset', 'class="facets__reset link underlined-link">\n                              Sıfırla'],
];

const productSpecReplacements = [
  ['View full details', 'Tam detallara bax'],
  ['Physical dimensions', 'Fiziki ölçülər'],
  ['Temperature &amp; refrigeration', 'Temperatur və soyutma'],
  ['Temperature & refrigeration', 'Temperatur və soyutma'],
  ['Energy &amp; electrical', 'Enerji və elektrik'],
  ['Energy & electrical', 'Enerji və elektrik'],
  ['Logistics &amp; shipping', 'Logistika və çatdırılma'],
  ['Logistics & shipping', 'Logistika və çatdırılma'],
  ['Delivery', 'Çatdırılma'],
  ['External dimensions (W×D×H)', 'Xarici ölçülər (E×D×H)'],
  ['Internal dimensions (W×D×H)', 'Daxili ölçülər (E×D×H)'],
  ['Packed dimensions (W×D×H)', 'Qablaşdırma ölçüləri (E×D×H)'],
  ['Min temperature', 'Min temperatur'],
  ['Max temperature', 'Maks temperatur'],
  ['Net weight', 'Xalis çəki'],
  ['Gross weight', 'Ümumi çəki'],
  ['Shelf dimensions', 'Rəf ölçüləri'],
  ['Cooling type', 'Soyutma tipi'],
  ['Defrost type', 'Defrost tipi'],
  ['Climate class', 'İqlim sinfi'],
  ['Electric power', 'Elektrik gücü'],
  ['Voltage / frequency', 'Gərginlik / tezlik'],
  ['Energy class', 'Enerji sinfi'],
  ['Energy consumption (24h)', 'Enerji sərfi (24 saat)'],
  ['Refrigerant charge', 'Soyuducu maye doldurması'],
  ['Media gallery', 'Media qalereyası'],
  ['Commercial Refrigerators', 'Kommersiya soyuducuları'],
  ['Remove Hanging Rear-Service Refrigerated Cabinet, +2/+4°C', 'Arxa xidmətli asma soyuducu şkafı sil, +2/+4°C'],
  ['Quantity for Hanging Rear-Service Refrigerated Cabinet, +2/+4°C', 'Arxa xidmətli asma soyuducu şkaf miqdarı, +2/+4°C'],
  ['Decrease quantity for Hanging Rear-Service Refrigerated Cabinet, +2/+4°C', 'Arxa xidmətli asma soyuducu şkaf miqdarını azalt, +2/+4°C'],
  ['Increase quantity for Hanging Rear-Service Refrigerated Cabinet, +2/+4°C', 'Arxa xidmətli asma soyuducu şkaf miqdarını artır, +2/+4°C'],
  ['Paylaş information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.', 'Brendiniz haqqında məlumatı müştərilərinizlə paylaşın. Məhsulu təsvir edin, elanlar verin və ya mağazanıza xoş gəlmisiniz deyin.'],
  ['Ventilated', 'Ventilyasiyalı'],
  ['Automatic', 'Avtomatik'],
  ['Electronic', 'Elektron'],
  ['Frequently Asked Questions', 'Tez-tez verilən suallar'],
  ['Construction &amp; design', 'Konstruksiya və dizayn'],
  ['Construction & design', 'Konstruksiya və dizayn'],
  ['Materials &amp; finish', 'Materiallar və finish'],
  ['Materials & finish', 'Materiallar və finish'],
  ['Product details', 'Məhsul detalları'],
  ['Accessories &amp; contents', 'Aksesuarlar və tərkib'],
  ['Accessories & contents', 'Aksesuarlar və tərkib'],
  ['Origin &amp; customs', 'Mənşə və gömrük'],
  ['Origin & customs', 'Mənşə və gömrük'],
  ['<dt>Volume</dt>', '<dt>Tutum</dt>'],
  ['<dt>Refrigerant</dt>', '<dt>Soyuducu maye</dt>'],
  ['<dt>Device type</dt>', '<dt>Cihaz tipi</dt>'],
  ['<dt>Control type</dt>', '<dt>İdarəetmə tipi</dt>'],
  ['<dt>Doors</dt>', '<dt>Qapılar</dt>'],
  ['<dt>Shelves</dt>', '<dt>Rəflər</dt>'],
  ['<dt>Feet / legs</dt>', '<dt>Ayaqlar</dt>'],
  ['<dt>Door lock</dt>', '<dt>Qapı kilidi</dt>'],
  ['<dt>Interior lighting</dt>', '<dt>Daxili işıqlandırma</dt>'],
  ['<dt>Thermometer</dt>', '<dt>Termometr</dt>'],
  ['<dt>Noise level</dt>', '<dt>Səs səviyyəsi</dt>'],
  ['<dt>Exterior finish</dt>', '<dt>Xarici finish</dt>'],
  ['<dt>Interior finish</dt>', '<dt>Daxili finish</dt>'],
  ['<dt>Product line</dt>', '<dt>Məhsul xətti</dt>'],
  ['<dt>Annual energy consumption</dt>', '<dt>İllik enerji sərfi</dt>'],
  ['<dt>Energy efficiency index</dt>', '<dt>Enerji səmərəliliyi indeksi</dt>'],
  ['<dt>EPREL number</dt>', '<dt>EPREL nömrəsi</dt>'],
  ['<dt>Country of origin</dt>', '<dt>İstehsal ölkəsi</dt>'],
  ['<dt>Country of manufacture</dt>', '<dt>İstehsal ölkəsi</dt>'],
  ['<dt>HS code</dt>', '<dt>HS kodu</dt>'],
  ['<dt>Included accessories</dt>', '<dt>Daxil olan aksesuarlar</dt>'],
  ['Tabletop display cooler', 'Stolüstü vitrin soyuducu'],
  ['1 heated hinged glass door', '1 isidilmiş menteşeli şüşə qapı'],
  ['3 wire shelves black', '3 qara tel rəf'],
  ['4 adjustable feet', '4 tənzimlənən ayaq'],
  ['LED cold white vertically', 'Şaquli soyuq ağ LED'],
  ['Blade &amp; performance', 'Bıçaq və performans'],
  ['Blade & performance', 'Bıçaq və performans'],
  ['Documents &amp; Certificates', 'Sənədlər və sertifikatlar'],
  ['Documents & Certificates', 'Sənədlər və sertifikatlar'],
  ['Documents', 'Sənədlər'],
  ['Certifications', 'Sertifikatlar'],
  ['<dt>Connection type</dt>', '<dt>Qoşulma tipi</dt>'],
  ['<dt>Construction type</dt>', '<dt>Konstruksiya tipi</dt>'],
  ['<dt>Mounting type</dt>', '<dt>Montaj tipi</dt>'],
  ['<dt>Intended use</dt>', '<dt>Təyinat</dt>'],
  ['<dt>Manufacturer code</dt>', '<dt>İstehsalçı kodu</dt>'],
  ['<dt>Motor speed</dt>', '<dt>Motor sürəti</dt>'],
  ['<dt>Custom sizes available</dt>', '<dt>Fərdi ölçülər mövcuddur</dt>'],
  ['<dt>Material</dt>', '<dt>Material</dt>'],
  ['<dd>Black</dd>', '<dd>Qara</dd>'],
  ['<dd>Stainless steel AISI 304</dd>', '<dd>AISI 304 paslanmayan polad</dd>'],
  ['<dd>Weld-in sink bowl</dd>', '<dd>Qaynaqlı moyka qabı</dd>'],
  ['<dd>Matt (cold-pressed)</dd>', '<dd>Mat (soyuq preslənmiş)</dd>'],
  ['<dd>Commercial kitchen wash / prep basin</dd>', '<dd>Kommersiya mətbəxi yuyulma / hazırlıq qabı</dd>'],
  ['<dd>Chilled front-of-house display and service of caviar</dd>', '<dd>Kaviarın soyudulmuş vitrin və xidmət göstərilməsi</dd>'],
  ['<dd>All-metal body, DC motor, stainless-steel 7 L bowl</dd>', '<dd>Tam metal korpus, DC motor, 7 L paslanmayan polad qabaq</dd>'],
  ['<dd>Waste 1 1/2" (standard)</dd>', '<dd>Tullantı 1 1/2" (standart)</dd>'],
  ['<dd>Cold-pressed, weld-in / drop-in, rounded corners</dd>', '<dd>Soyuq preslənmiş, qaynaqlı / daxil edilən, yuvarlaq künclər</dd>'],
  ['<dd>Weld-in / drop-in to worktop</dd>', '<dd>İş səthinə qaynaqlı / daxil edilən</dd>'],
  ['<dd>75-660 (DC variable) RPM</dd>', '<dd>75-660 (DC dəyişkən) döv/dəq</dd>'],
  ['<dd>Poland</dd>', '<dd>Polşa</dd>'],
  ['<dd>ISO 9001</dd>', '<dd>ISO 9001</dd>'],
];

const faqReplacements = [
  ['Do I need to register to place an order?', 'Sifariş vermək üçün qeydiyyat lazımdır?'],
  ['Who can place an order on the website?', 'Saytda kim sifariş verə bilər?'],
  ['Businesses in the HoReCa sector, including restaurants, cafés, bars, hotels, catering companies, as well as sole proprietors and legal entities.', 'Peşəkar iaşə sektorundakı müəssisələr, o cümlədən restoranlar, kafelər, barlar, otellər, katerinq şirkətləri, habelə fərdi sahibkarlar və hüquqi şəxslər.'],
  ['Are prices shown with or without VAT?', 'Qiymətlər ƏDV ilə və ya ƏDV-siz göstərilir?'],
  ['What payment methods are available?', 'Hansı ödəniş üsulları mövcuddur?'],
  ['Do you offer regular scheduled deliveries?', 'Müntəzəm planlaşdırılmış çatdırılmalar təklif edirsiniz?'],
  ['What should I do if I receive damaged goods?', 'Zədələnmiş mal aldımsa nə etməliyəm?'],
  ['Is there a dedicated account manager?', 'Xüsusi hesab meneceri var?'],
  ['<p>Do I need to register to place an order?</p>', '<p>Xeyr, qeydiyyat olmadan sorğu siyahısına məhsul əlavə edə bilərsiniz.</p>'],
  ['<p>Sifariş vermək üçün qeydiyyat lazımdır?</p>', '<p>Xeyr, qeydiyyat olmadan sorğu siyahısına məhsul əlavə edə bilərsiniz.</p>'],
  ['Businesses in the Peşəkar iaşə sector, including restaurants, cafés, bars, hotels, catering companies, as well as sole proprietors and legal entities.', 'Peşəkar iaşə sektorundakı müəssisələr, o cümlədən restoranlar, kafelər, barlar, otellər, katerinq şirkətləri, habelə fərdi sahibkarlar və hüquqi şəxslər.'],
  ['<p>Businesses in the Peşəkar iaşə sector, including restaurants, cafés, bars, hotels, catering companies, as well as sole proprietors and legal entities.</p>', '<p>Peşəkar iaşə sektorundakı müəssisələr, o cümlədən restoranlar, kafelər, barlar, otellər, katerinq şirkətləri, habelə fərdi sahibkarlar və hüquqi şəxslər.</p>'],
  ['<p>Are prices shown with or without VAT?</p>', '<p>Qiymətlər ƏDV daxil olmaqla göstərilir, əgər başqa qeyd edilməyibsə.</p>'],
  ['<p>Qiymətlər ƏDV ilə və ya ƏDV-siz göstərilir?</p>', '<p>Qiymətlər ƏDV daxil olmaqla göstərilir, əgər başqa qeyd edilməyibsə.</p>'],
  ['<p>What payment methods are available?</p>', '<p>Bank köçürməsi və razılaşdırılmış ödəniş şərtləri mövcuddur.</p>'],
  ['<p>Hansı ödəniş üsulları mövcuddur?</p>', '<p>Bank köçürməsi və razılaşdırılmış ödəniş şərtləri mövcuddur.</p>'],
  ['<p>Do you offer regular scheduled deliveries?</p>', '<p>Bəli, müntəzəm çatdırılma cədvəli üzrə razılaşma mümkündür.</p>'],
  ['<p>Müntəzəm planlaşdırılmış çatdırılmalar təklif edirsiniz?</p>', '<p>Bəli, müntəzəm çatdırılma cədvəli üzrə razılaşma mümkündür.</p>'],
  ['<p>What should I do if I receive damaged goods?</p>', '<p>Çatdırılma zamanı zədələnmə aşkar etdikdə dərhal bizimlə əlaqə saxlayın və foto/video sübut təqdim edin.</p>'],
  ['<p>Zədələnmiş mal aldımsa nə etməliyəm?</p>', '<p>Çatdırılma zamanı zədələnmə aşkar etdikdə dərhal bizimlə əlaqə saxlayın və foto/video sübut təqdim edin.</p>'],
  ['<p>Is there a dedicated account manager?</p>', '<p>Bəli, daimi müştərilər üçün xüsusi hesab meneceri təyin olunur.</p>'],
  ['<p>Xüsusi hesab meneceri var?</p>', '<p>Bəli, daimi müştərilər üçün xüsusi hesab meneceri təyin olunur.</p>'],
];

const collectionReplacements = {
  'fridges-and-freezers': [
    ['Commercial fridges and freezers for kitchens', 'Peşəkar mətbəx üçün soyuducu və dondurucular'],
    ['Commercial fridges and freezers - upright reach-ins, undercounter cabinets, chest freezers and blast chillers for kitchens, shops and storerooms.', 'Peşəkar mətbəx, mağaza və anbarlar üçün şkaf tipli soyuducular, alt dolablar, sandıq dondurucular və şok soyuducular.'],
    ['Commercial fridges and freezers — upright reach-ins, undercounter cabinets, chest freezers and blast chillers for kitchens, shops and storerooms.', 'Peşəkar mətbəx, mağaza və anbarlar üçün şkaf tipli soyuducular, alt dolablar, sandıq dondurucular və şok soyuducular.'],
    ['Every service stands on cold storage that simply works. Fridges &amp; freezers is the back-of-house backbone — upright reach-ins, undercounter cabinets, chest freezers and blast chillers that hold stock at temperature shift after shift. For cold built into the work surface itself, see <a href="/collections/prep-refrigeration">prep refrigeration</a>.', 'Hər xidmət sadəcə işləyən soyuducu saxlamaya dayanır. Soyuducular və dondurucular arxa otağın təməlidir — şkaf tipli soyuducular, alt dolablar, sandıq dondurucular və şok soyuducular ki, növbədən-növbəyə məhsulu temperaturda saxlayır. Soyudmanın iş səthinə inteqrasiya olunduğu hallar üçün baxın: <a href="/collections/prep-refrigeration">Hazırlıq soyuducuları</a>.'],
    ['Every service stands on cold storage that simply works. Fridges & freezers is the back-of-house backbone — upright reach-ins, undercounter cabinets, chest freezers and blast chillers that hold stock at temperature shift after shift. For cold built into the work surface itself, see <a href="/collections/prep-refrigeration">prep refrigeration</a>.', 'Hər xidmət sadəcə işləyən soyuducu saxlamaya dayanır. Soyuducular və dondurucular arxa otağın təməlidir — şkaf tipli soyuducular, alt dolablar, sandıq dondurucular və şok soyuducular ki, növbədən-növbəyə məhsulu temperaturda saxlayır. Soyudmanın iş səthinə inteqrasiya olunduğu hallar üçün baxın: <a href="/collections/prep-refrigeration">Hazırlıq soyuducuları</a>.'],
    ['Every service stands on cold storage that simply works. Soyuducular və dondurucular is the back-of-house backbone — upright reach-ins, undercounter cabinets, chest freezers and blast chillers that hold stock at temperature shift after shift. For cold built into the work surface itself, see <a href="/collections/prep-refrigeration">Hazırlıq soyuducuları</a>.', 'Hər xidmət sadəcə işləyən soyuducu saxlamaya dayanır. Soyuducular və dondurucular arxa otağın təməlidir — şkaf tipli soyuducular, alt dolablar, sandıq dondurucular və şok soyuducular ki, növbədən-növbəyə məhsulu temperaturda saxlayır. Soyudmanın iş səthinə inteqrasiya olunduğu hallar üçün baxın: <a href="/collections/prep-refrigeration">Hazırlıq soyuducuları</a>.'],
    ['>prep refrigeration</a>', '>Hazırlıq soyuducuları</a>'],
    ['Reliable cold storage is the backbone of every kitchen, shop and bar', 'Etibarlı soyuducu saxlama hər mətbəx, mağaza və barın təməlidir'],
    ['Tefcold Caviar Cooler UR90G-SUB ZERO, 81L, -8/+6°C', 'Tefcold UR90G-SUB ZERO kaviar soyuducusu, 81 L, -8/+6°C'],
    ['Scandomestic SF 115', 'Scandomestic SF 115 soyuducu'],
    ['Freezer Cabinet Swing Glass Door, Triple Glazed, 0 kW', 'Şüşə qapılı dondurucu şkaf, üçqat şüşə, 0 kW'],
    ['Hanging Rear-Service Refrigerated Cabinet, +2/+4°C', 'Arxa xidmətli asma soyuducu şkaf, +2/+4°C'],
    ['Upright Display Freezer, 2-Door, -22/-18°C, R290', 'Şkaf tipli vitrin dondurucu, 2 qapılı, -22/-18°C, R290'],
    ['Hinged Glass Door for Refrigerated Cabinet, Framed', 'Soyuducu şkaf üçün menteşeli şüşə qapı, çərçivəli'],
    ['Refrigerator Combi SKF 340 WD', 'Scandomestic SKF 340 WD kombi soyuducu'],
    ['Saro Upright Freezer Cabinet KYRA G, GN 2/1, 685 L', 'Saro KYRA G şkaf tipli dondurucu, GN 2/1, 685 L'],
    ['Saro Combined Fridge-Freezer GN-60DTV, 258 L, -22/+8°C', 'Saro GN-60DTV kombi soyuducu-dondurucu, 258 L, -22/+8°C'],
  ],
  restaurant: [
    ['Restaurant kitchens earn their keep when every station pulls in the same direction. Plan yours as one line — <a href="/collections/cooking-equipment">cooking equipment</a>, cold storage, prep, pass and <a href="/collections/ventilation">ventilation</a> that keeps the air honest — rather than a shelf of separate purchases. We\'ve spent 30 years in the business helping kitchens open on time.', 'Restoran mətbəxləri hər stansiya eyni istiqamətdə işləyəndə dəyər qazanır. Mətbəxinizi ayrı-ayrı alışlar yığını kimi deyil, vahid xətt kimi planlaşdırın — <a href="/collections/cooking-equipment">Bişirmə avadanlığı</a>, soyuducu saxlama, hazırlıq, pass və <a href="/collections/ventilation">Havalandırma</a> ki, hava təmiz qalsın. 30 ildir mətbəxlərin vaxtında açılmasına kömək edirik.'],
    ['Restaurant equipment for professional kitchens', 'Peşəkar mətbəxlər üçün restoran avadanlıqları'],
    ['Restaurant equipment for professional kitchens — sinks, prep tables, mixers and more for commercial food service.', 'Peşəkar mətbəxlər üçün restoran avadanlıqları — moykalar, hazırlıq masaları, mikserlər və digər kommersiya avadanlıqları.'],
    ['Guests judge a room before the first plate arrives. This collection covers', 'Qonaqlar ilk boşqab gəlməzdən otağı qiymətləndirir. Bu kolleksiya əhatə edir'],
    ['Weld-In Sink Bowl, AISI 304 Stainless Steel', 'Qaynaqlı moyka qabı, AISI 304 paslanmayan polad'],
    ['Drop-In Waste Chute Flap, Stainless Steel, 225x160 mm', 'Daxil edilən tullantı lüklü, paslanmayan polad, 225×160 mm'],
    ['Sirman Planetary Mixer Plutone 7 PLUS, 7 L, 75–660 rpm', 'Sirman Plutone 7 PLUS planetar mikser, 7 L, 75–660 döv/dəq'],
    ['Sirman Planetary Mixer Plutone 7 PLUS, 7 L, 75-660 rpm', 'Sirman Plutone 7 PLUS planetar mikser, 7 L, 75–660 döv/dəq'],
    ['Inset Sink Bowl, 450×600×300 mm, Central Drain', 'Daxil edilən moyka, 450×600×300 mm, mərkəzi drain'],
    ['Inset Sink Bowl, 450x600x300 mm, Central Drain', 'Daxil edilən moyka, 450×600×300 mm, mərkəzi drain'],
    ['Was Pizza Dough Proofing Tray, 598 x 398 mm', 'Was pizza xəmir mayalama trayi, 598×398 mm'],
    ['Was Stainless Steel GN Grid, GN 1/1', 'Was paslanmayan polad GN 1/1 grid'],
    ['Was Lid for Pizza Dough Proofing Tray, 600 x 400 mm', 'Was pizza xəmir mayalama trayi qapağı, 600×400 mm'],
    ['Miskastes luka DL1252', 'Özkaya Steel tullantı lüklü DL1252'],
    ['One oven that handles steam, dry heat and everything in between changes', 'Buxar, quru isti və arasındakı hər şeyi idarə edən soba'],
    ['Cold storage is the one system a kitchen can\'t run without, so', 'Soyuducu saxlama mətbəxin olmazsa-olmaz sistemidir'],
    ['Hand prep swallows hours that a machine gives back. Planetary mixers and', 'Əl ilə hazırlıq saatlar aparır, maşın isə vaxt qaytarır. Planetar mikserlər və'],
    ['Nothing stalls a good service like a wash-up that can\'t keep pace.', 'Yaxşı xidməti heç nə dayandırmır, pass tempinə uyğun olmayan qabyuyan istisna olmaqla.'],
    ['Plates carry the menu — literally, and in how the food reads', 'Boşqablar menyunu daşıyır — həm hərfi mənada, həm də yeməyin görünüşündə'],
    ['A professional range takes the hardest shift in the kitchen — lit', 'Peşəkar plitə mətbəxdə ən ağır növbəni çəkir'],
  ],
};

const productReplacements = {
  'ur90g-sub-zero': [
    ['Caviar cooler UR90G-SUB ZERO — 81L, black interior', 'Tefcold UR90G-SUB ZERO kaviar soyuducusu — 81 L, qara interyer'],
    ['Caviar cooler UR90G-SUB ZERO - 81L, black interior', 'Tefcold UR90G-SUB ZERO kaviar soyuducusu — 81 L, qara interyer'],
    ['Tefcold Caviar Cooler UR90G-SUB ZERO, 81L, -8/+6°C', 'Tefcold UR90G-SUB ZERO kaviar soyuducusu, 81 L, -8/+6°C'],
    ['This 81L tabletop cooler is purpose-built for front-of-house caviar service, with a heated glass door and black interior for display. See full specs.', 'Bu 81 L stolüstü soyuducu kaviar xidməti üçün hazırlanıb; isidilmiş şüşə qapı və qara interyer vitrin üçün nəzərdə tutulub. Tam xüsusiyyətlərə bax.'],
    ['Tabletop 81L caviar cooler, heated glass door, black interior, -6 to 0°C', 'Stolüstü 81 L kaviar soyuducusu, isidilmiş şüşə qapı, qara interyer, -6°C-dən 0°C-ə'],
    ['Caviar Cooler, 81L, -8/+6°C', 'Kaviar soyuducusu, 81 L, -8/+6°C'],
    ['Professional caviar cooler with precise temperature control for premium storage.', 'Premium saxlama üçün dəqiq temperatur nəzarətli peşəkar kaviar soyuducusu.'],
    ['Purpose-built for front-of-house caviar service, this 81L tabletop cooler holds the -6 to 0°C band caviar needs to keep its taste and texture, with a heated glass door that resists fogging mid-service. Ventilated cooling keeps the temperature even from the top shelf to the bottom, so every tin sits at its best.', 'Kaviar xidməti üçün hazırlanmış bu 81 L stolüstü soyuducu -6°C-dən 0°C-ə qədər temperatur diapazonunu saxlayır, kaviarın dadını və strukturunu qoruyur; isidilmiş şüşə qapı xidmət zamanı buğulanmanın qarşısını alır. Ventilyasiyalı soyutma rəfdən rəfə bərabər temperatur təmin edir.'],
    ['The black interior and exterior give the display a premium, low-glare look, vertical LED lighting picks out the product without adding heat, and adjustable shelves and feet let it drop into a tight bar or counter space. It is a compact, single-purpose upgrade over holding caviar in general kitchen fridge space.', 'Qara interyer və eksterner premium, az parlaq görünüş verir; şaquli LED işıqlandırma məhsulu vurğulayır, istilik əlavə etmir; tənzimlənən rəflər və ayaqlar dar bar və ya stend sahəsinə uyğunlaşdırma imkanı verir. Ümumi mətbəx soyuducusunda saxlamaya alternativ olaraq kompakt, təyinatlı həlldir.'],
    ['Purpose-built for front-of-house caviar service, this 81L tabletop cooler holds the -6 to 0°C band caviar needs to keep its taste and texture, with a heated glass door that resists fogging mid-service. Ventilated cooling keeps the temperature even from the top shelf to the bottom, so every tin sits at its best.The black interior and exterior give the display a premium, low-glare look, vertical LED lighting picks out the product without adding heat, and adjustable shelves and feet let it drop into a tight bar or counter space. It is a compact, single-purpose upgrade over holding caviar in general kitchen fridge space.', 'Kaviar xidməti üçün hazırlanmış bu 81 L stolüstü soyuducu -6°C-dən 0°C-ə qədər temperatur diapazonunu saxlayır, kaviarın dadını və strukturunu qoruyur; isidilmiş şüşə qapı xidmət zamanı buğulanmanın qarşısını alır. Ventilyasiyalı soyutma rəfdən rəfə bərabər temperatur təmin edir. Qara interyer və eksterner premium, az parlaq görünüş verir; şaquli LED işıqlandırma məhsulu vurğulayır, istilik əlavə etmir; tənzimlənən rəflər və ayaqlar dar bar və ya stend sahəsinə uyğunlaşdırma imkanı verir.'],
  ],
  'scandomestic-sf-115': [
    ['Scandomestic SF 115\n &ndash; Özkaya Steel', 'Scandomestic SF 115 soyuducu\n &ndash; Özkaya Steel'],
    ['Scandomestic SF 115', 'Scandomestic SF 115 soyuducu'],
    ['Scandomestic SF 115 soyuducu by Scandomestic. Commercial catering equipment available at Özkaya Steel.', 'Scandomestic SF 115 soyuducu — Scandomestic. Özkaya Steel-də peşəkar iaşə avadanlığı.'],
    ['Compact undercounter refrigerator for professional kitchens.', 'Peşəkar mətbəxlər üçün kompakt alt dolab soyuducu.'],
    ['Undercounter refrigerator with solid door for back-of-house cold storage.', 'Arxa otaq soyuducu saxlaması üçün qapalı qapılı alt dolab soyuducu.'],
  ],
  'termofrost-eco-clear-x': [
    ['Freezer Cabinet Swing Glass Door, Triple Glazed, 0 kW\n &ndash; Özkaya Steel', 'Şüşə qapılı dondurucu şkaf, üçqat şüşə, 0 kW\n &ndash; Özkaya Steel'],
    ['Freezer Cabinet Swing Glass Door, Triple Glazed, 0 kW', 'Şüşə qapılı dondurucu şkaf, üçqat şüşə, 0 kW'],
    ['Şüşə qapılı dondurucu şkaf, üçqat şüşə, 0 kW by Schott. Commercial catering equipment available at Özkaya Steel.', 'Şüşə qapılı dondurucu şkaf, üçqat şüşə, 0 kW — Schott. Özkaya Steel-də peşəkar iaşə avadanlığı.'],
    ['Termofrost Eco Clear X', 'Termofrost Eco Clear X'],
    ['Glass door freezer cabinet for retail and food service display.', 'Pərakəndə satış və qida xidməti vitrini üçün şüşə qapılı dondurucu şkaf.'],
    ['Energy-free triple-glazed door system for freezer display cabinets', 'Dondurucu vitrin şkafları üçün enerji tələb etməyən üçqat şüşəli qapı sistemi'],
  ],
  'oscartielle-nettuno': [
    ['Hanging Rear-Service Refrigerated Cabinet, +2/+4°C\n &ndash; Özkaya Steel', 'Arxa xidmətli asma soyuducu şkaf, +2/+4°C\n &ndash; Özkaya Steel'],
    ['Hanging Rear-Service Refrigerated Cabinet, +2/+4°C', 'Arxa xidmətli asma soyuducu şkaf, +2/+4°C'],
    ['Arxa xidmətli asma soyuducu şkaf, +2/+4°C by Oscartielle. Commercial catering equipment available at Özkaya Steel.', 'Arxa xidmətli asma soyuducu şkaf, +2/+4°C — Oscartielle. Özkaya Steel-də peşəkar iaşə avadanlığı.'],
    ['"title": "Hanging Rear-Service Refrigerated Cabinet, +2\\/+4°C"', '"title": "Arxa xidmətli asma soyuducu şkaf, +2/+4°C"'],
    ['Oscartielle NETTUNO', 'Oscartielle NETTUNO'],
    ['Rear-service refrigerated cabinet for professional kitchen pass-through service.', 'Peşəkar mətbəx pass-through xidməti üçün arxa xidmətli soyuducu şkaf.'],
    ['Back-counter display cabinet for fresh dairy, deli and produce', 'Təzə süd məhsulları, delikates və tərəvəz üçün arxa stend vitrin soyuducusu'],
  ],
  'aifo-weld-in-sink-bowl': [
    ['Weld-In Sink Bowl, AISI 304 Stainless Steel\n &ndash; Özkaya Steel', 'Qaynaqlı moyka qabı, AISI 304 paslanmayan polad\n &ndash; Özkaya Steel'],
    ['Weld-In Sink Bowl, AISI 304 Stainless Steel', 'Qaynaqlı moyka qabı, AISI 304 paslanmayan polad'],
    ['Weld-in AISI 304 stainless steel sink bowl by AIFO — central drain, six sizes from 340×400×200 to 600×500×300 mm. Commercial kitchen wash basin at Vitrum.', 'AIFO qaynaqlı AISI 304 paslanmayan polad moyka qabı — mərkəzi drain, 340×400×200-dən 600×500×300 mm-ə qədər 6 ölçü. Özkaya Steel-də peşəkar mətbəx moykası.'],
    ['Weld-in AISI 304 stainless steel sink bowl by AIFO — central drain, six sizes from 340×400×200 to 600×500×300 mm. Commercial kitchen wash basin at Özkaya Steel.', 'AIFO qaynaqlı AISI 304 paslanmayan polad moyka qabı — mərkəzi drain, 340×400×200-dən 600×500×300 mm-ə qədər 6 ölçü. Özkaya Steel-də peşəkar mətbəx moykası.'],
    ['Weld-in AISI 304 paslanmayan polad sink bowl by AIFO — central drain, six sizes from 340×400×200 to 600×500×300 mm. Commercial kitchen wash basin at Özkaya Steel.', 'AIFO qaynaqlı AISI 304 paslanmayan polad moyka qabı — mərkəzi drain, 340×400×200-dən 600×500×300 mm-ə qədər 6 ölçü. Özkaya Steel-də peşəkar mətbəx moykası.'],
    ['Weld-in AISI 304 sink bowl for commercial worktops, in six sizes', 'Peşəkar iş səthləri üçün qaynaqlı AISI 304 moyka qabı, 6 ölçüdə'],
    ['A weld-in stainless steel sink bowl from AIFO, cold-pressed in AISI 304 with a matt finish and rounded internal corners for easy cleaning. Each bowl has a 1 1\\/2\\" central drain as standard and a flat welding edge, so it integrates cleanly into a stainless steel worktop for a dedicated wash or prep station.', 'AIFO qaynaqlı paslanmayan polad moyka qabı AISI 304-dən soyuq presləmə ilə hazırlanır, mat finish və yuvarlaq daxili künclər təmizliyi asanlaşdırır. Hər qabda standart olaraq 1 1\\/2\\" mərkəzi drain var, düz qaynaq kənarı paslanmayan polad iş səthinə inteqrasiya olunur.'],
    ['A weld-in stainless steel sink bowl from AIFO, cold-pressed in AISI 304 with a matt finish and rounded internal corners for easy cleaning. Each bowl has a 1 1/2" central drain as standard and a flat welding edge, so it integrates cleanly into a stainless steel worktop for a dedicated wash or prep station.', 'AIFO qaynaqlı paslanmayan polad moyka qabı AISI 304-dən soyuq presləmə ilə hazırlanır, mat finish və yuvarlaq daxili künclər təmizliyi asanlaşdırır. Hər qabda standart olaraq 1 1/2" mərkəzi drain var, düz qaynaq kənarı paslanmayan polad iş səthinə inteqrasiya olunur.'],
    ['Pick the size that fits your bench from the dropdown — six central-drain sizes, from 340 × 400 × 200 mm up to 600 × 500 × 300 mm. AIFO\'s weld-in range extends further, with 200 and 250 mm depths and left- or right-hand drains available to order.', 'Dropdowndan stendinizə uyğun ölçünü seçin — 340×400×200 mm-dən 600×500×300 mm-ə qədər 6 mərkəzi drain ölçüsü. AIFO qaynaqlı seriyası 200 və 250 mm dərinliklər, sol və ya sağ drain ilə sifarişə açıqdır.'],
    ['Made in Poland to ISO 9001, these bowls suit restaurants, hotels, catering kitchens and bars wherever a robust, food-safe basin is welded or dropped into a worktop.', 'ISO 9001 ilə Polşada istehsal olunur; restoran, otel, katerinq mətbəxi və barlarda möhkəm, qida təhlükəsiz qab tələb olunan iş səthlərinə uyğundur.'],
    ['Six central-drain sizes 340×400×200 to 600×500×300 mm. The full AIFO KZ-P range adds 200/250 mm depths and left/right-hand drains, to order.', '340×400×200-dən 600×500×300 mm-ə qədər 6 mərkəzi drain ölçüsü. Tam AIFO KZ-P seriyası 200/250 mm dərinlik və sol/sağ drain ilə sifarişə verilir.'],
    ['AIFO stainless steel weld-in sink bowl', 'AIFO paslanmayan polad qaynaqlı moyka qabı'],
    ['AIFO weld-in sink bowls in a stainless steel wash station', 'Paslanmayan polad yuyulma stansiyasında AIFO qaynaqlı moyka qabları'],
    ['Bravo Inox deep-drawn stainless steel weld-in sink basin', 'Bravo Inox dərin cəkilmiş paslanmayan polad qaynaqlı moyka'],
    ['Bravo Inox weld-in stainless steel sink basin, square', 'Bravo Inox qaynaqlı paslanmayan polad kvadrat moyka'],
    ['Washing station  with two sink', 'İki moykali yuyulma stansiyası'],
    ['Hand wash sink', 'Əl yuma moykası'],
    ['A weld-in stainless steel sink bowl from AIFO, cold-pressed in AISI 304 with a matt finish and rounded internal corners for easy cleaning. Each bowl has a 1 1/2" central drain as standard and a flat welding edge, so it integrates cleanly into a stainless steel worktop for a dedicated wash or prep station.', 'AIFO qaynaqlı paslanmayan polad moyka qabı AISI 304-dən soyuq presləmə ilə hazırlanır, mat finish və yuvarlaq daxili künclər təmizliyi asanlaşdırır. Hər qabda standart olaraq 1 1/2" mərkəzi drain var, düz qaynaq kənarı paslanmayan polad iş səthinə inteqrasiya olunur.'],
    ['Weld-In Sink Basin, Deep-Drawn Paslanmayan polad', 'Qaynaqlı moyka, dərin cəkilmiş paslanmayan polad'],
    ['Weld-In Sink Basin, Deep-Drawn Stainless Steel', 'Qaynaqlı moyka, dərin cəkilmiş paslanmayan polad'],
    ['Inset Sink Bowl, 450×600×300 mm, Central Drain', 'Daxil edilən moyka, 450×600×300 mm, mərkəzi drain'],
    ['Inset Sink Bowl, 450x600x300 mm, Central Drain', 'Daxil edilən moyka, 450×600×300 mm, mərkəzi drain'],
    ['Inset Sink Bowl, 500×600×300 mm, Left-Hand Drain', 'Daxil edilən moyka, 500×600×300 mm, sol drain'],
    ['Bain-Marie Sink Bowl, 400×500×300 mm, Central Drain', 'Bain-marie moyka qabı, 400×500×300 mm, mərkəzi drain'],
    ['Bain-Marie Sink Bowl, 400×500×300 mm, Left-Hand', 'Bain-marie moyka qabı, 400×500×300 mm, sol drain'],
    ['Double-Sink Washing Station, 1200×650×900 mm', 'İki moykali yuyulma stansiyası, 1200×650×900 mm'],
    ['Double Sink Table With Undershelf, AISI 304', 'Alt rəflı iki moykalı masa, AISI 304'],
    ['Freestanding Hand Wash Sink Station, 400x650x900mm', 'Döşəmədayan əl yuma moyka stansiyası, 400×650×900 mm'],
    ['Sink with wall mount', 'Divar montajlı moyka'],
    ['Saro Freestanding Hand Wash Sink Mona, 500x700x850 mm', 'Saro Mona döşəmədayan əl yuma moykası, 500×700×850 mm'],
    ['Freestanding Hand Wash Sink, 500x700x850 mm', 'Döşəmədayan əl yuma moykası, 500×700×850 mm'],
    ['Saro Mona Sink', 'Saro Mona moykası'],
    ['Sink 40x50x30сm, L.H.', 'Moyka 40×50×30 sm, sol'],
    ['Sink 50x60x30сm, L.H.', 'Moyka 50×60×30 sm, sol'],
    ['AIFO KZ-P', 'AIFO KZ-P'],
    ['Stainless steel weld-in sink bowl for commercial kitchen installation.', 'Kommersiya mətbəxi quraşdırması üçün paslanmayan polad qaynaqlı moyka qabı.'],
  ],
  'miskastes-luka-dl1252': [
    ['Drop-In Waste Chute Flap, Stainless Steel, 225x160 mm\n &ndash; Özkaya Steel', 'Daxil edilən tullantı lüklü, paslanmayan polad, 225×160 mm\n &ndash; Özkaya Steel'],
    ['Drop-In Waste Chute Flap, Stainless Steel, 225x160 mm', 'Daxil edilən tullantı lüklü, paslanmayan polad, 225×160 mm'],
    ['Material: Stainless steel Color: Silver Dimensions of the built-in part: 205x140mm External parts dimensions: 225x160mm', 'Material: Paslanmayan polad Rəng: Gümüş Daxil edilən hissənin ölçüsü: 205×140 mm Xarici hissənin ölçüsü: 225×160 mm'],
    ['Built-in countertop waste bin flap for professional kitchen worktops', 'Peşəkar mətbəx iş səthləri üçün daxil edilən tullantı lüklü'],
    ['The Özkaya Steel DL1252 is a drop-in countertop waste bin flap for built-in waste chute installations in professional kitchens, bars, and café prep areas. Fabricated from stainless steel with a silver finish, it integrates cleanly into any worktop surface, keeping waste disposal discreet and the counter clear during service.', 'Özkaya Steel DL1252 peşəkar mətbəx, bar və kafe hazırlıq sahələrində daxil edilən tullantı lüklü quraşdırmaları üçün stolüstü tullantı lüklüdür. Paslanmayan poladdan gümüş finish ilə hazırlanır, iş səthinə təmiz inteqrasiya olur, xidmət zamanı stendi sərbəst saxlayır.'],
    ['We supply the DL1252 as a made-to-order insert sized to fit a standard cutout, making it a practical upgrade for new builds and refurbishments alike — whether in a restaurant pass, barista station, or hotel kitchen. Bizimlə əlaqə for custom sizes and a quote.', 'DL1252 standart kəsimə uyğun sifarişlə hazırlanan insert kimi təqdim olunur — restoran pass, barista stendi və ya otel mətbəxi üçün yeni layihə və ya yeniləmələrdə praktik həlldir. Fərdi ölçü və qiymət üçün bizimlə əlaqə saxlayın.'],
    ['Miskastes luka DL1252', 'Özkaya Steel tullantı lüklü DL1252'],
  ],
  'sirman-plutone-7': [
    ['Sirman Plutone 7 PLUS planetary mixer, 7 L, 75–660 rpm', 'Sirman Plutone 7 PLUS planetar mikser, 7 L, 75–660 döv/dəq'],
    ['Sirman Plutone 7 PLUS planetary mixer, 7 L, 75-660 rpm\n &ndash; Özkaya Steel', 'Sirman Plutone 7 PLUS planetar mikser, 7 L, 75–660 döv/dəq\n &ndash; Özkaya Steel'],
    ['Sirman Plutone 7 PLUS planetary mixer, 7 L, 75-660 rpm', 'Sirman Plutone 7 PLUS planetar mikser, 7 L, 75–660 döv/dəq'],
    ['A 7-litre planetary mixer with stepless speed control from 75–660 rpm, built for small professional kitchens and pastry counters. Request a quote.', '75–660 döv/dəq arası addımsız sürət nəzarətli 7 litrlik planetar mikser; kiçik peşəkar mətbəx və konditer stendləri üçün. Sorğu göndərin.'],
    ['Variable-speed all-metal mixer for light to medium dough and creams', 'Yüngül və orta xəmir və krem üçün dəyişkən sürətli tam metal mikser'],
    ['The Sirman Plutone 7 PLUS is a 7-litre planetary mixer for small professional kitchens, pastry counters, and café operations that need reliable daily mixing without a large footprint. Built on an all-metal cast body with a liftable head, it runs on a DC motor with stepless speed control spanning 75–660 rpm, giving operators precise adjustment from gentle folding through to high-speed whisking — all from a single 230 V single-phase supply.', 'Sirman Plutone 7 PLUS kiçik peşəkar mətbəx, konditer stendi və kafe əməliyyatları üçün 7 litrlik planetar mikserdir. Qaldırıla bilən başlı tam metal korpus, 75–660 döv/dəq DC dəyişkən sürət, 230 V tək fazadan idarə olunur.'],
    ['The PLUS designation marks two concrete upgrades over the base Plutone 7: a heavier-duty gear drive with grease lubrication and a fast-fixing lever handle on the head, replacing the standard knob for quicker bowl changes during busy service. Safety is handled by a microswitch that cuts power when the head is raised and an NVR device that prevents unintended restart after a power interruption. The removable stainless steel bowl and the three included stainless steel tools — whisk, dough hook, and paddle — cover the full range of batters, creams, and medium-stiffness doughs up to 1 kg of flour.', 'PLUS versiyası gücləndirilmiş ötürücü, yağla sürtünmə və sürətli qapaq dəyişimi üçün qol tutacağı ilə fərqlənir. Qapaq qaldırılanda mikroaçar və NVR təhlükəsizlik təmin edir. 7 L paslanmayan polad qabaq və 3 aksesuar (çırpıcı, xəmir qancası, paddle) daxildir.'],
    ['At 15 kg and just 410 × 240 mm on the counter, the Plutone 7 PLUS suits patisseries, hotel breakfast kitchens, small restaurants, and gelaterie that want Italian-built quality in a compact, single-phase machine.', '15 kq çəki və 410×240 mm ölçü ilə patisserie, otel səhər yeməyi mətbəxi, kiçik restoran və gelaterie üçün kompakt həlldir.'],
    ['Sirman Planetary Mixer Plutone 7 PLUS, 7 L, 75–660 rpm', 'Sirman Plutone 7 PLUS planetar mikser, 7 L, 75–660 döv/dəq'],
    ['Sirman Planetary Mixer Plutone 7 PLUS, 7 L, 75-660 rpm', 'Sirman Plutone 7 PLUS planetar mikser, 7 L, 75–660 döv/dəq'],
    ['Professional planetary mixer for dough and food preparation.', 'Xəmir və qida hazırlığı üçün peşəkar planetar mikser.'],
  ],
  '50x60x30': [
    ['Bilge Inox inset sink bowl, 450x600x300 mm, central drain\n &ndash; Özkaya Steel', 'Bilge Inox daxil edilən moyka, 450×600×300 mm, mərkəzi drain\n &ndash; Özkaya Steel'],
    ['Bilge Inox inset sink bowl, 450x600x300 mm, central drain', 'Bilge Inox daxil edilən moyka, 450×600×300 mm, mərkəzi drain'],
    ['This Bilge Inox drop-in sink bowl measures 450 x 600 x 300 mm with a central drain, suited to compact kitchen worktops. See full specs.', 'Bu Bilge Inox daxil edilən moyka 450×600×300 mm, mərkəzi drain; kompakt mətbəx iş səthlərinə uyğundur. Tam xüsusiyyətlərə bax.'],
    ['Single-bowl drop-in stainless steel sink for professional kitchen worktops', 'Peşəkar mətbəx iş səthləri üçün tək qablı daxil edilən paslanmayan polad moyka'],
    ['The Bilge Inox 450 × 600 mm inset sink bowl is a stainless steel drop-in wash sink designed for professional kitchen worktops, with a central drain configuration and a 300 mm bowl depth. Its compact footprint makes it a practical choice for tight prep stations in restaurants, hotels, catering facilities and café kitchens.', 'Bilge Inox 450×600 mm daxil edilən moyka peşəkar mətbəx iş səthləri üçün paslanmayan polad yuyulma qabıdır; mərkəzi drain və 300 mm dərinlik. Restoran, otel, katerinq və kafe mətbəxlərində dar hazırlıq stansiyaları üçün praktik seçimdir.'],
    ['Built as a single-bowl, drop-in unit, it integrates cleanly into stainless steel worktops and is suited for dedicated bain-marie stations or general washing tasks where a defined drain hand orientation is required to match existing plumbing layouts.', 'Tək qablı daxil edilən vahid kimi paslanmayan polad iş səthinə inteqrasiya olunur; bain-marie stansiyaları və mövcud santexnika layoutuna uyğun drain orientasiyası tələb olunan yuyulma tapşırıqları üçün uyğundur.'],
    ['Inset Sink Bowl, 450×600×300 mm, Central Drain', 'Daxil edilən moyka, 450×600×300 mm, mərkəzi drain'],
    ['Inset Sink Bowl, 450x600x300 mm, Central Drain', 'Daxil edilən moyka, 450×600×300 mm, mərkəzi drain'],
    ['Inset Sink Bowl, 500×600×300 mm, Left-Hand Drain', 'Daxil edilən moyka, 500×600×300 mm, sol drain'],
    ['Sink 50x60x30сm, L.H.', 'Moyka 50×60×30 sm, sol'],
  ],
};

function applyFooterLegal(html) {
  html = html.replace(
    /<h2 class="footer-block__heading inline-richtext">Credentials<\/h2>\s*<div class="footer-block__details-content rte">[\s\S]*?<p>Bank account: LV60 RIKO 0002 9303 5554 2<\/p>/,
    '<h2 class="footer-block__heading inline-richtext">Əlaqə</h2>\n                        <div class="footer-block__details-content rte">\n                            <p>Özkaya Steel Pro</p>\n                            <p>Azərbaycan</p>\n                            <p>Yerli istehsal • Layihələndirmə • Satış • Quraşdırma • Servis</p>',
  );
  html = html.replace(
    /<p>Juridiskā adrese: Bitēnu iela 1, Berģi,<\/p>\s*<p>Garkalnes pag\., Ropažu nov\., LV-1024<br\/><br\/>Reg\. Nr\.: LV40003508763<\/p>\s*<p>Bank: Luminor Bank AS<\/p>\s*<p>SWIFT: RIKOLV2X<\/p>\s*<p>Bank account: LV60 RIKO 0002 9303 5554 2<\/p>/g,
    '',
  );
  html = html.replace(/<h2 class="footer-block__heading inline-richtext">Contact us<\/h2>/g, '<h2 class="footer-block__heading inline-richtext">Bizimlə əlaqə</h2>');
  html = html.replace(/<h2 class="footer-block__heading inline-richtext">Quick links<\/h2>/g, '<h2 class="footer-block__heading inline-richtext">Sürətli keçidlər</h2>');
  html = html.replace(/<h2 class="footer-block__heading inline-richtext">Subscribe to our emails<\/h2>/g, '<h2 class="footer-block__heading inline-richtext">E-poçtumuza abunə olun</h2>');
  return html;
}

function extractSection(html, name) {
  const begin = `<!-- BEGIN sections: ${name} -->`;
  const end = `<!-- END sections: ${name} -->`;
  const start = html.indexOf(begin);
  const stop = html.indexOf(end);
  if (start === -1 || stop === -1) {
    throw new Error(`Section not found: ${name}`);
  }
  return html.slice(start, stop + end.length);
}

function injectSection(html, name, replacement) {
  const begin = `<!-- BEGIN sections: ${name} -->`;
  const end = `<!-- END sections: ${name} -->`;
  const start = html.indexOf(begin);
  const stop = html.indexOf(end);
  if (start === -1 || stop === -1) {
    throw new Error(`Section not found for inject: ${name}`);
  }
  return html.slice(0, start) + replacement + html.slice(stop + end.length);
}

function disableExtraProductLinks(html, allowedCount = 4, options = {}) {
  const {
    allowedHandles = null,
    lockProductGrid = false,
    lockRelatedProducts = false,
  } = options;

  const order = [];
  html.replace(/\/products\/([a-z0-9-]+)/gi, (_, handle) => {
    if (!order.includes(handle)) order.push(handle);
    return '';
  });

  const allowed = allowedHandles
    ? new Set(allowedHandles)
    : new Set(order.slice(0, allowedCount));
  const disabledHandles = order.filter((handle) => !allowed.has(handle));

  for (const handle of disabledHandles) {
    const linkRe = new RegExp(`(<a\\s[^>]*?)href="/products/${handle}([^"]*)"([^>]*>)`, 'gi');
    html = html.replace(linkRe, (match, before, rest, after) => {
      let tag = `${before}href="javascript:void(0)" tabindex="-1" aria-disabled="true" data-product-locked="true"${after}`;
      if (/class="/i.test(tag)) {
        tag = tag.replace(/class="([^"]*)"/i, 'class="$1 product-card-link--disabled"');
      } else {
        tag = tag.replace(/<a\s/i, '<a class="product-card-link--disabled" ');
      }
      return tag;
    });

    html = html.replace(
      new RegExp(`data-product-url="/products/${handle}[^"]*"`, 'gi'),
      'data-product-url="" data-product-locked="true"',
    );

    html = html.replace(
      new RegExp(`"url": "\\\\/products\\\\/${handle}[^"]*"`, 'g'),
      '"url": ""',
    );
  }

  if (lockProductGrid) {
    html = lockGridExceptFirst(html, 'id="product-grid"');
  }

  if (lockRelatedProducts) {
    html = lockAllGridItemsInSection(html, 'related-products');
    html = html.replace(/<product-recommendations\b[^>]*>[\s\S]*?<\/product-recommendations>/gi, '');
  }

  const css = `<style>
.product-card-link--disabled,
[data-product-locked="true"]{pointer-events:none!important;cursor:default!important;}
.grid__item--locked,
.grid__item--locked *{pointer-events:none!important;cursor:default!important;}
.grid__item--locked .quick-add{display:none!important;}
</style>`;

  const script = `<script>
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.grid__item--locked,[data-product-locked="true"]').forEach(function(el){
    el.querySelectorAll('a[href]').forEach(function(a){
      a.removeAttribute('href');
      a.setAttribute('aria-disabled','true');
    });
    el.querySelectorAll('[data-product-url]').forEach(function(node){
      node.removeAttribute('data-product-url');
    });
  });
  document.querySelectorAll('product-recommendations').forEach(function(el){
    el.removeAttribute('data-url');
    el.innerHTML='';
  });
});
</script>`;

  if (!html.includes('product-card-link--disabled')) {
    html = html.replace('</head>', `${css}\n</head>`);
  }
  if (lockProductGrid || lockRelatedProducts) {
    html = html.replace('</body>', `${script}\n</body>`);
  }

  return html;
}

function lockGridExceptFirst(html, gridMarker) {
  const idx = html.indexOf(gridMarker);
  if (idx === -1) return html;
  const ulStart = html.lastIndexOf('<ul', idx);
  const ulEnd = html.indexOf('</ul>', idx);
  if (ulStart === -1 || ulEnd === -1) return html;

  const before = html.slice(0, ulStart);
  let grid = html.slice(ulStart, ulEnd + 5);
  const after = html.slice(ulEnd + 5);

  let n = 0;
  grid = grid.replace(/<li(\s[^>]*)>/g, (match, attrs) => {
    n += 1;
    if (n === 1) return match;
    if (/class="/.test(attrs)) {
      return `<li${attrs.replace(/class="/, 'class="grid__item--locked ')}>`;
    }
    return `<li class="grid__item--locked"${attrs}>`;
  });

  return before + grid + after;
}

function lockAllGridItemsInSection(html, sectionClass) {
  const sectionRe = new RegExp(
    `(<[^>]*class="[^"]*${sectionClass}[^"]*"[^>]*>[\\s\\S]*?<ul[^>]*>)([\\s\\S]*?)(<\\/ul>)`,
    'gi',
  );
  return html.replace(sectionRe, (full, open, items, close) => {
    const locked = items.replace(/<li(\s[^>]*)>/g, (match, attrs) => {
      if (/class="grid__item--locked/.test(match)) return match;
      if (/class="/.test(attrs)) {
        return `<li${attrs.replace(/class="/, 'class="grid__item--locked ')}>`;
      }
      return `<li class="grid__item--locked"${attrs}>`;
    });
    return open + locked + close;
  });
}

function restoreAssetHosts(html) {
  return html
    .replace(/\/\/shop\.ozkayasteel\.az/g, '//shop.vitrumgroup.org')
    .replace(/https:\/\/shop\.ozkayasteel\.az/g, 'https://shop.vitrumgroup.org');
}

function restoreTechnicalIds(html) {
  const fixes = [
    ['/məhsuls/', '/products/'],
    ['\\"məhsuls\\"', '\\"products\\"'],
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
    ['Axtar-Inline', 'Search-Inline'],
    ['Bağla-Inline', 'Close-Inline'],
  ];
  for (const [from, to] of fixes) {
    html = html.split(from).join(to);
  }
  return html;
}

module.exports = {
  applyReplacements,
  applyPostReplacements,
  applyFooterLegal,
  extractSection,
  injectSection,
  disableExtraProductLinks,
  restoreTechnicalIds,
  restoreAssetHosts,
  commonReplacements,
  collectionReplacements,
  productReplacements,
};
