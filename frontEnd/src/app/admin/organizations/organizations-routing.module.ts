import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllOrganizationsComponent } from './all-organizations/all-organizations.component';
import { AddOrganizationComponent} from './add-organization/add-organization.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import {OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { Page404Component } from './../../authentication/page404/page404.component';
const routes: Routes = [
  {
    path: 'allOrganizations',
    component: AllOrganizationsComponent,
  },
  {
    path: 'add-organization',
    component: AddOrganizationComponent,
  },
  {
    path: 'edit-organization',
    component: EditOrganizationComponent,
  },
  {
    path: 'organization-profile',
    component: OrganizationProfileComponent,
  },
  { path: '**', component: Page404Component },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule { }
