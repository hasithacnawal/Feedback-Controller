import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { SurveyRoutingModule } from "./survey-routing.module";
import { CreateSurveyComponent } from "./create-survey/create-survey.component";
import { StoreModule } from "@ngrx/store";

import { MySurveysComponent } from "./my-surveys/my-surveys.component";
import { AllSurveysComponent } from "./all-surveys/all-surveys.component";
import { DeleteDialogComponent } from "./my-surveys/dialogs/delete/delete.component";
import { FormDialogComponent } from "./my-surveys/dialogs/form-dialog/form-dialog.component";
import { SurveyService } from "src/app/core/survey/survey.service";
import { MatDatepickerModule } from "@angular/material/datepicker";

@NgModule({
  declarations: [
    CreateSurveyComponent,
    MySurveysComponent,
    AllSurveysComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    //AppointmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
  ],
  providers: [SurveyService],
})
export class SurveyBuilderModule {}
