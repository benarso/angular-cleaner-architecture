import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as fromAuth from '../../reducers';
import {Store} from '@ngrx/store';
import {first, map, mergeMap} from 'rxjs/operators';

@Injectable()

export class BearerTokenInterceptor implements HttpInterceptor {

    constructor(private store: Store<fromAuth.State>) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select(fromAuth.selectJwt).pipe(
            first(),
            mergeMap(jwt => {
                // Login should not include Authorization header
                if (!req.url.includes('login')) {
                    return next.handle(req);
                }
                const authRequest = !!jwt ? req.clone({
                    setHeaders: {Authorization: 'Bearer ' + jwt}
                }) : req;
                return next.handle(authRequest);
            })
        );
    }
}
