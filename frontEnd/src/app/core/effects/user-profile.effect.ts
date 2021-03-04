import {Injectable} from '@angular/core';
import {Actions,createEffect, ofType} from '@ngrx/effects'
import {Action} from '@ngrx/store';
import {observable, of} from 'rxjs';
import{ map, mergeMap, catchError} from 'rxjs/operators';
import {UserProfileService} from '../services/user-profile.service';
import * as userProfileActions from '../actions/user-profile.action';
import {User} from '../models/user.model';


@Injectable()

export class UserProfileEffect{

constructor(

  private actions$: Actions,
  private userService: UserProfileService

){}



loadLogin$ = createEffect( ()=>
this.actions$.pipe(
  ofType<userProfileActions.LoadUserLoginAction>(
   userProfileActions.UserProfileActionTypes.LOAD_USER_LOGIN
  ),
  map((action: userProfileActions.LoadUserLoginAction) => action.payload),
  mergeMap((user: User) =>
    this.userService.userLogin(user).pipe(
      map(
        (res: string) =>
          new userProfileActions.LoadUserLoginSucess(res)
      ),
      catchError(err => of(new userProfileActions.LoadUserLoginFailure(err)))
    )
  )
)

)




}


