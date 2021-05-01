import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar"
import { Organization } from "src/app/core/models/organization";
import { Observable } from 'rxjs';
import {AdminService} from 'src/app/core/admin/admin.service';
import {OrganizationService} from 'src/app/core/organization/organization.service';


@Component({
  selector: "app-add-orgadmin",
  templateUrl: "./add-orgadmin.component.html",
  styleUrls: ["./add-orgadmin.component.sass"],
})
export class AddOrgadminComponent {
  orgAdminForm: FormGroup;
  hide3 = true;
  agree3 = false;
  data$:Observable<Organization[]>;  

  constructor(private fb: FormBuilder, private adminService: AdminService, private orgService : OrganizationService, private snackBar: MatSnackBar) {
    this.orgAdminForm = this.fb.group({
      name: ["", [Validators.required]],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      organization: [[], [Validators.required]],
      roleId: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {

   
   this.data$ = this.orgService.getAll();

   //console.log(this.data$);
   //console.log(this.orgService.getAll());
   

  }

  saveAdmin(){

    
    this.adminService.createAdmin( this.orgAdminForm.value).subscribe( data =>{
      console.log(data);

      this.showNotification(
        "black",
        "Add Admin Record Successfully...!!!",
        "bottom",
        "center"
      );
      
    },
    error => console.log(error));
   

  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackBar.open(text, "", {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }
 

 
  onSubmit() {
    console.log("Form Value", this.orgAdminForm.value);
    this.saveAdmin()
  }
}
