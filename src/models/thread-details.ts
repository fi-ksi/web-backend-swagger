import { Post } from './posts';

export interface ThreadDetail {
    id: number;
    root_posts: number[];
}

export interface ThreadDetailResponse {
    threadDetails: ThreadDetail;
    posts: Post[];
}
