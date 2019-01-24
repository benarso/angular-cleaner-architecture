import {TodoService} from './todo.service';
import {Todo} from '../../domain/models/todo';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export class ApiTodoService extends TodoService {
    static MOCKTODOS: Todo[] = [
        {
            id: 1,
            text: 'Buy beer (API)',
            completed: false,
            position: 0,
            created_at: Date.now(),
            updated_at: Date.now()
        },
        {
            id: 1,
            text: 'Buy sausages (API',
            completed: true,
            position: 1,
            created_at: Date.now(),
            updated_at: Date.now()
        }];

    loadTodos(): Observable<Todo[]> {
        return of(ApiTodoService.MOCKTODOS).pipe(delay(1500));
    }
}
