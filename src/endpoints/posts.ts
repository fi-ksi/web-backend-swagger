/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Get,
    Post,
    Route,
    Request, Security, Path, Put, Delete
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { EmptyDict } from '../models/emptyDict';
import { PostResponse, PostsCreationRequest, PostsEditRequest } from '../models/posts';

@Route('posts')
export class EndpointPosts extends ProxyController {
    @Post()
    @Security('ksi')
    public async postsCreateNew(
        @Request() request: express.Request,
        @Body() postsCreationRequest: PostsCreationRequest
    ): Promise<PostsCreationRequest> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{postsId}')
    public async postsGetSingle(
        @Request() request: express.Request,
        @Path() postsId: number,
    ): Promise<PostResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('{postsId}')
    public async postsEditSingle(
        @Request() request: express.Request,
        @Path() postsId: number,
        @Body() postsUpdateRequest: PostsEditRequest,
    ): Promise<PostResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete('{postsId}')
    public async postsDeleteSingle(
        @Request() request: express.Request,
        @Path() postsId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
