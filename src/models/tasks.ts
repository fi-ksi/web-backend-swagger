export interface Tasks {
    id: number;
    title: string;
    author: number;
    co_author: number;
    details: number;
    intro: string;
    max_score: number;
    time_published: string;
    time_deadline: string | null;
    state: 'locked' | 'base' | 'correcting' | 'done';
    picture_base: string;
    picture_suffix: '.svg';
    wave: number;
    feedbacks: number;
    prerequisites: number[] | number[][];
}

export interface TasksResponse {
    tasks: Tasks[];
}

export interface TaskResponse {
    task: Tasks;
}
