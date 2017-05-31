import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';

import { LeaveStructureService } from './../../../../../core/services/leave-structure/leave-structure.service';
import { LeaveStructureModel } from './../../../../../models/leave-structure/leave-structure.model';

import { ListsService } from './../../../../../core/services/lookup/lists-data';

import { Message, SelectItem } from 'primeng/primeng';
import { ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  _leaveStructureModel = new LeaveStructureModel();
  // get all Department
  _allDepartment: any = {};
  _departments: any[] = [];
  selectedDepartments: string[] = [];
  // Lookup Data ( Leave Type )
  _lookupresults: any = {};
  _lookupData: any[];
  _sortLookupData: any[];
  _leaveTypes: any[] = [];
  _leaveTypeLists: any[] = [];
  // LeaveType holding value
  _leaveTypeCategoryIds: any[] = [];
  _selectedleaveTypeCat: any[] = [];
  _needToSave: any = {};

  msgs: Message[] = [];
  ErrorMsgs: Message[] = [];
  bindId: number;
  form: FormGroup;
  submitted: boolean;

  //getLeaveStructureDetails
  _objleaveStructure: any = {};

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _leaveStructureService: LeaveStructureService,
    private _lookupService: ListsService,
    private _confirmationService: ConfirmationService,
  ) {
      this.form = fb.group({
          'leaveStructureName': [this._leaveStructureModel.leaveStructureName, Validators.required],
          'maxLeaveCount': [this._leaveStructureModel.maxLeaveCount, Validators.required],
          'isCarryForward': [this._leaveStructureModel.isCarryForward],
          'status': [this._leaveStructureModel.status],
          'isAllowLeave': [this._leaveStructureModel.isAllowLeave],
          'isDefault': [this._leaveStructureModel.isDefault],
          'department': [this._leaveStructureModel.department, Validators.required],
      });
   }

  ngOnInit() {
    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });
    this.getAllLeaveType();
    this.getAllDepartment();
  }
  getAllDepartment() {
    this._leaveStructureService
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
  getAllLeaveType() {
      // Leave Lookup ID
      let lookupId = 9;
      this._lookupService
          .GetAll(lookupId)
          .subscribe(
          data => {
            this._lookupresults = data;
            this._lookupData = this._lookupresults['lookupData'];
            // Sorting Data Based On ID
            this._sortLookupData = this._lookupData.sort(function (a, b) {
              return a.id - b.id;
            });
            // Row Wise Filtering
            this._leaveTypes = this.groupBy(this._sortLookupData, 'rowId');
            let i = 0;
            //Convert into Array
            this._leaveTypes.forEach(element => {
              if (!this._leaveTypeLists[i]) {
                this._leaveTypeLists[i] = [];
              }
              element.forEach((ele: any) => {
                if (!this._leaveTypeLists[i][ele.fieldName]) {
                  this._leaveTypeLists[i][ele.fieldName] = ele.value;
                }
                if (!this._leaveTypeLists[i]['rowId']) {
                  this._leaveTypeLists[i]['rowId'] = ele.rowId;
                }
              });
            i++;
            });
            if (this.bindId) {
              this.getLeaveStructureDetailsBasedonID(this.bindId);
            }
        })
  }
  groupBy(collection: any, property: any) {
    let i = 0, val, index,
        values = [], result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1) {
          result[index].push(collection[i]);
        } else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
  }
  getLeaveStructureDetailsBasedonID(id: number) {
      this._leaveStructureService
          .GetSingle(id)
          .subscribe(
          data => {
            this._objleaveStructure = data;
            this._leaveStructureModel = this._objleaveStructure['objLeaveStructure'];
            this._leaveStructureModel['department'] = this._objleaveStructure['departmentIds'];
            this._leaveTypeLists.forEach((element: any) => {
              this._objleaveStructure['leaveTypeIds'].forEach((ele: any) => {
                if (element.rowId == ele) {
                  let isChecked = <HTMLInputElement> document.getElementById('cat_' + ele);
                  if (isChecked != null) {
                    isChecked.checked = true;
                  }
                  this._leaveTypeCategoryIds.push(ele);
                }
              });
            });
            this.addLeaveType('nomsg');
          })
  }
  addLeaveType(action: any) {
    this._needToSave['leaveTypeIds'] = this._leaveTypeCategoryIds;
    this._selectedleaveTypeCat = [];

    this._leaveTypeLists.forEach((element: any) => {
        this._leaveTypeCategoryIds.forEach((ele: any) => {
          if (element.rowId == ele) {
            this._selectedleaveTypeCat.push(element);
          }
        });
    });
    if (action == 'message') {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Update', detail: 'LeaveType Updated'});
        if (document.getElementById('closeLeaveType')) {
          document.getElementById('closeLeaveType').click();
        }
    }
  }
  onChange(evt: any) {
    this._needToSave['departmentIds'] = evt.value;
  }
  handleChange(id: number, evt: any) {
    let target = evt.target;
    if (target.checked) {
      this._leaveTypeCategoryIds.push(id);
    } else {
      this.remove(id, this._leaveTypeCategoryIds, '');
    }
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
      this.addLeaveType('nomsg');
    }
  }
  removeEvent(id: number) {
    this._confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.remove(id, this._leaveTypeCategoryIds, 'addPayType');
                this.msgs = [];
                this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'Record deleted'});
            }
        });
  }
  onSubmit(value: any, isValid: boolean) {
        this.submitted = true;
        if (isValid == false) {
           return false;
        } else {
          this._needToSave.leaveStructureName = value.leaveStructureName;
          this._needToSave.maxLeaveCount = value.maxLeaveCount;
          this._needToSave.isCarryForward = value.isCarryForward;
          this._needToSave.status = value.status;
          this._needToSave.isAllowLeave = value.isAllowLeave;
          this._needToSave.isDefault = value.isDefault;
          this._needToSave.departmentIds = value.department;
          if (this._needToSave['leaveTypeIds']) {
              if (this._needToSave['leaveTypeIds'].length == 0 ) {
                  this.ErrorMsgs = [];
                  this.ErrorMsgs.push({severity: 'error', summary: 'Error Message', detail: 'Please choose atleast one PayType Category'});
                  setTimeout(function() {
                    document.getElementById('clear').click();
                  }, 2000);
              } else {
                  if (!this.bindId) {
                    this._leaveStructureService
                        .Add(this._needToSave)
                        .subscribe(
                        data => {
                          this.msgs = [];
                          this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'Leave Structure has been added Successfully!!!' } );
                          this._router.navigate(['/leaveandattendance/leave-structure']);
                      });
                  } else {
                    this._leaveStructureService
                        .Update(this.bindId, this._needToSave)
                        .subscribe(
                        data => {
                          this.msgs = [];
                          this.msgs.push ( { severity: 'info', summary: 'Update Message', detail: 'Leave Structure has been Updated Successfully!!!' } );
                          this._router.navigate(['/leaveandattendance/leave-structure']);
                      });
                  }
              }
          } else {
            this.ErrorMsgs = [];
            this.ErrorMsgs.push({severity: 'error', summary: 'Error Message', detail: 'Please choose atleast one PayType Category'});
            setTimeout(function() {
              document.getElementById('clear').click();
            }, 2000);
          }
        }
  }
  clear() {
    this.ErrorMsgs = [];
  }
}