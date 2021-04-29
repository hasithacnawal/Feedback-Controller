import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "src/app/authentication/page404/page404.component";
import { AddOrgadminComponent } from "./add-orgadmin/add-orgadmin.component";
import { AllOrgadminComponent } from "./all-orgadmin/all-orgadmin.component";
import { TrashComponent } from "./trash/trash.component";

const routes: Routes = [
  {
    path: "add-admin",
    component: AddOrgadminComponent,
  },
  {
    path: "allAdmins",
    component: AllOrgadminComponent,
  },
  {
    path: "trash",
    component: TrashComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgAdminsRoutingModule {}
