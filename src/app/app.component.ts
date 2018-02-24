import { Component, OnInit, ViewChild } from '@angular/core';
import { NgRedux, DevToolsExtension, select } from '@angular-redux/store';
import { AppState, INITIAL_STATE } from './store/app.state';
import { rootReducer } from './store/app.reducer';
import { UserInfo } from './auth/models/user-info.model';
import { AuthActions } from './auth/store/auth.actions';
import { Observable } from 'rxjs/Observable';
import { WizardComponent } from './shared/components';
import { FriendsListService } from './friends-list/services/friends-list.service';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { FriendsListActions } from './friends-list/store/friends-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(WizardComponent) wizard: WizardComponent;
  
  @select(store => store.auth.loggedInUser) 
  readonly loggedInUser$ : Observable<UserInfo>

  constructor(
    private friendService: FriendsListService,
    private authActions : AuthActions,
    private friendActions: FriendsListActions) {
  }

  ngOnInit(): void {
    this.loggedInUser$
      .filter((user, _) => !!(user && user.token))
      .do(user => this.wizard.next())
      .flatMap(user => this.friendService.listAllFriendsList())
      .subscribe(friendsLists => this.friendActions.addFriendsLists(friendsLists));
  }

  signIn(userInfo: UserInfo) {
    this.authActions.loginUser(userInfo);
  }
}
