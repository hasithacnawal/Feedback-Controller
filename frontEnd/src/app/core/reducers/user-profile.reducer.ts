//import {UserProfileAction, UserProfileActionTypes} from '../actions/user-profile.action';
import * as userProfileActions from "../actions/user-profile.action"
import {User} from '../models/user.model';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';


export interface UserProfileState extends EntityState<User>{

  selectedUserId: number | null;
  loading: boolean;
  loaded: boolean;
  success:string,
  error: string;



}


export const userProfileAdapter : EntityAdapter<User> = createEntityAdapter<User>();

export const defaultUserProfile : UserProfileState={

  ids:[],
  entities:{},
  selectedUserId: null,
  loading : false,
  loaded : false,
  success:"",
  error:""
}

export const initialState = userProfileAdapter.getInitialState(defaultUserProfile);

//export const userProfileFeatureKey = 'user';

export function userProfileReducer( state = initialState,action : userProfileActions.UserProfileAction): UserProfileState{

  switch(action.type){

    case userProfileActions.UserProfileActionTypes.LOAD_USER_LOGIN:{

      return userProfileAdapter.addOne(action.payload,state);
    }

    case userProfileActions.UserProfileActionTypes.LOAD_USER_LOGIN_SUCCESS:{

      return {
        ...state,
        success: action.payload
      };
    }

    case userProfileActions.UserProfileActionTypes.LOAD_USER_LOGIN_FAILURE:{

      return {
        ...state,
        error:action.payload
      };
    }

    default :{

      return state;
    }
  }


}


