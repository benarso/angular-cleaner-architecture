import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from '../auth/reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../auth/effects/login.effects';
import { AuthRoutingModule} from './auth-routing.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('login', fromLogin.reducer),
    EffectsModule.forFeature([LoginEffects]),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AuthModule { }
