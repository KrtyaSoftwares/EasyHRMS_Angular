import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailTemplateComponent } from './components/email-template.component';
import { FormComponent } from './components/form/form.component';
import { EmailTemplateRoutingModule } from './email-template-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmailTemplateRoutingModule
  ],
  declarations: [
    EmailTemplateComponent,
    FormComponent
  ]
})
export class EmailTemplateModule { }
