import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordTemplateComponent } from './components/record-template.component';

const routes: Routes = [
    { path: '', component: RecordTemplateComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordTemplateRoutingModule { }
