import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CreateSurveyComponent} from './create-survey/create-survey.component';

const routes: Routes =[{

    path:'createSurvey',
    component: CreateSurveyComponent,
}
];

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})

export class SurveyRoutingModule{}
