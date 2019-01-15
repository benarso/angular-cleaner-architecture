import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, LoginActionTypes, Logout} from '../actions/login.actions';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import {debounceTime, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {AuthService} from '../auth.service';
import {MatSnackBar} from '@angular/material';
import {subscribeTo, subscribeToObservable} from 'rxjs/internal-compatibility';

@Injectable()
export class LoginEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
      ofType<Login>(LoginActionTypes.Login),
      debounceTime(500),
      mergeMap( action =>
          this.authService.authenticate(action.payload.username, action.payload.password).pipe(
            map(data => ({type: LoginActionTypes.LoginSuccess, payload: data}) )
          ))
  );

  @Effect({dispatch: false})
  logout$: Observable<Action> = this.actions$.pipe(
      ofType<Logout>(LoginActionTypes.Logout),
      tap(action => this.snackbar.open(action.type, 'Dismiss', {duration: 1500}))
  );

  constructor(private authService: AuthService, private snackbar: MatSnackBar, private actions$: Actions) {}
}
