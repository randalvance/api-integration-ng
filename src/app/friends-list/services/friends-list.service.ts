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
import { FriendsListApiResponse } from '../models/FriendsListApiReponse';
import { FriendsListCreateRequest } from '../models/FriendsListCreateRequest';
import { FriendsListCreateDto } from '../models/FriendsListCreateDto';

import { environment } from '../../../environments/environment';

@Injectable()
export class FriendsListService {    
    constructor(
        private http: Http, 
        private store: NgRedux<AppState>) {
    }

    listAllFriendsList() : Observable<FriendsList[]> {
        let currentUser = this.store.getState().auth.loggedInUser;
        let accessToken = currentUser.token;

        if (!accessToken) return Observable.throw(new Error('Not logged in.'));

        return this.http.get(`${environment.facebookGraphApiBaseUrl}me/friendlists`, {
                params: { 
                    'access_token' : accessToken,
                    'fields': 'id,name' }
            })
            .map((response: Response) => <FriendsListApiResponse>response.json())
            .map(apiResponse => apiResponse.data.map(apiFriendsList => <FriendsList>{ id : apiFriendsList.id, name: apiFriendsList.name }))
            .catch((err, caught) => {
                return Observable.throw(err || 'An error occured');
            });
    }

    addAllFriendsList(friendsLists : FriendsList[]) : Observable<any> {
        let c = this.store.getState().auth.loggedInUser.userId;

        return this.http.post(`${environment.backendBaseApiUrl}friendlists`, <FriendsListCreateRequest>{
                data: friendsLists.map((fl, _) => <FriendsListCreateDto>{ friendsListId: fl.id, name: fl.name })
            })
            .catch((err, caught) => {
                return Observable.throw(err || 'An error occured');
            });
    }
}