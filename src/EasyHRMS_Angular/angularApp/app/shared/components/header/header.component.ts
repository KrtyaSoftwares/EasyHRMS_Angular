import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from './../../../core/services/common/common-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    showSelfServiceLink: any;

    constructor(public router: Router, private commondataservice: CommonDataService) {

    }
    ngOnInit() {
        if (this.router.url.includes('/selfservice')) {
            this.showSelfServiceLink = false;
        }
        if (!this.router.url.includes('/selfservice')) {
            this.showSelfServiceLink = true;
        }
    }
    showEmployeeLinkV(con: any) {
        this.showSelfServiceLink = con;
        this.commondataservice.showSidebarlinkevnt.emit({ showSelfServiceSidebar: con});

    }
    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
}
