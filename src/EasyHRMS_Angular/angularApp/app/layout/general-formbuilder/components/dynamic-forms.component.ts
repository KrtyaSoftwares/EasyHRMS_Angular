import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GeneralFormsService } from '../../../core/services/general-forms.service';
import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
})
export class DynamicFormsComponent implements OnInit {

  form: FormGroup;
  @Input('tabnumber') tabnumber: number;
  @Input('data') data: any[] = [];
  @Output() childSubmitData: EventEmitter<any> = new EventEmitter<any>();
  public submitted: boolean;
  msgs: Message[] = [];
  value: Date;
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _generalFormsService: GeneralFormsService
  ) {}
  ngOnInit() {
    console.log(this.data);
    this.makeForms();
  }
  makeForms() {
     let group: any = {};
     this.data.forEach((frm: any) => {
        frm['custom_obj'].forEach((element: any) => {
          if (element.fieldType == 'Dropdown' || element.fieldType == 'Bit') {
            let optionVal = JSON.parse(element.optionValue);
            element.optionValue = optionVal;
          }
          if ( element.isRequire == true) {
              group[element.fieldName] = new FormControl('', Validators.required);
          } else {
              group[element.fieldName] = new FormControl('');
          }
        });
    });
    this.form = this.fb.group(group);
  }
  onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
          this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
          return false;
      } else {
        this.childSubmitData.emit(this.form.value);
        this.msgs.push ({severity: 'info', summary: 'Updated', detail: 'Information has been updated successfully!!!'});
      }
  }
}