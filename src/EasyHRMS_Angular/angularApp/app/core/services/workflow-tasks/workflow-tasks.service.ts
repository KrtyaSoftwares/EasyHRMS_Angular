import { WorkflowTasks } from './../../../models/workflow-tasks/workflow-tasks.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WorkflowTasksService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<WorkflowTasks[]> => {
        return this.http
           .get(this.actionUrl + 'WorkFlowTask/GetAllWorkFlowTask')
           .map(res => <WorkflowTasks[]>res.json());
    }

    public GetSingle = (id: number): Observable<WorkflowTasks> => {
        return this.http
            .get(this.actionUrl + 'WorkFlowTask/GetWorkFlowTaskById/' + id)
            .map(res => <WorkflowTasks>res.json());
    }

    public Add = (data: any): Observable<WorkflowTasks> => {
        let toAdd = JSON.stringify(data);
        return this.http
                    .post(this.actionUrl + 'WorkFlowTask/CreateWorkFlowTask', toAdd, { headers: this.headers })
                    .map(res => <WorkflowTasks>res.json());
    }

    public Update = (id: number, data: any): Observable<WorkflowTasks> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'WorkFlowTask/UpdateWorkFlowTask/' + id, toAdd, { headers: this.headers })
            .map(res => <WorkflowTasks>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'WorkFlowTask/DeleteWorkFlowTaskById/' + id)
            .map(res => <WorkflowTasks>res.json());
    }
}