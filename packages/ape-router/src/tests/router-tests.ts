import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '../Router/Router';

@customElement('router-test')
export class RouterTest extends LitElement {
    private _router = new Router(this, {
        routes: [
            {
                path: '/',
                name: 'home',
                render: () => html`<code>Home</code>`,
            },
            {
                path: '/about',
                name: 'about',
                render: () => html`<code>About</code>`,
            },
        ],
        fallback: {
            render: () => html`<code>404 Not Found</code>`,
        },
    });

    render() {
        return html` <div>${this._router.render()}</div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'router-test': RouterTest;
    }
}
