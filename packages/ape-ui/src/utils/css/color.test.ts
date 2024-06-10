import { expect, test } from 'vitest';
import { isValidColor } from './color';

test('isValidColor: Should return false on invalid color', () => {
    expect(isValidColor('invalid')).toBe(false);
    expect(isValidColor('')).toBe(false);
    expect(isValidColor('ffffff')).toBe(false);
    expect(isValidColor('fff')).toBe(false);
    expect(isValidColor('rgb(0)')).toBe(false);
});

test('isValidColor: Should return true on valid color', () => {
    expect(isValidColor('red')).toBe(true);
    expect(isValidColor('rgb(0, 0, 0)')).toBe(true);
    expect(isValidColor('#000')).toBe(true);
    expect(isValidColor('#000000')).toBe(true);
    expect(isValidColor('hsl(0, 0%, 0%)')).toBe(true);
    expect(isValidColor('hsla(0, 0%, 0%, 0)')).toBe(true);
    expect(isValidColor('transparent')).toBe(true);
});