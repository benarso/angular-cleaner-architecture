import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, metaReducers} from './reducers';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppEffects} from './app.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';

import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import {BearerTokenInterceptor} from './auth/services/interceptors/bearer-token-interceptor';
import {RedirectUnauthorizedInterceptor} from './auth/services/interceptors/redirect-unauthorized-interceptor';
import {CoreModule} from './core/core.module';
import {TodoModule} from './todo/todo.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([AppEffects]),
        BrowserAnimationsModule,
        FlexLayoutModule,
        MaterialModule,
        CoreModule,
        HttpClientModule,
        AuthModule,
        TodoModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: BearerTokenInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: RedirectUnauthorizedInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
