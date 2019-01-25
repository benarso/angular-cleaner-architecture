import {NgModule} from '@angular/core';
import {NativeScriptRouterModule} from 'nativescript-angular/router';
import {Routes} from '@angular/router';

import {TodoListComponent} from './todo/presentation/containers/todo-list/todo-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/todo',
        pathMatch: 'full',
    },
    {
        path: 'todo',
        component: TodoListComponent,
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
