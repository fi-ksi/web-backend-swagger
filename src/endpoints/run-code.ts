/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Post,
    Route,
    Request, Security,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { RunCodeRequest, RunCodeResponse } from '../models/run-code';

@Route('runCode')
export class EndpointRunCode extends ProxyController {
    @Security('ksi')
    @Post('{moduleId}/submit')
    public async runCode(
        @Request() request: express.Request,
        @Body() body: RunCodeRequest
    ): Promise<RunCodeResponse> {
        return await this.proxy(request);
    }
}
