import { getOrigin, isNavigationAnchor, isNavigationClickEvent, isNavigationFromOrigin } from '../utils';
import { renderTests } from './helper';

const utilityTests = document.getElementById('utility-tests') as HTMLDivElement;
renderTests(utilityTests, [
    {
        name: 'getOrigin',
        test: () => getOrigin(),
    },
    {
        name: 'isNavigationClickEvent(): On left-click',
        test: () => isNavigationClickEvent(new MouseEvent('click', { ctrlKey: true })),
    },
    {
        name: 'isNavigationClickEvent(): On right-click',
        test: () => isNavigationClickEvent(new MouseEvent('click', { button: 2 })),
    },
    {
        name: 'isNavigationClickEvent(): On middle-click',
        test: () => isNavigationClickEvent(new MouseEvent('click', { button: 1 })),
    },
    {
        name: 'isNavigationClickEvent(): On metaKey',
        test: () => isNavigationClickEvent(new MouseEvent('click', { metaKey: true })),
    },
    {
        name: 'isNavigationClickEvent(): On ctrlKey',
        test: () => isNavigationClickEvent(new MouseEvent('click', { ctrlKey: true })),
    },
    {
        name: 'isNavigationClickEvent(): On shiftKey',
        test: () => isNavigationClickEvent(new MouseEvent('click', { shiftKey: true })),
    },
    {
        name: 'isNavigationClickEvent(): On altKey',
        test: () => isNavigationClickEvent(new MouseEvent('click', { altKey: true })),
    },
    {
        name: 'isNavigationClickEvent(): On MouseEvent',
        test: () => isNavigationClickEvent(new MouseEvent('click')),
    },
    {
        name: 'isNavigationAnchor(): On href=""',
        test: () =>
            isNavigationAnchor(
                (() => {
                    const anchor = document.createElement('a');
                    anchor.href = '';
                    return anchor;
                })(),
            ),
    },
    {
        name: 'isNavigationAnchor(): On href="mailto:test@mail.com"',
        test: () =>
            isNavigationAnchor(
                (() => {
                    const anchor = document.createElement('a');
                    anchor.href = 'mailto:test@mail.com';
                    return anchor;
                })(),
            ),
    },
    {
        name: 'isNavigationAnchor(): On href="https://example.com"',
        test: () =>
            isNavigationAnchor(
                (() => {
                    const anchor = document.createElement('a');
                    anchor.href = 'https://example.com';
                    return anchor;
                })(),
            ),
    },
    {
        name: 'isNavigationFromOrigin(): On origin',
        test: () =>
            isNavigationFromOrigin(
                (() => {
                    const anchor = document.createElement('a');
                    anchor.href = 'https://example.com';
                    return anchor;
                })(),
                'https://example.com',
            ),
    },
    {
        name: 'isNavigationFromOrigin(): Not on origin',
        test: () =>
            isNavigationFromOrigin(
                (() => {
                    const anchor = document.createElement('a');
                    anchor.href = 'https://example.com';
                    return anchor;
                })(),
                'https://example.org',
            ),
    },
]);
