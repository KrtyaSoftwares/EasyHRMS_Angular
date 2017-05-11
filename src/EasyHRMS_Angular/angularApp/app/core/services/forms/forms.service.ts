import { FormsModel } from './../../../models/forms/forms.model';
import { Configuration } from './../../../app.constants';
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

    public GetAll = (): Observable<FormsModel[]> => {
        return this.http
           .get(this.actionUrl + 'Forms/GetAllFormDef')
           .map(res => <FormsModel[]>res.json());
    }

    public GetSingle = (id: number): Observable<FormsModel> => {
        return this.http.get(this.actionUrl + id).map(res => <FormsModel>res.json());
    }

    public Add = (thingToAdd: any): Observable<FormsModel> => {
        let toAdd = JSON.stringify({ name: thingToAdd.name });

        return this.http.post(this.actionUrl, toAdd, { headers: this.headers }).map(res => <FormsModel>res.json());
    }

    public Update = (id: number, itemToUpdate: any): Observable<FormsModel> => {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map(res => <FormsModel>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http.delete(this.actionUrl + id);
    }
}