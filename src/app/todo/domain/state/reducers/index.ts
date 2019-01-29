import {createSelector, createFeatureSelector, MetaReducer, Action, ActionReducer} from '@ngrx/store';
import * as fromRoot from '../../../../reducers';
import * as fromTodo from './todo.reducer';
import {environment} from '../../../../../environments/environment';
import {sessionStorage} from '../../../../reducers';
import {TodoActionTypes, UpdateTodoState} from '../actions/todo.actions';



export interface State extends fromRoot.State {
    todo: fromTodo.State;
}

export const reducers = {
    todo: fromTodo.reducer
};


/*

export function updateStateReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action: UpdateTodoState) {
        console.warn('metareducer');
        if (action.type === TodoActionTypes.UpdateTodoState) {
            return action.payload;
        }
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = [updateStateReducer];
*/
export const selectTodoState = createFeatureSelector<fromTodo.State>('todo');
export const selectAllTodos = createSelector(selectTodoState, fromTodo.getTodos);

