/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security, Path, Put, Query, Header,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';
import { ThreadResponse, ThreadsCreationRequest, ThreadsResponse } from '../models/threads';

@Route('threads')
export class EndpointThreads extends ProxyController {
    @Security('ksi')
    @Get()
    public async threadsGetAll(
        @Request() request: express.Request,
        @Query() wave?: number,
        @Header() year?: number): Promise<ThreadsResponse> {
        return await this.proxy(request);
    }

    @Post()
    @Security('ksi')
    public async threadsCreateNew(
        @Request() request: express.Request,
        @Body() threadsCreationRequest: ThreadsCreationRequest
    ): Promise<ThreadResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{threadsId}')
    public async threadsGetSingle(
        @Request() request: express.Request,
        @Path() threadsId: number,
    ): Promise<ThreadResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('{threadsId}')
    public async threadsMarkVisited(
        @Request() request: express.Request,
        @Path() threadsId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
