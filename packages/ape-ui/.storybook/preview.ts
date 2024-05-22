import { html } from 'lit';
import { spacing, text, themeDark, themeLight } from '../src/components-utils/stylesheets';
import '@fontsource/allison/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (story: any) =>
            html`<style>
                    ${spacing}
                    ${text}
                    ${themeLight}
                    ${themeDark}
                </style>
                ${story()}`,
    ],
};
