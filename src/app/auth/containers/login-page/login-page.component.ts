import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Login, LoginActionTypes} from '../../actions/auth.actions';
import {AppComponent} from '../../../app.component';
import {filter, map, startWith} from 'rxjs/operators';
import {State} from '../../reducers/auth.reducer';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private store: Store<State>, public snackBar: MatSnackBar) {
       // this.authState$ = this.store.select(selectAuthState);
    }

    ngOnInit() {
        // this.loginForm.valueChanges.subscribe(value => console.warn(value));
    }

    login(): void {

    }

    authenticate() {
        // TODO: Use EventEmitter with form value

        this.store.dispatch(new Login({username: this.loginForm.get('username').value, password: this.loginForm.get('password').value}));
    }

}
