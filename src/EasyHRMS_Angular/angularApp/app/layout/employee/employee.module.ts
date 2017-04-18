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
import { PersonalformComponent } from './edit/personalform/personalform.component';
import { ContactformComponent } from './edit/contactform/contactform.component';
import { BankformComponent } from './edit/bankform/bankform.component';
import { ExperienceformComponent } from './edit/experienceform/experienceform.component';
import { SalaryformComponent } from './edit/salaryform/salaryform.component';
import { LeaveformComponent } from './edit/leaveform/leaveform.component';
import { ActiveemployeeComponent } from './report/activeemployee/activeemployee.component';
import { WorkanniversaryComponent } from './report/workanniversary/workanniversary.component';
import { BirthdayComponent } from './report/birthday/birthday.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    ListsComponent,
    EditComponent,
    LeaveComponent,
    SalaryComponent,
    ReportComponent,
    PersonalformComponent,
    ContactformComponent,
    BankformComponent,
    ExperienceformComponent,
    SalaryformComponent,
    LeaveformComponent,
    ActiveemployeeComponent,
    WorkanniversaryComponent,
    BirthdayComponent
  ]
})
export class EmployeeModule { }