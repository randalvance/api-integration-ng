import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    SocialLoginModule,
    AuthServiceConfig,
    FacebookLoginProvider,
  } from 'angular5-social-login';

import { AuthConstants } from './auth.constants';
import { SignInComponent } from './components';

@NgModule({
    declarations: [
      SignInComponent
    ],
    exports: [
      SignInComponent
    ],
    imports: [
      BrowserModule,
      SocialLoginModule
    ],
    providers: [
      {
        provide: AuthServiceConfig,
        useFactory: getAuthServiceConfigs
      }
    ]
  })
  export class AuthModule { }
  
  function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(AuthConstants.FACEBOOK_APP_ID)
      }
    ]);
  
    return config;
  }