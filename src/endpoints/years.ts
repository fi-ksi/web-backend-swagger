/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security, Path, Put, Delete,
} from 'tsoa';
import { YearCreationRequest, YearResponse, Years, YearUpdateRequest } from '../models/years';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';

@Route('years')
export class EndpointYears extends ProxyController {
    @Get()
    public async yearsGetAll(@Request() request: express.Request): Promise<Years> {
        return await this.proxy(request);
    }

    @Post()
    @Security('ksi')
    public async yearsCreateNew(
        @Request() request: express.Request,
        @Body() yearCreationRequest: YearCreationRequest
    ): Promise<YearResponse> {
        return await this.proxy(request);
    }

    @Get('{yearId}')
    public async yearsGetSingle(
        @Request() request: express.Request,
        @Path() yearId: number,
    ): Promise<YearResponse> {
        return await this.proxy(request);
    }

    @Put('{yearId}')
    @Security('ksi')
    public async yearsUpdateSingle(
        @Request() request: express.Request,
        @Path() yearId: number,
        @Body() yearUpdateRequest: YearUpdateRequest
    ): Promise<YearResponse> {
        return await this.proxy(request);
    }

    @Delete('{yearId}')
    @Security('ksi')
    public async yearsDeleteSingle(
        @Request() request: express.Request,
        @Path() yearId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
