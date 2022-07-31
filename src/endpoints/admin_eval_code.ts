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
import { CodeEvaluationResponse } from '../models/admin_eval_code';

@Route('admin/evalCodes')
export class EndpointAdminEvalCodes extends ProxyController {
    @Security('ksi')
    @Get('{evaluationId}')
    public async adminEvaluationGetSingle(
        @Request() request: express.Request,
        @Path() evaluationId: number,
    ): Promise<CodeEvaluationResponse> {
        return await this.proxy(request);
    }
}
