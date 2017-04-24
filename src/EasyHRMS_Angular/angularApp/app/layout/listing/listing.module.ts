import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './components/listing.component';
import { ListingRoutingModule } from './listing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListingRoutingModule
  ],
  exports: [
    ListingComponent
  ],
  declarations: [ListingComponent]
})
export class ListingModule { }
