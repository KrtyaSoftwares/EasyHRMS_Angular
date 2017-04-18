import { Component, OnInit } from '@angular/core';


import { ActiveemployeeComponent } from './activeemployee/activeemployee.component';
import { WorkanniversaryComponent } from './workanniversary/workanniversary.component';
import { BirthdayComponent } from './birthday/birthday.component'


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
