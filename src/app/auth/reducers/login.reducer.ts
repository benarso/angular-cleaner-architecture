import {LoginActions, LoginActionTypes} from '../actions/login.actions';
import {User} from '../models/user';

export interface State {
  authenticated: boolean;
  user?: User;
}

export const initialState: State = {
  authenticated: false
};
// TODO: Manage errors
export function reducer(state = initialState, action: LoginActions): State {

  switch (action.type) {

    case LoginActionTypes.Login:
      return state;

    case LoginActionTypes.LoginSuccess:
      return Object.assign({}, state, {
        authenticated: true,
        user : action.payload.user
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
