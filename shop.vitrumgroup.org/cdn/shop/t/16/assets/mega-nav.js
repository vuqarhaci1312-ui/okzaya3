/**
 * <mega-nav> - desktop mega menu behavior for the redesigned header.
 *
 * - Opens a tab's panel on hover (100ms intent, skipped for touch), click pins.
 * - Hovering a quicklink dismisses a hover-opened (non-pinned) panel.
 * - Escape closes and refocuses the trigger; outside click and scrim click close.
 * - Rail items swap catalog sub-panels on hover/focus; arrow keys navigate
 *   (roving tabindex: only the active rail item is in the tab order).
 * - Crossing the 1280px breakpoint closes mobile-only overlays and resets
 *   the header's predictive-search instances.
 * - Sets `preventHide` on .header-wrapper while open (StickyHeader contract,
 *   mirrors Dawn's HeaderMenu).
 *
 * Markup contract: snippets/header-nav-row.liquid + header-mega-panels.liquid.
 */
(() => {
    if (customElements.get('mega-nav')) return;

    const HOVER_INTENT_MS = 100;
    const SCROLL_CLOSE_THRESHOLD_PX = 40;

    class MegaNav extends HTMLElement {
        connectedCallback() {
            this.listeners = new AbortController();
            const {
                signal
            } = this.listeners;

            this.headerWrapper = this.closest('.header-wrapper') || document.querySelector('.header-wrapper');
            this.scrim = this.querySelector('.mega-nav__scrim');
            this.tabs = Array.from(this.querySelectorAll('.mega-nav__tab'));
            this.openTab = null;
            this.pinned = false;
            this.hoverTimer = null;
            this.openScrollY = 0;

            this.tabs.forEach((tab) => {
                tab.addEventListener('pointerenter', (event) => this.onTabPointerEnter(tab, event), {
                    signal
                });
                tab.addEventListener('pointerleave', () => this.clearHoverIntent(), {
                    signal
                });
                tab.addEventListener('click', () => this.onTabClick(tab), {
                    signal
                });
                tab.addEventListener('keydown', (event) => this.onTabKeydown(tab, event), {
                    signal
                });
            });

            // Quicklinks are leaves: pointing at one dismisses a hover-opened panel.
            this.querySelectorAll('.mega-nav__quicklink').forEach((quicklink) => {
                quicklink.addEventListener(
                    'pointerenter',
                    () => {
                        this.clearHoverIntent();
                        if (!this.pinned) this.close();
                    }, {
                        signal
                    }
                );
            });

            this.querySelectorAll('.mega-nav__rail').forEach((rail) => {
                const items = Array.from(rail.querySelectorAll('.mega-nav__rail-item'));
                items.forEach((item, index) => {
                    item.addEventListener('pointerenter', () => this.activateRailItem(items, item), {
                        signal
                    });
                    item.addEventListener('focus', () => this.activateRailItem(items, item), {
                        signal
                    });
                    item.addEventListener('keydown', (event) => this.onRailKeydown(items, index, event), {
                        signal
                    });
                });
            });

            // Row + panels wrapper: leaving it (onto the page or the scrim) closes unless pinned.
            const nav = this.querySelector('.mega-nav__nav');
            if (nav) {
                nav.addEventListener(
                    'pointerleave',
                    () => {
                        this.clearHoverIntent();
                        if (!this.pinned) this.close();
                    }, {
                        signal
                    }
                );
            }

            // Document-level so Escape also closes a hover-opened panel (focus may
            // still be outside the mega nav). Refocuses the trigger tab only when
            // focus was inside the mega nav (or nowhere) so it isn't stolen from,
            // e.g., the inline search field.
            document.addEventListener(
                'keydown',
                (event) => {
                    if (event.key !== 'Escape' || !this.openTab) return;
                    const tab = this.openTab;
                    const activeElement = document.activeElement;
                    const shouldRefocus = activeElement === document.body || this.contains(activeElement);
                    this.close();
                    if (shouldRefocus) tab.focus();
                }, {
                    signal
                }
            );

            document.addEventListener(
                'click',
                (event) => {
                    if (this.openTab && !this.contains(event.target)) this.close();
                }, {
                    signal
                }
            );

            window.addEventListener(
                'scroll',
                () => {
                    if (!this.openTab || this.pinned) return;
                    if (Math.abs(window.scrollY - this.openScrollY) > SCROLL_CLOSE_THRESHOLD_PX) this.close();
                }, {
                    signal,
                    passive: true
                }
            );

            if (this.scrim) {
                this.scrim.addEventListener('click', () => this.close(), {
                    signal
                });
            }

            // Crossing the desktop breakpoint (either direction) resets overlay
            // state that belongs to the other layout.
            window
                .matchMedia('(min-width: 1280px)')
                .addEventListener('change', (event) => this.onBreakpointChange(event), {
                    signal
                });
        }

        onBreakpointChange(event) {
            if (event.matches) {
                // Entering desktop: close the menu drawer through its summary so the
                // full HeaderDrawer close path runs (scroll lock + trapFocus release).
                const openDrawer = document.querySelector('#Details-menu-drawer-container[open]');
                if (openDrawer) {
                    const drawerSummary = openDrawer.querySelector('summary');
                    if (drawerSummary) drawerSummary.click();
                }

                const searchModal = (this.headerWrapper || document).querySelector('details-modal');
                if (searchModal && searchModal.querySelector('details[open]')) searchModal.close(false);
            }

            // Both directions: reset both predictive-search instances so stale
            // [open]/[results] state and duplicate injected ids don't survive.
            // close() first so the input's ARIA state resets too; the attribute
            // sweep stays as a fallback for not-yet-upgraded elements.
            (this.headerWrapper || document).querySelectorAll('predictive-search').forEach((search) => {
                if (typeof search.close === 'function') search.close(true);
                search.removeAttribute('results');
                search.removeAttribute('open');
                const results = search.querySelector('[data-predictive-search]');
                if (results) results.innerHTML = '';
            });
        }

        disconnectedCallback() {
            this.close();
            this.listeners.abort();
        }

        panelFor(tab) {
            return document.getElementById(tab.getAttribute('aria-controls'));
        }

        onTabPointerEnter(tab, event) {
            if (event.pointerType === 'touch') return;
            this.clearHoverIntent();

            if (this.openTab) {
                if (this.openTab !== tab) this.open(tab);
                return;
            }

            this.hoverTimer = setTimeout(() => {
                this.hoverTimer = null;
                this.open(tab);
            }, HOVER_INTENT_MS);
        }

        clearHoverIntent() {
            if (this.hoverTimer === null) return;
            clearTimeout(this.hoverTimer);
            this.hoverTimer = null;
        }

        onTabClick(tab) {
            this.clearHoverIntent();

            if (this.openTab === tab && this.pinned) {
                this.close();
                return;
            }

            if (this.openTab !== tab) this.open(tab);
            this.pinned = true;
        }

        onTabKeydown(tab, event) {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            const offset = event.key === 'ArrowRight' ? 1 : -1;
            const index = this.tabs.indexOf(tab);
            const next = this.tabs[(index + offset + this.tabs.length) % this.tabs.length];
            if (next) next.focus();
        }

        onRailKeydown(items, index, event) {
            if ((event.key === 'ArrowLeft' || event.key === 'ArrowRight') && this.openTab) {
                this.onTabKeydown(this.openTab, event);
                return;
            }

            let targetIndex;
            switch (event.key) {
                case 'ArrowDown':
                    targetIndex = Math.min(index + 1, items.length - 1);
                    break;
                case 'ArrowUp':
                    targetIndex = Math.max(index - 1, 0);
                    break;
                case 'Home':
                    targetIndex = 0;
                    break;
                case 'End':
                    targetIndex = items.length - 1;
                    break;
                default:
                    return;
            }
            event.preventDefault();
            items[targetIndex].focus();
        }

        activateRailItem(items, activeItem) {
            items.forEach((item) => {
                const active = item === activeItem;
                const subpanel = document.getElementById(item.getAttribute('aria-controls'));

                if (active) {
                    item.setAttribute('aria-current', 'true');
                    item.setAttribute('tabindex', '0');
                } else {
                    item.removeAttribute('aria-current');
                    item.setAttribute('tabindex', '-1');
                }
                if (subpanel) subpanel.hidden = !active;
            });
        }

        open(tab) {
            if (this.openTab === tab) return;
            if (this.openTab) this.collapse(this.openTab);

            this.openTab = tab;
            this.pinned = false;
            this.openScrollY = window.scrollY;

            tab.setAttribute('aria-expanded', 'true');
            const panel = this.panelFor(tab);
            if (panel) panel.hidden = false;

            this.classList.add('mega-nav--open');
            if (this.scrim) this.scrim.hidden = false;
            if (this.headerWrapper) this.headerWrapper.preventHide = true;
        }

        collapse(tab) {
            tab.setAttribute('aria-expanded', 'false');
            const panel = this.panelFor(tab);
            if (panel) panel.hidden = true;
        }

        close() {
            this.clearHoverIntent();
            if (!this.openTab) return;

            this.collapse(this.openTab);
            this.openTab = null;
            this.pinned = false;

            this.classList.remove('mega-nav--open');
            if (this.scrim) this.scrim.hidden = true;
            if (this.headerWrapper) this.headerWrapper.preventHide = false;
        }
    }

    customElements.define('mega-nav', MegaNav);
})();