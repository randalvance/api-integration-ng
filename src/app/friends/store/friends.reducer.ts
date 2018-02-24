import { Action } from 'redux';
import { FriendsState, INITIAL_STATE } from './friends.state';
import { FriendAction, FriendActions } from './friends.actions';

export const friendsReducer = (state : FriendsState = INITIAL_STATE, a : Action) : FriendsState => {
    const action = a as FriendAction;
    
    switch (action.type) {
        case FriendActions.ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            };
        case FriendActions.REMOVE_FRIEND:
            return {
                ...state,
                friends: [...state.friends]
            };
        default:
            return state;
    }
};