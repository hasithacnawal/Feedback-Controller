import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "appointment",
    loadChildren: () =>
      import("./appointment/appointment.module").then(
        (m) => m.AppointmentModule
      ),
  },
  {
    path: "doctors",
    loadChildren: () =>
      import("./doctors/doctors.module").then((m) => m.DoctorsModule),
  },

  {
    path: "patients",
    loadChildren: () =>
      import("./patients/patients.module").then((m) => m.PatientsModule),
  },

  {
    path: "survey",
    loadChildren: () =>
      import("./survey-builder/survey-builder.module").then(
        (m) => m.SurveyBuilderModule
      ),
  },
<<<<<<< HEAD

  {
    path: 'organization',
    loadChildren: () =>
      import('./organizations/organizations.module').then((m) => m.OrganizationsModule),
  },



=======
>>>>>>> cee0aee48f31e90e0deb9d02832f4128333719c0
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
