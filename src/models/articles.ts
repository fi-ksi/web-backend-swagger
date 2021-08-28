import { DirContent } from './content';

export interface ArticleCreation {
    title: string;
    body: string;
    published: boolean;
    year: number;
    time_published: string;
    picture: string;
}

export interface ArticleCreationRequest {
    article: ArticleCreation;
}

export interface Article extends ArticleCreation {
    id: number,
    author: number;
    resource: string;
}

export interface ArticleCreationResponse {
    article: Article;
}

export interface ArticlesResponse {
    articles: Article[];
    contents: DirContent[];
    meta: {
        total: number;
    }
}

export interface ArticleResponse {
    article: Article;
    contents: DirContent[];
}
