import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserProfileState} from '../reducers/user-profile.reducer';

const getUserProfileState = createFeatureSelector<UserProfileState>(
  "user"
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

