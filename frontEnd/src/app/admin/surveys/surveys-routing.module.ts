import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DeletedSurveysComponent } from "./deleted-surveys/deleted-surveys.component";
import { MySurveysComponent } from "./my-surveys/my-surveys.component";

const routes: Routes = [
  {
    path: "active",
    component: MySurveysComponent,
  },
  {
    path: "trash",
    component: DeletedSurveysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveysRoutingModule {}
