import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  LoadLogins = '[Login] Load Logins'
}

export class LoadLogins implements Action {
  readonly type = LoginActionTypes.LoadLogins;
}

export type LoginActions = LoadLogins;
