/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security, Path
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { CorrectionInfoResponse, CorrectionInfosAllResponse } from '../models/admin_correction_infos';

@Route('admin/correctionInfos')
export class EndpointAdminCorrections extends ProxyController {
    @Security('ksi')
    @Get()
    public async adminCorrectionInfosGetAll(
        @Request() request: express.Request,
    ): Promise<CorrectionInfosAllResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{taskId}')
    public async adminCorrectionInfosGetSingle(
        @Request() request: express.Request,
        @Path('taskId') taskId: number,
    ): Promise<CorrectionInfoResponse> {
        return await this.proxy(request);
    }
}
