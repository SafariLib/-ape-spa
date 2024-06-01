import type { CSSResult } from "lit";

export const domSheetsImport  = (sheets: CSSResult[]) => {
    const theme = sheets.map(sheet => sheet.cssText).join('\n');
    const themeElement = document.createElement('style');
    themeElement.innerHTML = theme;
    document.body.appendChild(themeElement);
};
