import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { MeetingcalendarComponent } from './meetingcalendar/meetingcalendar.component';
import { InterviewlistsComponent } from './interviewlists/interviewlists.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
    { path: '', component: ListsComponent },
    { path: 'applicants', component: ApplicantsComponent },
    { path: 'meetingcalendar', component: MeetingcalendarComponent },
    { path: 'interviewlists', component: InterviewlistsComponent },
    { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitmentRoutingModule { }
