import {Todo} from '../../domain/models/todo';
import {Injectable} from '@angular/core';
import {Presenter} from '../../../core/presentation/presenter';
import {GetIncompleteTodosUsecase} from '../../domain/usecases/get-incomplete-todos';
import {TodoViewmodel} from '../viewmodels/todo-viewmodel';
import {map} from 'rxjs/operators';
import {TodoMapper} from './mappers/todo-mapper';
import {AddTodoUsecase} from '../../domain/usecases/add-todo';
import {RemoveTodoUsecase} from '../../domain/usecases/remove-todo';
import {ToggleTodoUsecase} from '../../domain/usecases/toggle-todo';
import {UpdateTodoUsecase} from '../../domain/usecases/update-todo';
import {GetCompletedTodosUsecase} from '../../domain/usecases/get-completed-todos';
import {StartTodoEditUsecase} from '../../domain/usecases/start-todo-edit';
import {StopTodoEditUsecase} from '../../domain/usecases/stop-todo-edit';
import {GetCurrentlyEditedTodoUsecase} from '../../domain/usecases/get-currently-edited-todo';

@Injectable({
    providedIn: 'root'
})
export class TodoPresenter extends Presenter {

    constructor(
        private getCompletedTodosUsecase: GetCompletedTodosUsecase,
        private getIncompleteTodosUsecase: GetIncompleteTodosUsecase,
        private getCurrentlyEditedTodoUsecase: GetCurrentlyEditedTodoUsecase,
        private addTodoUsecase: AddTodoUsecase,
        private removeTodoUsecase: RemoveTodoUsecase,
        private todoMapper: TodoMapper,
        private toggleTodoUsecase: ToggleTodoUsecase,
        private updateTodoUsecase: UpdateTodoUsecase,
        private startTodoEditUsecase: StartTodoEditUsecase,
        private stopTodoEditUseCase: StopTodoEditUsecase) {
        super();
    }

    getCompletedTodos() {
        return this.getCompletedTodosUsecase.execute().pipe(
            // map model(domain) to viewmodel(presentation)
            map((todos: Todo[]) => todos.map(todo => this.todoMapper.mapToViewmodel(todo)))
        );
    }

    getIncompleteTodos() {
        return this.getIncompleteTodosUsecase.execute().pipe(
            // map model(domain) to viewmodel(presentation)
            map((todos: Todo[]) => todos.map(todo => this.todoMapper.mapToViewmodel(todo)))
        );
    }

    getCurrentlyEditedTodo() {
        return this.getCurrentlyEditedTodoUsecase.execute().pipe(
            map((todo: Todo) => todo ? this.todoMapper.mapToViewmodel(todo) : null)
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
        this.startTodoEditUsecase.execute(todo);
    }

    stopTodoEdit() {
        this.stopTodoEditUseCase.execute();
    }
}




