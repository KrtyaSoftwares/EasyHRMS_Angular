import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LookupComponent } from './components/lookup.component';
import { LookupRoutingModule } from './lookup-routing.module';
import { PageHeaderModule } from './../../shared';
import { HolidayComponent } from './holiday/holiday.component';
import { BranchComponent } from './branch/branch.component';
import { FormComponent } from './branch//form/form.component';

import { FormbuilderModule } from '../formbuilder/formbuilder.module';
import { ListingModule } from '../listing/listing.module';

import { ListsService } from '../../core/services/lists-data';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LookupRoutingModule,
    PageHeaderModule,
    FormbuilderModule,
    ListingModule
  ],
  declarations: [
    LookupComponent,
    HolidayComponent,
    BranchComponent,
    FormComponent,
  ],
  providers : [
    ListsService
  ]
})
export class LookupModule { }
