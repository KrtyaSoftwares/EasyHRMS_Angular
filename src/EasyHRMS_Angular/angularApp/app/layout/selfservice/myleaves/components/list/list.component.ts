import { Component, OnInit } from '@angular/core';

import { MyLeaveService } from '../../../../../core/services/selfservice/myleaves.service';
import { EmployeeLeaveModel } from '../../../../../models/employeeleave.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  //styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    _employeeLeaveList: any = [];
    _employeeLeaveListGroupByMonth: any = [];
    _employeeLeaveDetailList: any = [];
    constructor(private _leaveService: MyLeaveService) {

    }
  ngOnInit() {
      this.GetAllEmployeeLeave();


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
  getTotalLeave(leavelist: any) {
      let leave = 0;
      leavelist.forEach(function (item: any, index: any) {
          //console.log(item);
          if (item.fromDate != null && item.toDate != null) {
              if (item.fromDate < item.toDate) {
                  leave += (new Date(item.toDate).getDate() - new Date(item.fromDate).getDate());
                  leave += 1;
              }else if (item.fromDate == item.toDate) {
                  leave += 1;
              }
          }
      })
      return leave;
  }

  DeleteLeave(id: number) {
      this._leaveService
          .DeleteEmployeeLeave(id)
          .subscribe(
          data => {
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
