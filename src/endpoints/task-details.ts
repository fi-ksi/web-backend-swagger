/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security, Path,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { TaskDetailResponse } from '../models/task-details';

@Route('taskDetails')
export class EndpointTaskDetails extends ProxyController {
    @Security('ksi')
    @Get('{taskDetailsId}')
    public async taskDetailsGetSingle(
        @Request() request: express.Request,
        @Path() taskDetailsId: number,
    ): Promise<TaskDetailResponse> {
        return await this.proxy(request);
    }
}
