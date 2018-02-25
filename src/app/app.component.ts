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
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import { FriendsListActions } from './friends-list/store/friends-list.actions';
import { FriendsList } from './friends-list/models/FriendsList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(WizardComponent) wizard: WizardComponent;
  
  @select(store => store.auth.loggedInUser) 
  readonly loggedInUser$ : Observable<UserInfo>

  @select(store => store.friendsList.friendsLists) 
  readonly friendsLists$ : Observable<FriendsList[]>

  isFriendsListLoading : boolean = true;
  
  isSelectedFriendsListLoading : boolean = true;

  constructor(
    private store : NgRedux<AppState>,
    private friendService : FriendsListService,
    private authActions : AuthActions,
    private friendsListActions : FriendsListActions) {
  }

  ngOnInit(): void {
    this.loggedInUser$
        .filter((user, _) => !!(user && user.token))
        .do(user => this.wizard.next())
        .flatMap(user => this.friendService.getFriendsListsFromFacebook())
        .map(friendsLists => this.friendsListActions.addFriendsLists(friendsLists))
        .do(fl => this.isFriendsListLoading = false)
        .switchMap(() => this.friendService.getFriendsListsFromBackend())
        .map(friendsLists => this.friendsListActions.addFriendsListsToSelectedFriendsList(friendsLists))
        .do(fl => this.isSelectedFriendsListLoading = false)
        .subscribe(x => x);
  }

  signIn(userInfo: UserInfo) {
    this.authActions.loginUser(userInfo);
  }

  addToSelectedFriendsList(friendsList : FriendsList) {
    this.friendsListActions.addToSelectedFriendsList(friendsList);
  }

  removeFromSelectedFriendsList(friendsList : FriendsList) {
    this.friendsListActions.removeFromSelectedFriendsList(friendsList);
  }

  save() {
    let selectedFriendsLists = this.store.getState().friendsList.selectedFriendsLists;

    this.friendService.saveFriendsListsToBackend(selectedFriendsLists).subscribe(() => {
      this.wizard.next();
    });
  }
}
