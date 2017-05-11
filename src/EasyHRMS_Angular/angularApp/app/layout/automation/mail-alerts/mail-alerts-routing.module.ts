import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailAlertsComponent } from './components/mail-alerts.component';

const routes: Routes = [
  { path: '', component: MailAlertsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailAlertsRoutingModule { }
