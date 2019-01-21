import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Login, LoginActionTypes, LoginFailed, LoginRedirect, LoginSuccess, Logout} from '../actions/auth.actions';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap, switchMap, tap, throttleTime} from 'rxjs/operators';
import {MockAuthService} from '../services/mock-auth.service';
import {ApiAuthService} from '../services/api-auth.service';
import { Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

// TODO: Fix snackbar hardcoded values using snackbar global settings
// TODO: Fix throttleTime hardcoded values
// TODO: Use cookies or other strategy to store token instead of localstorage
@Injectable()
export class AuthEffects {

    @Effect()
    login$: Observable<any> = this.actions$.pipe(
        ofType<Login>(LoginActionTypes.Login),
        throttleTime(1500),
        map((action: Login) => action.payload),
        switchMap(payload => {
            return this.authService.authenticate(payload).pipe(
                map(authResponse => {
                    return new LoginSuccess(authResponse);
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
            // TODO: redirect
        })
    );

    @Effect({dispatch: false})
    loginSuccess$: Observable<any> = this.actions$.pipe(
      ofType<LoginSuccess>(LoginActionTypes.LoginSuccess),
        tap(action => {
            // TODO: save token etc ?
            this.router.navigateByUrl('dashboard');
        })
    );

    @Effect({dispatch: false})
    loginRedirect$: Observable<any> = this.actions$.pipe(
        ofType<LoginRedirect>(LoginActionTypes.LoginRedirect),
        tap(action => {
            this.router.navigateByUrl('login');
        })
    );

    constructor(private authService: ApiAuthService, private router: Router, private actions$: Actions) {
    }
}
