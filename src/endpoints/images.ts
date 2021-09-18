/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security, Path, Query
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';

@Route('images')
export class EndpointImages extends ProxyController {
    @Security('ksi')
    @Get('{context}/{imagesId}')
    public async imagesGetSingle(
        @Request() request: express.Request,
        @Path() context: string,
        @Path() imagesId: number,
        @Query() file?: string,
        @Query() module?: number,
        @Query() user?: number,
    ): Promise<Uint8Array> {
        return await this.proxy(request);
    }
}
