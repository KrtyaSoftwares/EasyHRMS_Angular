import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-lookup-lists',
  templateUrl: './lookup-lists.component.html'
})
export class LookupListsComponent implements OnInit {
  lookup: number;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }
  ngOnInit() {
     this._route.params.subscribe(params => {
        this.lookup = params['lookup'];
    });
  }
}