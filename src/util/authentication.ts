/* eslint-disable @typescript-eslint/no-unused-vars */
import * as express from 'express';

// noinspection JSUnusedGlobalSymbols
export function expressAuthentication(
    _: express.Request,
    __: string,
    ___?: string[]
): Promise<boolean> {
    // handled on the real backend
    return Promise.resolve(true);
}
