import {Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {TodoPresenter} from '../../presenter/todo-presenter.service';
import {Observable} from 'rxjs';
import {Todo} from '../../../domain/models/todo';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  constructor(private presenter: TodoPresenter) { }

  todos$: Observable<Todo[]> = this.presenter.getTodos();
  loading$: Observable<boolean> = this.presenter.getLoading();

  ngOnInit() {
  }


  onChanged(todo: TodoViewmodel) {
    this.presenter.updateTodo(todo);
  }

  onToggled(todo: TodoViewmodel) {
    return this.presenter.toggleTodo(todo);
  }

  onAdd(value: string) {
    this.presenter.addTodo(new TodoViewmodel(value));
  }

  onRemove(todo: TodoViewmodel) {
    this.presenter.removeTodo(todo);
  }
}
