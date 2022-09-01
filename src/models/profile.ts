import { Task } from './tasks';
import { TaskScore } from './task-details';

export interface ProfileEdit {
    email: string;
    nick_name?: string;
    first_name: string;
    last_name: string;
    gender: string;
    short_info: string;
    github: string | null;

    addr_street: string;
    addr_city: string;
    addr_zip: string;
    addr_country: string;
    school_name: string;
    school_street: string;
    school_city: string;
    school_zip: string;
    school_country: string;
    school_finish: number;
    tshirt_size: string;

    notify_eval?: boolean;
    notify_response?: boolean;
    notify_ksi?: boolean;
    notify_events?: boolean;
}

export interface Profile extends ProfileEdit {
    id: number,
    author: number;
    resource: string;
}

export interface ProfileResponse {
    profile: Profile;
    tasks: Task[];
    taskScores: TaskScore[];
}
