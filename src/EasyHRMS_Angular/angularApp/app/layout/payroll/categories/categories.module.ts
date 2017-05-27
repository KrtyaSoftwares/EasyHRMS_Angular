import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories.component';
import { FormComponent } from './components/form/form.component';

import { PagerService } from '../../../core/services/common/pager.service';
import { PayrollCategoriesService } from '../../../core/services/payroll-categories/payroll-categories.service';
import {InputSwitchModule} from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ConfirmDialogModule,
    GrowlModule
  ],
  declarations: [
    CategoriesComponent,
    FormComponent
  ],
  providers: [
    PayrollCategoriesService,
    PagerService,
    ConfirmationService
  ]
})
export class CategoriesModule { }
