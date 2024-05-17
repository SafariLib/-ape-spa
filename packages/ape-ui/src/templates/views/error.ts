import { html } from '../../utils.js';
import renderAppView from './app.js';

export default (error: { name: string; url: string; message: string }) =>
    renderAppView({
        story: html`
            <div class="ape-story-error">
                <h1>${error.name}</h1>
                <p><em>${error.url}</em> ${error.message}</p>
            </div>
        `,
    });
