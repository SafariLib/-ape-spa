import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BaseIcon } from '../component';

@customElement('ape-icon-ellipsis')
export class EllipsisIcon extends BaseIcon {
    render() {
        return html`
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16">
                <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'ape-icon-ellipsis': EllipsisIcon;
    }
}
