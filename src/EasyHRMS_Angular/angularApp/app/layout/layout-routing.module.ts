import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'myprofile', loadChildren: './myprofile/myprofile.module#MyprofileModule' },
            { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
            { path: 'appraisal', loadChildren: './appraisal/appraisal.module#AppraisalModule' },
            { path: 'lookup', loadChildren: './lookup/lookup.module#LookupModule' },
            { path: 'crm', loadChildren: './crm/crm.module#CrmModule' },
            { path: 'recruitment', loadChildren: './recruitment/recruitment.module#RecruitmentModule' },
            { path: 'leaveandattendance', loadChildren: './leaveandattendance/leaveandattendance.module#LeaveandattendanceModule' },
            { path: 'payroll', loadChildren: './payroll/payroll.module#PayrollModule' },
            { path: 'formbuilder', loadChildren: './formbuilder/formbuilder.module#FormbuilderModule' },
            { path: 'listing', loadChildren: './listing/listing.module#ListingModule' },
            { path: 'general-listing', loadChildren: './general-listing/general-listing.module#GeneralListingModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
