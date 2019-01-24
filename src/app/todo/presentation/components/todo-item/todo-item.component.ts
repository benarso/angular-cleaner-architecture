import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Todo} from '../../../domain/models/todo';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoViewmodel;

  constructor() { }

  ngOnInit() {
  }

}
