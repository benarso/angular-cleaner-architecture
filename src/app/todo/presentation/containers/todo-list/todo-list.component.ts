import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TodoPresenter} from '../../presenter/todo-presenter.service';
import {TodoViewmodel} from '../../viewmodels/todo-viewmodel';
import {Observable} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

    constructor(private presenter: TodoPresenter) {
    }

    todos$ = this.presenter.loadTodos();
    todos: TodoViewmodel[];

    ngOnInit() {
        this.todos$.subscribe(todos => this.todos = todos);
    }

    onTodoClicked(clickedTodo: TodoViewmodel) {
        clickedTodo.isEditing = !clickedTodo.isEditing;
    }
}
