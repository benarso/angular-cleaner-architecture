import { Action } from '@ngrx/store';
import {Todo} from '../../models/todo';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  AddTodo = '[Todo] Add Todo',
  LoadTodoSuccess = '[Todo Api] Load Todos Success',
  ApiFailure = '[Todo Api] Load Todos Failure'
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;

  constructor(readonly payload: Todo) {
  }
}

export class LoadTodoSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodoSuccess;

  constructor(readonly payload: Todo[]) {
  }
}

export type TodoActions = LoadTodos | LoadTodoSuccess | AddTodo;
