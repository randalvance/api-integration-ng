import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
    SocialLoginModule,
    AuthServiceConfig,
    FacebookLoginProvider
  } from 'angularx-social-login';

import { AuthConstants } from './auth.constants';
import { SignInComponent } from './components';
import { AuthActions } from './store/auth.actions';

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
      AuthActions,
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
        provider: new FacebookLoginProvider(AuthConstants.FACEBOOK_APP_ID, {
          scope: 'read_custom_friendlists',
          return_scopes: true,
          enable_profile_selector: true
        })
      }
    ]);
  
    return config;
  }