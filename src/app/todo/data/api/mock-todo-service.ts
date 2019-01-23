import {TodoService} from './todo.service';
import {Observable, of} from 'rxjs';
import {Todo} from '../../domain/models/todo';
import {delay} from 'rxjs/operators';

export class MockTodoService extends TodoService {
    static MOCKTODOS: Todo[] = [
        {
            id: 1,
            text: 'Buy beer (mock)',
            done: false,
            created_at: Date.now(),
            updated_at: Date.now()
        },
        {
            id: 1,
            text: 'Buy sausages (mock',
            done: false,
            created_at: Date.now(),
            updated_at: Date.now()
        }];

    loadTodos(): Observable<Todo[]> {
        return of(MockTodoService.MOCKTODOS).pipe(delay(1500));
    }
}
