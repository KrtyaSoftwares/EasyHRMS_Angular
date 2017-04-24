import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookupComponent } from './components/lookup.component';
import { HolidayComponent } from './holiday/holiday.component';
import { BranchComponent } from './branch/branch.component';
import { FormComponent } from './branch/form/form.component';

const routes: Routes = [
    { path: '', component: LookupComponent },
    { path: 'holiday', component: HolidayComponent },
    { path: 'branch', component: BranchComponent },
    { path: 'branch/form', component: FormComponent },
    { path: 'branch/form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookupRoutingModule { }
