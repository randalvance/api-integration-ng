import { Friend } from '../../friends/models/Friend';

export const INITIAL_STATE : FriendsState = {
    friends: []
};

export interface FriendsState {
    friends : Friend[]
}