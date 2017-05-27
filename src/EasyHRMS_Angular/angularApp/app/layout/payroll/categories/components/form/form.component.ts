import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';

import { PayrollCategoriesService } from './../../../../../core/services/payroll-categories/payroll-categories.service';
import { PayrollCategories } from './../../../../../models/payroll-categories/payroll-categories.model';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  _payrollCategoriesModel = new PayrollCategories();
  form: FormGroup;
  checkPerctage = true;
  _checkedArray: any= [];
  // list of Categories
  _allCategories: any = {};
  _categories: any= [];
  _percentageLists: any = [];
  submitted: boolean;
  _percentageError = false;
  _amountError = false;
  msgs: Message[] = [];
  bindId: number;
  _objEmployeePayrollCategory: any = {};
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _payrollCategoriesService: PayrollCategoriesService
  ) {
    this.form = fb.group({
          'categoryName': [this._payrollCategoriesModel.categoryName, Validators.required],
          'description': [this._payrollCategoriesModel.description],
          'period': [this._payrollCategoriesModel.period, Validators.required],
          'type': [this._payrollCategoriesModel.type],
          'amount': [this._payrollCategoriesModel.amount],
          'percentage': [this._payrollCategoriesModel.percentage],
          // 'percentageOf': [this._payrollCategoriesModel.percentageOf],
          // 'status': [this._payrollCategoriesModel.status],
          'taxDeducted': [this._payrollCategoriesModel.taxDeducted],
          // 'insurationdeducted': [this._payrollCategoriesModel.insurationdeducted],
          // 'pensiondeducted': [this._payrollCategoriesModel.pensiondeducted],
          'isBasedOnAttandance': [this._payrollCategoriesModel.isBasedOnAttandance],
          'isDeduction': [this._payrollCategoriesModel.isDeduction],
          'total': [this._payrollCategoriesModel.total],
          // 'isDefault': [this._payrollCategoriesModel.isDefault],
          // 'inbuilt': [this._payrollCategoriesModel.inbuilt],
      });

    this._payrollCategoriesModel.type = true;
  }

  ngOnInit() {
    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });
    this.getAllCategories();
  }
  getCategoryDataBasedonId(id: number) {
    this._payrollCategoriesService
        .GetSingle(id)
        .subscribe(
        data => {
          this._objEmployeePayrollCategory = data;
          this._payrollCategoriesModel = this._objEmployeePayrollCategory['objEmployeePayrollCategory'];
          if (this._payrollCategoriesModel['percentageOf']) {
            this._checkedArray = this._payrollCategoriesModel['percentageOf'].split(',');
          }
          // Checkbox checked based on db.
          this._checkedArray.forEach((element: any) => {
            this._categories.forEach((ele: any) => {
              if ( element == ele.id) {
                ele.checked = true;
              }
            });
          });
          // Hide Show Percentage and Amount section based on condition
          if ( this._payrollCategoriesModel.type == true ) {
            this.checkPerctage = true;
          } else {
            this.checkPerctage = false;
          }
        })
  }
  setControl(name: any, Isenable: boolean): void {
    let ctrl = this.form.controls[name];
    Isenable ? ctrl.enable() : ctrl.disable();
}
  getAllCategories() {
    this._payrollCategoriesService
        .GetAll()
        .subscribe(
        data => {
          this._allCategories = data;
          this._categories = this._allCategories['list'];
          this._categories.forEach((element: any) => {
            element.checked = false;
          });
          if (this.bindId) {
              this.getCategoryDataBasedonId(this.bindId);
              this.setControl('type', false);
          }
        });
  }
  // Hide Show Percentage and Amount section based on condition
  onChnageType(value: any) {
    this._percentageError = false;
    this._amountError = false;
    if ( value == 'percentage' ) {
      this.checkPerctage = true;
    } else {
      this.checkPerctage = false;
    }
  }

  // Add and remove Percentage% Value
  percentageChange(id: number, evt: any) {
      let target = evt.target;
      if (target.checked) {
        this._percentageLists.push(id);
      } else {
        let index = this._percentageLists.indexOf(id);
        if (index > -1) {
            this._percentageLists.splice(index, 1);
        }
      }
  }
// Custom Validation for Amount and Percentage
mychange(action: any, val: any) {
   if (action == 'percentage') {
      if (val == '') {
        this._percentageError = true;
      } else {
        this._percentageError = false;
      }
   } else {
      if (val == '') {
        this._amountError = true;
      } else {
        this._amountError = false;
      }
   }
}
  onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
        return false;
      } else {
        this._payrollCategoriesModel.categoryName = value.categoryName;
        this._payrollCategoriesModel.description = value.description;
        this._payrollCategoriesModel.period = value.period;
        this._payrollCategoriesModel.percentage = value.percentage;
        this._payrollCategoriesModel.taxDeducted = value.taxDeducted;
        this._payrollCategoriesModel.isBasedOnAttandance = value.isBasedOnAttandance;
        this._payrollCategoriesModel.isDeduction = value.isDeduction;
        this._payrollCategoriesModel.status = '';
        this._payrollCategoriesModel.isDefault = '';
        this._payrollCategoriesModel.insurationdeducted = '';
        this._payrollCategoriesModel.pensiondeducted = '';
        this._payrollCategoriesModel.total = '';
        this._payrollCategoriesModel.inbuilt = '';
        let cnt = 0;
        if (this.checkPerctage) {
          if (typeof value.percentage != 'undefined') {
            if (value.percentage.trim() != '') {
              let percentageOf = this._percentageLists.join();
              this._payrollCategoriesModel.percentageOf = percentageOf;
              this._payrollCategoriesModel.type = true;
              cnt++;
            } else {
              this._percentageError = true;
              // check percentage null or not
            }
          } else {
            this._percentageError = true;
            // check percentage undefine or not
          }
        } else {
          if (typeof value.amount != 'undefined') {
            if (value.amount.trim() != '') {
              this._payrollCategoriesModel.amount = value.amount;
              this._payrollCategoriesModel.type = false;
              cnt++;
            } else {
              this._amountError = true;
              // check amount null or not
            }
          } else {
            this._amountError = true;
            // check amount undefine or not
          }
        }
        if ( cnt != 0 ) {
          if (!this.bindId) {
            this._payrollCategoriesService
              .Add(this._payrollCategoriesModel)
              .subscribe(
              data => {
                this.msgs = [];
                this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'Payroll Category has been added Successfully!!!' } );
                this._router.navigate(['/payroll/categories']);
              });
          } else {
            this._payrollCategoriesService
              .Update(this.bindId, this._payrollCategoriesModel)
              .subscribe(
              data => {
                this.msgs = [];
                this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'Payroll Category has been Updated Successfully!!!' } );
                this._router.navigate(['/payroll/categories']);
              });
          }
        }
      }
  }
}
