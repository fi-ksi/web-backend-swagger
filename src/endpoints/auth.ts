/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Post,
    Route,
    Request,
    FormField
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { AuthGrantType, AuthResponse } from '../models/auth';

@Route('auth')
export class EndpointAuth extends ProxyController {
    @Post()
    public async authorize(
        @Request() request: express.Request,
        @FormField('grant_type') grantType: AuthGrantType,
        @FormField() username?: string,
        @FormField() password?: string,
        @FormField('refresh_token') refresh_token?: string
    ): Promise<AuthResponse> {
        return await this.proxy(request);
    }
}
