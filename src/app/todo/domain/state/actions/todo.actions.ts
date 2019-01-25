import { Action } from '@ngrx/store';
import {Todo} from '../../models/todo';
import {Update} from '@ngrx/entity';
import {HttpErrorResponse} from '@angular/common/http';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos',
  AddTodo = '[Todo] Add Todo',
  AddTodoSuccess = '[Todo] Add Todo Success',
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

export class AddTodoSuccess implements Action {
  readonly type = TodoActionTypes.AddTodoSuccess;
  constructor(readonly payload: Todo) {
  }
}

export class LoadTodoSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodoSuccess;

  constructor(readonly payload: Todo[]) {
  }
}

export class ApiFailure implements Action {
  readonly type = TodoActionTypes.ApiFailure;
  constructor(readonly payload: HttpErrorResponse) {
  }
}

export type TodoActions = LoadTodos | LoadTodoSuccess | AddTodo | AddTodoSuccess | ApiFailure;
