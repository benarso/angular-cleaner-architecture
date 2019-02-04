import {Todo} from '../models/todo';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {LoadTodos} from '../state/actions/todo.actions';
import {ObservableUseCase} from '../../../core/domain/observable-use-case';
import * as fromTodo from '../state/reducers';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetCurrentlyEditedTodoUsecase extends ObservableUseCase<Todo> {

    private constructor(private store: Store<any>) {
        super();
    }

    execute(): Observable<Todo> {
        // Forward store data to presentation layer
        return this.store.select(fromTodo.selectCurrentlyEditedTodo);
    }
}
