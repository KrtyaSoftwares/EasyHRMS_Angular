import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MailAlertsRoutingModule } from './mail-alerts-routing.module';
import { MailAlertsComponent } from './components/mail-alerts.component';
import { FormsComponent } from './components/forms/forms.component';

import { EditorModule, SharedModule } from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

import { PagerService } from '../../../core/services/common/pager.service';
import { TemplatesService } from './../../../core/services/templates/templates.service';
import { FormsService } from './../../../core/services/forms/forms.service';

@NgModule({
  imports: [
    CommonModule,
    MailAlertsRoutingModule,
    EditorModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule
  ],
  declarations: [
    MailAlertsComponent,
    FormsComponent
  ],
  providers : [
    TemplatesService,
    FormsService,
    PagerService
  ]
})
export class MailAlertsModule { }
