import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveStructureRoutingModule } from './leave-structure-routing.module';
import { LeaveStructureComponent } from './components/leave-structure.component';
import { LeaveStructureService } from './../../../core/services/leave-structure/leave-structure.service';
import { PagerService } from '../../../core/services/common/pager.service';

@NgModule({
  imports: [
    CommonModule,
    LeaveStructureRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LeaveStructureComponent
  ],
  providers: [
    LeaveStructureService,
    PagerService
  ]
})
export class LeaveStructureModule { }
