import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl} from '@angular/forms';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    username = new FormControl('');
    password = new FormControl( '');


    constructor(private store: Store<any>) {
    }

    ngOnInit() {
    }

    login(): void {

    }

}
