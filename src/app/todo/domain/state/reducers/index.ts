import {createSelector, createFeatureSelector, MetaReducer, Action, ActionReducer} from '@ngrx/store';
import * as fromRoot from '../../../../reducers';
import * as fromTodo from './todo.reducer';

export interface State extends fromRoot.State {
    todo: fromTodo.State;
}

export const reducers = {
    todo: fromTodo.reducer
};

export const metaReducers: MetaReducer<State>[] = [];

export const selectTodoState = createFeatureSelector<fromTodo.State>('todo');
export const selectAllTodos = createSelector(selectTodoState, fromTodo.getTodos);
export const selectCompleted = createSelector(selectAllTodos, todos => todos.filter(todo => todo.completed));
export const selectIncomplete = createSelector(selectAllTodos, todos => todos.filter(todo => !todo.completed) );
export const selectCurrentlyEditedTodo = createSelector(selectTodoState, fromTodo.getCurrentlyEditedTodo);
