/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Post,
    Route,
    Request, Security
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import {
    AchievementGrantRequest,
    AchievementGrantResponse
} from '../models/achievements';

@Route('admin/achievements')
export class EndpointAdminAchievements extends ProxyController {
    @Post('grant')
    @Security('ksi')
    public async adminAchievementsGrant(
        @Request() request: express.Request,
        @Body() achievementCreationRequest: AchievementGrantRequest
    ): Promise<AchievementGrantResponse> {
        return await this.proxy(request);
    }
}
