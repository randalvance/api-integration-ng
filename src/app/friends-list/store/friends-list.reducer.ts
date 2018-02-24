import { Action } from 'redux';
import { FriendsListState, INITIAL_STATE } from './friends-list.state';
import { SingleFriendsListAction, MultiFriendsListAction, FriendsListActions } from './friends-list.actions';

export const friendsListReducer = (state : FriendsListState = INITIAL_STATE, a : Action) : FriendsListState => {
    const singleFriendAction = a as SingleFriendsListAction;
    const multiFriendAction = a as MultiFriendsListAction;
    
    switch (a.type) {
        case FriendsListActions.ADD_FRIENDS_LISTS:
            return {
                ...state,
                friendsList: [...state.friendsList, ...multiFriendAction.payload]
            }
        case FriendsListActions.ADD_FRIENDS_LIST:
            return {
                ...state,
                friendsList: [...state.friendsList, singleFriendAction.payload]
            };
        case FriendsListActions.REMOVE_FRIENDS_LIST:
            return state;
        default:
            return state;
    }
};