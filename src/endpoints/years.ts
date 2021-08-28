/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security,
} from 'tsoa';
import { YearCreationRequest, YearResponse, YearsResponse } from '../models/yearsResponse';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';

@Route('years')
export class EndpointYears extends ProxyController {
    @Get()
    public async getAll(@Request() request: express.Request): Promise<YearsResponse> {
        return await this.proxy(request);
    }

    @Post()
    @Security('ksi')
    public async createNew(
        @Request() request: express.Request,
        @Body() yearCreationRequest: YearCreationRequest
    ): Promise<YearResponse> {
        return await this.proxy(request);
    }
}
