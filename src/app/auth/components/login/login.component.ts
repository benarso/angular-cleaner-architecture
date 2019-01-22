import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginCredentials} from '../../models/login-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() login = new EventEmitter<LoginCredentials>();
  @Input() loading;

  constructor() { }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  username() {
    return this.loginForm.get('username');
  }

  password() {
    return this.loginForm.get('password');
  }

  ngOnInit() {

  }

  authenticate() {
    const credentials = {username: this.username().value, password: this.password().value};
    this.login.emit(credentials);
  }

}
