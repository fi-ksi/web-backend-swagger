/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security,
    Path,
    Query,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { Execution, ExecutionResult, ExecutionsResponse } from '../models/admin_execs';

@Route('admin/execs')
export class EndpointAdminExecs extends ProxyController {
    @Security('ksi')
    @Get('{executionId}')
    public async executionGetSingle(
        @Request() request: express.Request,
        @Path() executionId: number,
    ): Promise<Execution> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get()
    public async executionGetMultiple(
        @Request() request: express.Request,
        @Query() user?: number,
        @Query() module?: number,
        @Query() limit?: number,
        @Query() page?: number,
        @Query() from?: string,
        @Query() to?: string,
        @Query() result?: ExecutionResult,
    ): Promise<ExecutionsResponse> {
        return await this.proxy(request);
    }
}
