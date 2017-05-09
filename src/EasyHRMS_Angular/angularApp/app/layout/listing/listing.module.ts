import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './components/listing.component';
import { ListingRoutingModule } from './listing-routing.module';
import { PagerService } from '../../core/services/common/pager.service';

@NgModule({
  imports: [
    CommonModule,
    ListingRoutingModule
  ],
  exports: [
    ListingComponent
  ],
  declarations: [
    ListingComponent
  ],
  providers : [
    PagerService
  ]
})
export class ListingModule { }
