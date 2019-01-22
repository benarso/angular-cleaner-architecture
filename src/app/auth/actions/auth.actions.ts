import {Action} from '@ngrx/store';
import {User} from '../models/user';
import {LoginCredentials} from '../models/login-credentials';
import {LoginResponse} from '../models/login-response';

export enum LoginActionTypes {
    Login = '[Login Component] Login User',
    Logout = '[NavBar] Logout User',
    LoginSuccess = '[Auth API] Login Success',
    LoginFailed = '[Auth API] Login Failure',
    LogoutRedirect = '[Logout Action] Redirect to login',
    DashboardRedirect = '[LoginSuccess Action] Redirect to dashboard',
    AuthGuardRedirect = '[AuthGuard Service] Redirect to login',
}

export class Login implements Action {
    readonly type = LoginActionTypes.Login;

    constructor(readonly payload: LoginCredentials) {
    }
}

export class LoginSuccess implements Action {
    readonly type = LoginActionTypes.LoginSuccess;

    constructor(readonly payload: LoginResponse) {
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

export class LoginRedirect implements Action {
    readonly  type = LoginActionTypes.LogoutRedirect;
}

export class DashboardRedirect implements Action {
    readonly  type = LoginActionTypes.DashboardRedirect;
}

export class AuthGuardRedirect implements Action {
    readonly  type = LoginActionTypes.AuthGuardRedirect;
}

export type AuthActions = Login | Logout | LoginSuccess | LoginFailed | LoginRedirect | DashboardRedirect | AuthGuardRedirect;
