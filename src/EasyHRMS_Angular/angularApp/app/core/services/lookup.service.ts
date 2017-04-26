import { Lookup } from './../../models/lookup';
import { Configuration } from './../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LookupService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<Lookup[]> => {
        return this.http
            .get(this.actionUrl + 'Lookups/getAllLookups')
            .map(res => <Lookup[]>res.json());
    }

//    public GetSingle = (id: number): Observable<Lookup> => {
//         return this.http
//             .get(this.actionUrl + 'FormBuilder/GetFBFieldSetByFormID/' + id)
//             .map(res => <Lookup>res.json());
//     }
//     public GetTableData = (lookup: number, id: number): Observable<Lookup> => {
//         return this.http
//             .get(this.actionUrl + 'LookupData/GetLRowDataByLRID/' + lookup + '/' + id)
//             .map(res => <Lookup>res.json());
//     }

//     public Add = (id: any, data: any): Observable<Lookup> => {
//         let toAdd = JSON.stringify(data);
//         return this.http.post(this.actionUrl + 'LookupData/CreateLookupRowData/' + id, toAdd, { headers: this.headers })
//             .map(res => <Lookup>res.json());
//     }

//     public Update = (id: number, data: any): Observable<Lookup> => {
//         let toAdd = JSON.stringify(data);
//         return this.http.post(this.actionUrl + 'LookupData/UpdateLookupRowData/' + id, toAdd, { headers: this.headers })
//             .map(res => <Lookup>res.json());
//     }
//     public Delete = (lookup: number, rowId: number): Observable<Lookup> => {
//         return this.http
//             .get(this.actionUrl + 'LookupData/DeleteLookupRowData/' + lookup + '/' + rowId)
//             .map(res => <Lookup>res.json());
//     }
}