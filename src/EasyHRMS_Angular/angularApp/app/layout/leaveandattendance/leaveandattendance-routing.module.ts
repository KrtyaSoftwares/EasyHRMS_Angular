import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MisspunchComponent } from './misspunch/misspunch.component';
import { ReportsComponent } from './reports/reports.component';

import { LeaveandattendanceComponent } from './components/leaveandattendance.component';

const routes: Routes = [
    {
        path: '', component: LeaveandattendanceComponent,
        children: [
            { path: 'leave-structure', loadChildren: './leave-structure/leave-structure.module#LeaveStructureModule' },
            { path: 'holidays', component: HolidaysComponent },
            { path: 'attendance', component: AttendanceComponent },
            { path: 'misspunch', component: MisspunchComponent },
            { path: 'reports', component: ReportsComponent },
        ]
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveandattendanceRoutingModule { }
