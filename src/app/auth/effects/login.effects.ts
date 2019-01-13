import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginActionTypes } from '../actions/login.actions';

@Injectable()
export class LoginEffects {

  @Effect()
  loadLogins$ = this.actions$.pipe(ofType(LoginActionTypes.LoadLogins));

  constructor(private actions$: Actions) {}
}
