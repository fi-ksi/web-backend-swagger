/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Post,
    Route,
    Request,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { ForgottenPasswordRequest, ForgottenPasswordResult } from '../models/forgotten-password';

@Route('forgottenPassword')
export class EndpointForgottenPassword extends ProxyController {
    @Post()
    public async forgottenPasswordReset(
        @Request() request: express.Request,
        @Body() forgottenPasswordRequest: ForgottenPasswordRequest
    ): Promise<ForgottenPasswordResult> {
        return await this.proxy(request);
    }
}
