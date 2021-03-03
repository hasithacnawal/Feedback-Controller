import{Action} from '@ngrx/store';
import {User} from '../models/user.model';


export enum UserProfileActionTypes{

  LOAD_USER_LOGIN = '[EMPLEAVE] Load Emp Leave',
  LOAD_USER_LOGIN_SUCCESS= '[EMPLEAVE] load Emp Leave Success',
  LOAD_USER_LOGIN_FAILURE= '[EMPLEAVE] load Emp Leave Success',

}

export class LoadUserLoginAction implements Action{

readonly type= UserProfileActionTypes.LOAD_USER_LOGIN;

constructor(public payload:User){}

}

export class LoadUserLoginSucess implements Action{

  readonly type = UserProfileActionTypes.LOAD_USER_LOGIN_SUCCESS;

  constructor(public payload:string){}
}

export class LoadUserLoginFailure implements Action{

  readonly type = UserProfileActionTypes.LOAD_USER_LOGIN_FAILURE;

  constructor(public payload:string){}
}


export type UserProfileAction =

|LoadUserLoginAction
|LoadUserLoginSucess
|LoadUserLoginFailure;
