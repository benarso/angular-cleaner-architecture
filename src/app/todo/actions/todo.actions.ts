import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  LoadTodos = '[Todo] Load Todos'
}

export class LoadTodos implements Action {
  readonly type = TodoActionTypes.LoadTodos;
}

export type TodoActions = LoadTodos;
