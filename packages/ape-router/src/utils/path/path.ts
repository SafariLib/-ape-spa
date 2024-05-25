import type { URLPattern } from 'urlpattern-polyfill';

export const getOrigin = () => location.origin || `${location.protocol}//${location.host}`;

export const getPathParams = (pathname: string, pattern: URLPattern | undefined) =>
    pattern?.exec({ pathname })?.pathname.groups ?? {};
