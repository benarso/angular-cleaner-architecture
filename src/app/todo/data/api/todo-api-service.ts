import {TodoService} from './todo.service';
import {Todo} from '../../domain/models/todo';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export class TodoApiService extends TodoService {
    static MOCKTODOS: Todo[] = [
        {
            id: 1,
            text: 'Buy beer (API)',
            done: false,
            created_at: Date.now(),
            updated_at: Date.now()
        },
        {
            id: 1,
            text: 'Buy sausages (API',
            done: false,
            created_at: Date.now(),
            updated_at: Date.now()
        }];

    loadTodos(): Observable<Todo[]> {
        return of(TodoApiService.MOCKTODOS).pipe(delay(1500));
    }
}
