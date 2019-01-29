import {TodoService} from './todo.service';
import {Todo} from '../../domain/models/todo';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class ApiTodoService extends TodoService {


    static MOCKTODOS: Todo[] = [
        {
            id: '0',
            text: 'Buy beer (API)',
            completed: false,
            position: 0,
        },
        {
            id: '1',
            text: 'Buy sausages (API',
            completed: true,
            position: 1,
        },
        {
            id: '2',
            text: 'Buy life',
            completed: true,
            position: 1,
        }
        ];


    readonly BASEURL = 'http://192.168.33.10:1337/todos';
    constructor(private http: HttpClient) {
        super();
    }

    loadTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.BASEURL);
        // return of(ApiTodoService.MOCKTODOS).pipe(delay(1500));
    }
    addTodo(todo: Todo) {
        return this.http.post<Todo>(this.BASEURL, todo);
    }
}
