import { expect, test } from 'vitest';
import { getOrigin, getPathParams } from './path';
import { URLPattern } from 'urlpattern-polyfill';

test('getOrigin: Should return the correct origin', () => {
    location.protocol = 'https:';
    location.host = 'example.com';
    location.port = '';
    expect(getOrigin()).toBe('https://example.com');
});

test('getPathParams: Should return the correct path parameters', () => {
    const pattern = new URLPattern({ pathname: '/:id' });
    expect(getPathParams('/123', pattern)).toEqual({ id: '123' });
});

test('getPathParams: Should return an empty object if the pathname does not match the pattern', () => {
    const pattern = new URLPattern({ pathname: '/:id' });
    expect(getPathParams('/abc/def', pattern)).toEqual({});
});

test('getPathParams: Should return an empty object if the pattern is undefined', () => {
    expect(getPathParams('/123', undefined)).toEqual({});
});
