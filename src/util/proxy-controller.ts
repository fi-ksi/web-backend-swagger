import { Controller } from "@tsoa/runtime";
import express from "express";
import { proxyRequest } from "./proxy";

export class ProxyController extends Controller {
    protected proxy(request: express.Request): Promise<any> {
        return proxyRequest(this, request);
    }
}
