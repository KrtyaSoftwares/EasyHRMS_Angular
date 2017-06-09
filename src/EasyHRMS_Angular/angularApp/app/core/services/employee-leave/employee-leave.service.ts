import { EmployeeLeaveModel } from './../../../models/employee-leave/employee-leave.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeLeaveService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<EmployeeLeaveModel[]> => {
        return this.http
           .get(this.actionUrl + 'EmployeeLeaveDetail/GetEmployeeLeaveDetailList')
           .map(res => <EmployeeLeaveModel[]>res.json());
    }
    public GetSalaryStructure = (id: number): Observable<EmployeeLeaveModel> => {
        return this.http
            .get(this.actionUrl + 'EmployeePayrollSalaryDetail/GetEmployeePayrollSalaryDetailByEmployeeId/' + id)
            .map(res => <EmployeeLeaveModel>res.json());
    }

    public Add = (data: any): Observable<EmployeeLeaveModel> => {
        let toAdd = JSON.stringify(data);
        return this.http
                .post(this.actionUrl + 'EmployeePayrollCategory/CreateEmployeePayrollCategory', toAdd, { headers: this.headers })
                .map(res => <EmployeeLeaveModel>res.json());
    }

    public Update = (id: number, data: any): Observable<EmployeeLeaveModel> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'EmployeePayrollCategory/UpdateEmployeePayrollCategory/' + id, toAdd, { headers: this.headers })
            .map(res => <EmployeeLeaveModel>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'EmployeePayrollCategory/DeleteEmployeePayrollCategoryById/' + id)
            .map(res => <EmployeeLeaveModel>res.json());
    }
}