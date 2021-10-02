/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security, Path, Put, Delete, Header,
} from 'tsoa';
import { WaveCreationRequest, WaveResponse, Waves, WaveUpdateRequest } from '../models/waves';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';

@Route('waves')
export class EndpointWaves extends ProxyController {
    @Get()
    public async wavesGetAll(
        @Request() request: express.Request,
        @Header('YEAR') year?: number
    ): Promise<Waves> {
        return await this.proxy(request);
    }

    @Post()
    @Security('ksi')
    public async wavesCreateNew(
        @Request() request: express.Request,
        @Body() waveCreationRequest: WaveCreationRequest
    ): Promise<WaveResponse> {
        return await this.proxy(request);
    }

    @Get('{waveId}')
    public async wavesGetSingle(
        @Request() request: express.Request,
        @Path() waveId: number,
    ): Promise<WaveResponse> {
        return await this.proxy(request);
    }

    @Put('{waveId}')
    @Security('ksi')
    public async wavesUpdateSingle(
        @Request() request: express.Request,
        @Path() waveId: number,
        @Body() waveUpdateRequest: WaveUpdateRequest
    ): Promise<WaveResponse> {
        return await this.proxy(request);
    }

    @Delete('{waveId}')
    @Security('ksi')
    public async wavesDeleteSingle(
        @Request() request: express.Request,
        @Path() waveId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
