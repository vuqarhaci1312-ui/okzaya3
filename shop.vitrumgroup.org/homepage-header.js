(function () {
  'use strict';

  var MAX_FONT = 17;
  var MIN_FONT = 15;
  var MAX_GAP = 32;
  var MIN_GAP = 14;

  function desktopNav() {
    return window.matchMedia('(min-width: 1280px)').matches;
  }

  function apply(row, font, gap) {
    row.style.gap = gap + 'px';
    row.querySelectorAll('.mega-nav__quicklink').forEach(function (el) {
      el.style.fontSize = font + 'px';
    });
  }

  function fits(row) {
    return row.scrollWidth <= row.clientWidth + 1;
  }

  function fitNav() {
    if (!document.documentElement.hasAttribute('data-home-header') || !desktopNav()) {
      return;
    }

    var row = document.querySelector('.mega-nav__quicklinks');
    if (!row) {
      return;
    }

    var font = MAX_FONT;
    var gap = MAX_GAP;
    apply(row, font, gap);

    while (!fits(row) && gap > MIN_GAP) {
      gap -= 1;
      apply(row, font, gap);
    }

    while (!fits(row) && font > MIN_FONT) {
      font -= 0.25;
      apply(row, font, gap);
    }
  }

  var timer;
  function onResize() {
    clearTimeout(timer);
    timer = setTimeout(fitNav, 50);
  }

  window.addEventListener('resize', onResize);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fitNav);
  } else {
    fitNav();
  }
  window.addEventListener('load', fitNav);
})();
