(function () {
  'use strict';

  var WIDGET_HIDE_SELECTORS = [
    '#iubenda-cs-banner',
    '#iubenda-iframe',
    '.iubenda-cs-preferences-link',
    '.iubenda-cs-default-floating',
    '.iubenda-cs-bottom',
    '.iubenda-cs-left',
    '.iubenda-cs-right',
    '[class*="iubenda-cs"]',
    '#whatsapp-widget-root',
    '#chat-bubble',
    '.whatsapp-widget',
    '#whatsapp-link',
    '.chat-window',
    'shopify-privacy-banner',
    '#shopify-privacy-banner-embed',
    '#shopify-privacy-banner',
  ].join(', ');

  var WIDGET_CLICK_SELECTORS =
    '#whatsapp-widget-root, #chat-bubble, .whatsapp-widget, #whatsapp-link, ' +
    '.chat-window, [class*="iubenda-cs"], shopify-privacy-banner';

  var DEMO_MOBILE_CSS =
    'html,body{max-width:100%!important;width:100%!important;overscroll-behavior-x:none}' +
    'body{position:relative}' +
    '.header-wrapper,.header-wrapper .header-redesign,header-drawer,.menu-drawer-container,.menu-drawer{overflow:visible!important;overflow-x:visible!important}' +
    '.js header-drawer>details[open].menu-opening>summary.header__icon--menu:before{display:none!important}' +
    'header-drawer details[open].menu-opening>.menu-drawer{visibility:visible!important;transform:translate(0)!important;z-index:5!important}' +
    '@media screen and (max-width:749.98px){.header-redesign header-drawer details[open].menu-opening>.menu-drawer{left:calc(-1.2rem + 9px)!important}}' +
    '@media screen and (min-width:750px) and (max-width:1279.98px){.header-redesign header-drawer details[open].menu-opening>.menu-drawer{left:calc(-5rem + 9px)!important}}' +
    '#MainContent,main{max-width:100%;overflow-x:clip}';

  var ALLOWED_HOME = {
    '/collections/fridges-and-freezers': true,
    '/collections/restaurant': true,
    '/collections/calisma-dezgahlari': true,
    '/collections/yuma-vannasi': true,
    '/collections/tekli-yuma-vannasi': true,
    '/collections/2-li-yuma-vannasi': true,
    '/collections/3-lu-yuma-vannasi': true,
    '/collections/teravez-yuma-vannasi': true,
    '/collections/qazan-yuma-vannasi': true,
    '/collections/elektrik-ve-qaz-pilteeleri': true,
    '/collections/2-gozlu': true,
    '/collections/4-gozlu': true,
    '/collections/6-gozlu': true,
    '/collections/firinlar': true,
    '/collections/bar-dezgahlari': true,
    '/collections/camasirxana-avadanliqlari': true,
    '/collections/proyektler': true,
    '/all-projects': true,
    '/about-us': true,
  };

  var ALLOWED_PRODUCTS = {
    '/products/ur90g-sub-zero': true,
    '/products/scandomestic-sf-115': true,
    '/products/termofrost-eco-clear-x': true,
    '/products/oscartielle-nettuno': true,
    '/products/aifo-weld-in-sink-bowl': true,
  };

  var LOCKED_COLLECTIONS = {
    '/collections/restaurant': true,
  };

  var LOCKED_SELECTORS =
    '.collection-menu, #main-collection-filters, .facets-container, .mobile-facets, ' +
    '.related-collections, .pagination, .active-facets, footer, ' +
    '.header-redesign__action, cart-drawer, .cart-drawer, details-modal, .search-modal, ' +
    'predictive-search, .announcement-bar-section';

  var HOME_BLOCK_SELECTORS =
    'footer, #MainContent, .header-redesign__action, .header-redesign__logo, ' +
    'cart-drawer, .cart-drawer, details-modal, .search-modal, predictive-search, ' +
    '.announcement-bar-section, .banner, .collection-list, .featured-collection, ' +
    'product-card-wrapper, .card-wrapper';

  function normalizePath(href) {
    if (!href || href.charAt(0) === '#' || href.indexOf('javascript:') === 0) {
      return null;
    }
    try {
      var path = new URL(href, window.location.origin).pathname.replace(/\/+$/, '') || '/';
      return path;
    } catch (err) {
      return null;
    }
  }

  function getMode() {
    var path = normalizePath(window.location.pathname);
    if (path === '/') {
      return 'home';
    }
    if (LOCKED_COLLECTIONS[path]) {
      return 'locked';
    }
    if (ALLOWED_PRODUCTS[path]) {
      return 'locked';
    }
    return null;
  }

  function isWhatsAppHref(href) {
    if (!href) {
      return false;
    }
    return href.indexOf('wa.me/') !== -1 || href.indexOf('whatsapp.com') !== -1;
  }

  function isAllowedHomeHref(href) {
    if (isWhatsAppHref(href)) {
      return true;
    }
    var path = normalizePath(href);
    if (path === null) {
      return false;
    }
    if (ALLOWED_HOME[path] === true) {
      return true;
    }
    if (path.indexOf('/products/empero-') === 0) {
      return true;
    }
    return path.indexOf('/projects/') === 0;
  }

  function isAllowedLockedHref(href) {
    if (isWhatsAppHref(href)) {
      return true;
    }
    var path = normalizePath(href);
    if (path === null) {
      return false;
    }
    if (path === '/') {
      return true;
    }
    if (path === '/about-us' || path.indexOf('/products/empero-') === 0) {
      return true;
    }
    return ALLOWED_PRODUCTS[path] === true;
  }

  function isAllowedHref(href, mode) {
    if (mode === 'home') {
      return isAllowedHomeHref(href);
    }
    if (mode === 'locked') {
      return isAllowedLockedHref(href);
    }
    return false;
  }

  function blockEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    if (typeof e.stopImmediatePropagation === 'function') {
      e.stopImmediatePropagation();
    }
  }

  function getLink(target) {
    return target.closest ? target.closest('a[href]') : null;
  }

  function isNavShell(target) {
    return !!(
      target.closest('mega-nav') ||
      target.closest('.mega-nav') ||
      target.closest('header-drawer') ||
      target.closest('menu-drawer') ||
      target.closest('.menu-drawer') ||
      target.closest('.menu-drawer-container')
    );
  }

  function isMenuDrawerControl(target) {
    return !!(
      target.closest('header-drawer') ||
      target.closest('menu-drawer') ||
      target.closest('.menu-drawer') ||
      target.closest('.menu-drawer-container')
    );
  }

  function blockLinkIfNeeded(e, target, allowLinkFn) {
    var link = getLink(target);
    if (link && !allowLinkFn(link.getAttribute('href'))) {
      blockEvent(e);
      return true;
    }
    return false;
  }

  function handleHomeClick(e) {
    var target = e.target;

    if (target.closest('#ozkaya-whatsapp-fab')) {
      return;
    }

    if (isMenuDrawerControl(target) || isNavShell(target)) {
      blockLinkIfNeeded(e, target, isAllowedHomeHref);
      return;
    }

    if (
      target.closest('.ozkaya-featured-projects') ||
      target.closest('.ozkaya-vitrum-all-projects') ||
      target.closest('.ozkaya-all-projects') ||
      target.closest('.ozkaya-vitrum-project')
    ) {
      return;
    }

    var link = getLink(target);
    if (link) {
      if (!isAllowedHomeHref(link.getAttribute('href'))) {
        blockEvent(e);
      }
      return;
    }

    if (target.closest(HOME_BLOCK_SELECTORS)) {
      blockEvent(e);
    }
  }

  function handleLockedClick(e) {
    var target = e.target;

    if (isMenuDrawerControl(target) || isNavShell(target)) {
      blockLinkIfNeeded(e, target, isAllowedLockedHref);
      return;
    }

    var link = getLink(target);
    if (link) {
      if (!isAllowedLockedHref(link.getAttribute('href'))) {
        blockEvent(e);
      }
      return;
    }

    if (target.closest(LOCKED_SELECTORS)) {
      blockEvent(e);
      return;
    }

    if (target.closest('.header-redesign__logo, .header__heading-link')) {
      return;
    }
  }

  function handleClick(e) {
    var mode = getMode();
    if (mode === 'home') {
      handleHomeClick(e);
    } else if (mode === 'locked') {
      handleLockedClick(e);
    }
  }

  function handleKeydown(e) {
    if (e.key !== 'Enter' && e.key !== ' ') {
      return;
    }

    var mode = getMode();
    if (!mode) {
      return;
    }

    if (isMenuDrawerControl(e.target) && !getLink(e.target)) {
      return;
    }

    var link = getLink(e.target);
    if (!link) {
      return;
    }

    if (!isAllowedHref(link.getAttribute('href'), mode)) {
      blockEvent(e);
    }
  }

  function handleSubmit(e) {
    if (getMode()) {
      blockEvent(e);
    }
  }

  function isWidgetTarget(target) {
    return !!target.closest(WIDGET_CLICK_SELECTORS);
  }

  function handleWidgetClick(e) {
    if (isWidgetTarget(e.target)) {
      blockEvent(e);
    }
  }

  function hideWidgets(root) {
    var scope = root || document;
    if (scope.querySelectorAll) {
      scope.querySelectorAll(WIDGET_HIDE_SELECTORS).forEach(function (el) {
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
        el.style.setProperty('pointer-events', 'none', 'important');
        el.setAttribute('aria-hidden', 'true');
      });
    }
  }

  function injectDemoStyles() {
    var existing = document.getElementById('demo-widget-hide');
    if (existing) {
      existing.textContent =
        WIDGET_HIDE_SELECTORS +
        ' { display: none !important; visibility: hidden !important; pointer-events: none !important; opacity: 0 !important; }' +
        DEMO_MOBILE_CSS;
      return;
    }

    var style = document.createElement('style');
    style.id = 'demo-widget-hide';
    style.textContent =
      WIDGET_HIDE_SELECTORS +
      ' { display: none !important; visibility: hidden !important; pointer-events: none !important; opacity: 0 !important; }' +
      DEMO_MOBILE_CSS;
    document.head.appendChild(style);
  }

  function stubCookieApis() {
    window._iub = window._iub || [];
    window._iub.csConfiguration = window._iub.csConfiguration || {};
    window._iub.csConfiguration.banner = { acceptButtonDisplay: false };
    window._iub.csReady = function () {};
    window._iub.cookiesReady = function () {};
    if (window.Shopify && window.Shopify.customerPrivacy) {
      window.Shopify.customerPrivacy.setTrackingConsent = function () {};
    }
  }

  function initWidgetLockdown() {
    injectDemoStyles();
    stubCookieApis();
    hideWidgets(document);

    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) {
              hideWidgets(node);
            }
          });
        });
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }

    document.addEventListener('click', handleWidgetClick, false);
  }

  function syncMobileMenuState(details) {
    var header = document.querySelector('.section-header');
    var summary = details.querySelector('summary.header__icon--menu');
    var headerWrapper = details.closest('.header-wrapper');

    if (!details.hasAttribute('open')) {
      details.classList.remove('menu-opening');
      if (header) {
        header.classList.remove('menu-open');
      }
      if (summary) {
        summary.setAttribute('aria-expanded', 'false');
      }
      return;
    }

    if (!details.classList.contains('menu-opening')) {
      details.classList.add('menu-opening');
    }

    if (header) {
      var borderOffset =
        headerWrapper && headerWrapper.classList.contains('header-wrapper--border-bottom') ? 1 : 0;
      document.documentElement.style.setProperty(
        '--header-bottom-position',
        parseInt(header.getBoundingClientRect().bottom - borderOffset, 10) + 'px'
      );
      document.documentElement.style.setProperty('--viewport-height', window.innerHeight + 'px');
      header.classList.add('menu-open');
    }

    if (summary) {
      summary.setAttribute('aria-expanded', 'true');
    }
  }

  function initMobileMenuFallback() {
    var details = document.getElementById('Details-menu-drawer-container');
    if (!details || details.dataset.demoMenuFallback === 'true') {
      return;
    }

    details.dataset.demoMenuFallback = 'true';
    syncMobileMenuState(details);

    details.addEventListener('toggle', function () {
      syncMobileMenuState(details);
    });

    if (typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function () {
        syncMobileMenuState(details);
      });
      observer.observe(details, { attributes: true, attributeFilter: ['open', 'class'] });
    }
  }

  function injectWhatsAppFab() {
    if (document.getElementById('ozkaya-whatsapp-fab')) {
      return;
    }

    if (!document.getElementById('ozkaya-whatsapp-fab-style')) {
      var style = document.createElement('style');
      style.id = 'ozkaya-whatsapp-fab-style';
      style.textContent =
        '#ozkaya-whatsapp-fab{position:fixed;right:max(24px,env(safe-area-inset-right));bottom:max(24px,env(safe-area-inset-bottom));z-index:2147483000;width:58px;height:58px;border-radius:50%;background:#25d366;box-shadow:0 8px 24px rgba(20,19,19,.22);display:flex;align-items:center;justify-content:center;color:#fff;text-decoration:none}' +
        '#ozkaya-whatsapp-fab:hover{transform:scale(1.06);background:#1ebe5d}' +
        '#ozkaya-whatsapp-fab svg{width:30px;height:30px;display:block}' +
        '@media screen and (max-width:749px){#ozkaya-whatsapp-fab{width:52px;height:52px}#ozkaya-whatsapp-fab svg{width:26px;height:26px}}';
      document.head.appendChild(style);
    }

    var link = document.createElement('a');
    link.id = 'ozkaya-whatsapp-fab';
    link.href = 'https://wa.me/994558165354';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', 'WhatsApp: +994 55 816 53 54');
    link.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 21 12a10.9 10.9 0 0 0-.5-8.5ZM12 20.2a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.2 9.2 0 1 1 12 20.2Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3c0-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c0-.1-.2-.2-.5-.3Z"/></svg>';
    document.body.appendChild(link);
  }

  function initDemoInteraction() {
    initWidgetLockdown();
    initMobileMenuFallback();
    document.addEventListener('click', handleClick, false);
    document.addEventListener('submit', handleSubmit, true);
    document.addEventListener('keydown', handleKeydown, false);
  }

  function boot() {
    injectWhatsAppFab();
    if (getMode()) {
      initDemoInteraction();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
