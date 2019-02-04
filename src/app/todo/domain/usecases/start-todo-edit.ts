import {Usecase} from '../../../core/domain/usecase';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';

import {SingleUsecase} from '../../../core/domain/single-usecase';
import {Injectable} from '@angular/core';
import {RemoveTodo, StartTodoEdit, ToggleTodo} from '../state/actions/todo.actions';

@Injectable({
    providedIn: 'root'
})
export class StartTodoEditUsecase extends SingleUsecase<Todo> {


    constructor(private store: Store<any>) {
        super();
    }

    execute(payload: Todo) {
        this.store.dispatch(new StartTodoEdit(payload));
    }


}
