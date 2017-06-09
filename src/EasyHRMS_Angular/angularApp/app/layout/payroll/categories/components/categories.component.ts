import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PayrollCategoriesService } from './../../../../core/services/payroll-categories/payroll-categories.service';
import { PayrollCategories } from './../../../../models/payroll-categories/payroll-categories.model';
import { PagerService } from '../../../../core/services/common/pager.service';
import {ConfirmationService} from 'primeng/primeng';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {
  // list of Categories
  _allCategories: any = {};
  _categories: any= [];
  msgs: Message[] = [];
  Errormsgs: Message[] = [];

  // pager object
    pager: any = {};
  // paged items
    pagedItems: any[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _payrollCategoriesService: PayrollCategoriesService,
    private _confirmationService: ConfirmationService,
    private pagerService: PagerService,
  ) { }

  ngOnInit() {
    this.getAllCategories();
  }
  getAllCategories() {
    this._payrollCategoriesService
        .GetAll()
        .subscribe(
        data => {
          this._allCategories = data;
          this._categories = this._allCategories['list'];
          this._categories.forEach((element: any) => {
            if ( element.period == 1 ) {
              element.customPeriod = 'Monthly';
            } else if ( element.period == 2 ) {
              element.customPeriod = 'Yearly';
            } else if ( element.period == 3 ) {
              element.customPeriod = 'Daily';
            } else if ( element.period == 4 ) {
              element.customPeriod = 'ShiftWise';
            }
          });
          //initialize to page 1
          this.setPage(1);
        });
  }
  delete(id: number) {
    this._confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
            let cnt = 0;
            this._categories.forEach((element: any) => {
              if (element.percentage != null) {
                let dependedCategory = element.percentageOf.split(',');
                dependedCategory.forEach((ele: any) => {
                  if ( ele == id ) {
                    cnt++;
                  }
                });
              }
            });
            if (cnt == 0) {
                this._payrollCategoriesService
                    .Delete(id)
                    .subscribe(
                    data => {
                      this.msgs = [];
                      this.msgs.push({severity: 'success', summary: 'success Message', detail: 'PayRoll Category has been deleted Successfully.!!'});
                      this.getAllCategories();
                  });
            } else {
                this.Errormsgs = [];
                this.Errormsgs.push( { severity: 'error', summary: 'Error Message', detail: 'You cannot delete. first you need to remove all dependency' } );
                setTimeout(function() {
                  document.getElementById('errorMsgClose').click();
                }, 3000);
            }
            }
        });
  }
  clear() {
      this.Errormsgs = [];
  }
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._categories.length, page);
      // get current page of items
      this.pagedItems = this._categories.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }
}
