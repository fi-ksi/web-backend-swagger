/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security, Path, Delete,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';

@Route('submFiles')
export class EndpointSubmFiles extends ProxyController {

    @Security('ksi')
    @Get('{submFileId}')
    public async submFilesGetSingle(
        @Request() request: express.Request,
        @Path() submFileId: number,
    ): Promise<Uint8Array> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete('{submFileId}')
    public async subFilesDeleteSingle(
        @Request() request: express.Request,
        @Path() submFileId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
