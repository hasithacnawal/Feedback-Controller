import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrganizationService } from 'src/app/core/organization/organization.service';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Organization } from 'src/app/core/models/organization';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})

export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  doctorsForm: FormGroup;
  org: Organization;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public doctorsService: OrganizationService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === 'edit') {
      this.dialogTitle = data.organizations.name;
      this.org = data.organizations;
    } else {
      this.dialogTitle = 'New Organizations';
      this.org = new Organization();
    }
    this.doctorsForm = this.createContactForm();
  }
  formControl = new FormControl('', [
    Validators.required
     //Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Required field'
      : this.formControl.hasError('email')
      ? 'Not a valid email'
      : '';
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.org.id],
     
      name: [this.org.name],
      email: [this.org.email],
      
      
      phone: [this.org.phone],
    
      address: [this.org.address]
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.doctorsService.addOrganization(this.doctorsForm.getRawValue());
  }
}
