import { Component } from '@angular/core';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { AppState, INITIAL_STATE } from './store/app.state';
import { rootReducer } from './store/app.reducer';
import { UserInfo } from './auth/models/user-info.model';
import { AuthActions } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authActions : AuthActions) {
  }

  signIn(userInfo: UserInfo) {
    this.authActions.loginUser(userInfo);
  }
}
