import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLeavesRoutingModule } from './myleaves-routing.module';
import { MyleavesComponent } from './components/myleaves.component';
import { ListComponent } from './components/list/list.component';

import { MyLeaveService } from './../../../core/services/selfservice/myleaves.service';

@NgModule({
  imports: [
      CommonModule,
      MyLeavesRoutingModule
  ],
  declarations: [MyleavesComponent, ListComponent],
  providers: [MyLeaveService]
})
export class MyleavesModule { }
