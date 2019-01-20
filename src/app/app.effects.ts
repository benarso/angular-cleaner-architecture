import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {AuthActions, Login, LoginActionTypes, LoginFailed, LoginSuccess} from './auth/actions/auth.actions';
import {catchError, map, switchMap, tap, throttleTime} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private snackbar: MatSnackBar) {}

  @Effect({dispatch: false})
  actionDebug$: Observable<any> = this.actions$.pipe(
      tap(action => {
        this.snackbar.open(action.type, 'Dismiss', {duration: 3000});
      })
  );
}
