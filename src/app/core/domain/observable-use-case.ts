import {Usecase} from './usecase';
import {Observable} from 'rxjs';

export abstract class ObservableUseCase<T> extends Usecase {

    abstract execute(): Observable<T>;
}
