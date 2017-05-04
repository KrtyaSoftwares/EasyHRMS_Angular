import { EmployeeModel } from './../../../models/employeee.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyprofileService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAllEmployee = (): Observable<EmployeeModel[]> => {
        return this.http
            .get(this.actionUrl + 'EmployeeDetails/getAllEmployee')
            .map(res => <EmployeeModel[]>res.json());
    }
    public GetEmployeeDetailById = (id: number): Observable<EmployeeModel[]> => {
        return this.http
            .get(this.actionUrl + 'EmployeeDetails/GetEmployeeByID/' + id)
            .map(res => <EmployeeModel[]>res.json());
    }

}