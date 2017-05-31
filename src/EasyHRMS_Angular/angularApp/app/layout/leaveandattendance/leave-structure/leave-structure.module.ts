import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveStructureRoutingModule } from './leave-structure-routing.module';

import { LeaveStructureComponent } from './components/leave-structure.component';
import { FormComponent } from './components/form/form.component';

import { LeaveStructureService } from './../../../core/services/leave-structure/leave-structure.service';
import { PagerService } from '../../../core/services/common/pager.service';
import { ListsService } from '../../../core/services/lookup/lists-data';

import {InputSwitchModule} from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    LeaveStructureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ConfirmDialogModule,
    GrowlModule,
    MultiSelectModule,
    MessagesModule
  ],
  declarations: [
    LeaveStructureComponent,
    FormComponent
  ],
  providers: [
    LeaveStructureService,
    PagerService,
    ConfirmationService,
    ListsService
  ]
})
export class LeaveStructureModule { }
