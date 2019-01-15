import {Injectable} from '@angular/core';
import {StoreModule, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiAuthService {

    private MOCKUSER: User = {
        user: {
            username: 'Ben',
            email: 'user@email.com'
        }
    };


    constructor(private http: HttpClient) {
    }

    authenticate(username: string, password: string): Observable<User> {
        return of(this.MOCKUSER).pipe(delay(1500));
    }
}
