/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Post,
    Route,
    Request,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { FeedbackRequest, FeedbackResponse } from '../models/feedback';

@Route('feedback')
export class EndpointFeedback extends ProxyController {
    @Post()
    public async sendEmailWithFeedback(
        @Request() request: express.Request,
        @Body() body: FeedbackRequest
    ): Promise<FeedbackResponse> {
        return await this.proxy(request);
    }
}
