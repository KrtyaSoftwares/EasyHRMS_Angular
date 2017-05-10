import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralFormsService } from '../../../core/services/general/general-forms.service';
import { PagerService }        from '../../../core/services/common/pager.service';
import { EmployeeService } from '../../../core/services/employee/employee.service';
import { Message} from 'primeng/primeng';

@Component({
  selector: 'app-general-listing',
  templateUrl: './general-listing.component.html',
})
export class GeneralListingComponent implements OnInit {
  @Input('lookup') lookup: string;

  _results: any = {};
  _fieldLists: any[] = [];
  _selectedfields: any[] = [];
  _selectedfieldsHeading: any[] = [];
  _FilteredfieldsHeading: any[] = [];
  _Filteredfields: any[] = [];

  result_lists: any = {};
  _resultsData: any[] = [];
  _data: any[] = [];

  // pager object
    pager: any = {};

  // paged items
    pagedItems: any[];

    msgs: Message[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _generalFormsService: GeneralFormsService,
    private _employeeService: EmployeeService,
    private pagerService: PagerService
  ) { }
  ngOnInit() {
    this.getListingFields(this.lookup);
  }
  getListingFields(id: any) {
      this._generalFormsService
          .GetSingle(id)
          .subscribe(
          data => {
            this._results = data;
            this._fieldLists = this._results['formFieldlist'];
            for ( let i = 0; i < this._fieldLists.length; i++ ) {
              if (this._fieldLists[i]['isVisibleInList'] == true) {
                let index = this._fieldLists[i]['id'];
                if ( !this._selectedfields[i] ) {
                  this._selectedfields[i] = [];
                }
                this._selectedfieldsHeading.push(this._fieldLists[i]);
                this._selectedfields[i] = this._fieldLists[i]['fieldName'];
              }
            }
            this._FilteredfieldsHeading = this.stripUndefined(this._selectedfieldsHeading);
            this._Filteredfields = this.stripUndefined(this._selectedfields);
            this.getAllEmployee();
          });
  }

  getAllEmployee() {
       this._employeeService.GetAll()
        .subscribe(
        data => {
           this.result_lists = data;
           this._resultsData = this.result_lists['list'];
           for ( let i = 0; i < this._resultsData.length; i++ ) {
             if ( !this._data[i] ) {
                this._data[i] = [];
             }
             for ( let j = 0 ; j < this._Filteredfields.length; j++ ) {
               let field_name = this._Filteredfields[j].toLowerCase();
               let field_value = this._resultsData[i][field_name];
               let group = {
                 val: field_value,
                 id: this._resultsData[i]['employeeId'],
               };
               this._data[i].push(group);
             }
           }
           //initialize to page 1
           this.setPage(1);
        });
  }

  stripUndefined (arr: any[]) {
    return arr.reduce(function (result, item) {
      result.push( Array.isArray(item) && !item.length ? this.stripUndefined(item) : item );
      return result;
    }, []);
  }

  setPage(page: number) {
      if (page < 1 || page > this.pager.totalPages) {
          return;
      }
      // get pager object from service
      this.pager = this.pagerService.getPager(this._data.length, page);
      // get current page of items
      this.pagedItems = this._data.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  delete(id: number) {
     let url = 'EmployeeDetails/DeleteEmployeeByID';
     this._generalFormsService
          .Delete(id, url)
          .subscribe(
            data => {
            this.msgs.push ({severity: 'info', summary: 'Deleted', detail: 'Employee has been Deleted successfully!!!'});
            this.reset();
          });
  }

  reset() {
   this._selectedfieldsHeading = [];
   this._Filteredfields = [];
   this._data = [];
   this.getListingFields(this.lookup);
  }

  convertDate(inputFormat: any) {
        function pad(s: any) { return (s < 10) ? '0' + s : s; }
        let d = new Date(inputFormat);
        return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join('/');
    }
}