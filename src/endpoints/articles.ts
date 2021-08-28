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
import { ArticleCreationRequest, ArticleResponse, ArticlesResponse } from '../models/articles';

@Route('articles')
export class EndpointArticles extends ProxyController {
    @Security('ksi')
    @Get()
    public async getAll(
        @Request() request: express.Request,
        @Query() _limit?: number,
        @Query() _start?: number,
        @Header() year?: number,
    ): Promise<ArticlesResponse> {
        return await this.proxy(request);
    }

    @Post()
    @Security('ksi')
    public async createNew(
        @Request() request: express.Request,
        @Body() articleCreationRequest: ArticleCreationRequest
    ): Promise<ArticleCreationRequest> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Get('{articleId}')
    public async getSingle(
        @Request() request: express.Request,
        @Path() articleId: number,
    ): Promise<ArticleResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Put('{articleId}')
    public async editSingle(
        @Request() request: express.Request,
        @Path() articleId: number,
        @Body() articleUpdateRequest: ArticleCreationRequest,
    ): Promise<ArticleResponse> {
        return await this.proxy(request);
    }

    @Security('ksi')
    @Delete('{articleId}')
    public async deleteSingle(
        @Request() request: express.Request,
        @Path() articleId: number,
    ): Promise<EmptyDict> {
        return await this.proxy(request);
    }
}
