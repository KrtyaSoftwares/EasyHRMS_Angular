import { Templates } from './../../../models/templates/templates.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TemplatesService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<Templates[]> => {
        return this.http
           .get(this.actionUrl + 'EmailTemplate/GetAllEmailTemplate')
           .map(res => <Templates[]>res.json());
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