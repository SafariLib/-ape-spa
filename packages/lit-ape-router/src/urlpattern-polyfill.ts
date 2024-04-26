/**
 * Load the URLPattern polyfill if it does not exist
 */
export const loadUrlpatternPolyfill = async () => {
    // @ts-ignore
    if (globalThis?.URLPattern === undefined) {
        console.warn('@ape-spa/lit-ape-router: URLPattern does not exist, importing polyfill');
        await import('urlpattern-polyfill');
    }
};
