<!-- markdownlint-disable-next-line -->
<p align="center">
    <img width="100%" src="../../assets/APE-SPA-logo.svg" alt="APE SPA logo">
</p>

---

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

# APE-Router

**APE Router** is a part of **APE SPA project**, a frontend library for building Web applications.

This library provides methods to handle a fronted router in a JS/TS vanilla frontend.

## Installation

```bash
npm install @ape-spa/ape-router
```

## Usage

```typescript
export class Demo extends LitElement {
    private _router = new Router(this, {
        routes: [
            {
                path: '/',
                name: 'home',
                render: () => html`Home`,
            },
            {
                path: '/user/:id',
                name: 'User',
                render: params => html`User: ${params?.id}`,
            },
        ],
        fallback: {
            render: () => html`Not Found`,
        },
    });

    render() {
        return html`
            <div>
                <nav class="navigation">
                    <a href="/">Go to Home</a>
                    <a href="/user/1">Go to User 1</a>
                    <a href="/user/2">Go to User 2</a>
                    <a href="/unknown">Go to 404 (unknown path)</a>
                </nav>
                <div>
                    ${this._router.render()}
                </div>
            </div>
        `;
    }
}
```
