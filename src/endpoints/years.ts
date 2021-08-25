import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
    Request,
} from "tsoa";
import { Years } from "../models/years";
import express from "express";
import { ProxyController } from "../util/proxy-controller";

@Route("years")
export class EndpointYears extends ProxyController {
    @Get()
    public async getAll(@Request() request: express.Request): Promise<Years> {
        return await this.proxy(request) as Years;
    }
}
