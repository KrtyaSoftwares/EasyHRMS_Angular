import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalaryStructureRoutingModule } from './salary-structure-routing.module';
import { SalaryStructureComponent } from './components/salary-structure.component';
import { FormComponent } from './components/form/form.component';

import { PagerService } from '../../../core/services/common/pager.service';
import { SalaryStructureService } from '../../../core/services/salary-structure/salary-structure.service';
import { PayrollCategoriesService } from '../../../core/services/payroll-categories/payroll-categories.service';
import { InputSwitchModule} from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { GrowlModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    SalaryStructureRoutingModule,
    InputSwitchModule,
    ConfirmDialogModule,
    GrowlModule,
    MultiSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule
  ],
  declarations: [
    SalaryStructureComponent,
    FormComponent
  ],
  providers: [
    ConfirmationService,
    SalaryStructureService,
    PagerService,
    PayrollCategoriesService
  ]

})
export class SalaryStructureModule { }
