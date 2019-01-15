import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Login, LoginActionTypes, Logout} from '../actions/login.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap, tap, throttleTime} from 'rxjs/operators';
import {MockAuthService} from '../services/mock-auth.service';
import {MatSnackBar} from '@angular/material';
import {ApiAuthService} from '../services/api-auth.service';


// TODO: Fix snackbar hardcoded values using snackbar global settings
// TODO: Fix throttleTime hardcoded values
@Injectable()
export class LoginEffects {

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType<Login>(LoginActionTypes.Login),
        throttleTime(1500),
        mergeMap(action =>
            this.authService.authenticate(action.payload.username, action.payload.password).pipe(
                map(data => ({type: LoginActionTypes.LoginSuccess, payload: data}))
            )),
        tap(action => this.snackbar.open(action.type, 'Dismiss', {duration: 3000})),
    );

    @Effect({dispatch: false})
    logout$: Observable<Action> = this.actions$.pipe(
        ofType<Logout>(LoginActionTypes.Logout),
        throttleTime(1500),
        tap(action => this.snackbar.open(action.type, 'Dismiss', {duration: 3000}))
    );

    constructor(private authService: ApiAuthService, private snackbar: MatSnackBar, private actions$: Actions) {
    }
}
