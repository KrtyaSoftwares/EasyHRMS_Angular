import { Component, OnInit } from '@angular/core';

import {
    ReactiveFormsModule,
    FormGroup,
    FormArray,
    FormBuilder,
    Validators
} from '@angular/forms';
import { Message } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';

import { MyadvancesclaimService } from '../../../../core/services/selfservice/myadvancesclaim.service';


@Component({
  selector: 'app-myadvancesclaim',
  templateUrl: './myadvancesclaim.component.html',
  //styleUrls: ['./myadvancesclaim.component.css']
})
export class MyadvancesclaimComponent implements OnInit {

    constructor(private _myadvancesclaimService: MyadvancesclaimService) { }

  ngOnInit() {
  }
  GetAlladvancesclaim() {
      let that = this;
      //this._myadvancesclaimService.GetAllEmployeeLeave..(
      //    data => {
      //        //console.log(data.list);
      //        //this._leaveTypesListTemp = data.list;
      //        //this._leaveTypesListByRowId = this.groupBy(this._leaveTypesListTemp, function (item: any) {
      //        //    return item.rowId;
      //        //});
      //        //this._leaveTypesListByRowId.forEach(function (item: any, index: any) {
      //        //    let obj: any = {}
      //        //    obj.key = item[0].rowId;
      //        //    item.forEach(function (item2: any, index: any) {
      //        //        if (item2.fieldName == 'LeaveTypeTitle') {
      //        //            obj.name = item2.value;
      //        //        }
      //        //    })
      //        //    that._leaveTypesList.push(obj);
      //        //});
      //    });
  }
}
