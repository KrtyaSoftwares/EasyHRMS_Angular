import { Forms } from './../../models/forms';
import { Configuration } from './../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormsService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    // public GetAll = (): Observable<Forms[]> => {
    //     return this.http.post(this.actionUrl + 'all/', '', { headers: this.headers })
    //     .map((response: Response) => <Thing[]>response.json());
    // }

    public GetSingle = (id: number): Observable<Forms> => {
        return this.http
            .get(this.actionUrl + 'LookupFormBuilder/GetFBFieldSetByFormID/' + id)
            .map(res => <Forms>res.json());
    }
    public GetTableData = (lookup: number, id: number): Observable<Forms> => {
        return this.http
            .get(this.actionUrl + 'LookupData/GetLRowDataByLRID/' + lookup + '/' + id)
            .map(res => <Forms>res.json());
    }

    public Add = (id: any, data: any): Observable<Forms> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'LookupData/CreateLookupRowData/' + id, toAdd, { headers: this.headers })
            .map(res => <Forms>res.json());
    }

    public Update = (id: number, data: any): Observable<Forms> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'LookupData/UpdateLookupRowData/' + id, toAdd, { headers: this.headers })
            .map(res => <Forms>res.json());
    }
    public Delete = (lookup: number, rowId: number): Observable<Forms> => {
        return this.http
            .get(this.actionUrl + 'LookupData/DeleteLookupRowData/' + lookup + '/' + rowId)
            .map(res => <Forms>res.json());
    }
}