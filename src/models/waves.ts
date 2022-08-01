export interface Waves {
    waves: Wave[];
}

export interface WaveResponse {
    wave: Wave;
}

export interface WaveBase {
    index: number;
    caption: string | null;
    garant: number;
    time_published?: string | null;
}

export interface WaveCreate extends WaveBase {
    year: number;
}

export interface Wave extends WaveCreate {
    id: number;
    public: boolean;
    sum_points: number;
    tasks_cnt: number;
}

export interface WaveUpdateRequest {
    wave: WaveBase;
}

export interface WaveCreationRequest {
    wave: WaveCreate;
}
