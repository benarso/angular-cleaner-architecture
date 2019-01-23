import {Injectable} from '@angular/core';
import {Todo} from '../../domain/models/todo';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {TodoModule} from '../../todo.module';


export abstract class TodoService {
    abstract loadTodos(): Observable<Todo[]>;
}
