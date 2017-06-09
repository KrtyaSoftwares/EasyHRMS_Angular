import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';

import { SalaryStructureService } from './../../../../../core/services/salary-structure/salary-structure.service';
import { SalaryStructureModel } from './../../../../../models/salary-structure/salary-structure.model';

import { PayrollCategoriesService } from './../../../../../core/services/payroll-categories/payroll-categories.service';

import { Message, SelectItem } from 'primeng/primeng';
import { ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  _salaryStructureModel = new SalaryStructureModel();
  form: FormGroup;
  bindId: number;
  // get all Department
  _allDepartment: any = {};
  _departments: any[] = [];

  _needToSave: any = {};

  // get all PayRoll Category
  _allCategory: any = {};
  _categories: any[] = [];
  _categoriesBasedOnID: any[] = [];
  _selectedPayrollCat: any[] = [];
  _payrollCategoryIds: any[] = [];
  msgs: Message[] = [];
  ErrorMsgs: Message[] = [];
  removeErrormsgs: Message[] = [];
  submitted: boolean;
  //getSalaryStructureDetails
  _objSalaryStructure: any = {};
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _salaryStructureService: SalaryStructureService,
    private _payrollCategoriesService: PayrollCategoriesService,
    private _confirmationService: ConfirmationService,
  ) {
    this.form = fb.group({
        'name': [this._salaryStructureModel.name, Validators.required],
        'description': [this._salaryStructureModel.description],
        'isActive': [this._salaryStructureModel.isActive],
        'department': [this._salaryStructureModel.department, Validators.required],
    });
  }
  ngOnInit() {
    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });
    this.getAllDepartment();
    this.getAllCategories();
  }
  getAllDepartment() {
    this._salaryStructureService
        .GetAllDepartmentData(this.bindId)
        .subscribe(
        data => {
          this._allDepartment = data;
          if (this._allDepartment['list']) {
            this._allDepartment['list'].forEach((element: any) => {
              this._departments.push({label: element.value, value: element.rowId});
            });
          }
        });
  }
  getAllCategories() {
    this._payrollCategoriesService
        .GetAll()
        .subscribe(
        data => {
          this._allCategory = data;
          this._categories = this._allCategory['list'];
          // Generate PayRoll Category Array Based on ID.
          this._categories.forEach((element: any) => {
            let index = element.id;
            if (!this._categoriesBasedOnID[index]) {
               this._categoriesBasedOnID[index] = [];
            }
            this._categoriesBasedOnID[index].push(element);
          });
          if (this.bindId) {
            this.getSalaryStructureDetailsBasedonID(this.bindId);
          }
        });
  }
  getSalaryStructureDetailsBasedonID(id: number) {
    this._salaryStructureService
      .GetSingle(id)
      .subscribe(
      data => {
        this._objSalaryStructure = data;
        this._salaryStructureModel = this._objSalaryStructure['objSalaryStructure'];
        this._salaryStructureModel['department'] = this._objSalaryStructure['departmentIds'];
        // Fill Both Array Based on Database Value
        if (this._objSalaryStructure['payrollCategoryIds']) {
          this._categories.forEach(element => {
            this._objSalaryStructure['payrollCategoryIds'].forEach((ele: any) => {
              if (element.id == ele) {
                this._payrollCategoryIds.push(this._categoriesBasedOnID[element.id][0]);
                this._selectedPayrollCat.push(element.id);
                let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
                isChecked.checked = true;
              }
            });
          }); // end
          // (Enable / Disable Delete button ) and (check / uncheck checkbox)
          this._objSalaryStructure['payrollCategoryIds'].forEach((ele: any) => {
            let status = this.checkExistsIdinPerctnageOf(ele);
            if (status == 0) {
              // remove disable from checkbox
              let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
              isChecked.removeAttribute('disabled');
              this._payrollCategoryIds.forEach(element => {
                if (element.id == ele) {
                  element.inherit = false;
                }
              });
            } else {
              let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
              isChecked.setAttribute('disabled', 'disabled');
              this._payrollCategoryIds.forEach(element => {
                if (element.id == ele) {
                  element.inherit = true;
                }
              });
            }
          });
        }
      });
  }
  checkExistsIdinPerctnageOf(id: number) {
    let cnt = 0;
    this._payrollCategoryIds.forEach(element => {
      if (element.percentageOf) {
        let percentageOf = element.percentageOf.split(',');
        percentageOf.forEach((ele: any) => {
          if (ele == id) {
            cnt++;
          }
        });
      }
    });
    return cnt;
  }
  onDepartmentChange(evt: any) {
    this._needToSave['departmentIds'] = evt.value;
  }
  categoryChange(id: number, evt: any) {
    let target = evt.target;
    // Checke Checkbox Checked or not.
    if (target.checked) {
      if (this._categoriesBasedOnID[id][0]['percentageOf']) {
        let percentageOf = this._categoriesBasedOnID[id][0]['percentageOf'].split(',');
        // Checked Checkbox depended Ids
        percentageOf.forEach((ele: any) => {
          let status = this.checkCategoryExist(ele);
          if (status == 0) {
            this._selectedPayrollCat.push(ele);
            let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
            isChecked.checked = true;
          }
          // checkbox disable
          let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
          isChecked.setAttribute('disabled', 'disabled');
        });
      }
      this._selectedPayrollCat.push(id);
    } else {
      if (this._categoriesBasedOnID[id][0]['percentageOf']) {
        let percentageOf = this._categoriesBasedOnID[id][0]['percentageOf'].split(',');
        // Checked Checkbox depended Ids
        percentageOf.forEach((ele: any) => {
          let status = this.checkCategoryDependency(id, ele);
          if ( status == 0 ) {
            // { Change Logic if parent remove still child stay checked }
             let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
             //isChecked.checked = false;
             isChecked.checked = true;
             isChecked.removeAttribute('disabled');
             // { Change Logic if parent remove still child stay checked }
             //this.removeCategoryfromSeletectd(ele, this._selectedPayrollCat);
          }
        });
      }
      this.removeCategoryfromSeletectd(id, this._selectedPayrollCat);
    }
  }
  checkCategoryExist(id: number) {
    let cnt = 0;
    this._selectedPayrollCat.forEach(element => {
      if (element == id) {
        cnt++;
      }
    });
    return cnt;
  }
  checkCategoryDependency(skipid: number, percentageOf: number) {
    let cnt = 0;
    this._selectedPayrollCat.forEach(element => {
      if (element != skipid) {
        if (this._categoriesBasedOnID[element][0]['percentageOf']) {
          let perOf = this._categoriesBasedOnID[element][0]['percentageOf'].split(',');
          perOf.forEach((e: any) => {
            if (e == percentageOf) {
              cnt++;
            }
          });
        }
      }
    });
    return cnt;
  }
  removeCategoryfromSeletectd(id: number, array: any) {
    for (let i in array) {
      if (array[i] == id) {
        array.splice(i, 1);
      }
    }
  }
  removeCategory(id: number, array: any) {
    for (let i in array) {
      if (array[i].id == id) {
        array.splice(i, 1);
      }
    }
  }
  addPayType() {
    this._payrollCategoryIds = [];
    this._selectedPayrollCat.forEach(element => {
      let isChecked = <HTMLInputElement> document.getElementById('cat_' + element);
      if (isChecked.disabled) {
        this._categoriesBasedOnID[element][0]['inherit'] = true;
      } else {
        this._categoriesBasedOnID[element][0]['inherit'] = false;
      }
      this._payrollCategoryIds.push(this._categoriesBasedOnID[element][0]);
    });
    document.getElementById('closePayType').click();
  }
  removeConfirmation(id: number) {
    if (this._categoriesBasedOnID[id][0]['percentageOf']) {
      let percentageOf = this._categoriesBasedOnID[id][0]['percentageOf'].split(',');
      // Checked Checkbox depended Ids
      let status: any;
      let cnt = 0;
      percentageOf.forEach((ele: any) => {
        status = this.checkCategoryDependency(id, ele);
        if (status != 0) {
          cnt++;
        }
      });
      if (cnt == 0) {
       if (percentageOf) {
          percentageOf.forEach((ele: any) => {
            // remove from array { Change Logic if parent remove still child stay checked }
            //this.removeCategoryfromSeletectd(ele, this._selectedPayrollCat);
            // remove from grid { Change Logic if parent remove still child stay checked }
            //this.removeCategory(ele, this._payrollCategoryIds);
            // uncheck checkbox
            let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
            isChecked.removeAttribute('disabled');
            //isChecked.checked = false;
            // { Change Logic if parent remove still child stay checked }
            this._payrollCategoryIds.forEach(element => {
              if (element.id == ele) {
                element.inherit = false;
              }
            });
          });
       }
        // remove from array
        this.removeCategoryfromSeletectd(id, this._selectedPayrollCat);
        // remove from grid
        this.removeCategory(id, this._payrollCategoryIds);
        // uncheck checkbox
        let isChecked = <HTMLInputElement> document.getElementById('cat_' + id);
        isChecked.checked = false;
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'Record deleted'});
      } else {
        // display Error Message
        this.removeErrormsgs = [];
        this.removeErrormsgs.push({severity: 'error', summary: 'Error Message', detail: 'You Cannot delete. dependecncy issue'});
        // After 2 second remove Error Message
        setTimeout(function() {
          document.getElementById('closeErrormsgs').click();
        }, 2000);
      }
    } else {
      // remove from array and uncheck checkbox
      this.removeCategoryfromSeletectd(id, this._selectedPayrollCat);
      // remove from grid
      this.removeCategory(id, this._payrollCategoryIds);
      // uncheck checkbox
      let isChecked = <HTMLInputElement> document.getElementById('cat_' + id);
      isChecked.checked = false;
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'Record deleted'});
    }
  }
  removeCat(id: number) {
    this._confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'fa fa-trash',
        accept: () => {
          this.removeConfirmation(id);
        }
    });
  }
  errorClear() {
    this.removeErrormsgs = [];
  }
  clear() {
    this.ErrorMsgs = [];
  }
  onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
          return false;
      } else {
        this._needToSave.name = value.name;
        this._needToSave.description = '';
        this._needToSave.isActive = value.isActive;
        this._needToSave.departmentIds = value.department;
        // Checking PayCategory Empty or not
        if (this._selectedPayrollCat.length == 0) {
          this.ErrorMsgs = [];
          this.ErrorMsgs.push({severity: 'error', summary: 'Error Message', detail: 'Please choose atleast one PayType Category'});
          setTimeout(function() {
            document.getElementById('clear').click();
          }, 2000);
        } else {
          this._needToSave['payrollCategoryIds'] = [];
          this._needToSave['payrollCategoryIds'] = this._selectedPayrollCat;
            if (!this.bindId) {
              this._salaryStructureService
                .Add(this._needToSave)
                .subscribe(
                data => {
                  this.msgs = [];
                  this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'Salary Structure has been added Successfully!!!' } );
                  this._router.navigate(['/payroll/salary-structure']);
              });
            } else {
              this._salaryStructureService
                .Update(this.bindId, this._needToSave)
                .subscribe(
                data => {
                  this.msgs = [];
                  this.msgs.push ( { severity: 'info', summary: 'Update Message', detail: 'Salary Structure has been Updated Successfully!!!' } );
                  this._router.navigate(['/payroll/salary-structure']);
              });
            }
        }
      }
  }
}