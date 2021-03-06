import { GeneralFormsModel } from './../../../models/general/general-froms.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeneralFormsService {

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
    public GetSingle = (id: number): Observable<GeneralFormsModel> => {
        return this.http
            .get(this.actionUrl + 'Forms/GetAllFormDefByFormID/' + id)
            .map(res => <GeneralFormsModel>res.json());
    }
    public GetFormData = (id: number): Observable<GeneralFormsModel> => {
        return this.http
            .get(this.actionUrl + 'EmployeeDetails/GetEmployeeByID/' + id)
            .map(res => <GeneralFormsModel>res.json());
    }
    public GetDropdownValueBasedonFormID = (id: number): Observable<GeneralFormsModel> => {
        return this.http
            .get(this.actionUrl + 'LookupData/GetLookupDataByFormIDInBulk/' + id)
            .map(res => <GeneralFormsModel>res.json());
    }

    public Add = (data: any, url: any): Observable<GeneralFormsModel> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + url, toAdd, { headers: this.headers })
            .map(res => <GeneralFormsModel>res.json());
    }

    public Update = (id: number, data: any, url: any): Observable<GeneralFormsModel> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + url + id, toAdd, { headers: this.headers })
            .map(res => <GeneralFormsModel>res.json());
    }
    public Delete = (Id: number, url: any): Observable<GeneralFormsModel> => {
        return this.http
            .get(this.actionUrl + url + '/' + Id)
            .map(res => <GeneralFormsModel>res.json());
    }
}