import { Component, OnInit } from '@angular/core';
import { SelfServiceDashboardService } from './../../../../core/services/selfservice/selfservicedashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private selfServiceDashboardService: SelfServiceDashboardService) {

    }

    ngOnInit() {
        //this.GetHoliDayDetail();
  }

  public GetHoliDayDetail() {
      //this.selfServiceDashboardService.GetHoliDayDetails
          //.GetHoliDayDetails
          //.
          //data => {
          //    console.log(data.list);
          //    this._employeeLeaveList = data.list;
          //    this._employeeLeaveListGroupByMonth = this.groupBy(this._employeeLeaveList, function (item: any) {
          //        return new Date(item.fromDate).getMonth();
          //        // return [item.sensrid._id];
          //    });
          //    //console.log(this._employeeLeaveListGroupByMonth);
          //    //this._employeeLeaveListGroupByMonth.forEach(function (item: any, index: any) {
          //    //console.log(item);
          //    //})
          //}, (err:any) => {
          //    if (err === 'Unauthorized') {
          //        //this.router.navigateByUrl('/login');
          //        //this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
          //    }
          //});
  }

}
