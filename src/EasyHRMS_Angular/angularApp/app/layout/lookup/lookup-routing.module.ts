import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookupComponent } from './components/lookup.component';

import { LookupListsComponent } from './components/list/lookup-lists.component';
import { FormComponent } from './components/form/form.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
    { path: '', component: LookupComponent },
    { path: 'lists/:lookup', component: LookupListsComponent },
    { path: 'form/:lookup', component: FormComponent },
    { path: 'form/:lookup/:rowId', component: FormComponent },
    { path: 'delete/:lookup/:rowId', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookupRoutingModule { }
