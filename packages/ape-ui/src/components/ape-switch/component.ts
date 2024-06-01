import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FormAssociatedElement } from '../../utils';
import styles from './styles';

@customElement('ape-switch')
export class ApeSwitch extends FormAssociatedElement {
    static styles = [styles];
    @property({ type: String, reflect: true }) name?: string;
    @property({ type: Boolean, reflect: true }) required?: boolean;
    @property({ type: Boolean }) value = false;

    render() {
        return html`
            <label class="${this.getElementTagName()}_label" for=${ifDefined(this.name)}>
                <input
                    class="${this.getElementTagName()}_input"
                    type="checkbox"
                    id=${ifDefined(this.name)}
                    name=${ifDefined(this.name)}
                    .value=${JSON.stringify(this.value)}
                    ?required=${this.required}
                    ?checked=${this.value}
                    @change=${this._handleChange} />
                <span class="${this.getElementTagName()}_slider"></span>
            </label>
        `;
    }

    protected update(changedProperties: Map<PropertyKey, unknown>) {
        super.update(changedProperties);
        if (!changedProperties.has('value')) return;
        this.internals.setFormValue(JSON.stringify(this.value));
    }

    protected firstUpdated(changedProperties: Map<PropertyKey, unknown>) {
        super.firstUpdated(changedProperties);
        this.internals.setFormValue(JSON.stringify(this.value));
    }

    private _handleChange(e: Event & { target: HTMLInputElement }) {
        this.value = e.target.checked;
        this.dispatchEvent(
            new CustomEvent<boolean>('change', {
                detail: e.target.checked,
                bubbles: true,
                composed: true,
            }),
        );
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ape-switch': ApeSwitch;
    }
}
