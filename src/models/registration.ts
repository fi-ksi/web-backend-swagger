import { ProfileEdit } from './profile';

export interface RegistrationRequest extends ProfileEdit {
    password: string;
    referral: string;
}
