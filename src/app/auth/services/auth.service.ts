import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {LoginCredentials} from '../models/login-credentials';

@Injectable({
    providedIn: 'root'
})
export abstract class AuthService {

    protected constructor(protected http: HttpClient) {
    }

    abstract authenticate(credentials: LoginCredentials): Observable<User>;
}
