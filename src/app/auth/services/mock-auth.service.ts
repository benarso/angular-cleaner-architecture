import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {LoginCredentials} from '../models/login-credentials';
import {LoginResponse} from '../models/login-response';
import {HttpClient} from '@angular/common/http';

export class MockAuthService extends AuthService {


    constructor() {
        super();
    }

    private MOCKRESPONSE: LoginResponse = {
        jwt: 'asdsaa214edsd1ee3eds',
        user: {username: 'Ben', email: 'user@email.com'}
    };

    authenticate(credentials: LoginCredentials): Observable<LoginResponse> {
        return of(this.MOCKRESPONSE).pipe(delay(2500));
    }
}
