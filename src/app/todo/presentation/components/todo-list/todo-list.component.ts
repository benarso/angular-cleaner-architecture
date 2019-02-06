import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {TodoPresenter} from '../../presenter/todo-presenter.service';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {Observable, Observer, Subscription} from 'rxjs';
import {debounceTime, filter, map, switchMap, take, takeLast} from 'rxjs/operators';
import {Todo} from '../../../domain/models/todo';
import {MessagingService} from '../../../../core/domain/messaging-service';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {

    @Input() todos;
    @Output() add = new EventEmitter();
    @Output() toggle = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Output() reorder = new EventEmitter();
    @Output() changed = new EventEmitter();
    @ViewChild('addInput') addInput: ElementRef;
    todoSubscription: Subscription;

    private _currentlyEditedTodo: TodoViewmodel;

    constructor() {
    }

    newTodoInput = new FormControl('');

    ngOnInit() {
        this.todoSubscription = new Subscription();

        this.todoSubscription.add(
            this.newTodoInput.valueChanges.subscribe(value => {

                this.add.emit(value);
                this.newTodoInput.reset('', {emitEvent: false});
                this.addInput.nativeElement.blur();
            }));

        this.todoSubscription.add(
            /*
            this.currentlyEditedTodo$.subscribe((todo: TodoViewmodel) => {
                this._currentlyEditedTodo = todo;
            })*/
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
        this.add.emit(todo);
    }



    ngOnDestroy(): void {
        this.todoSubscription.unsubscribe();
    }

    onStartEdit(todo: TodoViewmodel) {
        this._currentlyEditedTodo = todo;
    }

    onStopEdit() {
        this._currentlyEditedTodo = null;
    }

    isEditing(todo: Todo) {
        return this._currentlyEditedTodo && this._currentlyEditedTodo.id === todo.id;
    }

    trackByFn(index, item) {
        return item.id;
    }

    get incomplete() {
        return this.todos.filter(todo => todo.completed);
    }

    get complete() {
        return this.todos.filter(todo => !todo.completed);
    }
}
