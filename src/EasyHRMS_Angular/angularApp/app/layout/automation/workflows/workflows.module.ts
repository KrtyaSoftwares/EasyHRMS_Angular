import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './components/workflows.component';
import { FormComponent } from './components/form/form.component';

import { WorkFlowService } from './../../../core/services/workflow/workflow.service';
import { FormsService } from './../../../core/services/forms/forms.service';

import { GrowlModule } from 'primeng/primeng';
import { PagerService } from '../../../core/services/common/pager.service';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      WorkflowsRoutingModule,
      GrowlModule,
      ConfirmDialogModule,
  ],
  declarations: [
      WorkflowsComponent,
      FormComponent
  ],
  providers: [
      WorkFlowService,
      FormsService,
      PagerService,
      ConfirmationService
  ]
})
export class WorkflowsModule { }
