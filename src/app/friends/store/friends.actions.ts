import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { Friend } from '../models/Friend';

type Payload = Friend;
interface MetaData { };
export type FriendAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class FriendActions {
    static readonly ADD_FRIEND : string = "ADD_FRIEND";
    static readonly REMOVE_FRIEND : string = "REMOVE_FRIEND";

    addFriend = (payload: Friend) : FriendAction => ({
        type: FriendActions.ADD_FRIEND,
        meta: {},
        payload,
    });

    removeFriend = (payload: Friend) : FriendAction => ({
        type: FriendActions.REMOVE_FRIEND,
        meta: {},
        payload,
    });
}