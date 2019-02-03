import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoPresenter} from '../../presenter/todo-presenter.service';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {Observable, Observer, Subscription} from 'rxjs';
import {debounceTime, filter, map, switchMap, takeLast} from 'rxjs/operators';
import {Todo} from '../../../domain/models/todo';
import {MessagingService} from '../../../../core/domain/messaging-service';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

    constructor(private presenter: TodoPresenter) {
    }

    todos$ = this.presenter.loadTodos();
    todos: TodoViewmodel[];
    newTodoInput = new FormControl('');

    addTodoSubscription: Subscription;


    ngOnInit() {
        this.todos$.subscribe(todos => {
            this.todos = todos;
            // Start editing on the last todo item
            this.todos[this.todos.length - 1 ].isEditing = true;
        });

       this.newTodoInput.valueChanges.subscribe(value => {
            if (this.newTodoInput.dirty) {
                this.addTodo(value);
                this.newTodoInput.reset();
            }
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

    onTodoChanged(todo: TodoViewmodel) {
        console.warn('changed ' + todo.text);
        this.presenter.updateTodo(todo);
    }

    onToggled(todo: TodoViewmodel) {
        return this.presenter.toggleTodo(todo);
    }

    private addTodo(value: string) {
        const todo = new TodoViewmodel(value);
        this.presenter.addTodo(todo);
    }
}
