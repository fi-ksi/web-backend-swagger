export interface Execution {
    id: number;
    module: number;
    user: number;
    code: string;
    result: ExecutionResult;
    time: string;
    report: string;
}

export interface ExecutionsResponse {
    execs: Execution[],
    meta: {
        total: number,
        count: number
    }
}

export type ExecutionResult = 'ok' | 'error';
