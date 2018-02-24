import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {
  AuthService,
  FacebookLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private socialAuthService : AuthService) { }

  ngOnInit() {
  }

  public signIn() {
    let subscription = Observable.fromPromise(this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID));
    subscription.subscribe(userData => {
      console.log(userData);
    });
    
  }

}
