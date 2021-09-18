export interface DirContent {
    id: string;
    files: string[];
    dirs: string[];
}

export interface DirContentResponse {
    content: DirContent;
}
