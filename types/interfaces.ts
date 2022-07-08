export interface User {
    login: string;
    name: string;
    avatar_url: string;
    results: string[];
    query: string;
}

export interface UserProp {
    data: User,
    H1: any
}