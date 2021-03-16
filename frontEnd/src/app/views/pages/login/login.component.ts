import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store,State,select} from '@ngrx/store';
import * as userProfileActions from 'src/app/auth/actions/user-profile.action';
import * as fromUser  from 'src/app/auth/reducers/user-profile.reducer';
import {User} from 'src/app/auth/models/user.model'
import {AppState} from 'src/app/core/models/app-state';
import * as userSelector from 'src/app/auth/selectors/user-profile.selector'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
error$: Observable<String>;
sucess$: Observable<String>;
su: string;
//user : User={id:0,username:'',email:'',password:''}



  constructor(

    private fb : FormBuilder,
    private store : Store<AppState>,
    private router: Router







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

    if(!this.userForm.valid) {

      alert('All the fileds are required!')
      this.userForm.reset();

    }

    else{

      this.store.dispatch(new userProfileActions.LoadUserLoginAction(newUser));
      //this.router.navigate(['/dashboard'])
      //this.sucess$ = this.store.pipe(select(userSelector.getSuccess));
      //this.error$ = this.store.pipe(select(userSelector.getError));

     if(!this.error$==null){
      alert('error')

      }else{

        this.sucess$
        .subscribe(val => alert(val),
                )

         //alert('sucessfully login')
        console.log(this.sucess$)
        this.userForm.reset();

        this.router.navigate(['/dashboard'])

        //console.log(this.error$ = this.store.pipe(select(userSelector.getError)));

      }

      //this.userForm.reset();



    }





  }

}
