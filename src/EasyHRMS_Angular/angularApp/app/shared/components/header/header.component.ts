import { Component, OnInit } from '@angular/core';
import { CustomHeadingComponent } from './custom-heading/custom-heading.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    constructor() { }
    ngOnInit() { }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
}
