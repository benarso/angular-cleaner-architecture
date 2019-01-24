import {Todo} from '../../domain/models/todo';
import {Injectable} from '@angular/core';
import {Presenter} from '../../../core/presentation/presenter';
import {Usecase} from '../../../core/domain/usecase';
import {Observable, of} from 'rxjs';
import {LoadTodosUsecase} from '../../domain/usecases/load-todos';
import {TodoViewmodel} from '../viewmodels/todo-viewmodel';
import {map, mapTo, mergeMap, switchMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TodoPresenter extends Presenter {

    constructor(private loadTodoUsecase: LoadTodosUsecase) {
        super();
    }

    loadTodos(): Observable<TodoViewmodel[]> {
        return this.loadTodoUsecase.execute().pipe(
            map((todos: any) => todos as TodoViewmodel[])
        );
    }

    addTodo(todo: TodoViewmodel) {
        // this.addTodoUsecase.execute(todo.mapToDomain());
    }

    removeTodo(todo: TodoViewmodel) {

    }

    updateManyTodos(todos: TodoViewmodel[]) {

    }

    updateTodo(todo: TodoViewmodel) {

    }
}




