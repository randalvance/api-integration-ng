import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { FriendsList } from '../models/FriendsList';
import { dispatch } from '@angular-redux/store';

interface MetaData { };
export type SingleFriendsListAction = FluxStandardAction<FriendsList, MetaData>;
export type MultiFriendsListAction = FluxStandardAction<FriendsList[], MetaData>;

@Injectable()
export class FriendsListActions {
    static readonly ADD_FRIENDS_LISTS : string = "ADD_FRIENDS_LISTS";
    static readonly ADD_FRIENDS_LIST : string = "ADD_FRIENDS_LIST";
    static readonly REMOVE_FRIENDS_LIST : string = "REMOVE_FRIENDS_LIST";

    @dispatch()
    addFriendsLists = (payload: FriendsList[]) : MultiFriendsListAction => ({
        type: FriendsListActions.ADD_FRIENDS_LISTS,
        meta: {},
        payload,
    });

    addFriendsList = (payload: FriendsList) : SingleFriendsListAction => ({
        type: FriendsListActions.ADD_FRIENDS_LIST,
        meta: {},
        payload,
    });

    removeFriendsList = (payload: FriendsList) : SingleFriendsListAction => ({
        type: FriendsListActions.REMOVE_FRIENDS_LIST,
        meta: {},
        payload,
    });
}