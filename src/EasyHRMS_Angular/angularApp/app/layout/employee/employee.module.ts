import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListsComponent } from './lists/lists.component';
import { EditComponent } from './edit/edit.component';

import { EmployeeRoutingModule } from './employee-routing.module';
import { PageHeaderModule } from './../../shared';

import { ReportComponent } from './report/report.component';

import { ActiveemployeeComponent } from './report/activeemployee/activeemployee.component';
import { WorkanniversaryComponent } from './report/workanniversary/workanniversary.component';
import { BirthdayComponent } from './report/birthday/birthday.component';
import { EmployeeComponent } from './components/employee.component';

import { EmployeeService } from '../../core/services/employee/employee.service';
import { GeneralFormsService } from '../../core/services/general/general-forms.service';

import { GeneralFormbuilderModule } from '../general-formbuilder/general-formbuilder.module';
import { PagerService } from '../../core/services/common/pager.service';
import { GrowlModule } from 'primeng/primeng';

import { GeneralListingModule } from '../general-listing/general-listing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    PageHeaderModule,
    GeneralFormbuilderModule,
    GrowlModule,
    GeneralListingModule
  ],
  declarations: [
    ListsComponent,
    EditComponent,
    ReportComponent,
    ActiveemployeeComponent,
    WorkanniversaryComponent,
    BirthdayComponent,
    EmployeeComponent
  ],
  providers: [
    EmployeeService,
    GeneralFormsService,
    PagerService
  ]
})
export class EmployeeModule { }