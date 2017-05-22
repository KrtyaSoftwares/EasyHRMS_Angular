import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout.component';
import { HeaderComponent, SidebarComponent, SidebarselfserviceComponent } from '../shared';

//import { EditComponent } from './employee/edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,

    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        SidebarselfserviceComponent,
        //EditComponent
    ]
})
export class LayoutModule { }
