import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PayrollRoutingModule } from './payroll-routing.module';
import { PageHeaderModule } from './../../shared';
import { PayrollComponent } from './components/payroll.component'
import { ListsComponent } from './lists/lists.component';
import { AlertComponent } from './alert/alert.component';
import { SettingComponent } from './setting/setting.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { ClaimComponent } from './claim/claim.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    PayrollRoutingModule,
    PageHeaderModule

  ],
  declarations: [
    ListsComponent,
    AlertComponent,
    SettingComponent,
    AdjustmentComponent,
    ClaimComponent,
    ReportsComponent,
    PayrollComponent
  ],
  providers: [
  ]
})
export class PayrollModule { }
