/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Post,
    Route,
    Request, Security,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { ChangePasswordRequest, ChangePasswordResult } from '../models/settings';

@Route('settings')
export class EndpointSettings extends ProxyController {
    @Security('ksi')
    @Post('changePassword')
    public async forgottenPasswordReset(
        @Request() request: express.Request,
        @Body() forgottenPasswordRequest: ChangePasswordRequest
    ): Promise<ChangePasswordResult> {
        return await this.proxy(request);
    }
}
