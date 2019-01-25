import {Usecase} from './usecase';
import {Observable} from 'rxjs';

export abstract class ObservableUseCase<T> extends Usecase<T> {

    abstract execute(): Observable<T>;
}
