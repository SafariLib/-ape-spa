import mainStyles from './styles/main.js';
import themeStyles from './styles/theme.js';
import typographyStyles from './styles/typography.js';
import scrollbarStyles from './styles/scrollbar.js';

export const stylesheets = {
    '/styles/main.css': mainStyles,
    '/styles/theme.css': themeStyles,
    '/styles/typography.css': typographyStyles,
    '/styles/scrollbar.css': scrollbarStyles,
};

export { default as renderAppView } from './views/app.js';
export { default as renderErrorView } from './views/error.js';
