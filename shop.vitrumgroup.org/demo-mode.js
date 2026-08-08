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

  var ALLOWED_HOME = {
    '/collections/fridges-and-freezers': true,
    '/collections/restaurant': true,
  };

  var ALLOWED_PRODUCTS = {
    '/products/ur90g-sub-zero': true,
    '/products/scandomestic-sf-115': true,
    '/products/termofrost-eco-clear-x': true,
    '/products/oscartielle-nettuno': true,
    '/products/aifo-weld-in-sink-bowl': true,
  };

  var LOCKED_COLLECTIONS = {
    '/collections/fridges-and-freezers': true,
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

  function isAllowedHomeHref(href) {
    var path = normalizePath(href);
    return path !== null && ALLOWED_HOME[path] === true;
  }

  function isAllowedLockedHref(href) {
    var path = normalizePath(href);
    if (path === null) {
      return false;
    }
    if (path === '/') {
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

  function openMobileMenu(details, summary) {
    var drawer = details.closest('header-drawer');
    details.setAttribute('open', '');
    details.classList.add('menu-opening');
    summary.setAttribute('aria-expanded', 'true');

    document.body.classList.add('overflow-hidden-desktop');
    var header = document.querySelector('.section-header, .header-wrapper, .header-redesign');
    if (header) {
      header.classList.add('menu-open');
    }

    document.documentElement.style.setProperty(
      '--viewport-height',
      window.innerHeight + 'px'
    );

    if (drawer && typeof drawer.openMenuDrawer === 'function') {
      try {
        drawer.openMenuDrawer(summary);
      } catch (err) {
        /* manual open above is enough */
      }
    }
  }

  function closeMobileMenu(details, summary) {
    var drawer = details.closest('header-drawer');

    if (drawer && typeof drawer.closeMenuDrawer === 'function') {
      try {
        drawer.closeMenuDrawer(new Event('click'), summary);
        return;
      } catch (err) {
        /* fall through to manual close */
      }
    }

    details.removeAttribute('open');
    details.classList.remove('menu-opening');
    summary.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden-desktop');
    document.body.classList.remove('overflow-hidden-tablet');
    document.body.classList.remove('overflow-hidden-mobile');

    var header = document.querySelector('.section-header, .header-wrapper, .header-redesign');
    if (header) {
      header.classList.remove('menu-open');
    }

    details.querySelectorAll('details').forEach(function (sub) {
      sub.removeAttribute('open');
      sub.classList.remove('menu-opening');
    });
    details.querySelectorAll('.submenu-open').forEach(function (sub) {
      sub.classList.remove('submenu-open');
    });
  }

  function bindMobileMenuToggle() {
    var details = document.getElementById('Details-menu-drawer-container');
    if (!details || details.dataset.demoMenuBound === 'true') {
      return;
    }

    var summary = details.querySelector('summary.header__icon--menu');
    if (!summary) {
      return;
    }

    details.dataset.demoMenuBound = 'true';

    function toggleMenu(e) {
      if (getLink(e.target)) {
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === 'function') {
        e.stopImmediatePropagation();
      }

      if (details.hasAttribute('open')) {
        closeMobileMenu(details, summary);
      } else {
        openMobileMenu(details, summary);
      }
    }

    summary.addEventListener('click', toggleMenu, true);

    details.querySelectorAll('.menu-drawer__close-button').forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.stopPropagation();
      }, true);
    });
  }

  function handleHomeClick(e) {
    var target = e.target;

    if (isMenuDrawerControl(target)) {
      blockLinkIfNeeded(e, target, isAllowedHomeHref);
      return;
    }

    if (isNavShell(target)) {
      blockLinkIfNeeded(e, target, isAllowedHomeHref);
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

    if (isMenuDrawerControl(target)) {
      blockLinkIfNeeded(e, target, isAllowedLockedHref);
      return;
    }

    if (isNavShell(target)) {
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

  function injectWidgetHideStyles() {
    if (document.getElementById('demo-widget-hide')) {
      return;
    }
    var style = document.createElement('style');
    style.id = 'demo-widget-hide';
    style.textContent =
      WIDGET_HIDE_SELECTORS +
      ' { display: none !important; visibility: hidden !important; pointer-events: none !important; opacity: 0 !important; }';
    document.head.appendChild(style);
  }

  function injectMobileViewportFix() {
    if (document.getElementById('demo-mobile-fix')) {
      return;
    }
    var style = document.createElement('style');
    style.id = 'demo-mobile-fix';
    style.textContent =
      'html, body {' +
      'overflow-x: hidden !important;' +
      'max-width: 100% !important;' +
      'width: 100% !important;' +
      'overscroll-behavior-x: none;' +
      '}' +
      'body { position: relative; }' +
      '.header-wrapper, .header-wrapper .header-redesign, header-drawer, .menu-drawer-container {' +
      'overflow: visible !important;' +
      'overflow-x: visible !important;' +
      '}' +
      'header-drawer { position: relative; z-index: 30; }' +
      'header-drawer summary.header__icon--menu {' +
      'touch-action: manipulation;' +
      'cursor: pointer;' +
      'position: relative;' +
      'z-index: 31;' +
      '-webkit-tap-highlight-color: transparent;' +
      '}' +
      '@media screen and (max-width: 1279.98px) {' +
      '.header-redesign header-drawer details[open].menu-opening {' +
      'margin-left: 0 !important;' +
      '}' +
      '}' +
      'header-drawer details[open].menu-opening > .menu-drawer {' +
      'position: fixed !important;' +
      'left: 0 !important;' +
      'top: var(--header-bottom-position, 64px) !important;' +
      'visibility: visible !important;' +
      'transform: translate(0) !important;' +
      'z-index: 100 !important;' +
      '}' +
      '.js header-drawer > details[open].menu-opening > summary.header__icon--menu:before {' +
      'position: fixed !important;' +
      'left: 0 !important;' +
      'right: 0 !important;' +
      'width: 100vw !important;' +
      'top: var(--header-bottom-position, 64px) !important;' +
      'height: calc(100vh - var(--header-bottom-position, 64px)) !important;' +
      '}' +
      '#MainContent, .shopify-section:not(.header-wrapper), .footer, .page-width, main {' +
      'max-width: 100%;' +
      'overflow-x: clip;' +
      '}';
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
    injectWidgetHideStyles();
    injectMobileViewportFix();
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

  function initDemoInteraction() {
    initWidgetLockdown();
    bindMobileMenuToggle();
    document.addEventListener('click', handleClick, false);
    document.addEventListener('submit', handleSubmit, true);
    document.addEventListener('keydown', handleKeydown, false);
  }

  var mode = getMode();
  if (!mode) {
    return;
  }

  function start() {
    initDemoInteraction();
    window.setTimeout(bindMobileMenuToggle, 500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
