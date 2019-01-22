import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Logout} from './auth/actions/auth.actions';
import {Observable} from 'rxjs';
import * as fromAuth from './auth/reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'TodoManager';

    authenticated: boolean;

    logout() {
        this.store.dispatch(new Logout());
    }

    login() {
    }

    constructor(readonly store: Store<any>) {
        store.select(fromAuth.selectAuthenticated).subscribe(authenticated => this.authenticated = authenticated);
    }
}
