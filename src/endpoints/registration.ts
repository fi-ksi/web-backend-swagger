/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Post,
    Route,
    Request,
} from 'tsoa';
import express from 'express';
import { ProxyController } from '../util/proxy-controller';
import { RegistrationRequest } from '../models/registration';
import { PossibleErrorDict } from '../models/emptyDict';

@Route('registration')
export class EndpointRegistration extends ProxyController {
    @Post()
    public async registerNewUser(
        @Request() request: express.Request,
        @Body() body: RegistrationRequest
    ): Promise<PossibleErrorDict> {
        return await this.proxy(request);
    }
}
