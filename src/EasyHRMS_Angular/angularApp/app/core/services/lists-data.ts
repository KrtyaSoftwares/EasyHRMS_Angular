import { Data } from './../../models/data';
import { Configuration } from './../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ListsService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (id: any): Observable<Data[]> => {
        return this.http
                .get(this.actionUrl + 'LookupList/GetLookupListDataByLookupID/' + id)
                .map(res => <Data[]>res.json());
    }

    // public GetSingle = (id: number): Observable<Forms> => {
    //     return this.http
    //         .get(this.actionUrl + 'FormBuilder/GetFBFieldSetByFormID/' + id)
    //         .map(res => <Forms>res.json());
    // }

    // public Add = (id: any, data: any): Observable<Forms> => {
    //     let toAdd = JSON.stringify(data);
    //     return this.http.post(this.actionUrl + 'LookupData/CreateLookupRowData/' + id, toAdd, { headers: this.headers })
    //         .map(res => <Forms>res.json());
    // }

    // public Update = (id: number, itemToUpdate: any): Observable<Forms> => {
    //     return this.http
    //         .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
    //         .map(res => <Forms>res.json());
    // }

    // public Delete = (id: number): Observable<any> => {
    //     return this.http.delete(this.actionUrl + id);
    // }
}