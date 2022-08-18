/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Path
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { DiplomasListResponse } from '../models/diplomas';

@Route('diplomas')
export class EndpointDiplomas extends ProxyController {
    @Get('{userId}')
    public async diplomasListForUserSingle(
        @Request() request: express.Request,
        @Path() userId: number,
    ): Promise<DiplomasListResponse> {
        return await this.proxy(request);
    }
}
