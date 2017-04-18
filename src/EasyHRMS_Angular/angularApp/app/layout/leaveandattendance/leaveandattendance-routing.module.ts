import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { LeavestructureComponent } from './leavestructure/leavestructure.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MisspunchComponent } from './misspunch/misspunch.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
    { path: '', component: ListsComponent },
    { path: 'leavestructure', component: LeavestructureComponent },
    { path: 'holidays', component: HolidaysComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'misspunch', component: MisspunchComponent },
    { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveandattendanceRoutingModule { }
