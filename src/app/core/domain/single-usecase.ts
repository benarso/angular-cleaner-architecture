import {Usecase} from './usecase';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SingleUsecase<T> {
    execute(payload: T) {
    }
}
