import { Action } from 'redux';
import { AuthState, INITIAL_STATE } from './auth.state';
import { AuthAction, AuthActions } from './auth.actions';

export const authReducer = (state : AuthState = INITIAL_STATE, a : Action) : AuthState => {
    const action = a as AuthAction;
    
    switch (action.type) {
        case AuthActions.LOGIN_USER:
            return {
                ...state,
                loggedInUser: action.payload
            };
        default:
            return state;
    }
};