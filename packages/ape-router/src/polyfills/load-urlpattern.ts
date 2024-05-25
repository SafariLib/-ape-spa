(async () => {
    // @ts-expect-error
    if (globalThis?.URLPattern === undefined) {
        console.warn('@ape-spa/ape-router: URLPattern does not exist, importing polyfill');
        await import('urlpattern-polyfill');
    }
})();
