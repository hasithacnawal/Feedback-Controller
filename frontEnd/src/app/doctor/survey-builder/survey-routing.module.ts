import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyRoutingModule {}
