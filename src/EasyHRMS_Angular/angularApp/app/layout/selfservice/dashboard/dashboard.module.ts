import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SelfServiceDashboardService } from './../../../core/services/selfservice/selfservicedashboard.service'
@NgModule({
  imports: [
      CommonModule,
      DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
  providers: [SelfServiceDashboardService]
})
export class DashboardModule { }
