import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChecklistsRoutingModule } from './checklists-routing.module';
import { ChecklistsComponent } from './components/checklists.component';
import { FormComponent } from './components/form/form.component';

import { FormsService } from './../../../core/services/forms/forms.service';
import { ChecklistsService } from './../../../core/services/checklist/checklists.service';

@NgModule({
  imports: [
    CommonModule,
    ChecklistsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ChecklistsComponent,
    FormComponent
    ],
  providers: [
    FormsService,
    ChecklistsService
  ]
})
export class ChecklistsModule { }
