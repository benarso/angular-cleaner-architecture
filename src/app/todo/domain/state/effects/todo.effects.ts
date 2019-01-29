import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AddTodo, AddTodoSuccess, ApiFailure, LoadTodoSuccess, TodoActionTypes} from '../actions/todo.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {TodoService} from '../../../data/api/todo.service';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginFailed} from '../../../../auth/actions/auth.actions';
import {MessagingService} from '../../../../core/domain/messaging-service';
import {Todo} from '../../models/todo';

@Injectable()
export class TodoEffects {

    @Effect()
    loadTodos$ = this.actions$.pipe(
        ofType(TodoActionTypes.LoadTodos),
        switchMap(action => {
            return this.todoService.loadTodos().pipe(
                map(todos => {
                    return new LoadTodoSuccess(todos);
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(new ApiFailure(error));
                })
            );
        })
    );

    @Effect()
    addTodo$ = this.actions$.pipe(
        ofType<AddTodoSuccess>(TodoActionTypes.AddTodo),
        switchMap(action => {
            return this.todoService.addTodo(action.payload).pipe(
                map( (todo) => {
                        return new AddTodoSuccess(todo);
                    }
                ),
                catchError((e: HttpErrorResponse) => of(new ApiFailure(e)))
            );
        }),
    );

    @Effect({dispatch: false})
    apiError$ = this.actions$.pipe(
        ofType<ApiFailure>(TodoActionTypes.ApiFailure),
        tap(action => {
            this.messagingService.post({message: action.payload.message});
            console.warn(action.payload.message);
        })
    );

    constructor(private actions$: Actions, private todoService: TodoService, private messagingService: MessagingService) {
    }
}
