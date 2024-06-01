import { html } from 'lit';
import '../src/index';
import './fontsources';

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
            html`${story()}`,
    ],
};
