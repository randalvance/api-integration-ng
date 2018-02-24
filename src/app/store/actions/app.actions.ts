import { Friend } from '../../friends/models/Friend';
import { FluxStandardAction } from 'flux-standard-action';
import { Injectable } from '@angular/core';

type Payload = Friend;
interface MetaData { };
export type AppAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class AppActions {
    static readonly ADD_FRIEND : string = "ADD_FRIEND";
    static readonly REMOVE_FRIEND : string = "REMOVE_FRIEND";

    addFriend = (payload: Friend) : AppAction => ({
        type: AppActions.ADD_FRIEND,
        meta: {},
        payload,
    });

    removeFriend = (payload: Friend) : AppAction => ({
        type: AppActions.REMOVE_FRIEND,
        meta: {},
        payload,
    });
}