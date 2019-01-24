import {TodoActions, TodoActionTypes} from '../actions/todo.actions';
import {Todo} from '../../models/todo';

export interface State {
    todos: Todo[];
    loading: boolean;
    loaded: boolean;
}

export const initialState: State = {
    todos: [],
    loading: false,
    loaded: true
};

export function reducer(state = initialState, action: TodoActions): State {
    switch (action.type) {
        case TodoActionTypes.LoadTodos:
            return Object.assign({}, state, {
                loading: true,
                loaded: false
            });
        case TodoActionTypes.LoadTodoSuccess:
            return Object.assign({}, state, {
                todos: action.payload,
                loading: false,
                loaded: true
            });
        default:
            return state;
    }
}

export const getTodos = (state: State) => state.todos;
