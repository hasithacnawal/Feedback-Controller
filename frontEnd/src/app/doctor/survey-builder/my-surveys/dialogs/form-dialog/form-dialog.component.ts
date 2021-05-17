import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";

import { formatDate } from "@angular/common";

import { SurveyService } from "src/app/core/survey/survey.service";
import { Survey } from "src/app/core/models/survey";
@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  surveyDialogForm: FormGroup;
  surveys: Survey;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public surveyService: SurveyService,
    private fb: FormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.surveys.Title;
      this.surveys = data.surveys;
    } else {
      this.dialogTitle = "New Admin";
      this.surveys = new Survey({});
    }
    this.surveyDialogForm = this.createContactForm();
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
      id: [this.surveys.id],

      title: [this.surveys.title],
      type: [this.surveys.type],

      updatedAt: [this.surveys.updatedAt],
    });
  }
  submit() {
    console.log(this.surveys);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.surveyService.updateSurvey(this.surveyDialogForm.getRawValue());
  }
}
