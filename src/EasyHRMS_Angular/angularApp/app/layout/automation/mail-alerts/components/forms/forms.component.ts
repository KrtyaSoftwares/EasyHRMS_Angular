import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormsService } from './../../../../../core/services/forms/forms.service';
import { FormsModel } from './../../../../../models/forms/forms.model';

import { MailAlertService } from './../../../../../core/services/mail-alert/mail-alert.service';
import { MailAlert } from './../../../../../models/mail-alert/mail-alert.model';

import { TemplatesService } from './../../../../../core/services/templates/templates.service';

import {Message} from 'primeng/primeng';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent implements OnInit {

  _mailAlertModels = new MailAlert();

   form: FormGroup;
   text: string;
   _objMailAlert: any = {};
   _results: any = {};
  _list: any[] = [];
   submitted: boolean;
   msgs: Message[] = [];
   bindId: number;
  _objTemplates: any = {};
  _templateLists: any[] = [];

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formsService: FormsService,
    private _mailAlertService: MailAlertService,
    private _templatesService: TemplatesService,
  ) {
      this.form = fb.group({
          'formName': [this._mailAlertModels.formName, Validators.required],
          'mailAlertName': [this._mailAlertModels.mailAlertName, Validators.required],
          'templateId': [this._mailAlertModels.mailAlertName, Validators.required],
          'fromAddress': [this._mailAlertModels.fromAddress, Validators.required],
          'toAddress': [this._mailAlertModels.toAddress, Validators.required],
          'ccaddress': [this._mailAlertModels.ccaddress, Validators.required],
          'bccaddress': [this._mailAlertModels.bccaddress, Validators.required],
          'replyToAddress': [this._mailAlertModels.replyToAddress, Validators.required],
          'emailSubject': [this._mailAlertModels.emailSubject, Validators.required],
          'message': [this._mailAlertModels.message],
      });
   }

  ngOnInit() {

    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });

    if (this.bindId) {
          this.getMailAlertDataBasedonId(this.bindId);
    }
    this.getAllForms();
    this.getAllTemplates();
  }
  getAllTemplates() {
    this._templatesService
            .GetAll()
            .subscribe(
            data => {
              this._objTemplates = data;
              this._templateLists = this._objTemplates['list'];
            });
  }
  onChange(tempId: any) {
     this._templateLists.forEach((element: any) => {
         if ( tempId == element.id ) {
            this._mailAlertModels.message = element.message;
         }
      });
  }

  getMailAlertDataBasedonId(id: number) {
      this._mailAlertService
            .GetSingle(id)
            .subscribe(
            data => {
              if (data) {
                this._objMailAlert = data;
                if (this._objMailAlert['objMailAlert']) {
                  this._mailAlertModels = this._objMailAlert['objMailAlert'];
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
           this._mailAlertModels.formName = value.formName;
           this._mailAlertModels.mailAlertName = value.mailAlertName;
           this._mailAlertModels.message = value.message;
           this._mailAlertModels.fromAddress = value.fromAddress;
           this._mailAlertModels.toAddress = value.toAddress;
           this._mailAlertModels.ccaddress = value.ccaddress;
           this._mailAlertModels.bccaddress = value.bccaddress;
           this._mailAlertModels.replyToAddress = value.replyToAddress;
           this._mailAlertModels.emailSubject = value.emailSubject;
           if (!this.bindId) {
              this._mailAlertService
                  .Add(this._mailAlertModels)
                  .subscribe(
                  data => {
                    this.msgs = [];
                    this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'Email Template has been added Successfully!!!' } );
                    this._router.navigate(['/automation/mail-alerts']);
                  });
           } else {
              this._mailAlertService
                  .Update(this.bindId, this._mailAlertModels)
                  .subscribe(
                  data => {
                    this.msgs = [];
                    this.msgs.push ( { severity: 'info', summary: 'Update Message', detail: 'Email Template has been Updated Successfully!!!' } );
                    this._router.navigate(['/automation/mail-alerts']);
                  });
            }
        }
  }
}
