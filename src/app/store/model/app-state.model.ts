import { Friend } from '../../friends/models/Friend';

export const INITIAL_STATE : AppState = {
    friends: [  ]
};

export interface AppState {
    friends : Friend[]
}