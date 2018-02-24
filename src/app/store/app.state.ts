import { AuthState, INITIAL_STATE as AUTH_INITIAL_STATE } from "../auth/store/auth.state";
import { FriendsListState, INITIAL_STATE as FRIENDS_LIST_INITIAL_STATE } from "../friends-list/store/friends-list.state";

export const INITIAL_STATE : AppState = {
    auth: AUTH_INITIAL_STATE,
    friendsList: FRIENDS_LIST_INITIAL_STATE
};

export interface AppState {
    auth: AuthState,
    friendsList: FriendsListState
}