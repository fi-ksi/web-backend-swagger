import { EmptyDict } from './emptyDict';

export interface MonitoringDashboardURLResponse {
    url: string;
}

export interface EmailSendRequest {
    'e-mail': EmailSend;
}

export interface EmailSend {
    Subject: string;
    Body: string;
    'Reply-To'?: string;
    To: number[];
    Bcc: string[];
    Gender?: 'both' | 'male' | 'female';
    KarlikSign?: boolean;
    EasterEgg?: boolean;
    Category?: 'hs' | 'other' | 'both';
    Type: 'ksi' | 'events';
    Successful?: boolean;
}

export type EmailSendResponse = EmailSendResponseSuccess | EmailSendResponseFail;

export interface EmailSendResponseSuccess {
    count: number;
}

export interface EmailSendResponseFail {
    error: string;
}

export interface CorrectionEvaluationUpdate {
    eval_id: number;
    points: number;
    corrected_by: number;
    cheat: boolean;
}

export interface CorrectionEvaluation extends CorrectionEvaluationUpdate {
    last_modified: number;
    full_report: string;
    programming?: {
        files: CorrectionEvaluationFile[];
    };
    quiz?: EmptyDict;
    sortable?: EmptyDict;
    text?: EmptyDict;
}

export interface CorrectionEvaluationFile {
    id: number;
    filename: string;
}
