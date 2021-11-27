export interface PostsCreation {
    body: string;
    thread: number;
    parent?: number;
}

export interface PostEdit {
    author: number;
    body: string;
}

export interface PostsCreationRequest {
    post: PostsCreation;
}

export interface PostsEditRequest {
    post: PostEdit;
}

export interface Post extends PostEdit {
    id: number,
    thread: number;
    published_at: string;
    reaction: number[];
    is_new: boolean;
}

export interface PostResponse {
    post: Post;
}
