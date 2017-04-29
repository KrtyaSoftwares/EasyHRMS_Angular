import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfserviceComponent } from './components/selfservice.component';
import { HolidayDetailsComponent } from './components/holiday-details/holiday-details.component';

import { SelfserviceRoutingModule } from './selfservice-routing.module';

import { LookupDataService } from '../../core/services/common/lookup-data.service';

@NgModule({
  imports: [
      CommonModule,
      SelfserviceRoutingModule
  ],
  declarations: [
      SelfserviceComponent,
      HolidayDetailsComponent
  ],
  providers : [
      LookupDataService
  ]
})
export class SelfserviceModule { }
