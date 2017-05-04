import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonDataService } from './../../core/services/common/common-data.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
    showSidebar = true;
    constructor(public router: Router, private commondataservice: CommonDataService) {
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard']);
        }

        if (this.router.url.includes('/selfservice') ) {
            this.showSidebar = false;
            //this.router.navigate(['/dashboard']);
        }

        this.commondataservice.showSidebarlinkevnt.subscribe((obj: any) => {
            //console.log(obj.showSelfServiceSidebar);
            this.showSidebar = obj.showSelfServiceSidebar;
            //if (this.showSidebar == false) {
            //    this.showSidebar = true;
            //}else {
            //    this.showSidebar = false;
            //}
        })
    }
}