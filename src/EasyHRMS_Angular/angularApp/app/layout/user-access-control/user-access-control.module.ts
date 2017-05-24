import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccessControlRoutingModule } from './user-access-control-routing.module';
import { UserAccessControlComponent } from './components/user-access-control.component';
import {InputSwitchModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    UserAccessControlRoutingModule,
    InputSwitchModule
  ],
  declarations: [
    UserAccessControlComponent
  ]
})
export class UserAccessControlModule { }
