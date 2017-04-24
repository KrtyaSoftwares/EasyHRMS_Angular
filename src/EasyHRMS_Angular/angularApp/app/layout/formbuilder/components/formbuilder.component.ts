import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { FormsService } from '../../../core/services/form-defination.service';
import { Forms } from '../../../models/forms';
import { Data } from '../../../models/data';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html'
})
export class FormbuilderComponent implements OnInit {
  final_result: any[];
  result: any = {};
  createArray: any[] = [];
  public forms: Forms[] = [];
  form: FormGroup;
  payLoad = '';
  public record_not_exists = false;
  @Input('lookup') lookup: string;
  constructor(private formsService: FormsService) {
  }
  ngOnInit() {
    this.getTableDefination(this.lookup);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    for (let key in this.form.value) {
          let value = this.form.value[key];
          let tempObj = {
             'lookupId': this.lookup,
             'fieldName': key,
             'value': value
         }
        this.createArray.push(tempObj);
     }
     this.addTableData (this.lookup, this.createArray);
  }
 addTableData(id: any, data: any) {
    this.formsService
            .Add(id, data)
            .subscribe(
             data => {
                console.log(data);
             });
 }
 updateTableData(id: any, data: any) {
    this.formsService
            .Update(id, data)
            .subscribe(
             data => {
                console.log(data);
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
            let group: any = {};
            this.final_result.forEach((form: any) => {
                if (form.isRequire) {
                    group[form.fieldName] = new FormControl('', Validators.required);
                } else {
                    group[form.fieldName] = new FormControl('');
                }
            });
            this.form = new FormGroup(group);
    });
  }
}