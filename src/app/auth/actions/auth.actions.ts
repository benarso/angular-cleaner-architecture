import {Action} from '@ngrx/store';
import {User} from '../models/user';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginCredentials} from '../models/login-credentials';

export enum LoginActionTypes {
    Login = '[Auth] Login User',
    Logout = '[Auth] Logout User',
    LoginSuccess = '[Auth] Login Success',
    LoginFailed = '[Auth] Login Failed'
}

export class Login implements Action {
    readonly type = LoginActionTypes.Login;

    constructor(readonly payload: LoginCredentials) {
    }
}

export class LoginSuccess implements Action {
    readonly type = LoginActionTypes.LoginSuccess;

    constructor(readonly payload: User) {
    }
}

export class LoginFailed implements Action {
    readonly type = LoginActionTypes.LoginFailed;

    constructor(readonly payload: string) {
    }
}

export class Logout implements Action {
    readonly type = LoginActionTypes.Logout;
}

export type AuthActions = Login | Logout | LoginSuccess | LoginFailed;
