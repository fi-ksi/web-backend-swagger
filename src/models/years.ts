export interface Years {
    years: Year[];
}

export interface Year {
    id: number,
    index: number,
    year: string,
    sum_points: number,
    tasks_cnt:  number,
    sealed: boolean,
    point_pad: number
}
