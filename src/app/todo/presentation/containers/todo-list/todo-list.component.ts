import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoPresenter} from '../../presenter/todo-presenter.service';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

    constructor(private sandbox: TodoPresenter) {
    }

    todos$: Observable<TodoViewmodel[]> = this.sandbox.loadTodos();

    ngOnInit() {

    }
}
