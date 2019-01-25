import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromTodo from './domain/state/reducers/todo.reducer';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './domain/state/effects/todo.effects';
import {TodoListComponent} from './presentation/containers/todo-list/todo-list.component';
import {TodoItemComponent} from './presentation/components/todo-item/todo-item.component';
import {TodoRoutingModule} from './todo-routing.module';
import {TodoService} from './data/api/todo.service';
import {ApiTodoService} from './data/api/api-todo-service';
import {AutofocusDirective} from './presentation/directives/InputAutofocus';
import {MaterialModule} from '../material/material.module';
import {MockTodoService} from './data/api/mock-todo-service';


@NgModule({
    declarations: [TodoListComponent, TodoItemComponent, AutofocusDirective],
    imports: [
        CommonModule,
        TodoRoutingModule,
        StoreModule.forFeature('todo', fromTodo.reducer),
        EffectsModule.forFeature([TodoEffects]),
        MaterialModule,
    ],
    providers: [
        {provide: TodoService, useClass: ApiTodoService}
    ],
    exports: [TodoListComponent]
})
export class TodoModule {
}
