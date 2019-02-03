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

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, AfterViewInit {

    @Input() todo: TodoViewmodel;
    @Output() startEditing = new EventEmitter();
    @Output() stopEditing = new EventEmitter();
    @Output() remove = new EventEmitter();
    @Output() toggle = new EventEmitter();

    todoText = new FormControl('todoText');



    //todo: add formgroup isdirty check before firing events
    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {/*
        const input = this.renderer.selectRootElement('#bueh');
        if (this.todo.isEditing) {
            input.focus();
        }*/
    }

    onInputFocus() {
        this.startEditing.emit();
    }

    onInputBlur() {
        this.stopEditing.emit();
    }

    onRemove() {
        this.remove.emit();
    }

    onCheckboxChanged(event: MatCheckboxChange) {
       this.toggle.emit();
    }
}
