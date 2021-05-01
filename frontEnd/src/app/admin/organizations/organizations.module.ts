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
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";




import { OrganizationsRoutingModule } from './organizations-routing.module';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { AllOrganizationsComponent } from './all-organizations/all-organizations.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { EditOrganizationComponent } from './edit-organization/edit-organization.component';
import { DeleteDialogComponent} from './all-organizations/dialogs/delete/delete.component';
import { FormDialogComponent } from './all-organizations/dialogs/form-dialog/form-dialog.component';
import {OrganizationService} from 'src/app/core/organization/organization.service'


@NgModule({
  declarations: [AddOrganizationComponent, AllOrganizationsComponent, OrganizationProfileComponent, EditOrganizationComponent,DeleteDialogComponent, FormDialogComponent],
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
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
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
   
  ],
  providers: [OrganizationService],
})
export class OrganizationsModule {}
