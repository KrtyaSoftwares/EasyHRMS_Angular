import { EmployeeModel } from './../../../models/employeee.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HolidayDetailService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

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

}