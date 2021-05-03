import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllSurveysComponent } from "./all-surveys/all-surveys.component";
import { CreateSurveyComponent } from "./create-survey/create-survey.component";
import { MySurveysComponent } from "./my-surveys/my-surveys.component";

const routes: Routes = [
  {
    path: "createSurvey",
    component: CreateSurveyComponent,
  },
  {
    path: "mySurveys",
    component: MySurveysComponent,
  },
  {
    path: "all",
    component: AllSurveysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
