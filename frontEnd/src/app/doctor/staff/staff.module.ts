import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { AddMemberComponent } from './add-member/add-member.component';
import { AllMembersComponent } from './all-members/all-members.component';


@NgModule({
  declarations: [AddMemberComponent, AllMembersComponent],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
