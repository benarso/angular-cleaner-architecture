import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return state;


    default:
      return state;
  }
}
