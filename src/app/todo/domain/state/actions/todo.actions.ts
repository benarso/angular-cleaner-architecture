import {Action} from '@ngrx/store';
import {Todo} from '../../models/todo';
import {HttpErrorResponse} from '@angular/common/http';
import {State} from '../reducers/todo.reducer';
import {Update} from '@ngrx/entity';

export enum TodoActionTypes {
    LoadTodos = '[Todo] Load Todos',
    AddTodo = '[Todo] Add Todo',
    AddTodoSuccess = '[Todo] Add Todo Success',
    LoadTodoSuccess = '[Todo Api] Load Todos Success',
    ApiFailure = '[Todo Api] Load Todos Failure',
    RemoveTodo = '[TodoListComponent] Remove Todo',
    RemoveTodoSuccess = '[TodoApi] Remove Todo Success',
    ToggleTodo = '{TodoListComponent] Toggle Todo',
    ToggleTodoSuccess = '[Todo Api] Todo Toggle Success',
    UpdateTodoState = '[Storage] Update Todo State',
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

export class RemoveTodo implements Action {
    readonly type = TodoActionTypes.RemoveTodo;

    constructor(readonly payload: Todo) {
    }
}

export class RemoveTodoSuccess implements Action {
    readonly type = TodoActionTypes.RemoveTodoSuccess;

    constructor(readonly payload: Todo) {
    }
}

export class ToggleTodo implements Action {
    readonly type = TodoActionTypes.ToggleTodo;
    constructor(readonly payload:  Todo) {}
}

export class ToggleTodoSuccess implements Action {
    readonly type = TodoActionTypes.ToggleTodoSuccess;
    constructor(readonly payload: Update<Todo>) {}
}

export class UpdateTodoState implements Action {
    readonly type = TodoActionTypes.UpdateTodoState;

    constructor(readonly payload: State) {
    }
}

export type TodoActions =
    LoadTodos
    | LoadTodoSuccess
    | AddTodo
    | AddTodoSuccess
    | ApiFailure
    | RemoveTodo
    | RemoveTodoSuccess
    | UpdateTodoState
    | ToggleTodo
    | ToggleTodoSuccess;
