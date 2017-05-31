import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LeaveStructureService } from './../../../../core/services/leave-structure/leave-structure.service';
import { PagerService } from '../../../../core/services/common/pager.service';

import {Message, ConfirmationService} from 'primeng/primeng';


@Component({
  selector: 'app-leave-structure',
  templateUrl: './leave-structure.component.html',
})
export class LeaveStructureComponent implements OnInit {

  // list of Leave Structure
  _allLeaveStructure: any = {};
  _leaveStructure: any= [];
   msgs: Message[] = [];
  // pager object
    pager: any = {};
  // paged items
    pagedItems: any[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _leaveStructureService: LeaveStructureService,
    private pagerService: PagerService,
    private _confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.getLeaves();
  }
  getLeaves() {
    this._leaveStructureService
        .GetAll()
        .subscribe(
        data => {
          this._allLeaveStructure = data;
          this._leaveStructure = this._allLeaveStructure['list'];
          //initialize to page 1
           this.setPage(1);
        });
  }
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._leaveStructure.length, page);
      // get current page of items
      this.pagedItems = this._leaveStructure.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  delete(id: number) {
     this._confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this._leaveStructureService
                    .Delete(id)
                    .subscribe(
                    data => {
                      this.getLeaves();
                      this.msgs = [];
                      this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'Record deleted'});
                    });
            }
        });
  }
}
