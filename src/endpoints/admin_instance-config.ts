/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Path, Post, Body, Security
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { DiplomasListResponse } from '../models/diplomas';
import { AdminInstanceConfig, AdminInstanceConfigResponse } from '../models/admin_instance-config';

@Route('admin/instanceConfig')
export class EndpointDiplomas extends ProxyController {
    @Security('ksi')
    @Get()
    public async instanceConfigGetAll(
        @Request() request: express.Request,
    ): Promise<AdminInstanceConfigResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post()
    public async instanceConfigSetSingle(
        @Request() request: express.Request,
        @Body() body: AdminInstanceConfig
    ): Promise<string> {
        return await this.proxy(request);
    }
}
