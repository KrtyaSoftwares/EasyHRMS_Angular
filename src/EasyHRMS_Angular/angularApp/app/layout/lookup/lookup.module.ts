import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LookupComponent } from './components/lookup.component';
import { LookupRoutingModule } from './lookup-routing.module';
import { PageHeaderModule } from './../../shared';
import { HolidayComponent } from './holiday/holiday.component';
import { BranchComponent } from './branch/branch.component';
import { FormComponent } from './branch//form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LookupRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    LookupComponent,
    HolidayComponent,
    BranchComponent,
    FormComponent
  ]
})
export class LookupModule { }
