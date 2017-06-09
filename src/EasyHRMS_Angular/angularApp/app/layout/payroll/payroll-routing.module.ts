import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayrollComponent } from './components/payroll.component';
import { ListsComponent } from './lists/lists.component';
import { AlertComponent } from './alert/alert.component';
import { SettingComponent } from './setting/setting.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { ClaimComponent } from './claim/claim.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
    {
        path: '', component: PayrollComponent,
        children: [
            { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
            { path: 'salary-structure', loadChildren: './salary-structure/salary-structure.module#SalaryStructureModule' },
            { path: 'lists', component: ListsComponent },
            { path: 'alert', component: AlertComponent },
            { path: 'setting', component: SettingComponent },
            { path: 'adjustment', component: AdjustmentComponent },
            { path: 'claim', component: ClaimComponent },
            { path: 'reports', component: ReportsComponent },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
