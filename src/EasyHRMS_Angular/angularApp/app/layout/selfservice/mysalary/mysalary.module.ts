import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySalaryRoutingModule } from './mysalary-routing.module';
import { MysalaryComponent } from './components/mysalary.component';

@NgModule({
  imports: [
      CommonModule,
      MySalaryRoutingModule
  ],
  declarations: [
      MysalaryComponent
      ]
})
export class MysalaryModule { }
