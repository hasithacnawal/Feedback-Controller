import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveysRoutingModule } from './surveys-routing.module';
import { ActiveServeysComponent } from './active-serveys/active-serveys.component';
import { DeletedSurveysComponent } from './deleted-surveys/deleted-surveys.component';


@NgModule({
  declarations: [ActiveServeysComponent, DeletedSurveysComponent],
  imports: [
    CommonModule,
    SurveysRoutingModule
  ]
})
export class SurveysModule { }
