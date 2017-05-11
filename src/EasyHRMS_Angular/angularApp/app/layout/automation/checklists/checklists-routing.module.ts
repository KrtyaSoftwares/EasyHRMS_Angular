import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistsComponent } from './components/checklists.component';

const routes: Routes = [
  { path: '', component: ChecklistsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecklistsRoutingModule { }
