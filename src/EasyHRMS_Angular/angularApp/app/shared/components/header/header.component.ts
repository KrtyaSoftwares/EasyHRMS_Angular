import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from './../../../core/services/common/common-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    showSelfServiceLink: any;
    mainHeader: string;
    userName: string;

    constructor(public router: Router, private commondataservice: CommonDataService) {

    }
    ngOnInit() {
        if (this.router.url.includes('/selfservice')) {
            this.showSelfServiceLink = false;
            this.mainHeader = 'Self Service';

        }
        if (!this.router.url.includes('/selfservice')) {
            this.showSelfServiceLink = true;
            this.mainHeader = 'Control Panel';
        }
        console.log(JSON.parse(sessionStorage.getItem('currentUser')));
        if (JSON.parse(sessionStorage.getItem('currentUser')) != null) {
            this.userName = JSON.parse(sessionStorage.getItem('currentUser')).username;
        }
        console.log(this.userName);
    }
    showEmployeeLinkV(con: any) {
        this.showSelfServiceLink = con;
        this.commondataservice.showSidebarlinkevnt.emit({ showSelfServiceSidebar: con });
        if (con == true) {
            this.mainHeader = 'Control Panel';
        }else {
            this.mainHeader = 'Self Service';
        }

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
