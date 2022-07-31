export interface AchievementBase {
    title: string;
    picture: string;
    description: string;
}

export interface AchievementCreation extends AchievementBase {
    persistent: boolean;
}

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
    task: number | null,
    achievement: number
}

export interface AchievementGrantResponse {
    errors?: string[];
}
