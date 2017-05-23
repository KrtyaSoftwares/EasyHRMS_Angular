import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccessControlComponent } from './components/user-access-control.component';

const routes: Routes = [
    {
        path: '', component: UserAccessControlComponent,
        children: [
            { path: 'permissions', loadChildren: './permissions/permissions.module#PermissionsModule' },
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccessControlRoutingModule { }
