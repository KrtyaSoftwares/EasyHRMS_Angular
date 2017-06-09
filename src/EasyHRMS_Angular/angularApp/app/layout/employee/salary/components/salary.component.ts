import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';

import { EmployeeSalaryService } from './../../../../core/services/employee-salary/employee-salary.service';
import { EmployeeSalaryModel } from './../../../../models/employee-salary/employee-salary.model';

import { PayrollCategoriesService } from './../../../../core/services/payroll-categories/payroll-categories.service';

import { ListsService } from './../../../../core/services/lookup/lists-data';
import { PagerService } from '../../../../core/services/common/pager.service';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
})
export class SalaryComponent implements OnInit {
  _employeeSalaryModel = new EmployeeSalaryModel();
  _selectedEmpDept: string;
  _selectedEmpSal: string;
  // PayrollCategory
  _allPayrollCategory: any = {};
  _payrollCategories: any[];
  // list of Categories
  _allEmployeeSalary: any = {};
  _employeeSalary: any= [];
  // pager object
    pager: any = {};
  // paged items
  pagedItems: any[];
  gross_salary:  number;

  _needToSave: any[] = [];
  msgs: Message[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _employeeSalaryService: EmployeeSalaryService,
    private _lookupService: ListsService,
    private pagerService: PagerService,
    private _payrollCategoriesService: PayrollCategoriesService
  ) { }

  ngOnInit() {
    this.getAllEmployeeSalary();
  }
  getAllEmployeeSalary() {
    this._employeeSalaryService
        .GetAll()
        .subscribe(
        data => {
          this._allEmployeeSalary = data;
          this._employeeSalary = this._allEmployeeSalary['list'];
          //initialize to page 1
           this.setPage(1);
        });
  }
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._employeeSalary.length, page);
      // get current page of items
      this.pagedItems = this._employeeSalary.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  editSalary(emp: any) {
      let empId = emp.employeeId;
      this._selectedEmpDept = emp.departmentName;
      this._employeeSalaryService
          .GetSalaryStructure(empId)
          .subscribe(
          data => {
            this._allPayrollCategory = data;
            this._payrollCategories = this._allPayrollCategory['list'];
            this._selectedEmpSal = this._payrollCategories[0]['salaryStructureName'];
            this.gross_salary = 0;
            //console.log(this._payrollCategories);
            this._payrollCategories.forEach(element => {
              this.gross_salary += element.amount;
            });
            if (document.getElementById('editSalarymodal')) {
              document.getElementById('editSalarymodal').click();
            }
          })
  }
  mychange(evt: any) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if ( charCode == 46 && evt.srcElement.value.split('.').length > 1) {
        return false;
    }
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57) ) {
        return false;
    } else {
      return true;
    }
  }
  eventEmitBlur(evt: any) {
    this.gross_salary = 0;
    this._payrollCategories.forEach(element => {
      let index = <HTMLInputElement> document.getElementById('amt_' + element.payrollCategoryId);
      let perc_index = <HTMLInputElement> document.getElementById('per_' + element.payrollCategoryId);
      if (perc_index.value != '') {
        let perOf_index = <HTMLInputElement> document.getElementById('perOf_' + element.payrollCategoryId);
        let array = perOf_index.value.split(',');
        let perc_sum: number;
        let result:  number;
        perc_sum = 0;
        result = 0;
        array.forEach(ele => {
          let temp =  <HTMLInputElement> document.getElementById('amt_' + ele);
           perc_sum += parseInt(temp.value);
        });
        let percentage = parseFloat(perc_index.value);
        result = (percentage / 100) * perc_sum;
        this.gross_salary += result;
        index.value = result.toString();
      } else {
        this.gross_salary += parseInt(index.value);
      }
    });
  }
  Submit() {
    this._needToSave = [];
    this._payrollCategories.forEach(element => {
      let index = <HTMLInputElement> document.getElementById('amt_' + element.payrollCategoryId);
      let grp = {
        id: element.id,
        employeeId: element.employeeId,
        departmentId: element.departmentId,
        salaryStructureId: element.salaryStructureId,
        payrollCategoryId: element.payrollCategoryId,
        amount: index.value,
        grossSalary: this.gross_salary,
        isDeduction: element.isDeduction,
        isBasedOnAttandance: element.isBasedOnAttandance,
        createdDate: element.createdDate
      }
      this._needToSave.push(grp);
    });
    console.log(this._needToSave);
    this._employeeSalaryService
        .Add(this._needToSave)
        .subscribe(
        data => {
          this.msgs = [];
          this.msgs.push({severity: 'Success', summary: 'Success Message', detail: 'Salary has been update successfully!!!'});
          document.getElementById('close').click();
        });

  }
}
