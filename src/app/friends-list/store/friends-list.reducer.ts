import { Action } from 'redux';
import { FriendsListState, INITIAL_STATE } from './friends-list.state';
import { SingleFriendsListAction, MultiFriendsListAction, FriendsListActions } from './friends-list.actions';
import { FriendsList } from '../models/FriendsList';

export const friendsListReducer = (state : FriendsListState = INITIAL_STATE, a : Action) : FriendsListState => {
    const singleFriendAction = a as SingleFriendsListAction;
    const multiFriendAction = a as MultiFriendsListAction;
    
    switch (a.type) {
        case FriendsListActions.ADD_FRIENDS_LISTS:
            return {
                ...state,
                friendsLists: [...state.friendsLists, ...multiFriendAction.payload]
            };
        case FriendsListActions.ADD_TO_SELECTED_FRIENDS_LISTS:
            return {
                ...state,
                friendsLists: state.friendsLists.filter(fl => fl.id != singleFriendAction.payload.id),
                selectedFriendsLists: [...state.selectedFriendsLists, singleFriendAction.payload]
            };
        case FriendsListActions.REMOVE_FROM_SELECTED_FRIENDS_LISTS:
            return {
                ...state,
                selectedFriendsLists: state.selectedFriendsLists.filter(fl => fl.id != singleFriendAction.payload.id),
                friendsLists: [...state.friendsLists, singleFriendAction.payload]
            };
        default:
            return state;
    }
};