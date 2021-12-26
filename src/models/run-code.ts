export interface RunCodeRequest {
    content: string;
}

export interface RunCodeResponse {
    report?: string;
    message?: string;
    stdout: string;
    result: 'ok' | 'error';
}
