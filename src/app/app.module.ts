import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';

import { StoreModule } from './store/store.module';
import { AuthModule } from './auth/auth.module';
import { FriendsModule } from './friends/friends.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    AuthModule,
    FriendsModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }