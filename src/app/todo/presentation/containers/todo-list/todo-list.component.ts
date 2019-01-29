import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoPresenter} from '../../presenter/todo-presenter.service';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';
import {Todo} from '../../../domain/models/todo';
import {MessagingService} from '../../../../core/domain/messaging-service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

    constructor(private presenter: TodoPresenter) {
    }

    todos$ = this.presenter.loadTodos();
    todos: TodoViewmodel[];

    ngOnInit() {
        this.todos$.subscribe(todos => this.todos = todos);
    }

    onTodoClicked(clickedTodo: TodoViewmodel) {
        console.warn('onTodoClicked');
        clickedTodo.isEditing = !clickedTodo.isEditing;
    }

    onStartEditing(todo: TodoViewmodel) {
        console.warn('onStartEditing');
        todo.isEditing = true;
    }

    onStopEditing(todo: TodoViewmodel) {
        console.warn('onStopEditing');
        todo.isEditing = false;
    }

    private getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    onAddClicked() {
        console.warn('onAddclicked');
        this.presenter.addTodo({
            text: 'New Todo' + this.getRandomInt(33),
            position: 1,
            isEditing: false,
            completed: false
        });
    }

    onRemove(todo: TodoViewmodel) {
        console.warn('onRemove');
        this.presenter.removeTodo(todo);
    }

    onToggle(todo: TodoViewmodel) {
        return this.presenter.toggleTodo(todo);
    }

    get completedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    get incompleteTodos() {
        return this.todos.filter(todo => !todo.completed);
    }
}
