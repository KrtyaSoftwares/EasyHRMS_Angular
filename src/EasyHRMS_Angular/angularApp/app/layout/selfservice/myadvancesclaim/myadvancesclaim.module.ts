import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAdvancesClaimRoutingModule } from './myadvancesclaim-routing.module';
import { MyadvancesclaimComponent } from './components/myadvancesclaim.component';

@NgModule({
  imports: [
      CommonModule,
      MyAdvancesClaimRoutingModule
  ],
  declarations: [MyadvancesclaimComponent]
})
export class MyadvancesclaimModule { }
