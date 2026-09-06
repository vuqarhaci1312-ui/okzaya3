(function () {
  'use strict';

  var AUTOPLAY_DELAY = 4000;
  var RESUME_DELAY = 2500;
  var MAX_RETRIES = 50;

  function initFeaturedProjectsSlider() {
    var slider = document.getElementById('ozkaya-projects-slider');
    if (!slider || slider.dataset.mounted === 'true') {
      return;
    }

    if (typeof Splide === 'undefined') {
      if (initFeaturedProjectsSlider.retries < MAX_RETRIES) {
        initFeaturedProjectsSlider.retries += 1;
        setTimeout(initFeaturedProjectsSlider, 100);
      }
      return;
    }

    var autoplayTimer = null;
    var resumeTimer = null;

    var splide = new Splide(slider, {
      type: 'loop',
      perPage: 2.5,
      perMove: 1,
      focus: 0,
      gap: '5.25rem',
      arrows: false,
      pagination: false,
      speed: 650,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      drag: true,
      snap: true,
      flickPower: 500,
      dragAngleThreshold: 30,
      autoWidth: false,
      rewind: false,
      waitForTransition: true,
      updateOnMove: true,
      trimSpace: false,
      breakpoints: {
        991: { perPage: 2, gap: '2.4rem' },
        767: { perPage: 1.2, gap: '1.6rem' },
        479: { perPage: 1.08, gap: '1.2rem' },
      },
    });

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function scheduleAutoplay(delay) {
      if (resumeTimer) {
        clearTimeout(resumeTimer);
      }
      resumeTimer = setTimeout(startAutoplay, delay);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(function () {
        splide.go('>');
      }, AUTOPLAY_DELAY);
    }

    splide.on('drag', function () {
      slider.classList.add('is-dragging');
      stopAutoplay();
      if (resumeTimer) {
        clearTimeout(resumeTimer);
      }
    });

    splide.on('dragged', function () {
      slider.classList.remove('is-dragging');
      scheduleAutoplay(RESUME_DELAY);
    });

    slider.addEventListener(
      'touchstart',
      function () {
        stopAutoplay();
        if (resumeTimer) {
          clearTimeout(resumeTimer);
        }
      },
      { passive: true }
    );

    slider.addEventListener(
      'touchend',
      function () {
        scheduleAutoplay(RESUME_DELAY);
      },
      { passive: true }
    );

    splide.mount();
    slider.dataset.mounted = 'true';
    startAutoplay();
  }

  initFeaturedProjectsSlider.retries = 0;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeaturedProjectsSlider);
  } else {
    initFeaturedProjectsSlider();
  }

  window.addEventListener('load', initFeaturedProjectsSlider);
})();
