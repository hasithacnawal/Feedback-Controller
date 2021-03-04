import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store,State,select} from '@ngrx/store';
import * as userProfileActions from 'src/app/core/actions/user-profile.action';
import * as fromUser  from 'src/app/core/reducers/user-profile.reducer';
import {User} from 'src/app/core/models/user.model'
import {AppState} from 'src/app/core/models/app-state';
import * as userSelector from 'src/app/core/selectors/user-profile.selector'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
error$: Observable<String>;
sucess$: Observable<String>;
//user : User={id:0,username:'',email:'',password:''}



  constructor(

    private fb : FormBuilder,
    private store : Store<AppState>







  ) { }

  ngOnInit(): void {

    this.userForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],

    });

    this.sucess$ = this.store.pipe(select(userSelector.getSuccess));
    this.error$ = this.store.pipe(select(userSelector.getError));







  }

  userLogin(){

    const newUser: User= {
      id:0,
      username:" ",
      email: this.userForm.get("email").value,
      password: this.userForm.get("password").value,

    };

    this.store.dispatch(new userProfileActions.LoadUserLoginAction(newUser));

    this.userForm.reset();




  }

}
