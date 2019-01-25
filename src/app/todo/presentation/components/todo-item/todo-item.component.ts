import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Todo} from '../../../domain/models/todo';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {Editable} from '../../../../core/presentation/concerns/editable';
import {LoginCredentials} from '../../../../auth/models/login-credentials';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

    @Input() todo: TodoViewmodel;
    @Output() startEditing = new EventEmitter();
    @Output() stopEditing = new EventEmitter();

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
    }

    onFocus(event: MouseEvent) {
        this.startEditing.emit(this.todo);
    }

    onBlur() {
        this.stopEditing.emit(this.todo);
    }

}
