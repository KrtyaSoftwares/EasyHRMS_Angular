//import { Templates } from './../../../models/templates/templates.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkFlowService {

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
            .get(this.actionUrl + 'WorkFlow/GetAllWorkFlow')
            .map(res => <any>res.json());
    }

    public ChangeWorkflowStatus = (id: number, status: boolean): Observable<any> => {
        //let toAdd = JSON.stringify(let status = status);
        return this.http
            .post(this.actionUrl + 'WorkFlow/UpdateWorkFlowStatus/' + id, status, { headers: this.headers })
            .map(res => <any>res.json());
    }

    //public GetSingle = (id: number): Observable<Templates> => {
    //    return this.http
    //        .get(this.actionUrl + 'EmailTemplate/GetEmailTemplateById/' + id)
    //        .map(res => <Templates>res.json());
    //}

    //public Add = (data: any): Observable<Templates> => {
    //    let toAdd = JSON.stringify(data);
    //    return this.http
    //        .post(this.actionUrl + 'EmailTemplate/CreateEmailTemplate', toAdd, { headers: this.headers })
    //        .map(res => <Templates>res.json());
    //}

    //public Update = (id: number, data: any): Observable<Templates> => {
    //    let toAdd = JSON.stringify(data);
    //    return this.http.post(this.actionUrl + 'EmailTemplate/UpdateEmailTemplate/' + id, toAdd, { headers: this.headers })
    //        .map(res => <Templates>res.json());
    //}

    //public Delete = (id: number): Observable<any> => {
    //    return this.http
    //        .get(this.actionUrl + 'EmailTemplate/DeleteEmailTemplateById/' + id)
    //        .map(res => <Templates>res.json());
    //}
}