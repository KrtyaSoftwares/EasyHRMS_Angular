import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldUpdatesComponent } from './components/field-updates.component'

const routes: Routes = [
  { path: '', component: FieldUpdatesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldUpdatesRoutingModule { }
