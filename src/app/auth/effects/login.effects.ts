import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, LoginActionTypes} from '../actions/login.actions';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { debounceTime, map, mergeMap, switchMap} from 'rxjs/operators';
import {AuthService} from '../auth.service';

@Injectable()
export class LoginEffects {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
      ofType<Login>(LoginActionTypes.Login),
      mergeMap( action =>
          this.authService.authenticate(action.payload.username, action.payload.password).pipe(
            map(data => ({type: LoginActionTypes.LoginSuccess, payload: data}) )
          ))
  );

  constructor(private authService: AuthService, private actions$: Actions) {}
}
