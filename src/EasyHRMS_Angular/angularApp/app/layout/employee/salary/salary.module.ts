import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './components/salary.component';

import { EmployeeSalaryService } from './../../../core/services/employee-salary/employee-salary.service';
import { ListsService } from './../../../core/services/lookup/lists-data';
import { PayrollCategoriesService } from './../../../core/services/payroll-categories/payroll-categories.service';
import { PagerService } from './../../../core/services/common/pager.service';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SalaryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule
  ],
  declarations: [
    SalaryComponent
  ],
  providers: [
    PagerService,
    EmployeeSalaryService,
    ListsService,
    PayrollCategoriesService
  ]
})
export class SalaryModule { }
