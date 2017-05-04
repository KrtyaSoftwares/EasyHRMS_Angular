import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyleavesComponent } from './components/myleaves.component';
import { ListComponent } from './components/list/list.component';



const routes: Routes = [
    //{ path: '', component: MyleavesComponent },
    { path: '', component: ListComponent },
    //{ path: 'holidaysdetails', component: HolidayDetailsComponent },
    //{ path: 'lists/:lookup', component: LookupListsComponent },
    //{ path: 'form/:lookup', component: FormComponent },
    //{ path: 'form/:lookup/:rowId', component: FormComponent },
    //{ path: 'delete/:lookup/:rowId', component: DeleteComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyLeavesRoutingModule { }