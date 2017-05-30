import { PayrollCategories } from './../../../models/payroll-categories/payroll-categories.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PayrollCategoriesService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {
        this.actionUrl = configuration.Server + 'api/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<PayrollCategories[]> => {
        return this.http
           .get(this.actionUrl + 'EmployeePayrollCategory/GetAllEmployeePayrollCategory')
           .map(res => <PayrollCategories[]>res.json());
    }

    public GetSingle = (id: number): Observable<PayrollCategories> => {
        return this.http
            .get(this.actionUrl + 'EmployeePayrollCategory/GetEmployeePayrollCategoryById/' + id)
            .map(res => <PayrollCategories>res.json());
    }

    public Add = (data: any): Observable<PayrollCategories> => {
        let toAdd = JSON.stringify(data);
        return this.http
                .post(this.actionUrl + 'EmployeePayrollCategory/CreateEmployeePayrollCategory', toAdd, { headers: this.headers })
                .map(res => <PayrollCategories>res.json());
    }

    public Update = (id: number, data: any): Observable<PayrollCategories> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'EmployeePayrollCategory/UpdateEmployeePayrollCategory/' + id, toAdd, { headers: this.headers })
            .map(res => <PayrollCategories>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'EmployeePayrollCategory/DeleteEmployeePayrollCategoryById/' + id)
            .map(res => <PayrollCategories>res.json());
    }
}