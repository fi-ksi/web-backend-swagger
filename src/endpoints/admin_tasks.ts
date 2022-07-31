/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request,
    Security,
    Path,
    Query, Post, Delete, Put, Body, Header,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import {
    AdminTaskCreationRequest, AdminTaskDeployResponse, AdminTaskMergeResponse,
    AdminTaskResponse,
    AdminTasksResponse,
    AdminTaskUpdateRequest
} from '../models/admin_tasks';
import { EmptyDict } from '../models/emptyDict';

@Route('admin/atasks')
export class EndpointAdminTasks extends ProxyController {
    @Security('ksi')
    @Get()
    public async adminTasksGetAll(
        @Request() request: express.Request,
        @Query() wave?: number,
        @Header() year?: number
    ): Promise<AdminTasksResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post()
    public async adminTasksCreateNew(
        @Request() request: express.Request,
        @Body() adminTaskCreationRequest: AdminTaskCreationRequest,
        @Header() year?: number
    ): Promise<AdminTaskResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{taskId}')
    public async adminTasksGetSingle(
        @Request() request: express.Request,
        @Path() taskId: number,
    ): Promise<AdminTaskResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete('{taskId}')
    public async adminTasksDeleteSingle(
        @Request() request: express.Request,
        @Path() taskId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('{taskId}')
    public async adminTasksUpdateSingle(
        @Request() request: express.Request,
        @Path() taskId: number,
        @Body() adminTaskUpdateRequest: AdminTaskUpdateRequest
    ): Promise<AdminTaskResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{taskId}/deploy')
    public async adminTasksGetDeploySingle(
        @Request() request: express.Request,
        @Path() taskId: number,
    ): Promise<AdminTaskDeployResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('{taskId}/deploy')
    public async adminTaskDeploySingle(
        @Request() request: express.Request,
        @Path() taskId: number,
    ): Promise<AdminTaskMergeResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Post('{taskId}/merge')
    public async adminTaskMergeSingle(
        @Request() request: express.Request,
        @Path() taskId: number,
    ): Promise<AdminTaskMergeResponse> {
        return await this.proxy(request);
    }
}
