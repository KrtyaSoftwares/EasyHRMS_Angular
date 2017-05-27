import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SalaryStructureService } from './../../../../core/services/salary-structure/salary-structure.service';
import { SalaryStructureModule } from './../../../../models/salary-structure/salary-structure.model';

import { PagerService } from '../../../../core/services/common/pager.service';
import {ConfirmationService} from 'primeng/primeng';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-salary-structure',
  templateUrl: './salary-structure.component.html',
})
export class SalaryStructureComponent implements OnInit {
  // list of Categories
  _allSalaryStructure: any = {};
  _salaryStructure: any= [];

  msgs: Message[] = [];

  // pager object
    pager: any = {};
  // paged items
    pagedItems: any[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _salaryStructureService: SalaryStructureService,
    private _confirmationService: ConfirmationService,
    private pagerService: PagerService,
  ) { }

  ngOnInit() {
    this.getAllSalaryStructure();
  }
  getAllSalaryStructure() {
    this._salaryStructureService
        .GetAll()
        .subscribe(
        data => {
           this._allSalaryStructure = data;
           this._salaryStructure = this._allSalaryStructure['list'];
           //initialize to page 1
           this.setPage(1);
        });
  }
  delete(id: number) {
    this._confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
            this._salaryStructureService
                .Delete(id)
                .subscribe(
                data => {
                  this.msgs = [];
                  this.msgs.push({severity: 'success', summary: 'success Message', detail: 'Salary Structurey has been deleted Successfully.!!'});
                  this.getAllSalaryStructure();
                });
            }
        });
  }
  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._salaryStructure.length, page);
      // get current page of items
      this.pagedItems = this._salaryStructure.slice(this.pager.startIndex, this.pager.endIndex + 1);

  }
}
