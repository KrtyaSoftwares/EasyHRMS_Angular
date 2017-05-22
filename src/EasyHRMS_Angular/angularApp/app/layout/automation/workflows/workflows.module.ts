import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './components/workflows.component';
import { FormComponent } from './components/form/form.component';

import { WorkFlowService } from './../../../core/services/workflow/workflow.service';
import { FormsService } from './../../../core/services/forms/forms.service';

import { MailAlertService } from './../../../core/services/mail-alert/mail-alert.service';
import { TaskService } from './../../../core/services/tasks/task.service';
import { ChecklistsService } from './../../../core/services/checklist/checklists.service';

import { GrowlModule } from 'primeng/primeng';
import { PagerService } from '../../../core/services/common/pager.service';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      WorkflowsRoutingModule,
      GrowlModule,
      ConfirmDialogModule,
      InputSwitchModule
  ],
  declarations: [
      WorkflowsComponent,
      FormComponent
  ],
  providers: [
      WorkFlowService,
      FormsService,
      PagerService,
      ConfirmationService,
      MailAlertService,
      TaskService,
      ChecklistsService
  ]
})
export class WorkflowsModule { }
