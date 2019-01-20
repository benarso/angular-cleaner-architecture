import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { AuthRoutingModule} from './auth-routing.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from '../auth/components/login/login.component';
import { LocalStorageConfig, localStorageSync} from 'ngrx-store-localstorage';



@NgModule({
  declarations: [LoginPageComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects]),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})

export class AuthModule {
  constructor (@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
          'AuthModule is already loaded. Import it in the AppModule only');
    }
  }
}
