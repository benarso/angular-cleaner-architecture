import {Injectable} from '@angular/core';
import {StoreModule, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export abstract class AuthService {

    protected constructor(protected http: HttpClient) {
    }

    abstract authenticate(username: string, password: string): Observable<User>;
}
