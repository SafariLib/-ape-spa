import { Router as LitLabsRouter, Routes as LitLabsRoutes } from '@lit-labs/router';

const navigate = (path: `/${string}`, callback: (path: string) => Promise<void>) => {
    callback(path);
    window.history.pushState({}, '', path);
};

export class Router extends LitLabsRouter {
    /**
     * Navigates to the given path using `goto()` and `pushState()`.
     * This is a simple workaround for the fact that `goto()` isn't a navigation method.
     * @param path
     */
    public navigate(path: `/${string}`) {
        return navigate(path, this.goto.bind(this));
    }
}

export class Routes extends LitLabsRoutes {
    /**
     * Navigates to the given path using `goto()` and `pushState()`.
     * This is a simple workaround for the fact that `goto()` isn't a navigation method.
     * @param path
     */
    public navigate(path: `/${string}`) {
        return navigate(path, this.goto.bind(this));
    }
}
