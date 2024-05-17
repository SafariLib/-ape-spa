import http from 'node:http';
import { renderAppView, renderErrorView, stylesheets } from './templates/index.js';

const server = http.createServer();

server.on('request', async (req, res) => {
    const endpoint = req.url ?? '/';
    switch (endpoint) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(renderAppView());
            return;

        case '/styles/main.css':
        case '/styles/theme.css':
        case '/styles/typography.css':
        case '/styles/scrollbar.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(stylesheets[endpoint]);
            return;

        case '/subscribe':
            const headers = {
                'Content-Type': 'text/event-stream',
                Connection: 'keep-alive',
                'Cache-Control': 'no-cache',
            };
            res.writeHead(200, headers);
            res.write('data: connected');
            return;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(
                renderErrorView({
                    name: '404 Not Found',
                    url: endpoint,
                    message: 'could not be found.',
                }),
            );
            return;
    }
});

server.listen(8080, () => console.log('Ape-Story Server is running on http://localhost:8080'));
