if (!customElements.get('cart-consent')) {
    class CartConsent extends HTMLElement {
        connectedCallback() {
            this._checkbox = this.querySelector('.cart-consent__checkbox');
            if (!this._checkbox) return;

            this._abortController = new AbortController();

            this._applyState(this._checkbox.checked);
            this._checkbox.addEventListener('change', this._onChange.bind(this), {
                signal: this._abortController.signal,
            });
        }

        disconnectedCallback() {
            this._abortController ? .abort();
        }

        _scope() {
            return (
                this.closest('.cart__footer') ||
                this.closest('#CartDrawer') ||
                document
            );
        }

        _applyState(checked) {
            const scope = this._scope();

            const btn =
                scope.querySelector('#checkout') ||
                scope.querySelector('#CartDrawer-Checkout');
            if (btn) btn.disabled = !checked;

            const express = scope.querySelector('.cart__dynamic-checkout-buttons');
            if (express) {
                if (checked) {
                    express.removeAttribute('hidden');
                } else {
                    express.setAttribute('hidden', '');
                }
            }
        }

        _onChange() {
            const checked = this._checkbox.checked;
            this._applyState(checked);

            this._fetchController ? .abort();
            this._fetchController = new AbortController();

            fetch('/cart/update.js', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        attributes: {
                            'Terms & Privacy accepted': checked ?
                                'yes — ' + new Date().toISOString() :
                                '',
                        },
                    }),
                    signal: this._fetchController.signal,
                })
                .then((res) => {
                    if (!res.ok) throw new Error('cart-consent: update failed ' + res.status);
                })
                .catch((err) => {
                    if (err.name !== 'AbortError') console.error(err);
                });
        }
    }

    customElements.define('cart-consent', CartConsent);
}