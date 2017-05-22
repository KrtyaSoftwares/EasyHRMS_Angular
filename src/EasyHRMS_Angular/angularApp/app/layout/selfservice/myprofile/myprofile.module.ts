import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './myprofile-routing.module';
import { GeneralFormbuilderModule } from '../../general-formbuilder/general-formbuilder.module';

import { MyprofileComponent } from './components/myprofile.component';
//import { EditComponent } from './../../employee/edit/edit.component';

import { GeneralFormsService } from '../../../core/services/general/general-forms.service';

@NgModule({
  imports: [
      CommonModule,
      MyProfileRoutingModule,
      GeneralFormbuilderModule,
  ],
  declarations: [
     MyprofileComponent,
     //EditComponent
  ],
  providers: [
      GeneralFormsService
  ]
})
export class MyprofileModule { }
