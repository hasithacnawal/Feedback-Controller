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
import { Question } from "src/app/core/models/question";

@Component({
  selector: "app-form-dialog",
  templateUrl: "./form-dialog.component.html",
  styleUrls: ["./form-dialog.component.sass"],
})
export class FormDialogComponent {
  action: string;
  dialogTitle: string;
  surveysDialogForm: FormGroup;
  surveys: Survey;
  questions: Question[];
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
      this.dialogTitle = "New Survey";
      this.surveys = new Survey({});
    }
    this.surveysDialogForm = this.createContactForm();
    console.log(this.surveys);
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
      questions: [this.surveys.questions],
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
    this.surveyService.updateSurvey(this.surveysDialogForm.getRawValue());
  }
}

//
