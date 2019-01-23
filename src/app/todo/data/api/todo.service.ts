import {Injectable} from '@angular/core';
import {Todo} from '../../domain/models/todo';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


export class TodoService {
    static MOCKTODOS: Todo[] = [
        {
            id: 1,
            text: 'Buy beer',
            done: false,
            created_at: Date.now(),
            updated_at: Date.now()
        },
        {
            id: 1,
            text: 'Buy sausages',
            done: false,
            created_at: Date.now(),
            updated_at: Date.now()
        }];

    constructor() {
    }

    loadTodos(): Observable<Todo[]> {
        return of(TodoService.MOCKTODOS).pipe(delay(1500));
    }
}
