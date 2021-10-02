export interface User {
    id: number;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
    gender: string;
    email?: string;
    role: string;
    score: number;
    task_num: number;
    achievements: number[];
    enabled: boolean;
    nick_name: string;

    addr_country?: string;
    school_name?: string;
    seasons?: number[];
    successful?: boolean;
    cheat?: boolean;

    tasks?: number[];
    co_tasks?: number[];
    short_info?: string;
}

export interface UserResponse {
    user: User;
}

export interface UsersResponse {
    users: User[];
}
