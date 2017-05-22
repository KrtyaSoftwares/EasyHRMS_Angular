import { Workflow } from './../../../models/workflow/workflow.model';
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

    public GetSingle = (id: number): Observable<Workflow> => {
       return this.http
           .get(this.actionUrl + 'WorkFlow/GetWorkFlowWithActionsByWFID/' + id)
           .map(res => <Workflow>res.json());
    }

    public Add = (data: any): Observable<Workflow> => {
       let toAdd = JSON.stringify(data);
       return this.http
           .post(this.actionUrl + 'WorkFlow/CreateWorkFlowWithActions', toAdd, { headers: this.headers })
           .map(res => <Workflow>res.json());
    }

    public Update = (id: number, data: any): Observable<Workflow> => {
       let toAdd = JSON.stringify(data);
       return this.http.post(this.actionUrl + 'WorkFlow/UpdateWorkFlowWithActions/' + id, toAdd, { headers: this.headers })
           .map(res => <Workflow>res.json());
    }

    public Delete = (id: number): Observable<any> => {
       return this.http
           .get(this.actionUrl + 'WorkFlow/DeleteWorkFlowById/' + id)
           .map(res => <Workflow>res.json());
    }

    public DeleteAction = (id: number): Observable<any> => {
       return this.http
           .get(this.actionUrl + 'WorkFlow/DeleteWorkFlowActionById/' + id)
           .map(res => <Workflow>res.json());
    }
}