import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyprofileComponent } from './components/myprofile.component';
//import { }


const routes: Routes = [
    { path: '', component: MyprofileComponent },
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
export class MyProfileRoutingModule { }