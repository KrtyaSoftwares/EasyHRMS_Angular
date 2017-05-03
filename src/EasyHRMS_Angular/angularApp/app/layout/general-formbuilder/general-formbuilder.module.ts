import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeneralFormbuilderComponent } from './components/general-formbuilder.component';
import { DynamicFormsComponent } from './components/dynamic-forms.component';

import { GeneralFormbuilderRoutingModule } from './general-formbuilder-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralFormbuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    GeneralFormbuilderComponent,
    DynamicFormsComponent
  ],
  declarations: [
    GeneralFormbuilderComponent,
    DynamicFormsComponent
  ]
})
export class GeneralFormbuilderModule { }
