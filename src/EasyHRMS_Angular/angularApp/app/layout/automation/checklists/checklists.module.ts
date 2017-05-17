import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChecklistsRoutingModule } from './checklists-routing.module';
import { ChecklistsComponent } from './components/checklists.component';
import { FormComponent } from './components/form/form.component';

import { FormsService } from './../../../core/services/forms/forms.service';
import { ChecklistsService } from './../../../core/services/checklist/checklists.service';
import { WorkflowTasksService } from './../../../core/services/workflow-tasks/workflow-tasks.service';
import { PagerService } from '../../../core/services/common/pager.service';
import { TemplatesService } from '../../../core/services/templates/templates.service';
import { EmployeeService } from '../../../core/services/employee/employee.service';

import {GrowlModule} from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { EditorModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    ChecklistsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule,
    ConfirmDialogModule,
    EditorModule,
    SharedModule
  ],
  declarations: [
    ChecklistsComponent,
    FormComponent
    ],
  providers: [
    FormsService,
    ChecklistsService,
    PagerService,
    ConfirmationService,
    WorkflowTasksService,
    TemplatesService,
    EmployeeService
  ]
})
export class ChecklistsModule { }
