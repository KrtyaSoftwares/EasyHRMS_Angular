import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule' },
            { path: 'selfservice', loadChildren: './selfservice/selfservice.module#SelfserviceModule' },
            { path: 'appraisal', loadChildren: './appraisal/appraisal.module#AppraisalModule' },
            { path: 'lookup', loadChildren: './lookup/lookup.module#LookupModule' },
            { path: 'crm', loadChildren: './crm/crm.module#CrmModule' },
            { path: 'recruitment', loadChildren: './recruitment/recruitment.module#RecruitmentModule' },
            { path: 'leaveandattendance', loadChildren: './leaveandattendance/leaveandattendance.module#LeaveandattendanceModule' },
            { path: 'payroll', loadChildren: './payroll/payroll.module#PayrollModule' },
            { path: 'formbuilder', loadChildren: './formbuilder/formbuilder.module#FormbuilderModule' },
            { path: 'listing', loadChildren: './listing/listing.module#ListingModule' },
            { path: 'general-listing', loadChildren: './general-listing/general-listing.module#GeneralListingModule' },
            { path: 'general-formbuilder', loadChildren: './general-formbuilder/general-formbuilder.module#GeneralFormbuilderModule' },
            { path: 'templates', loadChildren: './templates/templates.module#TemplatesModule' },
            { path: 'automation', loadChildren: './automation/automation.module#AutomationModule' },
            { path: 'user-access-control', loadChildren: './user-access-control/user-access-control.module#UserAccessControlModule' },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
