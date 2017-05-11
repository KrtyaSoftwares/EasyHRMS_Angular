import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesComponent } from './components/templates.component';

const routes: Routes = [
    {
        path: '', component: TemplatesComponent,
        children: [
            { path: 'email-templates', loadChildren: './email-template/email-template.module#EmailTemplateModule' },
            { path: 'record-templates', loadChildren: './record-template/record-template.module#RecordTemplateModule' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TemplatseRoutingModule { }
