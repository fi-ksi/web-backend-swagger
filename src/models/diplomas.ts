export interface DiplomasList {
    year: number;
    revoked: boolean;
}

export interface DiplomasListResponse {
    diplomas: DiplomasList[];
}
