/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Post,
    Route,
    Request, Security, Delete, Query, UploadedFiles
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';
import { DirContentResponse } from '../models/content';

@Route('content')
export class EndpointContents extends ProxyController {
    @Post()
    @Security('ksi')
    public async contentsCreateNew(
        @Request() request: express.Request,
        @UploadedFiles() files: unknown,
        @Query() path?: string,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get()
    public async contentsGetSingle(
        @Request() request: express.Request,
        @Query() path?: string,
    ): Promise<Uint8Array | DirContentResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete()
    public async contentsDeleteSingle(
        @Request() request: express.Request,
        @Query() path?: string,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
