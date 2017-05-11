import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldUpdatesRoutingModule } from './field-updates-routing.module';
import { FieldUpdatesComponent } from './components/field-updates.component';

@NgModule({
  imports: [
    CommonModule,
    FieldUpdatesRoutingModule
  ],
  declarations: [FieldUpdatesComponent]
})
export class FieldUpdatesModule { }
