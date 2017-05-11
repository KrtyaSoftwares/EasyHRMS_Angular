import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailTemplateComponent } from './components/email-template.component';
import { FormComponent } from './components/form/form.component';
import { EmailTemplateRoutingModule } from './email-template-routing.module';

import { TemplatesService } from './../../../core/services/templates/templates.service';
import { FormsService } from './../../../core/services/forms/forms.service';
import { EditorModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    EmailTemplateRoutingModule,
    EditorModule,
    SharedModule
  ],
  declarations: [
    EmailTemplateComponent,
    FormComponent
  ],
  providers: [
    TemplatesService,
    FormsService
  ]
})
export class EmailTemplateModule { }
