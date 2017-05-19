import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormsService } from './../../../../../core/services/forms/forms.service';
import { FormsModel } from './../../../../../models/forms/forms.model';

//import { TaskService } from './../../../../../core/services/tasks/task.service';
import { WorkFlowService } from './../../../../../core/services/workflow/workflow.service';
import { TaskModel } from './../../../../../models/tasks/task.model';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    _taskmodel = new TaskModel();
    form: FormGroup;
   text: string;
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
    private _workFlowService: WorkFlowService
  ) {
       //this.form = fb.group({
       //    'templateName': [this._taskmodel.templateName, Validators.required],
       //    'formName': [this._taskmodel.formName, Validators.required],
       //    'taskName': [this._taskmodel.taskName],
       //    'description': [this._taskmodel.description],
       //    'priority': [this._taskmodel.priority, Validators.required],
       //    'taskOwner': [this._taskmodel.taskOwner, Validators.required],
       //    'dueDate': [this._taskmodel.dueDate, Validators.required],
       //});
   }

   ngOnInit() {
       //get URLid
       this._route.params.subscribe(
           (param: any) => {
               this.bindId = param['id'];
           });

       if (this.bindId) {
           this.getWorkFlowDataById(this.bindId);
       }

    this.getAllForms();
  }
  getAllForms() {
    this._formsService
          .GetAll()
          .subscribe(
          data => {
            this._results = data;
            this._list = this._results['list'];
            //console.log(this._list);
          });
  }

  getWorkFlowDataById(id: number) {
      //this._workFlowService
      //    .GetTasksByTaskId(id)
      //    .subscribe(
      //    data => {
      //        if (data) {
      //            if (data.objTaskTemplate) {
      //                this._taskmodel = data.objTaskTemplate;
      //            } else {
      //                this.msgs = [];
      //                this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Oops!!!Something Went Wrong' });
      //            }
      //        }
      //    });
  }

  onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
          return false;
      } else {
          //this._templatesModels.templateName = value.templateName;
          //this._templatesModels.formName = value.formName;
          //this._templatesModels.message = value.message;

          if (!this.bindId) {
              //this._workFlowService
              //    .AddTask(this._taskmodel)
              //    .subscribe(
              //    data => {
              //        this.msgs = [];
              //        this.msgs.push({ severity: 'info', summary: 'Insert Message', detail: 'Task Template has been added Successfully!!!' });
              //        this._router.navigate(['/automation/tasks']);
              //    });
          } else {
              //this._workFlowService
              //    .UpdateTask(this.bindId, this._taskmodel)
              //    .subscribe(
              //    data => {
              //        this.msgs = [];
              //        this.msgs.push({ severity: 'info', summary: 'Update Message', detail: 'Task Template has been Updated Successfully!!!' });
              //        this._router.navigate(['/automation/tasks']);
              //    });

          }
      }
  }



}
