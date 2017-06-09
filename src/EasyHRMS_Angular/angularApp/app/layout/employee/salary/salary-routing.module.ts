import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryComponent } from './components/salary.component';

const routes: Routes = [
    { path: '', component: SalaryComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryRoutingModule { }
