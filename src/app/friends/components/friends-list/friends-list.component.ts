import { Component, OnInit } from '@angular/core';
import { dispatch, select, select$, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/Friend';
import { friendsReducer } from '../../store/friends.reducer';


@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  
  @select(store => store.friends.friends) 
  readonly friends$: Observable<Friend[]>;

  constructor() { }

  ngOnInit() {
  }

}
