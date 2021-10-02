/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Get,
    Route,
    Request, Security, Path, Header,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { TaskResponse, TasksResponse } from '../models/tasks';

@Route('tasks')
export class EndpointTasks extends ProxyController {
    @Security('ksi')
    @Get()
    public async tasksGetAll(
        @Request() request: express.Request,
        @Header('YEAR') year?: number): Promise<TasksResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{tasksId}')
    public async tasksGetSingle(
        @Request() request: express.Request,
        @Path() tasksId: number,
    ): Promise<TaskResponse> {
        return await this.proxy(request);
    }
}
