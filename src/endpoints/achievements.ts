/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security, Path, Put, Delete, Query, Header,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';
import { AchievementCreationRequest, AchievementResponse, AchievementsResponse } from '../models/achievements';

@Route('achievements')
export class EndpointAchievements extends ProxyController {
    @Get()
    public async achievementsGetAll(
        @Request() request: express.Request,
        @Query() _limit?: number,
        @Query() _start?: number,
        @Header() achievement?: number,
        @Header() year?: number
    ): Promise<AchievementsResponse> {
        return await this.proxy(request);
    }

    @Post()
    @Security('ksi')
    public async achievementsCreateNew(
        @Request() request: express.Request,
        @Body() achievementCreationRequest: AchievementCreationRequest
    ): Promise<AchievementCreationRequest> {
        return await this.proxy(request);
    }

    @Get('{achievementId}')
    public async achievementsGetSingle(
        @Request() request: express.Request,
        @Path() achievementId: number,
    ): Promise<AchievementResponse> {
        return await this.proxy(request);
    }

    @Get('special/successful')
    public async achievementsGetSuccessful(
        @Request() request: express.Request,
    ): Promise<AchievementResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('{achievementId}')
    public async achievementsEditSingle(
        @Request() request: express.Request,
        @Path() achievementId: number,
        @Body() achievementUpdateRequest: AchievementCreationRequest,
    ): Promise<AchievementResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete('{achievementId}')
    public async achievementsDeleteSingle(
        @Request() request: express.Request,
        @Path() achievementId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
