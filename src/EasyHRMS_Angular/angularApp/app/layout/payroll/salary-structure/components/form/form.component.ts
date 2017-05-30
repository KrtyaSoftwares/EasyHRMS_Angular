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
  //form: FormGroup;
  submitted: boolean;
  msgs: Message[] = [];
  ErrorMsgs: Message[] = [];
  bindId: number;
  // get all Department
  _allDepartment: any = {};
  _departments: any[] = [];
  selectedDepartments: string[] = [];

  // get all PayRoll Category
  _allCategory: any = {};
  _categories: any[] = [];

  _payrollCategoryIds: any[] = [];
  _selectedPayrollCat: any[] = [];
  _needToSave: any = {};

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
    this.getAllCategories();
    this.getAllDepartment();
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
          this._categories.forEach((element: any) => {
            element.checked = false;
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
            this._categories.forEach((element: any) => {
              this._objSalaryStructure['payrollCategoryIds'].forEach((ele: any) => {
                if (element.id == ele) {
                  let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
                  if (isChecked != null) {
                    isChecked.checked = true;
                  }
                  this._payrollCategoryIds.push(ele);
                }
              });
            });
            this.addPayType('nomsg');
          })
  }
  onSubmit(value: any, isValid: boolean) {
        this.submitted = true;
        if (isValid == false) {
           return false;
        } else {
          this._needToSave.name = value.name;
          this._needToSave.description = '';
          this._needToSave.isActive = value.isActive;
          if (this._needToSave['payrollCategoryIds'].length == 0 ) {
              this.ErrorMsgs = [];
              this.ErrorMsgs.push({severity: 'error', summary: 'Error Message', detail: 'Please choose atleast one PayType Category'});
              setTimeout(function() {
                document.getElementById('clear').click();
              }, 2000);
          } else {
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
  clear() {
        this.ErrorMsgs = [];
    }
  onChange(evt: any) {
    this._needToSave['departmentIds'] = evt.value;
  }
  handleChange(id: number, evt: any) {
    let target = evt.target;
    if (target.checked) {
      this._payrollCategoryIds.push(id);
    } else {
      this.remove(id, this._payrollCategoryIds, '');
    }
  }
  removeEvent(id: number) {
    this._confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.remove(id, this._payrollCategoryIds, 'addPayType');
                this.msgs = [];
                this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'Record deleted'});
            }
        });
  }
  remove(id: number, array: any, action: any) {
    for (let i in array) {
      if (array[i] == id) {
        array.splice(i, 1);
        if ( action == 'addPayType') {
          let isChecked = <HTMLInputElement> document.getElementById('cat_' + id);
          if (isChecked != null) {
            isChecked.checked = false;
          }
        }
      }
    }
    if (action == 'addPayType') {
      this.addPayType('nomsg');
    }
  }
  addPayType(action: any) {
    this._needToSave['payrollCategoryIds'] = this._payrollCategoryIds;
    this._selectedPayrollCat = [];
    this._categories.forEach((element: any) => {
        this._payrollCategoryIds.forEach((ele: any) => {
          if (element.id == ele) {
            this._selectedPayrollCat.push(element);
          }
        });
    });
    if (action == 'message') {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Update', detail: 'Paytype Updated'});
        document.getElementById('closePayType').click();
    }
  }
}