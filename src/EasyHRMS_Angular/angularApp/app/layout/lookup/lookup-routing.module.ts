import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookupComponent } from './components/lookup.component';
import { HolidayComponent } from './holiday/holiday.component';

const routes: Routes = [
    { path: '', component: LookupComponent },
    { path: 'holiday', component: HolidayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookupRoutingModule { }
