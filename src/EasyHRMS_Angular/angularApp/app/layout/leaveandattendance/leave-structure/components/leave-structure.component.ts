import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LeaveStructureService } from './../../../../core/services/leave-structure/leave-structure.service';
import { LeaveStructureModel } from './../../../../models/leave-structure/leave-structure.model';

import { PagerService } from '../../../../core/services/common/pager.service';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-leave-structure',
  templateUrl: './leave-structure.component.html',
})
export class LeaveStructureComponent implements OnInit {

  // pager object
    pager: any = {};
  // paged items
    pagedItems: any[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _leaveStructureService: LeaveStructureService,
    private pagerService: PagerService,
  ) { }

  ngOnInit() {
    this.getLeaves();
  }
  getLeaves() {
    this._leaveStructureService
        .GetAll()
        .subscribe(
        data => {
          console.log(data);
        });
  }
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      //this.pager = this.pagerService.getPager(this._list.length, page);
      // get current page of items
      //this.pagedItems = this._list.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
