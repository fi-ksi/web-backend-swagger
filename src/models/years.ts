export interface Years {
    years: Year[];
}

export interface YearResponse {
    year: Year;
}

export interface YearBase {
    id: number;
    year: string;
    sealed: boolean;
    point_pad: number;
    active_orgs?: number[];
}

export interface YearUpdate extends YearBase {
    active_orgs: number[];
}

export interface Year extends YearBase {
    sum_points: number;
    tasks_cnt:  number;
}

export interface YearCreationRequest {
    year: YearBase;
}

export interface YearUpdateRequest {
    year: YearUpdate
}
