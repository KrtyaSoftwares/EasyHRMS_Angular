import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TemplatesService } from './../../../../core/services/templates/templates.service';
import { Templates } from './../../../../models/templates/templates.model';

import { PagerService } from '../../../../core/services/common/pager.service';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-mail-alerts',
  templateUrl: './mail-alerts.component.html',
})
export class MailAlertsComponent implements OnInit {

  _results: any = {};
  _list: any[] = [];
  msgs: Message[] = [];
  // pager object
    pager: any = {};
  // paged items
    pagedItems: any[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _templatesService: TemplatesService,
    private pagerService: PagerService
  ) { }

  ngOnInit() {
    this.getAllTemplates();
  }
  getAllTemplates() {
    this._templatesService
          .GetAll()
          .subscribe(
          data => {
            this._results = data;
            this._list = this._results['list'];
            //initialize to page 1
            this.setPage(1);
          });
  }
  delete(id: number) {
    this._templatesService
          .Delete(id)
          .subscribe(
          data => {
            this.msgs = [];
            this.msgs.push ( { severity: 'warn', summary: 'Insert Message', detail: 'Email Template has been Deleted Successfully!!!' } );
            this.getAllTemplates();
          });
  }
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._list.length, page);
      // get current page of items
      this.pagedItems = this._list.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
