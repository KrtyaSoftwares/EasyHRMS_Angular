import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl  } from '@angular/forms';

import { SalaryStructureService } from './../../../../../core/services/salary-structure/salary-structure.service';
import { SalaryStructureModule } from './../../../../../models/salary-structure/salary-structure.model';

import { Message, SelectItem } from 'primeng/primeng';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  _salaryStructureModule = new SalaryStructureModule();
  //form: FormGroup;
  submitted: boolean;
  msgs: Message[] = [];
  bindId: number;

  cars: SelectItem[];
  selectedCars: string[] = [];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _salaryStructureService: SalaryStructureService
  ) {
      this.cars = [];
      this.cars.push({label: 'Audi', value: 'Audi'});
      this.cars.push({label: 'BMW', value: 'BMW'});
      this.cars.push({label: 'Fiat', value: 'Fiat'});
      this.cars.push({label: 'Ford', value: 'Ford'});
      this.cars.push({label: 'Honda', value: 'Honda'});
      this.cars.push({label: 'Jaguar', value: 'Jaguar'});
      this.cars.push({label: 'Mercedes', value: 'Mercedes'});
      this.cars.push({label: 'Renault', value: 'Renault'});
      this.cars.push({label: 'VW', value: 'VW'});
      this.cars.push({label: 'Volvo', value: 'Volvo'});
}

  ngOnInit() {
    //get URLid
    this._route.params.subscribe(
        (param: any) => {
            this.bindId = param['id'];
    });
    this.getAllCategories();
  }
  getCategoryDataBasedonId(id: number) {
    this._salaryStructureService
        .GetSingle(id)
        .subscribe(
        data => {
        })
  }
  getAllCategories() {
    this._salaryStructureService
        .GetAll()
        .subscribe(
        data => {
        });
  }
}