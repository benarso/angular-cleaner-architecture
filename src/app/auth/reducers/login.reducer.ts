import {LoginActions, LoginActionTypes} from '../actions/login.actions';
import {User} from '../models/user';

export interface State {
  authenticated: boolean;
  user?: User;
  loading: boolean;
}

export const initialState: State = {
  authenticated: false,
  loading: false
};
// TODO: Manage errors
export function reducer(state = initialState, action: LoginActions): State {

  switch (action.type) {

    case LoginActionTypes.Login:
      return Object.assign({}, state, {
        loading: true
      });

    case LoginActionTypes.LoginSuccess:
      return Object.assign({}, state, {
        authenticated: true,
        loading: false,
        user : action.payload
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
