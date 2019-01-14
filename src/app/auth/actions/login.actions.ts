import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  Login = '[Login] Login User',
  Logout = '[Login] Logout User'
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;

  constructor(readonly payload: {email: string, password: string}) {}
}

export class Logout implements Action {
  readonly type = LoginActionTypes.Logout;
}

export type LoginActions = Login | Logout;
