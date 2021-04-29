import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

import { formatDate } from "@angular/common";
import { Admin } from "src/app/core/models/admin";
import { AdminService } from "src/app/core/admin/admin.service";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  adminDialogForm: FormGroup;
  admins: Admin;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public adminService: AdminService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.admins.name;
      this.admins = data.admins;
    } else {
      this.dialogTitle = "New Admin";
      this.admins = new Admin({});
    }
    this.adminDialogForm = this.createContactForm();
  }
  formControl = new FormControl("", [
    Validators.required,
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  createContactForm(): FormGroup {
    return this.fb.group({
      id: [this.admins.id],

      name: [this.admins.name],
      email: [this.admins.email],
      createdAt: [
        formatDate(this.admins.createdAt, "yyyy-MM-dd", "en"),
        [Validators.required],
      ],
      phone: [this.admins.phone],
    });
  }
  submit() {
    console.log(this.admins);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.adminService.addAdmin(this.adminDialogForm.getRawValue());
  }
}
