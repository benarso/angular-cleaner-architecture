import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromAuth from '../../../auth/reducers';
import {State} from '../../../auth/reducers';
import {User} from '../../../auth/models/user';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {

  user$: Observable<User>;
  user: User;

  constructor(private store: Store<State>) {
     this.user$ = this.store.select(fromAuth.selectAuthUser);
  }

  ngOnInit() {
    this.user$.subscribe(user => this.user = user);
  }

}
