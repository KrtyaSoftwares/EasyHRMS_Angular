import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormbuilderComponent } from './components/formbuilder.component';
import { FormbuilderRoutingModule } from './formbuilder-routing.module';

import { GrowlModule,
          CalendarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormbuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    CalendarModule
  ],
  exports: [
    FormbuilderComponent
  ],
  declarations: [FormbuilderComponent]
})
export class FormbuilderModule { }