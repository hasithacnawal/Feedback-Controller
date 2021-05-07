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
    let surveyTitle = "";
    let surveyType = "";
    let surveyQuestions = new FormArray([]);

    this.surveyForm = new FormGroup({
      surveyTitle: new FormControl(surveyTitle, [Validators.required]),
      surveyType: new FormControl(surveyType, [Validators.required]),
      surveyQuestions: surveyQuestions,
      IsAnonymous: new FormControl(false, [Validators.required]),
    });

    this.onAddQuestion();
  }

  onAddQuestion() {
    console.log(this.surveyForm);

    const surveyQuestionItem = new FormGroup({
      questionTitle: new FormControl("", Validators.required),
      questionType: new FormControl("", Validators.required),
      questionGroup: new FormGroup({}),
    });

    (<FormArray>this.surveyForm.get("surveyQuestions")).push(
      surveyQuestionItem
    );
  }

  onRemoveQuestion(index) {
    this.surveyForm.controls.surveyQuestions["controls"][
      index
    ].controls.questionGroup = new FormGroup({});
    this.surveyForm.controls.surveyQuestions["controls"][
      index
    ].controls.questionType = new FormControl({});

    (<FormArray>this.surveyForm.get("surveyQuestions")).removeAt(index);
    this.selectedOption.splice(index, 1);
    console.log(this.surveyForm);
  }

  onSeletQuestionType(questionType, index) {
    if (questionType === "Single choice" || questionType === "Multi choice") {
      this.addOptionControls(questionType, index);
    }
  }

  addOptionControls(questionType, index) {
    let options = new FormArray([]);
    let showRemarksBox = new FormControl(false);

    this.surveyForm.controls.surveyQuestions["controls"][
      index
    ].controls.questionGroup.addControl("options", options);
    this.surveyForm.controls.surveyQuestions["controls"][
      index
    ].controls.questionGroup.addControl("showRemarksBox", showRemarksBox);

    this.clearFormArray(
      <FormArray>(
        this.surveyForm.controls.surveyQuestions["controls"][index].controls
          .questionGroup.controls.options
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
      optionText: new FormControl("", Validators.required),
    });
    (<FormArray>(
      this.surveyForm.controls.surveyQuestions["controls"][index].controls
        .questionGroup.controls.options
    )).push(optionGroup);
  }

  removeOption(questionIndex, itemIndex) {
    (<FormArray>(
      this.surveyForm.controls.surveyQuestions["controls"][questionIndex]
        .controls.questionGroup.controls.options
    )).removeAt(itemIndex);
  }
  postSurvey() {
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
  addNewSurvey() {
    let formData = this.surveyForm.value;
    let createrId = this.authService.currentUserValue.id;
    let orgId = this.authService.currentUserValue.organizationId;
    let surveyQuestions = formData.surveyQuestions;
    console.log("hello", formData);

    let survey: Survey;

    survey.type = formData.surveyType;
    survey.title = formData.surveyTitle;
    survey.anonymous = formData.IsAnonymous;
    survey.createrId = createrId;
    survey.organizationId = orgId;

    let optionArray =
      formData.surveyQuestions[0].questionGroup.options[0].optionText;

    surveyQuestions.forEach((question, index, array) => {
      let questionItem = {
        uuid: 0,
        questionType: question.questionType,
        questionTitle: question.questionTitle,
        //"required": true,
        options: [],
      };

      if (question.questionGroup.hasOwnProperty("options")) {
        question.questionGroup.options.forEach((option) => {
          let optionItem: MultipleOption = {
            id: 0,
            optionText: option.optionText,
            optionColor: "",
          };
          questionItem.options.push(optionItem);
        });
      }

      survey.questions.push(questionItem);
    });

    console.log(survey);
    console.log("posting survey");
  }

  onSubmit() {
    this.addNewSurvey();
  }
}
