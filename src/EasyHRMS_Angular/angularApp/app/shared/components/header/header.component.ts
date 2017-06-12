import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from './../../../core/services/common/common-data.service';
import { UserLoginService } from './../../../core/services/user-login/userlogin.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    showSelfServiceLink: any;
    mainHeader: string;
    userName: string;
    roleList: string[];
    isAdmin = false;

    constructor(public router: Router,
        private commondataservice: CommonDataService,
        private userLoginService: UserLoginService) {

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
        if (JSON.parse(localStorage.getItem('currentUser')) != null) {
            this.userName = JSON.parse(localStorage.getItem('currentUser')).username;
            this.roleList = JSON.parse(localStorage.getItem('currentUser')).roleList;
        }
        if (this.router.url.includes('/selfservice')) {
            if (this.roleList.indexOf('Admin') > -1) {
                this.isAdmin = true;
            } else {
                this.isAdmin = false;
            }
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
    logout() {
        this.userLoginService.Logout().subscribe(
            data => {
                if (data == true) {
                    this.router.navigate(['/login']);
                }
            });
    }
}
