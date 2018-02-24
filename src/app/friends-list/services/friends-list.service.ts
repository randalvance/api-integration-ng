import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { FriendsList } from "../models/FriendsList";
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from '../../auth/models/user-info.model';
import { AppState } from '../../store/app.state';

import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FriendsListService {
    private static readonly BASE_API_URL = 'https://graph.facebook.com/v2.12/';

    constructor(
        private http: Http, 
        private store: NgRedux<AppState>) {
    }

    listAllFriendsList() : Observable<FriendsList[]> {
        let currentUser = this.store.getState().auth.loggedInUser;
        let accessToken = currentUser.token;

        if (!accessToken) return Observable.throw(new Error('Not logged in.'));

        return this.http.get(`${FriendsListService.BASE_API_URL}me/friendlists`, {
                params: { 
                    'access_token' : accessToken,
                    'fields': 'id,name' }
            })
            .map((response: Response) => <any>response.json())
            .catch((err, caught) => {
                return Observable.throw(err || 'An error occured');
            });
    }
}