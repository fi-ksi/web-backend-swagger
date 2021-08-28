import { Controller } from '@tsoa/runtime';
import express from 'express';
import { proxyRequest } from './proxy';

export class ProxyController extends Controller {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected proxy(request: express.Request): Promise<any> {
        return proxyRequest(this, request);
    }
}
