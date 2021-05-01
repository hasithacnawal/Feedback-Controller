import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Organization } from 'src/app/core/models/organization';
import {OrganizationService} from 'src/app/core/organization/organization.service'


@Component({
  selector: "app-add-organization",
  templateUrl: "./add-organization.component.html",
  styleUrls: ["./add-organization.component.sass"],
})
export class AddOrganizationComponent implements OnInit {

  org : Organization;
  addOrganizationForm: FormGroup;
  hide3 = true;
  agree3 = false;
  constructor(private fb: FormBuilder, private orgService: OrganizationService, private _snackBar:MatSnackBar) {
    this.addOrganizationForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      phone: ['', [Validators.required]],
      address: [''],
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
    });
  }

  ngOnInit(): void {
  }

  saveOrganization(){

    this.orgService.createOrganization(this.addOrganizationForm.value).subscribe( data =>{
      console.log(data);
      this.showNotification(
        "black",
        "Add Organization Record Successfully...!!!",
        "bottom",
        "center"
      );
     
    },
    error => console.log(error));


  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this._snackBar.open(text, "", {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  onSubmit() {
    console.log("Form Value", this.addOrganizationForm.value);

    // this.orgService.createOrganization(this.docForm.value);

    this.saveOrganization();
  }
}
