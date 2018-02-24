import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { ArchwizardModule } from 'ng2-archwizard';

import { AuthModule } from './auth/auth.module';
import { FriendsModule } from './friends/friends.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppState, INITIAL_STATE } from './store/app.state';
import { rootReducer } from './store/app.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    ArchwizardModule,
    AuthModule,
    FriendsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { 
  constructor(
    store: NgRedux<AppState>,
    devTools: DevToolsExtension) {
      
      store.configureStore(
        rootReducer,
        INITIAL_STATE,
        [],
        devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    }
}