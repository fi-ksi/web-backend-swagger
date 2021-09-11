export type AuthRequest = AuthRequestPassword | AuthRequestRefreshToken;

interface AuthRequestPassword {
    grant_type: 'password';
    username: string;
    password: string;
}

interface AuthRequestRefreshToken {
    grant_type: 'refresh_token';
    refresh_token: string;
}

export interface AuthResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: 'Bearer';
}
