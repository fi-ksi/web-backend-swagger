import { Wave } from './waves';
import { UserRole } from './user';

interface CorrectionInfoTask {
    id: number;
    title: string;
    wave: number;
    author: number;
    corr_state: 'published' | 'corrected' | 'working' | 'base';
    solvers: number[];
}

export interface CorrectionInfoResponse {
    correctionsInfo: CorrectionInfoTask;
}

interface CorrectionInfoUser {
    id: number;
    first_name: string;
    last_name: string;
    role: UserRole;
    gender: 'male' | 'female' | 'other';
}

export interface CorrectionInfosAllResponse {
    correctionInfos: CorrectionInfoTask[],
    waves: Wave[],
    users: CorrectionInfoUser[];
}
