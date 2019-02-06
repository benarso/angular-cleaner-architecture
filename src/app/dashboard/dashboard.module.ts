import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import {TodoListComponent} from '../todo/presentation/components/todo-list/todo-list.component';
import {TodoModule} from '../todo/todo.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    TodoModule,
  ]
})
export class DashboardModule { }
