import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {delay} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {LoginCredentials} from '../models/login-credentials';
import {AuthenticatedResponse} from '../models/authenticated-response';

@Injectable({
    providedIn: 'root'
})
export class MockAuthService extends AuthService {

    private MOCKRESPONSE: AuthenticatedResponse = {
        jwt: 'asdsaa214edsd1ee3eds',
        user: {username: 'Ben', email: 'user@email.com'}
    };

    authenticate(credentials: LoginCredentials): Observable<AuthenticatedResponse> {
        return of(this.MOCKRESPONSE).pipe(delay(2000));
    }
}
