import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import { AppraisalRoutingModule } from './appraisal-routing.module';
import { ListsComponent } from './lists/lists.component';
import { SettingComponent } from './setting/setting.component';
import { KpiComponent } from './kpi/kpi.component';
import { ReviewComponent } from './review/review.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    CommonModule,
    AppraisalRoutingModule,
    PageHeaderModule
  ],
  declarations: [ListsComponent, SettingComponent, KpiComponent, ReviewComponent, ReportComponent]
})
export class AppraisalModule { }
