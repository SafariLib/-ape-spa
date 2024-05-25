import type { URLPattern } from 'urlpattern-polyfill';

export type RouteParameters = Record<string, string | undefined>;

export interface View {
    name?: string;
    render: (params?: RouteParameters) => unknown;
}

export interface Route extends View {
    path: string;
    pattern?: URLPattern;
}

export interface RouterConfiguration {
    routes: Array<Route>;
    fallback?: View;
}
