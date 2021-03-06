import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { FriendsList } from '../models/FriendsList';
import { dispatch } from '@angular-redux/store';

interface MetaData { };
export type SingleFriendsListAction = FluxStandardAction<FriendsList, MetaData>;
export type MultiFriendsListAction = FluxStandardAction<FriendsList[], MetaData>;

@Injectable()
export class FriendsListActions {
    static readonly ADD_FRIENDS_LISTS : string = 'ADD_FRIENDS_LISTS';
    static readonly ADD_TO_SELECTED_FRIENDS_LISTS : string = 'ADD_TO_SELECTED_FRIENDS_LISTS';
    static readonly ADD_FRIENDS_LISTS_TO_SELECTED_FRIENDS_LISTS : string = 'ADD_FRIENDS_LISTS_TO_SELECTED_FRIENDS_LISTS';
    static readonly REMOVE_FROM_SELECTED_FRIENDS_LISTS : string = 'REMOVE_FROM_SELECTED_FRIENDS_LISTS';

    @dispatch()
    addFriendsLists = (payload: FriendsList[]) : MultiFriendsListAction => ({
        type: FriendsListActions.ADD_FRIENDS_LISTS,
        meta: {},
        payload
    });

    @dispatch()
    addToSelectedFriendsList = (payload: FriendsList) : SingleFriendsListAction => ({
        type: FriendsListActions.ADD_TO_SELECTED_FRIENDS_LISTS,
        meta: {},
        payload
    });

    @dispatch()
    addFriendsListsToSelectedFriendsList = (payload: FriendsList[]) : MultiFriendsListAction => ({
        type: FriendsListActions.ADD_FRIENDS_LISTS_TO_SELECTED_FRIENDS_LISTS,
        meta: {},
        payload
    });

    @dispatch()
    removeFromSelectedFriendsList = (payload: FriendsList | FriendsList) : SingleFriendsListAction => ({
        type: FriendsListActions.REMOVE_FROM_SELECTED_FRIENDS_LISTS,
        meta: {},
        payload
    });
}