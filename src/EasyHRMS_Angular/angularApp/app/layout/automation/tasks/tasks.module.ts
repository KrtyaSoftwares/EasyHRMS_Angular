import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks.component';
import { FormComponent } from './components/form/form.component';

import { TaskService } from './../../../core/services/tasks/task.service';
import { FormsService } from './../../../core/services/forms/forms.service';

import { GrowlModule } from 'primeng/primeng';
import { PagerService } from '../../../core/services/common/pager.service';


@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GrowlModule
  ],
  declarations: [
      TasksComponent,
      FormComponent
  ],
  providers: [
      TaskService,
      FormsService,
      PagerService
  ]
})
export class TasksModule { }
