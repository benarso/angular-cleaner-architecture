import {Observable} from 'rxjs';
import {LoginCredentials} from '../models/login-credentials';
import {LoginResponse} from '../models/login-response';

export abstract class AuthService {
    abstract authenticate(credentials: LoginCredentials): Observable<LoginResponse>;
}
