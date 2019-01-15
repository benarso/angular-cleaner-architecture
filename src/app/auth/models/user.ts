export interface User {
    jwt?: string;
    user?: {
        username?: string,
        id?: number,
        email?: string
    };
}
