import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';

import { EmployeeLeaveService } from './../../../../core/services/employee-leave/employee-leave.service';
import { EmployeeLeaveModel } from './../../../../models/employee-leave/employee-leave.model';
import { ListsService } from './../../../../core/services/lookup/lists-data';
import { PagerService } from '../../../../core/services/common/pager.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
})
export class LeaveComponent implements OnInit {
  _employeeLeaveModel = new EmployeeLeaveModel();

  // Department  ( Lookup Data )
  _lookupresults: any = {};
  _lookupData: any[];

  // list of Employee Leave
  _allEmployeeLeave: any = {};
  _employeeLeave: any= [];

   // pager object
    pager: any = {};
  // paged items
    pagedItems: any[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _employeeLeaveService: EmployeeLeaveService,
    private pagerService: PagerService,
    private _lookupService: ListsService,
  ) { }

  ngOnInit() {
    this.getAllEmployeeLeave();
  }
  getAllEmployeeLeave() {
    this._employeeLeaveService
        .GetAll()
        .subscribe(
        data => {
          this._allEmployeeLeave = data;
          this._employeeLeave = this._allEmployeeLeave['list'];
          //initialize to page 1
           this.setPage(1);
        });
  }
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._employeeLeave.length, page);
      // get current page of items
      this.pagedItems = this._employeeLeave.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
