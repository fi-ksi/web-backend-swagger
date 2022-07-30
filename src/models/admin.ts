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
