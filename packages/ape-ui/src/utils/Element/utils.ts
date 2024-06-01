import type { TemplateResult } from 'lit';

/**
 * Maps a number of elements to a template result.
 * @param length - *The number of elements to map.*
 * @param callback - *The template result to map.*
 * #### example
 * ```ts
 * mapElements(4, html`<div></div>`);
 * ```
 * Returns 4 div elements.
 */
export const mapElements = (length: number, callback: TemplateResult) =>
    Array(length)
        .fill(null)
        .map(() => callback);
