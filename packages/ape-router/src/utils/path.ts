import type { URLPattern } from 'urlpattern-polyfill';

/**
 * Get the origin of the current location.
 * @example
 * ```ts
 * const origin = getOrigin();
 * console.log(origin);
 * // 'http://localhost:8080'
 * ```
 */
export const getOrigin = () => location.origin || `${location.protocol}//${location.host}`;

export const getPathParams = (pathname: string, pattern: URLPattern | undefined) =>
    pattern?.exec({ pathname })?.pathname.groups ?? {};
