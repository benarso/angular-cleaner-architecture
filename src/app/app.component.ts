import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Logout} from './auth/actions/auth.actions';
import {Observable} from 'rxjs';
import * as fromAuth from './auth/reducers';
import {MessagingService} from './core/domain/messaging-service';
import {MatSnackBar} from '@angular/material';
import {ofType} from '@ngrx/effects';
import {Message, MessageTypes} from './core/domain/models/message';
import {filter} from 'rxjs/operators';

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

    constructor(readonly store: Store<any>, messagingService: MessagingService, snackbar: MatSnackBar) {
        store.select(fromAuth.selectAuthenticated).subscribe(authenticated => this.authenticated = authenticated);
        messagingService.getMessages().subscribe(message => snackbar.open(message.message, '', {duration: 2500}));
    }
}
