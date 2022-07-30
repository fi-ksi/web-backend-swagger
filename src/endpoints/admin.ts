/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { MonitoringDashboardURLResponse } from '../models/admin';

@Route('admin')
export class EndpointAdmin extends ProxyController {
    @Security('ksi')
    @Get('monitoring-dashboard')
    public async monitoringDashboardURL(
        @Request() request: express.Request,
    ): Promise<MonitoringDashboardURLResponse> {
        return await this.proxy(request);
    }
}
