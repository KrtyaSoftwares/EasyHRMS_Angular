import { LeaveStructureModel } from './../../../models/leave-structure/leave-structure.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LeaveStructureService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAllDepartmentData = (id: number): Observable<LeaveStructureModel> => {
        return this.http
            .get(this.actionUrl + 'LeaveStructure/GetLookupDepartmentDataByLookupID/' + id)
            .map(res => <LeaveStructureModel>res.json());
    }
    public GetAll = (): Observable<LeaveStructureModel[]> => {
        return this.http
           .get(this.actionUrl + 'LeaveStructure/GetAllLeaveStructure')
           .map(res => <LeaveStructureModel[]>res.json());
    }

    public GetSingle = (id: number): Observable<LeaveStructureModel> => {
        return this.http
            .get(this.actionUrl + 'LeaveStructure/GetLeaveStructureById/' + id)
            .map(res => <LeaveStructureModel>res.json());
    }

    public Add = (data: any): Observable<LeaveStructureModel> => {
        let toAdd = JSON.stringify(data);
        return this.http
                    .post(this.actionUrl + 'LeaveStructure/CreateLeaveStructure', toAdd, { headers: this.headers })
                    .map(res => <LeaveStructureModel>res.json());
    }

    public Update = (id: number, data: any): Observable<LeaveStructureModel> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'LeaveStructure/UpdateLeaveStructure/' + id, toAdd, { headers: this.headers })
            .map(res => <LeaveStructureModel>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'LeaveStructure/DeleteLeaveStructureById/' + id)
            .map(res => <LeaveStructureModel>res.json());
    }
}