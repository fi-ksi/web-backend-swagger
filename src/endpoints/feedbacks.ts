/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security, Path, Put, Delete,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';
import {
    FeedbackCreationRequest,
    FeedbackResponse,
    FeedbackUpdateRequest
} from '../models/feedbacks';

@Route('feedbacks')
export class EndpointFeedbacks extends ProxyController {
    @Post()
    @Security('ksi')
    public async feedbackCreateNew(
        @Request() request: express.Request,
        @Body() feedbackCreationRequest: FeedbackCreationRequest
    ): Promise<FeedbackCreationRequest> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{feedbackId}')
    public async feedbackGetSingle(
        @Request() request: express.Request,
        @Path() feedbackId: number,
    ): Promise<FeedbackResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('{feedbackId}')
    public async feedbackEditSingle(
        @Request() request: express.Request,
        @Path() feedbackId: number,
        @Body() feedbackUpdateRequest: FeedbackUpdateRequest,
    ): Promise<FeedbackResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete('{feedbackId}')
    public async feedbackDeleteSingle(
        @Request() request: express.Request,
        @Path() feedbackId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
