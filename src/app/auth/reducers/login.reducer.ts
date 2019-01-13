import { Action } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from '../actions/login.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {

    case LoginActionTypes.LoadLogins:
      return state;


    default:
      return state;
  }
}
