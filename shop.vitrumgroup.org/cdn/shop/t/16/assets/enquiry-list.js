(function() {
    class EnquiryLocalStorage {
        static storageKey = 'vitrum:enquiry-list';

        static get length() {
            const list = this.readList();
            return list.length;
        }

        static readList() {
            const raw = localStorage.getItem(this.storageKey);

            if (!raw) return [];

            let data = null;

            try {
                data = JSON.parse(raw);
            } catch {
                return [];
            }

            if (!Array.isArray(data)) return [];

            return data;
        }

        static writeList(items) {
            localStorage.setItem(this.storageKey, JSON.stringify(items));
        }

        static clearList() {
            localStorage.removeItem(this.storageKey);
        }
    }

    class EnquiryCountChangedEvent extends Event {
        static eventName = 'enquiry:count-changed';

        constructor(count) {
            super(EnquiryCountChangedEvent.eventName);
            this.count = count;
        }

        static dispatch(count) {
            const event = new this(count);
            document.dispatchEvent(event);
        }
    }

    class EnquiryList extends HTMLElement {
        rendering = false;

        connectedCallback() {
            (window.dataLayer = window.dataLayer || []).push({
                event: 'enquiry_list_view',
                enquiry_product_count: EnquiryLocalStorage.readList().length
            });
            this.elements = {
                form: this.querySelector('[data-enquiry-form]'),
                spinner: this.querySelector('[data-enquiry-loading]'),
                title: this.querySelector('[data-enquiry-title]'),
                empty: this.querySelector('[data-enquiry-empty]'),
                main: this.querySelector('[data-enquiry-main]'),
                tbody: this.querySelector('[data-enquiry-tbody]'),
                live: this.querySelector('[data-enquiry-live]'),
                template: this.querySelector('[data-enquiry-template]'),
                successModal: document.querySelector('[data-enquiry-success-modal]'),
            };

            if (Object.values(this.elements).some((element) => element === null)) return;

            this.zapierWebhookUrl = this.dataset.zapierWebhookUrl;

            this.elements.form.addEventListener('submit', (event) => this.handleSubmit(event));
            this.addEventListener('click', (event) => this.removeItem(event));
            this.addEventListener('change', (event) => this.updateQuantity(event));
            this.render();
        }

        async handleSubmit(event) {
            event.preventDefault();

            const hp = this.elements.form.elements['vitrum_hp'];
            if (hp && hp.value) return;

            if (!this.elements.form.checkValidity()) {
                this.elements.form.reportValidity();
                return;
            }

            if (!this.zapierWebhookUrl) {
                console.warn('Zapier webhook URL is not configured.');
                return;
            }

            const submitButton = this.elements.form.querySelector('[type="submit"]');
            if (submitButton) submitButton.disabled = true;

            this.elements.live.classList.add('visually-hidden');
            this.elements.live.textContent = '';

            try {
                await this.submitToZapier();
                const items = EnquiryLocalStorage.readList();
                (window.dataLayer = window.dataLayer || []).push({
                    event: 'enquiry_submitted',
                    enquiry_product_count: items.length,
                    enquiry_total_quantity: items.reduce((n, i) => n + (i.quantity || 0), 0),
                    enquiry_has_prices: items.some((i) => !i.price_hidden)
                });
                EnquiryLocalStorage.clearList();
                this.render();
                window.scrollTo({
                    top: 0
                });
                this.elements.successModal ? .show();
            } catch {
                this.elements.live.textContent = this.elements.form.dataset.errorMessage || 'Something went wrong. Please try again.';
                this.elements.live.classList.remove('visually-hidden');
            } finally {
                if (submitButton) submitButton.disabled = false;
            }
        }

        async submitToZapier() {
            const form = this.elements.form;
            const val = (name) => (form.elements[name] ? .value || '').trim();
            const nameParts = val('contact[name]').split(' ');

            const payload = {
                firstname: nameParts[0] || '',
                lastname: nameParts.slice(1).join(' ') || '',
                email: val('contact[email]'),
                phone: val('contact[phone]').replace(/[\s.()-]/g, ''),
                company: val('contact[company]'),
                address: val('contact[Address]'),
                city: val('contact[City]'),
                zip: val('contact[Postal code]'),
                country: val('contact[country]'),
                message: val('contact[body]'),
                intent: [
                    form.querySelector('input[type="checkbox"][name="contact[Request prices]"]') ? .checked && 'request_prices',
                    form.querySelector('input[type="checkbox"][name="contact[Request delivery times]"]') ? .checked && 'request_delivery_times',
                    form.querySelector('input[type="checkbox"][name="contact[Request alternatives]"]') ? .checked && 'request_alternatives',
                    form.querySelector('input[type="checkbox"][name="contact[Request consultation]"]') ? .checked && 'request_consultation',
                    form.querySelector('input[type="checkbox"][name="contact[Request support]"]') ? .checked && 'project_design_support',
                ].filter(Boolean),
                products: this.buildProductsPayload(),
                page_url: window.location.href,
            };

            const response = await fetch(this.zapierWebhookUrl, {
                method: 'POST',
                keepalive: true,
                body: new Blob([JSON.stringify(payload)], {
                    type: 'text/plain'
                }),
            });

            if (!response.ok) throw new Error(`Zapier error: ${response.status}`);
        }

        buildProductsPayload() {
            return EnquiryLocalStorage.readList().map((item) => ({
                title: item.title,
                variant_id: item.variant_id,
                sku: item.sku || '',
                options: item.options_text || '',
                quantity: item.quantity,
                price: (item.price / 100).toFixed(2),
                price_formatted: item.price_hidden ? null : this.formatCurrency(item.price),
                total_price: (item.total_price / 100).toFixed(2),
                total_price_formatted: item.price_hidden ? null : this.formatCurrency(item.total_price),
                url: item.url ? `${window.location.origin}${item.url}` : '',
            }));
        }

        render() {
            if (this.rendering) return;

            this.rendering = true;
            this.elements.spinner.hidden = false;
            this.elements.empty.hidden = true;
            this.elements.main.hidden = true;

            if (EnquiryLocalStorage.length === 0) {
                this.elements.spinner.hidden = true;
                this.elements.empty.hidden = false;
                this.rendering = false;
                return;
            }

            this.elements.tbody.innerHTML = '';

            const templateAccumulator = new DocumentFragment();
            const list = EnquiryLocalStorage.readList();


            list.forEach((item, index) => {
                const data = this.enrichItemForRow(item, index + 1);
                const rowTemplate = this.elements.template.content.cloneNode(true);
                const rowWithData = this.applyBindings(rowTemplate, data);
                templateAccumulator.appendChild(rowWithData);
            });

            this.elements.tbody.appendChild(templateAccumulator);
            this.elements.spinner.hidden = true;
            this.elements.title.hidden = false;
            this.elements.main.hidden = false;
            this.rendering = false;
        }

        parseBindings(bindings) {
            return bindings
                .split(',')
                .map((binding) => binding.trim())
                .filter(Boolean)
                .map((binding) => {
                    const i = binding.indexOf(':');
                    if (i === -1) return null;
                    return {
                        attr: binding.slice(0, i).trim(),
                        key: binding.slice(i + 1).trim()
                    };
                })
                .filter(Boolean);
        }

        applyBindings(root, data) {
            root.querySelectorAll('[data-enquiry-bind]').forEach((element) => {
                if (!element.dataset.enquiryBind) return;

                const bindings = this.parseBindings(element.dataset.enquiryBind);
                if (bindings.length === 0) return;

                for (const {
                        attr,
                        key
                    } of bindings) {
                    const value = data[key] ? ? '';

                    switch (attr) {
                        case 'text':
                            element.textContent = value;
                            break;
                        case 'html':
                            element.innerHTML = value;
                            break;
                        default:
                            if (typeof value === 'boolean') {
                                const stringValue = String(value);

                                if (stringValue === 'true') {
                                    element.setAttribute(attr, '');
                                } else {
                                    element.removeAttribute(attr);
                                }
                            } else {
                                element.setAttribute(attr, value);
                            }
                            break;
                    }
                }

                delete element.dataset.enquiryBind;
            });

            return root;
        }

        enrichItemForRow(item, index) {
            return {
                ...item,
                input_variant_id_name: `contact[Item ${index} Variant ID]`,
                input_title_name: `contact[Item ${index} Title]`,
                input_handle_name: `contact[Item ${index} Handle]`,
                input_options_name: `contact[Item ${index} Options]`,
                input_quantity_name: `contact[Item ${index} Quantity]`,
                input_price_name: `contact[Item ${index} Price]`,
                input_total_price_name: `contact[Item ${index} Total Price]`,
                quantity_id: `EnquiryQty-${index}`,
                price_hidden: item.price === 0 || item.price_hidden,
                price_formatted: this.formatCurrency(item.price),
                total_price_formatted: this.formatCurrency(item.total_price),
            };
        }

        removeItem(event) {
            const removeButton = event.target.closest('[data-enquiry-remove]');

            if (!removeButton) return;

            event.preventDefault();

            const row = removeButton.closest('tr[data-variant-id]');

            if (!row) return;

            const variantId = Number(row.dataset.variantId);

            if (!variantId) return;

            let list = EnquiryLocalStorage.readList();
            list = list.filter((item) => item.variant_id !== variantId);

            if (list.length === 0) {
                EnquiryLocalStorage.clearList();
            } else {
                EnquiryLocalStorage.writeList(list);
            }

            row.remove();
            this.elements.empty.hidden = list.length > 0;
            this.elements.title.hidden = list.length === 0;
            this.elements.main.hidden = list.length === 0;
            EnquiryCountChangedEvent.dispatch(list.length);
        }

        updateQuantity(event) {
            const quantityInput = event.target.closest('.quantity__input');

            if (!quantityInput) return;

            const row = quantityInput.closest('tr[data-variant-id]');

            if (!row) return;

            const variantId = Number(row.dataset.variantId);

            if (!variantId) return;

            const quantity = quantityInput.valueAsNumber;
            const list = EnquiryLocalStorage.readList();
            const index = list.findIndex((item) => item.variant_id === variantId);

            if (index === -1) return;

            list[index].quantity = quantity;
            list[index].total_price = Number(list[index].price) * quantity;
            EnquiryLocalStorage.writeList(list);

            const totalPriceElement = row.querySelector('[data-enquiry-total-price]');

            if (!totalPriceElement) return;

            totalPriceElement.textContent = this.formatCurrency(list[index].total_price);
        }

        formatCurrency(price) {
            return Shopify.formatCurrency(price, Shopify.moneyFormat);
        }
    }

    class EnquiryListAdd extends HTMLElement {
        added = false;

        connectedCallback() {
            this.button = this.querySelector('[data-enquiry-add]');
            this.dataScript = this.querySelector('[data-enquiry-data]');
            this.productFormId = this.dataset.productFormId;
            this.variantId = this.dataset.variantId;
            this.quantityInputId = this.dataset.quantityInputId;
            this.button ? .addEventListener('click', (event) => this.addToEnquiryList(event));

            // id is only set in buy-buttons contexts, where a variant picker can change the selection
            if (this.id) {
                this.onVariantChangeUnsubscriber = subscribe(
                    PUB_SUB_EVENTS.variantChange,
                    this.handleVariantChange.bind(this)
                );
            }
        }

        disconnectedCallback() {
            this.button ? .removeEventListener('click', (event) => this.addToEnquiryList(event));
            this.onVariantChangeUnsubscriber ? .();
        }

        handleVariantChange({
            data: {
                sectionId,
                html
            }
        }) {
            // Section ids are template-scoped and quick-add prefixes cloned ids with 'quickadd-',
            // so match by ancestor product-info instance + product handle, never by this.id alone.
            if (this.closest('product-info') ? .sectionId !== sectionId) return;

            const source = html.getElementById(`EnquiryAdd-${sectionId}`);
            if (!source || source.dataset.productHandle !== this.dataset.productHandle) return;

            this.variantId = source.dataset.variantId;
            this.dataset.variantId = source.dataset.variantId;

            const sourceData = source.querySelector('[data-enquiry-data]');
            if (sourceData && this.dataScript) this.dataScript.textContent = sourceData.textContent;

            // The 'Added' confirmation and its 5s re-click lock refer to the previous variant
            this.added = false;
            this.button ? .classList.remove('enquiry-list-add--added');
        }

        addToEnquiryList(event) {
            if (this.added) return;
            this.added = true;

            if (event) {
                event.preventDefault();
            }

            if (!this.dataScript) return;

            let data;

            try {
                data = JSON.parse(this.dataScript.textContent);
            } catch {
                return;
            }

            const form = this.productFormId ? document.forms[this.productFormId] : null;
            const quantity = form ?
                form.elements[this.quantityInputId] ? .valueAsNumber ? ? 1 :
                document.getElementById(this.quantityInputId) ? .valueAsNumber ? ? 1;
            const list = EnquiryLocalStorage.readList();
            const index = list.findIndex((item) => item.variant_id === Number(this.variantId));

            if (index >= 0) {
                list[index].quantity = quantity;
                list[index].total_price = Number(list[index].price) * quantity;
            } else {
                data.quantity = quantity;
                data.total_price = Number(data.price) * quantity;
                list.push(data);
            }

            EnquiryLocalStorage.writeList(list);
            EnquiryCountChangedEvent.dispatch(list.length);

            this.button.classList.add('enquiry-list-add--added');
            setTimeout(() => {
                this.button.classList.remove('enquiry-list-add--added');
                this.added = false;
            }, 5000);
        }
    }

    class EnquiryListAddAll extends HTMLElement {
        added = false;

        connectedCallback() {
            this.selector = this.dataset.enquiryListAddSelector;

            if (!this.selector) return;

            this.button = this.querySelector('[data-enquiry-add]');

            if (!this.button) return;

            this.enquiryListAddComponents = document.querySelectorAll(this.selector);

            if (this.enquiryListAddComponents.length === 0) return;

            this.button.addEventListener('click', (event) => this.addAllToEnquiryList(event));
        }

        disconnectedCallback() {
            this.button ? .removeEventListener('click', (event) => this.addAllToEnquiryList(event));
        }

        addAllToEnquiryList(event) {
            if (this.added) return;
            this.added = true;

            if (event) {
                event.preventDefault();
            }

            this.enquiryListAddComponents.forEach((component) => {
                if (component instanceof EnquiryListAdd) {
                    component.addToEnquiryList();
                }
            });

            this.button.classList.add('enquiry-list-add--added');
            setTimeout(() => {
                this.button.classList.remove('enquiry-list-add--added');
                this.added = false;
            }, 5000);
        }
    }

    class EnquiryListCountBubble extends HTMLElement {
        connectedCallback() {
            this.visibleCounter = this.querySelector('span:first-child');
            this.hiddenCounter = this.querySelector('span:last-child');

            if (!this.visibleCounter || !this.hiddenCounter) return;

            this.ordinalRule = new Intl.PluralRules(document.documentElement.lang, {
                type: "ordinal"
            });
            this.count = EnquiryLocalStorage.readList().length;

            document.addEventListener(EnquiryCountChangedEvent.eventName, this.updateCounter.bind(this));
        }

        disconnectedCallback() {
            document.removeEventListener(EnquiryCountChangedEvent.eventName, this.updateCounter.bind(this));
        }

        set count(value) {
            this.visibleCounter.textContent = value;

            const ordinalRules = new Intl.PluralRules(document.documentElement.lang, {
                type: "ordinal"
            });
            const rule = ordinalRules.select(value);

            if (this.dataset[rule]) {
                this.hiddenCounter.textContent = this.dataset[rule].replace('{{ count }}', value);
            } else {
                this.hiddenCounter.textContent = '';
            }

            this.hidden = value === 0;
        }

        updateCounter(event) {
            this.count = event.count;
        }
    }

    if (!customElements.get('enquiry-list')) {
        customElements.define('enquiry-list', EnquiryList);
    }

    if (!customElements.get('enquiry-list-add')) {
        customElements.define('enquiry-list-add', EnquiryListAdd);
    }

    if (!customElements.get('enquiry-list-add-all')) {
        customElements.define('enquiry-list-add-all', EnquiryListAddAll);
    }

    if (!customElements.get('enquiry-list-count-bubble')) {
        customElements.define('enquiry-list-count-bubble', EnquiryListCountBubble);
    }
})();