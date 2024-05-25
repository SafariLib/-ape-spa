import { expect, test } from 'vitest';
import {
    getElementFromEvent,
    isNavigationAnchor,
    isNavigationClickEvent,
    isNavigationFromOrigin,
} from './events';

test('isNavigationClickEvent: Should fail on secondary click events', () => {
    [
        new MouseEvent('click', { button: 1 }),
        new MouseEvent('click', { metaKey: true }),
        new MouseEvent('click', { ctrlKey: true }),
        new MouseEvent('click', { shiftKey: true }),
        new MouseEvent('click', { altKey: true }),
        new KeyboardEvent('click'),
    ].forEach(event => expect(isNavigationClickEvent(event as MouseEvent)).toBe(false));
});

test('isNavigationClickEvent: Should pass on primary click events', () => {
    [
        new MouseEvent('click', { button: 0 }),
        new MouseEvent('click', { metaKey: false, ctrlKey: false, shiftKey: false, altKey: false }),
    ].forEach(event => expect(isNavigationClickEvent(event as MouseEvent)).toBe(true));
});

test('getElementFromEvent: Should successfully return an element', () => {
    const anchor = document.createElement('a');
    document.body.appendChild(anchor);
    const event = new MouseEvent('click', { bubbles: true });
    anchor.dispatchEvent(event);

    ['a', 'A'].forEach(tagName => expect(getElementFromEvent(event, tagName)).toBe(anchor));
});

test('getElementFromEvent: Should fail to return an element', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const event = new MouseEvent('click', { bubbles: true });
    div.dispatchEvent(event);

    ['divLol', 'DYV'].forEach(tagName => expect(getElementFromEvent(event, tagName)).toBe(undefined));
});

test('isNavigationAnchor: Should return true for valid navigation anchors', () => {
    const anchor = document.createElement('a');
    anchor.href = 'https://example.com';

    const result = isNavigationAnchor(anchor);
    expect(result).toBe(true);
});

test('isNavigationAnchor: Should return false for invalid navigation anchors', () => {
    const mailAnchor = document.createElement('a');
    mailAnchor.href = 'mailto:test@example.com';
    const telAnchor = document.createElement('a');
    telAnchor.href = 'tel:+1234567890';
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = 'https://example.com';
    downloadAnchor.setAttribute('download', '');

    expect(isNavigationAnchor(mailAnchor)).toBe(false);
    expect(isNavigationAnchor(telAnchor)).toBe(false);
    expect(isNavigationAnchor(downloadAnchor)).toBe(false);
});

test('isNavigationFromOrigin: Should return true if the anchor origin matches the provided origin', () => {
    const anchor = document.createElement('a');
    anchor.href = 'https://example.com/path';
    expect(isNavigationFromOrigin(anchor, 'https://example.com')).toBe(true);
});

test('isNavigationFromOrigin: Should return false if the anchor origin does not match the provided origin', () => {
    const anchor = document.createElement('a');
    anchor.href = 'https://example.com/path';
    expect(isNavigationFromOrigin(anchor, 'https://another-example.com')).toBe(false);
});
