import { CorrectionEvaluation, CorrectionEvaluationUpdate } from './admin';
import { ModuleType } from './modules';
import { Achievement } from './achievements';
import { Thread } from './threads';
import { Post } from './posts';
import { ThreadDetail } from './thread-details';

interface CorrectionUpdate  {
    task_id: number;
    user: number;
    comment: number | null;
    achievements: number[];
    modules: CorrectionUpdateModuleEvaluation[];
}

interface CorrectionUpdateModuleEvaluation {
    evaluation: CorrectionEvaluationUpdate;
}

interface Correction extends CorrectionUpdate {
    id: number;
    state: CorrectionState;
    modules: CorrectionModuleEvaluation[];
}

export type CorrectionState = 'corrected' | 'notcorrected';

interface CorrectionModuleEvaluation {
    module_id: number;
    evaluations_list: number[];
    evaluation: CorrectionEvaluation;
}

export interface CorrectionResponse {
    correction: Correction;
}

export interface CorrectionUpdateRequest {
    correction: CorrectionUpdate;
}

export interface CorrectionsAllResponse {
    corrections: Correction[];
    tasks: CorrectionTask;
    modules: CorrectionModule[];
    achievements: Achievement[];
    threads: Thread[];
    posts: Post[];
    threadDetails: ThreadDetail[];
}

interface CorrectionTask {
    id: number;
    title: string;
}

interface CorrectionModule {
    id: number;
    name: string;
    autocorrect: boolean;
    max_points: number;
    type: ModuleType,
}
