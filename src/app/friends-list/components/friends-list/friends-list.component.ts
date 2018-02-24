import { Component, OnInit } from '@angular/core';
import { dispatch, select, select$, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { FriendsList } from '../../models/FriendsList';
import { friendsListReducer } from '../../store/friends-list.reducer';


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  
  @select(store => store.friendsList.friendsLists) 
  readonly friendsList$: Observable<FriendsList[]>;

  constructor() { }

  ngOnInit() {
  }

}
