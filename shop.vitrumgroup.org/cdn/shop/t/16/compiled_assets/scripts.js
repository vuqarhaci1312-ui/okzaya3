(function() {
    var __sections__ = {};
    (function() {
        for (var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
            __sections__[s[i]] = true;
    })();
    (function() {
        if (!__sections__["header"]) return;
        try {

            class StickyHeader extends HTMLElement {
                constructor() {
                    super();
                }

                connectedCallback() {
                    this.header = document.querySelector('.section-header');
                    this.headerIsAlwaysSticky =
                        this.getAttribute('data-sticky-type') === 'always' ||
                        this.getAttribute('data-sticky-type') === 'reduce-logo-size';
                    this.headerBounds = {};

                    this.setHeaderHeight();

                    window.matchMedia('(max-width: 1439px)').addEventListener('change', this.setHeaderHeight.bind(this));
                    window.matchMedia('(max-width: 1279px)').addEventListener('change', this.setHeaderHeight.bind(this));

                    if (this.headerIsAlwaysSticky) {
                        this.header.classList.add('shopify-section-header-sticky');
                    }

                    this.currentScrollTop = 0;
                    this.preventReveal = false;
                    this.predictiveSearches = this.querySelectorAll('predictive-search');

                    this.onScrollHandler = this.onScroll.bind(this);
                    this.hideHeaderOnScrollUp = () => (this.preventReveal = true);

                    this.addEventListener('preventHeaderReveal', this.hideHeaderOnScrollUp);
                    window.addEventListener('scroll', this.onScrollHandler, false);

                    this.createObserver();
                }

                setHeaderHeight() {
                    document.documentElement.style.setProperty('--header-height', `${this.header.offsetHeight}px`);
                }

                disconnectedCallback() {
                    this.removeEventListener('preventHeaderReveal', this.hideHeaderOnScrollUp);
                    window.removeEventListener('scroll', this.onScrollHandler);
                }

                createObserver() {
                    let observer = new IntersectionObserver((entries, observer) => {
                        this.headerBounds = entries[0].intersectionRect;
                        observer.disconnect();
                    });

                    observer.observe(this.header);
                }

                onScroll() {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                    if (Array.from(this.predictiveSearches).some((search) => search && search.isOpen)) return;

                    if (scrollTop > this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
                        this.header.classList.add('scrolled-past-header');
                        if (this.preventHide) return;
                        requestAnimationFrame(this.hide.bind(this));
                    } else if (scrollTop < this.currentScrollTop && scrollTop > this.headerBounds.bottom) {
                        this.header.classList.add('scrolled-past-header');
                        if (!this.preventReveal) {
                            requestAnimationFrame(this.reveal.bind(this));
                        } else {
                            window.clearTimeout(this.isScrolling);

                            this.isScrolling = setTimeout(() => {
                                this.preventReveal = false;
                            }, 66);

                            requestAnimationFrame(this.hide.bind(this));
                        }
                    } else if (scrollTop <= this.headerBounds.top) {
                        this.header.classList.remove('scrolled-past-header');
                        requestAnimationFrame(this.reset.bind(this));
                    }

                    this.currentScrollTop = scrollTop;
                }

                hide() {
                    if (this.headerIsAlwaysSticky) return;
                    this.header.classList.add('shopify-section-header-hidden', 'shopify-section-header-sticky');
                    this.closeMenuDisclosure();
                    this.closeSearchModal();
                }

                reveal() {
                    if (this.headerIsAlwaysSticky) return;
                    this.header.classList.add('shopify-section-header-sticky', 'animate');
                    this.header.classList.remove('shopify-section-header-hidden');
                }

                reset() {
                    if (this.headerIsAlwaysSticky) return;
                    this.header.classList.remove('shopify-section-header-hidden', 'shopify-section-header-sticky', 'animate');
                }

                closeMenuDisclosure() {
                    this.disclosures = this.disclosures || this.header.querySelectorAll('header-menu');
                    this.disclosures.forEach((disclosure) => disclosure.close());
                }

                closeSearchModal() {
                    this.searchModal = this.searchModal || this.header.querySelector('details-modal');
                    if (this.searchModal) this.searchModal.close(false);
                }
            }

            customElements.define('sticky-header', StickyHeader);

        } catch (e) {
            console.error(e);
        }
    })();
})();