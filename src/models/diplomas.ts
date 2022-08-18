export interface DiplomasList {
    year: number;
    revoked: boolean;
    url: string;
}

export interface DiplomasListResponse {
    diplomas: DiplomasList[];
}
