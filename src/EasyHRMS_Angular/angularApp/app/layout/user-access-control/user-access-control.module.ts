import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccessControlRoutingModule } from './user-access-control-routing.module';
import { UserAccessControlComponent } from './components/user-access-control.component';

@NgModule({
  imports: [
    CommonModule,
    UserAccessControlRoutingModule
  ],
  declarations: [
    UserAccessControlComponent
  ]
})
export class UserAccessControlModule { }
