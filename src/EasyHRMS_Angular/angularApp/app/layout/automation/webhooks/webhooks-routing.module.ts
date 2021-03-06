import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebhooksComponent } from './components/webhooks.component'

const routes: Routes = [
  { path: '', component: WebhooksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebhooksRoutingModule { }
