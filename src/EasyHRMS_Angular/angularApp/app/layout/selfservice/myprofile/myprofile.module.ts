import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './myprofile-routing.module';

import { MyprofileComponent } from './components/myprofile.component';


@NgModule({
  imports: [
      CommonModule,
      MyProfileRoutingModule,
  ],
  declarations: [
      MyprofileComponent
  ]
})
export class MyprofileModule { }
