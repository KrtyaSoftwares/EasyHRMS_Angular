import { MailAlert } from './../../../models/mail-alert/mail-alert.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailAlertService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAll = (): Observable<MailAlert[]> => {
        return this.http
           .get(this.actionUrl + 'MailAlert/GetAllMailAlert')
           .map(res => <MailAlert[]>res.json());
    }

    public GetSingle = (id: number): Observable<MailAlert> => {
        return this.http
            .get(this.actionUrl + 'MailAlert/GetMailAlertById/' + id)
            .map(res => <MailAlert>res.json());
    }

    public Add = (data: any): Observable<MailAlert> => {
        let toAdd = JSON.stringify(data);
        return this.http
                    .post(this.actionUrl + 'MailAlert/CreateMailAlert', toAdd, { headers: this.headers })
                    .map(res => <MailAlert>res.json());
    }

    public Update = (id: number, data: any): Observable<MailAlert> => {
        let toAdd = JSON.stringify(data);
        return this.http.post(this.actionUrl + 'MailAlert/UpdateMailAlert/' + id, toAdd, { headers: this.headers })
            .map(res => <MailAlert>res.json());
    }

    public Delete = (id: number): Observable<any> => {
        return this.http
            .get(this.actionUrl + 'MailAlert/DeleteMailAlertById/' + id)
            .map(res => <MailAlert>res.json());
    }
}