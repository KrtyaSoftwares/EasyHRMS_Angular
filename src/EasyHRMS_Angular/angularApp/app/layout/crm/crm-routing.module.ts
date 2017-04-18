import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OppurtunityComponent } from './oppurtunity/oppurtunity.component';
import { LivepositionComponent } from './liveposition/liveposition.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ReportComponent } from './report/report.component';


const routes: Routes = [
    { path: '', component: OppurtunityComponent },
    { path: 'liveposition', component: LivepositionComponent },
    { path: 'enquiry', component: EnquiryComponent },
    { path: 'reports', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
