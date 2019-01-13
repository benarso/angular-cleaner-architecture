import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoActionTypes } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {

  @Effect()
  loadTodos$ = this.actions$.pipe(ofType(TodoActionTypes.LoadTodos));

  constructor(private actions$: Actions) {}
}
