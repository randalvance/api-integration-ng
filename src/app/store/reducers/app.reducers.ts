import { AppState, INITIAL_STATE } from '../model/app-state.model';
import { Action } from 'redux';
import { AppAction, AppActions } from '../actions/app.actions';

export const rootReducer = (state : AppState = INITIAL_STATE, a : Action) : AppState => {
    const action = a as AppAction;
    
    switch (action.type) {
        case AppActions.ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            };
        case AppActions.REMOVE_FRIEND:
            return {
                ...state,
                friends: [...state.friends]
            };
        default:
            return state;
    }
};