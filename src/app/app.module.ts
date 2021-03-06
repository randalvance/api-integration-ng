import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AuthModule } from './auth/auth.module';
import { FriendsListModule } from './friends-list/friends-list.module';
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
    AuthModule,
    FriendsListModule,
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