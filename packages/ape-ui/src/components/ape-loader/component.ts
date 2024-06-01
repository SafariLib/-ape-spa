import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Element, mapElements, type RelativeSize } from '../../utils';
import styles from './styles';

@customElement('ape-loader')
export class ApeLoader extends Element {
    static styles = [styles];

    @property({ type: String, reflect: true }) color: 'primary' | 'text' | 'disabled' = 'text';
    @property({ type: String, reflect: true }) size: RelativeSize = 'medium';

    render() {
        return html` <div class=${this.getElementTagName()}> ${mapElements(4, html`<div></div>`)} </div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ape-loader': ApeLoader;
    }
}
