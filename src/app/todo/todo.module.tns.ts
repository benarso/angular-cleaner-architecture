import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import {TodoListComponent} from './presentation/containers/todo-list/todo-list.component';
import {TodoItemComponent} from './presentation/components/todo-item/todo-item.component';
import {TodoRoutingModule} from './todo-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './domain/state/effects/todo.effects';
import {ApiTodoService} from './data/api/api-todo-service';
import {TodoService} from './data/api/todo.service';
import * as fromTodo from './domain/state/reducers/todo.reducer';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [
    NativeScriptCommonModule,
    TodoRoutingModule,
    StoreModule.forFeature('todo', fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [
    { provide: TodoService, useClass: ApiTodoService}
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TodoModule { }
