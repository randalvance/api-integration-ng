import { AuthState, INITIAL_STATE as AUTH_INITIAL_STATE } from "../auth/store/auth.state";
import { FriendsState, INITIAL_STATE as FRIENDS_INITIAL_STATE } from "../friends/store/friends.state";

export const INITIAL_STATE : AppState = {
    auth: AUTH_INITIAL_STATE,
    friends: FRIENDS_INITIAL_STATE
};

export interface AppState {
    auth: AuthState,
    friends: FriendsState
}