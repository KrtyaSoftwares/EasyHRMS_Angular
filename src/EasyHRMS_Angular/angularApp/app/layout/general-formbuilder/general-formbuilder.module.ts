import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GeneralFormbuilderComponent } from './components/general-formbuilder.component';
import { DynamicFormsComponent } from './components/dynamic-forms.component';

import { GeneralFormbuilderRoutingModule } from './general-formbuilder-routing.module';
import { LookupDataService } from '../../core/services/common/lookup-data.service';
import { GrowlModule,
          CalendarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    GeneralFormbuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    CalendarModule
  ],
  exports: [
    GeneralFormbuilderComponent,
    DynamicFormsComponent
  ],
  declarations: [
    GeneralFormbuilderComponent,
    DynamicFormsComponent
  ],
  providers : [
    LookupDataService
  ]
})
export class GeneralFormbuilderModule { }
