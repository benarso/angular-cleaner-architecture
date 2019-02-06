import {TodoActions, TodoActionTypes} from '../actions/todo.actions';
import {Todo} from '../../models/todo';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export interface State extends EntityState<Todo> {

    loading: boolean;
    error: string;
}

export const initialState: State = adapter.getInitialState({
        loading: false,
        error: ''
});

export function reducer(state = initialState, action: TodoActions): State {
    switch (action.type) {
        case TodoActionTypes.LoadTodos:
            return {...state, loading: true};
        case TodoActionTypes.LoadTodoSuccess:
            return adapter.addAll(action.payload, {...state, loading: false});

        case TodoActionTypes.AddTodoSuccess:
            return adapter.addOne(action.payload, {...state, loading: false});

        case TodoActionTypes.AddTodo:
            return {...state, loading: true};

        case TodoActionTypes.RemoveTodo:
            return adapter.removeOne(action.payload.id, state);

        case TodoActionTypes.ToggleTodo:
            return adapter.updateOne(action.payload, state);
        case TodoActionTypes.UpdateTodo:
            return adapter.updateOne(action.payload, state);

        case TodoActionTypes.UpdateTodoState:
            return action.payload;
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
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;

