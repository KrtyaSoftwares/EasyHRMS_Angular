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
   _objWorkFlow: any = {};

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
    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });
    this.getAllForms();
    this.getAllMailAlert();
    this.getAllTasks();
    this.getAllChecklists();
    if (this.bindId) {
          this.getDataBasedonId(this.bindId);
    }
 }
  getDataBasedonId(id: number) {
    this._workFlowService
            .GetSingle(id)
            .subscribe(
            data => {
              if (data) {
                this._objWorkFlow = data;
                if (this._objWorkFlow['objWorkFlow']) {
                  this._needToSave['WorkFlow'] = this._objWorkFlow['objWorkFlow'];
                  this._needToSave['WorkFlowActions'] = this._objWorkFlow['list'];
                  //Assign Value to Model
                  this._workflow = this._needToSave['WorkFlow'];
                  this._needToSave['WorkFlowActions'].forEach((element: any) => {
                      if (element.action == 'MailAlerts') {
                          let tempMailAlertId = element.mailAlertId;
                          let isChecked = <HTMLInputElement> document.getElementById('mailAlerts_' + tempMailAlertId);
                          if (isChecked != null) {
                            isChecked.checked = true;
                          }
                      } else if (element.action == 'Tasks') {
                          let temptaskId = element.taskId;
                          let isChecked = <HTMLInputElement> document.getElementById('tasks_' + temptaskId);
                          if (isChecked != null) {
                            isChecked.checked = true;
                          }
                      } else if (element.action == 'Checklists') {
                          let tempcheckListId = element.checkListId;
                          let isChecked = <HTMLInputElement> document.getElementById('checkLists_' + tempcheckListId);
                          if (isChecked != null) {
                            isChecked.checked = true;
                          }
                      }
                  });
                } else {
                  this.msgs = [];
                  this.msgs.push({severity : 'error', summary : 'Error Message',  detail : 'Oops!!!Something Went Wrong'});
                }
              }
            });
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

      let MailAlertsValue = null;
      let TasksValue = null;
      let ChecklistsValue = null;
      if (action == 'MailAlerts') {
            MailAlertsValue = target.value;
      } else if (action == 'Tasks') {
            TasksValue = target.value;
      } else if (action == 'Checklists') {
          ChecklistsValue = target.value;
      }

        if (target.checked) {
            let value = target.nextSibling.data.trim();
            let grp = {
                name: value,
                id: 0,
                workFlowId: this.bindId,
                action: action,
                templateId: 0,
                actionOrder: 1,
                mailAlertId: MailAlertsValue,
                taskId: TasksValue,
                checkListId: ChecklistsValue
            };
            this._needToSave['WorkFlowActions'].push(grp);
        } else {
            this.remove(target.value, action);
        }
  }
  remove(id: number, action: any) {
    let array = this._needToSave['WorkFlowActions'];
    for (let i in array) {
         if ( action == 'MailAlerts' ) {
            if (array[i].mailAlertId == id) {
                // remove Action from DB.
                if (array[i].id != 0) {
                    this.removeAction(array[i].id);
                }
                array.splice(i, 1);
                let isChecked = <HTMLInputElement> document.getElementById('mailAlerts_' + id);
                isChecked.checked = false;
                break;
            }
         } else if ( action == 'Tasks' ) {
            if (array[i].taskId == id) {
                // remove Action from DB.
                if (array[i].id != 0) {
                    this.removeAction(array[i].id);
                }
                array.splice(i, 1);
                let isChecked = <HTMLInputElement> document.getElementById('tasks_' + id);
                isChecked.checked = false;
                break;
            }
         } else if ( action == 'Checklists' ) {
            if (array[i].checkListId == id) {
                // remove Action from DB.
                if (array[i].id != 0) {
                    this.removeAction(array[i].id);
                }
                array.splice(i, 1);
                let isChecked = <HTMLInputElement> document.getElementById('checkLists_' + id);
                isChecked.checked = false;
                break;
            }
         }
    }
}
  removeAction(id: number) {
      this._workFlowService
        .DeleteAction(id)
        .subscribe(
        data => {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Delete Message', detail: 'Work Flow Action has been Deleted Successfully!!!' });
        });
  }
  onSubmit(value: any, isValid: boolean) {
      this.submitted = true;
      if (isValid == false) {
          return false;
      } else {
          let cnt = 0;
          let mailAlertsCnt = 0;
          let tasksCnt = 0;
          let checklistsCnt = 0;
          this._needToSave['WorkFlowActions'].forEach((element: any) => {
              if (element.action == 'MailAlerts') {
                  mailAlertsCnt++;
              } else if (element.action == 'Tasks') {
                  tasksCnt++;
              } else if (element.action == 'Checklists') {
                  checklistsCnt++;
              }
          });

          if (mailAlertsCnt == 0) {
            this._mailAlertError = true;
          } else {
              this._mailAlertError = false;
              cnt++;
          }

          if (tasksCnt == 0) {
            this._taskError = true;
          } else {
            this._taskError = false;
              cnt++;
          }

          if (checklistsCnt == 0) {
            this._checkListError = true;
          } else {
            this._checkListError = false;
            cnt++;
          }
         if (cnt == 3) {
            if (!this.bindId) {
             this._needToSave['WorkFlow'] = {
                    name: value.name,
                    description: value.description,
                    formName: value.formName,
                    triggerName: value.triggerName,
                    status: value.status
                }
              this._workFlowService
                .Add(this._needToSave)
                .subscribe(
                data => {
                    this.msgs = [];
                    this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'WorkFlow has been added Successfully!!!' } );
                    this._router.navigate(['/automation/workflows']);
                });
            } else {
                this._workFlowService
                .Update(this.bindId, this._needToSave)
                .subscribe(
                data => {
                    this.msgs = [];
                    this.msgs.push ( { severity: 'info', summary: 'Update Message', detail: 'WorkFlow has been Updated Successfully!!!' } );
                    this._router.navigate(['/automation/workflows']);
                });
            }
         }
    }
  }
}