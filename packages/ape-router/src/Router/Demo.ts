import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from './Router';
import { demoStyles } from './styles';

@customElement('router-demo')
export class Demo extends LitElement {
    static styles = [demoStyles];
    private _router = new Router(this, {
        routes: [
            {
                path: '/',
                name: 'home',
                render: () => html`Home`,
            },
            {
                path: '/about',
                name: 'about',
                render: () => html`About`,
            },
            {
                path: '/user/:id',
                name: 'User',
                render: params => html`User: ${params?.id}`,
            },
        ],
        fallback: {
            render: () => html`404 Not Found`,
        },
    });

    render() {
        return html`
            <main>
                <nav class="navigation">
                    <a href="/">Go to Home</a>
                    <a href="/about">Go to About</a>
                    <a href="/user/1">Go to User 1</a>
                    <a href="/user/2">Go to User 2</a>
                    <a href="/user/3">Go to User 3</a>
                    <a href="/user/4">Go to User 4</a>
                    <a href="/unknown">Go to 404 (unknown path)</a>
                </nav>
                <hr />
                <code class="render"> Current page: ${this._router.render()} </code>
            </main>
        `;
    }
}
