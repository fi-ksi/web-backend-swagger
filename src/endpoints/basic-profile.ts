/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { BasicProfileResponse } from '../models/basic-profile';

@Route('basicProfile')
export class EndpointBasicProfile extends ProxyController {
    @Security('ksi')
    @Get()
    public async basicProfileGetSingle(
        @Request() request: express.Request,
    ): Promise<BasicProfileResponse> {
        return await this.proxy(request);
    }
}
