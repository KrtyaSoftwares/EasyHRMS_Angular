import { Component, OnInit } from '@angular/core';
import { SelfServiceDashboardService } from './../../../../core/services/selfservice/selfservicedashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    CurrentMonthHolidayCount: number;
    CurrentYearHolidayCount: number;
    NextHolidayDate: Date;
    constructor(private selfServiceDashboardService: SelfServiceDashboardService) {

    }

    ngOnInit() {
        this.GetHoliDayDetail();
  }

  public GetHoliDayDetail() {
      this.selfServiceDashboardService
          .GetHoliDayDetails()
          .subscribe(
          data => {
              //console.log(data);
              this.CurrentMonthHolidayCount = data.currentMonthHolidayCount;
              this.CurrentYearHolidayCount = data.currentYearHolidayCount;
              this.NextHolidayDate = data.nextHolidayDate;
          }, (err: any) => {
              if (err === 'Unauthorized') {
                  //this.router.navigateByUrl('/login');
                  //this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
              }
          });
  }

}
