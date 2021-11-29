import { UserRole } from './user';

export interface BasicProfileResponse {
    basicProfile: {
        id: number;
        signed_in: true;
        first_name: string;
        last_name: string;
        nick_name: string;
        profile_picture: number;
        short_info: string;
        email: string;
        gender: string;
        role: UserRole;
    }
}
