import { combineReducers } from 'redux';
import { authReducer } from '../auth/store/auth.reducer';
import { friendsListReducer } from '../friends-list/store/friends-list.reducer';
import { AppState } from './app.state';

export const rootReducer = 
  combineReducers<AppState>({
    auth: authReducer,
    friends: friendsListReducer
  });
