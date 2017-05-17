import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyLeavesRoutingModule } from './myleaves-routing.module';
import { MyleavesComponent } from './components/myleaves.component';
import { ListComponent } from './components/list/list.component';

import { MyLeaveService } from './../../../core/services/selfservice/myleaves.service';
import {
    GrowlModule,
    CalendarModule
} from 'primeng/primeng';

import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
      CommonModule,
      MyLeavesRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      GrowlModule,
      CalendarModule,
      ConfirmDialogModule,
  ],
  declarations: [MyleavesComponent, ListComponent],
  providers: [MyLeaveService,
      ConfirmationService
  ]
})
export class MyleavesModule { }
