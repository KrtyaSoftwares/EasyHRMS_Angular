import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralListingComponent } from './components/general-listing.component';
import { GeneralListingRoutingModule } from './general-listing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralListingRoutingModule
  ],
  declarations: [GeneralListingComponent]
})
export class GeneralListingModule { }
