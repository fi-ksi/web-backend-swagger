/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Route,
    Request, Security, Get,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';

@Route('logout')
export class EndpointFeedback extends ProxyController {
    @Get()
    @Security('ksi')
    public async sendEmailWithFeedback(
        @Request() request: express.Request,
    ): Promise<void> {
        return await this.proxy(request);
    }
}
