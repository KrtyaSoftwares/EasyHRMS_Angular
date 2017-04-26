import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormsService } from '../../../core/services/form-defination.service';
import { Forms } from '../../../models/forms';
import { Data } from '../../../models/data';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html'
})
export class FormbuilderComponent implements OnInit {
  result: any = {};
  createArray: any[] = [];
  final_result: any[] = [];
  public forms: Forms[] = [];
  form: FormGroup;
  contactForm: FormGroup;
  record: any = {};
  singleRecord: any[] = [];
  public record_not_exists = false;
  public submitted: boolean;
  @Input('lookup') lookup: number;
  @Input('rowId') rowId: number;
  constructor(
        private fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private formsService: FormsService
    ) {
    }
  ngOnInit() {
    this.getTableDefination(this.lookup);
  }
 getTableData(lookup: any, id: number) {
    this.formsService
        .GetTableData(lookup, id)
        .subscribe(
            data => {
            this.record = data;
            this.singleRecord = this.record['list'];
            this.array_merge();
            });
 }
 onSubmit(value: any, isValid: boolean) {
        this.submitted = true;
        if (isValid == false) {
            return false;
        } else {
            this.createArray = [];
            let rowId;
            let id;
            let cnt = 0;
            for (let key in this.form.value) {
                if (this.rowId) {
                    rowId = this.singleRecord[0]['rowId'];
                    id = this.singleRecord[cnt]['id'];
                }
                let value = this.form.value[key];
                let tempObj = {
                    'lookupId': this.lookup,
                    'fieldName': key,
                    'rowId': this.rowId ? rowId : 0,
                    'id': this.rowId ? id : 0,
                    'value': value
                }
                this.createArray.push(tempObj);
                cnt++;
            }
            if (this.rowId) {
                this.updateTableData (this.lookup, this.createArray);
            } else {
                this.addTableData (this.lookup, this.createArray);
            }
        }
}
addTableData(id: any, data: any) {
    this.formsService
            .Add(id, data)
            .subscribe(
             data => {
                this._router.navigate(['/lookup/lists/' + this.lookup]);
             });
 }
 updateTableData(id: any, data: any) {
    this.formsService
            .Update(id, data)
            .subscribe(
             data => {
                this._router.navigate(['/lookup/lists/' + this.lookup]);
             });
 }
 getTableDefination(id: any) {
    this.formsService.GetSingle(id)
        .subscribe(
        data => {
            this.result = data;
            this.final_result = this.result['list'];
            if ( this.final_result.length == 0 ) {
                this.record_not_exists = true;
            } else {
                this.record_not_exists = false;
            }
            if (this.rowId) {
                this.getTableData(this.lookup, this.rowId);
            }
            let group: any = {};
            let i = 0;
            this.final_result.forEach((form: any) => {
                this.final_result[i]['custom_value'] = '';
                if (form.isRequire) {
                    group[form.fieldName] = ['', Validators.required];
                } else {
                    group[form.fieldName] = [];
                }
                i++;
            });
            this.form = this.fb.group(group);
        });
  }
  array_merge() {
    for (let i in this.final_result) {
        for (let j in this.singleRecord) {
            if (this.singleRecord[j].fieldName == this.final_result[i].fieldName) {
                this.final_result[i]['custom_value'] = this.singleRecord[j]['value'];
            }
        }
    }
 }
}