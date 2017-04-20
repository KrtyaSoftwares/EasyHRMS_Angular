import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import { QuestionModels } from '../../../../models/question-models';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  cols: any[];
  form: FormGroup;
  payLoad = '';
  constructor() {
     this.cols = [
            {key: 'lastName', text: 'Last name', required: true, order: 2, 'controlType': 'textbox'},
            {key: 'firstName', text: 'First name', required: true, order: 1, 'controlType': 'textbox'},
            {key: 'emailAddress', text: 'Email', required: false, type: 'email', order: 1, 'controlType': 'textbox'},
            {key: 'country', text: 'Country',
            'options': [
              {key: 'usa', value: 'USA'},
              {key: 'germany', value: 'Germany'},
              {key: 'canada', value: 'Canada'},
              {key: 'australia', value: 'Australia'}
              ],
            order: 1, 'controlType': 'dropdown'}
        ];
        this.cols.sort ( ( a, b ) => a.order - b.order );
  }
  ngOnInit() {
        this.form = this.toGroup();
    }
   onSubmit() {
     this.payLoad = JSON.stringify(this.form.value);
    }
    toGroup() {
        let group: any = {};

        this.cols.forEach((question) => {
            if (question.required) {
                group[question.key] = new FormControl('', Validators.required);
            } else {
                group[question.key] = new FormControl('');
            }
        });

        return new FormGroup(group);
    }
}