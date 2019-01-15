import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Login} from '../../actions/login.actions';
import {AppComponent} from '../../../app.component';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    loginForm = new FormGroup({
        username : new FormControl(''),
        password : new FormControl( ''),
    });

    constructor(private store: Store<any>, public snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    login(): void {
        this.snackBar.open('Login clicked', 'Dismiss', {duration: 700});
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.loginForm.value);
        this.snackBar.open(this.loginForm.get('username').value, 'Dismiss', { duration: 500});
    }

}
