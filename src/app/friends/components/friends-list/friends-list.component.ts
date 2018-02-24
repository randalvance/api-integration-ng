import { Component, OnInit } from '@angular/core';
import { dispatch, select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/Friend';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {
  
  @select() readonly friends$: Observable<Friend[]>;

  constructor() { }

  ngOnInit() {
  }

}
