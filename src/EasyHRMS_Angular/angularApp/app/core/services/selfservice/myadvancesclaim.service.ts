//import { EmployeeLeaveModel } from './../../../models/employee/employeeleave.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyadvancesclaimService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    public GetAll = (): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'EmployeeClaimAdvanceRequest/GetAllEmployeeClaimAdvanceRequest')
            .map(res => <any>res.json());
    }

    //public GetAllEmployeeLeave = (): Observable<any> => {
    //    return this.http
    //        .get(this.actionUrl + 'EmployeeClaimAdvanceRequest/GetAllEmployeeClaimAdvanceRequest')
    //        .map(res => <any>res.json());
    //}

    //public GetById = (id: number): Observable<any> => {
    //    return this.http
    //        .get(this.actionUrl + 'EmployeeClaimAdvanceRequest/GetEmployeeClaimAdvanceRequestById/' + id)
    //        .map(res => <any>res.json());
    //}

    //public Add = (data: any): Observable<any> => {
    //    let toAdd = JSON.stringify(data);
    //    //console.log(toAdd);
    //    return this.http.post(this.actionUrl + 'EmployeeClaimAdvanceRequest/CreateEmployeeClaimAdvanceRequest/', toAdd, { headers: this.headers })
    //        .map(res => <any>res.json());
    //}

    //public Update = (id: number, data: any): Observable<any> => {
    //    let toAdd = JSON.stringify(data);
    //    //console.log(toAdd);
    //    return this.http.post(this.actionUrl + 'EmployeeClaimAdvanceRequest/UpdateEmployeeClaimAdvanceRequest/' + id, toAdd, { headers: this.headers })
    //        .map(res => <any>res.json());
    //}

    //public Delete = (id: number): Observable<any> => {
    //    //console.log(id);
    //    return this.http
    //        .get(this.actionUrl + 'EmployeeClaimAdvanceRequest/DeleteEmployeeClaimAdvanceRequestById/' + id)
    //        .map(res => <any>res.json());
    //}


}