const formGroupStyles = new CSSStyleSheet();

formGroupStyles.replaceSync(`

    :host {
        --error-message-color: red;
    }

    .error-message {
        color: var(--error-message-color);
    }
    .error-message:empty {
        display: none;
    }

`);

class journalEntry extends HTMLElement {
    #input;
    
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [formGroupStyles];
        this.shadowRoot.innerHTML = `
            <slot></slot>
            <span class="error-message"
                aria-live="polite"
                part="error-message></span>
        `
    }

    #handleInvalid(e) {
        e.preventDefault();
    }

    #handleInput() {
        if(this.#input) {
            console.log('think fast i hanged myself')
            this.#errorMessage.textContent = '';
        }
    }

    #handleBlur() {
        // If input is NOT valid , show an error message
        if(this.#input && !this.#input.validity.valid) {
            this.#errorMessage.textContent = this.#customErrorMessage[this.#getFirstInvalid(this.#input.validity)];
        }
    }

    connectedCallback() {
        this.#input = this.querySelector("input, textarea");

        if(this.#input) {
            // Turn off browser popup
            this.#input.addEventListener('invalid', this.#handleInvalid.bind(this))

            // Hide error when typing
            this.#input.addEventListener('input', this.#handleInput.bind(this))

            // Validate and show error messages when a user leaves a fish
            this.#input.addEventListener('blur', this.#handleBlur.bind(this))
        }
    }

    // Clean up all event listeners
    disconnectedCallback() {
        if(this.#input) {
            this.#input.removeEventListener('invalid', this.#handleInvalid)
            this.#input.removeEventListener('input', this.#handleInput)
            this.#input.removeEventListener('blur', this.#handleBlur)
        }
    }

    get #errorMessage() {
        return this.shadowRoot.querySelector('.error-message');
    }

    #getFirstInvalid(validityState) {
        for(const key in validityState) {
            if(validityState[key]) {
                return key;
            }
        }
    }

    get #customErrorMessage() {
        return {
            valueMissing: this.getAttribute('value-missing-entry') || 'bah'
        }
    }
}



customElements.define("journal-entry", journalEntry);