import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GeneralFormsService } from '../../../core/services/general/general-forms.service';
import { LookupDataService } from '../../../core/services/common/lookup-data.service';
import { Message} from 'primeng/primeng';
import { BasicValidators } from '../../../shared';
@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
})
export class DynamicFormsComponent implements OnInit {
  form: FormGroup;
  @Input('tabnumber') tabnumber: number;
  @Input('generalFormId') generalFormId: number;
  @Input('data') data: any[] = [];
  @Output() childSubmitData: EventEmitter<any> = new EventEmitter<any>();
  public submitted: boolean;
  msgs: Message[] = [];
  optionValuefromDb: any[];
  dropdown_lookupLists: any = {};
  lookupLists: any[] = [];
  dropdown_dbLists: any[] = [];
  value: Date;
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _generalFormsService: GeneralFormsService,
    private _lookupDataService: LookupDataService
  ) {}
  ngOnInit() {
    this.checkLookupForDropdown(this.generalFormId);
  }
  checkLookupForDropdown(id: number) {
      this._generalFormsService
          .GetDropdownValueBasedonFormID(id)
          .subscribe(
          data => {
            this.dropdown_lookupLists = data;
            this.lookupLists = this.dropdown_lookupLists['listoflookups'];
            this.lookupLists.forEach((element: any) => {
              let index = element.lookupid;
              if (!this.dropdown_dbLists[index]) {
                this.dropdown_dbLists[index] = [];
              }
              let grp: any = {};
              element.ldataList.forEach((ele: any) => {
                grp = {
                   key : ele.rowId,
                   value: ele.value
                 };
              this.dropdown_dbLists[index].push(grp);
              });
            });
            this.makeForms();
          });
  }
  makeForms() {
     let group: any = {};
     this.data.forEach((frm: any) => {
        frm['custom_obj'].forEach((element: any) => {
          if (element.fieldType == 'Dropdown') {
            if (element.optionValue) {
              let optionVal = JSON.parse(element.optionValue);
              element.optionValue = optionVal;
            } else {
              let lookupId = element.lookupId;
              let optionVal = JSON.parse(element.optionValue);
              element.optionValue = this.dropdown_dbLists[lookupId];
            }
          } else if (element.fieldType == 'Bit') {
            let optionVal = JSON.parse(element.optionValue);
            element.optionValue = optionVal;
          }
          if (element.fieldType == 'Date') {
              if (element.value !== '') {
                element.value = this.convertDate(element.value);
              }
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
          this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
          return false;
      } else {
        this.childSubmitData.emit(this.form.value);
        this.msgs.push ({severity: 'info', summary: 'Updated', detail: 'Information has been updated successfully!!!'});
      }
  }
  convertDate(inputFormat: any) {
        function pad(s: any) { return (s < 10) ? '0' + s : s; }
        let d = new Date(inputFormat);
        return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join('/');
  }

  stripUndefined (arr: any[]) {
    return arr.reduce(function (result, item) {
      result.push( Array.isArray(item) && !item.length ? this.stripUndefined(item) : item );
      return result;
    }, []);
  }
}