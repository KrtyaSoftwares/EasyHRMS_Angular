import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    GrowlModule
} from 'primeng/primeng';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login.component';

import { UserLoginService } from '../core/services/user-login/userlogin.service';

@NgModule({
  imports: [
    CommonModule,
      LoginRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      GrowlModule,
  ],
  declarations: [LoginComponent],
  providers: [UserLoginService]
})
export class LoginModule { }
