import {
    getElementFromEvent,
    getLocationOrigin,
    getPathParams,
    isNavigationAnchor,
    isNavigationClickEvent,
    isNavigationFromOrigin,
} from '../utils';
import type { ReactiveControllerHost } from 'lit';
import type { Route, RouteParameters, RouterConfiguration, View } from './types';

/**
 * Router controller that handles navigation and rendering of views. Create a new instance of Router
 * by passing the host and a configuration object containing the routes and a fallback view.
 * @warning
 * - The routes array contains objects with a path, name, and render function.
 * - The fallback object contains a render function that will be used when no route is found.
 * - Don't create multiple instances of Router.
 */
export class Router {
    private readonly _host: ReactiveControllerHost;
    private readonly _routes: Array<Route> = [];
    private readonly _fallback: View | undefined;

    private _currentRoute: (Route & { params: RouteParameters }) | undefined;

    constructor(host: ReactiveControllerHost, payload: RouterConfiguration) {
        this._host = host;
        this._routes = payload.routes.map(route => ({
            ...route,
            pattern: new URLPattern({ pathname: route.path }),
        }));
        this._fallback = payload.fallback;

        window.addEventListener('popstate', this._onPopState);
        document.addEventListener('click', this._handleClick.bind(this));
        this._navigate(window.location.pathname);
    }

    render() {
        return this._currentRoute?.render(this._currentRoute.params);
    }

    private _navigate(pathname: string) {
        const route = this._getRoute(pathname);
        const params = getPathParams(pathname, route.pattern);
        this._currentRoute = { ...route, params };
        this._host.requestUpdate();
    }

    private _getRoute(pathname: string) {
        const route = this._routes.find(route => route.pattern?.test({ pathname }));
        if (!route && !this._fallback)
            throw new Error('@ape-spa/ape-router: No route found, set a fallback route to avoid this error.');
        if (route) return route;
        return { ...this._fallback, path: '/' } as Route;
    }

    private _handleClick(event: MouseEvent) {
        const anchor = getElementFromEvent(event, 'a');
        if (
            !anchor ||
            !isNavigationClickEvent(event) ||
            !isNavigationAnchor(anchor) ||
            !isNavigationFromOrigin(anchor, getLocationOrigin())
        )
            return;

        event.preventDefault();
        window.history.pushState({}, '', anchor.href);
        this._navigate(anchor.pathname);
    }

    private _onPopState = () => this._navigate(window.location.pathname);
}
