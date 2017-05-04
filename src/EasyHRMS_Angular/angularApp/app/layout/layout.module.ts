import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout.component';
import { HeaderComponent, SidebarComponent, SidebarselfserviceComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,

    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        SidebarselfserviceComponent
    ]
})
export class LayoutModule { }
