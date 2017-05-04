import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralFormbuilderComponent } from './components/general-formbuilder.component';

const routes: Routes = [
    { path: '', component: GeneralFormbuilderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralFormbuilderRoutingModule { }