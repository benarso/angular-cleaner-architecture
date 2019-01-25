import { createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromRoot from '../../../../reducers';
import * as fromTodo from './todo.reducer';



export interface State extends fromRoot.State {
    todo: fromTodo.State;
}

export const reducers = {
    todo: fromTodo.reducer
};

export const selectTodoState = createFeatureSelector<fromTodo.State>('todo');
export const selectAllTodos = createSelector(selectTodoState, fromTodo.getTodos);

