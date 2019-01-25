import {TodoActions, TodoActionTypes} from '../actions/todo.actions';
import {Todo} from '../../models/todo';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../../../../auth/models/user';

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export interface State extends EntityState<Todo> {
    loading: boolean;
    loaded: boolean;
}

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: true
});



export function reducer(state = initialState, action: TodoActions): State {
    switch (action.type) {
        case TodoActionTypes.LoadTodos:
            return Object.assign({}, state, {
                    loading: true,
                    loaded: false
                });
        case TodoActionTypes.LoadTodoSuccess:
            const newState: State = Object.assign({}, state, {
                todos: action.payload,
                loading: false,
                loaded: true
            });
             return adapter.addAll(action.payload, newState);
        default:
            return state;
    }
}
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

export const getTodos = selectAll;
