
import {User} from './user';

export interface AuthenticatedResponse {
    jwt: string;
    user: User;
}
