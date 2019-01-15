import {Injectable} from '@angular/core';
import {StoreModule, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService extends AuthService {

    private MOCKUSER: User = {
        user: {
            username: 'Ben',
            email: 'user@email.com'
        }
    };

    authenticate(username: string, password: string): Observable<User> {
        return this.http.post('http://arso-strapi.duckdns.org:1337/auth/local', {identifier: username, password: password} );
    }
}
