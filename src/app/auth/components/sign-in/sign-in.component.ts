import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import {
  AuthService,
  FacebookLoginProvider,
  SocialUser
} from 'angular5-social-login';
import { UserInfo } from '../../models/user-info.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @Output()
  onSignIn: EventEmitter<UserInfo> = new EventEmitter<UserInfo>();

  constructor(private socialAuthService : AuthService) { }

  ngOnInit() {
  }

  public signIn() {
    let subscription = Observable.fromPromise(this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID));
    subscription.map(data => <UserInfo>{
      name: data.name,
      email: data.email,
      token: data.token
    }).subscribe(userData => {
      this.onSignIn.emit(userData);
    });
  }

}
