import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './components/templates.component';
import { TemplatseRoutingModule } from './templates-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TemplatseRoutingModule
  ],
  declarations: [TemplatesComponent]
})
export class TemplatesModule { }
