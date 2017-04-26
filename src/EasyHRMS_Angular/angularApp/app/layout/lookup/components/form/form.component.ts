import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  rowId: number;
  lookup: number;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }
   ngOnInit() {
     this._route.params.subscribe(params => {
        this.lookup = params['lookup'];
        this.rowId = params['rowId'];
    });
  }
}