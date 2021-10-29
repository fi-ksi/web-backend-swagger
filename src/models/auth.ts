export type AuthGrantType = 'password' | 'refresh_token';

export interface AuthResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: 'Bearer';
}
