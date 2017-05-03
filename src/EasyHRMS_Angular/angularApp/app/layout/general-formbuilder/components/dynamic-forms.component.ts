import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GeneralFormsService } from '../../../core/services/general-forms.service';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
})
export class DynamicFormsComponent implements OnInit {
  form: FormGroup;
  @Input('tabnumber') tabnumber: number;
  @Input('data') data: any[] = [];
  @Output() childSubmitData: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _generalFormsService: GeneralFormsService
  ) {}
  ngOnInit() {
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
    this.childSubmitData.emit(this.form.value);
  }
}