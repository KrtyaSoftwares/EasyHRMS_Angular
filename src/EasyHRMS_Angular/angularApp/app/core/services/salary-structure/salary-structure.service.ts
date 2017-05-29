import { SalaryStructureModule } from './../../../models/salary-structure/salary-structure.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SalaryStructureService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<SalaryStructureModule[]> => {
        return this.http
           .get(this.actionUrl + 'SalaryStructure/GetAllSalaryStructure')
           .map(res => <SalaryStructureModule[]>res.json());
    }

    public GetSingle = (id: number): Observable<SalaryStructureModule> => {
        return this.http
            .get(this.actionUrl + 'EmailTemplate/GetEmailTemplateById/' + id)
            .map(res => <SalaryStructureModule>res.json());
    }

    public Add = (data: any): Observable<SalaryStructureModule> => {
        let toAdd = JSON.stringify(data);
        return this.http
                    .post(this.actionUrl + 'EmailTemplate/CreateEmailTemplate', toAdd, { headers: this.headers })
                    .map(res => <SalaryStructureModule>res.json());
    }

    public Update = (id: number, data: any): Observable<SalaryStructureModule> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'EmailTemplate/UpdateEmailTemplate/' + id, toAdd, { headers: this.headers })
            .map(res => <SalaryStructureModule>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'SalaryStructure/DeleteSalaryStructureById/' + id)
            .map(res => <SalaryStructureModule>res.json());
    }
}