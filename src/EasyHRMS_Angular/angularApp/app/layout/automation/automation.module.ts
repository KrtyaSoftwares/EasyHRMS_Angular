import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomationRoutingModule } from './automation-routing.module';
import { AutomationComponent } from './components/automation.component';

@NgModule({
  imports: [
    CommonModule,
    AutomationRoutingModule
  ],
  declarations: [AutomationComponent]
})
export class AutomationModule { }
