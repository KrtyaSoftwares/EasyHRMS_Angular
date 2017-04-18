import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentRoutingModule } from './recruitment-routing.module';
import { PageHeaderModule } from './../../shared';

import { ListsComponent } from './lists/lists.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { MeetingcalendarComponent } from './meetingcalendar/meetingcalendar.component';
import { InterviewlistsComponent } from './interviewlists/interviewlists.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  imports: [
    CommonModule,
    RecruitmentRoutingModule,
    PageHeaderModule
  ],
  declarations: [
    ListsComponent,
    ApplicantsComponent,
    MeetingcalendarComponent,
    InterviewlistsComponent,
    ReportsComponent
  ]
})
export class RecruitmentModule { }