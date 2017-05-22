import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormsService } from './../../../../../core/services/forms/forms.service';
import { FormsModel } from './../../../../../models/forms/forms.model';
import { MailAlertService } from './../../../../../core/services/mail-alert/mail-alert.service';
import { WorkFlowService } from './../../../../../core/services/workflow/workflow.service';
import { TaskService } from './../../../../../core/services/tasks/task.service';
import { ChecklistsService } from './../../../../../core/services/checklist/checklists.service';
import { Workflow } from './../../../../../models/workflow/workflow.model';
import { TaskModel } from './../../../../../models/tasks/task.model';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
    _workflow = new Workflow();
    form: FormGroup;
   text: string;
   _results: any = {};
   _list: any[] = [];

   // list of Mail Alert
   _mailAlertResults: any = {};
   _mailAlertList: any[] = [];

   // list of Tasks
   _tasksResults: any = {};
   _tasksList: any[] = [];

   // list of CheckLists
   _checkListsResults: any = {};
   _checkLists: any[] = [];

   submitted: boolean;
   msgs: Message[] = [];
   bindId: number;

   _mailAlertError: boolean;
   _taskError: boolean;
   _checkListError: boolean;

   _mailAlertSelectedValue: any[] = [];
   _taskSelectedValue: any[] = [];
   _checkListSelectedValue: any[] = [];

   _needToSave: any = {};
   

constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formsService: FormsService,
    private _workFlowService: WorkFlowService,
    private _mailAlertService: MailAlertService,
    private _taskService: TaskService,
    private _checklistsService: ChecklistsService,
  ) {
       this.form = fb.group({
          'name': [this._workflow.name, Validators.required],
          'description': [this._workflow.description],
          'formName': [this._workflow.formName, Validators.required],
          'triggerName': [this._workflow.triggerName],
          'status': [this._workflow.status],
       });
       this._needToSave['WorkFlowActions'] = [];
   }

   ngOnInit() {
    this.getAllForms();
    this.getAllMailAlert();
    this.getAllTasks();
    this.getAllChecklists();
  }
  getAllMailAlert() {
      this._mailAlertService
          .GetAll()
          .subscribe(
          data => {
            this._mailAlertResults = data;
            this._mailAlertList = this._mailAlertResults['list'];
          });
  }
  getAllTasks() {
    this._taskService
        .GetAllTasks()
        .subscribe(
        data => {
            this._tasksResults = data;
            this._tasksList = this._tasksResults['list'];
        });
  }
  getAllChecklists() {
    this._checklistsService
          .GetAll()
          .subscribe(
          data => {
            this._checkListsResults = data;
            this._checkLists = this._checkListsResults['list'];
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
  handleChange(action: any, evt: any) {
      this._mailAlertError = false;
      this._taskError = false;
      this._checkListError = false;

      let target = evt.target;
      if (action == 'mailAlert') {
        if (target.checked) {
            let value = target.nextSibling.data.trim();
            let grp = {
                id: target.value,
                value: value
            };
            this._mailAlertSelectedValue.push(grp);
            let grpSave = {
                action: 'MailAlerts',
                actionOrder: 1,
                mailAlertId: target.value
            };
            this._needToSave['WorkFlowActions'].push(grp);
        } else {
            this.remove(this._mailAlertSelectedValue, target.value);
        }
      } else if (action == 'tasks') {
         if (target.checked) {
            let value = target.nextSibling.data.trim();
            let grp = {
                id: target.value,
                value: value
            };
            this._taskSelectedValue.push(grp);
            let grpSave = {
                action: 'tasks',
                actionOrder: 1,
                mailAlertId: target.value
            };
            this._needToSave['WorkFlowActions'].push(grp);
        } else {
            this.remove(this._taskSelectedValue, target.value);
        }
      } else if (action == 'checklist') {
          if (target.checked) {
            let value = target.nextSibling.data.trim();
            let grp = {
                id: target.value,
                value: value
            };
            this._checkListSelectedValue.push(grp);
            let grpSave = {
                action: 'checklist',
                actionOrder: 1,
                mailAlertId: target.value
            };
            this._needToSave['WorkFlowActions'].push(grp);
        } else {
            this.remove(this._checkListSelectedValue, target.value);
        }
      }
  }
  remove(array: any, id: number) {
    for (let i in array) {
        if (array[i].id == id) {
            array.splice(i, 1);
            break;
        }
    }
}
  onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
          return false;
      } else {
          let cnt = 0;

          if (this._mailAlertSelectedValue.length == 0) {
            this._mailAlertError = true;
          } else {
              this._mailAlertError = false;
              cnt++;
          }

          if (this._taskSelectedValue.length == 0) {
            this._taskError = true;
          } else {
            this._taskError = false;
              cnt++;
          }

          if (this._checkListSelectedValue.length == 0) {
            this._checkListError = true;
          } else {
            this._checkListError = false;
            cnt++;
          }
          if (cnt == 3) {
            this._needToSave['WorkFlow'] = {
                name: value.name,
                description: value.description,
                formName: value.formName,
                triggerName: value.triggerName,
                status: value.status
            }
            
            
            
            console.log(this._needToSave);
          }
    }
  }
}