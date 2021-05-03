import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActiveServeysComponent } from "./active-serveys/active-serveys.component";
import { DeletedSurveysComponent } from "./deleted-surveys/deleted-surveys.component";

const routes: Routes = [
  {
    path: "active",
    component: ActiveServeysComponent,
  },
  {
    path: "deleted",
    component: DeletedSurveysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveysRoutingModule {}
