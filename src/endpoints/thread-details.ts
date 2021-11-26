/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security, Path,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import {
    ThreadDetailResponse,
} from '../models/thread-details';

@Route('threadDetails')
export class EndpointThreadDetails extends ProxyController {

    @Security('ksi')
    @Get('{threadDetailsId}')
    public async threadDetailsGetSingle(
        @Request() request: express.Request,
        @Path() threadDetailsId: number,
    ): Promise<ThreadDetailResponse> {
        return await this.proxy(request);
    }
}
