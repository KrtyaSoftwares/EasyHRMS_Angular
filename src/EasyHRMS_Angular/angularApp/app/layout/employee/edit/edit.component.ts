import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PersonalformComponent } from './personalform/personalform.component';
import { ContactformComponent } from './contactform/contactform.component';
import { BankformComponent } from './bankform/bankform.component';
import { ExperienceformComponent } from './experienceform/experienceform.component';
import { SalaryformComponent } from './salaryform/salaryform.component';
import { LeaveformComponent } from './leaveform/leaveform.component';

import { GeneralFormsService } from '../../../core/services/general-forms.service';
import { GeneralDataModel } from '../../../models/general-data.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
})
export class EditComponent implements OnInit {
  _generalDataModel = new GeneralDataModel();
  generalFormId = 1;
  allResults: any = {};
  _tabLists: any [] = [];
  _fieldLists: any [] = [];
  _formDetails: any[] = [];
  _tabs: any[] = [];
  _fields: any[] = [];
  _mixArray: any[] = [];
  final_array: any[] = [];
  formId: number;
  _formDataObj: any = {};
  _formData: any []= [];
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _generalFormsService: GeneralFormsService
  ) { }
  ngOnInit() {
    this.getFormDefination(this.generalFormId);
    this.getFormData(this.generalFormId);
  }
  getFormData(id: number) {
    this._generalFormsService
          .GetFormData(id)
          .subscribe(
          data => {
            this._formDataObj = data;
            this._generalDataModel = this._formDataObj['objEmployee'];
            this._formData.push(this._formDataObj['objEmployee']);
          });
  }
  getFormDefination(id: number) {
      this._generalFormsService
          .GetSingle(id)
          .subscribe(
          data => {
            this.allResults = data;
            this._formDetails = this.allResults['objForm'];
            this._tabLists = this.allResults['formTablist'];
            this._fieldLists = this.allResults['formFieldlist'];
            let group: any = {};
            let k = 0;
            for ( let i = 0; i < this._tabLists.length; i++ ) {
              let index = this._tabLists[i]['tabOrder'];
              let tab_catId = this._tabLists[i]['id'];
              if (!this._mixArray[index]) {
                this._mixArray[index] = [];
              }
              group = {
                tabName: this._tabLists[i]['tabName'],
                id: tab_catId,
                category_name: this._tabLists[i]['category'],
                custom_obj: []
              }
              let nested_group: any = {};
              for (let j = 0; j < this._fieldLists.length; j++) {
                let fields_catId = this._fieldLists[j]['formTabId'];
                if ( tab_catId == fields_catId ) {
                  let val_index = this._fieldLists[j]['fieldName'].toLowerCase();
                  let value = '';
                  if (this._formData[0]) {
                    value = this._formData[0][val_index];
                  }
                  nested_group = {
                    defaultValue: this._fieldLists[j]['defaultValue'],
                    displayName: this._fieldLists[j]['displayName'],
                    fieldName: this._fieldLists[j]['fieldName'],
                    fieldOrder: this._fieldLists[j]['fieldOrder'],
                    fieldType: this._fieldLists[j]['fieldType'],
                    formId: this._fieldLists[j]['formId'],
                    formTabId: this._fieldLists[j]['formTabId'],
                    id: this._fieldLists[j]['id'],
                    isActive: this._fieldLists[j]['isActive'],
                    isRequire: this._fieldLists[j]['isRequire'],
                    isVisibleInList: this._fieldLists[j]['isVisibleInList'],
                    listOrder: this._fieldLists[j]['listOrder'],
                    optionValue: this._fieldLists[j]['optionValue'],
                    placeholder: this._fieldLists[j]['placeholder'],
                    validator: this._fieldLists[j]['validator'],
                    value: value,
                  }
                  group['custom_obj'].push(nested_group);
                }
              }
              this._mixArray[index].push(group);
            }
            this.final_array = this.stripUndefined(this._mixArray);
            console.log(this.final_array);
            setTimeout(function() {
              document.getElementById('maintab_1').click();
            }, 500);
      });
   }
   groupBy(collection: any, property: any) {
    let i = 0, val, index,
        values = [], result = [];
    for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1) {
          result[index].push(collection[i]);
        } else {
            values.push(val);
            result.push([collection[i]]);
        }
    }
    return result;
  }
  stripUndefined (arr: any[]) {
    return arr.reduce(function (result, item) {
      result.push( Array.isArray(item) && !item.length ? this.stripUndefined(item) : item );
      return result;
    }, []);
  }
}