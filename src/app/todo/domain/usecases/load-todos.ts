import {Usecase} from '../../../core/domain/usecase';
import {Todo} from '../models/todo';
import {Observable, Observer, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {LoadTodos} from '../../data/state/actions/todo.actions';
import {ObservableUseCase} from '../../../core/domain/observable-use-case';
import * as fromTodo from '../../data/state/reducers';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoadTodosUsecase extends ObservableUseCase<Todo[]> {

    private constructor(private store: Store<any>) {
        super();
    }

    execute(): Observable<Todo[]> {
        this.store.dispatch(new LoadTodos());
        return this.store.select(fromTodo.selectTodos);
    }
}
