/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security,
    Path,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';

@Route('admin/waves')
export class EndpointAdminWaves extends ProxyController {
    @Security('ksi')
    @Get('{waveId}/diff')
    public async adminWavesDiff(
        @Request() request: express.Request,
        @Path() waveId: number,
    ): Promise<string | EmptyDict> {
        return await this.proxy(request);
    }
}
