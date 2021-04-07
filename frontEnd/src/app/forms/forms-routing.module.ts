import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { WizardComponent } from './wizard/wizard.component';
import { EditorsComponent } from './editors/editors.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-controls',
    pathMatch: 'full'
  },
  {
    path: 'form-example',
    component: FormExamplesComponent
  },
  {
    path: 'form-validation',
    component: FormValidationsComponent
  },
  {
    path: 'wizard',
    component: WizardComponent
  },
  {
    path: 'editors',
    component: EditorsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
