import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomationComponent } from './components/automation.component';
const routes: Routes = [
    {
        path: '', component: AutomationComponent,
        children: [
            { path: 'workflows', loadChildren: './workflows/workflows.module#WorkflowsModule' },
            { path: 'mail-alerts', loadChildren: './mail-alerts/mail-alerts.module#MailAlertsModule' },
            { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
            { path: 'checklists', loadChildren: './checklists/checklists.module#ChecklistsModule' },
            { path: 'field-updates', loadChildren: './field-updates/field-updates.module#FieldUpdatesModule' },
            { path: 'webhooks', loadChildren: './webhooks/webhooks.module#WebhooksModule' },
            { path: 'custom-functions', loadChildren: './custom-functions/custom-functions.module#CustomFunctionsModule' },
            { path: 'scheduler', loadChildren: './scheduler/scheduler.module#SchedulerModule' },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomationRoutingModule { }
