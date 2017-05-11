import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistsRoutingModule } from './checklists-routing.module';
import { ChecklistsComponent } from './components/checklists.component';

@NgModule({
  imports: [
    CommonModule,
    ChecklistsRoutingModule
  ],
  declarations: [ChecklistsComponent]
})
export class ChecklistsModule { }
