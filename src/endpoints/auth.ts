/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Post,
    Route,
    Request,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { AuthRequest, AuthResponse } from '../models/auth';

@Route('auth')
export class EndpointAuth extends ProxyController {
    @Post()
    public async authorize(
        @Request() request: express.Request,
        @Body() body: AuthRequest
    ): Promise<AuthResponse> {
        return await this.proxy(request);
    }
}
