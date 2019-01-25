import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LoadTodoSuccess, TodoActionTypes} from '../actions/todo.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {TodoService} from '../../../data/api/todo.service';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginFailed} from '../../../../auth/actions/auth.actions';
import {MessagingService} from '../../../../core/domain/messaging-service';

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
                    return of(new LoginFailed(error.message));
                })
            );
        })
    );
    addTodo$ = this.actions$.pipe(ofType(TodoActionTypes.AddTodo));

    constructor(private actions$: Actions, private todoService: TodoService, private messagingService: MessagingService) {
    }
}
