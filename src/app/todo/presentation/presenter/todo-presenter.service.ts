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
import {AddTodoUsecase} from '../../domain/usecases/add-todo';
import {RemoveTodoUsecase} from '../../domain/usecases/remove-todo';
import {ToggleTodoUsecase} from '../../domain/usecases/toggle-todo';
import {UpdateTodoUsecase} from '../../domain/usecases/update-todo';

@Injectable({
    providedIn: 'root'
})
export class TodoPresenter extends Presenter {

    constructor(
        private loadTodoUsecase: LoadTodosUsecase,
        private addTodoUsecase: AddTodoUsecase,
        private removeTodoUsecase: RemoveTodoUsecase,
        private todoMapper: TodoMapper,
        private toggleTodoUsecase: ToggleTodoUsecase,
        private updateTodoUsecase: UpdateTodoUsecase) {
        super();
    }

    loadTodos(): Observable<TodoViewmodel[]> {
        return this.loadTodoUsecase.execute().pipe(
            // map model(domain) to viewmodel(presentation)
            map((todos) => todos.map(todo => this.todoMapper.mapToViewmodel(todo)))
        );
    }

    addTodo(todo: TodoViewmodel) {
        this.addTodoUsecase.execute(this.todoMapper.mapToModel(todo));
    }

    removeTodo(todo: TodoViewmodel) {
        this.removeTodoUsecase.execute(this.todoMapper.mapToModel(todo));
    }

    updateManyTodos(todos: TodoViewmodel[]) {

    }

    toggleTodo(todo: TodoViewmodel) {
        this.toggleTodoUsecase.execute(this.todoMapper.mapToModel(todo));
    }

    updateTodo(todo: TodoViewmodel) {
        this.updateTodoUsecase.execute(this.todoMapper.mapToModel(todo));
    }
}




