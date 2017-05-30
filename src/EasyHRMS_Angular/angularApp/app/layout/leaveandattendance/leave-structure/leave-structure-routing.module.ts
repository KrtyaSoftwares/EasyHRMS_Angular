import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveStructureComponent } from './components/leave-structure.component';

const routes: Routes = [
    { path: '', component: LeaveStructureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveStructureRoutingModule { }
