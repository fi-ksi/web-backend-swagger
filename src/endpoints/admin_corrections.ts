/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security, Path, Query, Put, Body, Header
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';
import {
    CorrectionResponse,
    CorrectionsAllResponse,
    CorrectionState,
    CorrectionUpdateRequest
} from '../models/admin_corrections';

@Route('admin/corrections')
export class EndpointAdminCorrections extends ProxyController {
    @Security('ksi')
    @Get()
    public async adminCorrectionsGetAll(
        @Request() request: express.Request,
        @Query('task') taskId?: number,
        @Query('participant') userId?: number,
        @Query('state') state?: CorrectionState,
        @Header() year?: number
    ): Promise<CorrectionsAllResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{correctionId}/publish')
    public async adminCorrectionsPublish(
        @Request() request: express.Request,
        @Path('correctionId') correctionId: number,
        @Query('public') publish: 0 | 1,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{correctionId}')
    public async adminCorrectionsGetSingle(
        @Request() request: express.Request,
        @Path('correctionId') correctionId: number,
    ): Promise<CorrectionResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('{correctionId}')
    public async adminCorrectionsUpdateSingle(
        @Request() request: express.Request,
        @Path('correctionId') correctionId: number,
        @Body() correctionUpdateRequest: CorrectionUpdateRequest,
    ): Promise<CorrectionResponse> {
        return await this.proxy(request);
    }
}
