/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Route,
    Request, Security, Path, Put
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { ProfileEdit, ProfileResponse } from '../models/profile';

@Route('profile')
export class EndpointProfile extends ProxyController {
    @Security('ksi')
    @Get()
    public async profileGetMy(
        @Request() request: express.Request,
    ): Promise<ProfileResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{profileId}')
    public async profileGetSingle(
        @Request() request: express.Request,
        @Path() profileId: number,
    ): Promise<ProfileResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put()
    public async profileEditMy(
        @Request() request: express.Request,
        @Path() profileId: number,
        @Body() profileUpdateRequest: ProfileEdit,
    ): Promise<ProfileResponse> {
        return await this.proxy(request);
    }
}
