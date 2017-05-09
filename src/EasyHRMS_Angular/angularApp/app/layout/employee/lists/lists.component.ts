import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { EmployeeService } from '../../../core/services/employee.service';
import { EmployeeModel } from '../../../models/employeee.model';

import { GeneralFormsService } from '../../../core/services/general-forms.service';
// import { PagerService }        from '../../../core/services/common/pager.service';
import { GeneralDataModel } from '../../../models/general-data.model';
import { Message} from 'primeng/primeng';
import { BasicValidators } from '../../../shared';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {
  _generalDataModel = new GeneralDataModel();
  //result_lists: any = {};
  //_resultsData: any[] = [];
  //_fieldLists: any[] = [];
  // _results: any = {};
//  _selectedfieldsHeading: any[] = [];
//  _selectedfields: any[] = [];
//  _FilteredfieldsHeading: any[] = [];
  //_Filteredfields: any[] = [];
  //_data: any[] = [];
  lookup = 1;
  form: FormGroup;
  public submitted: boolean;
  msgs: Message[] = [];

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _generalFormsService: GeneralFormsService,
    //private _employeeService: EmployeeService,
    //private pagerService: PagerService
  ) {
    this.form = fb.group({
        'f2': [this._generalDataModel.f2, Validators.required],
        'f3': [this._generalDataModel.f3, Validators.required],
        'f4': [this._generalDataModel.f4, [Validators.required, BasicValidators.email]],
    });
  }

  ngOnInit() {
    //this.getListingFields(this.lookup);
  }
  // getListingFields(id: any) {
  //     this._generalFormsService
  //         .GetSingle(id)
  //         .subscribe(
  //         data => {
  //           this._results = data;
  //           this._fieldLists = this._results['formFieldlist'];
  //           for ( let i = 0; i < this._fieldLists.length; i++ ) {
  //             if (this._fieldLists[i]['isVisibleInList'] == true) {
  //               let index = this._fieldLists[i]['id'];
  //               if ( !this._selectedfields[i] ) {
  //                 this._selectedfields[i] = [];
  //               }
  //               this._selectedfieldsHeading.push(this._fieldLists[i]);
  //               this._selectedfields[i] = this._fieldLists[i]['fieldName'];
  //             }
  //           }
  //           this._FilteredfieldsHeading = this.stripUndefined(this._selectedfieldsHeading);
  //           this._Filteredfields = this.stripUndefined(this._selectedfields);
  //           this.getAllEmployee();
  //         });
  // }
  // getAllEmployee() {
  //      this._employeeService.GetAll()
  //       .subscribe(
  //       data => {
  //          this.result_lists = data;
  //          this._resultsData = this.result_lists['list'];
  //          for ( let i = 0; i < this._resultsData.length; i++ ) {
  //            if ( !this._data[i] ) {
  //               this._data[i] = [];
  //            }
  //            for ( let j = 0 ; j < this._Filteredfields.length; j++ ) {
  //              let field_name = this._Filteredfields[j].toLowerCase();
  //              let field_value = this._resultsData[i][field_name];
  //              let group = {
  //                val: field_value,
  //                id: this._resultsData[i]['employeeId'],
  //              };
  //              this._data[i].push(group);
  //            }
  //          }
  //          //initialize to page 1
  //          this.setPage(1);
  //       });
  // }
  // stripUndefined (arr: any[]) {
  //   return arr.reduce(function (result, item) {
  //     result.push( Array.isArray(item) && !item.length ? this.stripUndefined(item) : item );
  //     return result;
  //   }, []);
  // }

   onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
          return false;
      } else {
        this._generalDataModel.f2 = value.f2;
        this._generalDataModel.f3 = value.f3;
        this._generalDataModel.f4 = value.f4;
        let url = 'EmployeeDetails/CreateEmployee';
        this._generalFormsService
          .Add(this._generalDataModel, url)
          .subscribe(
          data => {
            this.msgs.push ({severity: 'info', summary: 'Updated', detail: 'Information has been Added successfully!!!'});
            document.getElementById('close_model').click();
          });
      }
  }
}