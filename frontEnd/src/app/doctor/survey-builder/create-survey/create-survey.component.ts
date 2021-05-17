import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
} from "@angular/forms";

import { SurveyService } from "src/app/core/survey/survey.service";
import { AuthService } from "src/app/core/service/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Survey } from "src/app/core/models/survey";
import { MultipleOption } from "src/app/core/models/multipleOption";

export interface QuestionType {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-create-survey",
  templateUrl: "./create-survey.component.html",
  styleUrls: ["./create-survey.component.css"],
})
export class CreateSurveyComponent implements OnInit {
  surveyForm: FormGroup;

  selectedOption = [];

  editMode = false;
  surveyTypes = [
    { id: 0, value: "Public" },
    { id: 1, value: "Political" },
    { id: 3, value: "Education" },
    { id: 4, value: "Travel" },
    { id: 5, value: "Leisure " },
  ];

  questions: QuestionType[] = [
    { value: "Single choice", viewValue: "Single choice" },
    { value: "Multi choice", viewValue: "Multi choice" },
    { value: "Text", viewValue: "Text" },
    { value: "Rating", viewValue: "Rating" },
  ];

  constructor(
    private fb: FormBuilder,
    private surveyService: SurveyService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {} //

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.surveyForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      type: new FormControl("", [Validators.required]),
      questions: new FormArray([]),
      IsAnonymous: new FormControl(false, [Validators.required]),
    });

    this.onAddQuestion();
  }

  onAddQuestion() {
    console.log(this.surveyForm);

    const surveyQuestionItem = new FormGroup({
      questionTitle: new FormControl("", Validators.required),
      questionType: new FormControl("", Validators.required),
      multipleOptions: new FormArray([]),
    });

    (<FormArray>this.surveyForm.get("questions")).push(surveyQuestionItem);
  }

  onRemoveQuestion(index) {
    this.surveyForm.controls.surveyQuestions["controls"][
      index
    ].controls.multipleOptions = new FormArray([]);
    this.surveyForm.controls.surveyQuestions["controls"][
      index
    ].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get("questions")).removeAt(index);
    this.selectedOption.splice(index, 1);
    console.log(this.surveyForm);
  }

  onSeletQuestionType(questionType, index) {
    if (questionType === "Single choice" || questionType === "Multi choice") {
      this.addOptionControls(questionType, index);
    }
  }

  addOptionControls(questionType, index) {
    let option = new FormControl("");
    let showRemarksBox = new FormControl(false);

    this.surveyForm.controls.questions["controls"][
      index
    ].controls.multipleOptions.addControl("option", option);
    this.surveyForm.controls.questions["controls"][
      index
    ].controls.multipleOptions.addControl("showRemarksBox", showRemarksBox);

    this.clearFormArray(
      <FormArray>(
        this.surveyForm.controls.questions["controls"][index].controls
          .multipleOptions
      )
    );

    this.addOption(index);
    this.addOption(index);
  }

  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  addOption(index) {
    const optionGroup = new FormGroup({
      option: new FormControl(""),
    });
    (<FormArray>this.surveyForm.controls.questions.get("multipleOptions")).push(
      optionGroup
    );
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>(
      this.surveyForm.controls.questions["controls"][questionIndex].controls
        .multipleOptions
    )).removeAt(itemIndex);
  }
  postSurvey() {
    console.log(this.surveyForm.value);
    this.surveyService.postSurvey(this.surveyForm.value).subscribe(
      (data) => {
        console.log(data);

        this.showNotification(
          "black",
          "Add Admin Record Successfully...!!!",
          "bottom",
          "center"
        );
      },
      (error) => console.log(error)
    );
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
    this.postSurvey();
  }
}
