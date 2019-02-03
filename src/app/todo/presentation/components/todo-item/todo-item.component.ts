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
    ElementRef
} from '@angular/core';
import {Todo} from '../../../domain/models/todo';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {Editable} from '../../../../core/presentation/concerns/editable';
import {LoginCredentials} from '../../../../auth/models/login-credentials';
import {MatCheckboxChange} from '@angular/material';
import {FormControl} from '@angular/forms';
import {debounceTime, takeLast} from 'rxjs/operators';
import {selectValueAccessor} from '@angular/forms/src/directives/shared';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, AfterViewInit {

    @Input() todo: TodoViewmodel;
    @Output() toggled = new EventEmitter();
    @Output() changed = new EventEmitter();

    todoText = new FormControl('');

    constructor() {
    }

    ngOnInit() {
        this.todoText.setValue(this.todo.text);
    }

    onCheckboxChanged(event: MatCheckboxChange) {
       this.toggled.emit(this.todo);
    }

    ngAfterViewInit(): void {
        this.todoText.valueChanges.pipe(
            debounceTime(500),
        ).subscribe(value => {
            this.todo.text = value;
            this.changed.emit(this.todo);
        });
    }
}
