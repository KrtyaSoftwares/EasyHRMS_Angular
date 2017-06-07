import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Message } from 'primeng/primeng';

@Injectable()
export class AuthService {

    auth_email: string;
    auth_token: string;
    auth_role: string;
    auth_id: string;
    customer_servicer_id: string;
    customer_servicer_urlname: string;
    // store the URL so we can redirect after logging in
    redirectUrl: string;
    currentUser: any;
    msgs: Message[] = [];

    constructor(
        private http: Http
    ) { }

    login(user:any) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.auth_email = user.username;
        this.auth_token = user.token;
        //this.auth_role = user.role;
        //this.auth_id = user._id;
    }

    isLoggedIn() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (this.currentUser) {
            //this.setBodyClass();
            return true;
        }
        else return false;
    }

    //setBodyClass() {
    //    var bodytag = document.getElementsByTagName('body')[0];
    //    bodytag.removeAttribute("class");
    //    bodytag.setAttribute('class', "body-gray");
    //}

    //removeBodyClass() {
    //    var bodytag = document.getElementsByTagName('body')[0];
    //    bodytag.removeAttribute("class");
    //    bodytag.setAttribute('class', "body-gray body-pdt60");
    //}

    getLoginUser() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.auth_email = this.currentUser.username;
        this.auth_token = this.currentUser.token;
        //this.auth_role = this.currentUser.role;
        //this.auth_id = this.currentUser._id;
        return this.currentUser;

    }

    //getUserProfile(user_data) {
    //    this.customer_servicer_id = user_data._id;
    //    this.customer_servicer_urlname = user_data.urlname;
    //}

    logout(): void {
        //this.removeBodyClass();
        localStorage.removeItem('currentUser');
        this.auth_email = '';
        this.auth_token = '';
        //this.auth_role = '';
        //this.auth_id = '';
        //this.customer_servicer_id = '';
        //this.customer_servicer_urlname = '';
    }

    authPost(url: string, body: any, headers: any): Observable<any> {
        //let headers = this.initAuthHeaders();
        if (JSON.parse(sessionStorage.getItem('currentUser')) != null) {
            this.auth_token = JSON.parse(sessionStorage.getItem('currentUser')).token;
        }
        headers.append('Authorization', "Bearer " + this.auth_token);
        return this.http.post(url, body, { headers: headers }).map(response => {
            if (response.status == 200) {
                response.json()
            } else if (response.status == 401) {
                this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
            }
        });
        //return this.http.post(url, body, { headers: headers }).toPromise()
        //    .then(response => response.json() as RequestResult)
        //    .catch(this.handleError);
    }

    authGet(url: string, headers: any): Observable<any> {
        //let headers = this.initAuthHeaders();
        if (JSON.parse(sessionStorage.getItem('currentUser')) != null) {
            this.auth_token = JSON.parse(sessionStorage.getItem('currentUser')).token;
        }
        headers.append('Authorization', "Bearer " + this.auth_token);
        return this.http.get(url, { headers: headers }).map(response => {
            if (response.status == 200) {
                response.json()
            } else if (response.status == 401) {
                this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User is not Valid' });
            }
        });
        //return this.http.get(url, { headers: headers }).toPromise()
        //    .then(response => response.json() as RequestResult)
        //    .catch(this.handleError);
    }
}