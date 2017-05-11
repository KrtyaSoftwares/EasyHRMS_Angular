import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormsService } from './../../../../../core/services/forms/forms.service';
import { FormsModel } from './../../../../../models/forms/forms.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
   text: string;
   _results: any = {};
  _list: any[] = [];
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _formsService: FormsService
  ) { }

  ngOnInit() {
    this.getAllForms();
  }
  getAllForms() {
    this._formsService
          .GetAll()
          .subscribe(
          data => {
            this._results = data;
            this._list = this._results['list'];
            console.log(this._list);
          });
  }
}
