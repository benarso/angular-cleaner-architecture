import {Todo} from '../../domain/models/todo';
import {Observable, of} from 'rxjs';

export abstract class TodoService {
    abstract loadTodos(): Observable<Todo[]>;
}
