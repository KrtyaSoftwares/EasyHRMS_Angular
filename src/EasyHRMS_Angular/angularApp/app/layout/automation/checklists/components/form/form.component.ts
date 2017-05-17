import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormsService } from './../../../../../core/services/forms/forms.service';
import { FormsModel } from './../../../../../models/forms/forms.model';

import { ChecklistsService } from './../../../../../core/services/checklist/checklists.service';
import { Checklists } from './../../../../../models/checklist/checklists.model';

import { WorkflowTasksService } from './../../../../../core/services/workflow-tasks/workflow-tasks.service';
import { WorkflowTasks } from './../../../../../models/workflow-tasks/workflow-tasks.model';
import { TemplatesService } from './../../../../../core/services/templates/templates.service';
import { EmployeeService } from './../../../../../core/services/employee/employee.service';
import {Message} from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  _checklistsModels = new Checklists();
  _workflowTasks = new WorkflowTasks();
  _results: any = {};
  _formlist: any[] = [];
  form: FormGroup;
  formTasks: FormGroup;
  submitted: boolean;
  _tasksubmitted: boolean;
  bindId: number;
  task_availability = false;
  msgs: Message[] = [];
  _objCheckList: any = {};
  // templates
  _objTemplates: any = {};
  _templateLists: any[] = [];
  // Employee
  _objEmployee: any = {};
  _employeeLists: any[] = [];
  // Tasks
  _objTasks: any = {};
  _tasksLists: any[] = [];

  _objWorkFlowTask: any = {};

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formsService: FormsService,
    private _checklistsService: ChecklistsService,
    private _templatesService: TemplatesService,
    private _workflowTasksService: WorkflowTasksService,
    private _employeeService: EmployeeService,
    private _confirmationService: ConfirmationService,
  ) {
    this.form = fb.group({
          'formName': [this._checklistsModels.formName, Validators.required],
          'checklistName': [this._checklistsModels.checklistName, Validators.required],
          'checklistOrder': [this._checklistsModels.checklistOrder],
      });
    this.formTasks = fb.group({
          'id': [this._workflowTasks.id],
          'taskName': [this._workflowTasks.taskName, Validators.required],
          'description': [this._workflowTasks.description],
          'taskOwner': [this._workflowTasks.taskOwner, Validators.required],
          'dueDate': [this._workflowTasks.dueDate, Validators.required],
          'templateId': [this._workflowTasks.templateId, Validators.required],
          'fromAddress': [this._workflowTasks.fromAddress],
          'toAddress': [this._workflowTasks.toAddress],
          'ccaddress': [this._workflowTasks.ccaddress],
          'bccaddress': [this._workflowTasks.bccaddress],
          'replyToAddress': [this._workflowTasks.replyToAddress],
          'emailSubject': [this._workflowTasks.emailSubject],
          'attachment': [this._workflowTasks.attachment],
          'message': [this._workflowTasks.message],
          'checkListId': [this._workflowTasks.checkListId],
          'taskOrder': [this._workflowTasks.taskOrder],
      });

   }

  ngOnInit() {
    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });

    if (this.bindId) {
         this.task_availability = true;
         this.getCheckListsDataBasedonId(this.bindId);
         this.getAllTemplates();
         this.getAllEmployee();
         this.getAllTasks(this.bindId);
    }
    this.getAllForms();
  }
  editTasks(id: number) {
    this._workflowTasksService
        .GetSingle(id)
        .subscribe(
        data => {
          this._objWorkFlowTask = data;
          this._workflowTasks = this._objWorkFlowTask['objWorkFlowTask'];
          document.getElementById('edit_task_modal').click();
        });
  }
  deleteTasks(id: number) {
      this._confirmationService
          .confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {
                this._workflowTasksService
                    .Delete(id)
                    .subscribe(
                    data => {
                      this.msgs = [];
                      this.msgs.push ( { severity: 'warn', summary: 'Delete Tasks', detail: 'Tasks has been Deleted Successfully!!!' } );
                      this.getAllTasks(this.bindId);
                    });
            }
        });
  }
  getAllTasks(checkedId: number) {
    this._checklistsService
          .GetTaskBasedonCheckID(checkedId)
          .subscribe(
          data => {
            this._objTasks = data;
            this._tasksLists = this._objTasks['list'];
          });
  }
  getAllEmployee() {
    this._employeeService
        .GetAll()
        .subscribe(
        data => {
          this._objEmployee = data;
          this._employeeLists = this._objEmployee['list'];
        });
  }
  onChange(tempId: any) {
     this._templateLists.forEach((element: any) => {
         if ( tempId == element.id ) {
            this._workflowTasks.message = element.message;
         }
      });
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
  getCheckListsDataBasedonId(id: number) {
    this._checklistsService
            .GetSingle(id)
            .subscribe(
            data => {
              if (data) {
                this._objCheckList = data;
                if (this._objCheckList['objCheckList']) {
                  this._checklistsModels = this._objCheckList['objCheckList'];
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
            this._formlist = this._results['list'];
          });
  }
  onSubmit(value: any, isValid: boolean) {
    this.submitted = true;
    if (isValid == false) {
        return false;
    } else {
      this._checklistsModels.formName = value.formName;
      this._checklistsModels.checklistName = value.checklistName;
      this._checklistsModels.checklistOrder = value.checklistOrder;
      if (!this.bindId) {
          this._checklistsService
              .Add(this._checklistsModels)
              .subscribe(
              data => {
                this.msgs = [];
                this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'CheckLists has been added Successfully!!!' } );
                this._router.navigate(['/automation/checklists']);
              });
      } else {
          this._checklistsService
              .Update(this.bindId, this._checklistsModels)
              .subscribe(
              data => {
                this.msgs = [];
                this.msgs.push ( { severity: 'info', summary: 'Update Message', detail: 'CheckLists has been Updated Successfully!!!' } );
                this._router.navigate(['/automation/checklists']);
              });
      }
    }
  }
  onTaskSubmit(value: any, isValid: boolean) {
    this._tasksubmitted = true;
    if (isValid == false) {
        return false;
    } else {
      if (value.id) {
        this._workflowTasks.id = value.id;
      }
      this._workflowTasks.taskName = value.taskName;
      this._workflowTasks.description = value.description;
      this._workflowTasks.taskOwner = value.taskOwner;
      this._workflowTasks.dueDate = value.dueDate;
      this._workflowTasks.templateId = value.templateId;
      this._workflowTasks.fromAddress = value.fromAddress;
      this._workflowTasks.toAddress = value.toAddress;
      this._workflowTasks.ccaddress = value.ccaddress;
      this._workflowTasks.bccaddress = value.bccaddress;
      this._workflowTasks.replyToAddress = value.replyToAddress;
      this._workflowTasks.emailSubject = value.emailSubject;
      this._workflowTasks.attachment = value.attachment;
      this._workflowTasks.message = value.message;
      this._workflowTasks.checkListId = this.bindId;
      this._workflowTasks.taskOrder = value.taskOrder;

      if (!value.id) {
        this._workflowTasksService
          .Add(this._workflowTasks)
          .subscribe(
          data => {
            this.msgs = [];
            this.msgs.push ( { severity: 'info', summary: 'Insert Message', detail: 'Task has been added Successfully!!!' } );
            document.getElementById('close').click();
            this.getAllTasks(this.bindId);
          });
      } else {
        this._workflowTasksService
          .Update(this._workflowTasks.id, this._workflowTasks)
          .subscribe(
          data => {
            this.msgs = [];
            this.msgs.push ( { severity: 'info', summary: 'Update Message', detail: 'Task has been Updated Successfully!!!' } );
            document.getElementById('close').click();
            this.getAllTasks(this.bindId);
          });
      }
    }
  }
}
