/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security, Path, Delete, Query,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';
import { UserResponse, UsersResponse } from '../models/user';

@Route('users')
export class EndpointUsers extends ProxyController {
    @Security('ksi')
    @Get()
    public async usersGetAll(
        @Request() request: express.Request,
        @Query() filter?: string,
        @Query() sort?: string,
    ): Promise<UsersResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{usersId}')
    public async usersGetSingle(
        @Request() request: express.Request,
        @Path() usersId: number,
    ): Promise<UserResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete('{usersId}')
    public async usersDeleteSingle(
        @Request() request: express.Request,
        @Path() usersId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
