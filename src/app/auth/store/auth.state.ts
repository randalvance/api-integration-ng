import { UserInfo } from '../models/user-info.model'

export const INITIAL_STATE : AuthState = {
    loggedInUser : null
};

export interface AuthState {
    loggedInUser : UserInfo
}