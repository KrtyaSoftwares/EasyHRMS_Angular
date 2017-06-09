import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LeaveRoutingModule } from './leave-routing.module';
import { LeaveComponent } from './components/leave.component';

import { EmployeeLeaveService } from './../../../core/services/employee-leave/employee-leave.service';
import { PagerService } from './../../../core/services/common/pager.service';
import { ListsService } from './../../../core/services/lookup/lists-data';

@NgModule({
  imports: [
    CommonModule,
    LeaveRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LeaveComponent
  ],
  providers: [
    EmployeeLeaveService,
    PagerService,
    ListsService
  ]
})
export class LeaveModule { }
