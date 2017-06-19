import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../common/auth.service';

@Injectable()
export class SelfServiceDashboardService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration, private authService: AuthService) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    //public GetHoliDayDetails = (): Observable<any> => {
    //    return this.http
    //        .get(this.actionUrl + 'SelfServiceDashboard/GetHolidayDetail')
    //        .map(res => <any>res.json());
    //    //return this.authService.authGet(this.actionUrl + 'SelfServiceDashboard/GetHolidayDetail');
    //}
    public GetHoliDayDetails = (): Observable<any> => {
        return this.authService.authGet(this.actionUrl + 'SelfServiceDashboard/GetHolidayDetail');
        //return this.http
        //    .get(this.actionUrl + 'EmployeeLeave/GetAllEmployeeLeave')
        //    .map(res => <any>res.json());
    }
}