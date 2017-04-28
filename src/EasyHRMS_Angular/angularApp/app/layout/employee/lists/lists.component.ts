import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee.service';
import { EmployeeModel } from '../../../models/employeee.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {
  result_lists: any = {};
  results: any[] = [];
  constructor(
    private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();
  }
  getAllEmployee() {
       this._employeeService.GetAll()
        .subscribe(
        data => {
           this.result_lists = data;
           this.results = this.result_lists['list'];
        });
  }
}
