import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprofileComponent } from './components/myprofile.component';
import { MyprofileRoutingModule } from './myprofile-routing.module';

@NgModule({
 imports: [
    CommonModule,
    MyprofileRoutingModule
  ],
  declarations: [MyprofileComponent]
})
export class MyprofileModule { }
