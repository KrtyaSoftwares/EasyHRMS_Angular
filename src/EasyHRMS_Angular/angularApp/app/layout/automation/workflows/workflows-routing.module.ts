import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkflowsComponent } from './components/workflows.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
    { path: '', component: WorkflowsComponent },
    { path: 'forms', component: FormComponent },
    { path: 'forms/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowsRoutingModule { }
