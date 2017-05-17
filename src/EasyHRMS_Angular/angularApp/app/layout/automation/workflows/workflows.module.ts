import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './components/workflows.component';

import { WorkFlowService } from './../../../core/services/workflow/workflow.service';
import { FormsService } from './../../../core/services/forms/forms.service';

import { GrowlModule } from 'primeng/primeng';
import { PagerService } from '../../../core/services/common/pager.service';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
      WorkflowsRoutingModule,
      GrowlModule,
      ConfirmDialogModule,
  ],
  declarations: [WorkflowsComponent],
  providers: [
      WorkFlowService,
      FormsService,
      PagerService,
      ConfirmationService
  ]
})
export class WorkflowsModule { }
