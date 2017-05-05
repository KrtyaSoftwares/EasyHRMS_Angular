import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListsComponent } from './lists/lists.component';
import { EditComponent } from './edit/edit.component';

import { EmployeeRoutingModule } from './employee-routing.module';
import { PageHeaderModule } from './../../shared';

import { LeaveComponent } from './leave/leave.component';
import { SalaryComponent } from './salary/salary.component';
import { ReportComponent } from './report/report.component';

import { ActiveemployeeComponent } from './report/activeemployee/activeemployee.component';
import { WorkanniversaryComponent } from './report/workanniversary/workanniversary.component';
import { BirthdayComponent } from './report/birthday/birthday.component';

import { EmployeeService } from '../../core/services/employee.service';
import { GeneralFormsService } from '../../core/services/general-forms.service';

import { GeneralFormbuilderModule } from '../general-formbuilder/general-formbuilder.module';

import { GrowlModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    PageHeaderModule,
    GeneralFormbuilderModule,
    GrowlModule
  ],
  declarations: [
    ListsComponent,
    EditComponent,
    LeaveComponent,
    SalaryComponent,
    ReportComponent,
    ActiveemployeeComponent,
    WorkanniversaryComponent,
    BirthdayComponent
  ],
  providers: [
    EmployeeService,
    GeneralFormsService
  ]
})
export class EmployeeModule { }