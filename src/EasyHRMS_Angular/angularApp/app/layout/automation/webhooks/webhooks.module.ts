import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebhooksRoutingModule } from './webhooks-routing.module';
import { WebhooksComponent } from './components/webhooks.component';

@NgModule({
  imports: [
    CommonModule,
    WebhooksRoutingModule
  ],
  declarations: [WebhooksComponent]
})
export class WebhooksModule { }
