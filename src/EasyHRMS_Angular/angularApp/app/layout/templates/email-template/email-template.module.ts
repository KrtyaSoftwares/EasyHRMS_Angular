import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailTemplateComponent } from './components/email-template.component';
import { FormComponent } from './components/form/form.component';
import { EmailTemplateRoutingModule } from './email-template-routing.module';

import { TemplatesService } from './../../../core/services/templates/templates.service';
import { FormsService } from './../../../core/services/forms/forms.service';
import { EditorModule, SharedModule } from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

import { PagerService } from '../../../core/services/common/pager.service';

@NgModule({
  imports: [
    CommonModule,
    EmailTemplateRoutingModule,
    EditorModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule
  ],
  declarations: [
    EmailTemplateComponent,
    FormComponent
  ],
  providers: [
    TemplatesService,
    FormsService,
    PagerService
  ]
})
export class EmailTemplateModule { }
