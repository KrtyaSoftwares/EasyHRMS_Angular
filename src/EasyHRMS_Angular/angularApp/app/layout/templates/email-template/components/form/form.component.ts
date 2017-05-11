import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormsService } from './../../../../../core/services/forms/forms.service';
import { FormsModel } from './../../../../../models/forms/forms.model';

import { TemplatesService } from './../../../../../core/services/templates/templates.service';
import { Templates } from './../../../../../models/templates/templates.model';

import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  _templatesModels = new Templates();

   form: FormGroup;
   text: string;
   _objEmailTemplate: any = {};
   _results: any = {};
  _list: any[] = [];
   submitted: boolean;
   msgs: Message[] = [];
   bindId: number;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formsService: FormsService,
    private _templatesService: TemplatesService
  ) {
      this.form = fb.group({
          'templateName': [this._templatesModels.templateName, Validators.required],
          'formName': [this._templatesModels.formName, Validators.required],
          'message': [this._templatesModels.message],
      });
   }

  ngOnInit() {

    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });

    if (this.bindId) {
          this.getTemplateDataBasedonId(this.bindId);
    }
    this.getAllForms();
  }
  getTemplateDataBasedonId(id: number) {
      this._templatesService
            .GetSingle(id)
            .subscribe(
            data => {
              if (data) {
                this._objEmailTemplate = data;
                if (this._objEmailTemplate['objEmailTemplate']) {
                  this._templatesModels = this._objEmailTemplate['objEmailTemplate'];
                } else {
                  this.msgs = [];
                  this.msgs.push({severity : 'error', summary : 'Error Message',  detail : 'Oops!!!Something Went Wrong'});
                }
              }
            });
  }
  getAllForms() {
    this._formsService
          .GetAll()
          .subscribe(
          data => {
            this._results = data;
            this._list = this._results['list'];
          });
  }

  onSubmit(value: any, isValid: boolean) {
        this.submitted = true;
        if (isValid == false) {
           return false;
        } else {
           this._templatesModels.templateName = value.templateName;
           this._templatesModels.formName = value.formName;
           this._templatesModels.message = value.message;

           if (!this.bindId) {
              this._templatesService
                  .Add(this._templatesModels)
                  .subscribe(
                  data => {
                    this.msgs = [];
                    this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'Email Template has been added Successfully!!!' } );
                    this._router.navigate(['/templates/email-templates']);
                  });
           } else {
              this._templatesService
                  .Update(this.bindId, this._templatesModels)
                  .subscribe(
                  data => {
                    this.msgs = [];
                    this.msgs.push ( { severity: 'info', summary: 'Update Message', detail: 'Email Template has been Updated Successfully!!!' } );
                    this._router.navigate(['/templates/email-templates']);
                  });

           }
        }
  }
}
