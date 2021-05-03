import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActiveServeysComponent } from "./active-serveys/active-serveys.component";
import { DeletedSurveysComponent } from "./deleted-surveys/deleted-surveys.component";
import {MySurveysComponent} from "./my-surveys/my-surveys.component"

const routes: Routes = [
  {
    path: "active",
    component: ActiveServeysComponent,
  },
  {
    path: "trash",
    component: DeletedSurveysComponent,
  },
  {
    path: "my-survey",
    component: MySurveysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveysRoutingModule {}
