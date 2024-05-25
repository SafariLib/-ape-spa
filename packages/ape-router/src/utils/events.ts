export const isNavigationClickEvent = (event: MouseEvent) =>
    event instanceof MouseEvent &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey;

export const getElementFromEvent = (event: MouseEvent, tagName: string) =>
    event.composedPath().filter(n => (n as HTMLElement).tagName === tagName.toUpperCase())[0] as
        | HTMLAnchorElement
        | undefined;

export const isNavigationAnchor = (anchor: HTMLAnchorElement) =>
    anchor.href !== '' &&
    !anchor.href.startsWith('mailto:') &&
    !anchor.href.startsWith('tel:') &&
    !anchor.hasAttribute('download') &&
    anchor.getAttribute('rel') !== 'external';

export const isNavigationFromOrigin = (anchor: HTMLAnchorElement, origin: string) => anchor.origin === origin;
