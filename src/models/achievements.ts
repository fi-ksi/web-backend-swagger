export interface AchievementBase {
    title: string;
    picture: string;
    description: string;
    persistent: boolean;
}

export type AchievementCreation = AchievementBase;

export interface AchievementCreationRequest {
    achievement: AchievementCreation;
}

export interface Achievement extends AchievementBase {
    id: number;
    year: number | null;
}

export interface AchievementsResponse {
    achievements: Achievement[];
}

export interface AchievementResponse {
    achievement: Achievement;
}

export interface AchievementGrantRequest {
    users: number[],
    task: null | number,
    achievement: number
}

export interface AchievementGrantResponse {
    errors?: string[];
}
