import '@fontsource/allison/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { html } from 'lit';
import { stylesheets } from '../src/components-utils/stylesheets';

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
                    ${stylesheets.spacing}
                    ${stylesheets.text}
                    ${stylesheets.themeLight}
                    ${stylesheets.themeDark}
                </style>
                ${story()}`,
    ],
};
