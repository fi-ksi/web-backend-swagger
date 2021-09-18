interface Category {
    id: string;
    answer: string;
    ftype: 'stars' | 'line' | 'text_large';
    text: string;
}

export interface FeedbackUpdate {
    categories: Category[];
}

export interface FeedbackCreation extends FeedbackUpdate{
    taskId: number;
}

export interface FeedbackUpdateRequest {
    feedback: FeedbackUpdate;
}

export interface FeedbackCreationRequest {
    feedback: FeedbackCreation;
}

export interface Feedback extends FeedbackCreation {
    id: number;
    userId: number;
    lastUpdated: string;
    filled: true;
}

export interface FeedbacksResponse {
    feedback: Feedback;
}
