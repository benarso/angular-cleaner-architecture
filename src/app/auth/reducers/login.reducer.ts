import {LoginActions, LoginActionTypes} from '../actions/login.actions';

export interface State {
  isLoggedIn: boolean;
}

export const initialState: State = {
  isLoggedIn: false
};

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {
    case LoginActionTypes.Login:
      return state;
    case LoginActionTypes.LoginSuccess:
      return {
        ...state,
        isLoggedIn: true
      };
    case LoginActionTypes.Logout:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}
