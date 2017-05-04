import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyattendanceComponent } from './components/myattendance.component';



const routes: Routes = [
    { path: '', component: MyattendanceComponent },
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
export class MyAttendanceRoutingModule { }