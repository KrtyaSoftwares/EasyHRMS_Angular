import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralListingComponent } from './components/general-listing.component';

const routes: Routes = [
    { path: '', component: GeneralListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralListingRoutingModule { }