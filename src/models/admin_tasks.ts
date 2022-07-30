export interface AdminTaskBase {
    title: string;
    wave: number;
    author: number;
    git_path: string;
    git_branch: string;
}

export interface AdminTaskCreation extends AdminTaskBase {
    git_commit?: string;
    git_create: boolean;
}

export interface AdminTask extends AdminTaskBase {
    id: number;
    co_author: number;
    git_commit: string;
    deploy_date: string;
    deploy_status: AdminTaskDeployStatus;
    max_score: number;
    eval_comment: string;
}

export interface AdminTaskCreationRequest {
    atask: AdminTaskCreation;
}

export interface AdminTaskResponse {
    atask: AdminTask;
}

export interface AdminTasksResponse {
    atasks: AdminTask[];
}

export type AdminTaskDeployStatus = 'default' | 'deploying' | 'done' | 'error' | 'diff';

export interface AdminTaskUpdate {
    title: string;
    git_path: string;
    git_branch: string;
    git_commit: string;
    eval_comment?: string;
}

export interface AdminTaskUpdateRequest {
    atask: AdminTaskUpdate;
}

export interface AdminTaskDeployResponse {
    id: number;
    log: string;
    deploy_date: string | null;
    deploy_status: AdminTaskDeployStatus;
}

export interface AdminTaskMergeResponse {
    result?: 'ok' | 'error';
    error?: string;
}
