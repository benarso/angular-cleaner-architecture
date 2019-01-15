import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import {Logout} from './auth/actions/login.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoManager';

  logout() {
    this.store.dispatch(new Logout());
  }

  constructor(readonly store: Store<any>) {
  }
}
