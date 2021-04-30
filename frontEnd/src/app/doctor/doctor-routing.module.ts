import { Page404Component } from "./../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { DoctorsComponent } from "./doctors/doctors.component";
import { PatientsComponent } from "./patients/patients.component";
import { SettingsComponent } from "./settings/settings.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "survey",
    loadChildren: () =>
      import("./survey-builder/survey-builder.module").then(
        (m) => m.SurveyBuilderModule
      ),
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./staff/staff.module").then((m) => m.StaffModule),
  },
  {
    path: "doctors",
    component: DoctorsComponent,
  },
  {
    path: "patients",
    component: PatientsComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
