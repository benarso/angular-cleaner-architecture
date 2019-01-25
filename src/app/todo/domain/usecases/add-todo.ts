import {Usecase} from '../../../core/domain/usecase';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';
import {AddTodo} from '../state/actions/todo.actions';
import {SingleUsecase} from '../../../core/domain/single-usecase';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AddTodoUsecase extends SingleUsecase<Todo> {


    constructor(private store: Store<any>) {
        super();
    }

    execute(payload: Todo) {
        this.store.dispatch(new AddTodo(payload));
    }


}
