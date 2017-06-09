import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { EditComponent } from './edit/edit.component';
import { ReportComponent } from './report/report.component';

  import { EmployeeComponent } from './components/employee.component'

const routes: Routes = [
    {
        path: '', component: EmployeeComponent,
        children: [
            { path: 'salary', loadChildren: './salary/salary.module#SalaryModule' },
            { path: 'leave', loadChildren: './leave/leave.module#LeaveModule' },
            { path: 'edit/:formid/', component: EditComponent },
            { path: 'edit/:formid/:id', component: EditComponent },
            { path: 'report', component: ReportComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }