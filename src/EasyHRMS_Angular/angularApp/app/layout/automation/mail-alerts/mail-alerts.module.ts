import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailAlertsRoutingModule } from './mail-alerts-routing.module';
import { MailAlertsComponent } from './components/mail-alerts.component';

@NgModule({
  imports: [
    CommonModule,
    MailAlertsRoutingModule
  ],
  declarations: [MailAlertsComponent]
})
export class MailAlertsModule { }
