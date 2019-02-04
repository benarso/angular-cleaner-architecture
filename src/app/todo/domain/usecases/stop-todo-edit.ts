import {Usecase} from '../../../core/domain/usecase';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';

import {SingleUsecase} from '../../../core/domain/single-usecase';
import {Injectable} from '@angular/core';
import {RemoveTodo, StartTodoEdit, StopTodoEdit, ToggleTodo} from '../state/actions/todo.actions';

@Injectable({
    providedIn: 'root'
})
export class StopTodoEditUsecase extends SingleUsecase<Todo> {


    constructor(private store: Store<any>) {
        super();
    }

    execute() {
        this.store.dispatch(new StopTodoEdit());
    }


}
