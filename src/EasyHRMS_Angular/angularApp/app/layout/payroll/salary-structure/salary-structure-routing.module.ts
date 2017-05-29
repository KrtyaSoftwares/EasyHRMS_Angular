import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaryStructureComponent } from './components/salary-structure.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
    { path: '', component: SalaryStructureComponent },
    { path: 'form', component: FormComponent },
    { path: 'form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryStructureRoutingModule { }
