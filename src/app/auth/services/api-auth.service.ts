import {Injectable} from '@angular/core';
import {StoreModule, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {LoginCredentials} from '../models/login-credentials';
import {AuthenticatedResponse} from '../models/authenticated-response';

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService extends AuthService {


    authenticate(credentials: LoginCredentials): Observable<AuthenticatedResponse> {
        return this.http.post<AuthenticatedResponse>('http://arso-strapi.duckdns.org:1337/auth/local',
            {identifier: credentials.username, password: credentials.password}
            );
    }
}
