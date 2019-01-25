import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../domain/models/todo';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {Editable} from '../../../../core/presentation/concerns/editable';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit, Editable {

  @Input() todo: TodoViewmodel;

  constructor() { }

  ngOnInit() {
  }

  toggleEditing(): void {
    this.todo.isEditing = !this.todo.isEditing;
  }

  startEditing(): void {
    this.todo.isEditing = true;
  }

  stopEditing(): void {
    this.todo.isEditing = false;
  }

  setEditing(editing) {
    this.todo = editing;
    if (this.todo.isEditing) {
      this.startEditing();
    } else {
      this.stopEditing();
    }
  }
}
