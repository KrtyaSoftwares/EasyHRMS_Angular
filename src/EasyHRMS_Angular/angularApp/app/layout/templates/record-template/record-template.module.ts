import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordTemplateRoutingModule } from './record-template-routing.module';
import { RecordTemplateComponent } from './components/record-template.component';

@NgModule({
  imports: [
    CommonModule,
    RecordTemplateRoutingModule
  ],
  declarations: [RecordTemplateComponent]
})
export class RecordTemplateModule { }
