import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
    AuthGuardRedirect,
    DashboardRedirect,
    Login,
    LoginActionTypes,
    LoginFailed,
    LoginRedirect,
    LoginSuccess,
    Logout
} from '../actions/auth.actions';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mapTo, switchMap, tap, throttleTime} from 'rxjs/operators';
import {MockAuthService} from '../services/mock-auth.service';
import { Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

export const THROTTLE_TIME = 1500;

@Injectable()
export class AuthEffects {

    @Effect()
    login$: Observable<any> = this.actions$.pipe(
        ofType<Login>(LoginActionTypes.Login),
        throttleTime(THROTTLE_TIME),
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

    @Effect()
    logout$: Observable<Action> = this.actions$.pipe(
        ofType<Logout>(LoginActionTypes.Logout),
        throttleTime(THROTTLE_TIME),
        mapTo(new LoginRedirect())
    );

    @Effect()
    loginSuccess$: Observable<any> = this.actions$.pipe(
      ofType<LoginSuccess>(LoginActionTypes.LoginSuccess),
        mapTo(new DashboardRedirect())
    );

    @Effect({dispatch: false})
    loginRedirect$: Observable<any> = this.actions$.pipe(
        ofType<LoginRedirect>(LoginActionTypes.LogoutRedirect),
        tap(action => {
            this.router.navigateByUrl('login');
        })
    );

    @Effect({dispatch: false})
    dashboardRedirect: Observable<any> = this.actions$.pipe(
        ofType<DashboardRedirect>(LoginActionTypes.DashboardRedirect),
        tap(action => {
            this.router.navigateByUrl('dashboard');
        })
    );

    @Effect({dispatch: false})
    authGuardRedirect: Observable<any> = this.actions$.pipe(
        ofType<AuthGuardRedirect>(LoginActionTypes.AuthGuardRedirect),
        tap(action => {
            this.router.navigateByUrl('login');
        })
    );

    constructor(private authService: MockAuthService, private router: Router, private actions$: Actions) {
    }
}
