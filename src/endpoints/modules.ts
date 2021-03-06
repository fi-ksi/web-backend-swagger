/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security, Path, UploadedFile,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { ModuleResponse, ModuleSubmissionRequest, ModuleSubmitResponse } from '../models/modules';

@Route('modules')
export class EndpointModules extends ProxyController {
    @Security('ksi')
    @Get('{modulesId}')
    public async modulesGetSingle(
        @Request() request: express.Request,
        @Path() modulesId: number,
    ): Promise<ModuleResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('{modulesId}/submit')
    public async modulesSubmitSingle(
        @Request() request: express.Request,
        @Path() modulesId: number,
        @Body() data?: ModuleSubmissionRequest,
    ): Promise<ModuleSubmitResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('{modulesId}/submitFiles')
    public async modulesSubmitFiles(
        @Request() request: express.Request,
        @Path() modulesId: number,
        @UploadedFile() files: File,
    ): Promise<ModuleSubmitResponse> {
        return await this.proxy(request);
    }

}
