import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TemplatesService } from './../../../../core/services/templates/templates.service';
import { Templates } from './../../../../models/templates/templates.model';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
})
export class EmailTemplateComponent implements OnInit {
  _results: any = {};
  _list: any[] = [];
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _templatesService: TemplatesService
  ) { }

  ngOnInit() {
    this.getAllTemplates();
  }
  getAllTemplates() {
    this._templatesService
          .GetAll()
          .subscribe(
          data => {
            this._results = data;
            this._list = this._results['list'];
            console.log(this._list);
          });
  }
  delete(id: number) {
    //console.log(id);
  }
}
