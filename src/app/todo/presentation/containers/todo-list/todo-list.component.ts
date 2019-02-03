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
        this.todos$.subscribe(todos => {
            this.todos = todos;
            // Start editing on the last todo item
            this.todos[this.todos.length - 1 ].isEditing = true;
        });
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

    get completedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    get incompleteTodos() {
        return this.todos.filter(todo => !todo.completed);
    }

    onChanged(todo: TodoViewmodel) {
        console.warn('changed ' + todo.text);
    }

    onToggled(todo: TodoViewmodel) {
        return this.presenter.toggleTodo(todo);
    }
}
