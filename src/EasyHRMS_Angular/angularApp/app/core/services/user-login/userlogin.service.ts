//import { LookupDataModel } from './../../../models/lookup/lookup-data.model';
import { Configuration } from './../../../app.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserLoginService {

    private actionUrl: string;
    private headers: Headers;
    public token: string;
    constructor(private http: Http, private configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public Login = (data: any): Observable<any> => {
        //console.log(data.email);
        let userName = data.email;
        let toAdd = JSON.stringify(data);
        //console.log(toAdd);
        return this.http
            .post(this.actionUrl + 'IdentityToken/Login', toAdd, { headers: this.headers })
            .map(res => { //<any>res.json()
                console.log(res);
                if (res.json().state == '-1') {
                    return false;
                } else {
                    if (res.json().state == '1') {
                        this.token = res.json().data.accessToken;
                        if (this.token) {
                            sessionStorage.setItem('currentUser', JSON.stringify({ username: userName, token: this.token }));
                        }
                        return true;
                    }
                    //this._router.navigate(['/selfservice/dashboard']);
                }
            });
    }

    logout(): void {
        this.token = null;
        sessionStorage.removeItem('currentUser');
    }

    //public UserLogin = (data: any): Observable<any> => {
    //   return this.Login(data).map(res => {
    //        if (res.state == '-1') {
    //            return false;
    //        } else {
    //            if (res.state == '1') {
    //                this.token = res.data.accessToken;
    //                if (this.token) {
    //                    localStorage.setItem('currentUser', JSON.stringify({ username: data.email, token: this.token }));
    //                }
    //                return true;
    //            }
    //            //this._router.navigate(['/selfservice/dashboard']);
    //        }
    //    })
    //}

    //public GetLookUpData = (lookupid: number): Observable<any> => {
    //    return this.http
    //        .get(this.actionUrl + 'LookupData/GetLookupDataByLookupID/' + lookupid)
    //        .map(res => res.json());
    //}

    //public GetTableData = (lookup: number, id: number): Observable<Lookup[]> => {
    //     return this.http
    //         .get(this.actionUrl + 'LookupData/GetLRowDataByLRID/' + lookup + '/' + id)
    //         .map(res => <Lookup[]>res.json());
    // }

}