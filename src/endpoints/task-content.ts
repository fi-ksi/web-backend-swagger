/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security, Path,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';

@Route('task-content')
export class EndpointTaskContent2 extends ProxyController {
    @Security('ksi')
    @Get('{contentId}/{view}')
    public async taskContentGetSingle(
        @Request() request: express.Request,
        @Path() view: string,
        @Path() contentId: string,
    ): Promise<Uint8Array> {
        return await this.proxy(request);
    }
}
