import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MailAlertService } from './../../../../core/services/mail-alert/mail-alert.service';
import { MailAlert } from './../../../../models/mail-alert/mail-alert.model';

import { FormsService } from './../../../../core/services/forms/forms.service';

import { PagerService } from '../../../../core/services/common/pager.service';
import {Message} from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';

@Component({
  selector: 'app-mail-alerts',
  templateUrl: './mail-alerts.component.html',
})
export class MailAlertsComponent implements OnInit {

  _results: any = {};
  _list: any[] = [];
  msgs: Message[] = [];
  _formResults: any = {};
  // pager object
    pager: any = {};
  // paged items
    pagedItems: any[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _mailAlertService: MailAlertService,
    private _formsService: FormsService,
    private pagerService: PagerService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getAllTemplates();
  }
  getAllTemplates() {
    this._mailAlertService
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

    this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this._mailAlertService
                  .Delete(id)
                  .subscribe(
                  data => {
                    this.msgs = [];
                    this.msgs.push ( { severity: 'warn', summary: 'Insert Message', detail: 'Email Template has been Deleted Successfully!!!' } );
                    this.getAllTemplates();
                  });
            }
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
      //console.log(this.pagedItems);
  }
}
