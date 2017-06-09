import { EmployeeSalaryModel } from './../../../models/employee-salary/employee-salary.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeSalaryService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<EmployeeSalaryModel[]> => {
        return this.http
           .get(this.actionUrl + 'EmployeePayrollSalaryDetail/GetEmployeeSalaryDetailsList')
           .map(res => <EmployeeSalaryModel[]>res.json());
    }
    public GetSalaryStructure = (id: number): Observable<EmployeeSalaryModel> => {
        return this.http
            .get(this.actionUrl + 'EmployeePayrollSalaryDetail/GetEmployeePayrollSalaryDetailByEmployeeId/' + id)
            .map(res => <EmployeeSalaryModel>res.json());
    }

    public Add = (data: any): Observable<EmployeeSalaryModel> => {
        let toAdd = JSON.stringify(data);
        return this.http
                .post(this.actionUrl + 'EmployeePayrollSalaryDetail/CreateUpdateEmployeePayrollSalaryDetail', toAdd, { headers: this.headers })
                .map(res => <EmployeeSalaryModel>res.json());
    }

    public Update = (id: number, data: any): Observable<EmployeeSalaryModel> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'EmployeePayrollCategory/UpdateEmployeePayrollCategory/' + id, toAdd, { headers: this.headers })
            .map(res => <EmployeeSalaryModel>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'EmployeePayrollCategory/DeleteEmployeePayrollCategoryById/' + id)
            .map(res => <EmployeeSalaryModel>res.json());
    }
}