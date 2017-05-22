
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GeneralFormsService } from '../../../../core/services/general/general-forms.service';

@Component({
    selector: 'app-myprofile',
    templateUrl: './myprofile.component.html'
})
export class MyprofileComponent implements OnInit {
    generalFormId: number;
    Id: number;
    allResults: any = {};
    _tabLists: any[] = [];
    _fieldLists: any[] = [];
    _formDetails: any[] = [];
    _tabs: any[] = [];
    _fields: any[] = [];
    _mixArray: any[] = [];
    final_array: any[] = [];
    formId: number;
    _formDataObj: any = {};
    _formData: any[] = [];
    _db_submit: any = {};
    url: string;
    constructor(
        private fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _generalFormsService: GeneralFormsService
    ) { }

    ngOnInit() {
        this._route.params.subscribe(params => {
            if (params['formid'] != null && params['formid'] != undefined && params['id'] != null && params['id'] != undefined) {
                console.log('from params');
                this.generalFormId = params['formid'];
                this.Id = params['id'];
            } else {
                console.log('from default');
                this.generalFormId = 1;
                this.Id = 1;
            }
        });
        this.getFormData(this.Id);
    }

    getFormData(id: number) {
        this._generalFormsService
            .GetFormData(id)
            .subscribe(
            data => {
                this._formDataObj = data;
                this._db_submit = this._formDataObj['objEmployee'];
                this._formData.push(this._formDataObj['objEmployee']);
                this.getFormDefination(this.generalFormId);
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
                for (let i = 0; i < this._tabLists.length; i++) {
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
                        if (tab_catId == fields_catId) {
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
                                lookupId: this._fieldLists[j]['lookupId'],
                                value: value,
                            }
                            group['custom_obj'].push(nested_group);
                        }
                    }
                    this._mixArray[index].push(group);
                }
                this.final_array = this.stripUndefined(this._mixArray);
                setTimeout(function () {
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

    stripUndefined(arr: any[]) {
        return arr.reduce(function (result, item) {
            result.push(Array.isArray(item) && !item.length ? this.stripUndefined(item) : item);
            return result;
        }, []);
    }
    getSubmittedData(submit_data: any) {
        for (let key in this._db_submit) {
            for (let submitKey in submit_data) {
                if (key == submitKey.toLowerCase()) {
                    this._db_submit[key] = submit_data[submitKey];
                }
            }
        }
        if (this.generalFormId == 1) {
            this.url = 'EmployeeDetails/UpdateEmployee/';
        }
        this._generalFormsService
            .Update(this.Id, this._db_submit, this.url)
            .subscribe(
            data => {
                if (this.generalFormId == 1) {
                    console.log(data);
                    //this._router.navigate(['/employee']);
                }
            });
    }
}



//import { Component, OnInit } from '@angular/core';
//@Component({
//    selector: 'app-myprofile',
//    templateUrl: './myprofile.component.html'
//})
//export class MyprofileComponent implements OnInit {
//    constructor() { }
//    ngOnInit() {
//    }
//}