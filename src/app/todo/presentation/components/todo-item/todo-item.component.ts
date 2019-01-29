import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Todo} from '../../../domain/models/todo';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {Editable} from '../../../../core/presentation/concerns/editable';
import {LoginCredentials} from '../../../../auth/models/login-credentials';
import {MatCheckboxChange} from '@angular/material';

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
    @Output() remove = new EventEmitter();
    @Output() toggle = new EventEmitter();

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
    }

    onFocus() {
        this.startEditing.emit();
    }

    onBlur() {
        this.stopEditing.emit();
    }

    onRemove() {
        this.remove.emit();
    }

    onCheckboxChanged(event: MatCheckboxChange) {
       this.toggle.emit();
    }
}
