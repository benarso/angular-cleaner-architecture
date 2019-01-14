import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginActionTypes } from '../actions/login.actions';

@Injectable()
export class LoginEffects {

  @Effect()

  login$ = this.actions$.pipe(
      ofType(LoginActionTypes.Login),

  );

  constructor(private actions$: Actions) {}
}
