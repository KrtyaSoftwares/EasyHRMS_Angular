import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFunctionsRoutingModule } from './custom-functions-routing.module';
import { CustomFunctionsComponent } from './components/custom-functions.component';

@NgModule({
  imports: [
    CommonModule,
    CustomFunctionsRoutingModule
  ],
  declarations: [CustomFunctionsComponent]
})
export class CustomFunctionsModule { }
