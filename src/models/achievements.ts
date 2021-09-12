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
    year: number | null;
}

export interface AchievementsResponse {
    achievements: Achievement[];
}

export interface AchievementResponse {
    achievement: Achievement;
}
