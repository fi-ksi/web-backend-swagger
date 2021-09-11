export interface FeedbackRequest {
    body: string;
    email?: string;
}

export interface FeedbackResponse {
    result: 'ok';
}
