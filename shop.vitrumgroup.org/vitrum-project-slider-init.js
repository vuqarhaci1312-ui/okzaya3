(function () {
  'use strict';

  var MAX_RETRIES = 50;

  function initProjectSliders() {
    var root = document.querySelector('.ozkaya-vitrum-project');
    if (!root) {
      return;
    }

    if (typeof Splide === 'undefined') {
      if (initProjectSliders.retries < MAX_RETRIES) {
        initProjectSliders.retries += 1;
        setTimeout(initProjectSliders, 100);
      }
      return;
    }

    var sliders = root.querySelectorAll('.slider1');
    for (var i = 0; i < sliders.length; i++) {
      var slider = sliders[i];
      if (slider.dataset.mounted === 'true') {
        continue;
      }

      new Splide(slider, {
        perPage: 2.5,
        perMove: 1,
        focus: 0,
        type: 'slide',
        gap: '5.25rem',
        arrows: 'slider',
        pagination: 'slider',
        speed: 1000,
        dragAngleThreshold: 60,
        autoWidth: false,
        rewind: true,
        rewindSpeed: 400,
        waitForTransition: false,
        updateOnMove: true,
        trimSpace: false,
        breakpoints: {
          991: { perPage: 2, gap: '3vw' },
          767: { perPage: 1.15, gap: '3vw' },
          479: { perPage: 1.15, gap: '3vw' },
        },
      }).mount();

      slider.dataset.mounted = 'true';
    }
  }

  initProjectSliders.retries = 0;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectSliders);
  } else {
    initProjectSliders();
  }

  window.addEventListener('load', initProjectSliders);
})();
