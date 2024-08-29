export interface AdminInstanceConfig {
    key: string,
    value: string | null
}

export interface AdminInstanceConfigResponse {
    config: AdminInstanceConfig[]
}
