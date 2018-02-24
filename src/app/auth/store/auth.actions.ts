import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
import { UserInfo } from '../models/user-info.model';
import { dispatch } from '@angular-redux/store';

type Payload = UserInfo;
interface MetaData { };
export type AuthAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class AuthActions {
    static readonly LOGIN_USER : string = "LOGIN_USER";

    @dispatch()
    loginUser = (payload: UserInfo) : AuthAction => ({
        type: AuthActions.LOGIN_USER,
        meta: {},
        payload,
    });
}