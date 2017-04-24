import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  public lookup = 2;
  constructor() {
  }
}