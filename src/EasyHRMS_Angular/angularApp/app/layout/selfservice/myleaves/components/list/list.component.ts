import { Component, OnInit } from '@angular/core';

import {
    ReactiveFormsModule,
    FormGroup,
    FormArray,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Message } from 'primeng/primeng';

import { MyLeaveService } from '../../../../../core/services/selfservice/myleaves.service';
import { LookupDataService } from '../../../../../core/services/common/lookup-data.service';
import { EmployeeLeaveModel } from '../../../../../models/employee/employeeleave.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  //styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    employeeId = 1;
    lookupleavetype = 9;
    _employeeLeaveList: any = [];
    _employeeLeaveListGroupByMonth: any = [];
    _employeeLeaveDetailList: any = [];
    _leaveTypesList: any = [];
    _leaveTypesListTemp: any = [];
    _leaveTypesListByRowId: any = [];
    msgs: Message[] = [];

    //leaveStatusList = [{ name: "InProgress", value: "InProgress" }, { name: "Approve", value: "Approve" }, { name: "Deny", value: "Deny"}];

    employeeLeaveForm: FormGroup;
    _EmployeeLeaveModel = new EmployeeLeaveModel();
    public submitted: boolean;

    constructor(private _leaveService: MyLeaveService,
        private _lookupDataService: LookupDataService,
        fb: FormBuilder) {
        this.employeeLeaveForm = fb.group({
            //'employeeLeaveId': [],
            //'employeeId': [],
            'fromDate': [this._EmployeeLeaveModel.fromDate, Validators.required],
            'toDate': [this._EmployeeLeaveModel.toDate, Validators.required],
            'leaveReason': [this._EmployeeLeaveModel.toDate, Validators.required],
            'leaveTypeId': [this._EmployeeLeaveModel.leaveTypeId],
            //'status': [this._EmployeeLeaveModel.status, Validators.required],
            //'createDate': [],
            'isHalfDay': [this._EmployeeLeaveModel.isHalfDay]
        });
    }
  ngOnInit() {
      //this.GetAllEmployeeLeave();
      this.GetAllEmployeeLeaveByEmployeeId(this.employeeId);
      this.GetAllLeaveTypes();
  }
  GetAllLeaveTypes() {
      let that = this;
      this._lookupDataService
          .GetLookUpData(this.lookupleavetype)
          .subscribe(
          data => {
              //console.log(data.list);
              this._leaveTypesListTemp = data.list;
              this._leaveTypesListByRowId = this.groupBy(this._leaveTypesListTemp, function (item: any) {
                  return item.rowId;
              });
              this._leaveTypesListByRowId.forEach(function (item: any, index: any) {
                  let obj: any = {}
                  obj.key = item[0].rowId;
                  item.forEach(function (item2: any, index: any) {
                      if (item2.fieldName == 'LeaveTypeTitle') {
                          obj.name = item2.value;
                      }
                  })
                  that._leaveTypesList.push(obj);
              });
          });
  }

  GetAllEmployeeLeaveByEmployeeId(id: number) {
      this._leaveService
          .GetEmployeeLeaveByEmployeeId(id)
          .subscribe(
          data => {
              console.log(data.list);
              this._employeeLeaveList = data.list;
              this._employeeLeaveListGroupByMonth = this.groupBy(this._employeeLeaveList, function (item: any) {
                  return new Date(item.fromDate).getMonth();
                  // return [item.sensrid._id];
              });
              //console.log(this._employeeLeaveListGroupByMonth);
              //this._employeeLeaveListGroupByMonth.forEach(function (item: any, index: any) {
              //console.log(item);
              //})
          });
  }

  GetAllEmployeeLeave() {
      this._leaveService
          .GetAllEmployeeLeave()
          .subscribe(
          data => {
              //console.log(data.list);
              this._employeeLeaveList = data.list;
              this._employeeLeaveListGroupByMonth = this.groupBy(this._employeeLeaveList, function (item: any) {
                  return new Date(item.fromDate).getMonth();
                  // return [item.sensrid._id];
              });
              //console.log(this._employeeLeaveListGroupByMonth);
              //this._employeeLeaveListGroupByMonth.forEach(function (item: any, index: any) {
                  //console.log(item);
              //})
          });
  }
  onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
          this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
          return false;
      }
      this._EmployeeLeaveModel.employeeId = 1;
      this._EmployeeLeaveModel.status = 'InProgress';
      //this._EmployeeLeaveModel.leaveTypeId = 1;
      //this._EmployeeLeaveModel.fromDate.setHours(0, 0, 0, 0).toString(yyyy-mm-dd hh:mm:ss);
      this._EmployeeLeaveModel.fromDate.setHours(0, 0, 0, 0);
      this._EmployeeLeaveModel.toDate.setHours(0, 0, 0, 0);
      //this._EmployeeLeaveModel.fromDate.toDateString();
      //this._EmployeeLeaveModel.toDate.toDateString();
     
      this._EmployeeLeaveModel.toDate.toDateString();
      console.log(this._EmployeeLeaveModel.toDate.toDateString());
      console.log(this._EmployeeLeaveModel);
      this._leaveService.AddEmployeeLeave(this._EmployeeLeaveModel)
          .subscribe(
          data => {
              this._EmployeeLeaveModel = new EmployeeLeaveModel();
              this.GetAllEmployeeLeave();
              this.submitted = false;
              document.getElementById('closeModal').click();
              //this.msgs_success = [];
              if (isValid) {
                  this.msgs.push({ severity: 'info', summary: 'Saved.', detail: 'Info has been Saved Successfully.' });
              } else {
                this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
              }
         }, response => {
              if (response.status == 404) {
                  console.log('execution failed');
                  return false;
              }
          });
  }

  initModel() {
      this._EmployeeLeaveModel = new EmployeeLeaveModel();
  }

  DeleteLeave(id: number) {
      this._leaveService
          .DeleteEmployeeLeave(id)
          .subscribe(
          data => {
              this.GetAllEmployeeLeave();
          })
  }

  groupBy(array: any, f: any) {
      let groups: any = {};
      array.forEach(function (o: any) {
          let group = JSON.stringify(f(o));
          groups[group] = groups[group] || [];
          groups[group].push(o);
      });

      return Object.keys(groups).map(function (group) {
          return groups[group];
      })
  }

}
