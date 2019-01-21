import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {LoginCredentials} from '../models/login-credentials';
import {LoginResponse} from '../models/login-response';

@Injectable({
    providedIn: 'root'
})

export class ApiAuthService extends AuthService {
    authenticate(credentials: LoginCredentials): Observable<LoginResponse> {
        return this.http.post<LoginResponse>('http://arso-strapi.duckdns.org:1337/auth/local',
            {identifier: credentials.username, password: credentials.password}
            );
    }
}
