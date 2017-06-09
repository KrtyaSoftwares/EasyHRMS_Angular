import { EmployeeLeaveModel } from './../../../models/employee/employeeleave.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../common/auth.service';

@Injectable()
export class MyLeaveService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration, private authService: AuthService) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    //public GetTableData = (lookup: number, id: number): Observable<Lookup[]> => {
    //     return this.http
    //         .get(this.actionUrl + 'LookupData/GetLRowDataByLRID/' + lookup + '/' + id)
    //         .map(res => <Lookup[]>res.json());
    // }

    //public GetAllEmployeeLeave = (): Observable<any> => {
    //    return this.http
    //        .get(this.actionUrl + 'EmployeeLeave/GetAllEmployeeLeave')
    //        .map(res => <any>res.json());
    //}

    public GetAllEmployeeLeave = (): Observable<any> => {
        return this.authService.authGet(this.actionUrl + 'EmployeeLeave/GetAllEmployeeLeave')
        //return this.http
        //    .get(this.actionUrl + 'EmployeeLeave/GetAllEmployeeLeave')
        //    .map(res => <any>res.json());
    }

    public GetEmployeeLeaveByEmployeeId = (id: number): Observable<any> => {
        return this.authService.authGet(this.actionUrl + 'EmployeeLeave/GetEmployeeLeaveByEmployeeId/' + id)
        //return this.http
        //    .get(this.actionUrl + 'EmployeeLeave/GetEmployeeLeaveByEmployeeId/' + id)
        //    .map(res => <any>res.json());
    }

    public AddEmployeeLeave = (data: any): Observable<any> => {
        let toAdd = JSON.stringify(data);
        console.log(toAdd);
        return this.http.post(this.actionUrl + 'EmployeeLeave/CreateEmployeeLeave/', toAdd, { headers: this.headers })
            .map(res => <any>res.json());
    }

    public DeleteEmployeeLeave = (id: number): Observable<any> => {
        console.log(id);
        return this.http
            .get(this.actionUrl + 'EmployeeLeave/DeleteEmployeeLeaveByID/' + id)
            .map(res => <any>res.json());
    }

    //public GetleavesData = (leaveid: number): Observable<any> => {
    //    return this.http
    //        .get(this.actionUrl + 'EmployeeLeave/GetEmployeeLeaveByEmployeeLeaveID/' + lookupid)
    //        .map(res => res.json());
    //}

}