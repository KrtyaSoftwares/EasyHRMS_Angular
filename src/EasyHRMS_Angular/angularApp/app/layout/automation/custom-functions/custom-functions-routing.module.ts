import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomFunctionsComponent } from './components/custom-functions.component';

const routes: Routes = [
  { path: '', component: CustomFunctionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomFunctionsRoutingModule { }
