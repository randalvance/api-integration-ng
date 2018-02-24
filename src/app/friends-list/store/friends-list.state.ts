import { FriendsList } from '../models/FriendsList';

export const INITIAL_STATE : FriendsListState = {
    friendsList: []
};

export interface FriendsListState {
    friendsList : FriendsList[]
}