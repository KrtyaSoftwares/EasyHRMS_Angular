import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './components/workflows.component';

@NgModule({
  imports: [
    CommonModule,
    WorkflowsRoutingModule
  ],
  declarations: [WorkflowsComponent]
})
export class WorkflowsModule { }
