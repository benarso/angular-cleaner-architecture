import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private snackbar: MatSnackBar) {
    }

    @Effect({dispatch: false})
    actionDebug$: Observable<any> = this.actions$.pipe(
        tap(action => {
            this.snackbar.open(action.type, 'Dismiss', {duration: 3000});
        })
    );
}
