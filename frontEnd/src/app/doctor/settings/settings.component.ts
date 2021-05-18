import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/service/auth.service";
import {AdminService} from "src/app/core/admin/admin.service"
import {Admin} from "src/app/core/models/admin";
import { BehaviorSubject, Observable } from "rxjs";
import { FormBuilder, FormControl, FormGroup,Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.sass"],
})
export class SettingsComponent implements OnInit {

  public currentUserSubject:BehaviorSubject<Admin>;
  public form: FormGroup;
  public submit:false;

  admin$:Observable<Admin>;
  constructor(private adminService: AdminService,private formBuilder:FormBuilder, private snackBar:MatSnackBar) {

    this.form = new FormGroup({
      name: new FormControl(''),
    });


   
  }

  ngOnInit(): void {

    console.log(localStorage.getItem("currentUser"));
    this.currentUserSubject = new BehaviorSubject<Admin>(
      JSON.parse(localStorage.getItem("currentUser"))
    );

    this.form.patchValue({
      name: this.currentUserSubject.value.name,
      });

    console.log(this.currentUserSubject);

    this.form = this.formBuilder.group({

      name:[this.currentUserSubject.value.name],
      oldPassword:["",Validators.required],
    password:["",Validators.required]
    })
  }

  get f(){

    return this.form.controls;
  }

  onSubmit(){

    //this.submit=true;
    /*if(this.form.invalid){

      //this.error= "Current password is inavlid"
      return;
    }*/

    //else{

      this.adminService.changePassword(this.currentUserSubject.value.id,this.f.oldPassword.value,this.f.password.value)
      .subscribe( data =>{
        console.log(data);
        this.showNotification(
          "black",
          "Add Organization Record Successfully...!!!",
          "bottom",
          "center"
        );
       
      },
      error => console.log(error));

    //}

  }

  showNotification(colorName,text,placementFrom,placementAlign){

    this.snackBar.open(text,"",{
      duration:2000,
      verticalPosition:placementFrom,
      horizontalPosition:placementAlign,
      panelClass:colorName,
    })
  }

  

  
}
