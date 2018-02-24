import { FriendsList } from '../models/FriendsList';

export const INITIAL_STATE : FriendsListState = {
    friendsLists: [],
    selectedFriendsLists: []
};

export interface FriendsListState {
    friendsLists : FriendsList[],
    selectedFriendsLists : FriendsList[]
}