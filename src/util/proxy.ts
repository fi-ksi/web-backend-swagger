import { Request } from 'express';
import fetch, { RequestInit } from 'node-fetch';
import { Controller } from '@tsoa/runtime';

export const proxyHost = 'http://localhost:3030';

export async function proxyRequest(controller: Controller, request: Request): Promise<unknown> {
    const options: RequestInit = {
        method: request.method,
        headers: {...request.headers as {[key: string]: string}}
    };

    if (request.method.toUpperCase() !== 'GET') {
        options.body = request.body;
    }

    const urlParams = Object
        .keys(request.params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(request.params[key])}`)
        .join('&');

    const response = await fetch(`${proxyHost}/${request.path}?${urlParams}`, options);
    controller.setStatus(response.status);
    response.headers.forEach((value, name) => {
        controller.setHeader(name, value);
    });
    return response.json();
}
