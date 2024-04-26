<!-- markdownlint-disable-next-line -->
<p align="center">
    <img width="100%" src="../../assets/APE-SPA-logo.svg" alt="APE SPA logo">
</p>

---

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

# lit-ape-router

**\*lit-ape-router** is a part of **APE SPA project**, a frontend library for building Web applications.\*

lit-ape-router is a library that serves as an augmentation and polyfill for `@lit-labs/router`, providing additional functionality and compatibility with the **urlpattern API**.

## Installation

```
npm install @ape-spa/lit-ape-router

```

## Usage

Use the extended classes from the main index.

```typescript
import { Router, Routes } from '@ape-spa/lit-ape-router';
```

The urlpattern polyfill is optionnal. Import `loadUrlpatternPolyfill` from `@ape-spa/lit-ape-router` and execute it. If URLPattern is `undefined` then the library will be loaded.

## Sources

-   https://www.npmjs.com/package/@lit-labs/router
-   https://www.npmjs.com/package/urlpattern-polyfill
-   https://developer.mozilla.org/en-US/docs/Web/API/URL_Pattern_API
