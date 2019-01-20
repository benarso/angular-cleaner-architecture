import { Injectable } from '@angular/core';
import * as fromAuth from '../reducers';
import {Store} from '@ngrx/store';
import {CanActivate} from '@angular/router';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginRedirect} from '../actions/auth.actions';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromAuth.State>) {

  }

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuth.selectAuthAuthenticated).pipe(
        map(authenticated =>  {
          if (!authenticated) {
            this.store.dispatch(new LoginRedirect());
            return false;
          }
          return true;
        })
    );
  }

}
