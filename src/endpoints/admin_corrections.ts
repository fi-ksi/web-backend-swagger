/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security, Path, Query
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';

@Route('admin/corrections')
export class EndpointAdmin extends ProxyController {
    @Security('ksi')
    @Get('{correctionId}/publish')
    public async adminCorrectionsPublish(
        @Request() request: express.Request,
        @Path('correctionId') correctionId: number,
        @Query('public') publish: 0 | 1,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
