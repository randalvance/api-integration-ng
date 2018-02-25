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
import { FriendsListFacebookResponse } from '../models/FriendsListApiReponse';
import { FriendsListBackendResponse } from '../models/FriendsListBackendResponse';
import { FriendsListCreateRequest } from '../models/FriendsListCreateRequest';
import { FriendsListCreateDto } from '../models/FriendsListCreateDto';

import { environment } from '../../../environments/environment';

@Injectable()
export class FriendsListService {    
    constructor(
        private http: Http, 
        private store: NgRedux<AppState>) {
    }

    getFriendsListsFromFacebook() : Observable<FriendsList[]> {
        let currentUser = this.store.getState().auth.loggedInUser;
        let accessToken = currentUser.token;

        if (!accessToken) return Observable.throw(new Error('Not logged in.'));

        return this.http.get(`${environment.facebookGraphApiBaseUrl}me/friendlists`, {
                params: { 
                    'access_token' : accessToken,
                    'fields': 'id,name' }
            })
            .map((response: Response) => <FriendsListFacebookResponse>response.json())
            .map(apiResponse => apiResponse.data.map(apiFriendsList => <FriendsList>{ id : apiFriendsList.id, name: apiFriendsList.name }))
            .catch((err, caught) => {
                return Observable.throw(err || 'An error occured');
            });
    }

    getFriendsListsFromBackend() : Observable<FriendsList[]> {
        let currentUserId = this.store.getState().auth.loggedInUser.userId;

        if (!currentUserId) return Observable.throw(new Error('Not logged in.'));

        return this.http.get(`${environment.backendBaseApiUrl}friendslists/${currentUserId}`)
            .map((response: Response) => <FriendsListBackendResponse>response.json())
            .map(apiResponse => apiResponse.data.map(apiFriendsList => <FriendsList>{ id : apiFriendsList.friendsListId, name: apiFriendsList.name }))
            .catch((err, caught) => {
                return Observable.throw(err || 'An error occured');
            });
    }

    saveFriendsListsToBackend(friendsLists : FriendsList[]) : Observable<any> {
        let currentUserId = this.store.getState().auth.loggedInUser.userId;

        return this.http.post(`${environment.backendBaseApiUrl}friendslists`, <FriendsListCreateRequest>{
                userId: currentUserId,
                data: friendsLists.map((fl, _) => <FriendsListCreateDto>{ friendsListId: fl.id, name: fl.name })
            })
            .catch((err, caught) => {
                return Observable.throw(err || 'An error occured');
            });
    }
}