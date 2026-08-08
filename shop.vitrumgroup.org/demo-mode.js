(function () {
  'use strict';

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
      target.closest('menu-drawer') ||
      target.closest('.menu-drawer')
    );
  }

  function isLockedShell(target) {
    return !!target.closest(LOCKED_SELECTORS);
  }

  function handleHomeClick(e) {
    var target = e.target;
    var link = getLink(target);

    if (isNavShell(target)) {
      if (link && !isAllowedHomeHref(link.getAttribute('href'))) {
        blockEvent(e);
      }
      return;
    }

    if (target.closest('summary.header__icon--menu, .header__icon--summary')) {
      return;
    }

    if (link) {
      if (!isAllowedHomeHref(link.getAttribute('href'))) {
        blockEvent(e);
      }
      return;
    }

    if (target.closest(HOME_BLOCK_SELECTORS)) {
      blockEvent(e);
      return;
    }

    if (target.closest('button, input[type="submit"], [role="button"]')) {
      blockEvent(e);
    }
  }

  function handleLockedClick(e) {
    var target = e.target;
    var link = getLink(target);

    if (link) {
      if (!isAllowedLockedHref(link.getAttribute('href'))) {
        blockEvent(e);
      }
      return;
    }

    if (target.closest('summary.header__icon--menu, .header__icon--summary')) {
      return;
    }

    if (isNavShell(target)) {
      return;
    }

    if (target.closest(LOCKED_SELECTORS)) {
      blockEvent(e);
      return;
    }

    if (target.closest('.header-redesign__logo, .header__heading-link')) {
      return;
    }

    if (target.closest('button, input[type="submit"], [role="button"]')) {
      blockEvent(e);
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

  var mode = getMode();
  if (!mode) {
    return;
  }

  document.addEventListener('click', handleClick, true);
  document.addEventListener('submit', handleSubmit, true);
  document.addEventListener('keydown', handleKeydown, true);
})();
