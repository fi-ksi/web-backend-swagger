/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security, Post, Body, Path, Query, Put, Header, UploadedFile
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import {
    CorrectionEvaluation,
    EmailSendRequest,
    EmailSendResponse,
    MonitoringDashboardURLResponse
} from '../models/admin';

@Route('admin')
export class EndpointAdmin extends ProxyController {
    @Security('ksi')
    @Get('monitoring-dashboard')
    public async adminMonitoringDashboardURL(
        @Request() request: express.Request,
    ): Promise<MonitoringDashboardURLResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('user-export')
    public async adminUserExport(
        @Request() request: express.Request,
        @Header() year?: number
    ): Promise<string> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('e-mail/')
    public async adminEmailSend(
        @Request() request: express.Request,
        @Body() emailBody: EmailSendRequest,
    ): Promise<EmailSendResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('subm/eval/{evaluationId}/')
    public async adminSubmissionEvaluation(
        @Request() request: express.Request,
        @Path('evaluationId') evaluationId: number,
    ): Promise<Uint8Array> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('subm/task/{taskId}/')
    public async adminSubmissionTask(
        @Request() request: express.Request,
        @Path('taskId') taskId: number,
    ): Promise<Uint8Array> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('evaluations/{evaluationId}')
    public async adminGetEvaluationSingle(
        @Request() request: express.Request,
        @Path('evaluationId') evaluationId: number,
    ): Promise<CorrectionEvaluation> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('correctionsEmail/{taskId}')
    public async adminCorrectionsEmail(
        @Request() request: express.Request,
        @Path('taskId') taskId: number,
        @Query('public') publish: 0 | 1,
    ): Promise<EmailSendResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('diploma/{userId}/grant')
    public async adminDiplomaGrant (
        @Request() request: express.Request,
        @Path('userId') userId: number,
        @UploadedFile() files: File,
        @Header() year?: number,
    ): Promise<void> {
        return await this.proxy(request);
    }
}
