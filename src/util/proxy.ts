import { Request } from 'express';
import fetch, { RequestInit } from 'node-fetch';
import { Controller } from '@tsoa/runtime';

export const proxyHost =  process.env.PROXY_HOST || 'http://localhost:3030';

export async function proxyRequest(controller: Controller, request: Request): Promise<unknown> {
    const options: RequestInit = {
        method: request.method,
        headers: {...request.headers as {[key: string]: string}}
    };
    if (options.headers && 'host' in options.headers) {
        delete options.headers['host'];
    }

    if (request.method.toUpperCase() !== 'GET') {
        options.body = request.body;
    }

    const urlParams = Object
        .keys(request.params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(request.params[key])}`)
        .join('&');

    const url = `${proxyHost}/${request.path}?${urlParams}`;
    console.debug('[PROXY-REQUEST]', url);
    const response = await fetch(url, options);
    controller.setStatus(response.status);
    response.headers.forEach((value, name) => {
        controller.setHeader(name, value);
    });
    const responseTypeRaw = controller.getHeader('content-type');
    let responseType = '';
    if (responseTypeRaw instanceof Array) {
        responseType = responseTypeRaw.join('; ');
    } else if (responseTypeRaw !== undefined) {
        responseType = `${responseTypeRaw}`;
    }
    responseType = responseType.toLowerCase();

    if (responseType.indexOf('application/json') > -1) {
        const responseText = `${await response.text()}`;
        console.debug('[PROXY-RESPONSE]', url);
        try {
            return Promise.resolve(JSON.parse(responseText));
        } catch (e) {
            return Promise.resolve(responseText);
        }
    } else {
        console.debug('[PROXY-RESPONSE]', url, '[BLOB]', responseType, responseTypeRaw);
        return Promise.resolve(await response.blob());
    }
}
