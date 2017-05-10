import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LookupComponent } from './components/lookup.component';
import { LookupRoutingModule } from './lookup-routing.module';
import { PageHeaderModule } from './../../shared';

import { LookupListsComponent } from './components/list/lookup-lists.component';
import { FormComponent } from './components/form/form.component';
import { DeleteComponent } from './components/delete/delete.component';

import { FormbuilderModule } from '../formbuilder/formbuilder.module';
import { ListingModule } from '../listing/listing.module';

import { ListsService } from '../../core/services/lookup/lists-data';
import { LookupService } from '../../core/services/lookup/lookup.service';


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
    LookupListsComponent,
    FormComponent,
    DeleteComponent
  ],
  providers : [
    ListsService,
    LookupService
  ]
})
export class LookupModule { }
