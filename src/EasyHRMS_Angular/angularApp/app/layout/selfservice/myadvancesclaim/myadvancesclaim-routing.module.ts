import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyadvancesclaimComponent } from './components/myadvancesclaim.component';



const routes: Routes = [
    { path: '', component: MyadvancesclaimComponent },
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
export class MyAdvancesClaimRoutingModule { }