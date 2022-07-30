/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security, Post, Body
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmailSendRequest, EmailSendResponse, MonitoringDashboardURLResponse } from '../models/admin';

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
    ): Promise<string> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('email/')
    public async adminEmailSend(
        @Request() request: express.Request,
        @Body() emailBody: EmailSendRequest,
    ): Promise<EmailSendResponse> {
        return await this.proxy(request);
    }
}
