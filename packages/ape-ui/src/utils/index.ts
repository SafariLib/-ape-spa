export * from './Element';
export * from './stylesheets';
export * from './types';

import { domSheetsImport, spacing, text, themeDark, themeLight } from './stylesheets';
domSheetsImport([spacing, text, themeDark, themeLight]);