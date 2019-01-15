import {Action} from '@ngrx/store';
import {User} from '../models/user';

export enum LoginActionTypes {
    Login = '[Auth] Login User',
    Logout = '[Auth] Logout User',
    LoginSuccess = '[Auth] Login Success',
    LoginFailed = '[Auth] Login Failed'
}

export class Login implements Action {
    readonly type = LoginActionTypes.Login;

    constructor(readonly payload: { username: string, password: string }) {
    }
}

export class LoginSuccess implements Action {
    readonly type = LoginActionTypes.LoginSuccess;

    constructor(readonly payload: User) {
    }
}

export class LoginFailed implements Action {
    readonly type = LoginActionTypes.LoginFailed;
}

export class Logout implements Action {
    readonly type = LoginActionTypes.Logout;
}

export type LoginActions = Login | Logout | LoginSuccess | LoginFailed;
