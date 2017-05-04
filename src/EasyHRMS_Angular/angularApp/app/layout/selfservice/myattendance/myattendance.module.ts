import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAttendanceRoutingModule } from './myattendance-routing.module';
import { MyattendanceComponent } from './components/myattendance.component';

@NgModule({
  imports: [
      CommonModule,
      MyAttendanceRoutingModule
  ],
  declarations: [MyattendanceComponent]
})
export class MyattendanceModule { }
