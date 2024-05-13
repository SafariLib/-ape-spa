import { html } from '../../utils.js';

export default (payload?: { story?: string }) => html`
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet" />
            <link
                href="https://fonts.googleapis.com/css2?family=Allison&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet" />
            <link href="/styles/main.css" rel="stylesheet" />
            <link href="/styles/theme.css" rel="stylesheet" />
            <link href="/styles/typography.css" rel="stylesheet" />
            <link href="/styles/scrollbar.css" rel="stylesheet" />
            <title>Ape-Stories</title>
        </head>
        <script>
            const hotReload = new EventSource('/subscribe');
            // Disgusting hack to reload the page when the server restarts
            hotReload.onerror = () => setTimeout(() => window.location.reload(), 100);
            hotReload.onopen = () => console.info('Connected to Ape-Story server');
        </script>
        <body>
            <div id="root">
                <section class="ape-story-navigation">
                    <nav></nav>
                </section>
                <main class="ape-story-main">
                    <header class="ape-story-header">
                        <h2>COMPONENT NAME</h2>
                        <div class="ape-story-light-switch"></div>
                    </header>
                    <section>${payload?.story}</section>
                </main>
            </div>
        </body>
    </html>
`;
