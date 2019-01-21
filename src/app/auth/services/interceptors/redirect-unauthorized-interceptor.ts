import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as fromAuth from '../../reducers';
import {Store} from '@ngrx/store';
import {first, map, mergeMap, tap} from 'rxjs/operators';
import {LoginRedirect} from '../../actions/auth.actions';

@Injectable()

export class RedirectUnauthorizedInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromAuth.State>) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpErrorResponse) {
                    if (event.status === 401) {
                        this.store.dispatch(new LoginRedirect());
                    }
                }
            })
        );
    }
}
