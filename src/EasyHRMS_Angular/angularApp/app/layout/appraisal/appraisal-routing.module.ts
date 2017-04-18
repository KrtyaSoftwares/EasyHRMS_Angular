import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { SettingComponent } from './setting/setting.component';
import { KpiComponent } from './kpi/kpi.component';
import { ReviewComponent } from './review/review.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
    { path: '', component: ListsComponent },
    { path: 'setting', component: SettingComponent },
    { path: 'kpi', component: KpiComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }
