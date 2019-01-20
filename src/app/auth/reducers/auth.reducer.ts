import {AuthActions, LoginActionTypes} from '../actions/auth.actions';
import {User} from '../models/user';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State {
  authenticated: boolean;
  user: User;
  token: string;
  loading: boolean;
  errorMessage: string;
}

// export const selectAuthState = createFeatureSelector<State>('auth');
// export const selectAuthenticated = (state: State) => state.authenticated;

export const initialState: State = {
  authenticated: false,
  user: undefined,
  token: '',
  loading: false,
  errorMessage: ''
};

// TODO: Manage errors
export function reducer(state = initialState, action: AuthActions): State {

  switch (action.type) {

    case LoginActionTypes.Login:
      return Object.assign({}, state, {
        loading: true
      });

    case LoginActionTypes.LoginSuccess:
      return Object.assign({}, state, {
        authenticated: true,
        loading: false,
        errorMessage: '',
        user : action.payload
      });

    case LoginActionTypes.LoginFailed:
      return Object.assign({}, state, {
        loading: false,
        errorMessage: action.payload
      });

    case LoginActionTypes.Logout:
      return Object.assign({}, state, {
        authenticated: false,
        user: undefined
      });

    default:
      return state;
  }
}

export const getAuthenticated = (state: State) => state.authenticated;
export const getUser = (state: State) => state.user;
export const getLoading = (state: State) => state.loading;
export const getErrorMessage = (state: State) => state.errorMessage;
