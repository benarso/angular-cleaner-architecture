import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Login, LoginActionTypes, LoginFailed, LoginSuccess, Logout} from '../actions/auth.actions';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap, switchMap, tap, throttleTime} from 'rxjs/operators';
import {MockAuthService} from '../services/mock-auth.service';
import {MatSnackBar} from '@angular/material';
import {ApiAuthService} from '../services/api-auth.service';
import { Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

// TODO: Fix snackbar hardcoded values using snackbar global settings
// TODO: Fix throttleTime hardcoded values
@Injectable()
export class AuthEffects {

    @Effect()
    login$: Observable<any> = this.actions$.pipe(
        ofType<Login>(LoginActionTypes.Login),
        throttleTime(1500),
        tap(action => this.snackbar.open(action.type, 'Dismiss', {duration: 3000})),
        map((action: Login) => action.payload),
        switchMap(payload => {
            return this.authService.authenticate(payload.username, payload.password).pipe(
                map(user => {
                    return new LoginSuccess(user);
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(new LoginFailed(error.message));
                })
            );
        }));


    @Effect({dispatch: false})
    logout$: Observable<Action> = this.actions$.pipe(
        ofType<Logout>(LoginActionTypes.Logout),
        throttleTime(1500),
        tap(action => {
            this.snackbar.open(action.type, 'Dismiss', {duration: 3000});
            localStorage.removeItem('jwt');
        })
    );

    @Effect({dispatch: false})
    loginsuccess$: Observable<any> = this.actions$.pipe(
      ofType<LoginSuccess>(LoginActionTypes.LoginSuccess),
        tap(action => {
            // TODO: save token etc ?
            this.snackbar.open(action.type, 'Dismiss', {duration: 3000});
            localStorage.setItem('jwt', action.payload.jwt);
            this.router.navigateByUrl('dashboard');
        })
    );

    constructor(private authService: ApiAuthService, private router: Router, private snackbar: MatSnackBar, private actions$: Actions) {
    }
}
