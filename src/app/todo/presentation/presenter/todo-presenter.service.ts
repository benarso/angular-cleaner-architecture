import {Todo} from '../../domain/models/todo';
import {Injectable} from '@angular/core';
import {Presenter} from '../../../core/presentation/presenter';
import {Usecase} from '../../../core/domain/usecase';
import {Observable, of} from 'rxjs';
import {LoadTodosUsecase} from '../../domain/usecases/load-todos';
import {TodoViewmodel} from '../viewmodels/todo-viewmodel';
import {map, mapTo, mergeMap, switchMap} from 'rxjs/operators';
import {TodoMapper} from './mappers/todo-mapper';
import {TodoModule} from '../../todo.module';
import {TodoListComponent} from '../containers/todo-list/todo-list.component';

@Injectable({
    providedIn: 'root'
})
export class TodoPresenter extends Presenter {

    constructor(private loadTodoUsecase: LoadTodosUsecase, private todoMapper: TodoMapper) {
        super();
    }

    loadTodos(): Observable<TodoViewmodel[]> {
        return this.loadTodoUsecase.execute().pipe(
            // map model(domain) to viewmodel(presentation)
            map((todos) => todos.map(todo => this.todoMapper.mapToViewmodel(todo)))
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




