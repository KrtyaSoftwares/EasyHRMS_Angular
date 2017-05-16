import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfserviceComponent } from './components/selfservice.component';
import { HolidayDetailsComponent } from './components/holiday-details/holiday-details.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';


const routes: Routes = [
    {
        path: '', component: SelfserviceComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofileModule' },
            { path: 'mysalary', loadChildren: './mysalary/mysalary.module#MysalaryModule' },
            { path: 'myleaves', loadChildren: './myleaves/myleaves.module#MyleavesModule' },
            { path: 'myadvancesclaim', loadChildren: './myadvancesclaim/myadvancesclaim.module#MyadvancesclaimModule' },
            { path: 'myattendance', loadChildren: './myattendance/myattendance.module#MyattendanceModule' },
        ]
    },
    { path: 'holidaysdetails', component: HolidayDetailsComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    //{ path: 'lists/:lookup', component: LookupListsComponent },
    //{ path: 'form/:lookup', component: FormComponent },
    //{ path: 'form/:lookup/:rowId', component: FormComponent },
    //{ path: 'delete/:lookup/:rowId', component: DeleteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SelfserviceRoutingModule { }
