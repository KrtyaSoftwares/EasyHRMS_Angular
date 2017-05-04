import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormbuilderComponent } from './components/formbuilder.component';
import { FormbuilderRoutingModule } from './formbuilder-routing.module';
@NgModule({
  imports: [
    CommonModule,
    FormbuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormbuilderComponent
  ],
  declarations: [FormbuilderComponent]
})
export class FormbuilderModule { }