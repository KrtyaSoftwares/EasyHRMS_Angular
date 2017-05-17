import { Checklists } from './../../../models/checklist/checklists.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChecklistsService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<Checklists[]> => {
        return this.http
           .get(this.actionUrl + 'CheckList/GetAllCheckList')
           .map(res => <Checklists[]>res.json());
    }

    public GetSingle = (id: number): Observable<Checklists> => {
        return this.http
            .get(this.actionUrl + 'CheckList/GetCheckListById/' + id)
            .map(res => <Checklists>res.json());
    }

    public GetTaskBasedonCheckID = (id: number): Observable<Checklists> => {
        return this.http
            .get(this.actionUrl + 'CheckList/GetCheckListWithTasksById/' + id)
            .map(res => <Checklists>res.json());
    }
    public Add = (data: any): Observable<Checklists> => {
        let toAdd = JSON.stringify(data);
        return this.http
                    .post(this.actionUrl + 'CheckList/CreateCheckList', toAdd, { headers: this.headers })
                    .map(res => <Checklists>res.json());
    }

    public Update = (id: number, data: any): Observable<Checklists> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'CheckList/UpdateCheckList/' + id, toAdd, { headers: this.headers })
            .map(res => <Checklists>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'CheckList/DeleteCheckListById/' + id)
            .map(res => <Checklists>res.json());
    }
}