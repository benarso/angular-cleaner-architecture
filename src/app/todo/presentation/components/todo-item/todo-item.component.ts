import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer2,
    ViewChild,
    AfterViewInit,
    ElementRef, OnDestroy
} from '@angular/core';
import {Todo} from '../../../domain/models/todo';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {Editable} from '../../../../core/presentation/concerns/editable';
import {LoginCredentials} from '../../../../auth/models/login-credentials';
import {MatCheckboxChange} from '@angular/material';
import {FormControl} from '@angular/forms';
import {debounceTime, takeLast, takeWhile} from 'rxjs/operators';
import {selectValueAccessor} from '@angular/forms/src/directives/shared';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, OnDestroy {

    @Input() todo: TodoViewmodel;
    @Output() toggled = new EventEmitter();
    @Output() changed = new EventEmitter();
    @Output() startEdit = new EventEmitter();
    @Output() stopEdit = new EventEmitter();

    todoText = new FormControl('');

    valueChangesSubscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        this.todoText.setValue(this.todo.text);

        this.valueChangesSubscription = this.todoText.valueChanges.pipe(
            debounceTime(300),
        ).subscribe(value => {
            this.todo.text = value;
            this.changed.emit({...this.todo, text: value});
        });
    }

    onCheckboxChanged() {
        this.toggled.emit({...this.todo});
    }


    onInputFocus() {
        this.startEdit.emit({...this.todo});
    }

    onBlur() {
        this.stopEdit.emit({...this.todo});
    }

    ngOnDestroy(): void {
        this.valueChangesSubscription.unsubscribe();
    }
}
