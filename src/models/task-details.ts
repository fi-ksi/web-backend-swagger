import { Achievement } from './achievements';
import { Post } from './posts';
import { KSIModule, ModuleScore } from './modules';
import { Thread } from './threads';
import { ThreadDetail } from './thread-details';

export interface TaskDetails {
    id: number;
    body: string;
    thread: number;
    modules: number[];
    best_scores: number[];
    comment: number | null;
    solution: string;
    achievements: number[];
}


export interface TaskDetailResponse {
    taskDetails: TaskDetails;
    achievements: Achievement[];
    posts: Post[];
    modules: KSIModule[];
    moduleScores: ModuleScore[];
    userScores: UserScore[];
    threads: Thread[];
    threadDetails: ThreadDetail[];
}

export interface TaskScore {
    id: number,
    task: number,
    achievements: number[],
    score: number | null
}

interface UserScore {
    id: number;
    user: number;
    score: number;
}
