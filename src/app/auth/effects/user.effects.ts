import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserActionTypes } from '../actions/user.actions';

@Injectable()
export class UserEffects {

  @Effect()
  loadUsers$ = this.actions$.pipe(ofType(UserActionTypes.LoadUsers));

  constructor(private actions$: Actions) {}
}
