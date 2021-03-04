import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserProfileState,userProfileFeatureKey} from '../reducers/user-profile.reducer';

const getUserProfileState = createFeatureSelector<UserProfileState>(
  userProfileFeatureKey
);


export const getUserLoading = createSelector(
  getUserProfileState,
  (state: UserProfileState)=> state.loading
);

export const getUserLoaded = createSelector(
  getUserProfileState,
  (state:UserProfileState)=>state.loaded
);

export const getSuccess = createSelector(

  getUserProfileState,
  (state: UserProfileState)=>state.success
);

export const getError = createSelector(

  getUserProfileState,
  (state:UserProfileState)=> state.error
);

