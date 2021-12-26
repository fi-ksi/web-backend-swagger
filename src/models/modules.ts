export type KSIModule = ModuleProgramming | ModuleQuiz | ModuleSortable | ModuleGeneral | ModuleText;

interface ModuleBase {
    id: number,
    type: 'general' | 'programming' | 'quiz' | 'sortable' | 'text';
    name: string;
    description: string;
    autocorrect: boolean;
    max_score: number;

    state: 'correct' | 'incorrect' | 'blank';
    score: number | null;
}

interface ModuleProgramming extends ModuleBase {
    code: string;
    default_code: string;
    last_time?: string;
    last_origin?: string;
}

interface ModuleQuiz extends ModuleBase {
    questions: {
        type: 'radio' | 'checkbox';
        question: string;
        text: string;
        options: string[];
    }[]
}

interface ModuleSortable extends ModuleBase {
    sortable_list: {
        fixed: SortableItem[];
        movable: SortableItem[];
    }
}

interface SortableItem {
    content: string;
    offset: number;
}

interface ModuleGeneral extends ModuleBase {
    submitted_files: {
        id: number,
        filename: string;
    }[];
}

interface ModuleText extends ModuleBase {
    fields: string[];
}

export interface ModuleResponse {
    module: KSIModule;
}

export interface ModuleScore {
    id: number;
    is_corrected: boolean;
    score: number;
    reviewed_by: number;
}

export interface ModuleSubmitResponse {
    result: 'ok' | 'error' | 'nok';
    report?: string;
    error?: string;
    message?: string;
    score?: number;
}

export interface ModuleSubmissionRequest {
    content: ModuleSubmissionData;
}

export type ModuleSubmissionData = string | string[] | string[][];
