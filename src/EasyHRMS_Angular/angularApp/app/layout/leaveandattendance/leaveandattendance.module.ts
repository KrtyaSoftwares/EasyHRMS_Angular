import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveandattendanceRoutingModule } from './leaveandattendance-routing.module';
import { PageHeaderModule } from './../../shared';

import { ListsComponent } from './lists/lists.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MisspunchComponent } from './misspunch/misspunch.component';
import { ReportsComponent } from './reports/reports.component';

import { LeaveandattendanceComponent } from './components/leaveandattendance.component';

@NgModule({
  imports: [
    CommonModule,
    LeaveandattendanceRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    ListsComponent,
    HolidaysComponent,
    AttendanceComponent,
    MisspunchComponent,
    ReportsComponent,
    LeaveandattendanceComponent
  ]
})
export class LeaveandattendanceModule { }