import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { PageHeaderModule } from './../../shared';

import { OppurtunityComponent } from './oppurtunity/oppurtunity.component';
import { LivepositionComponent } from './liveposition/liveposition.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    OppurtunityComponent,
    LivepositionComponent,
    EnquiryComponent,
    ReportComponent
  ]
})
export class CrmModule { }