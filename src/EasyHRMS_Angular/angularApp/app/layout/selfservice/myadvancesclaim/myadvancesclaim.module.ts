import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAdvancesClaimRoutingModule } from './myadvancesclaim-routing.module';
import { MyadvancesclaimComponent } from './components/myadvancesclaim.component';

import { MyadvancesclaimService } from '../../../core/services/selfservice/myadvancesclaim.service';

@NgModule({
  imports: [
      CommonModule,
      MyAdvancesClaimRoutingModule
  ],
  declarations: [MyadvancesclaimComponent],
  providers: [MyadvancesclaimService]
})
export class MyadvancesclaimModule { }
