import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { EditComponent } from './edit/edit.component';
import { LeaveComponent } from './leave/leave.component';
import { SalaryComponent } from './salary/salary.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
    { path: '', component: ListsComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'leave', component: LeaveComponent },
    { path: 'salary', component: SalaryComponent },
    { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
