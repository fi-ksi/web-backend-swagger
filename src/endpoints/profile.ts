/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Route,
    Request, Security, Path, Put, Post, UploadedFile
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { ProfileEdit, ProfileResponse } from '../models/profile';
import { EmptyDict } from '../models/emptyDict';

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
        @Body() profileUpdateRequest: ProfileEdit,
    ): Promise<ProfileResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('picture')
    public async profileUploadPicture(
        @Request() request: express.Request,
        @UploadedFile() file: unknown,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
