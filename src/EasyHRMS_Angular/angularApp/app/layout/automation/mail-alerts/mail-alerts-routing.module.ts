import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailAlertsComponent } from './components/mail-alerts.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: '', component: MailAlertsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'forms/:id', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailAlertsRoutingModule { }
