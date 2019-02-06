import {Todo} from '../../domain/models/todo';
import {Injectable} from '@angular/core';
import {Presenter} from '../../../core/presentation/presenter';
import {TodoViewmodel} from '../viewmodels/todo-viewmodel';
import {filter, map} from 'rxjs/operators';
import {TodoMapper} from './mappers/todo-mapper';
import {AddTodoUsecase} from '../../domain/usecases/add-todo';
import {RemoveTodoUsecase} from '../../domain/usecases/remove-todo';
import {ToggleTodoUsecase} from '../../domain/usecases/toggle-todo';
import {UpdateTodoUsecase} from '../../domain/usecases/update-todo';
import {GetTodos} from '../../domain/usecases/get-todos';
import {GetLoadingUsecase} from '../../domain/usecases/get-loading';

@Injectable({
    providedIn: 'root'
})
export class TodoPresenter extends Presenter {

    constructor(
        private getTodosUsecase: GetTodos,
        private addTodoUsecase: AddTodoUsecase,
        private removeTodoUsecase: RemoveTodoUsecase,
        private todoMapper: TodoMapper,
        private toggleTodoUsecase: ToggleTodoUsecase,
        private updateTodoUsecase: UpdateTodoUsecase,
        private getLoadingUsecase: GetLoadingUsecase) {
        super();
    }

    getLoading() {
        return this.getLoadingUsecase.execute();
    }

    getTodos() {
        return this.getTodosUsecase.execute().pipe(
            // map model(domain) to viewmodel(presentation)
            map((todos: Todo[]) => todos.map(todo => {
                const viewModel: TodoViewmodel = this.todoMapper.mapToViewmodel(todo);
                return todos[todos.length - 1 ].id === todo.id ? {...viewModel, isEditing: true} : viewModel;
            }))
        );
        /*
        return this.getTodosUsecase.execute().pipe(
            // map model(domain) to viewmodel(presentation)
            map((todos: Todo[]) => todos.filter(value => value.completed).map(todo => this.todoMapper.mapToViewmodel(todo)))
        );*/
    }

    getIncompleteTodos() {
        return this.getTodosUsecase.execute().pipe(
            // map model(domain) to viewmodel(presentation)
            map((todos: Todo[]) => todos.filter(value => !value.completed).map(todo => this.todoMapper.mapToViewmodel(todo)))
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

    startTodoEdit(todo: TodoViewmodel) {

    }

    stopTodoEdit() {

    }
}




