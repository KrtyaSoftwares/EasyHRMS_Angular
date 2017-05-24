import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './components/permissions.component';

import { FormComponent } from './components/form/form.component';
import { GlobalComponent } from './components/global/global.component';
import { AdminOperationsComponent } from './components/admin-operations/admin-operations.component';

import {TabViewModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    TabViewModule,
    GrowlModule,
    InputSwitchModule
  ],
  declarations: [
    PermissionsComponent,
    FormComponent,
    GlobalComponent,
    AdminOperationsComponent
  ]
})
export class PermissionsModule { }
