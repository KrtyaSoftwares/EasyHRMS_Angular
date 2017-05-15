import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { FormsService } from './../../../../../core/services/forms/forms.service';
import { FormsModel } from './../../../../../models/forms/forms.model';

import { ChecklistsService } from './../../../../../core/services/checklist/checklists.service';
import { Checklists } from './../../../../../models/checklist/checklists.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  _checklistsModels = new Checklists();
  _results: any = {};
  _formlist: any[] = [];
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _formsService: FormsService,
  ) {
    this.form = fb.group({
          'checklistName': [this._checklistsModels.checklistName, Validators.required],
          'taskId': [this._checklistsModels.taskId, Validators.required],
          'checklistOrder': [this._checklistsModels.checklistOrder],
          'taskOrder': [this._checklistsModels.taskOrder],
      });
   }

  ngOnInit() {
    this.getAllForms();
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
}
