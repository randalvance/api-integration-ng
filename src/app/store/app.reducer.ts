import { combineReducers } from 'redux';
import { authReducer } from '../auth/store/auth.reducer';
import { friendsReducer } from '../friends/store/friends.reducer';
import { AppState } from './app.state';

export const rootReducer = 
  combineReducers<AppState>({
    auth: authReducer,
    friends: friendsReducer
  });
