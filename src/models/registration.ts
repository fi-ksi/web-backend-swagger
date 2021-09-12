export interface RegistrationRequest {
    email: string;
    nick_name?: string;
    password: string;
    first_name: string;
    last_name: string;
    gender: string;
    short_info: string;

    addr_street: string;
    addr_city: string;
    addr_zip: string;
    addr_country: string;
    school_name: string;
    school_street: string;
    school_city: string;
    school_zip: string;
    school_country: string;
    school_finish: number;
    tshirt_size: string;
    referral: string;

    notify_eval?: boolean;
    notify_response?: boolean;
    notify_ksi?: boolean;
    notify_events?: boolean;
}
