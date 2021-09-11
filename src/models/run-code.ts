export interface RunCodeRequest {
    content: string;
}

export interface RunCodeResponse {
    result: {
        report?: string;
        stdout: string;
        result: 'ok';
    }
}
