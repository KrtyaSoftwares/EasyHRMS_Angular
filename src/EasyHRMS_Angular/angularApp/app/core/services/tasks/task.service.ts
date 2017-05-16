//import { Templates } from './../../../models/templates/templates.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAllTasks = (): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'TaskTemplate/GetAllTaskTemplate')
            .map(res => <any>res.json());
    }

    public GetTasksByTaskId = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'TaskTemplate/GetTaskTemplateById/' + id)
            .map(res => <any>res.json());
    }

    public AddTask = (data: any): Observable<any> => {
        let toAdd = JSON.stringify(data);
        console.log(toAdd);
        return this.http.post(this.actionUrl + 'TaskTemplate/CreateTaskTemplate/', toAdd, { headers: this.headers })
            .map(res => <any>res.json());
    }

    public UpdateTask = (id: number, data: any): Observable<any> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'TaskTemplate/UpdateTaskTemplate/' + id, toAdd, { headers: this.headers })
            .map(res => <any>res.json());
    }

    public DeleteTask = (id: number): Observable<any> => {
        console.log(id);
        return this.http
            .get(this.actionUrl + 'TaskTemplate/DeleteTaskTemplateById/' + id)
            .map(res => <any>res.json());
    }

    // public GetSingle = (id: number): Observable<Templates> => {
    //     return this.http.get(this.actionUrl + id).map(res => <Templates>res.json());
    // }

    // public Add = (thingToAdd: any): Observable<Templates> => {
    //     let toAdd = JSON.stringify({ name: thingToAdd.name });

    //     return this.http.post(this.actionUrl, toAdd, { headers: this.headers }).map(res => <Templates>res.json());
    // }

    // public Update = (id: number, itemToUpdate: any): Observable<Templates> => {
    //     return this.http
    //         .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
    //         .map(res => <Templates>res.json());
    // }

    // public Delete = (id: number): Observable<any> => {
    //     return this.http.delete(this.actionUrl + id);
    // }
}