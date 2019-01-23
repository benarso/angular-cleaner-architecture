import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodoSandbox} from '../../sandbox/todo-sandbox.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    constructor(private sandbox: TodoSandbox) {
    }

    todos$ = this.sandbox.loadTodos();

    ngOnInit() {
    }
}
