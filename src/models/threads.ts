export interface ThreadCreation {
    public: boolean;
    title: string;
    year: number;
}

export interface ThreadsCreationRequest {
    thread: ThreadCreation;
}

export interface Thread extends ThreadCreation {
    id: number;
    unread: number;
    posts_count: number;
    details: number;
}

export interface ThreadsResponse {
    threads: Thread[];
}

export interface ThreadResponse {
    threads: Thread;
}
