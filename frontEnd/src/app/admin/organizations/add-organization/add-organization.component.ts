import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private orgService: OrganizationService ) {
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
     
    },
    error => console.log(error));


  }

  onSubmit() {
    console.log("Form Value", this.addOrganizationForm.value);

    // this.orgService.createOrganization(this.docForm.value);

    this.saveOrganization();
  }
}
