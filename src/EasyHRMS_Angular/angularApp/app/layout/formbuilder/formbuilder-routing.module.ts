import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormbuilderComponent } from './components/formbuilder.component';

const routes: Routes = [
    { path: '', component: FormbuilderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormbuilderRoutingModule { }
