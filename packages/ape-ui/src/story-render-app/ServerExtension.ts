import type { IncomingMessage, OutgoingMessage } from 'node:http';
import { Server } from 'node:http';

export type RequestCallback = (req: IncomingMessage, res: OutgoingMessage) => void;
export type ServerEvent =
    | 'close'
    | 'connection'
    | 'error'
    | 'listening'
    | 'checkContinue'
    | 'checkExpectation'
    | 'clientError'
    | 'connect'
    | 'dropRequest'
    | 'request'
    | 'upgrade';

export interface EventOptions {
    event: ServerEvent;
    data: string;
}

export class ApeServer extends Server {
    public get(path: string, callback: (req: IncomingMessage, res: OutgoingMessage) => void) {
        this.on('request', (req, res) => {
            if (req.method !== 'GET' || req.url !== path) return;
            callback(req, res);
        });
    }

    public subscribe(path: string, callback: (req: IncomingMessage, res: OutgoingMessage) => void) {
        this.on('request', (req, res) => {
            if (req.method !== 'GET' || req.url !== path) return;
            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                Connection: 'keep-alive',
                'Cache-Control': 'no-cache',
            });
            callback(req, res);
        });
    }
}

const validateMethod = (req: IncomingMessage, method: string) => {
    if (req.method !== method) throw new Error(`Method ${req.method} not allowed`);
};
