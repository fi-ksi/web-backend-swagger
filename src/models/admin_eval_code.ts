export type CodeEvaluationResponse = CodeEvaluationResponseSuccess | CodeEvaluationResponseError;

export interface CodeEvaluationResponseError {
    errors: Array<{ id: number, title: string }>
}

export interface CodeEvaluationResponseSuccess {
    'evalCode': CodeEvaluation;
}

export interface CodeEvaluation {
    id: number;
    code: string;
    merged: string;
    stdout: string;
    stderr: string;
    merge_stdout: string;
    check_stdout: string;
}
