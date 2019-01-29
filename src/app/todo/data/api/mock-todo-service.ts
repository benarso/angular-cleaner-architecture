import {TodoService} from './todo.service';
import {Observable, of} from 'rxjs';
import {Todo} from '../../domain/models/todo';
import {delay} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class MockTodoService extends TodoService {
    static MOCKTODOS: Todo[] = [
        {
            id: '1',
            text: 'Buy beer (mock)',
            completed: false,
            position: 0,
        },
        {
            id: '2',
            text: 'Buy sausages (mock)',
            completed: false,
            position: 1,

        },
        {
            id: '3',
            text: 'Buy a life (mock)',
            completed: false,
            position: 1,

        }
    ];

    loadTodos(): Observable<Todo[]> {
        return of(MockTodoService.MOCKTODOS).pipe(delay(1500));
    }

    addTodo(todo: Todo): Observable<Todo> {
        return of({
            id: '3',
            text: 'Buy a life (mock)',
            completed: false,
            position: 1,

        });
    }

    removeTodo(todo: Todo) {
        return of({
            id: '3',
            text: 'Buy a life (mock)',
            completed: false,
            position: 1,

        });
    }

    updateTodo(todo: Todo) {
        return of({
            id: '3',
            text: 'Buy a life (mock)',
            completed: false,
            position: 1,

        });
    }
}
