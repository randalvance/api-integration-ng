import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
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
  
  @Input() isFriendsListLoading : boolean = true;

  @Input() isSelectedFriendsListLoading : boolean = true;

  @Output()
  onAddToSelectedFriendsList : EventEmitter<FriendsList> = new EventEmitter<FriendsList>();

  @Output()
  onRemoveFromSelectedFriendsList : EventEmitter<FriendsList> = new EventEmitter<FriendsList>();

  @Output()
  onSave : EventEmitter<any> = new EventEmitter<any>();

  @select(store => store.friendsList.friendsLists) 
  readonly friendsList$ : Observable<FriendsList[]>;

  @select(store => store.friendsList.selectedFriendsLists)
  readonly selectedFriendsList$ : Observable<FriendsList[]>;

  ngOnInit() {
  }

  addToSelectedFriendsList(friendsList : FriendsList) {
    this.onAddToSelectedFriendsList.emit(friendsList);
  }

  removeFromSelectedFriendsList(friendsList : FriendsList) {
    this.onRemoveFromSelectedFriendsList.emit(friendsList);
  }

  save() {
    this.onSave.emit();
  }
}
