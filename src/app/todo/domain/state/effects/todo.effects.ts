import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
    AddTodoSuccess,
    ApiFailure,
    LoadTodoSuccess,
    RemoveTodo,
    RemoveTodoSuccess,
    TodoActionTypes, ToggleTodo, UpdateTodoState, ToggleTodoSuccess, LoadTodos, UpdateTodoSuccess, UpdateTodo
} from '../actions/todo.actions';
import {catchError, filter, map, mapTo, switchMap, tap} from 'rxjs/operators';
import {fromEvent, of} from 'rxjs';
import {TodoService} from '../../../data/api/todo.service';
import {HttpErrorResponse} from '@angular/common/http';
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
                map((todo) => {
                        return new AddTodoSuccess(todo);
                    }
                ),
                catchError((e: HttpErrorResponse) => of(new ApiFailure(e)))
            );
        }),
    );

    @Effect()
    removeTodo$ = this.actions$.pipe(
        ofType<RemoveTodo>(TodoActionTypes.RemoveTodo),
        switchMap(action => {
            return this.todoService.removeTodo(action.payload).pipe(
                map((todo) => {
                        return new RemoveTodoSuccess(action.payload);
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
/*
    @Effect()
    onChange$ = fromEvent<StorageEvent>(window, 'storage').pipe(
        filter(evt => evt.key === 'todo'),
        filter(evt => evt.newValue !== null),
        tap( evt => this.messagingService.post({message: JSON.stringify(evt.newValue)})),
        map(evt => {
            return new UpdateTodoState(JSON.parse(evt.newValue));
        })
    );*/

    @Effect()
    toggleTodo$ = this.actions$.pipe(
        ofType<ToggleTodo>(TodoActionTypes.ToggleTodo),
        switchMap(action => {
            return this.todoService.updateTodo(action.payload.id, action.payload.changes).pipe(
                map((todo: Todo) => {
                        return new ToggleTodoSuccess(todo);
                    }
                ),
                catchError((e: HttpErrorResponse) => of(new ApiFailure(e)))
            );
        }),
    );

    @Effect()
    updateTodo$ = this.actions$.pipe(
        ofType<UpdateTodo>(TodoActionTypes.UpdateTodo),
        switchMap(action => {
            return this.todoService.updateTodo(action.payload.id, action.payload.changes).pipe(
                map((todo: Todo) => {
                        return new UpdateTodoSuccess(todo);
                    }
                ),
                catchError((e: HttpErrorResponse) => of(new ApiFailure(e)))
            );
        }),
    );



    constructor(private actions$: Actions, private todoService: TodoService, private messagingService: MessagingService) {
    }
}
