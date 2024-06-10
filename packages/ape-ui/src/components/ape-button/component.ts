import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FormAssociatedElement, type ApeButtonVariant } from '../../utils';
import { isValidColor } from '../../utils/css';
import { fonts } from '../../utils/stylesheets';
import styles from './styles';

@customElement('ape-button')
export class ApeButton extends FormAssociatedElement {
    static styles = [fonts, styles];

    @property({ type: String, reflect: true }) variant?: ApeButtonVariant = 'primary';
    @property({ type: Boolean, reflect: true }) loading = false;
    @property({ type: Boolean, reflect: true }) disabled = false;
    @property({ type: Boolean, reflect: true }) selected = false;
    @property({ type: String, reflect: true }) color?: string;
    @property({ type: Boolean }) submit = false;
    @property({ type: String }) href?: string;

    render() {
        return this.href
            ? html`
                  <a class=${this.getElementTagName()} @click=${this._handleClick} ?disabled=${this.disabled}>
                      ${this._renderContent()}
                  </a>
              `
            : html`
                  <button
                      class=${this.getElementTagName()}
                      @click=${this._handleClick}
                      ?disabled=${this.disabled}>
                      ${this._renderContent()}
                  </button>
              `;
    }

    override attributeChangedCallback(name: string, old: string, value: string) {
        super.attributeChangedCallback(name, old, value);
        switch (name) {
            case 'color':
                {
                    const color = isValidColor(value) ? value : '';
                    this.style.setProperty('--ape-button-bg-color', color);
                    this.style.setProperty('--ape-button-border-color', color);
                    this.style.setProperty('--ape-button-selected-bg-color', color);
                    this.style.setProperty('--ape-button-selected-border-color', color);
                    break;
                }
        }
    }

    private _handleClick(e: Event & { target: HTMLButtonElement }) {
        e.stopPropagation();
        e.preventDefault();

        if (this.submit) return this.submitForm();
        this.dispatchEvent(
            new CustomEvent('click', {
                detail: e,
                bubbles: true,
                composed: true,
            }),
        );
    }

    private _renderContent() {
        return html`
            ${this.loading
                ? html` <ape-loader size="small" color=${this.disabled ? 'disabled' : 'text'}></ape-loader> `
                : void 0}
            <span class="${this.getElementTagName()}_content">
                <slot></slot>
            </span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ape-button': ApeButton;
    }
}
