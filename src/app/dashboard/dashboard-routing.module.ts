import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardPageComponent} from './containers/dashboard-page/dashboard-page.component';
import {AuthGuardService} from '../auth/services/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    canActivate: [AuthGuardService] //TODO: guard routes at a lower level
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
