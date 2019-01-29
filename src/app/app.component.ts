import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Logout} from './auth/actions/auth.actions';
import {Observable} from 'rxjs';
import * as fromAuth from './auth/reducers';
import {MessagingService} from './core/domain/messaging-service';
import {MatSnackBar} from '@angular/material';
import {ofType} from '@ngrx/effects';
import {Message, MessageTypes} from './core/domain/models/message';
import {filter, map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(readonly store: Store<any>,
                messagingService: MessagingService,
                snackbar: MatSnackBar,
                private breakpointObserver: BreakpointObserver) {
        store.select(fromAuth.selectAuthenticated).subscribe(authenticated => this.authenticated = authenticated);
        messagingService.getMessages().subscribe(message => {
            console.log(message.message);
            snackbar.open(message.message, '', {duration: 2500});
        });
    }
    title = 'TodoManager';

    authenticated: boolean;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    logout() {
        this.store.dispatch(new Logout());
    }

    login() {
    }

}
