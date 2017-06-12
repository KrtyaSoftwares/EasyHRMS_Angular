import { Templates } from './../../../models/templates/templates.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../common/auth.service';

@Injectable()
export class TemplatesService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration, private authService: AuthService) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    //public GetAll = (): Observable<Templates[]> => {
    //    return this.http
    //       .get(this.actionUrl + 'EmailTemplate/GetAllEmailTemplate')
    //       .map(res => <Templates[]>res.json());
    //}
    public GetAll = (): Observable<Templates[]> => {
        return this.authService.authGet(this.actionUrl + 'EmailTemplate/GetAllEmailTemplate/')
        //return this.http
        //    .get(this.actionUrl + 'EmailTemplate/GetAllEmailTemplate')
        //    .map(res => <Templates[]>res.json());
    }

    public GetSingle = (id: number): Observable<Templates> => {
        return this.http
            .get(this.actionUrl + 'EmailTemplate/GetEmailTemplateById/' + id)
            .map(res => <Templates>res.json());
    }

    public Add = (data: any): Observable<Templates> => {
        let toAdd = JSON.stringify(data);
        return this.authService.authPost(this.actionUrl + 'EmailTemplate/CreateEmailTemplate', toAdd)
        //return this.http
        //            .post(this.actionUrl + 'EmailTemplate/CreateEmailTemplate', toAdd, { headers: this.headers })
        //            .map(res => <Templates>res.json());
    }

    public Update = (id: number, data: any): Observable<Templates> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'EmailTemplate/UpdateEmailTemplate/' + id, toAdd, { headers: this.headers })
            .map(res => <Templates>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'EmailTemplate/DeleteEmailTemplateById/' + id)
            .map(res => <Templates>res.json());
    }
}