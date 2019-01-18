import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AbstractControl, EmailValidator, FormControl, FormGroup, ValidationErrors, Validator, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Login, LoginActionTypes} from '../../actions/auth.actions';
import {AppComponent} from '../../../app.component';
import {filter, map, startWith} from 'rxjs/operators';
import {AuthState, selectAuthState} from '../../reducers/auth.reducer';
import {Observable} from 'rxjs';
import {EMAIL_VALIDATOR} from '@angular/forms/src/directives/validators';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    authState$: Observable<any>;

    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private store: Store<AuthState>, public snackBar: MatSnackBar) {
        this.authState$ = this.store.select(selectAuthState);
    }

    ngOnInit() {
        // this.loginForm.valueChanges.subscribe(value => console.warn(value));
        this.authState$.subscribe( (state) => {
            // console.warn('ERrrOrrorrrr ' + state.errorMessage);
        });
    }

    login(): void {

    }

    authenticate() {
        // TODO: Use EventEmitter with form value

        this.store.dispatch(new Login({username: this.loginForm.get('username').value, password: this.loginForm.get('password').value}));
    }

}
