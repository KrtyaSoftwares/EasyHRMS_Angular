import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../../core/services/employee.service';
import { EmployeeModel } from '../../../models/employeee.model';

import { GeneralFormsService } from '../../../core/services/general-forms.service';
import { GeneralDataModel } from '../../../models/general-data.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {
  result_lists: any = {};
  _resultsData: any[] = [];
  _fieldLists: any[] = [];
  _results: any = {};
  _selectedfieldsHeading: any[] = [];
  _selectedfields: any[] = [];
  _FilteredfieldsHeading: any[] = [];
  _Filteredfields: any[] = [];
  _data: any[] = [];
  lookup = 1;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _generalFormsService: GeneralFormsService,
    private _employeeService: EmployeeService
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
        });
  }
  stripUndefined (arr: any[]) {
    return arr.reduce(function (result, item) {
      result.push( Array.isArray(item) && !item.length ? this.stripUndefined(item) : item );
      return result;
    }, []);
  }
}
