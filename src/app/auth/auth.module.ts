import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromLogin from '../auth/reducers/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../auth/effects/login.effects';
import * as fromUser from '../auth/reducers/user.reducer';
import { UserEffects } from '../auth/effects/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('login', fromLogin.reducer),
    StoreModule.forFeature('user', fromUser.reducer),
    EffectsModule.forFeature([LoginEffects, UserEffects])
  ]
})
export class AuthModule { }
