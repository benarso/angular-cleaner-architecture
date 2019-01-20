
import {User} from './user';

export interface LoginResponse {
    jwt: string;
    user: User;
}
