import {TodoActions, TodoActionTypes} from '../actions/todo.actions';
import {Todo} from '../../models/todo';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export interface State extends EntityState<Todo> {
    loading: boolean;
    loaded: boolean;
    currentlyEditedTodo: Todo;
}

export const initialState: State = adapter.getInitialState({
    loading: false,
    loaded: true,
    currentlyEditedTodo: null
});

export function reducer(state = initialState, action: TodoActions): State {
    switch (action.type) {
        case TodoActionTypes.LoadTodos:
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        case TodoActionTypes.LoadTodoSuccess:
            return adapter.addAll(action.payload, state);

        case TodoActionTypes.AddTodoSuccess:
            return adapter.addOne(action.payload, state);

        case TodoActionTypes.AddTodo:
            return Object.assign({}, state, {
                loading: false,
            });

        case TodoActionTypes.RemoveTodoSuccess:
            return adapter.removeOne(action.payload.id, state);

        case TodoActionTypes.ToggleTodo:
            return adapter.updateOne(action.payload, state);
        case TodoActionTypes.UpdateTodo:
            return adapter.updateOne(action.payload, state);

        case TodoActionTypes.UpdateTodoState:
            return action.payload;

        case TodoActionTypes.StartTodoEdit:
            return Object.assign({}, state, {
                currentlyEditedTodo: action.payload
            });

        case TodoActionTypes.StopTodoEdit:
            return Object.assign({}, state, {
                currentlyEditedTodo: null
            });
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
export const getCurrentlyEditedTodo = (state: State) => state.currentlyEditedTodo;
