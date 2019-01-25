import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {MessagingService} from './core/domain/messaging-service';
import {Action} from '@ngrx/store';


@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private messagingService: MessagingService) {
    }

    @Effect({dispatch: false})
    actionDebug$: Observable<Action> = this.actions$.pipe(
        tap(action => {
            this.messagingService.post({message: action.type});
        })
    );
}
