import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
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
})
export class TodoListComponent implements OnInit, OnDestroy {

    completedTodos$: Observable<Todo[]>;
    incompleteTodos$: Observable<Todo[]>;
    currentlyEditedTodo$: Observable<Todo>;
    todoSubscription: Subscription;

    private _currentlyEditedTodo: TodoViewmodel;

    constructor(private presenter: TodoPresenter) {
    }

    newTodoInput = new FormControl('');

    ngOnInit() {
        this.completedTodos$ = this.presenter.getCompletedTodos();
        this.incompleteTodos$ = this.presenter.getIncompleteTodos();
        this.currentlyEditedTodo$ = this.presenter.getCurrentlyEditedTodo();

        this.todoSubscription = new Subscription();

        this.todoSubscription.add(
            this.newTodoInput.valueChanges.subscribe(value => {
                this.addTodo(value);
                this.newTodoInput.reset('', {emitEvent: false});
            }));

        this.todoSubscription.add(
            this.currentlyEditedTodo$.subscribe((todo: TodoViewmodel) => {
                this._currentlyEditedTodo = todo;
            })
        );
    }

    private getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    onAddClicked() {
        const todo = {
            text: 'New Todo' + this.getRandomInt(33),
            position: 1,
            isEditing: false,
            completed: false
        };
        this.presenter.addTodo(todo);
    }

    onRemove(todo: TodoViewmodel) {
        this.presenter.removeTodo(todo);
    }

    onTodoChanged(todo: TodoViewmodel) {
        this.presenter.updateTodo(todo);
    }

    onTodoToggled(todo: TodoViewmodel) {
        return this.presenter.toggleTodo(todo);
    }

    addTodo(value: string) {
        const todo = new TodoViewmodel(value);
        todo.completed = false;
        this.presenter.addTodo(todo);
    }

    ngOnDestroy(): void {
        this.todoSubscription.unsubscribe();
    }

    onStartEdit(todo: TodoViewmodel) {
        this.presenter.startTodoEdit(todo);
    }

    onStopEdit() {
        this.presenter.stopTodoEdit();
    }

    isEditing(todo: Todo) {
        return this._currentlyEditedTodo && this._currentlyEditedTodo.id === todo.id;
    }

    trackByFn(index, item) {
        return item.id;
    }
}
