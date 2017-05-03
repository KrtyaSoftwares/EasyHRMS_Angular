import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-general-formbuilder',
  templateUrl: './general-formbuilder.component.html',
})
export class GeneralFormbuilderComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log('here');
  }
}